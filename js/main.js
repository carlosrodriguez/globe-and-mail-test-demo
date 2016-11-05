/**
 * Recommender widgets
 *
 * @author  Andre Collin & Frank Yang
 * @desc    Recommender main script
 *          Parse the HTML to find recommender widgets
 *          Then make proper API call and display data
 *
*/



(function(win,$) {

	// function to retrieve visitor ID from
	// cookie names 's_'
	// returns visitor ID
	function getVisitorID(){
        // get visid from s properties, if not set, get it from cookie
      var visid= s.marketingCloudVisitorID;
      console.log("vis id : " + visid);
      if(visid == undefined) {
        if (util.getCookie('AMCV_02A4210654EF032A0A4C98A7%40AdobeOrg')) {
          var cookie = util.getCookie('AMCV_02A4210654EF032A0A4C98A7%40AdobeOrg');
            // if cookie value is not set, return visid as undefined string
          if (cookie == "1" || cookie == 1) {
            visid = "undefined"
          }
          else {
              // if visid not found in piped string, return undefined as string
            visid='undefined'
            var visidStrs = cookie.split('|');
            for (var i = 0; i < visidStrs.length; i++) {
              if (visidStrs[i] == "MCMID" && i+1<visidStrs.length) {
                visid = visidStrs[i + 1];
                  break;
              }
            }
          }
        }
        else {
          visid = "undefined";
        }
      }
        return visid;
	}



  // function to hide preloader
  function hidePreloader(){
    $('.recommenderLoader').hide();
  }


	// function to parse HTML and search for widgets
	// then build object with all needed specs
	// returns an object containing :
	//		* html for each row to be added
	//		* ID of the widget
	//		* name of the view to send to recommender API
  //    * various parameters needed for API call
	//		* array of all vars taken from html using function arrayOfCurlyVariable

	function parseRecommenderWidgets(){

		// function that extracts double curly braces {{variable}}
		// from the widget html
		// returns array of unique variables
		function arrayOfCurlyVariable( html ){
			var found = [],
			    rxp = /{{([^}]+)}}/g,
			    curMatch;
			while( curMatch = rxp.exec( html ) ) {
			  if (found.indexOf( curMatch[1] ) == -1){
          found.push( curMatch[1] );
        }
			}
			return found;
		}

    // parse HTML to retrieve data and store it in the object
		var myBuildingObject = [];
		$( '.recommenderWidget' ).each(function(index){
			var container = $(this);
      container.attr('data-rank',index);
      var myWidget = {
				'html':	container.html(),
				'widgetID': container.attr( 'id' ),
        'context': container.data( 'context' ),
        'view': container.data( 'view' ),
        'limit': container.data( 'limit' ),
        'includeRead': container.data( 'includeread' ),
        'contentTypes': container.data( 'contenttypes' ),
        'minContentAge': container.data( 'mincontentage' ),
				'maxContentAge': container.data( 'maxcontentage' ),
				'includeSections': container.data( 'includesections' ),
				'excludeSections': container.data( 'excludesections' ),
        'platform': container.data( 'platform' ),
        'imgSize': container.data( 'imgsize' ),
        'vars':arrayOfCurlyVariable(container.html())
			};
			myBuildingObject.push(myWidget);
		});
		return myBuildingObject;

	}

  // function that take widgets data and
  // returns an Ajax premise
	function getData(buildingObject){

    var widgetParameters = [];

    //listOfWidgetsType=[];
    //if (key != 0) widgetParameters.listOfWidgetsType += ',';
		$.each(buildingObject, function(key,val){
      var widgetParameter={
        'widget_id': val.widgetID
        ,'context' : val.context
        ,'limit' : val.limit
        ,'include_read' : val.includeRead
        ,'include_content_types' : val.contentTypes
        ,'include_sections' : val.includeSections
        ,'exclude_sections' : val.excludeSections
        ,'min_content_age' : val.minContentAge
        ,'max_content_age' : val.maxContentAge
        ,'platform' : val.platform
        ,'width' : (val.imgSize != '')? val.imgSize:false
        ,'rank': (key+1)
        ,'last_content_ids' : ($g_conf && $g_conf.current && $g_conf.current.articleId)?$g_conf.current.articleId:''
      }
      widgetParameters.push(widgetParameter);
    });
    var APIparameters = {
      'visitor_id':getVisitorID(),
      'platform':platform,
      'sub_requests':widgetParameters
    };
    // return $.ajax({
    //   url: recommendationServer+'recommendations',
    //   type: 'POST',
    //   dataType: 'json',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   data: JSON.stringify(APIparameters)
    // })
  }

  // make an API call and return premise
  // then return a premise containing a list of articles ready to parse

	function processData(data){

    // function to display one widget
    // will be used on start-up and also
    // when refresh widget
    function displayWidget(widgetData, parseObjectKey){

      var val = parseObject[parseObjectKey]
          ,target = $('#'+val.widgetID)
          ,vars = val.vars
          ,view = val.view
          ,row = val.html
          ,requestID = data[parseObjectKey].request_id
          ,pos = 0;
      target.empty();
      // loop through articles and replace {{vars}} with values
      $.each(widgetData, function(rowID, articleData){
        var re = '',
            insertRow = row,
            dateFormat = 'dddd, MMM. D, YYYY, h:mmA z';
        pos++;
        $.each(vars, function(i,variable){
          re = new RegExp('{{'+variable+'}}','gi');
          if (variable == 'pos'){
            insertRow = insertRow.replace(re, pos);
          }
          else if (variable == 'image_url_return'){
            if (articleData.image_url_return !== undefined) {
              var imageServer = 'http://beta.images.theglobeandmail.com/';
              var imageVersion = Object.keys(articleData.image_url_return[0]);
              var imagePath = 'src=\"' + imageServer + articleData.image_url_return[0][imageVersion] + "\"";
              insertRow = insertRow.replace(re, imagePath);
            } else {
              insertRow = insertRow.replace(re, 'style=\"display:none;\"');
            }
          }
          else if (variable == 'alttext' && articleData.picture_rel !== undefined){
            insertRow = insertRow.replace(re,articleData.picture_rel[0].alttext);
          }
          else if (variable == 'caption' && articleData.picture_rel !== undefined){
            insertRow = insertRow.replace(re,articleData.picture_rel[0].caption);
          }
          else if (variable == 'published_at'){
            if (adv.gpt_mobile) {
              dateFormat = 'dddd, MMM. D, YYYY';
            }
            insertRow = insertRow.replace(re, moment(articleData[variable]).tz('America/Toronto').format(dateFormat));
          }
          else if (variable == 'request_id') {
            insertRow = insertRow.replace(re,data[parseObjectKey].request_id);
          }
          else if (variable == 'article_sprite') {
            if (articleData.content_type == 'gallery') {
              insertRow = insertRow.replace(re, '<span class="sprite gallery-s"></span>');
            } else if (articleData.content_type == 'vmevideo') {
              insertRow = insertRow.replace(re, '<span class="sprite video-s"><span></span></span>');
            } else {
              insertRow = insertRow.replace(re, '');
            }
          }
          else {
           insertRow = insertRow.replace(re, articleData[variable]);
          }
        });
        target.append(insertRow);

      })
      // add hidden refresh button
      target.append('<div class="recoRefresh"><span class="gmicon-update" /><button class="btn btn_light">Refresh list of recommendations</button></div>');
      // add close button
      target.find('article').prepend('<span class="recoClose gmicon-x" />');
      target.addClass('display');
    }

    // function to refresh the list of a widget
    function refreshWidget(thisWidget){
      var   thisWidgetID = thisWidget.attr('id')
            ,thisParseObjectIndex = thisWidget.data('rank')
            ,thisPreloader = thisWidget.find(".recoRefresh")
            ,refreshParam = {
              'visitor_id' : getVisitorID()
              , 'platform': platform
              , 'sub_requests':[{
                  'widget_id' : thisWidgetID
                  ,'last_content_ids' : ($g_conf && $g_conf.current && $g_conf.current.articleId)?$g_conf.current.articleId:''
                  ,'context' :thisWidget.data('context')
                  ,'limit' : thisWidget.data('limit')
                  ,'include_read' : thisWidget.data( 'includeread' )
                  ,'include_content_types' : thisWidget.data( 'contenttypes' )
                  ,'include_sections' : thisWidget.data( 'includesections' )
                  ,'exclude_sections' : thisWidget.data( 'excludesections' )
                  ,'min_content_age' : thisWidget.data( 'mincontentage' )
                  ,'max_content_age' : thisWidget.data( 'maxcontentage' )
                  ,'platform' : thisWidget.data( 'platform' )
                  ,'width' : (thisWidget.data( 'imgsize' ) != '')? thisWidget.data( 'imgsize' ):false
                  ,'rank' : '1'
                }]
            };
      thisWidget.removeClass('display');
      thisPreloader.addClass('loadingApi');
      $.ajax({
        url: recommendationServer+'recommendations',
        type: 'POST',
        dataType: 'json',
        headers:{
          'Content-Type':'application/json'
        },
        data: JSON.stringify(refreshParam)
      })
      .done(function(data){
        // retrieve parseObject key
        displayWidget(data[0].recommendations, thisParseObjectIndex);
      })
      .fail(function(){
        thisPreloader.removeClass('loadingApi');
      })
    }

    // fill up each widget with data from API
    $.each(parseObject, function(key,val){

//      reco link override for local recommender URLs and link tracking
//      data[key].recommendations[0].url = '/report-on-business/economy/canadas-economy-grows-03-in-october-faster-than-forecast/article22185876/';

      var widgetData = data[key].recommendations;
      displayWidget(widgetData, key);
    });

    // display all the widgets, make 'Learn More' tool tip visible
    $('.recommender--learnMore').css('visibility','visible');

    // add click event to give feedback to reco API
    // and then close story
    $(".recommenderWidget").delegate(".recoClose",'click',function(){
      var   thisCloseButton = $(this),
            thisArticleID = thisCloseButton.parents("article").attr('id'),
            thisWidget = thisCloseButton.parents(".recommenderWidget"),
            thisWidgetID = thisWidget.attr('id'),
            thisArticleLine =  $('#line-'+thisWidgetID+'-'+thisArticleID);

      var ratingParam={
        'visitor_id':getVisitorID(),
        'article_id':thisArticleID,
       // 'last_content_ids':($g_conf && $g_conf.current && $g_conf.current.articleId)?$g_conf.current.articleId:'',
        'like':false
      };
      $.ajax({
        url: recommendationServer+'rating',
        type: 'POST',
        dataType: 'json',
        headers:{
          'Content-Type':'application/json'
        },
        data: JSON.stringify(ratingParam)
      }).done(function(data){
        //console.log(data);
        thisArticleLine.fadeOut(350,function(){
          this.remove();
          thisWidget.find(".recoRefresh").show();
          // if we just deleted the last story, refresh the widget
          if (thisWidget.find('article').length == 0){
            refreshWidget(thisWidget);
          }
        });
      })
      .fail(function(){
        console.log("Error sending dislike request to the API")
      })
    })

    // add click event to refresh stories
    $(".recommenderWidget").delegate(".recoRefresh",'click',function(){
      var   thisRefreshButton = $(this)
            ,thisWidget = thisRefreshButton.parents(".recommenderWidget");
      refreshWidget(thisWidget);
    });

    // add click event to toggle tool tip
    $(".recommender--learnMore").on('click', function(){
      $(this).find('.recommender--toolTip').toggle();
    });

    hidePreloader();
	}




	var parseObject = parseRecommenderWidgets();
	var recoApiCall = getData(parseObject).done(function(data){
    processData(data);
  }).fail(function(){
    hidePreloader();
      // instead of displaying error message on page, log error message
      console.log("Error retrieving data from the recommendation API");
  })

})(window,jQuery);

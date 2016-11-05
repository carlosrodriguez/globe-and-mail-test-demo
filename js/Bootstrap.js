(function ensightenInit() {
    var ensightenOptions = { client: "globeandmail", clientId: 1224, publishPath: "prod", isPublic: 1, serverComponentLocation: "nexus.ensighten.com/globeandmail/prod/serverComponent.php", staticJavascriptPath: "nexus.ensighten.com/globeandmail/prod/code/", ns: 'Bootstrapper', nexus: "nexus.ensighten.com", scUseCacheBuster: "true", enableTagAuditBeacon: "false", enablePagePerfBeacon: "false", registryNs: "ensBootstraps", generatedOn: "Thu Nov 03 19:07:12 GMT 2016", beaconSamplingSeedValue: 11 };
    if (!window[ensightenOptions.ns]) {
        window[ensightenOptions.registryNs] || (window[ensightenOptions.registryNs] = {});
        window[ensightenOptions.registryNs][ensightenOptions.ns] = window[ensightenOptions.ns] = function(g) {
            function m(a) { this.name = "DependencyNotAvailableException";
                this.message = "Dependency with id " + a + "is missing" }

            function n(a) { this.name = "BeaconException";
                this.message = "There was an error durring beacon initialization";
                a = a || {};
                this.lineNumber = a.lineNumber || a.line;
                this.fileName = a.fileName }

            function p() {
                for (var a = b.dataDefinitionIds.length, e = !0, d = 0; d < a; d++) {
                    var c = b.dataDefinitions[b.dataDefinitionIds[d]];
                    if (!c ||
                        null == c.endRegistration) { e = !1;
                        break }
                }
                e && b.callOnDataDefintionComplete()
            }
            var c = {},
                b = {};
            b.ensightenOptions = ensightenOptions;
            b.scDataObj = {};
            c.version = "1.26.0";
            c.nexus = g.nexus || "nexus.ensighten.com";
            c.rand = -1;
            c.currSec = (new Date).getSeconds();
            c.options = {
                interval: g.interval || 100,
                erLoc: g.errorLocation || c.nexus + "/error/e.gif",
                scLoc: g.serverComponentLocation || c.nexus + "/" + g.client + "/serverComponent.php",
                sjPath: g.staticJavascriptPath || c.nexus + "/" + g.client + "/code/",
                alLoc: g.alertLocation || c.nexus + "/alerts/a.gif",
                publishPath: g.publishPath,
                isPublic: g.isPublic,
                client: g.client,
                clientId: g.clientId,
                enableTagAuditBeacon: g.enableTagAuditBeacon,
                scUseCacheBuster: g.scUseCacheBuster,
                beaconSamplingSeedValue: g.beaconSamplingSeedValue || -1
            };
            c.ruleList = [];
            c.allDeploymentIds = [];
            c.runDeploymentIds = [];
            c.exceptionList = [];
            c.ensightenVariables = {};
            c.test = function(a) {
                if (!(a.executionData.hasRun || a.executionData.runTime && 0 < a.executionData.runTime.length)) {
                    for (var b = 0; b < a.dependencies.length; b++)
                        if (!1 === a.dependencies[b]()) return;
                    a.execute()
                }
            };
            m.prototype = Error();
            m.prototype || (m.prototype = {});
            m.prototype.constructor = m;
            c.DependencyNotAvailableException = m;
            n.prototype = Error();
            n.prototype || (n.prototype = {});
            n.prototype.constructor = n;
            c.BeaconException = n;
            c.checkForInvalidDependencies = function(a, e, d, l) {
                for (a = 0; a < d.length; a++)
                    if ("DEPENDENCYNEVERAVAILABLE" === d[a]) return b.currentRuleId = this.id, b.currentDeploymentId = this.deploymentId, b.reportException(new c.DependencyNotAvailableException(l[a])), e && -1 !== e && c.allDeploymentIds.push(e), !0;
                return !1
            };
            b.currentRuleId = -1;
            b.currentDeploymentId = -1;
            b.reportedErrors = [];
            b.reportedAlerts = [];
            b.AF = [];
            b._serverTime = "";
            b._clientIP = "";
            b.sampleBeacon = function() {
                var a = !1;
                try {
                    var b = (c.currSec || 0) % 20,
                        d = c.options.beaconSamplingSeedValue; - 1 === d ? a = !0 : 0 !== b && 0 === d % b && (a = !0) } catch (l) {}
                return a };
            b.getServerComponent = function(a) { b.callOnGetServerComponent();
                b.insertScript(window.location.protocol + "//" + c.options.scLoc, !1, a || !0, c.options.scUseCacheBuster) };
            b.setVariable = function(a, b) {
                c.ensightenVariables[a] =
                    b
            };
            b.getVariable = function(a) {
                return a in c.ensightenVariables ? c.ensightenVariables[a] : null };
            b.testAll = function() {
                for (var a = 0; a < c.ruleList.length; a++) c.test(c.ruleList[a]) };
            b.executionState = { DOMParsed: !1, DOMLoaded: !1, dataDefinitionComplete: !1, conditionalRules: !1, readyForServerComponent: !1 };
            b.reportException = function(a) {
                a.timestamp = (new Date).getTime();
                c.exceptionList.push(a);
                a = window.location.protocol + "//" + c.options.erLoc + "?msg=" + encodeURIComponent(a.message || "") + "&lnn=" + encodeURIComponent(a.lineNumber ||
                    a.line || -1) + "&fn=" + encodeURIComponent(a.fileName || "") + "&cid=" + encodeURIComponent(c.options.clientId || -1) + "&client=" + encodeURIComponent(c.options.client || "") + "&publishPath=" + encodeURIComponent(c.options.publishPath || "") + "&rid=" + encodeURIComponent(b.currentRuleId || -1) + "&did=" + encodeURIComponent(b.currentDeploymentId || -1) + "&errorName=" + encodeURIComponent(a.name || "");
                a = b.imageRequest(a);
                a.timestamp = (new Date).getTime();
                this.reportedErrors.push(a)
            };
            b.Rule = function(a) {
                this.execute = function() {
                    this.executionData.runTime.push(new Date);
                    b.currentRuleId = this.id;
                    b.currentDeploymentId = this.deploymentId;
                    try { this.code() } catch (a) { window[ensightenOptions.ns].reportException(a) } finally { this.executionData.hasRun = !0, -1 !== this.deploymentId && c.runDeploymentIds.push(this.deploymentId), b.testAll() }
                };
                this.id = a.id;
                this.deploymentId = a.deploymentId;
                this.dependencies = a.dependencies || [];
                this.code = a.code;
                this.executionData = { hasRun: !1, runTime: [] }
            };
            b.registerRule = function(a) {
                if (b.getRule(a.id) && -1 !== a.id) return !1;
                c.ruleList.push(a); - 1 !== a.deploymentId &&
                    c.allDeploymentIds.push(a.deploymentId);
                b.testAll();
                return !0
            };
            b.getRule = function(a) {
                for (var b = 0; b < c.ruleList.length; b++)
                    if (c.ruleList[b].id === a) return c.ruleList[b];
                return !1 };

            b.getAllDeploymentIds = function() {
                return c.allDeploymentIds };
            b.getRunDeploymentIds = function() {
                return c.runDeploymentIds };
            b.hasRuleRun = function(a) {
                return (a = b.getRule(a)) ? a.executionData.hasRun : !1 };
            c.toTwoChar = function(a) {
                return (2 === a.toString().length ?
                    "" : "0") + a
            };
            b.Alert = function(a) {
                var b = new Date,
                    b = b.getFullYear() + "-" + c.toTwoChar(b.getMonth()) + "-" + c.toTwoChar(b.getDate()) + " " + c.toTwoChar(b.getHours()) + ":" + c.toTwoChar(b.getMinutes()) + ":" + c.toTwoChar(b.getSeconds());
                this.severity = a.severity || 1;
                this.subject = a.subject || "";
                this.type = a.type || 1;
                this.ruleId = a.ruleId || -1;
                this.severity = encodeURIComponent(this.severity);
                this.date = encodeURIComponent(b);
                this.subject = encodeURIComponent(this.subject);
                this.type = encodeURIComponent(this.type) };
            b.generateAlert = function(a) {
                a =
                    b.imageRequest(window.location.protocol + "//" + c.options.alLoc + "?d=" + a.date + "&su=" + a.subject + "&se=" + a.severity + "&t=" + a.type + "&cid=" + c.options.clientId + "&client=" + c.options.client + "&publishPath=" + c.options.publishPath + "&rid=" + b.currentRuleId + "&did=" + b.currentDeploymentId);
                a.timestamp = (new Date).getTime();
                this.reportedAlerts.push(a)
            };
            b.imageRequest = function(a) {
                var b = new Image(0, 0);
                b.src = a;
                return b };
            b.insertScript = function(a, e, d, l) {
                var h = document.getElementsByTagName("script"),
                    f;
                l = void 0 !== l ? l : !0;
                if (void 0 !==
                    e ? e : 1)
                    for (f = 0; f < h.length; f++)
                        if (h[f].src === a && h[f].readyState && /loaded|complete/.test(h[f].readyState)) return;
                if (d) {
                    d = 1 == d && "object" == typeof b.scDataObj ? b.scDataObj : d;
                    c.rand = Math.random() * ("1E" + (10 * Math.random()).toFixed(0));
                    e = window.location.href;
                    "object" === typeof d && d.PageID && (e = d.PageID, delete d.PageID);
                    if ("object" === typeof d)
                        for (f in d) {
                            f = ~e.indexOf("#") ? e.slice(e.indexOf("#"), e.length) : "";
                            e = e.slice(0, f.length ? e.length - f.length : e.length);
                            e += ~e.indexOf("?") ? "&" : "?";
                            for (k in d) e += k + "=" + d[k] + "&";
                            e = e.slice(0, -1) + f;
                            break
                        }
                    a += "?";
                    l && (a += "r=" + c.rand + "&");
                    a += "ClientID=" + encodeURIComponent(c.options.clientId) + "&PageID=" + encodeURIComponent(e)
                }(function(a, b, e) {
                    var d = b.head || b.getElementsByTagName("head");
                    setTimeout(function() {
                        if ("item" in d) {
                            if (!d[0]) { setTimeout(arguments.callee, 25);
                                return }
                            d = d[0] }
                        // var a = b.createElement("script");
                        // a.src = e;
                        // a.onload = a.onerror = function() { this.addEventListener && (this.readyState = "loaded") };
                        // d.insertBefore(a, d.firstChild) 
                    }, 0) })(window, document, a)
            };
            b.loadScriptCallback = function(a,
                b, d) {
                var c = document.getElementsByTagName("script"),
                    h;
                d = c[0];
                for (h = 0; h < c.length; h++)
                    if (c[h].src === a && c[h].readyState && /loaded|complete/.test(c[h].readyState)) try { b() } catch (f) { window[ensightenOptions.ns].reportException(f) } finally {
                        return }
                    c = document.createElement("script");
                c.type = "text/javascript";
                c.async = !0;
                c.src = a;
                c.onerror = function() { this.addEventListener && (this.readyState = "loaded") };
                c.onload = c.onreadystatechange = function() {
                    if (!this.readyState || "complete" === this.readyState || "loaded" === this.readyState) {
                        this.onload =
                            this.onreadystatechange = null;
                        this.addEventListener && (this.readyState = "loaded");
                        try { b.call(this) } catch (a) { window[ensightenOptions.ns].reportException(a) }
                    }
                };
                // d.parentNode.insertBefore(c, d)
            };
            b.unobtrusiveAddEvent = function(a, b, d) {
                try {
                    var c = a[b] ? a[b] : function() {};
                    a[b] = function() { d.apply(this, arguments);
                        return c.apply(this, arguments) } } catch (h) { window[ensightenOptions.ns].reportException(h) } };
            b.anonymous = function(a, e) {
                return function() {
                    try { b.currentRuleId = e ? e : "anonymous", a() } catch (d) { window[ensightenOptions.ns].reportException(d) } } };
            b.setCurrentRuleId = function(a) { b.currentRuleId = a };
            b.setCurrentDeploymentId = function(a) { b.currentDeploymentId = a };
            b.bindImmediate = function(a, e, d) {
                if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: d || -1, dependencies: [], code: a });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a) };
            b.bindDOMParsed = function(a, e, d) {
                if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: d || -1, dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.DOMParsed }], code: a });
                else if ("object" !==
                    typeof a) return !1;
                b.registerRule(a)
            };
            b.bindDOMLoaded = function(a, e, d) {
                if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: d || -1, dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.DOMLoaded }], code: a });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a) };
            b.bindPageSpecificCompletion = function(a, e, d) {
                if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: d || -1, dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.conditionalRules }], code: a });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindOnGetServerComponent = function(a, e, d) {
                if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: d || -1, dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.readyForServerComponent }], code: a });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a) };
            b.bindDataDefinitionComplete = function(a, e, d) {
                if ("function" === typeof a) a = new b.Rule({
                    id: e || -1,
                    deploymentId: d || -1,
                    dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.dataDefinitionComplete }],
                    code: a
                });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.checkHasRun = function(a) {
                if (0 === a.length) return !0;
                for (var e, d = 0; d < a.length; ++d)
                    if (e = b.getRule(parseInt(a[d], 10)), !e || !e.executionData.hasRun) return !1;
                return !0 };
            b.bindDependencyImmediate = function(a, e, d, l, h) {
                var f = [];
                if (!c.checkForInvalidDependencies(e, l, d, h)) {
                    f.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d) });
                    if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: l || -1, dependencies: f, code: a });
                    else if ("object" !==
                        typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyDOMLoaded = function(a, e, d, l, h) {
                var f = [];
                if (!c.checkForInvalidDependencies(e, l, d, h)) { f.push(function() {
                        return window[ensightenOptions.ns].executionState.DOMLoaded });
                    f.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d) });
                    if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: l || -1, dependencies: f, code: a });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a) } };
            b.bindDependencyDOMParsed = function(a, e, d, l, h) {
                var f = [];
                if (!c.checkForInvalidDependencies(e,
                        l, d, h)) { f.push(function() {
                        return window[ensightenOptions.ns].executionState.DOMParsed });
                    f.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d) });
                    if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: l || -1, dependencies: f, code: a });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a) }
            };
            b.bindDependencyPageSpecificCompletion = function(a, e, d, l, h) {
                var f = [];
                if (!c.checkForInvalidDependencies(e, l, d, h)) {
                    f.push(function() {
                        return window[ensightenOptions.ns].executionState.conditionalRules });
                    f.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d) });
                    if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: l || -1, dependencies: f, code: a });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyOnGetServerComponent = function(a, e, d, l, h) {
                var f = [];
                if (!c.checkForInvalidDependencies(e, l, d, h)) {
                    f.push(function() {
                        return window[ensightenOptions.ns].executionState.readyForServerComponent });
                    f.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d) });
                    if ("function" ===
                        typeof a) a = new b.Rule({ id: e || -1, deploymentId: l || -1, dependencies: f, code: a });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyPageSpecificCompletion = function(a, e, d, l, h) {
                var f = [];
                if (!c.checkForInvalidDependencies(e, l, d, h)) {
                    f.push(function() {
                        return window[ensightenOptions.ns].executionState.dataDefinitionComplete });
                    f.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d) });
                    if ("function" === typeof a) a = new b.Rule({ id: e || -1, deploymentId: l || -1, dependencies: f, code: a });
                    else if ("object" !==
                        typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.dataDefintionIds = [];
            b.dataDefinitions = [];
            b.pageSpecificDataDefinitionsSet = !1;
            b.setPageSpecificDataDefinitionIds = function(a) {
                for (var e = a.length, d = 0; d < e; d++) {
                    var c = a[d];
                    if (Array.prototype.indexOf) - 1 == b.dataDefinitionIds.indexOf(c) && b.dataDefinitionIds.push(c);
                    else {
                        for (var h = !1, f = b.dataDefinitionIds.length, g = 0; g < f; g++)
                            if (b.dataDefinitionIds[g] === c) { h = !0;
                                break }
                        h || b.dataDefinitionIds.push(c) } }
                b.pageSpecificDataDefinitionsSet = !0;
                p() };
            b.DataDefinition = function(a, b) {
                this.id =
                    a;
                this.registrationFn = b;
                this.endRegistrationTime = this.startRegistrationTime = null;
                this.startRegistration = function() { this.startRegistrationTime = new Date };
                this.endRegistration = function() { this.endRegistrationTime = new Date }
            };
            b.registerDataDefinition = function(a, e) {
                var d = b.dataDefinitions[e];
                d || (d = new b.DataDefinition(e, a), b.dataDefinitions[e] = d);
                d.startRegistrationTime || (d.startRegistration(), d.registrationFn(), d.endRegistration());
                b.pageSpecificDataDefinitionsSet && p() };
            b.callOnDataDefintionComplete = function() {
                b.executionState.dataDefinitionComplete = !0;
                b.testAll()
            };
            b.callOnDOMParsed = function() { window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].testAll() };
            b.callOnDOMLoaded = function() { window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].executionState.DOMLoaded = !0;
                window[ensightenOptions.ns].testAll() };
            b.callOnPageSpecificCompletion = function() {
                for (var a = document.getElementsByTagName("script"), b = 0, d = a.length; b < d; b++)
                    if (a[b].src.match(/\.ensighten\.com\/(.+?)\/code\/.*/i) && "loaded" !=
                        a[b].readyState && "complete" != a[b].readyState) { setTimeout(window[ensightenOptions.ns].callOnPageSpecificCompletion, 50);
                        return }
                setTimeout(function() { window[ensightenOptions.ns].executionState.conditionalRules = !0;
                    window[ensightenOptions.ns].testAll() }, 1)
            };
            b.callOnGetServerComponent = function() { window[ensightenOptions.ns].executionState.readyForServerComponent = !0;
                window[ensightenOptions.ns].testAll() };
            b.hasDOMParsed = function() {
                return window[ensightenOptions.ns].executionState.DOMParsed };
            b.hasDOMLoaded =
                function() {
                    return window[ensightenOptions.ns].executionState.DOMLoaded };
            b.hasPageSpecificCompletion = function() {
                return window[ensightenOptions.ns].executionState.conditionalRules };
            var q = function() {
                var a = [],
                    b = !1,
                    d = !1;
                return { add: function(c) { b && !d ? c() : "function" == typeof c && (a[a.length] = c) }, exec: function() { d = !0;
                        do {
                            var c = a;
                            a = [];
                            b = !0;
                            for (var g = 0; g < c.length; g++) try { c[g].call(window) } catch (f) { window[ensightenOptions.ns].reportException(f) } } while (0 < a.length);
                        d = !1 }, haveRun: function() {
                        return b } } };
            b.new_fArray =
                function() {
                    return q() };
            c.timer = null;
            (function() {
                function a(a, b) {
                    return function() { a.apply(b, arguments) } }
                window.console || (window.console = {});
                var b = window.console;
                if (!b.log)
                    if (window.log4javascript) {
                        var c = log4javascript.getDefaultLogger();
                        b.log = a(c.info, c);
                        b.debug = a(c.debug, c);
                        b.info = a(c.info, c);
                        b.warn = a(c.warn, c);
                        b.error = a(c.error, c) } else b.log = function() {};
                b.debug || (b.debug = b.log);
                b.info || (b.info = b.log);
                b.warn || (b.warn = b.log);
                b.error || (b.error = b.log) })();
            document.addEventListener ? (-1 < navigator.userAgent.indexOf("AppleWebKit/") ?
                c.timer = window.setInterval(function() { /loaded|interactive|complete/.test(document.readyState) && (clearInterval(c.timer), b.callOnDOMParsed()) }, 50) : document.addEventListener("DOMContentLoaded", b.callOnDOMParsed, !1), window.addEventListener("load", b.callOnDOMLoaded, !1)) : (setTimeout(function() {
                var a = window.document;
                (function() {
                    try {
                        if (!document.body) throw "continue";
                        a.documentElement.doScroll("left") } catch (b) { setTimeout(arguments.callee, 15);
                        return }
                    window[ensightenOptions.ns].callOnDOMParsed() })() }, 1), window.attachEvent("onload",
                function() { window[ensightenOptions.ns].callOnDOMLoaded() }));
            "true" === c.options.enableTagAuditBeacon && b.sampleBeacon() && window.setTimeout(function() {
                if (window[ensightenOptions.ns] && !window[ensightenOptions.ns].mobilePlatform) try {
                    for (var a = [], e, d, l, h, f = 0; f < c.ruleList.length; ++f) d = c.ruleList[f], l = d.executionData.hasRun ? "1" : "0", h = d.deploymentId.toString() + "|" + d.id.toString() + "|" + l, a.push(h);
                    e = "[" + a.join(";") + "]";
                    var m = window.location.protocol + "//" + c.nexus + "/" + encodeURIComponent(g.client) + "/" + encodeURIComponent(g.publishPath) +
                        "/TagAuditBeacon.rnc?cid=" + encodeURIComponent(g.clientId) + "&data=" + e + "&idx=0&r=" + c.rand;
                    b.imageRequest(m)
                } catch (n) { b.currentRuleId = -1, b.currentDeploymentId = -1, a = new c.BeaconException(n), window[ensightenOptions.ns].reportException(a) }
            }, 3E3);
            window.setInterval(b.testAll, c.options.interval);
            return b
        }(ensightenOptions);
        "true" === ensightenOptions.enablePagePerfBeacon && window[ensightenOptions.ns] && window[ensightenOptions.ns].sampleBeacon() && window[ensightenOptions.ns].bindDOMParsed(function() {
            if (!window[ensightenOptions.ns].mobilePlatform) {
                var g = window.performance;
                if (g) {
                    var g = g.timing || {},
                        m = "",
                        n = g.navigationStart || 0,
                        p, c = {
                            connectEnd: "ce",
                            connectStart: "cs",
                            domComplete: "dc",
                            domContentLoadedEventEnd: "dclee",
                            domContentLoadedEventStart: "dcles",
                            domInteractive: "di",
                            domLoading: "dl",
                            domainLookupEnd: "dle",
                            domainLookupStart: "dls",
                            fetchStart: "fs",
                            loadEventEnd: "lee",
                            loadEventStart: "les",
                            redirectEnd: "rede",
                            redirectStart: "reds",
                            requestStart: "reqs",
                            responseStart: "resps",
                            responseEnd: "respe",
                            secureConnectionStart: "scs",
                            unloadEventStart: "ues",
                            unloadEventEnd: "uee"
                        },
                        m = "&ns=" + encodeURIComponent(g.navigationStart),
                        b;
                    for (b in c) void 0 !== g[b] ? (p = g[b] - n, m += "&" + c[b] + "=" + (0 < p ? encodeURIComponent(p) : 0)) : m += "&" + c[b] + "=-1";
                    window[ensightenOptions.ns].timing = m;
                    b = ensightenOptions.nexus || "nexus.ensighten.com";
                    g = ensightenOptions.staticJavascriptPath ||
                        "";
                    m = g.indexOf(".com/");
                    n = g.indexOf("/code/");
                    g = g.substring(m + 4, n) + "/perf.rnc";
                    g += "?cid=" + encodeURIComponent(ensightenOptions.clientId) + window[ensightenOptions.ns].timing;
                    window[ensightenOptions.ns].imageRequest("//" + b + g)
                }
            }
        });

        if (!window[ensightenOptions.ns].data) {
            /*
             MIT License (c) copyright 2011-2013 original author or authors  MIT License (c) copyright 2013 original author or authors */
            window.JSON && "object" === typeof JSON || (window[ensightenOptions.ns].JSON = {});
            (function() {
                function d(a) {
                    return 10 > a ? "0" + a : a }

                function n(a) { h.lastIndex = 0;
                    return h.test(a) ? '"' + a.replace(h, function(a) {
                        var c = f[a];
                        return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + a + '"' }

                function l(f, g) {
                    var m, d, b, e, h = k,
                        u, r = g[f];
                    r && "object" === typeof r && "function" === typeof r.toJSON && (r = r.toJSON(f));
                    "function" === typeof c && (r = c.call(g, f, r));
                    switch (typeof r) {
                        case "string":
                            return n(r);
                        case "number":
                            return isFinite(r) ? String(r) : "null";
                        case "boolean":
                        case "null":
                            return String(r);
                        case "object":
                            if (!r) return "null";
                            k += a;
                            u = [];
                            if ("[object Array]" === Object.prototype.toString.apply(r)) { e = r.length;
                                for (m = 0; m < e; m += 1) u[m] = l(m, r) || "null";
                                b = 0 === u.length ? "[]" : k ? "[\n" + k + u.join(",\n" + k) + "\n" + h + "]" : "[" + u.join(",") + "]";
                                k = h;
                                return b }
                            if (c && "object" === typeof c)
                                for (e = c.length, m = 0; m < e; m += 1) "string" === typeof c[m] && (d = c[m], (b = l(d, r)) && u.push(n(d) + (k ? ": " : ":") + b));
                            else
                                for (d in r) Object.prototype.hasOwnProperty.call(r, d) && (b = l(d, r)) && u.push(n(d) + (k ? ": " : ":") + b);
                            b = 0 === u.length ? "{}" : k ? "{\n" + k + u.join(",\n" +
                                k) + "\n" + h + "}" : "{" + u.join(",") + "}";
                            k = h;
                            return b
                    }
                }
                var b = window.JSON ? window.JSON : window[ensightenOptions.ns].JSON;
                "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + d(this.getUTCMonth() + 1) + "-" + d(this.getUTCDate()) + "T" + d(this.getUTCHours()) + ":" + d(this.getUTCMinutes()) + ":" + d(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                    return this.valueOf() });
                var e =
                    /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    h = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    k, a, f = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                    c;
                "function" !== typeof b.stringify && (b.stringify = function(d, g, b) {
                    var f;
                    a = k = "";
                    if ("number" === typeof b)
                        for (f = 0; f < b; f += 1) a += " ";
                    else "string" === typeof b && (a = b);
                    if ((c = g) && "function" !== typeof g &&
                        ("object" !== typeof g || "number" !== typeof g.length)) throw Error("JSON.stringify");
                    return l("", { "": d })
                });
                "function" !== typeof b.parse && (b.parse = function(a, g) {
                    function c(a, b) {
                        var f, d, e = a[b];
                        if (e && "object" === typeof e)
                            for (f in e) Object.prototype.hasOwnProperty.call(e, f) && (d = c(e, f), void 0 !== d ? e[f] = d : delete e[f]);
                        return g.call(a, b, e) }
                    var b;
                    a = String(a);
                    e.lastIndex = 0;
                    e.test(a) && (a = a.replace(e, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }));
                    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                            "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return b = eval("(" + a + ")"), "function" === typeof g ? c({ "": b }, "") : b;
                    throw new SyntaxError("JSON.parse");
                })
            })();
            window[ensightenOptions.ns].when = function() {
                function d(a, b, g, f) {
                    return l(a).then(b, g, f) }

                function n(a) { this.then = a }

                function l(a) {
                    return b(function(b) { b(a) }) }

                function b(g) {
                    function c(a) { t && (p = e(a), f(t, p), t = v) }

                    function d(a) { c(k(a)) }

                    function q(b) { t && f(t, a(b)) }
                    var p, t = [];
                    try { g(c, d, q) } catch (r) { d(r) }
                    return new n(function(a, g, f) {
                        return b(function(b, c, d) { t ? t.push(function(e) { e.then(a, g, f).then(b, c, d) }) : m(function() { p.then(a, g, f).then(b, c, d) }) }) }) }

                function e(a) {
                    return a instanceof n ? a : a !== Object(a) ? h(a) : b(function(b,
                        g, f) { m(function() {
                            try {
                                var c = a.then; "function" === typeof c ? z(c, a, b, g, f) : b(h(a)) } catch (d) { g(d) } }) })
                }

                function h(a) {
                    var b = new n(function(g) {
                        try {
                            return "function" == typeof g ? e(g(a)) : b } catch (c) {
                            return k(c) } });
                    return b }

                function k(a) {
                    var b = new n(function(g, c) {
                        try {
                            return "function" == typeof c ? e(c(a)) : b } catch (f) {
                            return k(f) } });
                    return b }

                function a(b) {
                    var g = new n(function(c, f, d) {
                        try {
                            return "function" == typeof d ? a(d(b)) : g } catch (e) {
                            return a(e) } });
                    return g }

                function f(a, b) { m(function() {
                        for (var g, c = 0; g = a[c++];) g(b) }) }

                function c(a,
                    g, c, f, e) { t(2, arguments);
                    return d(a, function(a) {
                        return b(function(b, c, f) {
                            function e(a) { k(a) }

                            function m(a) { h(a) }
                            var q, p, t, r, h, k, l, x;
                            l = a.length >>> 0;
                            q = Math.max(0, Math.min(g, l));
                            t = [];
                            p = l - q + 1;
                            r = [];
                            if (q)
                                for (k = function(a) { r.push(a);--p || (h = k = B, c(r)) }, h = function(a) { t.push(a);--q || (h = k = B, b(t)) }, x = 0; x < l; ++x) x in a && d(a[x], m, e, f);
                            else b(t) }).then(c, f, e) }) }

                function p(a, b, c, f) { t(1, arguments);
                    return g(a, C).then(b, c, f) }

                function g(a, g) {
                    return d(a, function(a) {
                        return b(function(b, c, f) {
                            var e, m, q, t, p;
                            q = m = a.length >>> 0;
                            e = [];
                            if (q)
                                for (t = function(a, m) { d(a, g).then(function(a) { e[m] = a;--q || b(e) }, c, f) }, p = 0; p < m; p++) p in a ? t(a[p], p) : --q;
                            else b(e)
                        })
                    })
                }

                function m(a) { 1 === y.push(a) && D(q) }

                function q() {
                    for (var a, b = 0; a = y[b++];) a();
                    y = [] }

                function t(a, b) {
                    for (var g, c = b.length; c > a;)
                        if (g = b[--c], null != g && "function" != typeof g) throw Error("arg " + c + " must be a function"); }

                function B() {}

                function C(a) {
                    return a }
                d.defer = function() {
                    var a, g, c;
                    a = { promise: v, resolve: v, reject: v, notify: v, resolver: { resolve: v, reject: v, notify: v } };
                    a.promise = g = b(function(b,
                        f, d) { a.resolve = a.resolver.resolve = function(a) {
                            if (c) return l(a);
                            c = !0;
                            b(a);
                            return g };
                        a.reject = a.resolver.reject = function(a) {
                            if (c) return l(k(a));
                            c = !0;
                            f(a);
                            return g };
                        a.notify = a.resolver.notify = function(a) { d(a);
                            return a } });
                    return a
                };
                d.resolve = l;
                d.reject = function(a) {
                    return d(a, k) };
                d.join = function() {
                    return g(arguments, C) };
                d.all = p;
                d.map = g;
                d.reduce = function(a, b) {
                    var c = z(r, arguments, 1);
                    return d(a, function(a) {
                        var g;
                        g = a.length;
                        c[0] = function(a, c, f) {
                            return d(a, function(a) {
                                return d(c, function(c) {
                                    return b(a, c, f,
                                        g)
                                })
                            })
                        };
                        return u.apply(a, c)
                    })
                };
                d.any = function(a, b, g, f) {
                    return c(a, 1, function(a) {
                        return b ? b(a[0]) : a[0] }, g, f) };
                d.some = c;
                d.isPromise = function(a) {
                    return a && "function" === typeof a.then };
                n.prototype = {
                    otherwise: function(a) {
                        return this.then(v, a) },
                    ensure: function(a) {
                        function b() {
                            return l(a()) }
                        return this.then(b, b).yield(this) },
                    yield: function(a) {
                        return this.then(function() {
                            return a }) },
                    spread: function(a) {
                        return this.then(function(b) {
                            return p(b, function(b) {
                                return a.apply(v, b) }) }) },
                    always: function(a, b) {
                        return this.then(a,
                            a, b)
                    }
                };
                var u, r, z, D, y, E, w, A, v;
                y = [];
                E = setTimeout;
                D = "function" === typeof setImmediate ? "undefined" === typeof window ? setImmediate : setImmediate.bind(window) : "object" === typeof process && process.nextTick ? process.nextTick : function(a) { E(a, 0) };
                w = Function.prototype;
                A = w.call;
                z = w.bind ? A.bind(A) : function(a, b) {
                    return a.apply(b, r.call(arguments, 2)) };
                w = [];
                r = w.slice;
                u = w.reduce || function(a) {
                    var b, c, g, f;
                    f = 0;
                    b = Object(this);
                    g = b.length >>> 0;
                    c = arguments;
                    if (1 >= c.length)
                        for (;;) {
                            if (f in b) { c = b[f++];
                                break }
                            if (++f >= g) throw new TypeError;
                        } else c = c[1];
                    for (; f < g; ++f) f in b && (c = a(c, b[f], f, b));
                    return c
                };
                return d
            }();
            (function() {
                function d(b, d) {
                    return l.all(d || [], function(d) {
                        return b.apply(null, d) }) }

                function n(e) {
                    var h = b.call(arguments, 1);
                    return function() {
                        return d(e, h.concat(b.call(arguments))) } }
                var l, b;
                l = window[ensightenOptions.ns].when;
                b = [].slice;
                l.apply = d;
                l.call = function(e) {
                    return d(e, b.call(arguments, 1)) };
                l.lift = n;
                l.bind = n;
                l.compose = function(e) {
                    var h = b.call(arguments, 1);
                    return function() {
                        var k = b.call(arguments),
                            k = d(e, k);
                        return l.reduce(h, function(a, b) {
                            return b(a) }, k) } } })();
            window[ensightenOptions.ns].data = function(d, n) {
                function l(a, b) { this.name = "DataDefinitionException";
                    this.message = b || "Data definitions cannot be resolved as there are invalid id(s): " + a }
                var b = {
                        engines: {
                            memory: {
                                get: function(a) {
                                    if (e.utils.isArray(a)) {
                                        for (var f = [], c = 0; c < a.length; c++) f.push(b.data[a[c]]);
                                        return d[ensightenOptions.ns].when.resolve(f) }
                                    f = b.dataDefinitions[a] || { storage: { get: function() {} } };
                                    f = f.storage.get(f);
                                    b.data[a] = f;
                                    return d[ensightenOptions.ns].when.resolve(b.data[a]) },
                                set: function(a, f) {
                                    if (e.utils.isArray(a))
                                        for (var c in a) b.data[a[c]] =
                                            f[c];
                                    else b.data[a] = f;
                                    return d[ensightenOptions.ns].when.resolve(!0)
                                },
                                remove: function(a) {
                                    if (e.utils.isArray(a))
                                        for (var f in a) delete b.data[a[f]];
                                    else delete b.data[a];
                                    return d[ensightenOptions.ns].when.resolve(!0) },
                                clear: function(a) { b.data = {};
                                    b.definitions = {};
                                    return d[ensightenOptions.ns].when.resolve(!0) },
                                all: function() {
                                    return d[ensightenOptions.ns].when.resolve(b.data) }
                            }
                        },
                        normalizeInputArgs: function(a, b) {
                            var c = { key: [], val: n },
                                d;
                            if (e.utils.isPlainObject(a))
                                for (d in c.val = [], a) c.key.push(d), c.val.push(a[d]);
                            else e.utils.isArray(a), c.key = a, c.val = b;
                            return c
                        },
                        definitions: {},
                        data: {}
                    },
                    e = { utils: { isPlainObject: function(a) {
                                return !!a && "[object Object]" === Object.prototype.toString.call(a) }, isArray: function(a) {
                                return "[object Array]" === Object.prototype.toString.call(a) }, escapeRegEx: function(a) {
                                try {
                                    return a.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1") } catch (b) {
                                    return a } } } },
                    h = function() {
                        return d[ensightenOptions.ns].when.reject("Not Implemented.") };
                l.prototype = Error();
                l.prototype || (l.prototype = {});
                l.prototype.constructor =
                    l;
                b.DataDefinitionException = l;
                b.checkForInvalidDataDefinitions = function(a) { e.utils.isArray(a) || (a = [a]);
                    return a && 0 < a.length && (a = a.join(","), -1 < a.indexOf("invalid_id")) ? (d[ensightenOptions.ns].reportException(new b.DataDefinitionException(a)), !0) : !1 };
                b.collectAvailableDataDefinitions = function(a) {
                    for (var f = [], c = 0; c < a.length; c++) {
                        var p = parseInt(a[c], 10),
                            g = d[ensightenOptions.ns].dataDefinitions[p];
                        if (null === g || g === n)
                            if (g = e.storage.session.get({ id: p }), null !== g && g !== n) e.set(p, g), b.dataDefinitions[p] = {
                                id: p,
                                load: "visitor",
                                storage: e.storage.visitor,
                                missingDDFromCache: !0
                            }, f.push(d[ensightenOptions.ns].data.get("" + p));
                            else return d[ensightenOptions.ns].reportException(new b.DataDefinitionException(a, "Invalid data definition used: " + p)), { promises: [], isInvalid: !0 };
                        else f.push(d[ensightenOptions.ns].data.get(a[c]))
                    }
                    return { promises: f, isInvalid: !1 }
                };
                b.getSync = function(a) {
                    function f(a) {
                        var b = a.extract || p,
                            f = a.transform || g,
                            d = !1,
                            e = null,
                            m = null;
                        try { e = b() } catch (q) { e = null, d = !0 }
                        try { m = f(e) } catch (q) { m = null, d = !0 }
                        d && c.push(a.id);
                        return m
                    }
                    var c = [],
                        p = function() {
                            return document },
                        g = function(a) {
                            return null !== a && a !== n ? a.toString() : null },
                        m = parseInt(a);
                    a = "string" === typeof a ? a.split(".") : [];
                    var q = {},
                        t = "";
                    isNaN(m) ? 3 == a.length && (q = e.getDataDefinitionBySourceCollectionName(a[0], a[1], a[2])) : q = e.getDataDefinitionById(m);
                    t = q.load && q.load.match(/(session|visitor)/i) && q.storage && q.storage.get ? q.storage.get(q) : f(q);
                    0 < c.length && d[ensightenOptions.ns].reportException(new b.DataDefinitionException(c, "Error resolving data definitions synchronously: " +
                        c));
                    return t
                };
                b.dataDefinitions = {};
                b.dataDefinitionsBySourceCollName = {};
                e.defineEngine = function(a, f) {
                    var c, e = ["get", "set", "remove", "clear", "all"];
                    b.engines[a] = f;
                    if (!f.returnsPromise)
                        for (c = 0; c < e.length; c++) {
                            var g = e[c];
                            f[g] = d[ensightenOptions.ns].when.lift(f[g]) } };
                e.storage = {
                    instance: { set: function(a, b) {}, get: function(a) {
                            return b.getSync(a.id) } },
                    page: { set: function(a, b) {}, get: function(a) {
                            return b.data[a.id] } },
                    session: {
                        set: function(a, b) {
                            var c = e.storage.session.get({ id: a }),
                                p = new Date,
                                g = p.getTime();
                            p.setTime(g +
                                18E5);
                            null != c && (b = c);
                            d[ensightenOptions.ns].data.cookie.utils.set(a, b, { expires: p.toGMTString() });
                            c = { expires: p.getTime(), value: b };
                            d[ensightenOptions.ns].data.local.utils.set(a, c)
                        },
                        get: function(a) {
                            var b = d[ensightenOptions.ns].data.cookie.utils.get(a.id),
                                c = d.JSON && d.JSON.stringify ? d.JSON : d[ensightenOptions.ns].JSON,
                                c = c || {},
                                e, g = new Date,
                                g = g.getTime();
                            if (null === b) {
                                try { e = c.parse(d[ensightenOptions.ns].data.local.utils.get(a.id)) } catch (m) { e = null }
                                null != e && (e.expires = +e.expires, g <= e.expires ? b = e.value : "" ==
                                    e.expires && e.value != n ? b = e.value : d[ensightenOptions.ns].data.local.utils.remove(a.id))
                            }
                            return b
                        }
                    },
                    visitor: { set: function(a, b) {
                            var c = e.storage.session.get({ id: a });
                            null != c && (b = c);
                            d[ensightenOptions.ns].data.cookie.utils.set(a, b);
                            d[ensightenOptions.ns].data.local.utils.set(a, { expires: "", value: b }) }, get: function(a) {
                            return e.storage.session.get(a) } }
                };
                e.getEngine = e.engine = function(a) {
                    return a ? b.engines[a] || { get: h, set: h, remove: h, clear: h, all: h } : b.engines };
                e.all = function(a) {
                    return d[ensightenOptions.ns].data.engine(a ||
                        "memory").all()
                };
                e.get = function(a, f, c) { f = f || "memory";
                    c = c || {}; - 1 < a.indexOf(",") && (a = a.split(","));
                    a = b.normalizeInputArgs(a);
                    return c.wait ? b.getWait(a.key, d[ensightenOptions.ns].data.engine(f), c) : b.data && b.data.hasOwnProperty(a.key) ? d[ensightenOptions.ns].data.engine(f).get(a.key) : b.getWaitForKey(a.key, d[ensightenOptions.ns].data.engine(f), c) };
                b.getWait = function(a, b, c) {
                    var p = +new Date,
                        g = d[ensightenOptions.ns].when.defer(),
                        m = function() {
                            var d = b.get(a);
                            if (-1 === c.wait) return d;
                            d.then(function(a) {
                                c.setCheck(a) ?
                                    g.resolve(a) : setTimeout(q, c.interval)
                            }, function(a) { setTimeout(q, c.interval) })
                        },
                        q = function() {
                            var a = +new Date - p; - 1 !== c.wait && a < c.wait ? m() : g.reject("Timeout") };
                    c.interval = c.interval || 500;
                    c.wait = c.wait || 5E3;
                    e.utils.isArray(a) ? c.setCheck = c.setCheck || function(a) {
                        for (var b = !0, c = 0; c < a.length; c++) b = b && !!a[c];
                        return b } : c.setCheck = c.setCheck || function(a) {
                        return !!a };
                    m();
                    return g.promise
                };
                b.getWaitForKey = function(a, f, c) {
                    var e = d[ensightenOptions.ns].when.defer(),
                        g = function() {
                            if (b.data && b.data.hasOwnProperty(a)) {
                                var g =
                                    f.get(a);
                                if (-1 === c.wait) return g;
                                g.then(function(a) { e.resolve(a) }, function(a) { e.reject(a) })
                            } else setTimeout(m, c.interval)
                        },
                        m = function() { g() };
                    c.interval = c.interval || 100;
                    c.wait = c.wait || 1;
                    g();
                    return e.promise
                };
                e.set = function(a, e, c) {
                    var h = b.normalizeInputArgs(a, e);
                    Array.prototype.slice.call(arguments);
                    return d[ensightenOptions.ns].data.engine(c || "memory").set(h.key, h.val) };
                e.remove = function(a, b) {
                    return d[ensightenOptions.ns].data.engine(b || "memory").remove(a) };
                e.clear = function(a) {
                    return d[ensightenOptions.ns].data.engine(a ||
                        "memory").clear()
                };
                e.define = function(a, f) {
                    f && (a.name = f.id || f.name);
                    if (!a.name) return d[ensightenOptions.ns].when.reject(Error("Invalid parameters: missing 'name'"));
                    a.id = a.name;
                    var c = a.load || "page";
                    a.load = a.load || "javascript";
                    a.load = -1 < a.load.indexOf("javascript") ? a.load : a.load + ",javascript";
                    a.trigger = a.trigger || function() {
                        return d[ensightenOptions.ns].when.resolve() };
                    a.priv = a.priv || !1;
                    a.collection = a.collection || "Data Layer";
                    a.persist = d[ensightenOptions.ns].data.engine("memory");
                    a.storage = e.storage[c.toLowerCase()] ||
                        e.storage.page;
                    var h = a.extract || function() {
                            return document },
                        g = a.transform || function(a) {
                            return a },
                        m = function(b, c) {
                            var g = [];
                            g.push(a.persist.set(b, c));
                            a.storage.set(a.id, c); "object" == typeof d[ensightenOptions.ns].data.dataExport && d[ensightenOptions.ns].data.dataExport(b, c, a.collection);
                            d[ensightenOptions.ns].when.all(g).then(function(a) { q.resolve(a) }, function(a) { q.reject(a) }) },
                        q = d[ensightenOptions.ns].when.defer(),
                        t;
                    try { t = a.trigger() } catch (k) {
                        d[ensightenOptions.ns].reportException(new b.DataDefinitionException(null,
                            '"' + k + '" error caught in Data Definition trigger: ' + a.dataDefName + ", ID:" + a.id + ". Using bottom of body trigger.")), t = d[ensightenOptions.ns].data.bottomOfBodyTrigger()
                    }
                    t.then(function() {
                        q.resolve(d[ensightenOptions.ns].when.reduce([function() {
                            try {
                                return h() } catch (c) {
                                return d[ensightenOptions.ns].reportException(new b.DataDefinitionException(null, '"' + c + '" error caught in Data Definition extractor: ' + a.dataDefName + ", ID:" + a.id + ".")), null } }(), function() {
                            try {
                                return g.apply(this, arguments) } catch (c) {
                                return d[ensightenOptions.ns].reportException(new b.DataDefinitionException(null,
                                    '"' + c + '" error caught in Data Definition transformer: ' + a.dataDefName + ", ID " + a.id + ".")), null
                            }
                        }, m], function(b, c, g, d) {
                            if (1 == g) return c(b);
                            2 == g && c(a.name, b) }))
                    }, function(a) { q.reject(a) });
                    b.dataDefinitions[a.id] = a;
                    b.dataDefinitionsBySourceCollName["" + a.source + "." + a.collection + "." + a.dataDefName] = a;
                    return q.promise
                };
                e.checkConditions = function(a) {
                    var f, c = {
                        lt: function(a, c) {
                            var e = +a,
                                f = +c;
                            return isNaN(e) || isNaN(f) ? (d[ensightenOptions.ns].reportException(new b.DataDefinitionException(null, "Value(s) cannot be converted to number: compareWith: " +
                                a + ", compareTo: " + c)), !1) : e < f
                        },
                        gt: function(a, c) {
                            var e = +a,
                                f = +c;
                            return isNaN(e) || isNaN(f) ? (d[ensightenOptions.ns].reportException(new b.DataDefinitionException(null, "Value(s) cannot be converted to number: compareWith: " + a + ", compareTo: " + c)), !1) : e > f },
                        eql: function(a, b) {
                            return a == b },
                        exists: function(a, b) {
                            return null == a || a == n || "" == a ? !1 : !0 },
                        re: function(a, b, c) { b = new RegExp(b, c ? "i" : "");
                            try {
                                return a.match(b) } catch (d) {
                                return !1 } },
                        starts: function(a, b, d) { b = e.utils.escapeRegEx(b);
                            return c.re(a, "^" + b, d) },
                        ends: function(a,
                            b, d) { b = e.utils.escapeRegEx(b);
                            return c.re(a, b + "$", d) },
                        contains: function(a, b, d) { b = e.utils.escapeRegEx(b);
                            return c.re(a, ".*" + b + ".*", d) }
                    };
                    c.is = c.eql;
                    c["starts with"] = c.starts;
                    c["ends with"] = c.ends;
                    c["is greater than"] = c.gt;
                    c["is less than"] = c.lt;
                    c.matches = c.re;
                    for (f = 0; f < a.values.length; f++) {
                        var h = (a.customComparator ? a.customComparator[f] ? a.customComparator[f] : c[a.comparators[f]] : c[a.comparators[f]])(a.values[f], a.compareTo[f], a.caseInsensitive ? a.caseInsensitive[f] || !1 : !1);
                        a.not[f] && (h = !h);
                        if (!h) return !1 }
                    return !0
                };
                e.triggerPromise = function(a, b, c) { c = c || 5E3;
                    var e = +new Date,
                        g = d[ensightenOptions.ns].when.defer();
                    (function() {
                        var d = a();
                        d != b ? g.resolve(d) : +new Date - e < c ? setTimeout(arguments.callee, 200) : g.reject("timed out") })();
                    return g.promise };
                e.timeoutPromise = function(a, b) {
                    var c = d[ensightenOptions.ns].when.defer();
                    b = b || 800;
                    a.then(c.resolve, c.reject);
                    setTimeout(function() { c.reject(Error("timed out")) }, b);
                    return c.promise };
                e.delayTrigger = function(a) {
                    a = a || 10;
                    var b = d[ensightenOptions.ns].when.defer();
                    setTimeout(function() { b.resolve() },
                        a);
                    return b.promise
                };
                e.delayUntilTrigger = function(a, b, c, e) { c = c || null;
                    e = e || 200;
                    var g = +new Date,
                        m = d[ensightenOptions.ns].when.defer();
                    (function() {
                        var d = a();
                        d != b ? m.resolve(d) : c ? +new Date - g < c ? setTimeout(arguments.callee, e) : m.reject("timed out") : setTimeout(arguments.callee, e) })();
                    return m.promise };
                b.applyTrigger = function(a) {
                    var b = d[ensightenOptions.ns].when.defer();
                    a(function() { b.resolve(!0) });
                    return b.promise };
                e.immediateTrigger = function() {
                    return b.applyTrigger(d[ensightenOptions.ns].bindImmediate) };
                e.bottomOfBodyTrigger = function() {
                    return b.applyTrigger(d[ensightenOptions.ns].bindDOMParsed) };
                e.afterEnsightenCompleteTrigger = function() {
                    return b.applyTrigger(d[ensightenOptions.ns].bindPageSpecificCompletion) };
                e.afterElementsDownloadedTrigger = function() {
                    return b.applyTrigger(d[ensightenOptions.ns].bindDOMLoaded) };
                e.getAllDataDefinitionsOnCurrentPage = function() {
                    return b.dataDefinitions };
                e.getAllDataDefinitionsOnCurrentPage_S_C_N = function() {
                    return b.dataDefinitionsBySourceCollName };
                e.getDataDefinitionById =
                    function(a) {
                        return b.dataDefinitions[a || -1] || {} };
                e.getDataDefinitionBySourceCollectionName = function(a, d, c) {
                    return b.dataDefinitionsBySourceCollName["" + a + "." + d + "." + c] || {} };
                e.getDataDefinitionByPercentSyntax = function(a) { a = ("" + a).split("_");
                    return 1 > a.length ? {} : b.dataDefinitions[a[1]] || {} };
                e.resolve = function(a, f) {
                    var c = this,
                        h = null;
                    if (!b.checkForInvalidDataDefinitions(a))
                        if (f) d[ensightenOptions.ns].bindDataDefinitionComplete(function() {
                            var g = b.collectAvailableDataDefinitions(a);
                            g.isInvalid || d[ensightenOptions.ns].when.all(g.promises).then(function(g) {
                                try {
                                    f.apply(c,
                                        g)
                                } catch (e) { d[ensightenOptions.ns].reportException(new b.DataDefinitionException(a, "Error resolving data definitions: " + a + ". Details: " + e)) }
                            }, function(c) { d[ensightenOptions.ns].reportException(new b.DataDefinitionException(a, "Error resolving data definitions: " + a + ". Details: " + c)) })
                        });
                        else {
                            var h = [],
                                g = a;
                            e.utils.isArray(a) || (g = [a]);
                            for (var m = 0; m < g.length; m++) h.push(b.getSync(g[m]));
                            return h = e.utils.isArray(a) ? h : h[0] }
                };
                e.extract = function(a, b) {
                    var c = "",
                        e = function(a, b) {
                            var c = ~b.indexOf("#") ? b.split("#")[1] :
                                "",
                                d = c ? 0 : ~b.indexOf("[") ? parseInt(b.match(/\[(\d+)\]/)[1]) : 0,
                                g = (c ? b.split("#")[0] : d ? b.split("[")[0] : b).toLowerCase();
                            if (a == document && "html" == g && 0 == d) return document.getElementsByTagName("html")[0];
                            if (~b.indexOf("#")) return document.getElementById(b.split("#")[1]);
                            var e = a.firstChild;
                            if (!e) return null;
                            for (var f = 0, d = 0 != d ? d - 1 : d; e;) {
                                if (1 == e.nodeType) {
                                    if (e.tagName.toLowerCase() == g && "" != c && e.id == c || e.tagName.toLowerCase() == g && f == d && "" == c) return e;
                                    e.tagName.toLowerCase() == g && f++ }
                                e = e.nextSibling }
                        },
                        g = function(a,
                            b) { a = a.split("/");
                            for (var c = e(b || document, a[1]), d = 2; d < a.length; d++) {
                                if (null == c) return null;
                                c = e(c, a[d]) }
                            return c },
                        m = function() {
                            for (var a = {}, b = d.document.getElementsByTagName("META") || [], c = 0, e = b.length; c < e; c++) {
                                var g = b[c].name || b[c].getAttribute("property") || "";
                                0 !== g.length && (a[g] = b[c].content) }
                            return a }(),
                        q = function(a) {
                            var b = m[a];
                            if (b) return b;
                            for (var b = d.document.getElementsByTagName("META") || [], c = 0, e = b.length; c < e; c++) {
                                var g = b[c].name || b[c].getAttribute("property") || "";
                                if (a == g) return b[c].content } },
                        h = function(a) {
                            return (val = (new RegExp("&" + a + "=([^&]*)")).exec(d.location.search.replace(/^\?/, "&"))) ? val[0].split("=")[1] : "" },
                        k = function(a) {
                            return (val = (new RegExp("^" + a + "=.*|;\\s*" + a + "=.*")).exec(d.document.cookie)) ? val[0].split("=")[1].split(";")[0] : "" },
                        l = function(a) {
                            (a = n(a)) && a.nodeType && 1 == a.nodeType && (a = a.value || a.innerHTML || "");
                            return a.toString().replace(/\n|\r|\s\s+/g, "") || "" },
                        n = function(a) {
                            var b = "";
                            if (0 == a.indexOf("/HTML/BODY")) b = g(a);
                            else try { b = eval(a) } catch (c) { b = "" }
                            return b };
                    try {
                        return b ?
                            "meta" == b ? c = q(a) : "cookie" == b ? c = k(a) : "param" == b ? c = h(a) : "content" == b ? c = l(a) : "event" == b ? c = n(a) : "var" == b && (c = d[a]) : c = q(a) || k(a) || h(a) || l(a) || n(a) || d[a] || "", c || ""
                    } catch (r) {
                        return "" }
                };
                if ("undefined" == typeof k) var k = { exports: {} };
                return e
            }(window);
            window[ensightenOptions.ns].data.defineEngine("store", function() {
                var d = {},
                    n = window,
                    l = n.document,
                    b, e, h = Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a) };
                d.set = function(a, b) {};
                d.get = function(a) {};
                d.remove = function(a) {};
                d.clear = function() {};
                try {
                    if ("localStorage" in n && n.localStorage) b = n.localStorage, d.set = function(a, c) {
                        var d, e, f = window.JSON && window.JSON.stringify ? window.JSON : window[ensightenOptions.ns].JSON;
                        if (h(a))
                            for (d = 0, e = a.length; d < e; d++) b.setItem(a[d], "string" ===
                                typeof c[d] ? c[d] : f.stringify(c[d]));
                        else b.setItem(a, "string" === typeof c ? c : f.stringify(c))
                    }, d.get = function(a) {
                        if (h(a)) {
                            var c = {},
                                d, e;
                            d = 0;
                            for (e = a.length; d < e; d++) c[a[d]] = b.getItem(a[d]);
                            return c }
                        return b.getItem(a) }, d.remove = function(a) {
                        if (h(a)) {
                            var c, d;
                            c = 0;
                            for (d = a.length; c < d; c++) b.removeItem(a[c]) } else b.removeItem(a) }, d.clear = function() { b.clear() }, d.all = function() {
                        return b };
                    else if ("globalStorage" in n && n.globalStorage) b = n.globalStorage[n.location.hostname], d.set = function(a, c) {
                        if (h(a)) {
                            var d, e;
                            d = 0;
                            for (e = a.length; d < e; d++) b[a[d]] = c[d]
                        } else b[a] = c
                    }, d.get = function(a) {
                        if (h(a)) {
                            var c = {},
                                d, e;
                            d = 0;
                            for (e = a.length; d < e; d++) c[a[d]] = b[a[d]] && b[a[d]].value;
                            return c }
                        return b[a] && b[a].value }, d.remove = function(a) {
                        if (h(a)) {
                            var c, d;
                            c = 0;
                            for (d = a.length; c < d; c++) delete b[a[c]] } else delete b[a] }, d.clear = function() {
                        for (var a in b) delete b[a] }, d.all = function() {
                        return b };
                    else if (l.documentElement.addBehavior) {
                        var k = function(a) {
                                return a.replace(c, "___") },
                            n = function(c) {
                                return function() {
                                    var d = Array.prototype.slice.call(arguments,
                                        0);
                                    d.unshift(b);
                                    a.appendChild(b);
                                    b.addBehavior("#default#userData");
                                    b.load("localStorage");
                                    d = c.apply(store, d);
                                    a.removeChild(b);
                                    return d
                                }
                            },
                            a, f;
                        try { f = new ActiveXObject("htmlfile"), f.open(), f.write('<script>document.w=window\x3c/script><iframe src="/favicon.ico"></frame>'), f.close(), a = f.w.frames[0].document, b = a.createElement("div") } catch (g) { b = l.createElement("div"), a = l.body }
                        var c = RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
                        d.set = n(function(a, b, c) {
                            if (h(b)) {
                                var e, f;
                                e = 0;
                                for (f = b.length; e < f; e++) {
                                    fixedKey =
                                        k(b[e]);
                                    if (void 0 === c[e]) return d.remove(fixedKey);
                                    a.setAttribute(fixedKey, c[e]);
                                    a.save("localStorage")
                                }
                            } else { fixedKey = k(b);
                                if (void 0 === c) return d.remove(fixedKey);
                                a.setAttribute(fixedKey, c);
                                a.save("localStorage") }
                        });
                        d.get = n(function(a, b) {
                            if (h(b)) {
                                var c = {},
                                    d, e, f;
                                e = 0;
                                for (f = b.length; e < f; e++) d = k(b[e]), c[b[e]] = a.getAttribute(d);
                                return c }
                            b = k(b);
                            return a.getAttribute(b) });
                        d.remove = n(function(a, b) {
                            if (h(b)) {
                                var c, d;
                                c = 0;
                                for (d = b.length; c < d; c++) a.removeAttribute(k(b[c])), a.save("localStorage") } else b = k(b), a.removeAttribute(b),
                                a.save("localStorage")
                        });
                        d.clear = n(function(a) {
                            var b = a.XMLDocument.documentElement.attributes;
                            a.load("localStorage");
                            for (var c = 0, d; d = b[c]; c++) a.removeAttribute(d.name);
                            a.save("localStorage") });
                        d.all = n(function(a) {
                            for (var b = a.XMLDocument.documentElement.attributes, c = {}, d = 0, e; e = b[d]; ++d) {
                                var f = k(e.name);
                                c[e.name] = a.getAttribute(f) }
                            return c })
                    }
                } catch (g) {}
                var p = {};
                for (e in d) p[e] = d[e];
                p.testStorage = function() {
                    try {
                        var a = "tk_" + Math.ceil(5E7 * Math.random());
                        p.set(a, "test");
                        if ("test" === p.get(a)) return p.remove(a), !0
                    } catch (b) {}
                    return !1
                };
                d.utils = p;
                return window[ensightenOptions.ns].data.local = d
            }());
            window[ensightenOptions.ns].data.defineEngine("cookie", function(d, n) {
                var l = function() {
                        return l.get.apply(l, arguments) },
                    b = l.utils = {
                        isArray: Array.isArray || function(b) {
                            return "[object Array]" === Object.prototype.toString.call(b) },
                        isPlainObject: window[ensightenOptions.ns].data.utils.isPlainObject,
                        toArray: function(b) {
                            return Array.prototype.slice.call(b) },
                        getKeys: Object.keys || function(b) {
                            var d = [],
                                k = "";
                            for (k in b) b.hasOwnProperty(k) && d.push(k);
                            return d },
                        escape: function(b) {
                            return String(b).replace(/[,;"\\=\s%]/g,
                                function(b) {
                                    return encodeURIComponent(b) })
                        },
                        retrieve: function(b, d) {
                            return null == b ? d : b },
                        getAllCookies: function() {
                            if ("" === d.cookie) return {};
                            for (var b = d.cookie.split("; "), h = {}, k = 0, a = b.length; k < a; k++) {
                                var f = b[k].split("=");
                                h[decodeURIComponent(f[0])] = decodeURIComponent(f[1]) }
                            return h },
                        set: function(e, h, k) {
                            k = k || -1;
                            if (b.isPlainObject(e))
                                for (var a in e) e.hasOwnProperty(a) && l.set(a, e[a], h);
                            else if (b.isArray(e)) {
                                var f;
                                a = 0;
                                for (f = e.length; a < f; a++) l.set(e[a], h[a], k) } else {
                                a = k.expires !== n ? k.expires : l.defaults.expires ||
                                    "";
                                "number" === typeof a && (a = new Date(a));
                                a = b.isPlainObject(a) && "toGMTString" in a ? ";expires=" + a.toGMTString() : b.isPlainObject(a) && a instanceof Date ? ";expires=" + a.toUTCString() : ";expires=" + a;
                                f = (f = k.path || l.defaults.path) ? ";path=" + f : "";
                                var c = k.domain || l.defaults.domain,
                                    c = c ? ";domain=" + c : "";
                                k = k.secure || l.defaults.secure ? ";secure" : "";
                                d.cookie = b.escape(e) + "=" + b.escape(h) + a + f + c + k
                            }
                        },
                        get: function(d, h) {
                            h = h || n;
                            var k = b.getAllCookies();
                            if (b.isArray(d)) {
                                for (var a = {}, f = 0, c = d.length; f < c; f++) a[d[f]] = b.retrieve(k[d[f]],
                                    h), a[d[f]] === n && (a[d[f]] = null);
                                return a
                            }
                            a = b.retrieve(k[d], h);
                            return a === n ? null : a
                        },
                        getGMTString: function(b) {
                            var d = new Date;
                            d.setTime(d.getTime() + 864E5 * b);
                            return d.toGMTString() }
                    };
                l.defaults = { path: "/", expires: b.getGMTString(90) };
                l.set = function(d, h) { b.set(d, h) };
                l.remove = function(d) { d = b.isArray(d) ? d : b.toArray(arguments);
                    for (var h = 0, k = d.length; h < k; h++) b.set(d[h], "", { expires: -1 }) };
                l.clear = function() {
                    return l.remove(b.getKeys(b.getAllCookies())) };
                l.get = function(d, h) {
                    return b.get(d, h) };
                l.all = function() {
                    return b.getAllCookies() };
                l.utils = b;
                return window[ensightenOptions.ns].data.cookie = l
            }(document));

        }

        window[ensightenOptions.ns].ensEvent = function(l, u) {
            var k = {
                queue: {},
                pollQueue: {},
                pushTrigger: function(b, g) {
                    if ("[object Array]" === Object.prototype.toString.call(b)) {
                        for (var d = 0; d < b.length; d++) k.pushTrigger(b[d], g);
                        return !0 }
                    if ("string" != typeof b) return !1;
                    this.queue[b] = this.queue[b] || { fn: [] }; "function" == typeof g && this.queue[b].fn.push(g);
                    return !0 },
                callTrigger: function(b, g, d) {
                    if ("string" != typeof b) return !1;
                    b = k.queue[b];
                    if ("object" == typeof b && b.fn && b.fn.length && (0 != b.fireOnFirstSet && g == u || g != u && 0 != b.fireOnUpdate))
                        for (g =
                            0; g < b.fn.length; g++) b.fn[g].call(this)
                },
                setPollOptions: function(b, g, d) { this.queue[b] = this.queue[b] || { fn: [] };
                    this.queue[b].fireOnFirstSet = g;
                    this.queue[b].fireOnUpdate = d },
                callPoll: function(b, g, d, l, t) {
                    if ("string" == typeof b && g && g.length && !(1 > g.length)) {
                        for (var p = 0; p < g.length; p++) k.setPollOptions(g[p], l, t);
                        k.pushWatch(b, g, d) } },
                pushWatch: function(b, g, d) {
                    this.pollQueue[b] || (this.pollQueue[b] = { previousVal: u, eventArr: [], valueFn: d });
                    this.pollQueue[b].eventArr = this.pollQueue[b].eventArr.concat(g);
                    this.pollQueue[b].valueFn =
                        d
                },
                globalWatch: function() { setInterval(function() {
                        for (key in k.pollQueue) {
                            var b = k.pollQueue[key],
                                g = b.valueFn(key);
                            if (b.previousVal !== g) {
                                for (var d = 0; d < b.eventArr.length; d++) k.callTrigger.call(l, b.eventArr[d], b.previousVal, g);
                                k.pollQueue[key].previousVal = g } } }, 500) }
            };
            k.globalWatch();
            return {
                add: function(b, g) {
                    return k.pushTrigger(b, g) },
                get: function(b) {
                    return k.queue[b] },
                trigger: function(b, g) {
                    return k.callTrigger.call(g || l, b) },
                poll: function(b, g, d, u, t) {
                    t = t || l[ensightenOptions.ns].data.resolve;
                    return k.callPoll(b,
                        g, t, d, u)
                }
            }
        }(window);
        (function(l, u, k) { u[l] = k() })("qwery", window[ensightenOptions.ns], function() {
            function l() { this.c = {} }

            function u(a) {
                return G.g(a) || G.s(a, "(^|\\s+)" + a + "(\\s+|$)", 1) }

            function k(a, e) {
                for (var f = 0, c = a.length; f < c; f++) e(a[f]) }

            function b(a) {
                for (var e = [], f = 0, c = a.length; f < c; ++f) s(a[f]) ? e = e.concat(a[f]) : e[e.length] = a[f];
                return e }

            function g(a) {
                for (var e = 0, f = a.length, c = []; e < f; e++) c[e] = a[e];
                return c }

            function d(a) {
                for (;
                    (a = a.previousSibling) && 1 != a.nodeType;);
                return a }

            function x(a) {
                return a.match(N) }

            function t(a, e, f,
                c, b, r, h, g, d, k, s) {
                var n, y, l;
                if (1 !== this.nodeType || e && "*" !== e && this.tagName && this.tagName.toLowerCase() !== e || f && (n = f.match(O)) && n[1] !== this.id) return !1;
                if (f && (l = f.match(P)))
                    for (a = l.length; a--;)
                        if (!u(l[a].slice(1)).test(this.className)) return !1;
                if (d && m.pseudos[d] && !m.pseudos[d](this, s)) return !1;
                if (c && !h)
                    for (y in d = this.attributes, d)
                        if (Object.prototype.hasOwnProperty.call(d, y) && (d[y].name || y) == b) return this;
                return c && !q(r, Q(this, b) || "", h) ? !1 : this }

            function p(a) {
                return H.g(a) || H.s(a, a.replace(R, "\\$1")) }

            function q(a, e, f) {
                switch (a) {
                    case "=":
                        return e == f;
                    case "^=":
                        return e.match(w.g("^=" + f) || w.s("^=" + f, "^" + p(f), 1));
                    case "$=":
                        return e.match(w.g("$=" + f) || w.s("$=" + f, p(f) + "$", 1));
                    case "*=":
                        return e.match(w.g(f) || w.s(f, p(f), 1));
                    case "~=":
                        return e.match(w.g("~=" + f) || w.s("~=" + f, "(?:^|\\s+)" + p(f) + "(?:\\s+|$)", 1));
                    case "|=":
                        return e.match(w.g("|=" + f) || w.s("|=" + f, "^" + p(f) + "(-|$)", 1)) }
                return 0 }

            function v(a, e) {
                var f = [],
                    b = [],
                    r, h, g, d, m, s = e,
                    n = C.g(a) || C.s(a, a.split(I)),
                    l = a.match(J);
                if (!n.length) return f;
                h = (n = n.slice(0)).pop();
                n.length && (r = n[n.length - 1].match(K)) && (s = y(e, r[1]));
                if (!s) return f;
                d = x(h);
                g = s !== e && 9 !== s.nodeType && l && /^[+~]$/.test(l[l.length - 1]) ? function(a) {
                    for (; s = s.nextSibling;) 1 == s.nodeType && (d[1] ? d[1] == s.tagName.toLowerCase() : 1) && (a[a.length] = s);
                    return a }([]) : s.getElementsByTagName(d[1] || "*");
                r = 0;
                for (h = g.length; r < h; r++)
                    if (m = t.apply(g[r], d)) f[f.length] = m;
                if (!n.length) return f;
                k(f, function(a) { c(a, n, l) && (b[b.length] = a) });
                return b
            }

            function c(a, e, f, c) {
                function b(a, c, d) {
                    for (; d = S[f[c]](d, a);)
                        if (r(d) && t.apply(d, x(e[c])))
                            if (c) {
                                if (h =
                                    b(d, c - 1, d)) return h
                            } else return d
                }
                var h;
                return (h = b(a, e.length - 1, a)) && (!c || A(h, c))
            }

            function r(a, e) {
                return a && "object" === typeof a && (e = a.nodeType) && (1 == e || 9 == e) }

            function h(a) {
                var e = [],
                    f, c;
                f = 0;
                a: for (; f < a.length; ++f) {
                    for (c = 0; c < e.length; ++c)
                        if (e[c] == a[f]) continue a;
                    e[e.length] = a[f] }
                return e }

            function s(a) {
                return "object" === typeof a && isFinite(a.length) }

            function y(a, e, f) {
                return 9 === a.nodeType ? a.getElementById(e) : a.ownerDocument && ((f = a.ownerDocument.getElementById(e)) && A(f, a) && f || !A(a, a.ownerDocument) && E('[id="' +
                    e + '"]', a)[0])
            }

            function m(a, e) {
                var f, c, h;
                h = e ? "string" == typeof e ? m(e)[0] : !e.nodeType && s(e) ? e[0] : e : z;
                if (!h || !a) return [];
                if (a === window || r(a)) return !e || a !== window && r(h) && A(a, h) ? [a] : [];
                if (a && s(a)) return b(a);
                if (f = a.match(T)) {
                    if (f[1]) return (c = y(h, f[1])) ? [c] : [];
                    if (f[2]) return g(h.getElementsByTagName(f[2]));
                    if (U && f[3]) return g(h.getElementsByClassName(f[3])) }
                return E(a, h) }

            function n(a, e) {
                return function(f) {
                    var c, b;
                    L.test(f) ? 9 !== a.nodeType && ((b = c = a.getAttribute("id")) || a.setAttribute("id", b = "__qwerymeupscotty"),
                        e(a.parentNode || a, '[id="' + b + '"]' + f, !0), c || a.removeAttribute("id")) : f.length && e(a, f, !1)
                }
            }
            var z = document,
                D = z.documentElement,
                E, O = /#([\w\-]+)/,
                P = /\.[\w\-]+/g,
                K = /^#([\w\-]+)$/,
                V = /^([\w]+)?\.([\w\-]+)$/,
                L = /(^|,)\s*[>~+]/,
                W = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
                B = /[\s\>\+\~]/,
                M = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
                R = /([.*+?\^=!:${}()|\[\]\/\\])/g,
                T = new RegExp(K.source + "|" + /^([\w\-]+)$/.source + "|" + /^\.([\w\-]+)$/.source),
                J = new RegExp("(" + B.source + ")" + M.source, "g"),
                I = new RegExp(B.source +
                    M.source),
                N = new RegExp(/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/.source + "(" + /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/.source + ")?(" + /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/.source + ")?"),
                S = { " ": function(a) {
                        return a && a !== D && a.parentNode }, ">": function(a, e) {
                        return a && a.parentNode == e.parentNode && a.parentNode }, "~": function(a) {
                        return a && a.previousSibling }, "+": function(a, e, f, c) {
                        return a ? (f = d(a)) && (c = d(e)) && f == c && f : !1 } };
            l.prototype = {
                g: function(a) {
                    return this.c[a] ||
                        void 0
                },
                s: function(a, e, f) { e = f ? new RegExp(e) : e;
                    return this.c[a] = e }
            };
            var G = new l,
                H = new l,
                w = new l,
                C = new l,
                A = "compareDocumentPosition" in D ? function(a, e) {
                    return 16 == (e.compareDocumentPosition(a) & 16) } : "contains" in D ? function(a, e) { e = 9 === e.nodeType || e == window ? D : e;
                    return e !== a && e.contains(a) } : function(a, e) {
                    for (; a = a.parentNode;)
                        if (a === e) return 1;
                    return 0 },
                Q = function() {
                    var a = z.createElement("p");
                    return (a.innerHTML = '<a href="#x">x</a>', "#x" != a.firstChild.getAttribute("href")) ? function(a, f) {
                        return "class" === f ?
                            a.className : "href" === f || "src" === f ? a.getAttribute(f, 2) : a.getAttribute(f)
                    } : function(a, f) {
                        return a.getAttribute(f) }
                }(),
                U = !!z.getElementsByClassName,
                X = z.querySelector && z.querySelectorAll,
                Y = function(a, e) {
                    var f = [],
                        c, b;
                    try {
                        if (9 === e.nodeType || !L.test(a)) return g(e.querySelectorAll(a));
                        k(c = a.split(","), n(e, function(a, e) { b = a.querySelectorAll(e);
                            1 == b.length ? f[f.length] = b.item(0) : b.length && (f = f.concat(g(b))) }));
                        return 1 < c.length && 1 < f.length ? h(f) : f } catch (r) {}
                    return F(a, e) },
                F = function(a, e) {
                    var f = [],
                        c, b, r, d;
                    a = a.replace(W,
                        "$1");
                    if (c = a.match(V)) { d = u(c[2]);
                        c = e.getElementsByTagName(c[1] || "*");
                        b = 0;
                        for (r = c.length; b < r; b++) d.test(c[b].className) && (f[f.length] = c[b]);
                        return f }
                    k(c = a.split(","), n(e, function(a, c, h) { d = v(c, a);
                        b = 0;
                        for (r = d.length; b < r; b++)
                            if (9 === a.nodeType || h || A(d[b], e)) f[f.length] = d[b] }));
                    return 1 < c.length && 1 < f.length ? h(f) : f
                },
                B = function(a) { "undefined" !== typeof a.useNativeQSA && (E = a.useNativeQSA ? X ? Y : F : F) };
            B({ useNativeQSA: !0 });
            m.configure = B;
            m.uniq = h;
            m.is = function(a, e, f) {
                if (r(e)) return a == e;
                if (s(e)) return !!~b(e).indexOf(a);
                for (var h = e.split(","), d; e = h.pop();)
                    if (d = C.g(e) || C.s(e, e.split(I)), e = e.match(J), d = d.slice(0), t.apply(a, x(d.pop())) && (!d.length || c(a, d, e, f))) return !0;
                return !1
            };
            m.pseudos = {};
            return m
        });
        (function() {
            function l(c, b, h) {
                var d;
                x || (x = window[ensightenOptions.ns].qwery);
                d = x;
                if ((d = d.call(h, b, h)) && 0 < d.length) {
                    if ("_root" == b) c = h;
                    else if (c === h) c = void 0;
                    else { b: {
                            for (var g = d.length, m = 0; m < g; m++)
                                if (c === d[m]) { d = !0;
                                    break b }
                            d = !1 }
                        d || (c.parentNode ? (t++, c = l(c.parentNode, b, h)) : c = void 0) }
                    return c }
                return !1 }

            function u(c, b, d, g) { q[c.id] || (q[c.id] = {});
                q[c.id][b] || (q[c.id][b] = {});
                q[c.id][b][d] || (q[c.id][b][d] = []);
                q[c.id][b][d].push(g) }

            function k(c, b, d, g) {
                if (g || d)
                    if (g)
                        for (var k = 0; k < q[c.id][b][d].length; k++) {
                            if (q[c.id][b][d][k] ===
                                g) { q[c.id][b][d].pop(k, 1);
                                break }
                        } else delete q[c.id][b][d];
                    else q[c.id][b] = {}
            }

            function b(c, b, h) {
                if (q[c][h]) {
                    var g = b.target || b.srcElement,
                        k, m, n = {},
                        p = m = 0;
                    t = 0;
                    for (k in q[c][h]) q[c][h].hasOwnProperty(k) && (m = l(g, k, v[c].element)) && d.matchesEvent(h, v[c].element, m, "_root" == k, b) && (t++, q[c][h][k].match = m, n[t] = q[c][h][k]);
                    b.stopPropagation = function() { b.cancelBubble = !0 };
                    for (m = 0; m <= t; m++)
                        if (n[m])
                            for (p = 0; p < n[m].length; p++) {
                                if (!1 === n[m][p].call(n[m].match, b)) { d.cancel(b);
                                    return }
                                if (b.cancelBubble) return } } }

            function g(c,
                g, h, l) {
                function p(c) {
                    return function(d) { b(m, d, c) } }
                c instanceof Array || (c = [c]);
                h || "function" != typeof g || (h = g, g = "_root");
                var m = this.id,
                    n;
                for (n = 0; n < c.length; n++) q[m] && q[m][c[n]] || d.addEvent(this, c[n], p(c[n])), l ? k(this, c[n], g, h) : u(this, c[n], g, h);
                return this }

            function d(b, g, h, k) {
                if ("string" == typeof b && "function" == typeof g || "string" == typeof g) d(document).on(b, g, h, k || !1);
                if (!(this instanceof d)) {
                    for (var l in v)
                        if (v[l].element === b) return v[l];
                    p++;
                    v[p] = new d(b, p);
                    v[p]._on = v[p].on;
                    v[p].on = function(b, c, d, g) {
                        var h =
                            "function" == typeof c ? c : d;
                        if ("function" == typeof c ? d : g) b = [b], "string" == typeof c && b.push(c), b.push(function(b) {
                            return function(c) { c.defaultPrevented || window[ensightenOptions.ns].Delegate.load(this);
                                if (this.nodeName && "a" != this.nodeName.toLowerCase()) return b.call(this); "undefined" != typeof c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                                b.call(this) } }(h)), this._on.apply(this, b);
                        else return this._on.call(this, b, c, d)
                    };
                    return v[p]
                }
                this.element = b;
                this.id = g
            }
            var x, t = 0,
                p = 0,
                q = {},
                v = {};
            d.prototype.on = function(b,
                d, h) {
                return g.call(this, b, d, h) };
            d.prototype.off = function(b, d, h) {
                return g.call(this, b, d, h, !0) };
            d.cancel = function(b) { b.preventDefault();
                b.stopPropagation() };
            d.addEvent = function(b, d, g) { b.element.addEventListener(d, g, "blur" == d || "focus" == d) };
            d.matchesEvent = function() {
                return !0 };
            d.load = function(b) {
                setTimeout(function(b, c) {
                    return function() {
                        if (b.nodeName && "a" == b.nodeName.toLowerCase()) {
                            if (c && /^javascript\s*\:/.test(c)) return (new Function(unescape(c))).call(window);
                            c && (window.location.href = c) } } }(b, b.href ||
                    ""), 750)
            };
            window[ensightenOptions.ns].Delegate = d
        })();
        (function(l) {
            var u = l.addEvent;
            l.addEvent = function(k, b, g) {
                if (k.element.addEventListener) return u(k, b, g); "focus" == b && (b = "focusin"); "blur" == b && (b = "focusout");
                k.element.attachEvent("on" + b, g) };
            l.cancel = function(k) { k.preventDefault && k.preventDefault();
                k.stopPropagation && k.stopPropagation();
                k.returnValue = !1;
                k.cancelBubble = !0 } })(window[ensightenOptions.ns].Delegate);
        window[ensightenOptions.ns].on = window[ensightenOptions.ns].Delegate;
        Bootstrapper.dataDefinitionIds = [12238, 12239, 12240, 18641, 12241, 18642, 12242, 12243, 12244, 12245, 12246, 12055, 12247, 12248, 12249, 10425];
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.environment ? ensightenLayer.environment : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "environment", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "18641" }) }, 18641) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.userID ? ensightenLayer.userID : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "userID", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12055" }) }, 12055) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.kruxID ? ensightenLayer.kruxID : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "kruxID", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12238" }) }, 12238) }, -1, -1);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var mboxCopyright = "Copyright 1996-2014. Adobe Systems Incorporated. All rights reserved.";
            var TNT = TNT || {};
            TNT.a = TNT.a || {};
            TNT.a.nestedMboxes = [];
            TNT.a.b = {
                "companyName": "Test\x26amp;Target",
                "isProduction": true,
                "adminUrl": "//admin10.testandtarget.omniture.com/admin",
                "clientCode": "globeandmail",
                "serverHost": "globeandmail.tt.omtrdc.net",
                "mboxTimeout": 15E3,
                "mboxLoadedTimeout": 16,
                "mboxFactoryDisabledTimeout": 60 * 60,
                "bodyPollingTimeout": 16,
                "sessionExpirationTimeout": 31 * 60,
                "experienceManagerDisabledTimeout": 30 * 60,
                "experienceManagerTimeout": 5E3,
                "tntIdLifetime": 7776E3,
                "crossDomain": "disabled",
                "trafficDuration": 10368E3,
                "trafficLevelPercentage": 100,
                "clientSessionIdSupport": false,
                "clientTntIdSupport": false,
                "passPageParameters": true,
                "usePersistentCookies": true,
                "crossDomainEnabled": false,
                "crossDomainXOnly": false,
                "imsOrgId": "02A4210654EF032A0A4C98A7@AdobeOrg",
                "includeExperienceManagerPlugin": true,
                "globalMboxName": "target-global-mbox",
                "globalMboxLocationDomId": "",
                "globalMboxAutoCreate": true,
                "experienceManagerPluginUrl": "//cdn.tt.omtrdc.net/cdn/target.js",
                "siteCatalystPluginName": "tt",
                "includeSiteCatalystPlugin": false,
                "mboxVersion": 56,
                "mboxIsSupportedFunction": function() {
                    return true },
                "clientJavascriptFunction": function() {},
                "parametersFunction": function() {
                    return "" },
                "cookieDomainFunction": function() {
                    return mboxCookiePageDomain() }
            };
            TNT.a.c = {};
            TNT.a.c.d = "mboxPage";
            TNT.a.c.e = "mboxMCGVID";
            TNT.a.c.f =
                "mboxMCGLH";
            TNT.a.c.g = "mboxAAMB";
            TNT.a.c.h = "mboxMCAVID";
            TNT.a.c.i = "mboxMCSDID";
            TNT.a.c.j = "mboxCount";
            TNT.a.c.k = "mboxHost";
            TNT.a.c.l = "mboxFactoryId";
            TNT.a.c.m = "mboxPC";
            TNT.a.c.n = "screenHeight";
            TNT.a.c.o = "screenWidth";
            TNT.a.c.p = "browserWidth";
            TNT.a.c.q = "browserHeight";
            TNT.a.c.r = "browserTimeOffset";
            TNT.a.c.s = "colorDepth";
            TNT.a.c.t = "mboxXDomain";
            TNT.a.c.u = "mboxURL";
            TNT.a.c.v = "mboxReferrer";
            TNT.a.c.w = "mboxVersion";
            TNT.a.c.x = "mbox";
            TNT.a.c.y = "mboxId";
            TNT.a.c.z = "mboxDOMLoaded";
            TNT.a.c.A = "mboxTime";
            TNT.a.c.B =
                "scPluginVersion";
            TNT.a.C = {};
            TNT.a.C.D = "mboxDisable";
            TNT.a.C.E = "mboxSession";
            TNT.a.C.F = "mboxEnv";
            TNT.a.C.G = "mboxDebug";
            TNT.a.H = {};
            TNT.a.H.D = "disable";
            TNT.a.H.E = "session";
            TNT.a.H.m = "PC";
            TNT.a.H.I = "level";
            TNT.a.H.J = "check";
            TNT.a.H.G = "debug";
            TNT.a.H.K = "em-disabled";
            TNT.a.L = {};
            TNT.a.L.M = "default";
            TNT.a.L.N = "mbox";
            TNT.a.L.O = "mboxImported-";
            TNT.a.L.P = 6E4;
            TNT.a.L.Q = "mboxDefault";
            TNT.a.L.R = "mboxMarker-";
            TNT.a.L.S = 250;
            TNT.a.L.B = 1;
            TNT.getGlobalMboxName = function() {
                return TNT.a.b.globalMboxName };
            TNT.getGlobalMboxLocation =
                function() {
                    return TNT.a.b.globalMboxLocationDomId };
            TNT.isAutoCreateGlobalMbox = function() {
                return TNT.a.b.globalMboxAutoCreate };
            TNT.getClientMboxExtraParameters = function() {
                return TNT.a.b.parametersFunction() };
            TNT.a.T = {};
            TNT.a.T.U = function(V) {
                var W = {}.toString;
                return W.call(V) === "[object Undefined]" };
            TNT.a.T.X = function(V) {
                var W = {}.toString;
                return W.call(V) === "[object Null]" };
            TNT.a.T.Y = function(V) {
                var T = TNT.a.T;
                if (T.U(V) || T.X(V)) return true;
                return V.length === 0 };
            TNT.a.T.Z = function(V) {
                var W = {}.toString;
                return W.call(V) === "[object Function]"
            };
            TNT.a.T._ = function(V) {
                var W = {}.toString;
                return W.call(V) === "[object Array]" };
            TNT.a.T.ab = function(V) {
                var W = {}.toString;
                return W.call(V) === "[object String]" };
            TNT.a.T.bb = function(V) {
                var W = {}.toString;
                return W.call(V) === "[object Object]" };
            TNT.getTargetPageParameters = function() {
                var T = TNT.a.T;
                var cb = window.targetPageParams;
                if (!T.Z(cb)) return [];
                var db = null;
                try { db = cb() } catch (eb) {}
                if (T.X(db)) return [];
                if (T._(db)) return db;
                if (T.ab(db) && !T.Y(db)) return TNT.a.fb(db);
                if (T.bb(db)) return TNT.a.gb(db, []);
                return []
            };
            TNT.a.fb = function(hb) {
                var db = [];
                var ib = /([^&=]+)=([^&]*)/g;
                var jb = decodeURIComponent;
                var kb = ib.exec(hb);
                while (kb) { db.push([jb(kb[1]), jb(kb[2])].join("\x3d"));
                    kb = ib.exec(hb) }
                return db };
            TNT.a.gb = function(lb, mb) {
                var T = TNT.a.T;
                var db = [];
                for (var nb in lb) {
                    if (!lb.hasOwnProperty(nb)) continue;
                    var V = lb[nb];
                    if (T.bb(V)) { mb.push(nb);
                        db = db.concat(TNT.a.gb(V, mb));
                        mb.pop() } else if (mb.length > 0) db.push([mb.concat(nb).join("."), V].join("\x3d"));
                    else db.push([nb, V].join("\x3d")) }
                return db };
            mboxUrlBuilder =
                function(ob, pb) { this.ob = ob;
                    this.pb = pb;
                    this.qb = [];
                    this.rb = function(u) {
                        return u };
                    this.sb = null };
            mboxUrlBuilder.prototype.addNewParameter = function(tb, V) { this.qb.push({ name: tb, value: V });
                return this };
            mboxUrlBuilder.prototype.addParameterIfAbsent = function(tb, V) {
                if (V) {
                    for (var ub = 0; ub < this.qb.length; ub++) {
                        var vb = this.qb[ub];
                        if (vb.name === tb) return this }
                    this.checkInvalidCharacters(tb);
                    return this.addNewParameter(tb, V) } };
            mboxUrlBuilder.prototype.addParameter = function(tb, V) {
                this.checkInvalidCharacters(tb);
                for (var ub =
                        0; ub < this.qb.length; ub++) {
                    var vb = this.qb[ub];
                    if (vb.name === tb) { vb.value = V;
                        return this } }
                return this.addNewParameter(tb, V)
            };
            mboxUrlBuilder.prototype.addParameters = function(qb) {
                if (!qb) return this;
                for (var ub = 0; ub < qb.length; ub++) {
                    var wb = qb[ub].indexOf("\x3d");
                    if (wb === -1 || wb === 0) continue;
                    this.addParameter(qb[ub].substring(0, wb), qb[ub].substring(wb + 1, qb[ub].length)) }
                return this };
            mboxUrlBuilder.prototype.setServerType = function(xb) { this.yb = xb };
            mboxUrlBuilder.prototype.setBasePath = function(sb) { this.sb = sb };
            mboxUrlBuilder.prototype.setUrlProcessAction =
                function(zb) { this.rb = zb };
            mboxUrlBuilder.prototype.buildUrl = function() {
                var Ab = this.sb ? this.sb : "/m2/" + this.pb + "/mbox/" + this.yb;
                var Bb = document.location.protocol == "file:" ? "http:" : document.location.protocol;
                var u = Bb + "//" + this.ob + Ab;
                var Cb = u.indexOf("?") != -1 ? "\x26" : "?";
                for (var ub = 0; ub < this.qb.length; ub++) {
                    var vb = this.qb[ub];
                    u += Cb + encodeURIComponent(vb.name) + "\x3d" + encodeURIComponent(vb.value);
                    Cb = "\x26" }
                return this.Db(this.rb(u)) };
            mboxUrlBuilder.prototype.getParameters = function() {
                return this.qb };
            mboxUrlBuilder.prototype.setParameters =
                function(qb) { this.qb = qb };
            mboxUrlBuilder.prototype.clone = function() {
                var Eb = new mboxUrlBuilder(this.ob, this.pb);
                Eb.setServerType(this.yb);
                Eb.setBasePath(this.sb);
                Eb.setUrlProcessAction(this.rb);
                for (var ub = 0; ub < this.qb.length; ub++) Eb.addParameter(this.qb[ub].name, this.qb[ub].value);
                return Eb };
            mboxUrlBuilder.prototype.Db = function(Fb) {
                return Fb.replace(/\"/g, "\x26quot;").replace(/>/g, "\x26gt;") };
            mboxUrlBuilder.prototype.checkInvalidCharacters = function(tb) {
                var Gb = new RegExp("('|\")");
                if (Gb.exec(tb)) throw "Parameter '" +
                    tb + "' contains invalid characters";
            };
            mboxStandardFetcher = function() {};
            mboxStandardFetcher.prototype.getType = function() {
                return "standard" };
            mboxStandardFetcher.prototype.fetch = function(Hb) { Hb.setServerType(this.getType());
                // document.write("\x3c" + "scr" + 'ipt src\x3d"' + Hb.buildUrl() + '"\x3e\x3c' + "/scr" + "ipt\x3e") 
            };
            mboxStandardFetcher.prototype.cancel = function() {};
            mboxAjaxFetcher = function() {};
            mboxAjaxFetcher.prototype.getType = function() {
                return "ajax" };
            mboxAjaxFetcher.prototype.fetch = function(Hb) {
                Hb.setServerType(this.getType());
                var u = Hb.buildUrl();
                this.Ib = document.createElement("script");
                this.Ib.src = u;
                document.body.appendChild(this.Ib)
            };
            mboxAjaxFetcher.prototype.cancel = function() {};
            mboxMap = function() { this.Jb = {};
                this.mb = [] };
            mboxMap.prototype.put = function(nb, V) {
                if (!this.Jb[nb]) this.mb[this.mb.length] = nb;
                this.Jb[nb] = V };
            mboxMap.prototype.get = function(nb) {
                return this.Jb[nb] };
            mboxMap.prototype.remove = function(nb) { this.Jb[nb] = undefined;
                var Kb = [];
                for (var i = 0; i < this.mb.length; i++)
                    if (this.mb[i] !== nb) Kb.push(this.mb[i]);
                this.mb = Kb };
            mboxMap.prototype.each = function(zb) {
                for (var ub = 0; ub < this.mb.length; ub++) {
                    var nb = this.mb[ub];
                    var V = this.Jb[nb];
                    if (V) {
                        var db = zb(nb, V);
                        if (db === false) break } } };
            mboxMap.prototype.isEmpty = function() {
                return this.mb.length === 0 };
            mboxFactory = function(Lb, pb, Mb, Nb) {
                var b = TNT.a.b;
                var H = TNT.a.H;
                var C = TNT.a.C;
                var L = TNT.a.L;
                this.Ob = false;
                this.Mb = Mb;
                this.Pb = new mboxList;
                mboxFactories.put(Mb, this);
                this.Qb = b.mboxIsSupportedFunction() && typeof(window.attachEvent || document.addEventListener || window.addEventListener) != "undefined";
                this.Rb = this.Qb && mboxGetPageParameter(C.D) === null;
                var Sb = Mb == L.M;
                var Tb = L.N + (Sb ? "" : "-" + Mb);
                this.Ub = new mboxCookieManager(Tb, b.cookieDomainFunction());
                if (b.crossDomainXOnly) this.Rb = this.Rb && this.Ub.isEnabled();
                this.Rb = this.Rb && this.Ub.getCookie(H.D) === null;
                if (this.isAdmin()) this.enable();
                this.Vb();
                this.Wb = mboxGenerateId();
                this.Xb = mboxScreenHeight();
                this.Yb = mboxScreenWidth();
                this.Zb = mboxBrowserWidth();
                this._b = mboxBrowserHeight();
                this.ac = mboxScreenColorDepth();
                this.bc = mboxBrowserTimeOffset();
                this.cc =
                    new mboxSession(this.Wb, C.E, H.E, b.sessionExpirationTimeout, this.Ub);
                this.dc = new mboxPC(H.m, b.tntIdLifetime, this.Ub);
                this.Hb = new mboxUrlBuilder(Lb, pb);
                this.ec(this.Hb, Sb, Nb);
                this.fc = (new Date).getTime();
                this.gc = this.fc;
                var hc = this;
                this.addOnLoad(function() { hc.gc = (new Date).getTime() });
                if (this.Qb) {
                    this.addOnLoad(function() { hc.Ob = true;
                        hc.getMboxes().each(function(ic) { ic.jc();
                            ic.setFetcher(new mboxAjaxFetcher);
                            ic.finalize() });
                        TNT.a.nestedMboxes = [] });
                    if (this.Rb) {
                        this.limitTraffic(b.trafficLevelPercentage,
                            b.trafficDuration);
                        this.kc();
                        this.lc = new mboxSignaler(this)
                    } else if (!b.isProduction)
                        if (this.isAdmin())
                            if (!this.isEnabled()) alert("mbox disabled, probably due to timeout\n" + "Reset your cookies to re-enable\n(this message will only appear in administrative mode)");
                            else alert("It looks like your browser will not allow " + b.companyName + " to set its administrative cookie. To allow setting the" + " cookie please lower the privacy settings of your browser.\n" + "(this message will only appear in administrative mode)")
                }
            };
            mboxFactory.prototype.forcePCId = function(mc) {
                if (!TNT.a.b.clientTntIdSupport) return;
                if (this.dc.forceId(mc)) this.cc.forceId(mboxGenerateId()) };
            mboxFactory.prototype.forceSessionId = function(mc) {
                if (!TNT.a.b.clientSessionIdSupport) return;
                this.cc.forceId(mc) };
            mboxFactory.prototype.isEnabled = function() {
                return this.Rb };
            mboxFactory.prototype.getDisableReason = function() {
                return this.Ub.getCookie(TNT.a.H.D) };
            mboxFactory.prototype.isSupported = function() {
                return this.Qb };
            mboxFactory.prototype.disable = function(nc,
                oc) {
                if (typeof nc == "undefined") nc = 60 * 60;
                if (typeof oc == "undefined") oc = "unspecified";
                if (!this.isAdmin()) { this.Rb = false;
                    this.Ub.setCookie(TNT.a.H.D, oc, nc) } };
            mboxFactory.prototype.enable = function() { this.Rb = true;
                this.Ub.deleteCookie(TNT.a.H.D) };
            mboxFactory.prototype.isAdmin = function() {
                return document.location.href.indexOf(TNT.a.C.F) != -1 };
            mboxFactory.prototype.limitTraffic = function(pc, nc) {
                if (TNT.a.b.trafficLevelPercentage != 100) {
                    if (pc == 100) return;
                    var qc = true;
                    if (parseInt(this.Ub.getCookie(TNT.a.H.I)) != pc) qc =
                        Math.random() * 100 <= pc;
                    this.Ub.setCookie(TNT.a.H.I, pc, nc);
                    if (!qc) this.disable(60 * 60, "limited by traffic")
                }
            };
            mboxFactory.prototype.addOnLoad = function(rc) {
                if (this.isDomLoaded()) rc();
                else {
                    var sc = false;
                    var tc = function() {
                        if (sc) return;
                        sc = true;
                        rc() };
                    this.uc.push(tc);
                    if (this.isDomLoaded() && !sc) tc() } };
            mboxFactory.prototype.getEllapsedTime = function() {
                return this.gc - this.fc };
            mboxFactory.prototype.getEllapsedTimeUntil = function(A) {
                return A - this.fc };
            mboxFactory.prototype.getMboxes = function() {
                return this.Pb };
            mboxFactory.prototype.get =
                function(x, y) {
                    return this.Pb.get(x).getById(y || 0) };
            mboxFactory.prototype.update = function(x, qb) {
                if (!this.isEnabled()) return;
                var hc = this;
                if (!this.isDomLoaded()) { this.addOnLoad(function() { hc.update(x, qb) });
                    return }
                if (this.Pb.get(x).length() === 0) throw "Mbox " + x + " is not defined";
                this.Pb.get(x).each(function(ic) {
                    var Hb = ic.getUrlBuilder();
                    Hb.addParameter(TNT.a.c.d, mboxGenerateId());
                    hc.vc(Hb);
                    hc.wc(Hb, x);
                    hc.setVisitorIdParameters(Hb, x);
                    ic.load(qb) }) };
            mboxFactory.prototype.setVisitorIdParameters = function(u,
                x) {
                if (typeof Visitor == "undefined" || !TNT.a.b.imsOrgId) return;
                var visitor = Visitor.getInstance(TNT.a.b.imsOrgId);
                if (visitor.isAllowed()) {
                    var addVisitorValueToUrl = function(param, getter, mboxName) {
                        if (visitor[getter]) {
                            var callback = function(value) {
                                if (value) u.addParameter(param, value) };
                            var value;
                            if (typeof mboxName != "undefined") value = visitor[getter]("mbox:" + mboxName);
                            else value = visitor[getter](callback);
                            callback(value) } };
                    addVisitorValueToUrl(TNT.a.c.e, "getMarketingCloudVisitorID");
                    addVisitorValueToUrl(TNT.a.c.f,
                        "getAudienceManagerLocationHint");
                    addVisitorValueToUrl(TNT.a.c.g, "getAudienceManagerBlob");
                    addVisitorValueToUrl(TNT.a.c.h, "getAnalyticsVisitorID");
                    addVisitorValueToUrl(TNT.a.c.i, "getSupplementalDataID", x)
                }
            };
            mboxFactory.prototype.create = function(x, qb, xc) {
                if (!this.isSupported()) return null;
                var yc = new Date;
                var A = yc.getTime() - yc.getTimezoneOffset() * TNT.a.L.P;
                var Hb = this.Hb.clone();
                Hb.addParameter(TNT.a.c.j, this.Pb.length() + 1);
                Hb.addParameter(TNT.a.c.A, A);
                Hb.addParameters(qb);
                this.vc(Hb);
                this.wc(Hb, x);
                this.setVisitorIdParameters(Hb, x);
                var y, zc, ic;
                if (xc) zc = new mboxLocatorNode(xc);
                else {
                    if (this.Ob) throw "The page has already been loaded, can't write marker";
                    zc = new mboxLocatorDefault(this.Ac(x)) }
                try {
                    y = this.Pb.get(x).length();
                    ic = new mbox(x, y, Hb, zc, this.Bc(x), this);
                    if (this.Rb) ic.setFetcher(this.Ob ? new mboxAjaxFetcher : new mboxStandardFetcher);
                    var hc = this;
                    ic.setOnError(function(Cc, xb) { ic.setMessage(Cc);
                        ic.activate();
                        if (!ic.isActivated()) { hc.disable(TNT.a.b.mboxFactoryDisabledTimeout, Cc);
                            window.location.reload(false) } });
                    this.Pb.add(ic)
                } catch (Dc) { this.disable();
                    throw 'Failed creating mbox "' + x + '", the error was: ' + Dc; }
                return ic
            };
            mboxFactory.prototype.vc = function(Hb) {
                var m = this.dc.getId();
                if (m) Hb.addParameter(TNT.a.c.m, m) };
            mboxFactory.prototype.wc = function(Hb, x) {
                var Ec = !TNT.isAutoCreateGlobalMbox() && TNT.getGlobalMboxName() === x;
                if (Ec) Hb.addParameters(TNT.getTargetPageParameters()) };
            mboxFactory.prototype.getCookieManager = function() {
                return this.Ub };
            mboxFactory.prototype.getPageId = function() {
                return this.Wb };
            mboxFactory.prototype.getPCId =
                function() {
                    return this.dc };
            mboxFactory.prototype.getSessionId = function() {
                return this.cc };
            mboxFactory.prototype.getSignaler = function() {
                return this.lc };
            mboxFactory.prototype.getUrlBuilder = function() {
                return this.Hb };
            mboxFactory.prototype.Fc = function(x) {
                return this.Mb + "-" + x + "-" + this.Pb.get(x).length() };
            mboxFactory.prototype.Ac = function(x) {
                return TNT.a.L.R + this.Fc(x) };
            mboxFactory.prototype.Bc = function(x) {
                return TNT.a.L.O + this.Fc(x) };
            mboxFactory.prototype.ec = function(Hb, Sb, Nb) {
                Hb.addParameter(TNT.a.c.k,
                    document.location.hostname);
                Hb.addParameter(TNT.a.c.d, this.Wb);
                Hb.addParameter(TNT.a.c.n, this.Xb);
                Hb.addParameter(TNT.a.c.o, this.Yb);
                Hb.addParameter(TNT.a.c.p, this.Zb);
                Hb.addParameter(TNT.a.c.q, this._b);
                Hb.addParameter(TNT.a.c.r, this.bc);
                Hb.addParameter(TNT.a.c.s, this.ac);
                Hb.addParameter(TNT.a.C.E, this.cc.getId());
                if (!Sb) Hb.addParameter(TNT.a.c.l, this.Mb);
                this.vc(Hb);
                if (TNT.a.b.crossDomainEnabled) Hb.addParameter(TNT.a.c.t, TNT.a.b.crossDomain);
                var c = TNT.getClientMboxExtraParameters();
                if (c) Hb.addParameters(c.split("\x26"));
                Hb.setUrlProcessAction(function(u) {
                    if (TNT.a.b.passPageParameters) { u += "\x26";
                        u += TNT.a.c.u;
                        u += "\x3d" + encodeURIComponent(document.location);
                        var v = encodeURIComponent(document.referrer);
                        if (u.length + v.length < 2E3) { u += "\x26";
                            u += TNT.a.c.v;
                            u += "\x3d" + v } }
                    u += "\x26";
                    u += TNT.a.c.w;
                    u += "\x3d" + Nb;
                    return u })
            };
            mboxFactory.prototype.kc = function() { document.write("\x3cstyle\x3e." + TNT.a.L.Q + " { visibility:hidden; }\x3c/style\x3e") };
            mboxFactory.prototype.isDomLoaded = function() {
                return this.Ob };
            mboxFactory.prototype.Vb = function() {
                if (this.uc) return;
                this.uc = [];
                var hc = this;
                (function() {
                    var Gc = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange";
                    var Hc = false;
                    var Ic = function() {
                        if (Hc) return;
                        Hc = true;
                        for (var i = 0; i < hc.uc.length; ++i) hc.uc[i]() };
                    if (document.addEventListener) { document.addEventListener(Gc, function() { document.removeEventListener(Gc, arguments.callee, false);
                            Ic() }, false);
                        window.addEventListener("load", function() { document.removeEventListener("load", arguments.callee, false);
                            Ic() }, false) } else if (document.attachEvent)
                        if (self !== self.top) document.attachEvent(Gc,
                            function() {
                                if (document.readyState === "complete") { document.detachEvent(Gc, arguments.callee);
                                    Ic() } });
                        else {
                            var Jc = function() {
                                try { document.documentElement.doScroll("left");
                                    Ic() } catch (Kc) { setTimeout(Jc, 13) } };
                            Jc() }
                    if (document.readyState === "complete") Ic()
                })()
            };
            mboxSignaler = function(Lc) { this.Mc = document;
                this.Lc = Lc };
            mboxSignaler.prototype.signal = function(Nc, x) {
                if (!this.Lc.isEnabled()) return;
                var Oc = this.Pc(this.Lc.Ac(x));
                this.Qc(this.Mc.body, Oc);
                var ic = this.Lc.create(x, mboxShiftArray(arguments), Oc);
                var Hb = ic.getUrlBuilder();
                Hb.addParameter(TNT.a.c.d, mboxGenerateId());
                ic.load()
            };
            mboxSignaler.prototype.Pc = function(Rc) {
                var db = this.Mc.createElement("DIV");
                db.id = Rc;
                db.style.visibility = "hidden";
                db.style.display = "none";
                return db };
            mboxSignaler.prototype.Qc = function(Sc, Tc) { Sc.appendChild(Tc) };
            mboxList = function() { this.Pb = [] };
            mboxList.prototype.add = function(ic) {
                var T = TNT.a.T;
                if (T.U(ic) || T.X(ic)) return;
                this.Pb[this.Pb.length] = ic };
            mboxList.prototype.get = function(x) {
                var db = new mboxList;
                for (var ub = 0; ub < this.Pb.length; ub++) {
                    var ic =
                        this.Pb[ub];
                    if (ic.getName() == x) db.add(ic)
                }
                return db
            };
            mboxList.prototype.getById = function(Uc) {
                return this.Pb[Uc] };
            mboxList.prototype.length = function() {
                return this.Pb.length };
            mboxList.prototype.each = function(zb) {
                if (typeof zb !== "function") throw "Action must be a function, was: " + typeof zb;
                for (var ub = 0; ub < this.Pb.length; ub++) zb(this.Pb[ub]) };
            mboxLocatorDefault = function(Vc) { this.Vc = Vc;
                document.write('\x3cdiv id\x3d"' + this.Vc + '" style\x3d"visibility:hidden;display:none"\x3e\x26nbsp;\x3c/div\x3e') };
            mboxLocatorDefault.prototype.locate =
                function() {
                    var Wc = 1;
                    var Tc = document.getElementById(this.Vc);
                    while (Tc) {
                        if (Tc.nodeType == Wc)
                            if (Tc.className == "mboxDefault") return Tc;
                        Tc = Tc.previousSibling }
                    return null };
            mboxLocatorDefault.prototype.force = function() {
                var Xc = document.createElement("div");
                Xc.className = "mboxDefault";
                var Yc = document.getElementById(this.Vc);
                if (Yc) Yc.parentNode.insertBefore(Xc, Yc);
                return Xc };
            mboxLocatorNode = function(Tc) { this.Tc = Tc };
            mboxLocatorNode.prototype.locate = function() {
                return typeof this.Tc == "string" ? document.getElementById(this.Tc) :
                    this.Tc
            };
            mboxLocatorNode.prototype.force = function() {
                return null };
            mboxCreate = function(x) {
                var ic = mboxFactoryDefault.create(x, mboxShiftArray(arguments));
                if (ic && mboxFactoryDefault.isEnabled()) ic.load();
                return ic };
            mboxDefine = function(xc, x) {
                var ic = mboxFactoryDefault.create(x, mboxShiftArray(mboxShiftArray(arguments)), xc);
                return ic };
            mboxUpdate = function(x) { mboxFactoryDefault.update(x, mboxShiftArray(arguments)) };
            mbox = function(tb, Rc, Hb, Zc, _c, Lc) {
                this.ad = null;
                this.bd = 0;
                this.zc = Zc;
                this._c = _c;
                this.cd = null;
                this.dd =
                    new mboxOfferContent;
                this.Xc = null;
                this.Hb = Hb;
                this.message = "";
                this.ed = {};
                this.fd = 0;
                this.Rc = Rc;
                this.tb = tb;
                this.gd();
                Hb.addParameter(TNT.a.c.x, tb);
                Hb.addParameter(TNT.a.c.y, Rc);
                this.hd = function() {};
                this.id = function() {};
                this.jd = null;
                this.kd = document.documentMode >= 10 && !Lc.isDomLoaded();
                if (this.kd) { this.ld = TNT.a.nestedMboxes;
                    this.ld.push(this.tb) }
            };
            mbox.prototype.getId = function() {
                return this.Rc };
            mbox.prototype.gd = function() {
                var maxLength = TNT.a.L.S;
                if (this.tb.length > maxLength) throw "Mbox Name " + this.tb + " exceeds max length of " +
                    maxLength + " characters.";
                else if (this.tb.match(/^\s+|\s+$/g)) throw "Mbox Name " + this.tb + " has leading/trailing whitespace(s).";
            };
            mbox.prototype.getName = function() {
                return this.tb };
            mbox.prototype.getParameters = function() {
                var qb = this.Hb.getParameters();
                var db = [];
                for (var ub = 0; ub < qb.length; ub++)
                    if (qb[ub].name.indexOf("mbox") !== 0) db[db.length] = qb[ub].name + "\x3d" + qb[ub].value;
                return db };
            mbox.prototype.setOnLoad = function(zb) { this.id = zb;
                return this };
            mbox.prototype.setMessage = function(Cc) { this.message = Cc;
                return this };
            mbox.prototype.setOnError = function(hd) { this.hd = hd;
                return this };
            mbox.prototype.setFetcher = function(md) {
                if (this.cd) this.cd.cancel();
                this.cd = md;
                return this };
            mbox.prototype.getFetcher = function() {
                return this.cd };
            mbox.prototype.load = function(qb) {
                if (this.cd === null) return this;
                this.setEventTime("load.start");
                this.cancelTimeout();
                this.bd = 0;
                var Hb = qb && qb.length > 0 ? this.Hb.clone().addParameters(qb) : this.Hb;
                this.cd.fetch(Hb);
                var hc = this;
                this.nd = setTimeout(function() { hc.hd("browser timeout", hc.cd.getType()) }, TNT.a.b.mboxTimeout);
                this.setEventTime("load.end");
                return this
            };
            mbox.prototype.loaded = function() { this.cancelTimeout();
                if (!this.activate()) {
                    var hc = this;
                    setTimeout(function() { hc.loaded() }, TNT.a.b.mboxLoadedTimeout) } };
            mbox.prototype.activate = function() {
                if (this.bd) return this.bd;
                this.setEventTime("activate" + ++this.fd + ".start");
                if (this.kd && this.ld[this.ld.length - 1] !== this.tb) return this.bd;
                if (this.show()) { this.cancelTimeout();
                    this.bd = 1 }
                this.setEventTime("activate" + this.fd + ".end");
                if (this.kd) this.ld.pop();
                return this.bd };
            mbox.prototype.isActivated = function() {
                return this.bd };
            mbox.prototype.setOffer = function(dd) {
                if (dd && dd.show && dd.setOnLoad) this.dd = dd;
                else throw "Invalid offer";
                return this };
            mbox.prototype.getOffer = function() {
                return this.dd };
            mbox.prototype.show = function() { this.setEventTime("show.start");
                var db = this.dd.show(this);
                this.setEventTime(db == 1 ? "show.end.ok" : "show.end");
                return db };
            mbox.prototype.showContent = function(od) {
                if (od === null) return 0;
                if (this.Xc === null || !this.Xc.parentNode) {
                    this.Xc = this.getDefaultDiv();
                    if (this.Xc === null) return 0
                }
                if (this.Xc !== od) { this.pd(this.Xc);
                    this.Xc.parentNode.replaceChild(od, this.Xc);
                    this.Xc = od }
                this.qd(od);
                this.id();
                return 1
            };
            mbox.prototype.hide = function() { this.setEventTime("hide.start");
                var db = this.showContent(this.getDefaultDiv());
                this.setEventTime(db == 1 ? "hide.end.ok" : "hide.end.fail");
                return db };
            mbox.prototype.finalize = function() {
                this.setEventTime("finalize.start");
                this.cancelTimeout();
                if (!this.getDefaultDiv())
                    if (this.zc.force()) this.setMessage("No default content, an empty one has been added");
                    else this.setMessage("Unable to locate mbox");
                if (!this.activate()) { this.hide();
                    this.setEventTime("finalize.end.hide") }
                this.setEventTime("finalize.end.ok")
            };
            mbox.prototype.cancelTimeout = function() {
                if (this.nd) clearTimeout(this.nd);
                if (this.cd) this.cd.cancel() };
            mbox.prototype.getDiv = function() {
                return this.Xc };
            mbox.prototype.getDefaultDiv = function() {
                if (this.jd === null) this.jd = this.zc.locate();
                return this.jd };
            mbox.prototype.setEventTime = function(rd) { this.ed[rd] = (new Date).getTime() };
            mbox.prototype.getEventTimes =
                function() {
                    return this.ed };
            mbox.prototype.getImportName = function() {
                return this._c };
            mbox.prototype.getURL = function() {
                return this.Hb.buildUrl() };
            mbox.prototype.getUrlBuilder = function() {
                return this.Hb };
            mbox.prototype.sd = function(Xc) {
                return Xc.style.display != "none" };
            mbox.prototype.qd = function(Xc) { this.td(Xc, true) };
            mbox.prototype.pd = function(Xc) { this.td(Xc, false) };
            mbox.prototype.td = function(Xc, ud) { Xc.style.visibility = ud ? "visible" : "hidden";
                Xc.style.display = ud ? "block" : "none" };
            mbox.prototype.jc = function() {
                this.kd =
                    false
            };
            mbox.prototype.relocateDefaultDiv = function() { this.jd = this.zc.locate() };
            mboxOfferContent = function() { this.id = function() {} };
            mboxOfferContent.prototype.show = function(ic) {
                var db = ic.showContent(document.getElementById(ic.getImportName()));
                if (db == 1) this.id();
                return db };
            mboxOfferContent.prototype.setOnLoad = function(id) { this.id = id };
            mboxOfferAjax = function(od) { this.od = od;
                this.id = function() {} };
            mboxOfferAjax.prototype.setOnLoad = function(id) { this.id = id };
            mboxOfferAjax.prototype.show = function(ic) {
                var vd = document.createElement("div");
                vd.id = ic.getImportName();
                vd.innerHTML = this.od;
                var db = ic.showContent(vd);
                if (db == 1) this.id();
                return db
            };
            mboxOfferDefault = function() { this.id = function() {} };
            mboxOfferDefault.prototype.setOnLoad = function(id) { this.id = id };
            mboxOfferDefault.prototype.show = function(ic) {
                var db = ic.hide();
                if (db == 1) this.id();
                return db };
            mboxCookieManager = function mboxCookieManager(tb, wd) { this.tb = tb;
                this.wd = wd === "" || wd.indexOf(".") === -1 ? "" : "; domain\x3d" + wd;
                this.xd = new mboxMap;
                this.loadCookies() };
            mboxCookieManager.prototype.isEnabled =
                function() { this.setCookie(TNT.a.H.J, "true", 60);
                    this.loadCookies();
                    return this.getCookie(TNT.a.H.J) == "true" };
            mboxCookieManager.prototype.setCookie = function(tb, V, nc) {
                if (typeof tb != "undefined" && typeof V != "undefined" && typeof nc != "undefined") {
                    var yd = {};
                    yd.name = tb;
                    yd.value = encodeURIComponent(V);
                    yd.expireOn = Math.ceil(nc + (new Date).getTime() / 1E3);
                    this.xd.put(tb, yd);
                    this.saveCookies() } };
            mboxCookieManager.prototype.getCookie = function(tb) {
                var yd = this.xd.get(tb);
                return yd ? decodeURIComponent(yd.value) : null };
            mboxCookieManager.prototype.deleteCookie =
                function(tb) { this.xd.remove(tb);
                    this.saveCookies() };
            mboxCookieManager.prototype.getCookieNames = function(zd) {
                var Ad = [];
                this.xd.each(function(tb, yd) {
                    if (tb.indexOf(zd) === 0) Ad[Ad.length] = tb });
                return Ad };
            mboxCookieManager.prototype.saveCookies = function() {
                var Bd = TNT.a.b.crossDomainXOnly;
                var Cd = TNT.a.H.D;
                var Dd = [];
                var Ed = 0;
                this.xd.each(function(tb, yd) {
                    if (!Bd || tb === Cd) { Dd[Dd.length] = tb + "#" + yd.value + "#" + yd.expireOn;
                        if (Ed < yd.expireOn) Ed = yd.expireOn } });
                var Fd = new Date(Ed * 1E3);
                var Gd = [];
                Gd.push(this.tb, "\x3d",
                    Dd.join("|"));
                if (TNT.a.b.usePersistentCookies) Gd.push("; expires\x3d", Fd.toGMTString());
                Gd.push("; path\x3d/", this.wd);
                document.cookie = Gd.join("")
            };
            mboxCookieManager.prototype.loadCookies = function() {
                this.xd = new mboxMap;
                var Hd = document.cookie.indexOf(this.tb + "\x3d");
                if (Hd != -1) {
                    var Id = document.cookie.indexOf(";", Hd);
                    if (Id == -1) { Id = document.cookie.indexOf(",", Hd);
                        if (Id == -1) Id = document.cookie.length }
                    var Jd = document.cookie.substring(Hd + this.tb.length + 1, Id).split("|");
                    var Kd = Math.ceil((new Date).getTime() /
                        1E3);
                    for (var ub = 0; ub < Jd.length; ub++) {
                        var yd = Jd[ub].split("#");
                        if (Kd <= yd[2]) {
                            var Ld = {};
                            Ld.name = yd[0];
                            Ld.value = yd[1];
                            Ld.expireOn = yd[2];
                            this.xd.put(Ld.name, Ld) } }
                }
            };
            mboxSession = function(Md, Nd, Tb, Od, Ub) { this.Nd = Nd;
                this.Tb = Tb;
                this.Od = Od;
                this.Ub = Ub;
                this.Rc = typeof mboxForceSessionId != "undefined" ? mboxForceSessionId : mboxGetPageParameter(this.Nd);
                if (this.Rc === null || this.Rc.length === 0) { this.Rc = Ub.getCookie(Tb);
                    if (this.Rc === null || this.Rc.length === 0) this.Rc = Md }
                this.Ub.setCookie(Tb, this.Rc, Od) };
            mboxSession.prototype.getId =
                function() {
                    return this.Rc };
            mboxSession.prototype.forceId = function(mc) { this.Rc = mc;
                this.Ub.setCookie(this.Tb, this.Rc, this.Od) };
            mboxPC = function(Tb, Od, Ub) { this.Tb = Tb;
                this.Od = Od;
                this.Ub = Ub;
                this.Rc = typeof mboxForcePCId != "undefined" ? mboxForcePCId : Ub.getCookie(Tb);
                if (this.Rc) Ub.setCookie(Tb, this.Rc, Od) };
            mboxPC.prototype.getId = function() {
                return this.Rc };
            mboxPC.prototype.forceId = function(mc) {
                if (this.Rc != mc) { this.Rc = mc;
                    this.Ub.setCookie(this.Tb, this.Rc, this.Od);
                    return true }
                return false };
            mboxGetPageParameter =
                function(tb) {
                    var db = null;
                    var Pd = new RegExp("\\?[^#]*" + tb + "\x3d([^\x26;#]*)");
                    var Qd = Pd.exec(document.location);
                    if (Qd && Qd.length >= 2) db = Qd[1];
                    return db };
            mboxSetCookie = function(tb, V, nc) {
                return mboxFactoryDefault.getCookieManager().setCookie(tb, V, nc) };
            mboxGetCookie = function(tb) {
                return mboxFactoryDefault.getCookieManager().getCookie(tb) };
            mboxCookiePageDomain = function() {
                var wd = /([^:]*)(:[0-9]{0,5})?/.exec(document.location.host)[1];
                var Rd = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;
                if (!Rd.exec(wd)) {
                    var Sd =
                        /([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/.exec(wd);
                    if (Sd) { wd = Sd[0];
                        if (wd.indexOf("www.") === 0) wd = wd.substr(4) }
                }
                return wd ? wd : ""
            };
            mboxShiftArray = function(Td) {
                var db = [];
                for (var ub = 1; ub < Td.length; ub++) db[db.length] = Td[ub];
                return db };
            mboxGenerateId = function() {
                return (new Date).getTime() + "-" + Math.floor(Math.random() * 999999) };
            mboxScreenHeight = function() {
                return screen.height };
            mboxScreenWidth = function() {
                return screen.width };
            mboxBrowserWidth = function() {
                return window.innerWidth ? window.innerWidth : document.documentElement ?
                    document.documentElement.clientWidth : document.body.clientWidth
            };
            mboxBrowserHeight = function() {
                return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight };
            mboxBrowserTimeOffset = function() {
                return -(new Date).getTimezoneOffset() };
            mboxScreenColorDepth = function() {
                return screen.pixelDepth };
            TNT.a.Ud = function(Vd, Wd, Tb, nc, Ub) {
                if (!Wd.targetJSLoaded) { Ub.setCookie(Tb, true, nc);
                    Vd.location.reload() } };
            TNT.a.Xd = function(Vd, Mc, b, H, Ub) {
                var Yd =
                    "_AT";
                var _d = 50;
                var Tb = H.K;
                var nc = b.experienceManagerDisabledTimeout;
                var ad = b.experienceManagerTimeout;
                var u = '';
                var ae = Vd.setTimeout;
                var be = function(ce) {};
                var de = function(ce) { ae(function() { Vd[Yd].applyWhenReady(ce) }, _d) };
                if (Yd in Vd) return;
                Vd[Yd] = {};
                if (Ub.getCookie(Tb) !== "true") { Mc.write("\x3cscr" + 'ipt src\x3d"' + u + '"\x3e\x3c/sc' + "ript\x3e");
                    Vd[Yd].applyWhenReady = de;
                    ae(function() { TNT.a.Ud(Vd, Vd[Yd], Tb, nc, Ub) }, ad) } else Vd[Yd].applyWhenReady = be
            };
            mboxVizTargetUrl = function(x) {
                if (!mboxFactoryDefault.isEnabled()) return;
                var c = TNT.a.c;
                var P = TNT.a.L.P;
                var pb = TNT.a.b.clientCode;
                var yc = new Date;
                var ee = yc.getTimezoneOffset() * P;
                var Hb = mboxFactoryDefault.getUrlBuilder().clone();
                Hb.setBasePath("/m2/" + pb + "/viztarget");
                Hb.addParameter(c.x, x);
                Hb.addParameter(c.y, 0);
                Hb.addParameter(c.j, mboxFactoryDefault.getMboxes().length() + 1);
                Hb.addParameter(c.A, yc.getTime() - ee);
                Hb.addParameter(c.d, mboxGenerateId());
                Hb.addParameter(c.z, mboxFactoryDefault.isDomLoaded());
                var qb = mboxShiftArray(arguments);
                if (qb && qb.length > 0) Hb.addParameters(qb);
                mboxFactoryDefault.vc(Hb);
                mboxFactoryDefault.wc(Hb, x);
                mboxFactoryDefault.setVisitorIdParameters(Hb, x);
                return Hb.buildUrl()
            };
            TNT.createGlobalMbox = function() {
                var fe = TNT.getGlobalMboxName();
                var ge = TNT.getGlobalMboxLocation();
                var he;
                if (!ge) {
                    ge = "mbox-" + fe + "-" + mboxGenerateId();
                    he = document.createElement("div");
                    he.className = "mboxDefault";
                    he.id = ge;
                    he.style.visibility = "hidden";
                    he.style.display = "none";
                    var ie = setInterval(function() {
                            if (document.body) { clearInterval(ie);
                                document.body.insertBefore(he, document.body.firstChild) } },
                        TNT.a.b.bodyPollingTimeout)
                }
                var je = TNT.getTargetPageParameters();
                var ke = mboxFactoryDefault.create(fe, je, ge);
                if (ke && mboxFactoryDefault.isEnabled()) ke.load()
            };
            TNT.a.le = function(Ub, me, ne) {
                return mboxGetPageParameter(me) || Ub.getCookie(ne) };
            TNT.a.oe = function(b) {
                setTimeout(function() {
                    if (typeof mboxDebugLoaded == "undefined") alert("Could not load the remote debug.\nPlease check your connection to " + b.companyName + " servers") }, 60 * 60);
                var u = b.adminUrl + "/mbox/mbox_debug.jsp?mboxServerHost\x3d" + b.serverHost + "\x26clientCode\x3d" +
                    b.clientCode;
                document.write("\x3c" + "scr" + 'ipt src\x3d"' + u + '"\x3e\x3c' + "/scr" + "ipt\x3e")
            };
            TNT.a.pe = function(b) {
                var T = TNT.a.T;
                return !T.U(b) && !T.X(b) && T.bb(b) };
            TNT.a.qe = function(b, re) {
                var T = TNT.a.T;
                var se;
                var te;
                var V;
                for (var nb in b) { se = b.hasOwnProperty(nb) && re.hasOwnProperty(nb);
                    V = b[nb];
                    te = !T.U(V) && !T.X(V);
                    if (se && te) re[nb] = V }
                return re };
            TNT.a.ue = function() {
                var b = window.targetGlobalSettings;
                if (TNT.a.pe(b)) TNT.a.b = TNT.a.qe(b, TNT.a.b);
                var Nb = TNT.a.b.mboxVersion;
                var ve = TNT.a.b.serverHost;
                var pb = TNT.a.b.clientCode;
                var M = TNT.a.L.M;
                var me = TNT.a.C.G;
                var ne = TNT.a.H.G;
                if (typeof mboxVersion == "undefined") { window.mboxFactories = new mboxMap;
                    window.mboxFactoryDefault = new mboxFactory(ve, pb, M, Nb);
                    window.mboxVersion = Nb }
                if (TNT.a.le(mboxFactoryDefault.getCookieManager(), me, ne)) TNT.a.oe(TNT.a.b)
            };
            TNT.a.ue();
            (function() {
                var b = TNT.a.b;
                var H = TNT.a.H;
                var Ub = mboxFactoryDefault.getCookieManager();
                TNT.a.Xd(window, document, b, H, Ub) })();
            TNT.a.b.clientJavascriptFunction();
            if (TNT.isAutoCreateGlobalMbox());
        }, 942383, [1238635], 307757, [321622]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function() {
                // var gads = document.createElement("script");
                // gads.async = true;
                // gads.type = "text/javascript";
                // var useSSL = "https:" == document.location.protocol;
                // gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                // var node = document.getElementsByTagName("script")[0];
                // node.parentNode.insertBefore(gads, node) 
            })();
            window.googletag = window.googletag || {};
            googletag.cmd =
                googletag.cmd || [];
            googletag.cmd.push(function() { googletag.pubads().disableInitialLoad() });
            if (document.all && !document.getElementById) document.getElementById = function(id) {
                return document.all[id] };
            var adv_AC = "";
            var adv_AC_strRem;
            var adv_AC_strMax = 350;
            var adv_AC_stop = false;
            var adv_asite = "tgam";
            var adv_ldbdW;
            var adv_bids = "";
            var adv_bids_ready = false;
            var adv_bid_ldbd = "";
            var adv_bid_boxr = "";
            var adv_bid_halfpager = "";
            var adv_boxH = 250;
            var adv_boxr_billboard = false;
            var adv_EKWS = "";
            var adv_EKWS_gpt = "";
            var adv_v5_domination =
                false;
            var adv_halfpager = false;
            var adv_hpgrH = 600;
            var adv_hboxH = 125;
            var adv_hpgr_aH = 600;
            var adv_krux = ";";
            var adv_krux_segs = "";
            var adv_krux_user = "";
            var adv_railH = 0;
            var adv_railH_custom;
            var adv_railH_max = 1800;
            var adv_rbx = "0";
            var adv_sponsor = "";
            var adv_railH_maxReset = "";
            var adv_railH_rem;
            var adv_railH_override = false;
            var adv_railH_xptn = false;
            var adv_masterAdUnit_holder = "";
            var advBidsReadyCheck;
            var ads = 0;
            var adv_aHb = "";
            var aTl = "";
            var aPs = "";
            var aTp = "";
            var aSize = "";
            var bcadurl;
            var bcadRelatedurl;
            var bcadRelatedurl2;
            var aURL = window.location.toString();
            var aURL_hostname = window.location.hostname.toString();
            var aURL_pathname = window.location.pathname.toString();
            var aURLe = escape(aURL);
            var adv_aWb = "";
            var d = document;
            var n = navigator;
            var ord;
            var p = parent;
            var DblD = "http://ad.ca.doubleclick.net/N58";
            var DclkD = "http://ad.doubleclick.net/clk;";
            var DsecD = "https://ad.doubleclick.net/N58";
            var GacD = "http://adcounter.theglobeandmail.com/servlet/AdletCounter";
            var GimD = "http://ads.globeandmail.com/images/";
            var sadpg;
            var sadpgb =
                "n";
            var sarena;
            var sCat = "";
            var sdomain;
            var sDoFlashAds = 0;
            var sloc;
            var skw;
            var smode;
            var sops;
            var sURLval = "false";
            var sPP_sub = "";
            var sURL_hub;
            var sURL_subhub;
            var szone;
            var tauOp = false;
            var TGAM = "http://www.theglobeandmail.com/";
            var aDate = new Date;
            var aDay = aDate.getDate();
            var aSec = aDate.getSeconds();
            try {
                if (!ord)
                    if (p.ord) ord = p.ord;
                    else {
                        var abc = Math.random() + "";
                        ord = abc.substring(2, abc.length) } } catch (e) {
                var abc = Math.random() + "";
                ord = abc.substring(2, abc.length) }
            ai = 1;
            adv.gpt_ai = 1;
            adv.gpt_count = 1;
            nc = "";
            adv.gpt_env =
                window.adv && window.adv.__config ? window.adv.__config.env : "qa";
            adv.gpt_canvas = window.adv && window.adv.__config ? window.adv.__config.canvas : false;
            adv.gpt_domination = window.adv && window.adv.__config ? window.adv.__config.domination : false;
            adv.gpt_mobile = window.adv && window.adv.__config ? window.adv.__config.mobi : false;
            adv.gpt_slimcut = window.adv && window.adv.__config ? window.adv.__config.slimcut : true;
            adv.gpt_protocol = "http:";
            if (window.document.location.protocol === "https:") adv.gpt_protocol = "https:";
            var fnDedup = function(a) {
                temp =
                    a.split(",");
                newA = [];
                for (var i = 0; i < temp.length; i++) { isIn = 0;
                    for (var j = 0; j < newA.length; j++)
                        if (temp[i] == newA[j]) isIn = 1;
                    if (isIn === 0) newA.push(temp[i]) }
                b = newA.join(";")
            };
            adv_null = "";
            adv_array_count = 1;
            var fnSetEkws = function() {
                adv_EKWS = "";
                adv.gpt_EKWS = "";
                adv.gpt_EKWS_vid = "";
                a = adv_art_ekws;
                aLen = a.length;
                if (aLen >= adv_AC_strRem) { a = a.substring(0, adv_AC_strRem);
                    advLastIndEKWS = a.lastIndexOf(";");
                    a = a.substring(0, advLastIndEKWS);
                    a = a + ";cull" }
                if (a.indexOf("\x26#039;") > -1) a = a.replace(/\&#039;/gi, "");
                newArray = a.split(";");
                var newA_gpt = [];
                for (i = 0; i < newArray.length; i++) { b = newArray[i];
                    b = fnCharFormat(b);
                    b2 = fnCharFormat(b);
                    if (b !== "" || b2 !== "") { adv_EKWS = ";ekw\x3d" + b + adv_EKWS;
                        newA_gpt[newA_gpt.length] = b2;
                        adv.gpt_EKWS = newA_gpt;
                        adv.gpt_EKWS_vid = b + "," + adv.gpt_EKWS_vid } }
                adv.gpt_EKWS_vid = adv.gpt_EKWS_vid.substr(0, adv.gpt_EKWS_vid.length - 1)
            };
            var fnSwapDivClass = function(adv_div, adv_class, adv_classB) { a_div = document.getElementById(adv_div);
                a_div.className = adv_classB };
            var fnUrlParse = function() {
                if (aURLe.indexOf("%") > -1) aURLe = aURLe.replace(/%\w\w/gi,
                    "/");
                if (aURL.charAt(aURL.length - 1) == "/") aURL = aURL.substr(0, aURL.length - 1)
            };
            var fnGetDivClass = function(a) {
                if (document.getElementById(a)) { adv_div = document.getElementById(a);
                    adv_div_cl = adv_div.className } };
            var fnDivDisplayNone = function(adv_divId) {
                if (document.getElementById(adv_divId)) document.getElementById(adv_divId).style.display = "none" };
            var fnNoAdReq = function(a, b) { a = aPs;
                adv_AC_stop = true;
                fnDivDisplayNone(b) };
            var fnBreakUrl = function(a1, b1, c1, b2, c2, d1, d1r, d2, d2r, c3) {
                sURL = aURL;
                if (sURL.indexOf(a1) > -1) {
                    sURLa =
                        sURL.split(b1);
                    sURLb = sURLa[c1].split(b2);
                    sURLc = sURLb[c2];
                    if (sURLc.indexOf(d1) > -1 || sURLc.indexOf(d2) > -1) { sURLc = sURLc.replace(new RegExp(/d1/gi), d1r);
                        sURLc = sURLc.replace(new RegExp(/d2/gi), d2r);
                        sURLc = sURLc.replace(new RegExp(/\//gi), "-");
                        sURLc3 = sURLc.split("-");
                        advL = sURLc3[c3] }
                }
            };
            var fnCharFormat = function(a) {
                if (a.indexOf(".") > -1) a = a.replace(/\./gi, "");
                advEsc = escape(a);
                if (advEsc.indexOf("%") > -1) a = advEsc.replace(/%\w\w/gi, "");
                return a };
            fnTKT_filter = function() {
                if (sadpgb == "xsocial") adv_cp0 = "x";
                if (sA.indexOf(",") >
                    -1) sA = sA.replace(/\,/gi, ";arena\x3d");
                if (sP == "britishcolumbia");
                if (typeof aPs === "undefined" || aPs === "");
                else {
                    if (aPs == "lugts") { adv.gpt_aSize = [
                            [310, 56],
                            [330, 60],
                            [234, 60]
                        ];
                        aSize = aSize + ",330x60,234x60" }
                    if (aPs == "mobiflex") { adv.gpt_aSize = [
                            [300, 50],
                            [320, 50],
                            [300, 250],
                            [300, 450]
                        ];
                        aSize = aSize + ",320x50,300x250,300x450" }
                    if (adv_railH_maxReset !== "") { adv_railH_custom = true;
                        adv_railH_rem = adv_railH_maxReset;
                        adv_railH_maxReset = "" }
                    if (adv.loc == "sec");
                    else adv_railH_rem = 1E4;
                    if (aPs == "boxr")
                        if (aTp == "bid");
                        else adv_railH_rem =
                            adv_railH_rem - adv_boxH;
                    if (aPs.indexOf("halfbox") > -1)
                        if (adv_AC !== "")
                            if (adv_railH_xptn || adv_railH_override) adv_railH_xptn = false;
                            else if (adv_railH_rem >= 125)
                        if (aTp == "bid");
                        else adv_railH_rem = adv_railH_rem - adv_hboxH;
                    else {
                        if (aPs == "halfbox") fnNoAdReq("halfbox", "halfbox");
                        if (aPs == "halfbox2") fnNoAdReq("halfbox2", "halfbox2") }
                    if (aPs.indexOf("halfpager") > -1)
                        if (aPs == "halfpager")
                            if (sO.indexOf("blockb") > -1 || sO.indexOf("blockd") > -1)
                                if (aTp == "bid");
                                else adv_railH_rem = adv_railH_rem - 250;
                    else if (aSize == "300x600" && adv_railH_rem >=
                        600) { adv.gpt_aSize = [
                            [300, 600],
                            [300, 601],
                            [300, 250],
                            [300, 251],
                            [160, 600]
                        ];
                        aSize = "300x600,300x601,300x250,300x251,160x600";
                        if (aTp == "bid");
                        else adv_railH_rem = adv_railH_rem - 250 } else {
                        if (adv_railH_rem < 600) { adv_hpgr_aH = "250";
                            adv.gpt_aSize = [
                                [300, 250],
                                [300, 251]
                            ];
                            aSize = "300x250,300x251";
                            if (aTp == "bid");
                            else adv_railH_rem = adv_railH_rem - adv_boxH } } else if (aPs == "halfpager2") { adv.gpt_aSize = [
                            [300, 600],
                            [300, 602],
                            [300, 250],
                            [300, 252],
                            [160, 600]
                        ];
                        aSize = "300x600,300x602,300x250,300x252,160x600" } else {
                        adv.gpt_aSize = [
                            [300, 600],
                            [300, 603],
                            [300, 250],
                            [300, 253],
                            [160, 600]
                        ];
                        aSize = "300x600,300x603,300x250,300x253,160x600"
                    }
                    if (aPs == "box2") {
                        if (adv_halfpager) { adv_halfpager = false;
                            if (aTp == "bid");
                            else adv_railH_rem = adv_railH_rem - 350 }
                        if (adv_railH_xptn || adv_railH_override) adv_railH_xptn = false;
                        else if (adv_railH_rem >= 250)
                            if (aTp == "bid");
                            else adv_railH_rem = adv_railH_rem - adv_boxH;
                        else { fnNoAdReq("boxr", "boxr-" + sL + "-2");
                            box2AC = "" } }
                }
                if (adv.site.indexOf("globeauto") > -1)
                    if (adv.zone.indexOf("globedrive") > -1 && adv.loc === "sec")
                        if (aSize.indexOf("300x250") >
                            -1) aSize = aSize + ""
            };
            fnTkt = function(aU, aW, aH, aTl, aTp, aId, id, slot) {
                if (aId === null) { aId = "";
                    adv.gpt_nc = "n" }
                if (slot === null) { aPs = "";
                    slot = null } else { aPs = slot;
                    slot = null }
                aSize = aW + "x" + aH;
                adv.gpt_sizeBase = [aW + "," + aH];
                adv.gpt_aSize = [];
                adv.gpt_aSize = [
                    [aW, aH]
                ];
                adv.adpg = adv.adpg ? adv.adpg : "adpg_n";
                adv.arena = adv.crumb ? adv.arena : "arena_n";
                adv.crumb = adv.crumb ? adv.crumb : "crumb_n";
                adv.last = adv.lastSection ? adv.lastSection : "last_n";
                adv.loc = adv.loc ? adv.loc : "loc_n";
                adv.site = adv.site ? adv.site : "test.theglobeandmail.com";
                adv.sponsor =
                    adv.sponsor ? adv.sponsor : "";
                adv.vert = adv.vertical ? adv.vertical : "gam";
                adv.zone = adv.zone ? adv.zone : "zone_n";
                adv.invest.companyName = adv.invest.companyName ? adv.invest.companyName : "ud";
                adv.invest.exchangeCode = adv.invest.exchangeCode ? adv.invest.exchangeCode : "ud";
                adv.invest.industry = adv.invest.industry ? adv.invest.industry : "ud";
                adv.invest.securityType = adv.invest.securityType ? adv.invest.securityType : "ud";
                adv.invest.symbol = adv.invest.symbol ? adv.invest.symbol : "ud";
                adv.fundId = adv.fundId ? adv.fundId : "n";
                adv.fundCompany =
                    adv.fundCompany ? adv.fundCompany : "n";
                adv.reg.dv = adv.reg.dv ? adv.reg.dv : "n";
                adv.reg.cg = adv.reg.cg ? adv.reg.cg : "n";
                adv.search.skw = adv.search.skw ? adv.search.skw : "n";
                adv.search.financial = adv.search.financial ? adv.search.financial : "n";
                adv.search.cars.make = adv.search.cars.make ? adv.search.cars.make : "n";
                adv.search.cars.model = adv.search.cars.model ? adv.search.cars.model : "n";
                adv.search.cars.segment = adv.search.cars.segment ? adv.search.cars.segment : "n";
                adv.search.cars.year = adv.search.cars.year ? adv.search.cars.year :
                    "n";
                adv.sector = adv.sector ? adv.sector : "n";
                adv.art.byline = adv.art.byline ? adv.art.byline : "n";
                adv.art.categories = adv.art.categories ? adv.art.categories : "n";
                adv.art.credit = adv.art.credit ? adv.art.credit : "n";
                adv.art.headline = adv.art.headline ? adv.art.headline : "n";
                adv.art.id = adv.art.id ? adv.art.id : "n";
                adv.art.keywords = adv.art.keywords ? adv.art.keywords : "n";
                adv.art.sections = adv.art.sections ? adv.art.sections : "gps";
                adv.art.sectionsHier = adv.art.sectionsHier ? adv.art.sectionsHier : "na";
                adv.art.slug = adv.art.slug ? adv.art.slug :
                    "n";
                adv.art.topics = adv.art.topics ? adv.art.topics : "n";
                adv.art.type = adv.art.type ? adv.art.type : "bn";
                var sRepVert = "gnrl";
                sCrumb = adv.crumb;
                adv.mcmid = adv.mcmid ? adv.mcmid : "n";
                if (ai == 1 && adv.gpt_count == 1 || aTp.indexOf("bca") > -1) {
                    if (adv.gpt_count == 1)
                        if (!window.Krux) {
                            window.Krux || ((Krux = function() { Krux.q.push(arguments) }).q = []);
                            var retrieve = function(n) {
                                var m, k = "kx" + n;
                                if (window.localStorage) return window.localStorage[k] || "";
                                else if (navigator.cookieEnabled) {
                                    m = document.cookie.match(k + "\x3d([^;]*)");
                                    return m && unescape(m[1]) ||
                                        ""
                                } else return ""
                            };
                            Krux.user = retrieve("user");
                            Krux.segments = retrieve("segs") ? retrieve("segs").split(",") : [];
                            var dfpp = [];
                            if (Krux.user) dfpp.push("kuid\x3d" + Krux.user);
                            for (var i = 0; i < Krux.segments.length; i++) dfpp.push("ksg\x3d" + Krux.segments[i]);
                            Krux.dfppKeyValues = dfpp.length ? dfpp.join(";") + ";" : ""
                        }
                    if (window.Krux && window.Krux.dfppKeyValues) {
                        adv_krux = window.Krux.dfppKeyValues;
                        adv.gpt_krux_user = window.Krux.user;
                        adv.gpt_krux_segs = window.Krux.segments;
                        adv.gpt_krux_segs_vid = adv.gpt_krux_segs;
                        adv.gpt_krux_user_vid =
                            adv.gpt_krux_user
                    } else { adv.gpt_krux_segs = "n";
                        adv.gpt_krux_user = "n";
                        adv.gpt_krux_segs_vid = "n";
                        adv.gpt_krux_user_vid = "n" }
                    if (adv.art.sectionsHier == "na") sHier = adv.art.sections;
                    else sHier = adv.art.sectionsHier;
                    adv.vert = fnCharFormat(adv.vert);
                    if (adv.vert == "globeandmail") adv.vert = "gam";
                    if (adv.site == "test.theglobeandmail.com");
                    else {
                        if (adv.vert.indexOf("drive") > -1) sRepVert = "auto-drive";
                        if (adv.vert.indexOf("business") > -1 || adv.vert.indexOf("investor") > -1 || adv.vert.indexOf("rob") > -1) {
                            sRepVert = "bsfn";
                            if (adv.vert.indexOf("investor") >
                                -1)
                                if (adv.site.indexOf("globefund.com") > -1);
                                else sRepVert = sRepVert + "-investor";
                            if (adv.vert.indexOf("business") > -1) sRepVert = sRepVert + "-rob"
                        }
                        if (adv.vert.indexOf("sports") > -1) sRepVert = "sprt"
                    }
                    adv.siteReportRoot0 = "";
                    adv.siteReportRoot1 = sRepVert;
                    adv.siteReportRoot2 = sRepVert + "-" + adv.vert;
                    var sCrumbZone0 = "";
                    var sCrumbZone1 = sCrumbZone0;
                    var sCrumbZone2 = sCrumbZone0;
                    if (sCrumb.indexOf("-pubRoot") > -1) {
                        if (sCrumb == "-pubRoot") sCrumbArena0 = "-homepage";
                        sCrumbZone0 = sCrumb.replace(/-pubroot-/gi, "");
                        sCrumbZone0 = sCrumbZone0.replace(/-/gi,
                            "/");
                        sCrumbZone1 = sCrumb.replace(/-pubroot/gi, adv.siteReportRoot1);
                        sCrumbZone1 = sCrumbZone1.replace(/-/gi, "/");
                        sCrumbZone2 = sCrumb.replace(/-pubroot/gi, adv.siteReportRoot2);
                        sCrumbZone2 = sCrumbZone0.replace(/-/gi, "/")
                    }
                    adv.zone = adv.vert + "/" + sCrumbZone0;
                    if (adv.zone == "gam//pubRoot") adv.zone = "breakingnews-home";
                    else adv.zone = sCrumbZone0;
                    if (adv.adpg == "homepage") { adv.zone = "breakingnews-home";
                        sCrumbZone2 = "homepage" }
                    if (adv.zone.indexOf("investor/globeinvestor") > -1) adv.zone = adv.zone.replace("investor/globeinvestor/",
                        "investor/gi/");
                    if (adv.adpg.substring(0, 6) == "topic_") { sCrumb = sCrumb + "-topic";
                        adv_adpg_topic = fnCharFormat(adv.adpg);
                        if (adv_adpg_topic.indexOf("-") > -1) adv_adpg_topic = adv_adpg_topic.replace(/-/gi, "");
                        adv.art.topics = adv_adpg_topic.replace(/topic_/gi, "");
                        adv.adpg = adv_adpg_topic;
                        adv.zone = "topic";
                        sCrumbZone2 = "topic" }
                    var fnSetPP = function() {
                        sPP = "";
                        sPPstr = sCrumbZone2;
                        newArray = sPPstr.split("/");
                        adv.gpt_pp1 = "n";
                        adv.gpt_pp2 = "n";
                        adv.gpt_pp3 = "n";
                        adv.gpt_pp4 = "n";
                        adv.gpt_pp5 = "n";
                        var newA_gpt_pp = [];
                        adv_pp_c = 0;
                        for (i =
                            0; i < newArray.length; i++) { advPP = "pp" + i + "\x3d" + newArray[i] + ";";
                            sPP = advPP + sPP;
                            b = newArray[i];
                            b2 = fnCharFormat(b);
                            if (b !== "" || b2 !== "") { newA_gpt_pp[newA_gpt_pp.length] = b2;
                                adv_PrimePath_gpt = newA_gpt_pp;
                                adv_pp_c = adv_pp_c + 1 } }
                        adv.gpt_pp0 = adv_PrimePath_gpt[0];
                        if (adv_pp_c > 1) adv.gpt_pp1 = adv_PrimePath_gpt[1];
                        if (adv_pp_c > 2) adv.gpt_pp2 = adv_PrimePath_gpt[2];
                        if (adv_pp_c > 3) adv.gpt_pp3 = adv_PrimePath_gpt[3];
                        if (adv_pp_c > 4) adv.gpt_pp4 = adv_PrimePath_gpt[4];
                        if (adv_pp_c > 5) adv.gpt_pp5 = adv_PrimePath_gpt[5];
                        adv.gpt_sPP_vid = sPP
                    };
                    fnSetPP();
                    var sCrumbArena0 = "";
                    var sCrumbArena1 = sCrumbArena0;
                    var sCrumbArena2 = sCrumbArena0;
                    if (sCrumb.indexOf("-pubRoot") > -1) {
                        if (sCrumb == "-pubRoot") sCrumbArena0 = "-homepage";
                        else sCrumbArena0 = sCrumb.replace(/-pubroot-/gi, "");
                        sCrumbArena0 = sCrumbArena0.replace(/-/gi, ";arena\x3d");
                        sCrumbArena1 = sCrumb.replace(/-pubroot/gi, adv.siteReportRoot1);
                        sCrumbArena1 = sCrumbArena1.replace(/-/gi, ";arena\x3d");
                        sCrumbArena2 = sCrumb.replace(/-pubroot/gi, adv.siteReportRoot2);
                        sCrumbArena2 = sCrumbArena2.replace(/-/gi, ",");
                        fnDedup(sCrumbArena2);
                        sCrumbArena2 = b.replace(/;/gi, ";arena\x3d")
                    }
                    if (sHier === "na" || sHier === "gps");
                    else {
                        sHierArena0 = sHier;
                        sHierArena0 = sHierArena0.replace(/-/gi, ";arena\x3d");
                        sHierArena1 = adv.siteReportRoot1 + "," + sHier;
                        sHierArena1 = sHierArena1.replace(/:/gi, ",");
                        sHierArena1 = sHierArena1.replace(/-/gi, ",");
                        fnDedup(sHierArena1);
                        sHierArena1 = b.replace(/;/gi, ";arena\x3d");
                        sHierArena2 = adv.siteReportRoot2 + "," + sHier;
                        sHierArena2 = sHierArena2.replace(/-/gi, ",");
                        sHierArena2 = sHierArena2.replace(/:/gi, ",");
                        if (sHierArena2.indexOf("business") >
                            -1) sHierArena2 = sHierArena2 + ",rob";
                        fnDedup(sHierArena2);
                        sHierArena2 = b.replace(/;/gi, ";arena\x3d")
                    }
                    adv_cp0 = "n";
                    adv.arena = sCrumbArena2;
                    if (adv.loc === "sec") { adv.arena = sCrumbArena2;
                        adv_cp0 = "n" }
                    if (adv.loc === "art") {
                        adv_sectHierLen = sHierArena2.length;
                        if (adv_sectHierLen >= 375) { sHierArena2 = sHierArena2.substring(0, 375);
                            advLastInd = sHierArena2.lastIndexOf(";");
                            sHierArena2 = sHierArena2.substring(0, advLastInd);
                            sHierArena2 = sHierArena2 + ";arena\x3dcull;" }
                        adv_sectHierLenFin = sHierArena2.length;
                        adv.arena = sHierArena2;
                        adv_cp0 =
                            adv.last;
                        adv_AC_strRem = adv_AC_strMax - adv_sectHierLenFin
                    }
                    var fnGPT_Arena = function() {
                        var newA_gpt = [];
                        a = adv.arena;
                        a = a.replace(/arena=/gi, "");
                        newArray = a.split(";");
                        for (i = 0; i < newArray.length; i++) { b = newArray[i];
                            b = fnCharFormat(b);
                            if (b !== "") { newA_gpt[newA_gpt.length] = b;
                                adv.gpt_arena = newA_gpt } } };
                    fnGPT_Arena();
                    adv_art_topics = adv.art.topics;
                    if (adv_art_topics === "n") { adv_topics = "atpc\x3dn;";
                        adv.gpt_topics = "n";
                        adv.gpt_topics_vid = "n" } else {
                        var fnSetTopics = function() {
                            var newA_gpt = [];
                            adv_topics = "";
                            adv.gpt_topics_vid =
                                "";
                            a = adv_art_topics;
                            newArray = a.split(",");
                            for (i = 0; i < newArray.length; i++) { b = newArray[i];
                                b = fnCharFormat(b);
                                b2 = fnCharFormat(b);
                                if (b !== "" || b2 !== "") { adv_topics = "atpc\x3d" + b + ";" + adv_topics;
                                    newA_gpt[newA_gpt.length] = b2;
                                    adv.gpt_topics = newA_gpt;
                                    adv.gpt_topics_vid = b + "," + adv.gpt_topics_vid } }
                            adv.gpt_topics_vid = adv.gpt_topics_vid.substr(0, adv.gpt_topics_vid.length - 1)
                        };
                        fnSetTopics()
                    }
                    adv_reg_dv = adv.reg.dv;
                    adv_reg_cg = adv.reg.cg;
                    adv_reg_string = ";rgdv\x3d" + adv_reg_dv + ";rgcg\x3d" + adv_reg_cg;
                    adv.gpt_reg_dv = adv.reg.dv;
                    adv.gpt_reg_cg = adv.reg.cg;
                    adv.gpt_reg_string_vid = adv_reg_string;
                    if (adv.gpt_reg_string_vid.indexOf(";") > -1) adv.gpt_reg_string_vid = adv.gpt_reg_string_vid.replace(/;/gi, "\x26");
                    if (adv.art.categories === "n") adv_pgsb = "n";
                    else adv_pgsb = fnCharFormat(adv.art.categories);
                    sadpgb = adv_pgsb;
                    smode = adv.art.type;
                    adv_art_ekws = adv.art.keywords;
                    if (adv_art_ekws === "n") { adv_EKWS = "ekw\x3dn";
                        adv.gpt_EKWS = "n";
                        adv.gpt_EKWS_vid = "n" } else {
                        fnSetEkws();
                        var advIsIn = function(x, y) {
                            var arr = x;
                            var a = x.indexOf(y);
                            if (a > -1) {
                                advIntercept =
                                    y;
                                return advIntercept
                            }
                        };
                        advIsIn(adv.gpt_EKWS, "advblackout");
                        advIsIn(adv.gpt_EKWS, "advnoslimcut")
                    }
                    adv_artId = adv.art.id;
                    if (adv.art.byline === "n") adv_byln0 = "n";
                    else adv_byln0 = fnCharFormat(adv.art.byline);
                    if (adv.art.slug === "n") adv_slug0 = "n";
                    else adv_slug0 = fnCharFormat(adv.art.slug);
                    if (adv.search.financial === "n") adv_searchFin = "n";
                    else adv_searchFin = fnCharFormat(adv.search.financial);
                    aPV0 = adv_byln0;
                    aPV1 = adv_slug0;
                    aPV2 = adv_artId;
                    aPV3 = "n";
                    aPV4 = "n";
                    aPV5 = "n";
                    aPV6 = "n";
                    aPV7 = "n";
                    aPV8 = "n";
                    if (adv.site.indexOf("globeauto") >
                        -1) {
                        if (adv.search.cars.make === "n") adv_make = "n";
                        else adv_make = fnCharFormat(adv.search.cars.make);
                        if (adv.search.cars.model === "n") adv_model = "n";
                        else adv_model = fnCharFormat(adv.search.cars.model);
                        if (adv.search.cars.segment === "n") adv_segment = "n";
                        else adv_segment = fnCharFormat(adv.search.cars.segment);
                        if (adv.search.cars.year === "n") adv_year = "n";
                        else adv_year = fnCharFormat(adv.search.cars.year);
                        aPV3 = adv_make;
                        aPV4 = adv_model;
                        aPV5 = adv_segment;
                        aPV6 = adv_year }
                    if (adv.vert.indexOf("investor") > -1) {
                        if (adv.fundCompany ===
                            "n") adv_fndco = "n";
                        else adv_fndco = fnCharFormat(adv.fundCompany);
                        if (sCrumb.indexOf("fundlookup") > -1)
                            if (adv_fndco === "n")
                                if (aURL.indexOf("cid\x3d") > -1) { fnBreakUrl("cid", "cid\x3d", "1", ".", "0", "-", "0", "\x26", "", "0");
                                    if (advL.indexOf("\x26cn\x3d") > -1) { advL2 = advL.split("\x26cn\x3d");
                                        adv_fndco = advL2[0] } }
                        adv_fndId = adv.fundId;
                        aPV3 = adv_fndco;
                        aPV4 = adv_fndId;
                        if (adv.sector === "n") adv_sector = "n";
                        else adv_sector = fnCharFormat(adv.sector);
                        if (adv.invest.companyName === "ud") adv_inv_coName = "n";
                        else adv_inv_coName = fnCharFormat(adv.invest.companyName);
                        if (adv.invest.exchangeCode === "ud") adv_inv_exchCode = "n";
                        else adv_inv_exchCode = fnCharFormat(adv.invest.exchangeCode);
                        if (adv.invest.industry === "ud") adv_inv_industry = "n";
                        else adv_inv_industry = fnCharFormat(adv.invest.industry);
                        if (adv.invest.securityType === "ud") adv_inv_securityType = "n";
                        else adv_inv_securityType = fnCharFormat(adv.invest.securityType);
                        if (adv.invest.symbol === "ud") adv_inv_symbol = "n";
                        else adv_inv_symbol = fnCharFormat(adv.invest.symbol);
                        if (adv.site.indexOf("globeinvestor") > -1) {
                            aPV3 = adv_inv_coName;
                            aPV4 = adv_inv_symbol;
                            aPV5 = adv_sector;
                            aPV6 = adv_inv_industry;
                            aPV7 = adv_inv_exchCode;
                            aPV8 = adv_inv_securityType
                        }
                    }
                    adv.gpt_custom_pv8 = aPV8;
                    adv.gpt_custom_pv7 = aPV7;
                    adv.gpt_custom_pv6 = aPV6;
                    adv.gpt_custom_pv5 = aPV5;
                    adv.gpt_custom_pv4 = aPV4;
                    adv.gpt_custom_pv3 = aPV3;
                    adv.gpt_custom_pv2 = aPV2;
                    adv.gpt_custom_pv1 = aPV1;
                    adv.gpt_custom_pv0 = aPV0;
                    adv_pgVal_custom = ";pv8\x3d" + aPV8 + ";pv7\x3d" + aPV7 + ";pv6\x3d" + aPV6 + ";pv5\x3d" + aPV5 + ";pv4\x3d" + aPV4 + ";pv3\x3d" + aPV3 + ";pv2\x3d" + aPV2 + ";pv1\x3d" + aPV1 + ";pv0\x3d" + aPV0 + ";";
                    adv_pgVal_custom =
                        adv_pgVal_custom.replace(new RegExp(/\.,/gi), "");
                    adv_cp0e = escape(adv_cp0);
                    if (adv_cp0e.indexOf("%") > -1) adv_cp0 = adv_cp0e.replace(/%\w\w/gi, "");
                    adv.gpt_cp0 = adv_cp0;
                    sEv = adv.vert;
                    sA = "arena\x3d" + adv.arena;
                    skw = adv.search.skw;
                    if (typeof skw === "undefined") skw = "n";
                    if (skw === "n");
                    else {
                        var adv_skwE = escape(skw);
                        if (adv_skwE.indexOf(".") > -1) adv_skwE = adv_skwE.replace(new RegExp(/\./gi), "");
                        if (adv_skwE.indexOf("+") > -1) adv_skwE = adv_skwE.replace(new RegExp(/\+/gi), "_");
                        if (adv_skwE.indexOf("-") > -1) adv_skwE = adv_skwE.replace(/-/gi,
                            "");
                        if (adv_skwE.indexOf(";") > -1) adv_skwE = adv_skwE.replace(/;/gi, "");
                        if (adv_skwE.indexOf("/") > -1) adv_skwE = adv_skwE.replace(new RegExp(/\//gi), "");
                        if (adv_skwE.indexOf("%") > -1) adv_skwE = adv_skwE.replace(/%\w\w/gi, "");
                        skw = adv_skwE
                    }
                    adv.gpt_kw = skw;
                    sL = adv.loc;
                    sM = smode ? smode : "n"
                }
                sD = adv.site;
                sZ = adv.zone;
                sP = adv.adpg;
                sPs = sadpgb;
                sRv = sRepVert;
                if (adv.wireframe && aTp == "gpt") aTp = "i";
                adv.gpt_ptf = aTp;
                adv_pgVal = "ptf\x3d" + aTp + adv_pgVal_custom;
                adv_pgVal = adv_pgVal.replace(new RegExp(/\.,/gi), "");
                sPv = adv_pgVal;
                sO = sops ? sops :
                    "n";
                fnTKT_filter();
                aTl = ai;
                adv.gpt.aTl = aTl;
                if (aTp == "gpt") adv.gpt_count = adv.gpt_count + 1;
                else if (aTp == "bid");
                else { ai = ai + 1;
                    adv.gpt_ai = adv.gpt_ai + 1 }
                if (aTp == "i") {
                    if (adv_aWb === "");
                    else { aW = adv_aWb;
                        adv_aWb = "" }
                    if (adv_aHb === "");
                    else { aH = adv_aHb;
                        adv_aHb = "" } }
                adv_ACi = "iframe";
                adv_ACiv = 'width\x3d"' + aW + '" height\x3d"' + aH + '" id\x3d"ad' + aTl + '" frameborder\x3d"0" marginheight\x3d"0" marginwidth\x3d"0" name\x3d"ad' + aTl + '" scrolling\x3d"no"';
                adv_ACj = "scr" + "ipt";
                adv_ACjl = ' type\x3d"text/javascript"';
                adv_ACta = "" + sD + "/" +
                    sZ + ";";
                adv_ACta = adv_ACta.toLowerCase();
                if (aTp.indexOf("bca") > -1 || aTp.indexOf("v") > -1) { aSize = "576x324";
                    if (aTp == "bca" || aTp == "bcarelated" || aTp == "flv") aPs = "video" }
                if (sM == "video" || aTp == "i") { sCat = ";!c\x3dtla";
                    if (aTp == "i") sCat = ";!c\x3dootb" + sCat } else sCat = "";
                if (adv.sponsor === "");
                else adv_sponsor = ";spnr\x3d" + adv.sponsor;
                if (aSize == "300x250" && aPs == "video") aPs = "vcoad";
                if (aPs.indexOf("ldbd") > -1)
                    if (aTp === "i");
                    else {
                        adv.gpt_aSize = [
                            [aW, aH],
                            [960, 90],
                            [970, 250],
                            [1E3, 250]
                        ];
                        aSize = aSize + ",960x90,970x250,1000x250";
                        adv_rbx =
                            "1";
                        if (aId === "domination") adv_v5_domination = true;
                        if (adv.vert.indexOf("rob") > -1)
                            if (sA.indexOf("careers") > -1)
                                if (sA.indexOf("businesseducation") > -1 || sA.indexOf("managing") > -1);
                                else adv_rbx = "0"
                    }
                if (aPs == "boxr")
                    if (adv.art.type == "blog" || adv.art.type == "column" || adv.art.type == "news") { adv.gpt_aSize = [
                            [aW, aH],
                            [300, 600],
                            [300, 1050]
                        ];
                        aSize = aSize + ",300x600,300x1050" } else { adv.gpt_aSize = [
                            [aW, aH]
                        ];
                        aSize = aSize }
                if (adv.loc == "sec")
                    if (aPs == "boxr")
                        if (document.getElementById("boxr-sec-1"))
                            if (adv.gpt_domination || adv_v5_domination) {
                                adv.gpt_aSize = [
                                    [aW, aH],
                                    [460, 650]
                                ];
                                aSize = aSize + ",460x650";
                                adv_railH_rem = adv_railH_rem - 400
                            } else { fnGetDivClass("boxr-sec-1");
                                if (adv_div_cl.indexOf("addomination") > -1) { adv_boxr_billboard = true;
                                    adv.gpt_aSize = [
                                        [aW, aH],
                                        [460, 650]
                                    ];
                                    aSize = aSize + ",460x650";
                                    adv_railH_rem = adv_railH_rem - 400 } }
                if (aPs == "box2") { adv.gpt_aSize = [
                        [aW, aH],
                        [300, 252]
                    ];
                    aSize = aSize + ",300x252" }
                if (aPs == "box3") { adv.gpt_aSize = [
                        [aW, aH],
                        [300, 253]
                    ];
                    aSize = aSize + ",300x253" }
                if (aPs == "box4") { adv.gpt_aSize = [
                        [aW, aH],
                        [300, 254]
                    ];
                    aSize = aSize + ",300x254" }
                if (aPs == "boxbsr") {
                    adv.gpt_aSize = [
                        [aW, aH],
                        [300, 255]
                    ];
                    aSize = aSize + ",300x255"
                }
                if (aPs == "boxbsl") { adv.gpt_aSize = [
                        [aW, aH],
                        [300, 256]
                    ];
                    aSize = aSize + ",300x256" }
                if (aPs == "boxbsc") { adv.gpt_aSize = [
                        [aW, aH],
                        [300, 257]
                    ];
                    aSize = aSize + ",300x257" }
                if (aPs !== "ldbd" || aPs !== "lug" || aPs !== "boxr" || aPs !== "video")
                    if (sO.indexOf("block") > -1)
                        if (sO.indexOf("blockb") > -1 || sO.indexOf("blockd") > -1) {
                            if (aPs == "halfpager") {
                                if (sO.indexOf("160x600") > -1) { adv.gpt_aSize = [
                                        [160, 600]
                                    ];
                                    aSize = "160x600" }
                                if (sO.indexOf("300x600") > -1) { adv.gpt_aSize = [
                                        [300, 600]
                                    ];
                                    aSize = "300x600" }
                                if (sO.indexOf("300x250") >
                                    -1) { adv.gpt_aSize = [
                                        [300, 251]
                                    ];
                                    aSize = "300x251" }
                            }
                            if (aPs == "box2") { adv.gpt_aSize = [
                                    [300, 252]
                                ];
                                aSize = "300x252" }
                            if (aPs == "box3") { adv.gpt_aSize = [
                                    [300, 253]
                                ];
                                aSize = "300x253" }
                            if (aPs == "box4") { adv.gpt_aSize = [
                                    [300, 254]
                                ];
                                aSize = "300x254" }
                            if (aPs == "boxbsr") { adv.gpt_aSize = [
                                    [300, 255]
                                ];
                                aSize = "300x255" }
                            if (aPs == "boxbsl") { adv.gpt_aSize = [
                                    [300, 256]
                                ];
                                aSize = "300x256" }
                            if (aPs == "boxbsc") { adv.gpt_aSize = [
                                    [300, 257]
                                ];
                                aSize = "300x257" }
                        }
                if (aPs == "boxr") adv_bids = adv_bid_boxr;
                if (aPs == "halfpager") {
                    adv_bids = adv_bid_halfpager;
                    if (adv.gpt_canvas) aId =
                        "canvas"
                }
                if (aPs == "ldbd") adv_bids = adv_bid_ldbd;
                adv_ACtbV1 = adv_EKWS + ";" + sPv + "mode\x3d" + sM + ";loc\x3d" + sL + ";pgsb\x3d" + sPs + ";" + adv_topics + "adpg\x3d" + sP + ";" + sPP + "" + sA + "" + adv_reg_string + ";rbx\x3d" + adv_rbx + ";asite\x3d" + adv_asite + ";cp0\x3d" + adv_cp0 + ";ops\x3d" + sO + ";";
                adv_ACtbV1 = adv_ACtbV1.toLowerCase();
                adv_ACtbV2 = "nc\x3d" + aId + ";";
                adv_ACtbV3 = adv_sponsor + adv_bids + "kw\x3d" + skw + ";pos\x3d" + aPs + ";sz\x3d" + aSize + ";tile\x3d" + aTl + "" + sCat + ";";
                adv_ACtbV3 = adv_ACtbV3.toLowerCase();
                adv_ACtbV = adv_ACtbV1 + adv_ACtbV2 + adv_ACtbV3;
                adv.gpt_mode = sM;
                adv.gpt_loc = sL;
                adv.gpt_adpg = sP;
                adv.gpt_asite = adv_asite;
                adv.gpt_cp0 = adv_cp0;
                adv.gpt_ops = sO;
                adv.gpt_rbx = adv_rbx;
                adv.gpt_mcmid = adv.mcmid;
                adv.gpt_sPP = sPP;
                if (adv.gpt_sPP.indexOf(";") > -1) { adv.gpt_sPP_vid = adv.gpt_sPP.replace(/;/gi, "\x26");
                    adv.gpt_sPP = adv.gpt_sPP_vid }
                if (typeof aId == "undefined" || aId === "") adv.gpt_nc = "n";
                else adv.gpt_nc = aId;
                adv.gpt_asite = adv_asite;
                adv.gpt_pos = aPs;
                adv.gpt_size = adv.gpt_aSize;
                adv.gpt_sPv = sPv;
                if (adv.gpt_sPv.indexOf(";") > -1) {
                    adv.gpt_sPv_vid = adv.gpt_sPv.replace(/;/gi,
                        "\x26");
                    adv.gpt_sPv = adv.gpt_sPv_vid
                }
                adv.gpt_dsply_custParams = adv.gpt_sPv + "ekw\x3d" + adv.gpt_EKWS_vid + "\x26mode\x3d" + adv.gpt_mode + "\x26loc\x3d" + adv.gpt_loc + "\x26atpc\x3d" + adv.gpt_topics_vid + "\x26adpg\x3d" + adv.gpt_adpg + "\x26" + adv.gpt_sPP_vid + "arena\x3d" + adv.gpt_arena + adv.gpt_reg_string_vid + "\x26asite\x3d" + adv.gpt_asite + "\x26cp0\x3d" + adv.gpt_cp0 + "\x26ops\x3d" + adv.gpt_ops + "\x26nc\x3d" + adv.gpt_nc + "\x26pos\x3d" + adv.gpt_pos + "\x26kuid\x3d" + adv.gpt_krux_user_vid + "\x26ksg\x3d" + adv.gpt_krux_segs_vid + "\x26mcmid\x3d" +
                    adv.gpt_mcmid;
                adv.gpt_dsply_custParamsEnc = encodeURIComponent(adv.gpt_dsply_custParams);
                adv_ACta_sD = sD;
                adv_ACta_sZ = sZ;
                adv.gpt_adUnit = adv_ACta_sD + "/" + adv_ACta_sZ;
                if (adv.gpt_mobile && sD !== "test.theglobeandmail.com" || aTp.indexOf("mediavoice") > -1) { adv_site_temp = sD;
                    adv_ACta_sD = "mob.tgam.mobi";
                    if (aTp.indexOf("mediavoice") > -1) adv_ACta_sD = "native.tgam.mediavoice";
                    adv.gpt_adUnit = adv_ACta_sD + "/" + adv_ACta_sZ;
                    adv_ACta_sD = adv_site_temp }
                adv.gpt_adUnit_native_tgam = "/58/native.tgam.mediavoice" + "/" + adv_ACta_sZ;
                adv.gpt_adUnit_native_tgam_test =
                    "/58/test.theglobeandmail.com" + "/" + adv_ACta_sZ;
                if (adv_ACta_sD.indexOf(".") > -1) adv_ACta_sD = adv_ACta_sD.replace(/\./gi, "");
                if (adv_ACta_sZ.indexOf("-") > -1) adv_ACta_sZ = adv_ACta_sZ.replace(/-/gi, "");
                adv_ACtaV = "site\x3d" + adv_ACta_sD + ";zone\x3d" + adv_ACta_sZ + ";";
                adv_AC_uStr = adv_ACtaV + adv_ACtbV;
                if (adv_AC_uStr.indexOf("\x3d") > -1) adv_AC_uStr = adv_AC_uStr.replace(/=/gi, "-");
                if (adv_AC_uStr.indexOf(";") > -1) adv_AC_uStr = adv_AC_uStr.replace(/;/gi, "|");
                if (adv_AC_uStr.indexOf("/") > -1) adv_AC_uStr = adv_AC_uStr.replace(new RegExp(/\//gi),
                    "_");
                adv_ACtb = adv_ACtbV + adv_krux + "ord\x3d" + ord + "";
                var adv_ajax_abc = Math.random() + "";
                adv_ajax_ord = adv_ajax_abc.substring(2, adv_ajax_abc.length);
                adv_ACtb_ajax = adv_ACtbV + adv_krux + "ord\x3d" + adv_ajax_ord + "";
                adv_AC_strFlashIframe = DblD + "/adi/" + adv_ACta + adv_ACtb + "?";
                if (aTp == "i") adv_AC = "\x3c" + adv_ACi + ' src\x3d"' + DblD + "/adi/" + adv_ACta + "" + adv_ACtb + '?" ' + adv_ACiv + "\x3e\x3c" + adv_ACj + " " + adv_ACjl + ' src\x3d"' + DblD + "/adj/" + adv_ACta + "abr\x3d!ie;" + adv_ACtb + '?"\x3e\x3c/' + adv_ACj + "\x3e\x3c/" + adv_ACi + "\x3e";
                else adv_AC =
                    "\x3c" + adv_ACj + " " + adv_ACjl + ' src\x3d"' + DblD + "/adj/" + adv_ACta + "" + adv_ACtb + '?"\x3e\x3c/' + adv_ACj + "\x3e";
                if (aTp.indexOf("bca") > -1) {
                    adv.gpt_vid_ciuSizes = "ciu_szs\x3d300x250,300x600\x26";
                    if (adv.gpt_mobile || aPs == "emb" || aPs == "reuterstv") adv.gpt_vid_ciuSizes = "";
                    adv.gpt_vid_refer = encodeURIComponent(aURL);
                    adv.gpt_vid_desc = encodeURIComponent(aURL);
                    adv.gpt_vid_custParams = adv.gpt_sPv_vid + "ekw\x3d" + adv.gpt_EKWS_vid + "\x26mode\x3d" + adv.gpt_mode + "\x26loc\x3d" + adv.gpt_loc + "\x26atpc\x3d" + adv.gpt_topics_vid + "\x26adpg\x3d" +
                        adv.gpt_adpg + "\x26" + adv.gpt_sPP_vid + "arena\x3d" + adv.gpt_arena + adv.gpt_reg_string_vid + "\x26asite\x3d" + adv.gpt_asite + "\x26cp0\x3d" + adv.gpt_cp0 + "\x26ops\x3d" + adv.gpt_ops + "\x26pos\x3d" + adv.gpt_pos + "\x26kuid\x3d" + adv.gpt_krux_user_vid + "\x26ksg\x3d" + adv.gpt_krux_segs_vid + "\x26mcmid\x3d" + adv.gpt_mcmid;
                    adv.gpt_vid_custParamsEnc = encodeURIComponent(adv.gpt_vid_custParams);
                    adv_AC = adv.gpt_protocol + "//pubads.g.doubleclick.net/gampad/ads?env\x3dvp\x26gdfp_req\x3d1\x26impl\x3ds\x26output\x3dvast\x26iu\x3d/58/" +
                        adv.gpt_adUnit + "\x26sz\x3d576x324\x26unviewed_position_start\x3d1\x26url\x3d" + adv.gpt_vid_refer + "\x26description_url\x3d" + adv.gpt_vid_desc + "\x26" + adv.gpt_vid_ciuSizes + "cust_params\x3d" + adv.gpt_vid_custParamsEnc + "\x26correlator\x3d" + ord;
                    if (aTp == "bcarelated") adv_AC = adv_AC + "\x26scor\x3d" + adv_ajax_ord;
                    if (aTp == "bcaemb" || aTp == "bcar" || aTp == "bcarelatedr") adv_AC = adv_AC + "\x26scor\x3d" + adv_ajax_ord + "\x26ad_rule\x3d1";
                    if (aTp == "bcawl" || aTp == "bcarelatedwl");
                    if (aTp == "bcawlr" || aTp == "bcarelatedwlr") adv_AC = adv_AC +
                        "\x26scor\x3d" + adv_ajax_ord + "\x26ad_rule\x3d1"
                }
                adv.gpt_adx_root = adv.gpt_protocol + "//pubads.g.doubleclick.net/gampad/adx?\x26iu\x3d/58/" + adv.gpt_adUnit + "\x26sz\x3d" + aSize + "\x26t\x3d" + adv.gpt_dsply_custParamsEnc + "\x26c\x3d" + ord;
                if (aTp.indexOf("vcoad") > -1) adv_AC = DblD + "/adi/" + adv_ACta + "" + adv_ACtb + "?";
                if (aTp.indexOf("ajax") > -1) adv_AC = adv.gpt_adx_root + "\x26m\x3dtext/html";
                if (aTp.indexOf("mediavoice") > -1) {
                    adv_AC = DblD + "/adx/" + adv_ACta + "" + adv_ACtb + ";dcmt\x3dapplication/javascript;";
                    if (aTp == "mediavoice_gpt") adv_AC =
                        adv.gpt_adx_root + "\x26m\x3dapplication/javascript"
                }
                adv_AC_strFlashIframe = adv_AC_strFlashIframe.toLowerCase();
                if (adv_AC_stop) { adv_AC = "";
                    adv_AC_stop = false }
                if (aPs.indexOf("halfbox") > -1)
                    if (sO.indexOf("blockc") > -1 || sO.indexOf("blockd") > -1) adv_AC = "";
                if (adv.wireframe) adv_AC = "";
                fnTkt_build = adv_AC;
                adv_AC = "";
                adv_AC_stop = false;
                aPs = "";
                sD = adv.site;
                return fnTkt_build
            };
            var axel = Math.random() + "";
            var rNum = axel * 1E4 + "";
            var dotat = rNum.indexOf(".");
            var aNum = rNum.substring(0, dotat);
            var adv_adomik = function() {
                switch (false) {
                    case !(axel <
                        0.09):
                        return "ad_ex" + Math.floor(100 * axel);
                    case !(axel < 0.1):
                        return "ad_bc";
                    default:
                        return "ad_opt"
                }
            }();
            adv.gpt_grp = adv_adomik;
            adv_railH_rem = adv_railH_max;
            (function() {
                var d = document,
                    pbs = d.createElement("script"),
                    pro = d.location.protocol;
                pbs.type = "text/javascript";
                pbs.src = "http://beta.images.theglobeandmail.com/static/ads/prebid/prebid.js?v\x3d20160825";
                var target = document.getElementsByTagName("head")[0];
                // target.insertBefore(pbs, target.firstChild) 
            })();
            var PREBID_TIMEOUT = 700;
            var adv_gpt_prime = fnTkt("prime",
                1, 1, ai, "prime", nc, ai, "fnTktPrime");
            if (adv.art.type == "vmevideo" || adv.art.type == "arcvideo") { adv.gpt_vast = fnTkt("a" + ai, 576, 324, ai, "bca", nc, ai, "video");
                adv.gpt_goldfish = adv.gpt_vast } else if (adv.gpt_mobile == true) {
                var mobiflexbid = fnTkt("a" + "ai", 300, 50, ai, "bid", nc, ai, "mobiflex");
                var adUnits = [{ code: "mobiflex-gpt-1", sizes: adv.gpt_size, bids: [{ bidder: "appnexus", params: { placementId: "3038182" } }] }] } else {
                var ldbdbid = fnTkt("a" + "ai", 728, 90, ai, "bid", nc, ai, "ldbd");
                var ldbdbid_sz = adv.gpt_size;
                var boxrbid = fnTkt("a" + "ai",
                    300, 250, ai, "bid", nc, ai, "boxr");
                var boxrbid_sz = adv.gpt_size;
                var halfpagerbid = fnTkt("a" + "ai", 300, 600, ai, "bid", nc, ai, "halfpager");
                var halfpagerbid_sz = adv.gpt_size;
                var box2bid = fnTkt("a" + "ai", 300, 250, ai, "bid", nc, ai, "box2");
                var box2bid_sz = adv.gpt_size;
                var box3bid = fnTkt("a" + "ai", 300, 250, ai, "bid", nc, ai, "box3");
                var box3bid_sz = adv.gpt_size;
                var adUnits = [{
                    code: "ldbd-gpt-1",
                    sizes: ldbdbid_sz,
                    bids: [{ bidder: "appnexus", params: { placementId: "3038181" } }, {
                        bidder: "clearpier",
                        params: {
                            size: "728x90",
                            site_id: "NTc4NDAwMDM3Mw\x3d\x3d",
                            eid: "93779",
                            site_url: "",
                            keywords: adv.gpt_arena,
                            section: adv.gpt_pp0,
                            subsection: adv.gpt_pp1
                        }
                    }, { bidder: "indexExchange", params: { timeout: 300, id: "1", siteID: 172729 } }]
                }, { code: "boxr-gpt-1", sizes: boxrbid_sz, bids: [{ bidder: "appnexus", params: { placementId: "3038182" } }, { bidder: "clearpier", params: { size: "300x250", site_id: "NTc4NDAwMDM3Mw\x3d\x3d", eid: "93779", site_url: "", keywords: adv.gpt_arena, section: adv.gpt_pp0, subsection: adv.gpt_pp1 } }, { bidder: "indexExchange", params: { timeout: 300, id: "3", siteID: 170333 } }] }, {
                    code: "halfpager-gpt-1",
                    sizes: halfpagerbid_sz,
                    bids: [{ bidder: "appnexus", params: { placementId: "3038183" } }, { bidder: "clearpier", params: { size: "300x600", site_id: "NTc4NDAwMDM3Mw\x3d\x3d", eid: "93779", site_url: "", keywords: adv.gpt_arena, section: adv.gpt_pp0, subsection: adv.gpt_pp1 } }, { bidder: "indexExchange", params: { timeout: 300, id: "7", siteID: 175640 } }]
                }, {
                    code: "boxr-gpt-2",
                    sizes: box2bid_sz,
                    bids: [{ bidder: "appnexus", params: { placementId: "3038183" } }, {
                        bidder: "clearpier",
                        params: {
                            size: "300x250",
                            site_id: "NTc4NDAwMDM3Mw\x3d\x3d",
                            eid: "93779",
                            site_url: "",
                            keywords: adv.gpt_arena,
                            section: adv.gpt_pp0,
                            subsection: adv.gpt_pp1
                        }
                    }, { bidder: "indexExchange", params: { timeout: 300, id: "7", siteID: 175640 } }]
                }, { code: "boxr-gpt-3", sizes: box3bid_sz, bids: [{ bidder: "appnexus", params: { placementId: "3038183" } }, { bidder: "clearpier", params: { size: "300x250", site_id: "NTc4NDAwMDM3Mw\x3d\x3d", eid: "93779", site_url: "", keywords: adv.gpt_arena, section: adv.gpt_pp0, subsection: adv.gpt_pp1 } }, { bidder: "indexExchange", params: { timeout: 300, id: "7", siteID: 175640 } }] }]
            }
            window.pbjs = window.pbjs || {};
            pbjs.que =
                pbjs.que || [];
            pbjs.que.push(function() { pbjs.setPriceGranularity("auto");
                pbjs.enableSendAllBids() });
            pbjs.que.push(function() { pbjs.addAdUnits(adUnits);
                pbjs.requestBids({ bidsBackHandler: function() { adv_bids_ready = true;
                        bidsReadyAlert() } }) });
            var bidsReadyAlert = function() {
                if (adv_bids_ready);
                else { pbjs.adserverRequestSent = true;
                    adv_bids_ready = true } };
            bidsTimeout = setTimeout(function() { bidsReadyAlert() }, PREBID_TIMEOUT);

            function debounce(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this,
                        args = arguments;
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(function() { timeout = null;
                        if (!immediate) func.apply(context, args) }, wait);
                    if (callNow) func.apply(context, args)
                }
            }
            googletag.cmd.push(function() { advRefresh = function(adv_refresh_slots) {
                    if (typeof adv_refresh_slots == "undefined") googletag.pubads().refresh();
                    else googletag.pubads().refresh(adv_refresh_slots) };
                slots = {};
                slotsNo = {} });
            googletag.cmd.push(function() {
                if (adv.gpt_mobile == true) {
                    var mobiflexbid = fnTkt("a" + "ai", 300, 50, ai, "gpt", nc, ai,
                        "mobiflex");
                    slots["mobiflex-gpt-1"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "mobiflex-gpt-1");
                    slots["mobiflex-gpt-1"].addService(googletag.pubads());
                    slots["mobiflex-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slots["mobiflex-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slots["mobiflex-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["mobiflex-gpt-1"].setTargeting("nc", [adv.gpt_nc])
                } else if (adv.art.type == "vmevideo" || adv.art.type == "arcvideo") {
                    var boxrcoadAC = fnTkt("a" + "ai", 300, 250, ai, "gpt",
                        nc, ai, "boxr");
                    slotsNo["boxrcoad-gpt-1"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "boxrcoad-gpt-1");
                    slotsNo["boxrcoad-gpt-1"].addService(googletag.companionAds()).addService(googletag.pubads());
                    slotsNo["boxrcoad-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slotsNo["boxrcoad-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slotsNo["boxrcoad-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slotsNo["boxrcoad-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                    var halfpagercoadAC = fnTkt("a" + "ai", 300, 600, ai, "gpt", nc,
                        ai, "halfpager");
                    slotsNo["halfpagercoad-gpt-1"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "halfpagercoad-gpt-1");
                    slotsNo["halfpagercoad-gpt-1"].addService(googletag.companionAds()).addService(googletag.pubads());
                    slotsNo["halfpagercoad-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slotsNo["halfpagercoad-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slotsNo["halfpagercoad-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slotsNo["halfpagercoad-gpt-1"].setTargeting("nc", [adv.gpt_nc])
                } else {
                    a1 = true;
                    aLdrBd =
                        true;
                    var ldbdbid = fnTkt("a" + "ai", 728, 90, ai, "gpt", nc, ai, "ldbd");
                    slots["ldbd-gpt-1"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "ldbd-gpt-1");
                    slots["ldbd-gpt-1"].addService(googletag.pubads());
                    slots["ldbd-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slots["ldbd-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slots["ldbd-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["ldbd-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                    var boxrbid = fnTkt("a" + "ai", 300, 250, ai, "gpt", nc, ai, "boxr");
                    slots["boxr-gpt-1"] = googletag.defineSlot("/58/" +
                        adv.gpt_adUnit, adv.gpt_size, "boxr-gpt-1");
                    slots["boxr-gpt-1"].addService(googletag.pubads());
                    slots["boxr-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slots["boxr-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slots["boxr-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["boxr-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                    var halfpagerbid = fnTkt("a" + "ai", 300, 600, ai, "gpt", nc, ai, "halfpager");
                    slots["halfpager-gpt-1"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "halfpager-gpt-1");
                    slots["halfpager-gpt-1"].addService(googletag.pubads());
                    slots["halfpager-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slots["halfpager-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slots["halfpager-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["halfpager-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                    var box2bid = fnTkt("a" + "ai", 300, 250, ai, "gpt", nc, ai, "box2");
                    slots["boxr-gpt-2"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "boxr-gpt-2");
                    slots["boxr-gpt-2"].addService(googletag.pubads());
                    slots["boxr-gpt-2"].setTargeting("pos", [adv.gpt_pos]);
                    slots["boxr-gpt-2"].setTargeting("ops", [adv.gpt_ops]);
                    slots["boxr-gpt-2"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["boxr-gpt-2"].setTargeting("nc", [adv.gpt_nc]);
                    adv_railH_xptn = true;
                    var box3bid = fnTkt("a" + "ai", 300, 250, ai, "gpt", nc, ai, "box3");
                    slots["boxr-gpt-3"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "boxr-gpt-3");
                    slots["boxr-gpt-3"].addService(googletag.pubads());
                    slots["boxr-gpt-3"].setTargeting("pos", [adv.gpt_pos]);
                    slots["boxr-gpt-3"].setTargeting("ops", [adv.gpt_ops]);
                    slots["boxr-gpt-3"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["boxr-gpt-3"].setTargeting("nc", [adv.gpt_nc]);
                    adv_railH_xptn = true;
                    var halfpager2bid = fnTkt("a" + "ai", 300, 600, ai, "gpt", nc, ai, "halfpager2");
                    slots["halfpager-gpt-2"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "halfpager-gpt-2");
                    slots["halfpager-gpt-2"].addService(googletag.pubads());
                    slots["halfpager-gpt-2"].setTargeting("pos", [adv.gpt_pos]);
                    slots["halfpager-gpt-2"].setTargeting("ops", [adv.gpt_ops]);
                    slots["halfpager-gpt-2"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["halfpager-gpt-2"].setTargeting("nc", [adv.gpt_nc]);
                    adv_railH_xptn = true;
                    var halfpager3bid = fnTkt("a" + "ai", 300, 600, ai, "gpt", nc, ai, "halfpager3");
                    slots["halfpager-gpt-3"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "halfpager-gpt-3");
                    slots["halfpager-gpt-3"].addService(googletag.pubads());
                    slots["halfpager-gpt-3"].setTargeting("pos", [adv.gpt_pos]);
                    slots["halfpager-gpt-3"].setTargeting("ops", [adv.gpt_ops]);
                    slots["halfpager-gpt-3"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["halfpager-gpt-3"].setTargeting("nc", [adv.gpt_nc]);
                    adv_railH_xptn =
                        true;
                    var halfboxbid = fnTkt("a" + "ai", 300, 125, ai, "gpt", nc, ai, "halfbox");
                    slots["halfbox-gpt-1"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "halfbox-gpt-1");
                    slots["halfbox-gpt-1"].addService(googletag.pubads());
                    slots["halfbox-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slots["halfbox-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slots["halfbox-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["halfbox-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                    adv_railH_xptn = true;
                    var halfbox2bid = fnTkt("a" + "ai", 300, 125,
                        ai, "gpt", nc, ai, "halfbox2");
                    slots["halfbox-gpt-2"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "halfbox-gpt-2");
                    slots["halfbox-gpt-2"].addService(googletag.pubads());
                    slots["halfbox-gpt-2"].setTargeting("pos", [adv.gpt_pos]);
                    slots["halfbox-gpt-2"].setTargeting("ops", [adv.gpt_ops]);
                    slots["halfbox-gpt-2"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["halfbox-gpt-2"].setTargeting("nc", [adv.gpt_nc]);
                    var t1bid = fnTkt("a" + "ai", 120, 240, ai, "gpt", nc, ai, "t1");
                    slots["tile-gpt-1"] = googletag.defineSlot("/58/" +
                        adv.gpt_adUnit, adv.gpt_size, "tile-gpt-1");
                    slots["tile-gpt-1"].addService(googletag.pubads());
                    slots["tile-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slots["tile-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slots["tile-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["tile-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                    var btybbid = fnTkt("a" + "ai", 160, 30, ai, "gpt", nc, ai, "btyb");
                    slots["btyb-gpt-1"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "btyb-gpt-1");
                    slots["btyb-gpt-1"].addService(googletag.pubads());
                    slots["btyb-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                    slots["btyb-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                    slots["btyb-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                    slots["btyb-gpt-1"].setTargeting("nc", [adv.gpt_nc])
                }
                var flex_mapping = googletag.sizeMapping().addSize([1024, 200], [
                    [1E3, 250],
                    [970, 250],
                    [960, 90],
                    [728, 90],
                    [300, 250]
                ]).addSize([768, 200], [
                    [728, 90],
                    [300, 250]
                ]).addSize([640, 200], [300, 250]).addSize([0, 0], [300, 250]).build();
                var flex1bid = fnTkt("a" + "ai", 1E3, 250, ai, "gpt", nc, ai, "flex1");
                slots["flex-gpt-1"] =
                    googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "flex-gpt-1").defineSizeMapping(flex_mapping).addService(googletag.pubads()).setCollapseEmptyDiv(true);
                slots["flex-gpt-1"].setTargeting("pos", [adv.gpt_pos]);
                slots["flex-gpt-1"].setTargeting("ops", [adv.gpt_ops]);
                slots["flex-gpt-1"].setTargeting("ptf", [adv.gpt_ptf]);
                slots["flex-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                var flex2bid = fnTkt("a" + "ai", 1E3, 250, ai, "gpt", nc, ai, "flex2");
                slots["flex-gpt-2"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size,
                    "flex-gpt-2").defineSizeMapping(flex_mapping).addService(googletag.pubads()).setCollapseEmptyDiv(true);
                slots["flex-gpt-2"].setTargeting("pos", [adv.gpt_pos]);
                slots["flex-gpt-2"].setTargeting("ops", [adv.gpt_ops]);
                slots["flex-gpt-2"].setTargeting("ptf", [adv.gpt_ptf]);
                slots["flex-gpt-2"].setTargeting("nc", [adv.gpt_nc]);
                var flex3bid = fnTkt("a" + "ai", 1E3, 250, ai, "gpt", nc, ai, "flex3");
                slots["flex-gpt-3"] = googletag.defineSlot("/58/" + adv.gpt_adUnit, adv.gpt_size, "flex-gpt-3").defineSizeMapping(flex_mapping).addService(googletag.pubads()).setCollapseEmptyDiv(true);
                slots["flex-gpt-3"].setTargeting("pos", [adv.gpt_pos]);
                slots["flex-gpt-3"].setTargeting("ops", [adv.gpt_ops]);
                slots["flex-gpt-3"].setTargeting("ptf", [adv.gpt_ptf]);
                slots["flex-gpt-3"].setTargeting("nc", [adv.gpt_nc]);
                googletag.pubads().setTargeting("adpg", [adv.gpt_adpg]);
                googletag.pubads().setTargeting("arena", [adv.gpt_arena]);
                googletag.pubads().setTargeting("asite", [adv.gpt_asite]);
                googletag.pubads().setTargeting("atpc", [adv.gpt_topics]);
                googletag.pubads().setTargeting("cp0", [adv.gpt_cp0]);
                googletag.pubads().setTargeting("ekw", [adv.gpt_EKWS]);
                googletag.pubads().setTargeting("ksg", [adv.gpt_krux_segs]);
                googletag.pubads().setTargeting("kuid", [adv.gpt_krux_user]);
                googletag.pubads().setTargeting("kw", [adv.gpt_kw]);
                googletag.pubads().setTargeting("loc", [adv.gpt_loc]);
                googletag.pubads().setTargeting("mode", [adv.gpt_mode]);
                googletag.pubads().setTargeting("pp0", [adv.gpt_pp0]);
                googletag.pubads().setTargeting("pp1", [adv.gpt_pp1]);
                googletag.pubads().setTargeting("pp2", [adv.gpt_pp2]);
                googletag.pubads().setTargeting("pp3", [adv.gpt_pp3]);
                googletag.pubads().setTargeting("pp4", [adv.gpt_pp4]);
                googletag.pubads().setTargeting("pp5", [adv.gpt_pp5]);
                googletag.pubads().setTargeting("pv0", [adv.gpt_custom_pv0]);
                googletag.pubads().setTargeting("pv1", [adv.gpt_custom_pv1]);
                googletag.pubads().setTargeting("pv2", [adv.gpt_custom_pv2]);
                googletag.pubads().setTargeting("pv3", [adv.gpt_custom_pv3]);
                googletag.pubads().setTargeting("pv4", [adv.gpt_custom_pv4]);
                googletag.pubads().setTargeting("pv5", [adv.gpt_custom_pv5]);
                googletag.pubads().setTargeting("pv6", [adv.gpt_custom_pv6]);
                googletag.pubads().setTargeting("pv7", [adv.gpt_custom_pv7]);
                googletag.pubads().setTargeting("pv8", [adv.gpt_custom_pv8]);
                googletag.pubads().setTargeting("rbx", [adv.gpt_rbx]);
                googletag.pubads().setTargeting("rgcg", [adv.gpt_reg_cg]);
                googletag.pubads().setTargeting("rgdv", [adv.gpt_reg_dv]);
                googletag.pubads().setTargeting("ad_group", [adv.gpt_grp]);
                googletag.pubads().setTargeting("mcmid", [adv.gpt_mcmid]);
                googletag.pubads().setCentering(true);
                googletag.pubads().collapseEmptyDivs();
                if (adv.art.type == "vmevideo" || adv.art.type == "arcvideo") { googletag.pubads().enableVideoAds();
                    googletag.companionAds().setRefreshUnfilledSlots(true) }
                googletag.enableServices();
                if (typeof advIntercept == "undefined");
                else if (advIntercept == "advnoslimcut" || advIntercept == "advblackout") { adv.gpt_slimcut = false;
                    console.log("adv.gpt_slimcut disabled by advIntercept") }
                var advCalculatePos = function() {
                    adv.gpt_stickyPrimed = false;
                    adv.gpt_halfpagerYes = false;
                    if (window.parent.$("#halfpager-gpt-1").length) {
                        adv.gpt_halfpagerYes =
                            true;
                        var lz_halfp = window.parent.$("#halfpager-gpt-1");
                        var lz_halfp_pos = lz_halfp.position();
                        var lz_halfp_posTop = lz_halfp_pos.top
                    } else;
                    adv.gpt_box2Yes = false;
                    if (window.parent.$("#boxr-gpt-2").length) { adv.gpt_box2Yes = true;
                        var lz_box2 = window.parent.$("#boxr-gpt-2");
                        var lz_box2_pos = lz_box2.position();
                        console.log("lz_box2_pos.top \x3d " + lz_box2_pos.top);
                        var lz_box2_posTop = lz_box2_pos.top }
                    adv.gpt_box3Yes = false;
                    if (window.parent.$("#boxr-gpt-3").length) {
                        adv.gpt_box3Yes = true;
                        var lz_box3 = window.parent.$("#boxr-gpt-3");
                        var lz_box3_pos = lz_box3.position();
                        var lz_box3_posTop = lz_box3_pos.top
                    }
                    adv.gpt_basement = false;
                    if (window.parent.$(".tertiary")[0]) { adv.gpt_basement = true;
                        var lz_basement = window.parent.$(".tertiary");
                        var lz_basement_pos = lz_basement.position();
                        var lz_basement_posTop = lz_basement_pos.top }
                    adv.gpt_lengthKnown = false;
                    if (window.parent.$(".report-typo-icon")[0]) { adv.gpt_lengthKnown = true;
                        var lz_typo = window.parent.$(".report-typo-icon");
                        var lz_typo_pos = lz_typo.position();
                        var lz_typo_posTop = lz_typo_pos.top }
                    if (adv.gpt_loc ==
                        "art") googletag.cmd.push(function() {
                        if (adv.gpt_halfpagerYes) {
                            if (window.parent.$(".asfrelbodytop")[0]) adv.gpt_videoAsfTop = true;
                            if (window.parent.$(".asfrelbodybottom")[0]) adv.gpt_videoAsfBottom = true;
                            if (adv.gpt_canvas) {
                                adv.gpt_canvasOkPos = lz_typo_posTop - 350;
                                if (adv.gpt_canvasOkPos < lz_halfp_posTop) { adv.gpt_canvas = false;
                                    adv.gpt_nc = "n";
                                    if (slots["halfpager-gpt-1"]) slots["halfpager-gpt-1"].setTargeting("nc", [adv.gpt_nc]);
                                    else if (slotsNo["halfpager-gpt-1"]) slotsNo["halfpager-gpt-1"].setTargeting("nc", [adv.gpt_nc]) } else;
                            } else;
                            if (adv.gpt_lengthKnown) { adv.gpt_lz_mainBtm = lz_typo_posTop;
                                adv.gpt_lz_stickTop = lz_halfp_posTop;
                                adv.gpt_lz_stick = false;
                                adv.gpt_stickyPrimed = true }
                        }
                    })
                };
                var adv_load_refresh = false;
                var advGptReady = debounce(function() {
                    if (window.googletag && googletag.pubadsReady && !adv_load_refresh) {
                        advdivs = [];
                        advdivslz = [];
                        $("div[id*\x3d-gpt-]").each(function() { slotObj = slots[$(this).attr("id")];
                            if (typeof slotObj === "undefined") advdivslz.push(slotsNo[$(this).attr("id")]);
                            else advdivs.push(slots[$(this).attr("id")]) });
                        advBidsReadyCheck =
                            window.setInterval(function() { advRequestSlots() }, 250)
                    }
                }, 500);
                var advRequestSlots = function() {
                    if (adv_bids_ready) { window.clearTimeout(bidsTimeout);
                        window.clearInterval(advBidsReadyCheck);
                        googletag.cmd.push(function() { pbjs.setTargetingForGPTAsync(advdivs);
                            advCalculatePos() });
                        googletag.cmd.push(function() { advRefresh(advdivs);
                            adv_load_refresh = true });
                        googletag.cmd.push(function() {
                            if (advdivslz.length > -1) adv.gpt_foot = false;
                            else adv.gpt_lz = true;
                            if (typeof adv.gpt_lz === "undefined") adv.gpt_foot = false }) } else; };
                googletag.cmd.push(function() { $("document").ready(function() { googletag.cmd.push(function() { adv.gpt_viewport_h = $(window).height();
                            adv.gpt_document_h = $(document).height();
                            advGptReady() }) }) });
                googletag.cmd.push(function() {
                    if (typeof adv.gpt_foot == "undefined") adv.gpt_foot = true;
                    googletag.pubads().addEventListener("slotRenderEnded", function(event) {
                        if (event.slot == slots["halfpager-gpt-1"] || event.slot == slotsNo["halfpager-gpt-1"])(function($, M, u) {
                            if (window.advCanvas == true) googletag.cmd.push(function() {
                                nc = window.advCanvasADID;
                                window.canvasAC = fnTkt("a" + "ai", 1E3, 1, ai, "ajax", nc, ai, "canvas");
                                adv.gpt_slimcut = false;
                                adv.gpt_foot = false;
                                M.load([{ load: u + "/media/www/js/modules/dist/canvas.js", complete: function() { TGAMD.CanvasAd.init(window.parent.$("#halfpager-art-1"), { height: window.advCanvasH, src: window.canvasAC }) } }])
                            });
                            else {
                                googletag.cmd.push(function() {
                                    var adv_assetH = event.size[1];
                                    if (location.href.indexOf("v1.theglobeandmail.com/v5/ads/test") != -1)
                                        if (adv.gpt_loc == "art" && adv.gpt_stickyPrimed) {
                                            if (adv_assetH < 600 || adv_assetH < 601 && adv.gpt_viewport_h >
                                                950)
                                                if (adv.gpt_lz_stickTop > adv.gpt_lz_mainBtm + adv_assetH);
                                                else adv.gpt_lz_stick = true;
                                            if (adv.gpt_lz_stick) M.load([{ load: u + "/media/www/js/sticky.ad.js", complete: function() { TGAMD.ads.sticky.init(window.parent.$("#halfpager-gpt-1")) } }])
                                        }
                                });
                                googletag.cmd.push(function() {
                                    if (adv.gpt_slimcut && adv.loc == "art") util.loadScript("https://static.freeskreen.com/publisher/229/freeskreen.min.js");
                                    else; })
                            }
                        })(window.jQuery, window.Modernizr, $g_conf.mediaUrl)
                    })
                })
            })
        }, 1588777, 414392);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (ensightenLayer.mobile == "true") {
                var isArticle = location.toString().indexOf("/article") != -1;
                var isRef = isValidReferrer(document.referrer);
                var isArc404 = location.toString().indexOf("arc404\x3dtrue") != -1;
                window.tp = window.tp || [];
                tp.push(["setAid", "LiB66Tw2pe"]);
                tp.push(["setEndpoint", "https://buy.tinypass.com/api/v3"]);
                tp.push(["setUseTinypassAccounts", true]);
                tp.push(["init",
                    function() { tp.experience.init() }
                ]);
                tp.push(["setCustomVariable", "user_state", String("00" + TGAMD.user.role())]);
                var piano = { src: "//cdn.tinypass.com/api/tinypass.min.js" };
                if (isArticle) {
                    tp.push(["setCustomVariable", "article_paywallType", ensightenLayer.articleColour]);
                    tp.push(["setCustomVariable", "article_id", ensightenLayer.articleID]);
                    tp.push(["setTags", [ensightenLayer.articleColour]]);
                    tp.push(["setCustomVariable", "device", "mobile"]);
                    tp.push(["setCustomVariable", "sectionId", String($g_conf.current.sectionId)]);
                    tp.push(["setCustomVariable", "articleType", ensightenLayer.articleType]);
                    var articleTypeArray = ["news", "column", "blog", "wire", "recipe", "review", "gallery"];
                    var indexArticleType = articleTypeArray.indexOf(ensightenLayer.articleType);
                    if (indexArticleType == -1) { console.log("CEM test doesnt exist");
                        tp.push(["setCustomVariable", "cemTestUser", "false"]) } else if (document.cookie.indexOf("beta") == -1 || getCookie("beta") == "F") { console.log("CEM test doesnt exist");
                        tp.push(["setCustomVariable", "cemTestUser", "false"]) } else console.log("CEM test exist");
                    if (ensightenLayer.paywallSrc === "piano" && ensightenLayer.articleColour == "red" && TGAMD.user.role() != 2) $(function() { console.log("Inside red condition");
                        modifyOmniture();
                        var s_code = s.t() });
                    if (ensightenLayer.paywallSrc === "piano" && ensightenLayer.articleID === "29697029") $(function() { $(".piano-regwall").remove() });
                    tp.push(["addHandler", "meterActive", function(meterData) {
                        console.log("You've seen " + meterData.views + " out of " + meterData.maxViews + " free articles. You have " + meterData.viewsLeft + " articles left.");
                        tp.push(["setCustomVariable", "views", meterData.views]);
                        document.cookie = "tgampianometermobile\x3d" + meterData.views;
                        if (meterData.views == 10) { mboxDefine("footer", "pianoThresh", "seenThresh\x3dtrue");
                            mboxUpdate("pianoThresh", "seenThresh\x3dtrue") }
                    }]);
                    tp.push(["addHandler", "meterExpired", function(meterData) { console.log("Inside piano callback");
                        $(function() {
                            if (ensightenLayer.articleColour == "yellow") modifyOmniture();
                            var s_code = s.t() }) }]);
                    tp.push(["addHandler", "checkoutCustomEvent", function(event) {
                        if (event.eventName ==
                            "submit") {
                            var trackingId = "";
                            if (typeof event.params.trackingId != "undefined") $g.setCookie("p_tId", event.params.trackingId, 0);
                            if (ensightenLayer.articleColour == "red") { window.location.href = $g_conf.securePubUrl + "/subscription/?intcmp\x3dMOB_PWALL";
                                mboxDefine("footer", "PianoRedwall_Click", "Click\x3dtrue");
                                mboxUpdate("PianoRedwall_Click", "Click\x3dtrue") } else if (ensightenLayer.articleColour == "yellow") {
                                window.location.href = $g_conf.securePubUrl + "/subscription/?intcmp\x3dMOB_TWALL";
                                mboxDefine("footer", "PianoThresh_Click",
                                    "Click\x3dtrue");
                                mboxUpdate("PianoThresh_Click", "Click\x3dtrue")
                            }
                        }
                    }])
                }
                if (ensightenLayer.paywallSrc === "piano") {
                    if (isArticle) setup();
                    if (isRef && TGAMD.user.role() != 2 && (ensightenLayer.articleColour == "yellow" || ensightenLayer.articleColour == "blue")) $(function() {
                        var s_code = s.t() }) }
            }

            function setup() {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.async = true;
                a.src = piano.src;
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b) }

            function modifyOmniture() {
                s.prop28 = ensightenLayer.articleID;
                s.prop63 = ensightenLayer.headline;
                s.eVar24 = ensightenLayer.headline;
                s.eVar52 = ensightenLayer.articleID;
                s.events = "event55";
                s.linkTrackEvents = s.events;
                s.linkTrackVars = "eVar62,eVar63,eVar64,eVar75,eVar76";
                s.eVar64 = "+1";
                if (s.prop38) s.eVar75 = "D\x3dc38";
                if (s.prop39) s.eVar76 = "D\x3dc39";
                s.eVar77 = ensightenLayer.byline;
                if (ensightenLayer.articleColour == "red") switch ($g_conf.current.sectionId) {
                    case "1827":
                        s.eVar62 = "Encountered Hard Paywall Executive Insight";
                        s.eVar27 = "tryitnow:tryitnowexecutiveinsight:section";
                        s.prop22 =
                            "tryitnow:tryitnowexecutiveinsight";
                        break;
                    case "2770":
                        s.eVar62 = "Encountered Hard Paywall Reuters Financial News";
                        s.eVar27 = "tryitnow:tryitnowreutersfinancialnews:section";
                        s.prop22 = "tryitnow:tryitnowreutersfinancialnews";
                        break;
                    case "5202":
                        s.eVar62 = "Encountered Hard Paywall Economic Insight";
                        s.eVar27 = "tryitnow:tryitnoweconomicinsight:section";
                        s.prop22 = "tryitnow:tryitnoweconomicinsight";
                        break;
                    case "7563":
                        s.eVar62 = "Encountered Hard Paywall Executive Insight";
                        s.eVar27 = "tryitnow:tryitnowexecutiveinsight:section";
                        s.prop22 = "tryitnow:tryitnowexecutiveinsight";
                        break;
                    case "2783":
                        s.eVar62 = "Encountered Hard Paywall Politics Insider";
                        s.eVar27 = "tryitnow:tryitnowpoliticsinsider:section";
                        s.prop22 = "tryitnow:tryitnowpoliticsinsider";
                        break;
                    case "372":
                        s.eVar62 = "Encountered Hard Paywall Inside the Market";
                        s.eVar27 = "tryitnow:tryitnowinsidethemarket:section";
                        s.prop22 = "tryitnow:tryitnowinsidethemarket";
                        break;
                    case "432":
                        s.eVar62 = "Encountered Hard Paywall Number Cruncher";
                        s.eVar27 = "tryitnow:tryitnownumbercruncher:section";
                        s.prop22 =
                            "tryitnow:tryitnownumbercruncher";
                        break;
                    case "1832":
                        s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                        s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                        s.prop22 = "tryitnow:tryitnowstrategylab";
                        break;
                    case "1942":
                        s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                        s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                        s.prop22 = "tryitnow:tryitnowstrategylab";
                        break;
                    case "1943":
                        s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                        s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                        s.prop22 = "tryitnow:tryitnowstrategylab";
                        break;
                    case "1944":
                        s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                        s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                        s.prop22 = "tryitnow:tryitnowstrategylab";
                        break;
                    case "1945":
                        s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                        s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                        s.prop22 = "tryitnow:tryitnowstrategylab";
                        break;
                    case "434":
                        s.eVar62 = "Encountered Hard Paywall Streetwise";
                        s.eVar27 = "tryitnow:tryitnowstreetwise:section";
                        s.prop22 = "tryitnow:tryitnowstreetwise";
                        break;
                    case "3762":
                        s.eVar62 = "Encountered Hard Paywall Subscriber";
                        s.eVar27 = "tryitnow:tryitnowsubscriber:section";
                        s.prop22 = "tryitnow:tryitnowsubscriber";
                        break;
                    case "5922":
                        s.eVar62 = "Encountered Hard Paywall Top 1000 Rankings";
                        s.eVar27 = "tryitnow:tryitnowtop1000rankings:section";
                        s.prop22 = "tryitnow:tryitnowtop1000rankings";
                        break;
                    case "3254":
                        s.eVar62 = "Encountered Hard Paywall World Insider";
                        s.eVar27 = "tryitnow:tryitnowworldinsider:section";
                        s.prop22 = "tryitnow:tryitnowworldinsider";
                        break;
                    default:
                        s.eVar62 = "Encountered Hard Paywall Subscriber";
                        s.eVar27 = "tryitnow:tryitnowsubscriber:section";
                        s.prop22 = "tryitnow:tryitnowsubscriber"
                } else if (ensightenLayer.articleColour == "yellow") { s.eVar62 = "Encountered Hard Paywall";
                    s.eVar27 = "tryitnow:section";
                    s.prop22 = "tryitnow" }
                s.eVar63 = s.eVar62;
                s.eVar16 = null;
                s.eVar19 = null;
                s.eVar25 = null;
                s.eVar26 = null;
                s.eVar33 = null;
                s.eVar58 = null;
                s.eVar65 = null;
                s.eVar68 = null;
                s.pageName = s.eVar27;
                s.prop8 = null;
                s.prop12 = null;
                s.prop13 = null;
                s.prop14 = null;
                s.prop16 = null;
                s.prop23 = s.prop22;
                s.prop24 = null;
                s.prop34 = null;
                s.prop36 = "sec";
                s.prop37 = null;
                s.prop43 = "tryitnow";
                s.prop44 = s.prop22;
                s.prop45 = s.prop22;
                s.prop46 = s.prop22;
                s.prop47 = s.prop22;
                s.prop69 = null
            }

            function isValidReferrer(str) {
                var allowed = /(https?:\/\/)?(google\..*?|(t\.co|((facebook|linkedin|pinterest|reddit|stumbleupon|stocktwits|bing|yahoo)\.com)|lvr.it|soc.li|bit.ly|ow.ly|fw.to)\/.*)/ig;
                return allowed.test(str) }

            function getCookie(cname) {
                var name = cname + "\x3d";
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") c = c.substring(1);
                    if (c.indexOf(name) === 0) return c.substring(name.length,
                        c.length)
                }
                return ""
            }
        }, 1663491, [1325396], 388871, [311422]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.headline ? ensightenLayer.headline : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "headline", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12243" }) }, 12243) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.articleColour ? ensightenLayer.articleColour : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "articleColour", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12249" }) }, 12249) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window.Visitor = function(k, s) {
                if (!k) throw "Visitor requires Adobe Marketing Cloud Org ID";
                var a = this;
                a.version = "1.3.5";
                var h = window,
                    m = h.Visitor;
                h.s_c_in || (h.s_c_il = [], h.s_c_in = 0);
                a._c = "Visitor";
                a._il = h.s_c_il;
                a._in = h.s_c_in;
                a._il[a._in] = a;
                h.s_c_in++;
                var t = h.document,
                    j = h.O;
                j || (j = null);
                var i = h.P;
                i || (i = !0);
                var p = h.N;
                p || (p = !1);
                a.C = function(a) {
                    var c = 0,
                        b, e;
                    if (a)
                        for (b = 0; b < a.length; b++) e =
                            a.charCodeAt(b), c = (c << 5) - c + e, c &= c;
                    return c
                };
                a.m = function(a) {
                    var c = "0123456789",
                        b = "",
                        e = "",
                        f, g = 8,
                        h = 10,
                        i = 10;
                    if (1 == a) { c += "ABCDEF";
                        for (a = 0; 16 > a; a++) f = Math.floor(Math.random() * g), b += c.substring(f, f + 1), f = Math.floor(Math.random() * g), e += c.substring(f, f + 1), g = 16;
                        return b + "-" + e }
                    for (a = 0; 19 > a; a++) f = Math.floor(Math.random() * h), b += c.substring(f, f + 1), 0 == a && 9 == f ? h = 3 : (1 == a || 2 == a) && 10 != h && 2 > f ? h = 10 : 2 < a && (h = 10), f = Math.floor(Math.random() * i), e += c.substring(f, f + 1), 0 == a && 9 == f ? i = 3 : (1 == a || 2 == a) && 10 != i && 2 > f ? i = 10 : 2 < a && (i = 10);
                    return b + e
                };
                a.I = function() {
                    var a;
                    !a && h.location && (a = h.location.hostname);
                    if (a)
                        if (/^[0-9.]+$/.test(a)) a = "";
                        else {
                            var c = a.split("."),
                                b = c.length - 1,
                                e = b - 1;
                            1 < b && 2 >= c[b].length && (2 == c[b - 1].length || 0 > ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,nd,".indexOf("," +
                                c[b] + ",")) && e--;
                            if (0 < e)
                                for (a = ""; b >= e;) a = c[b] + (a ? "." : "") + a, b--
                        }
                    return a
                };
                a.cookieRead = function(a) {
                    var a = encodeURIComponent(a),
                        c = (";" + t.cookie).split(" ").join(";"),
                        b = c.indexOf(";" + a + "\x3d"),
                        e = 0 > b ? b : c.indexOf(";", b + 1);
                    return 0 > b ? "" : decodeURIComponent(c.substring(b + 2 + a.length, 0 > e ? c.length : e)) };
                a.cookieWrite = function(d, c, b) {
                    var e = a.cookieLifetime,
                        f, c = "" + c,
                        e = e ? ("" + e).toUpperCase() : "";
                    b && "SESSION" != e && "NONE" != e ? (f = "" != c ? parseInt(e ? e : 0) : -60) ? (b = new Date, b.setTime(b.getTime() + 1E3 * f)) : 1 == b && (b = new Date, f =
                        b.getYear(), b.setYear(f + 2 + (1900 > f ? 1900 : 0))) : b = 0;
                    return d && "NONE" != e ? (t.cookie = encodeURIComponent(d) + "\x3d" + encodeURIComponent(c) + "; path\x3d/;" + (b ? " expires\x3d" + b.toGMTString() + ";" : "") + (a.cookieDomain ? " domain\x3d" + a.cookieDomain + ";" : ""), a.cookieRead(d) == c) : 0
                };
                a.e = j;
                a.w = function(a, c) {
                    try { "function" == typeof a ? a.apply(h, c) : a[1].apply(a[0], c) } catch (b) {} };
                a.L = function(d, c) { c && (a.e == j && (a.e = {}), void 0 == a.e[d] && (a.e[d] = []), a.e[d].push(c)) };
                a.l = function(d, c) {
                    if (a.e != j) {
                        var b = a.e[d];
                        if (b)
                            for (; 0 < b.length;) a.w(b.shift(),
                                c)
                    }
                };
                a.j = j;
                a.J = function(d, c, b) {
                    var e = 0,
                        f = 0,
                        g;
                    if (c && t) {
                        for (g = 0; !e && 2 > g;) {
                            try { e = (e = t.getElementsByTagName(0 < g ? "HEAD" : "head")) && 0 < e.length ? e[0] : 0 } catch (h) { e = 0 }
                            g++ }
                        if (!e) try { t.body && (e = t.body) } catch (i) { e = 0 }
                        if (e)
                            for (g = 0; !f && 2 > g;) {
                                try { f = t.createElement(0 < g ? "SCRIPT" : "script") } catch (l) { f = 0 }
                                g++ } }!c || !e || !f ? b && b() : (f.type = "text/javascript", f.setAttribute("async", "async"), f.src = c, e.firstChild ? e.insertBefore(f, e.firstChild) : e.appendChild(f), b && (a.j == j && (a.j = {}), a.j[d] = setTimeout(b, a.loadTimeout))) };
                a.H = function(d) {
                    a.j !=
                        j && a.j[d] && (clearTimeout(a.j[d]), a.j[d] = 0)
                };
                a.D = p;
                a.F = p;
                a.isAllowed = function() {
                    if (!a.D && (a.D = i, a.cookieRead(a.cookieName) || a.cookieWrite(a.cookieName, "T", 1))) a.F = i;
                    return a.F };
                a.a = j;
                a.c = j;
                var w = a.V;
                w || (w = "MC");
                var n = a.Y;
                n || (n = "MCMID");
                var x = a.X;
                x || (x = "MCCIDH");
                var y = a.W;
                y || (y = "MCAS");
                var v = a.T;
                v || (v = "A");
                var l = a.Q;
                l || (l = "MCAID");
                var u = a.U;
                u || (u = "AAM");
                var r = a.S;
                r || (r = "MCAAMLH");
                var o = a.R;
                o || (o = "MCAAMB");
                var q = a.Z;
                q || (q = "NONE");
                a.t = 0;
                a.B = function() {
                    if (!a.t) {
                        var d = a.version;
                        a.audienceManagerServer &&
                            (d += "|" + a.audienceManagerServer);
                        a.audienceManagerServerSecure && (d += "|" + a.audienceManagerServerSecure);
                        if (a.audienceManagerCustomerIDDPIDs)
                            for (var c in a.audienceManagerCustomerIDDPIDs) !Object.prototype[c] && a.audienceManagerCustomerIDDPIDs[c] && (d += c + "\x3d" + a.audienceManagerCustomerIDDPIDs[c]);
                        a.t = a.C(d)
                    }
                    return a.t
                };
                a.G = p;
                a.h = function() {
                    if (!a.G) {
                        a.G = i;
                        var d = a.B(),
                            c = p,
                            b = a.cookieRead(a.cookieName),
                            e, f, g, h = new Date;
                        a.a == j && (a.a = {});
                        if (b && "T" != b) {
                            b = b.split("|");
                            b[0].match(/^[\-0-9]+$/) && (parseInt(b[0]) !=
                                d && (c = i), b.shift());
                            1 == b.length % 2 && b.pop();
                            for (d = 0; d < b.length; d += 2) e = b[d].split("-"), f = e[0], g = b[d + 1], e = 1 < e.length ? parseInt(e[1]) : 0, c && (f == x && (g = ""), 0 < e && (e = h.getTime() / 1E3 - 60)), f && g && (a.d(f, g, 1), 0 < e && (a.a["expire" + f] = e, h.getTime() >= 1E3 * e && (a.c || (a.c = {}), a.c[f] = i)))
                        }
                        if (!a.b(l) && (b = a.cookieRead("s_vi"))) b = b.split("|"), 1 < b.length && 0 <= b[0].indexOf("v1") && (g = b[1], d = g.indexOf("["), 0 <= d && (g = g.substring(0, d)), g && g.match(/^[0-9a-fA-F\-]+$/) && a.d(l, g))
                    }
                };
                a.M = function() {
                    var d = a.B(),
                        c, b;
                    for (c in a.a) !Object.prototype[c] &&
                        a.a[c] && "expire" != c.substring(0, 6) && (b = a.a[c], d += (d ? "|" : "") + c + (a.a["expire" + c] ? "-" + a.a["expire" + c] : "") + "|" + b);
                    a.cookieWrite(a.cookieName, d, 1)
                };
                a.b = function(d, c) {
                    return a.a != j && (c || !a.c || !a.c[d]) ? a.a[d] : j };
                a.d = function(d, c, b) { a.a == j && (a.a = {});
                    a.a[d] = c;
                    b || a.M() };
                a.p = function(d, c) {
                    var b = new Date;
                    b.setTime(b.getTime() + 1E3 * c);
                    a.a == j && (a.a = {});
                    a.a["expire" + d] = Math.floor(b.getTime() / 1E3);
                    0 > c ? (a.c || (a.c = {}), a.c[d] = i) : a.c && (a.c[d] = p) };
                a.A = function(a) {
                    if (a && ("object" == typeof a && (a = a.d_mid ? a.d_mid : a.visitorID ?
                            a.visitorID : a.id ? a.id : a.uuid ? a.uuid : "" + a), a && (a = a.toUpperCase(), "NOTARGET" == a && (a = q)), !a || a != q && !a.match(/^[0-9a-fA-F\-]+$/))) a = "";
                    return a
                };
                a.i = function(d, c) {
                    a.H(d);
                    a.g != j && (a.g[d] = p);
                    if (d == w) {
                        var b = a.b(n);
                        if (!b) { b = "object" == typeof c && c.mid ? c.mid : a.A(c);
                            if (!b) {
                                if (a.r) { a.getAnalyticsVisitorID(null, !1, !0);
                                    return }
                                b = a.m() }
                            a.d(n, b) }
                        if (!b || b == q) b = ""; "object" == typeof c && ((c.d_region || c.dcs_region || c.d_blob || c.blob) && a.i(u, c), a.r && c.mid && a.i(v, { id: c.id }));
                        a.l(n, [b]) }
                    if (d == u && "object" == typeof c) {
                        b = 604800;
                        void 0 != c.id_sync_ttl && c.id_sync_ttl && (b = parseInt(c.id_sync_ttl));
                        var e = a.b(r);
                        e || ((e = c.d_region) || (e = c.dcs_region), e && (a.p(r, b), a.d(r, e)));
                        e || (e = "");
                        a.l(r, [e]);
                        e = a.b(o);
                        if (c.d_blob || c.blob)(e = c.d_blob) || (e = c.blob), a.p(o, b), a.d(o, e);
                        e || (e = "");
                        a.l(o, [e]);
                        !c.error_msg && a.o && a.d(x, a.o)
                    }
                    if (d == v) { b = a.b(l);
                        b || ((b = a.A(c)) ? a.p(o, -1) : b = q, a.d(l, b));
                        if (!b || b == q) b = "";
                        a.l(l, [b]) }
                };
                a.g = j;
                a.n = function(d, c, b, e) {
                    var f = "",
                        g;
                    if (a.isAllowed() && (a.h(), f = a.b(d), !f && (d == n ? g = w : d == r || d == o ? g = u : d == l && (g = v), g))) {
                        if (c && (a.g ==
                                j || !a.g[g])) a.g == j && (a.g = {}), a.g[g] = i, a.J(g, c, function() {
                            if (!a.b(d)) {
                                var b = "";
                                d == n ? b = a.m() : g == u && (b = { error_msg: "timeout" });
                                a.i(g, b) } });
                        a.L(d, b);
                        c || a.i(g, { id: q });
                        return ""
                    }
                    if ((d == n || d == l) && f == q) f = "", e = i;
                    b && e && a.w(b, [f]);
                    return f
                };
                a._setMarketingCloudFields = function(d) { a.h();
                    a.i(w, d) };
                a.setMarketingCloudVisitorID = function(d) { a._setMarketingCloudFields(d) };
                a.r = p;
                a.getMarketingCloudVisitorID = function(d, c) {
                    return a.isAllowed() ? (a.marketingCloudServer && 0 > a.marketingCloudServer.indexOf(".demdex.net") && (a.r =
                        i), a.n(n, a.s("_setMarketingCloudFields"), d, c)) : ""
                };
                a.K = function() { a.getAudienceManagerBlob() };
                a.f = {};
                a.z = p;
                a.o = "";
                a.setCustomerIDs = function(d) { a.f = d;
                    if (a.isAllowed()) { a.h();
                        var d = a.b(x),
                            c = "",
                            b, e;
                        d || (d = 0);
                        for (b in a.f) e = a.f[b], !Object.prototype[b] && e && (c += (c ? "|" : "") + b + "|" + e);
                        a.o = a.C(c);
                        a.o != d && (a.z = i, a.K()) } };
                a.getCustomerIDs = function() {
                    return a.f };
                a._setAnalyticsFields = function(d) { a.h();
                    a.i(v, d) };
                a.setAnalyticsVisitorID = function(d) { a._setAnalyticsFields(d) };
                a.getAnalyticsVisitorID = function(d, c, b) {
                    if (a.isAllowed()) {
                        var e =
                            "";
                        b || (e = a.getMarketingCloudVisitorID(function() { a.getAnalyticsVisitorID(d, i) }));
                        if (e || b) {
                            var f = b ? a.marketingCloudServer : a.trackingServer,
                                g = "";
                            a.loadSSL && (b ? a.marketingCloudServerSecure && (f = a.marketingCloudServerSecure) : a.trackingServerSecure && (f = a.trackingServerSecure));
                            f && (g = "http" + (a.loadSSL ? "s" : "") + "://" + f + "/id?callback\x3ds_c_il%5B" + a._in + "%5D._set" + (b ? "MarketingCloud" : "Analytics") + "Fields\x26mcorgid\x3d" + encodeURIComponent(a.marketingCloudOrgID) + (e ? "\x26mid\x3d" + e : ""));
                            return a.n(b ? n : l, g, d,
                                c)
                        }
                    }
                    return ""
                };
                a._setAudienceManagerFields = function(d) { a.h();
                    a.i(u, d) };
                a.s = function(d) {
                    var c = a.audienceManagerServer,
                        b = "",
                        e = a.b(n),
                        f = a.b(o, i),
                        g = a.b(l),
                        g = g && g != q ? "\x26d_cid_ic\x3dAVID%01" + encodeURIComponent(g) : "",
                        h = "",
                        j, k;
                    a.loadSSL && a.audienceManagerServerSecure && (c = a.audienceManagerServerSecure);
                    if (c) {
                        if (a.f)
                            for (j in a.f)
                                if (!Object.prototype[j] && (b = a.f[j])) g += "\x26d_cid_ic\x3d" + encodeURIComponent(j) + "%01" + encodeURIComponent(b), a.audienceManagerCustomerIDDPIDs && (k = a.audienceManagerCustomerIDDPIDs[j]) &&
                                    (h += "\x26d_cid\x3d" + k + "%01" + encodeURIComponent(b));
                        d || (d = "_setAudienceManagerFields");
                        b = "http" + (a.loadSSL ? "s" : "") + "://" + c + "/id?d_rtbd\x3djson\x26d_ver\x3d2" + (!e && a.r ? "\x26d_verify\x3d1" : "") + "\x26d_orgid\x3d" + encodeURIComponent(a.marketingCloudOrgID) + (e ? "\x26d_mid\x3d" + e : "") + (f ? "\x26d_blob\x3d" + encodeURIComponent(f) : "") + g + h + "\x26d_cb\x3ds_c_il%5B" + a._in + "%5D." + d
                    }
                    return b
                };
                a.getAudienceManagerLocationHint = function(d, c) {
                    if (a.isAllowed() && a.getMarketingCloudVisitorID(function() {
                            a.getAudienceManagerLocationHint(d,
                                i)
                        })) {
                        var b = a.b(l);
                        b || (b = a.getAnalyticsVisitorID(function() { a.getAudienceManagerLocationHint(d, i) }));
                        if (b) return a.n(r, a.s(), d, c) }
                    return ""
                };
                a.getAudienceManagerBlob = function(d, c) {
                    if (a.isAllowed() && a.getMarketingCloudVisitorID(function() { a.getAudienceManagerBlob(d, i) })) {
                        var b = a.b(l);
                        b || (b = a.getAnalyticsVisitorID(function() { a.getAudienceManagerBlob(d, i) }));
                        if (b) return b = a.s(), a.z && a.p(o, -1), a.n(o, b, d, c) }
                    return "" };
                m.AUTH_STATE_UNAUTHENTICATED = 0;
                m.AUTH_STATE_AUTHENTICATED = 1;
                m.AUTH_STATE_ASSUMED_AUTHENTICATED =
                    2;
                m.AUTH_STATE_LOGGEDOUT = 3;
                a.setAuthState = function(d) { a.isAllowed() && (a.h(), a.d(y, d)) };
                a.getAuthState = function() {
                    return a.isAllowed() ? (a.h(), a.b(y)) : 0 };
                a.k = "";
                a.q = {};
                a.u = "";
                a.v = {};
                a.getSupplementalDataID = function(d, c) {!a.k && !c && (a.k = a.m(1));
                    var b = a.k;
                    a.u && !a.v[d] ? (b = a.u, a.v[d] = i) : b && (a.q[d] && (a.u = a.k, a.v = a.q, a.k = b = !c ? a.m(1) : "", a.q = {}), b && (a.q[d] = i));
                    return b };
                0 > k.indexOf("@") && (k += "@AdobeOrg");
                a.marketingCloudOrgID = k;
                a.namespace = s;
                a.cookieName = "AMCV_" + k;
                a.cookieDomain = a.I();
                a.cookieDomain == h.location.hostname &&
                    (a.cookieDomain = "");
                if (s) {
                    var m = "AMCV_" + s,
                        A = a.cookieRead(a.cookieName),
                        z = a.cookieRead(m);!A && z && (a.cookieWrite(a.cookieName, z, 1), a.cookieWrite(m, "", -60)) }
                a.loadSSL = 0 <= h.location.protocol.toLowerCase().indexOf("https");
                a.loadTimeout = 500;
                a.marketingCloudServer = a.audienceManagerServer = "dpm.demdex.net"
            };
            Visitor.getInstance = function(k, s) {
                var a, h = window.s_c_il,
                    m;
                0 > k.indexOf("@") && (k += "@AdobeOrg");
                if (h)
                    for (m = 0; m < h.length; m++)
                        if ((a = h[m]) && "Visitor" == a._c && (a.marketingCloudOrgID == k || s && a.namespace == s)) return a;
                return new Visitor(k, s)
            };
            window.visitor = new Visitor("02A4210654EF032A0A4C98A7");
            visitor.trackingServer = "omniture.theglobeandmail.com";
            visitor.trackingServerSecure = "somniture.theglobeandmail.com";
            visitor.marketingCloudServer = "omniture.theglobeandmail.com";
            visitor.marketingCloudServerSecure = "somniture.theglobeandmail.com";
            if (ensightenLayer.userID != null) { visitor.setCustomerIDs({ "userid": ensightenLayer.userID });
                console.log("visitor.setCustomerIDs") }
        }, 1238635, 321622);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.postalCode ? ensightenLayer.postalCode : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "postalCode", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12240" }) }, 12240) }, -1, -1);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            // if (document.location.hash.indexOf("#!") > -1) {
            //     mboxDefine("cpcMbox", "target-global-mbox");
            //     mboxUpdate("target-global-mbox", "userID\x3d" + window.ensightenLayer.userID, "userAccountType\x3d" + window.ensightenLayer.userAccountType, "loggedIn\x3d" + window.ensightenLayer.loggedIn, "postalCode\x3d" + window.ensightenLayer.postalCode, "prizmCode\x3d" + window.ensightenLayer.prizmCode,
            //         "birthYear\x3d" + window.ensightenLayer.birthYear, "gender\x3d" + window.ensightenLayer.gender, "incomeRange\x3d" + window.ensightenLayer.incomeRange, "industry\x3d" + window.ensightenLayer.industry, "position\x3d" + window.ensightenLayer.position, "newsletter\x3d" + window.ensightenLayer.newsletter, "ssvcs\x3d" + window.ensightenLayer.ssvcs);
            //     console.log("CPC mboxDefine/mboxUpdate")
            // } else if (document.location.pathname.indexOf("/static/enterprise/") > -1 || document.location.pathname.indexOf("HD/Start") > -1 || document.location.pathname.indexOf("pcitransf") >
            //     -1) {
            //     if (!Bootstrapper.hasDOMLoaded()) document.write('\x3cdiv class\x3d"mboxDefault"\x3e\x3c/div\x3e');
            //     mboxCreate("target-global-mbox");
            //     console.log("Enterprise Solutions, Customer Care, PCI payment mboxCreate") } else {
            //     if (!Bootstrapper.hasDOMLoaded()) document.write('\x3cdiv class\x3d"mboxDefault"\x3e\x3c/div\x3e');
            //     if (window.ensightenLayer.articleColour != "") window.ensightenLayer.articleID = $g_conf.current.articleId;
            //     else window.ensightenLayer.articleID = "";
            //     mboxCreate("target-global-mbox", "userAccountType\x3d" +
            //         window.ensightenLayer.userAccountType, "loggedIn\x3d" + window.ensightenLayer.loggedIn, "userID\x3d" + window.ensightenLayer.userID, "postalCode\x3d" + window.ensightenLayer.postalCode, "kruxID\x3d" + window.ensightenLayer.kruxID, "articleColour\x3d" + window.ensightenLayer.articleColour, "articleID\x3d" + window.ensightenLayer.articleID, "articleType\x3d" + window.ensightenLayer.articleType, "byline\x3d" + window.ensightenLayer.byline, "keywords\x3d" + window.ensightenLayer.keywords, "topics\x3d" + window.ensightenLayer.topics,
            //         "birthYear\x3d" + window.ensightenLayer.birthYear, "gender\x3d" + window.ensightenLayer.gender, "incomeRange\x3d" + window.ensightenLayer.incomeRange, "industry\x3d" + window.ensightenLayer.industry, "position\x3d" + window.ensightenLayer.position, "newsletter\x3d" + window.ensightenLayer.newsletter, "ssvcs\x3d" + window.ensightenLayer.ssvcs);
            //     console.log("TGAM mboxCreate")
            // }
        }, 1325396, [942383, 1238635], 311422, [307757, 321622]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.userAccountType ? ensightenLayer.userAccountType : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "userAccountType", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "10425" }) }, 10425) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.loggedIn ? ensightenLayer.loggedIn : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "loggedIn", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12239" }) }, 12239) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.creditline ? ensightenLayer.creditline : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "creditline", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12246" }) }, 12246) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.mobile ? ensightenLayer.mobile : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "mobile", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "18642" }) }, 18642) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.byline ? ensightenLayer.byline : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "byline", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12244" }) }, 12244) }, -1, -1);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (ensightenLayer.mobile == "false") {
                if ($(".piano-regwall").length !== 0) $(".piano-regwall").css({ "z-index": -1, "display": none });
                $(window).load(function() { console.log($("#content .primary footer").length === 0);
                    if ($("#content .primary footer").length === 0) $("#content .primary .entry-type-embeddable").append("\x3cfooter\x3e\x3c/footer\x3e") });
                var isArticle = location.toString().indexOf("/article") !=
                    -1;
                var isColo = location.toString().indexOf(".colo.") != -1;
                var isRef = isValidReferrer(document.referrer);
                var refURL = document.referrer.indexOf("http://www.theglobeandmail.com") === -1 ? "http://www.theglobeandmail.com" : document.referrer;
                window.tp = window.tp || [];
                if (ensightenLayer.articleType === "interactive" && ensightenLayer.articleID !== "29697029" || ensightenLayer.articleType === "advInteractive") {
                    if (ensightenLayer.paywallSrc === "piano" && (ensightenLayer.articleColour == "blue" || ensightenLayer.articleColour == "yellow") &&
                        TGAMD.user.role() != 2) $(function() {
                        var s_code = s.t() });
                    isArticle = false
                }
                tp.push(["setAid", "xHZCgcLrYQ"]);
                tp.push(["setEndpoint", "https://buy.tinypass.com/api/v3"]);
                tp.push(["setUseTinypassAccounts", true]);
                tp.push(["init", function() { tp.experience.init() }]);
                tp.push(["setCustomVariable", "user_state", String("00" + TGAMD.user.role())]);
                var piano = { src: "//cdn.tinypass.com/api/tinypass.min.js" };
                if (isArticle) {
                    tp.push(["setCustomVariable", "article_paywallType", ensightenLayer.articleColour]);
                    tp.push(["setCustomVariable",
                        "article_id", ensightenLayer.articleID
                    ]);
                    tp.push(["setTags", [ensightenLayer.articleColour]]);
                    tp.push(["setCustomVariable", "sectionId", String($g_conf.current.sectionId)]);
                    tp.push(["setCustomVariable", "device", "desktop"]);
                    tp.push(["setCustomVariable", "articleType", ensightenLayer.articleType]);
                    tp.push(["setCustomVariable", "icx_url", ensightenLayer.icx_url]);
                    tp.push(["setCustomVariable", "ownership", ensightenLayer.ownership]);
                    tp.push(["setCustomVariable", "creditline", ensightenLayer.creditline]);
                    tp.push(["setCustomVariable",
                        "refURL", refURL
                    ]);
                    if (ensightenLayer.paywallSrc === "piano" && ensightenLayer.articleColour == "red" && TGAMD.user.role() != 2) $(function() { console.log("Inside red condition");
                        modifyOmniture();
                        var s_code = s.t() });
                    if (ensightenLayer.paywallSrc === "piano" && ensightenLayer.articleID === "29697029") $(function() {
                        if (ensightenLayer.loggedIn === "false") var checkExist = setInterval(function() {
                            if ($(".piano-regwall").html() === null) clearInterval(checkExist);
                            if ($(".piano-regwall").html() !== null && $(".piano-regwall").html().indexOf("\x3ciframe") !==
                                -1) { console.log("Inside regwall condition");
                                modifyOmniture();
                                $("#gi .gi-content--body").addClass("housing-regwall-blur");
                                var s_code = s.t();
                                s.eVar62 = null;
                                s.eVar63 = null;
                                s.eVar27 = null;
                                s.events = null;
                                s.eVar85 = null;
                                clearInterval(checkExist) }
                        }, 100);
                        else { console.log("Inside regwall remove");
                            $(".piano-regwall").remove() }
                    });
                    tp.push(["addHandler", "meterActive", function(meterData) {
                        console.log("You've seen " + meterData.views + " out of " + meterData.maxViews + " free articles. You have " + meterData.viewsLeft + " articles left.");
                        tp.push(["setCustomVariable", "views", meterData.views]);
                        tp.push(["setCustomVariable", "viewsLeft", meterData.viewsLeft]);
                        document.cookie = "tgampianometer\x3d" + meterData.views;
                        $(function() {
                            var checkExist = setInterval(function() {
                                if ($("#piano-footer").html() === null) clearInterval(checkExist);
                                if ($("#piano-footer").length !== 0 && $("#piano-footer").html().indexOf("\x3ciframe") !== -1) {
                                    s.events = "event54,event56";
                                    s.linkTrackEvents = s.events;
                                    s.eVar62 = "Encountered Paywall Growl - " + meterData.views;
                                    s.eVar63 = s.eVar62;
                                    s.prop59 =
                                        meterData.views;
                                    s.eVar60 = "D\x3dc59";
                                    s.eVar69 = "D\x3dc59";
                                    if (s.prop38) s.eVar75 = "D\x3dc38";
                                    if (s.prop39) s.eVar76 = "D\x3dc39";
                                    $(document).on("click", ".js-close", function() { $(this).parent().remove() });
                                    $("#piano-footer \x3e iframe").load(function() { $(".growl.hiding").removeClass("hiding").addClass("stuckGrowl").slideDown() });
                                    var s_code = s.t();
                                    clearInterval(checkExist)
                                }
                            }, 100);
                            if (meterData.views == 4 || meterData.views == 7 || meterData.views == 9) {
                                mboxDefine("footer_companyInfo", "pianoGrowl", "seenGrowl\x3dtrue");
                                mboxUpdate("pianoGrowl",
                                    "seenGrowl\x3dtrue")
                            } else if (meterData.views == 10) { mboxDefine("footer_companyInfo", "pianoThresh", "seenThresh\x3dtrue");
                                mboxUpdate("pianoThresh", "seenThresh\x3dtrue") }
                        })
                    }]);
                    tp.push(["addHandler", "meterExpired", function(meterData) {
                        console.log("Inside piano callback");
                        $(function() {
                            if (ensightenLayer.loggedIn === "false") var checkExist = setInterval(function() {
                                if ($(".piano-regwall").length !== 0 && $(".piano-regwall").html().indexOf("\x3ciframe") !== -1) {
                                    console.log("Inside regwall condition");
                                    if (ensightenLayer.articleType ===
                                        "enriched") { $(".article-wrapper").addClass("is-piano-enabled");
                                        $(".piano-regwall").css({ "display": "block" }) } else { $(".entry-content").addClass("is-piano-enabled");
                                        $(".piano-regwall").css({ "display": "block" }) }
                                    mboxDefine("footernav", "ProdRegwall");
                                    mboxUpdate("ProdRegwall", "saw_wall\x3dtrue");
                                    modifyOmniture();
                                    var s_code = s.t();
                                    s.eVar62 = null;
                                    s.eVar63 = null;
                                    s.eVar27 = null;
                                    s.events = null;
                                    s.eVar85 = null;
                                    clearInterval(checkExist)
                                }
                            }, 100);
                            else if (ensightenLayer.articleColour == "yellow") {
                                modifyOmniture();
                                var s_code =
                                    s.t()
                            }
                        })
                    }]);
                    tp.push(["addHandler", "checkoutCustomEvent", function(event) {
                        switch (event.eventName) {
                            case "register":
                                mboxDefine("footernav", "ProdRegwall");
                                mboxUpdate("ProdRegwall", "clicked_register\x3dtrue");
                                if (typeof event.params.trackingId != "undefined") $g.setCookie("p_reg_tId", event.params.trackingId, 0);
                                TGAMD.registerModal.open();
                                s.events = "event67";
                                s.linkTrackVars = "events";
                                s.linkTrackEvents = "event67";
                                s.tl(true, "o", "Regwall Create Account Click");
                                break;
                            case "login":
                                mboxDefine("footernav", "ProdRegwall");
                                mboxUpdate("ProdRegwall", "clicked_login\x3dtrue");
                                TGAMD.loginModal.open();
                                s.events = "event68";
                                s.linkTrackVars = "events";
                                s.linkTrackEvents = "event68";
                                s.tl(true, "o", "Regwall Login Button Click");
                                break;
                            case "submit":
                                var trackingId = "";
                                if (typeof event.params.trackingId != "undefined") $g.setCookie("p_tId", event.params.trackingId, 0);
                                window.location.href = $g_conf.securePubUrl + "/subscription/";
                                mboxDefine("footer_companyInfo", "pianoPaywall", "seenPaywall\x3dtrue");
                                mboxUpdate("pianoPaywall", "seenPaywall\x3dtrue");
                                break
                        }
                    }])
                }
                if (ensightenLayer.paywallSrc === "piano") {
                    if (!isColo && isArticle) setup();
                    if (isRef && TGAMD.user.role() != 2 && (ensightenLayer.articleColour == "yellow" || ensightenLayer.articleColour == "blue")) $(function() {
                        var s_code = s.t() }) }
            }

            function setup() {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.async = true;
                a.src = piano.src;
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b) }

            function modifyOmniture() {
                s.prop28 = ensightenLayer.articleID;
                s.prop63 = ensightenLayer.headline;
                s.eVar24 = ensightenLayer.headline;
                s.eVar52 = ensightenLayer.articleID;
                if (s.prop38) s.eVar75 = "D\x3dc38";
                if (s.prop39) s.eVar76 = "D\x3dc39";
                s.eVar77 = ensightenLayer.byline;
                if (ensightenLayer.articleColour == "red") {
                    switch ($g_conf.current.sectionId) {
                        case "1827":
                            s.eVar62 = "Encountered Hard Paywall Executive Insight";
                            s.eVar27 = "tryitnow:tryitnowexecutiveinsight:section";
                            s.prop22 = "tryitnow:tryitnowexecutiveinsight";
                            break;
                        case "2770":
                            s.eVar62 = "Encountered Hard Paywall Reuters Financial News";
                            s.eVar27 = "tryitnow:tryitnowreutersfinancialnews:section";
                            s.prop22 = "tryitnow:tryitnowreutersfinancialnews";
                            break;
                        case "5202":
                            s.eVar62 = "Encountered Hard Paywall Economic Insight";
                            s.eVar27 = "tryitnow:tryitnoweconomicinsight:section";
                            s.prop22 = "tryitnow:tryitnoweconomicinsight";
                            break;
                        case "7563":
                            s.eVar62 = "Encountered Hard Paywall Executive Insight";
                            s.eVar27 = "tryitnow:tryitnowexecutiveinsight:section";
                            s.prop22 = "tryitnow:tryitnowexecutiveinsight";
                            break;
                        case "2783":
                            s.eVar62 = "Encountered Hard Paywall Politics Insider";
                            s.eVar27 = "tryitnow:tryitnowpoliticsinsider:section";
                            s.prop22 = "tryitnow:tryitnowpoliticsinsider";
                            break;
                        case "372":
                            s.eVar62 = "Encountered Hard Paywall Inside the Market";
                            s.eVar27 = "tryitnow:tryitnowinsidethemarket:section";
                            s.prop22 = "tryitnow:tryitnowinsidethemarket";
                            break;
                        case "432":
                            s.eVar62 = "Encountered Hard Paywall Number Cruncher";
                            s.eVar27 = "tryitnow:tryitnownumbercruncher:section";
                            s.prop22 = "tryitnow:tryitnownumbercruncher";
                            break;
                        case "1832":
                            s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                            s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                            s.prop22 = "tryitnow:tryitnowstrategylab";
                            break;
                        case "1942":
                            s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                            s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                            s.prop22 = "tryitnow:tryitnowstrategylab";
                            break;
                        case "1943":
                            s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                            s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                            s.prop22 = "tryitnow:tryitnowstrategylab";
                            break;
                        case "1944":
                            s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                            s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                            s.prop22 = "tryitnow:tryitnowstrategylab";
                            break;
                        case "1945":
                            s.eVar62 = "Encountered Hard Paywall Strategy Lab";
                            s.eVar27 = "tryitnow:tryitnowstrategylab:section";
                            s.prop22 = "tryitnow:tryitnowstrategylab";
                            break;
                        case "434":
                            s.eVar62 = "Encountered Hard Paywall Streetwise";
                            s.eVar27 = "tryitnow:tryitnowstreetwise:section";
                            s.prop22 = "tryitnow:tryitnowstreetwise";
                            break;
                        case "3762":
                            s.eVar62 = "Encountered Hard Paywall Subscriber";
                            s.eVar27 = "tryitnow:tryitnowsubscriber:section";
                            s.prop22 = "tryitnow:tryitnowsubscriber";
                            break;
                        case "5922":
                            s.eVar62 = "Encountered Hard Paywall Top 1000 Rankings";
                            s.eVar27 = "tryitnow:tryitnowtop1000rankings:section";
                            s.prop22 = "tryitnow:tryitnowtop1000rankings";
                            break;
                        case "3254":
                            s.eVar62 = "Encountered Hard Paywall World Insider";
                            s.eVar27 = "tryitnow:tryitnowworldinsider:section";
                            s.prop22 = "tryitnow:tryitnowworldinsider";
                            break;
                        default:
                            s.eVar62 = "Encountered Hard Paywall Subscriber";
                            s.eVar27 = "tryitnow:tryitnowsubscriber:section";
                            s.prop22 = "tryitnow:tryitnowsubscriber"
                    }
                    s.prop43 = "tryitnow";
                    s.events = "event55";
                    s.eVar64 = "+1"
                } else if (ensightenLayer.articleColour == "yellow")
                    if (ensightenLayer.loggedIn === "false") {
                        if (ensightenLayer.articleID ===
                            "29697029") s.eVar62 = "Encountered Hard Regwall House Price Data Centre";
                        else s.eVar62 = "Encountered Regwall";
                        s.eVar27 = "registernow:section";
                        s.prop22 = "registernow";
                        s.prop43 = "registernow";
                        s.events = "event66";
                        s.eVar85 = "+1"
                    } else { s.eVar62 = "Encountered Hard Paywall";
                        s.eVar27 = "tryitnow:section";
                        s.prop22 = "tryitnow";
                        s.prop43 = "tryitnow";
                        s.events = "event55";
                        s.eVar64 = "+1" }
                s.eVar63 = s.eVar62;
                s.eVar16 = null;
                s.eVar19 = null;
                s.eVar25 = null;
                s.eVar26 = null;
                s.eVar33 = null;
                s.eVar58 = null;
                s.eVar65 = null;
                s.eVar68 = null;
                s.pageName = s.eVar27;
                s.prop8 = null;
                s.prop12 = null;
                s.prop13 = null;
                s.prop14 = null;
                s.prop16 = null;
                s.prop23 = s.prop22;
                s.prop24 = null;
                s.prop34 = null;
                s.prop36 = "sec";
                s.prop37 = null;
                s.prop44 = s.prop22;
                s.prop45 = s.prop22;
                s.prop46 = s.prop22;
                s.prop47 = s.prop22;
                s.prop69 = null;
                s.prop54 = null;
                s.prop55 = null;
                s.prop58 = null;
                s.prop67 = null;
                s.linkTrackEvents = s.events
            }

            function isValidReferrer(str) {
                var allowed = /(https?:\/\/)?(google\..*?|(t\.co|((facebook|linkedin|pinterest|reddit|stumbleupon|stocktwits|bing|yahoo)\.com)|lvr.it|soc.li|bit.ly|ow.ly|fw.to)\/.*)/ig;
                return allowed.test(str)
            }
        }, 1663367, [1325396], 388866, [311422]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.siteSectionPageName ? ensightenLayer.siteSectionPageName : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "siteSectionPageName", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12242" }) }, 12242) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.articleType ? ensightenLayer.articleType : "" }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "articleType", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12245" }) }, 12245) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.prizmCode ? ensightenLayer.prizmCode : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "prizmCode", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12241" }) }, 12241) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.topics ? ensightenLayer.topics : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "topics", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12247" }) }, 12247) }, -1, -1);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() { Bootstrapper.data.define({ extract: function() {
                        return ensightenLayer && ensightenLayer.keywords ? ensightenLayer.keywords : null }, load: "page", trigger: Bootstrapper.data.bottomOfBodyTrigger, dataDefName: "keywords", collection: "globeandmail", source: "Manage", priv: "false" }, { id: "12248" }) }, 12248) }, -1, -1);
        Bootstrapper.getServerComponent(Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined);
    }
})();

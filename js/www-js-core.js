;
window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a
    }

    function E(a, b) {
        return D(n.join(a + ";") + (b || ""))
    }

    function F(a, b) {
        return typeof a === b
    }

    function G(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
        }
        return !1
    }

    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
    }

    function K() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
            return u.list && (u.list = !! b.createElement("datalist") && !! a.HTMLDataListElement), u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !! e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.6.2",
        e = {}, f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k = b.createElement("input"),
        l = ":)",
        m = {}.toString,
        n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms",
        p = o.split(" "),
        q = o.toLowerCase().split(" "),
        r = {
            svg: "http://www.w3.org/2000/svg"
        }, s = {}, t = {}, u = {}, v = [],
        w = v.slice,
        x, y = function(a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !! i
        }, z = function(b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b).matches;
            var d;
            return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
                d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
            }), d
        }, A = function() {
            function d(d, e) {
                e = e || b.createElement(a[d] || "div"), d = "on" + d;
                var f = d in e;
                return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
            }
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return d
        }(),
        B = {}.hasOwnProperty,
        C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
        return B.call(a, b)
    } : C = function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = w.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var a = function() {};
                    a.prototype = c.prototype;
                    var f = new a,
                        g = c.apply(f, d.concat(w.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return c.apply(b, d.concat(w.call(arguments)))
            };
        return e
    }), s.flexbox = function() {
        return J("flexWrap")
    }, s.flexboxlegacy = function() {
        return J("boxDirection")
    }, s.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }), c
    }, s.geolocation = function() {
        return "geolocation" in navigator
    }, s.hashchange = function() {
        return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function() {
        return !!a.history && !! history.pushState
    }, s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
    }, s.borderradius = function() {
        return J("borderRadius")
    }, s.boxshadow = function() {
        return J("boxShadow")
    }, s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }, s.opacity = function() {
        return E("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
        return J("animationName")
    }, s.csscolumns = function() {
        return J("columnCount")
    }, s.cssgradients = function() {
        var a = "background-image:",
            b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            c = "linear-gradient(left top,#9f9, white);";
        return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
    }, s.csstransforms = function() {
        return !!J("transform")
    }, s.csstransforms3d = function() {
        var a = !! J("perspective");
        return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, s.csstransitions = function() {
        return J("transition")
    }, s.video = function() {
        var a = b.createElement("video"),
            c = !1;
        try {
            if (c = !! a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.audio = function() {
        var a = b.createElement("audio"),
            c = !1;
        try {
            if (c = !! a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.svg = function() {
        return !!b.createElementNS && !! b.createElementNS(r.svg, "svg").createSVGRect
    };
    for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
    return e.input || K(), e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a) C(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, D(""), i = k = null, e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function(a) {
        return H([a])
    }, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) {
        return b ? J(a, b, c) : J(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
}(this, this.document),
function(a, b) {
    function k(a, b) {
        var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a
    }

    function m(a) {
        var b = i[a[g]];
        return b || (b = {}, h++, a[g] = h, i[h] = b), b
    }

    function n(a, c, f) {
        c || (c = b);
        if (j) return c.createElement(a);
        f || (f = m(c));
        var g;
        return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
    }

    function o(a, c) {
        a || (a = b);
        if (j) return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d
    }

    function p(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(r, b.frag)
    }

    function q(a) {
        a || (a = b);
        var c = m(a);
        return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !! k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
    }

    function v(a) {
        var b, c = a.getElementsByTagName("*"),
            d = c.length,
            e = RegExp("^(?:" + l().join("|") + ")$", "i"),
            f = [];
        while (d--) b = c[d], e.test(b.nodeName) && f.push(b.applyElement(w(b)));
        return f
    }

    function w(a) {
        var b, c = a.attributes,
            d = c.length,
            e = a.ownerDocument.createElement(t + ":" + a.nodeName);
        while (d--) b = c[d], b.specified && e.setAttribute(b.nodeName, b.nodeValue);
        return e.style.cssText = a.style.cssText, e
    }

    function x(a) {
        var b, c = a.split("{"),
            d = c.length,
            e = RegExp("(^|[\\s,>+~])(" + l().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"),
            f = "$1" + t + "\\:$2";
        while (d--) b = c[d] = c[d].split("}"), b[b.length - 1] = b[b.length - 1].replace(e, f), c[d] = b.join("}");
        return c.join("{")
    }

    function y(a) {
        var b = a.length;
        while (b--) a[b].removeNode()
    }

    function z(a) {
        function g() {
            clearTimeout(d._removeSheetTimer), b && b.removeNode(!0), b = null
        }
        var b, c, d = m(a),
            e = a.namespaces,
            f = a.parentWindow;
        return !u || a.printShived ? a : (typeof e[t] == "undefined" && e.add(t), f.attachEvent("onbeforeprint", function() {
            g();
            var d, e, f, h = a.styleSheets,
                i = [],
                j = h.length,
                l = Array(j);
            while (j--) l[j] = h[j];
            while (f = l.pop())
                if (!f.disabled && s.test(f.media)) {
                    try {
                        d = f.imports, e = d.length
                    } catch (m) {
                        e = 0
                    }
                    for (j = 0; j < e; j++) l.push(d[j]);
                    try {
                        i.push(f.cssText)
                    } catch (m) {}
                }
            i = x(i.reverse().join("")), c = v(a), b = k(a, i)
        }), f.attachEvent("onafterprint", function() {
            y(c), clearTimeout(d._removeSheetTimer), d._removeSheetTimer = setTimeout(g, 500)
        }), a.printShived = !0, a)
    }
    var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
        f, g = "_html5shiv",
        h = 0,
        i = {}, j;
    (function() {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
        } catch (c) {
            f = !0, j = !0
        }
    })();
    var r = {
        elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o
    };
    a.html5 = r, q(b);
    var s = /^$|\b(?:all|print)\b/,
        t = "html5shiv",
        u = !j && function() {
            var c = b.documentElement;
            return typeof b.namespaces != "undefined" && typeof b.parentWindow != "undefined" && typeof c.applyElement != "undefined" && typeof c.removeNode != "undefined" && typeof a.attachEvent != "undefined"
        }();
    r.type += " print", r.shivPrint = z, z(b)
}(this, document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = "MozAppearance" in l.style,
        s = r && !! b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !! b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w = Array.isArray || function(a) {
            return "[object Array]" == o.call(a)
        }, x = [],
        y = {}, z = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
                b = x.length,
                c = a.pop(),
                d = a.length,
                c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                }, e, f, g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0,
                                c;
                            for (c in a) a.hasOwnProperty(c) && b++;
                            return b
                        }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        } : j[n] = function(a) {
                            return function() {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), l()
                            }
                        }(k[n])), g(a[n], j, b, n, h))
                } else !c && l()
            }
            var h = !! a.test,
                i = a.load || a.both,
                j = a.callback || f,
                k = j,
                l = a.complete || f,
                m, n;
            c(h ? a.yep : a.nope, !! i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
        z[a] = b
    }, B.addFilter = function(a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"),
            l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function() {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"),
            j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {}, g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        } if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function(b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object")
            for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border")
                for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c)
            for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !! f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function(a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function(a, b) {
                    return (b + "").toUpperCase()
                }, y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {}, j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    return i
            }, e.extend({
                noConflict: function(b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && J()
                        }
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                },
                isWindow: function(a) {
                    return a != null && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    if (typeof c != "string" || !c) return null;
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break; return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                } : function(a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function() {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function(a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) e.access(a, c, l, d[l], 1, h, f);
                        g = 1
                    } else if (f !== b) {
                        j = i === b && e.isFunction(f), k && (j ? (j = c, c = function(a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c)
                            for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                        g = 1
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function(b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            }, o = function(b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
                for (; c && m < l; m++)
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            }, p = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b, (!e || e === !0) && p.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                    return this
                },
                fire: function() {
                    p.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)
            for (n in {
                submit: 1,
                change: 1,
                focusin: 1
            }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function() {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function(a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function() {
                f.data(this, a)
            });
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function(c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function() {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function(a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this : this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++)~ g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, g = this[0]; {
                if ( !! arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if ( !! a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if ( !! a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function(a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }, H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }, I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function(a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
                h, i, j, k, l, m, n, o, p, q, r, s;
            if ( !! g && !! (o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function(c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = f.event.special[c.type] || {}, j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this)
                        if (m.disabled !== !0) {
                            p = {}, r = [], n[0] = m;
                            for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                            r.length && j.push({
                                elem: m,
                                matches: r
                            })
                        }
                }
                d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function(a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c = this,
                    d = a.relatedTarget,
                    e = a.handleObj,
                    g = e.selector,
                    h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function(a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var d = 0,
            e = function(a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function() {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function() {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function(a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            g === 1 && (h = e, e = function(a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function() {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = J);
            return this.each(function() {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function(a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function(c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        f.fn[b] = function(a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function() {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function() {
                i = !1;
                return 0
            });
        var m = function(b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
                v = m.isXML(d),
                w = [],
                x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))
                if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    } else k = w = []
                }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")
                if (!u) e.push.apply(e, k);
                else if (d && d.nodeType === 1)
                for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else
                for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function(a) {
            if (u) {
                h = i, a.sort(u);
                if (h)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function(a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }, m.filter = function(a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) g = i = !0;
                            else if (f === !0) continue
                        }
                        if (f)
                            for (n = 0;
                                (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) return [];
                            break
                        }
                    }
                if (a === q)
                    if (g == null) m.error(a);
                    else break;
                q = a
            }
            return s
        }, m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType,
                e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else
                for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(a, b) {
                        var c = typeof b == "string",
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1);
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        e && m.filter(b, a, !0)
                    },
                    ">": function(a, b) {
                        var c, d = typeof b == "string",
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function(a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                    },
                    "~": function(a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function(a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function(a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = [],
                                d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function(a, b) {
                        if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) return a;
                        for (var g = 0, h;
                            (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function(a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function(a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                        } else a[2] && m.error(a[0]);
                        a[0] = e++;
                        return a
                    },
                    ATTR: function(a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function(b, c, d, e, f) {
                        if (b[1] === "not")
                            if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                            else {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                d || e.push.apply(e, g);
                                return !1
                            } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                        return b
                    },
                    POS: function(a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        return a.checked === !0
                    },
                    selected: function(a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function(a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(a, b) {
                        return b === 0
                    },
                    last: function(a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function(a, b) {
                        return b % 2 === 0
                    },
                    odd: function(a, b) {
                        return b % 2 === 1
                    },
                    lt: function(a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function(a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function(a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function(a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function(a, b, c, d) {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a) return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function(a, b) {
                        var c, e, f, g, h, i, j, k = b[1],
                            l = a;
                        switch (k) {
                            case "only":
                            case "first":
                                while (l = l.previousSibling)
                                    if (l.nodeType === 1) return !1;
                                if (k === "first") return !0;
                                l = a;
                            case "last":
                                while (l = l.nextSibling)
                                    if (l.nodeType === 1) return !1;
                                return !0;
                            case "nth":
                                c = b[2], e = b[3];
                                if (c === 1 && e === 0) return !0;
                                f = b[0], g = a.parentNode;
                                if (g && (g[d] !== f || !a.nodeIndex)) {
                                    i = 0;
                                    for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                    g[d] = f
                                }
                                j = a.nodeIndex - e;
                                return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function(a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function(a, b) {
                        return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function(a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function(a, b) {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function(a, b, c, d) {
                        var e = b[2],
                            f = o.setFilters[e];
                        if (f) return f(a, c, b, d)
                    }
                }
            }, p = o.match.POS,
            q = function(a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function(a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number")
                    for (var e = a.length; c < e; c++) d.push(a[c]);
                else
                    for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function(a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }),
        function() {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function() {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,
                                l = e.getAttribute("id"),
                                n = l || d,
                                p = e.parentNode,
                                q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(),
        function() {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function() {
            return !1
        }, m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function(a, b, c) {
            var d, e = [],
                f = "",
                g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function() {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function(a) {
            return f.access(this, function(a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return f.access(this, function(a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function(b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function(e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function(a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l;
                (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string")
                    if (!_.test(l)) l = b.createTextNode(l);
                    else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                            n = bg[m] || bg._default,
                            o = n[0],
                            p = b.createElement("div"),
                            q = bh.childNodes,
                            r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) p = p.lastChild;
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                        }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                var u;
                if (!f.support.appendChecked)
                    if (l[0] && typeof(u = l.length) == "number")
                        for (i = 0; i < u; i++) bn(l[i]);
                    else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function(a, c) {
        return f.access(this, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function(a, b, c) {
            var d = {}, e, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function() {
                    return bB(a, b, d)
                })
            },
            set: function(a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function() {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? ca(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = cb(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z);
                    else throw z
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
                g = [a]
            }, d.always(function() {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function() {
            for (var a in cg) cg[a](0, 1)
        } : !1,
        cf = 0,
        cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && ch() || ci()
    } : ch,
    function(a) {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function(e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {}
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co, cp = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cq;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cq || cr(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(co), co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function(a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var g = b.body,
            h = cy(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : cv = function(a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    }, f.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
            d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function(e) {
            return f.access(this, function(a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function(a) {
            return f.access(this, function(a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);
if (!window.console) {
    window.console = {
        log: function() {},
        warn: function() {}
    }
}
var util = window.util || {};
util.hasModernizr = typeof Modernizr != undefined;
util.store = function(key, val, dur) {
    if (util.hasModernizr) {
        if (Modernizr.localstorage) {
            localStorage[key] = val;
        } else {
            util.setCookie(key, val, dur);
        }
    } else {
        util.setCookie(key, val, dur);
    }
};
util.getStoredValue = function(key) {
    if (util.hasModernizr) {
        if (Modernizr.localstorage) {
            return localStorage[key];
        } else {
            return util.getCookie(key);
        }
    } else {
        return util.getCookie(key);
    }
};
util.deleteStoredValue = function(key) {
    if (util.supportsLocalStorage) {
        window.localStorage.removeItem(key);
    } else {
        util.deleteCookie(key);
    }
};
util.supportsLocalStorage = function() {
    return Modernizr.localstorage;
};
util.supportsTouch = function() {
    if (util.hasModernizr) {
        return Modernizr.touch;
    } else {
        var android = navigator.userAgent.indexOf('Android') != -1;
        return android || !! ('createTouch' in document);
    }
};
util.generateSophiID = function() {
    var key = "tgam_sophiid";
    if (util.getCookie(key) == null) {
        var d = new Date();
        var t = d.getTime();
        var r = Math.floor(Math.random() * 1000000000000000000000)
        var buildSophiid = r + t.toString();
        util.setCookie(key, buildSophiid, 1825);
    }
};
util.setCookie = function(cookieName, cookieValue, nDays, targetUrl) {
    var today = new Date();
    var expire = new Date();
    var utmData = '';
    var qry = window.location.search.substring(1);
    if (qry.indexOf("utm_source") > -1) {
        utmData = '?' + qry;
    }
    if (nDays == null || nDays == 0) nDays = 1;
    expire.setTime(today.getTime() + 3600000 * 24 * nDays);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + ";path=/; domain=theglobeandmail.com";
    if (targetUrl) {
        location.href = targetUrl + utmData;
    }
    return false;
};
util.getCookie = function(cookiename) {
    var the_cookie = cookiename + "=";
    if (document.cookie.length > 0) {
        var begin = document.cookie.indexOf(the_cookie);
        if (begin != -1) {
            begin += the_cookie.length;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(begin, end));
        }
    }
    return null;
};
util.deleteCookie = function(cookiename) {
    if (util.getCookie(cookiename)) document.cookie = cookiename + "=; path=/; domain=theglobeandmail.com; expires=Mon, 01 Jan 2001 01:01:01 GMT";
};
util.truncate = function(str, maxLength, text) {
    var l = (text != "") ? maxLength : maxLength - text.length;
    return str.substring(str, l) + text;
};
util.isOnScreen = function(ele) {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = ele.offset();
    bounds.right = bounds.left + ele.outerWidth();
    bounds.bottom = bounds.top + ele.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
util.namespace = function(namespaceString) {
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = '';
    for (var i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }
    return parent;
};
try {
    jQuery.namespace = function(ns, obj) {
        var ns = ns.split('.'),
            p = window;
        for (var i = 0; i < ns.length; i++) {
            p = p[ns[i]] = p[ns[i]] || {};
        }
        if (obj) {
            jQuery.extend(p, obj);
        }
    };
} catch (e) {}
util.getQSParam = function(param) {
    param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + param + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results === null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
};
util.mobile_redirect = function() {
    var _ua = navigator.userAgent.toLowerCase();
    ['iphone', 'itouch', 'blackberry', 'android'].forEach(function(elm) {
        if (_ua.indexOf(elm) > -1) {
            var mUrl;
            if ($g_conf.publicationUrl.indexOf("www.") != -1) {
                mUrl = $g_conf.publicationUrl.replace('http://www.', 'http://m.');
            } else {
                mUrl = $g_conf.publicationUrl.replace('http://', 'http://m.');
            }
            var _html = '<div id="mobile_redirect"><a href="' + mUrl + '?service=mobile">Visit our mobile site</a></div>';
            if ($("#adv_ldbd_top").length > 0) {
                $("#adv_ldbd_top").before(_html);
            } else {
                $("#masthead").before(_html);
            }
            $("#mobile_redirect").click(function(e) {
                e.preventDefault();
                if (util.getCookie('mobile.redirect')) {
                    util.deleteCookie('mobile.redirect');
                }
                location.href = $("a", this).attr("href");
            });
        }
    });
};
util.storeIndexValue = function(key, idx, val, del, dur) {
    var nVal = '',
        nArr = [];
    var cVal = util.getStoredValue(key);
    if (dur == null || dur == 0) {
        dur = 365;
    }
    util.deleteStoredValue(key);
    var cArr = cVal.split(del);
    for (var t = 0, l = cArr.length; t < l; t++) {
        nArr[t] = t == idx ? val : cArr[t];
    }
    for (var m = 0, b = nArr.length; m < b; m++) {
        var z = m < b - 1 ? del : '';
        nVal += nArr[m] + z;
    }
    util.store(key, nVal, dur);
};
util.getStoredIndex = function(key, idx, del) {
    return util.getStoredValue(key).split(del)[idx];
};
util.getIEversion = function() {
    var regex_IE = /MSIE\s([\d.]+)/g,
        result = regex_IE.exec(navigator.userAgent);
    return parseInt(result[1]);
};
util.resolveFileUrl = function(url) {
    if (!/^https?:\/\//i.test(url)) {
        url = 'https:' === document.location.protocol ? 'https://' + url : 'http://' + url;
    }
    return url;
};
util.loadScript = function(path, async, scriptid) {
    if (scriptid && !document.getElementById(scriptid)) {
        return load();
    }

    function load() {
        return (function() {
            var s = document.createElement('script'),
                d = document.getElementsByTagName('script')[0];
            s.src = util.resolveFileUrl(path);
            s.async = async ? true : false;
            d.parentNode.insertBefore(s, d);
        })();
    }
    return load();
};
util.isInViewport = function(id) {
    var el = document.getElementById(id),
        rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
};
var $g = util;
var __advs = ['adv', 'adv.art', 'adv.gpt', 'adv.invest', 'adv.krux', 'adv.search', 'adv.search.cars', 'adv.reg'];
for (var i = 0, l = __advs.length; i < l; i++) {
    $g.namespace(__advs[i]);
}
try {
    (function($) {
        $.fn.activate = function(e) {
            var _touch = util.supportsTouch();
            if (typeof e == 'undefined') {
                return this.trigger(_touch ? 'touchstart' : 'click');
            } else {
                return this.bind(_touch ? 'touchstart' : 'click', e);
            }
        };
    })(jQuery);
} catch (e) {}
$g.namespace('globe.video');
globe.video.setAdSpot = function(spot) {
    aPs = spot;
};
globe.video.populateCoAd = function(adValue) {
    try {
        document.getElementById("coAdHolder").src = adValue;
    } catch (e) {}
};
util.getIEversion = function() {
    var regex_IE = /MSIE\s([\d.]+)/g,
        result = regex_IE.exec(navigator.userAgent);
    return parseInt(result[1]);
};
util.getTransitonEnd = function() {
    var transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'transition': 'transitionend'
    };
    return transEndEventNames[Modernizr.prefixed('transition')];
};
util.md5 = function(l) {
    function m(p) {
        l = "";
        for (j = 0; 3 >= j; j++) l += q.charAt(p >> 8 * j + 4 & 15) + q.charAt(p >> 8 * j & 15);
        return l
    }

    function k(p, f) {
        var g = (p & 65535) + (f & 65535);
        return (p >> 16) + (f >> 16) + (g >> 16) << 16 | g & 65535
    }

    function f(f, g, e, h, n, r) {
        f = k(k(g, f), k(h, r));
        return k(f << n | f >>> 32 - n, e)
    }

    function g(g, e, h, k, n, r, l) {
        return f(e & h | ~e & k, g, e, n, r, l)
    }

    function e(g, e, h, k, n, l, m) {
        return f(e & k | h & ~k, g, e, n, l, m)
    }

    function h(g, e, h, k, l, m, q) {
        return f(h ^ (e | ~k), g, e, l, m, q)
    }
    var q = "0123456789abcdef";
    x = function(e) {
        nblk = (e.length + 8 >> 6) + 1;
        blks = Array(16 * nblk);
        for (i = 0; i < 16 * nblk; i++) blks[i] = 0;
        for (i = 0; i < e.length; i++) blks[i >> 2] |= e.charCodeAt(i) << i % 4 * 8;
        blks[i >> 2] |= 128 << i % 4 * 8;
        blks[16 * nblk - 2] = 8 * e.length;
        return blks
    }(l);
    a = 1732584193;
    b = -271733879;
    c = -1732584194;
    d = 271733878;
    for (i = 0; i < x.length; i += 16) olda = a, oldb = b, oldc = c, oldd = d, a = g(a, b, c, d, x[i + 0], 7, -680876936), d = g(d, a, b, c, x[i + 1], 12, -389564586), c = g(c, d, a, b, x[i + 2], 17, 606105819), b = g(b, c, d, a, x[i + 3], 22, -1044525330), a = g(a, b, c, d, x[i + 4], 7, -176418897), d = g(d, a, b, c, x[i + 5], 12, 1200080426), c = g(c, d, a, b, x[i + 6], 17, -1473231341), b = g(b, c, d, a, x[i + 7], 22, -45705983), a = g(a, b, c, d, x[i + 8], 7, 1770035416), d = g(d, a, b, c, x[i + 9], 12, -1958414417), c = g(c, d, a, b, x[i + 10], 17, -42063), b = g(b, c, d, a, x[i + 11], 22, -1990404162), a = g(a, b, c, d, x[i + 12], 7, 1804603682), d = g(d, a, b, c, x[i + 13], 12, -40341101), c = g(c, d, a, b, x[i + 14], 17, -1502002290), b = g(b, c, d, a, x[i + 15], 22, 1236535329), a = e(a, b, c, d, x[i + 1], 5, -165796510), d = e(d, a, b, c, x[i + 6], 9, -1069501632), c = e(c, d, a, b, x[i + 11], 14, 643717713), b = e(b, c, d, a, x[i + 0], 20, -373897302), a = e(a, b, c, d, x[i + 5], 5, -701558691), d = e(d, a, b, c, x[i + 10], 9, 38016083), c = e(c, d, a, b, x[i + 15], 14, -660478335), b = e(b, c, d, a, x[i + 4], 20, -405537848), a = e(a, b, c, d, x[i + 9], 5, 568446438), d = e(d, a, b, c, x[i + 14], 9, -1019803690), c = e(c, d, a, b, x[i + 3], 14, -187363961), b = e(b, c, d, a, x[i + 8], 20, 1163531501), a = e(a, b, c, d, x[i + 13], 5, -1444681467), d = e(d, a, b, c, x[i + 2], 9, -51403784), c = e(c, d, a, b, x[i + 7], 14, 1735328473), b = e(b, c, d, a, x[i + 12], 20, -1926607734), a = f(b ^ c ^ d, a, b, x[i + 5], 4, -378558), d = f(a ^ b ^ c, d, a, x[i + 8], 11, -2022574463), c = f(d ^ a ^ b, c, d, x[i + 11], 16, 1839030562), b = f(c ^ d ^ a, b, c, x[i + 14], 23, -35309556), a = f(b ^ c ^ d, a, b, x[i +
        1], 4, -1530992060), d = f(a ^ b ^ c, d, a, x[i + 4], 11, 1272893353), c = f(d ^ a ^ b, c, d, x[i + 7], 16, -155497632), b = f(c ^ d ^ a, b, c, x[i + 10], 23, -1094730640), a = f(b ^ c ^ d, a, b, x[i + 13], 4, 681279174), d = f(a ^ b ^ c, d, a, x[i + 0], 11, -358537222), c = f(d ^ a ^ b, c, d, x[i + 3], 16, -722521979), b = f(c ^ d ^ a, b, c, x[i + 6], 23, 76029189), a = f(b ^ c ^ d, a, b, x[i + 9], 4, -640364487), d = f(a ^ b ^ c, d, a, x[i + 12], 11, -421815835), c = f(d ^ a ^ b, c, d, x[i + 15], 16, 530742520), b = f(c ^ d ^ a, b, c, x[i + 2], 23, -995338651), a = h(a, b, c, d, x[i + 0], 6, -198630844), d = h(d, a, b, c, x[i + 7], 10, 1126891415), c = h(c, d, a, b, x[i + 14], 15, -1416354905), b = h(b, c, d, a, x[i + 5], 21, -57434055), a = h(a, b, c, d, x[i + 12], 6, 1700485571), d = h(d, a, b, c, x[i + 3], 10, -1894986606), c = h(c, d, a, b, x[i + 10], 15, -1051523), b = h(b, c, d, a, x[i + 1], 21, -2054922799), a = h(a, b, c, d, x[i + 8], 6, 1873313359), d = h(d, a, b, c, x[i + 15], 10, -30611744), c = h(c, d, a, b, x[i + 6], 15, -1560198380), b = h(b, c, d, a, x[i + 13], 21, 1309151649), a = h(a, b, c, d, x[i + 4], 6, -145523070), d = h(d, a, b, c, x[i + 11], 10, -1120210379), c = h(c, d, a, b, x[i + 2], 15, 718787259), b = h(b, c, d, a, x[i + 9], 21, -343485551), a = k(a, olda), b = k(b, oldb), c = k(c, oldc), d = k(d, oldd);
    return m(a) + m(b) + m(c) + m(d)
};;
jQuery.effects || (function($, undefined) {
    $.effects = {};
    $.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'borderColor', 'color', 'outlineColor'], function(i, attr) {
        $.fx.step[attr] = function(fx) {
            if (!fx.colorInit) {
                fx.start = getColor(fx.elem, attr);
                fx.end = getRGB(fx.end);
                fx.colorInit = true;
            }
            fx.elem.style[attr] = 'rgb(' +
                Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0) + ',' +
                Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0) + ',' +
                Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0) + ')';
        };
    });

    function getRGB(color) {
        var result;
        if (color && color.constructor == Array && color.length == 3)
            return color;
        if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
            return [parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10)];
        if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
            return [parseFloat(result[1]) * 2.55, parseFloat(result[2]) * 2.55, parseFloat(result[3]) * 2.55];
        if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
            return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
        if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
            return [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16), parseInt(result[3] + result[3], 16)];
        if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
            return colors['transparent'];
        return colors[$.trim(color).toLowerCase()];
    }

    function getColor(elem, attr) {
        var color;
        do {
            color = $.curCSS(elem, attr);
            if (color != '' && color != 'transparent' || $.nodeName(elem, "body"))
                break;
            attr = "backgroundColor";
        } while (elem = elem.parentNode);
        return getRGB(color);
    };
    var colors = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    };
    var classAnimationActions = ['add', 'remove', 'toggle'],
        shorthandStyles = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };

    function getElementStyles() {
        var style = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            newStyle = {}, key, camelCase;
        if (style && style.length && style[0] && style[style[0]]) {
            var len = style.length;
            while (len--) {
                key = style[len];
                if (typeof style[key] == 'string') {
                    camelCase = key.replace(/\-(\w)/g, function(all, letter) {
                        return letter.toUpperCase();
                    });
                    newStyle[camelCase] = style[key];
                }
            }
        } else {
            for (key in style) {
                if (typeof style[key] === 'string') {
                    newStyle[key] = style[key];
                }
            }
        }
        return newStyle;
    }

    function filterStyles(styles) {
        var name, value;
        for (name in styles) {
            value = styles[name];
            if (value == null || $.isFunction(value) || name in shorthandStyles || (/scrollbar/).test(name) || (!(/color/i).test(name) && isNaN(parseFloat(value)))) {
                delete styles[name];
            }
        }
        return styles;
    }

    function styleDifference(oldStyle, newStyle) {
        var diff = {
            _: 0
        }, name;
        for (name in newStyle) {
            if (oldStyle[name] != newStyle[name]) {
                diff[name] = newStyle[name];
            }
        }
        return diff;
    }
    $.effects.animateClass = function(value, duration, easing, callback) {
        if ($.isFunction(easing)) {
            callback = easing;
            easing = null;
        }
        return this.queue(function() {
            var that = $(this),
                originalStyleAttr = that.attr('style') || ' ',
                originalStyle = filterStyles(getElementStyles.call(this)),
                newStyle, className = that.attr('class') || "";
            $.each(classAnimationActions, function(i, action) {
                if (value[action]) {
                    that[action + 'Class'](value[action]);
                }
            });
            newStyle = filterStyles(getElementStyles.call(this));
            that.attr('class', className);
            that.animate(styleDifference(originalStyle, newStyle), {
                queue: false,
                duration: duration,
                easing: easing,
                complete: function() {
                    $.each(classAnimationActions, function(i, action) {
                        if (value[action]) {
                            that[action + 'Class'](value[action]);
                        }
                    });
                    if (typeof that.attr('style') == 'object') {
                        that.attr('style').cssText = '';
                        that.attr('style').cssText = originalStyleAttr;
                    } else {
                        that.attr('style', originalStyleAttr);
                    }
                    if (callback) {
                        callback.apply(this, arguments);
                    }
                    $.dequeue(this);
                }
            });
        });
    };
    $.fn.extend({
        _addClass: $.fn.addClass,
        addClass: function(classNames, speed, easing, callback) {
            return speed ? $.effects.animateClass.apply(this, [{
                    add: classNames
                },
                speed, easing, callback
            ]) : this._addClass(classNames);
        },
        _removeClass: $.fn.removeClass,
        removeClass: function(classNames, speed, easing, callback) {
            return speed ? $.effects.animateClass.apply(this, [{
                    remove: classNames
                },
                speed, easing, callback
            ]) : this._removeClass(classNames);
        },
        _toggleClass: $.fn.toggleClass,
        toggleClass: function(classNames, force, speed, easing, callback) {
            if (typeof force == "boolean" || force === undefined) {
                if (!speed) {
                    return this._toggleClass(classNames, force);
                } else {
                    return $.effects.animateClass.apply(this, [(force ? {
                        add: classNames
                    } : {
                        remove: classNames
                    }), speed, easing, callback]);
                }
            } else {
                return $.effects.animateClass.apply(this, [{
                        toggle: classNames
                    },
                    force, speed, easing
                ]);
            }
        },
        switchClass: function(remove, add, speed, easing, callback) {
            return $.effects.animateClass.apply(this, [{
                    add: add,
                    remove: remove
                },
                speed, easing, callback
            ]);
        }
    });
    $.extend($.effects, {
        version: "1.8.21",
        save: function(element, set) {
            for (var i = 0; i < set.length; i++) {
                if (set[i] !== null) element.data("ec.storage." + set[i], element[0].style[set[i]]);
            }
        },
        restore: function(element, set) {
            for (var i = 0; i < set.length; i++) {
                if (set[i] !== null) element.css(set[i], element.data("ec.storage." + set[i]));
            }
        },
        setMode: function(el, mode) {
            if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide';
            return mode;
        },
        getBaseline: function(origin, original) {
            var y, x;
            switch (origin[0]) {
                case 'top':
                    y = 0;
                    break;
                case 'middle':
                    y = 0.5;
                    break;
                case 'bottom':
                    y = 1;
                    break;
                default:
                    y = origin[0] / original.height;
            };
            switch (origin[1]) {
                case 'left':
                    x = 0;
                    break;
                case 'center':
                    x = 0.5;
                    break;
                case 'right':
                    x = 1;
                    break;
                default:
                    x = origin[1] / original.width;
            };
            return {
                x: x,
                y: y
            };
        },
        createWrapper: function(element) {
            if (element.parent().is('.ui-effects-wrapper')) {
                return element.parent();
            }
            var props = {
                width: element.outerWidth(true),
                height: element.outerHeight(true),
                'float': element.css('float')
            }, wrapper = $('<div></div>').addClass('ui-effects-wrapper').css({
                    fontSize: '100%',
                    background: 'transparent',
                    border: 'none',
                    margin: 0,
                    padding: 0
                }),
                active = document.activeElement;
            try {
                active.id;
            } catch (e) {
                active = document.body;
            }
            element.wrap(wrapper);
            if (element[0] === active || $.contains(element[0], active)) {
                $(active).focus();
            }
            wrapper = element.parent();
            if (element.css('position') == 'static') {
                wrapper.css({
                    position: 'relative'
                });
                element.css({
                    position: 'relative'
                });
            } else {
                $.extend(props, {
                    position: element.css('position'),
                    zIndex: element.css('z-index')
                });
                $.each(['top', 'left', 'bottom', 'right'], function(i, pos) {
                    props[pos] = element.css(pos);
                    if (isNaN(parseInt(props[pos], 10))) {
                        props[pos] = 'auto';
                    }
                });
                element.css({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 'auto',
                    bottom: 'auto'
                });
            }
            return wrapper.css(props).show();
        },
        removeWrapper: function(element) {
            var parent, active = document.activeElement;
            if (element.parent().is('.ui-effects-wrapper')) {
                parent = element.parent().replaceWith(element);
                if (element[0] === active || $.contains(element[0], active)) {
                    $(active).focus();
                }
                return parent;
            }
            return element;
        },
        setTransition: function(element, list, factor, value) {
            value = value || {};
            $.each(list, function(i, x) {
                var unit = element.cssUnit(x);
                if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
            });
            return value;
        }
    });

    function _normalizeArguments(effect, options, speed, callback) {
        if (typeof effect == 'object') {
            callback = options;
            speed = null;
            options = effect;
            effect = options.effect;
        }
        if ($.isFunction(options)) {
            callback = options;
            speed = null;
            options = {};
        }
        if (typeof options == 'number' || $.fx.speeds[options]) {
            callback = speed;
            speed = options;
            options = {};
        }
        if ($.isFunction(speed)) {
            callback = speed;
            speed = null;
        }
        options = options || {};
        speed = speed || options.duration;
        speed = $.fx.off ? 0 : typeof speed == 'number' ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
        callback = callback || options.complete;
        return [effect, options, speed, callback];
    }

    function standardSpeed(speed) {
        if (!speed || typeof speed === "number" || $.fx.speeds[speed]) {
            return true;
        }
        if (typeof speed === "string" && !$.effects[speed]) {
            return true;
        }
        return false;
    }
    $.fn.extend({
        effect: function(effect, options, speed, callback) {
            var args = _normalizeArguments.apply(this, arguments),
                args2 = {
                    options: args[1],
                    duration: args[2],
                    callback: args[3]
                }, mode = args2.options.mode,
                effectMethod = $.effects[effect];
            if ($.fx.off || !effectMethod) {
                if (mode) {
                    return this[mode](args2.duration, args2.callback);
                } else {
                    return this.each(function() {
                        if (args2.callback) {
                            args2.callback.call(this);
                        }
                    });
                }
            }
            return effectMethod.call(this, args2);
        },
        _show: $.fn.show,
        show: function(speed) {
            if (standardSpeed(speed)) {
                return this._show.apply(this, arguments);
            } else {
                var args = _normalizeArguments.apply(this, arguments);
                args[1].mode = 'show';
                return this.effect.apply(this, args);
            }
        },
        _hide: $.fn.hide,
        hide: function(speed) {
            if (standardSpeed(speed)) {
                return this._hide.apply(this, arguments);
            } else {
                var args = _normalizeArguments.apply(this, arguments);
                args[1].mode = 'hide';
                return this.effect.apply(this, args);
            }
        },
        __toggle: $.fn.toggle,
        toggle: function(speed) {
            if (standardSpeed(speed) || typeof speed === "boolean" || $.isFunction(speed)) {
                return this.__toggle.apply(this, arguments);
            } else {
                var args = _normalizeArguments.apply(this, arguments);
                args[1].mode = 'toggle';
                return this.effect.apply(this, args);
            }
        },
        cssUnit: function(key) {
            var style = this.css(key),
                val = [];
            $.each(['em', 'px', '%', 'pt'], function(i, unit) {
                if (style.indexOf(unit) > 0)
                    val = [parseFloat(style), unit];
            });
            return val;
        }
    });
    $.easing.jswing = $.easing.swing;
    $.extend($.easing, {
        def: 'easeOutQuad',
        swing: function(x, t, b, c, d) {
            return $.easing[$.easing.def](x, t, b, c, d);
        },
        easeInQuad: function(x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function(x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function(x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function(x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function(x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function(x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function(x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function(x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function(x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function(x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function(x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function(x, t, b, c, d) {
            return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function(x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function(x, t, b, c, d) {
            if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });
})(jQuery);
(function($, undefined) {
    $.effects.slide = function(o) {
        return this.queue(function() {
            var el = $(this),
                props = ['position', 'top', 'bottom', 'left', 'right'];
            var mode = $.effects.setMode(el, o.options.mode || 'show');
            var direction = o.options.direction || 'left';
            $.effects.save(el, props);
            el.show();
            $.effects.createWrapper(el).css({
                overflow: 'hidden'
            });
            var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
            var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';
            var distance = o.options.distance || (ref == 'top' ? el.outerHeight({
                margin: true
            }) : el.outerWidth({
                margin: true
            }));
            if (mode == 'show') el.css(ref, motion == 'pos' ? (isNaN(distance) ? "-" + distance : -distance) : distance);
            var animation = {};
            animation[ref] = (mode == 'show' ? (motion == 'pos' ? '+=' : '-=') : (motion == 'pos' ? '-=' : '+=')) + distance;
            el.animate(animation, {
                queue: false,
                duration: o.duration,
                easing: o.options.easing,
                complete: function() {
                    if (mode == 'hide') el.hide();
                    $.effects.restore(el, props);
                    $.effects.removeWrapper(el);
                    if (o.callback) o.callback.apply(this, arguments);
                    el.dequeue();
                }
            });
        });
    };
})(jQuery);
(function($, wp, wps, window, undefined) {
    '$:nomunge';
    var $w = $(window),
        eventName = 'waypoint.reached',
        triggerWaypoint = function(way, dir) {
            way.element.trigger(eventName, dir);
            if (way.options.triggerOnce) {
                way.element[wp]('destroy');
            }
        }, waypointIndex = function(el, context) {
            if (!context) return -1;
            var i = context.waypoints.length - 1;
            while (i >= 0 && context.waypoints[i].element[0] !== el[0]) {
                i -= 1;
            }
            return i;
        }, contexts = [],
        Context = function(context) {
            $.extend(this, {
                element: $(context),
                oldScroll: 0,
                'waypoints': [],
                didScroll: false,
                didResize: false,
                doScroll: $.proxy(function() {
                    var newScroll = this.element.scrollTop(),
                        isDown = newScroll > this.oldScroll,
                        that = this,
                        pointsHit = $.grep(this.waypoints, function(el, i) {
                            return isDown ? (el.offset > that.oldScroll && el.offset <= newScroll) : (el.offset <= that.oldScroll && el.offset > newScroll);
                        }),
                        len = pointsHit.length;
                    if (!this.oldScroll || !newScroll) {
                        $[wps]('refresh');
                    }
                    this.oldScroll = newScroll;
                    if (!len) return;
                    if (!isDown) pointsHit.reverse();
                    $.each(pointsHit, function(i, point) {
                        if (point.options.continuous || i === len - 1) {
                            triggerWaypoint(point, [isDown ? 'down' : 'up']);
                        }
                    });
                }, this)
            });
            $(context).bind('scroll.waypoints', $.proxy(function() {
                if (!this.didScroll) {
                    this.didScroll = true;
                    window.setTimeout($.proxy(function() {
                        this.doScroll();
                        this.didScroll = false;
                    }, this), $[wps].settings.scrollThrottle);
                }
            }, this)).bind('resize.waypoints', $.proxy(function() {
                if (!this.didResize) {
                    this.didResize = true;
                    window.setTimeout($.proxy(function() {
                        $[wps]('refresh');
                        this.didResize = false;
                    }, this), $[wps].settings.resizeThrottle);
                }
            }, this));
            $w.load($.proxy(function() {
                this.doScroll();
            }, this));
        }, getContextByElement = function(element) {
            var found = null;
            $.each(contexts, function(i, c) {
                if (c.element[0] === element) {
                    found = c;
                    return false;
                }
            });
            return found;
        }, methods = {
            init: function(f, options) {
                this.each(function() {
                    var cElement = $.fn[wp].defaults.context,
                        context, $this = $(this);
                    if (options && options.context) {
                        cElement = options.context;
                    }
                    if (!$.isWindow(cElement)) {
                        cElement = $this.closest(cElement)[0];
                    }
                    context = getContextByElement(cElement);
                    if (!context) {
                        context = new Context(cElement);
                        contexts.push(context);
                    }
                    var ndx = waypointIndex($this, context),
                        base = ndx < 0 ? $.fn[wp].defaults : context.waypoints[ndx].options,
                        opts = $.extend({}, base, options);
                    opts.offset = opts.offset === "bottom-in-view" ? function() {
                        var cHeight = $.isWindow(cElement) ? $[wps]('viewportHeight') : $(cElement).height();
                        return cHeight - $(this).outerHeight();
                    } : opts.offset;
                    if (ndx < 0) {
                        context.waypoints.push({
                            'element': $this,
                            'offset': null,
                            'options': opts
                        });
                    } else {
                        context.waypoints[ndx].options = opts;
                    }
                    if (f) {
                        $this.bind(eventName, f);
                    }
                    if (options && options.handler) {
                        $this.bind(eventName, options.handler);
                    }
                });
                $[wps]('refresh');
                return this;
            },
            remove: function() {
                return this.each(function(i, el) {
                    var $el = $(el);
                    $.each(contexts, function(i, c) {
                        var ndx = waypointIndex($el, c);
                        if (ndx >= 0) {
                            c.waypoints.splice(ndx, 1);
                            if (!c.waypoints.length) {
                                c.element.unbind('scroll.waypoints resize.waypoints');
                                contexts.splice(i, 1);
                            }
                        }
                    });
                });
            },
            destroy: function() {
                return this.unbind(eventName)[wp]('remove');
            }
        }, jQMethods = {
            refresh: function() {
                $.each(contexts, function(i, c) {
                    var isWin = $.isWindow(c.element[0]),
                        contextOffset = isWin ? 0 : c.element.offset().top,
                        contextHeight = isWin ? $[wps]('viewportHeight') : c.element.height(),
                        contextScroll = isWin ? 0 : c.element.scrollTop();
                    $.each(c.waypoints, function(j, o) {
                        if (!o) return;
                        var adjustment = o.options.offset,
                            oldOffset = o.offset;
                        if (typeof o.options.offset === "function") {
                            adjustment = o.options.offset.apply(o.element);
                        } else if (typeof o.options.offset === "string") {
                            var amount = parseFloat(o.options.offset);
                            adjustment = o.options.offset.indexOf("%") ? Math.ceil(contextHeight * (amount / 100)) : amount;
                        }
                        o.offset = o.element.offset().top - contextOffset + contextScroll - adjustment;
                        if (o.options.onlyOnScroll) return;
                        if (oldOffset !== null && c.oldScroll > oldOffset && c.oldScroll <= o.offset) {
                            triggerWaypoint(o, ['up']);
                        } else if (oldOffset !== null && c.oldScroll < oldOffset && c.oldScroll >= o.offset) {
                            triggerWaypoint(o, ['down']);
                        } else if (!oldOffset && c.element.scrollTop() > o.offset) {
                            triggerWaypoint(o, ['down']);
                        }
                    });
                    c.waypoints.sort(function(a, b) {
                        return a.offset - b.offset;
                    });
                });
            },
            viewportHeight: function() {
                return (window.innerHeight ? window.innerHeight : $w.height());
            },
            aggregate: function() {
                var points = $();
                $.each(contexts, function(i, c) {
                    $.each(c.waypoints, function(i, e) {
                        points = points.add(e.element);
                    });
                });
                return points;
            }
        };
    $.fn[wp] = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "function" || !method) {
            return methods.init.apply(this, arguments);
        } else if (typeof method === "object") {
            return methods.init.apply(this, [null, method]);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery ' + wp);
        }
    };
    $.fn[wp].defaults = {
        continuous: true,
        offset: 0,
        triggerOnce: false,
        context: window
    };
    $[wps] = function(method) {
        if (jQMethods[method]) {
            return jQMethods[method].apply(this);
        } else {
            return jQMethods['aggregate']();
        }
    };
    $[wps].settings = {
        resizeThrottle: 200,
        scrollThrottle: 100
    };
    $w.load(function() {
        $[wps]('refresh');
    });
})(jQuery, 'waypoint', 'waypoints', window);
var TGAMD = window.TGAMD || {};
TGAMD.ads = (function(global, $, globeUtils) {
    'use strict';
    var cfgDefaults = {
        mode: 'page'
    };
    var cfg = global.adv && global.adv.__config ? global.adv.__config : cfgDefaults;
    var displayWhenInView = cfg.mode === 'view';
    var units = [];
    var vents = 'DOMContentLoaded load resize scroll';

    function loadUnits() {
        var i, unit;
        var l = units.length;
        var in_view = false;
        for (i = 0; i < l; ++i) {
            unit = units[i];
            if (unit.loaded === false) {
                if (!displayWhenInView) {
                    loadUnit(unit);
                } else {
                    in_view = globeUtils.isInViewport(unit.id);
                    if (in_view) {
                        loadUnit(unit);
                    }
                }
            }
        }
        if (displayWhenInView) {
            $(window).off(vents, loadUnits);
        }
    }

    function getAdCreativeSize(ad) {
        var $creative = $(ad).find('iframe, img').first();
        return {
            width: $creative.width(),
            height: $creative.height()
        };
    }

    function loadGPTCoad(id, size, site) {
        // var googletag = global.googletag || {};
        // var coad = {
        //     id: id,
        //     site: site ? site : global.adv.site,
        //     width: size[0],
        //     height: size[1]
        // };
        // if ($.isEmptyObject(googletag)) {
        //     $.getScript(document.location.protocol + '//www.googletagservices.com/tag/js/gpt.js', function(data, textStatus, jqxhr) {
        //         if (jqxhr.status === 200) {
        //             writeCoad(coad);
        //         }
        //     });
        // } else {
        //     writeCoad(coad);
        // }

        // function writeCoad(coad) {
        //     global.googletag.defineSlot('/58/' + coad.site + '/coad', [coad.width, coad.height], coad.id).addService(global.googletag.companionAds()).addService(global.googletag.pubads());
        //     global.googletag.companionAds().setRefreshUnfilledSlots(true);
        //     global.googletag.pubads().disableInitialLoad();
        //     global.googletag.enableServices();
        //     $('#' + coad.id).append(global.googletag.display(coad.width));
        // }
    }

    function loadUnit(unit) {
        if (unit.loaded === true) {
            return;
        }
        var src = unit.src.replace('</script>', '<\/script>');
        global.postscribe('#' + unit.id, src);
        unit.loaded = true;
    }

    function push(unit) {
        unit.loaded = false;
        units.push(unit);
    }
    return {
        _init: (function() {
            if (displayWhenInView) {
                $(window).on(vents, loadUnits);
            } else {
                $(document).ready(loadUnits);
            }
        })(),
        push: push,
        getGPTCoad: loadGPTCoad,
        getAdCreativeSize: getAdCreativeSize,
        debug: function() {
            console.log(units);
        }
    };
})(window, jQuery, $g);
TGAMD = window.TGAMD || {};
TGAMD.user = (function(exports, $, util) {
    'use strict';
    var ANON = 0,
        REGISTERED = 1,
        PREMIUM = 2,
        WEALTH = 3,
        PRODUCT_REG = '4-0h+a1nZ1N16x+zBBOJPLXQ==',
        PRODUCT_PREM = '4-0h+a1nZ1N15UhmzqO/PXrQ==',
        PRODUCT_WEALTH = '4-0h+a1nZ1N14G2dv3lYhFVQ==',
        COOKIE_SSO = 'SSO_COOKIE',
        COOKIE_HD = 'hd',
        COOKIE_PRODUCT = 'PRODUCT_COOKIE',
        attributes = {
            role: '',
            guid: null,
            postal: '',
            watchlist: 'n',
            prizm: '',
            country: ''
        };

    function getAttribute(k) {
        if (k) {
            return attributes[k];
        }
        return attributes;
    }

    function get(k) {
        return getAttribute(k);
    }

    function setAttribute(k, val) {
        if (typeof k === 'object') {
            $.extend(attributes, k);
        } else {
            attributes[k] = typeof val === 'function' ? val() : val;
        }
        return attributes;
    }

    function set(k, val) {
        return setAttribute(k, val);
    }

    function init() {
        set('role', role());
        set('kuser', function() {
            var kuser = localStorage.getItem('kxuser');
            return (kuser === null || typeof kuser === 'undefined') ? 'na' : kuser;
        });
    }

    function is() {
        var type = role();
        return {
            registered: REGISTERED === type,
            premium: PREMIUM === type,
            anonymous: ANON === type,
            wealth: WEALTH === type
        }
    }

    function role() {
        var sso = util.getCookie(COOKIE_SSO);
        var product = util.getCookie(COOKIE_PRODUCT) || '';
        var product_key = product.split('|')[0];
        var dataLayerProduct = '';
        if (TGAMD.user) {
            try {
                var dataLayerProduct = TGAMD.user.get().ssvcs || '';
            } finally {}
        }
        if (sso === null) {
            return ANON;
        } else {
            if (product_key === PRODUCT_PREM || dataLayerProduct.length > 0) {
                return PREMIUM;
            }
            if (product_key === PRODUCT_WEALTH) {
                return WEALTH;
            }
            return REGISTERED;
        }
    }
    return {
        _init: init(),
        _attrs: attributes,
        get: getAttribute,
        set: setAttribute,
        is: is(),
        role: role
    }
})(window, jQuery, window.util);
TGAMD = window.TGAMD || {};
TGAMD.DepthCharge = (function(doc, win, $, globeUtils) {
    'use strict';
    var DEBUG = null !== location.search.match(/depthchargedebug/);
    var log = function() {
        if (!DEBUG || !win.console) {
            return;
        }
        console.log.apply(console, arguments);
    };
    var pre = 'tgamd__chg';
    var $win = $(win);
    var $oldDocHeight = $(doc).height();

    function DepthCharge(selector, options, callback) {
        var prop, obj;
        var defaults = {
            matchFirst: false,
            matchIndex: false,
            wait: 100
        };
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        var cfg = $.extend(defaults, options, {
            selector: selector,
            id: _guid(),
            callback: callback,
            scroll: 'scroll.DepthCharge' + _guid()
        });
        var $el = this.container(selector, cfg);
        cfg = $.extend(cfg, _dimensions($el));
        for (prop in cfg) {
            if (!this.hasOwnProperty(prop)) {
                this[prop] = cfg[prop];
            }
        }
        this.appendCharges();
        $win.on(this.scroll, $.proxy(_throttle(this.checkCharges, this.wait), this));
    }
    DepthCharge.prototype.checkCharges = function() {
        if (!this.charges.hasOwnProperty('100')) {
            log('Killing ' + this.scroll + ' event');
            $win.off(this.scroll);
            return;
        }
        var currentHeight;
        var self = this;
        var docHeight = $(doc).height();
        if (docHeight !== $oldDocHeight) {
            log('Document changed in some way...');
            $oldDocHeight = docHeight;
            currentHeight = this.$el.height();
            if (currentHeight !== this.height) {
                log('DepthCharge ' + this.id + ' height has changed, setting new dimensions');
                $.extend(this, _dimensions(this.$el));
                log('New dimensions for ' + this.id, this);
                this.removeAllCharges();
                this.appendCharges();
            }
        }
        $.each(self.charges, function(charge, depth) {
            var id = pre + charge;
            var scrolledPast = self.chargeWasScrolledPassed(charge);
            var inView = globeUtils.isInViewport(id);
            if (inView || scrolledPast) {
                log('DepthCharge ' + self.id + ' reached or exceeded ' + charge + '%');
                self.callback(charge);
                self.removeCharge(charge);
            }
        });
    };
    DepthCharge.prototype.container = function(selector, cfg) {
        if (!cfg.matchFirst && !cfg.matchIndex) {
            return $(selector);
        }
        return cfg.matchFirst ? $(selector).eq(0) : $(selector).eq(cfg.matchIndex);
    };
    DepthCharge.prototype.chargeWasScrolledPassed = function(charge) {
        var scrollDistance = $win.scrollTop() - $win.height();
        return scrollDistance > this.charges[charge];
    };
    DepthCharge.prototype.appendCharges = function() {
        $.each(this.charges, function(charge, depth) {
            var $c = $('<i id="' + pre + charge + '"></i>').css({
                position: 'absolute',
                zIndex: -1,
                top: depth + 'px'
            });
            $('body').append($c);
        });
    };
    DepthCharge.prototype.removeCharge = function(charge) {
        var el = '#' + pre + charge;
        $(el).remove();
        delete this.charges[charge];
        return this.charges;
    };
    DepthCharge.prototype.removeAllCharges = function() {
        var self = this;
        var el, $c;
        $.each(this.charges, function(charge) {
            el = '#' + pre + charge;
            $c = $(el);
            $c.remove();
        });
    };
    return DepthCharge;

    function _dimensions($el) {
        var height = $el.height(),
            top = $el.offset().top,
            charges = createCharges(top, height);
        return {
            $el: $el,
            height: height,
            top: top,
            charges: charges
        };
    }

    function createCharges(elTop, elHeight) {
        return {
            '12-5': elTop,
            '25': elTop + parseInt(elHeight * 0.125, 10),
            '37-5': elTop + parseInt(elHeight * 0.25, 10),
            '50': elTop + parseInt(elHeight * 0.375, 10),
            '62-5': elTop + parseInt(elHeight * 0.50, 10),
            '75': elTop + parseInt(elHeight * 0.625, 10),
            '87-5': elTop + parseInt(elHeight * 0.75, 10),
            '100': elTop + parseInt(elHeight * 0.875, 10)
        };
    }

    function _guid() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }

    function _now() {
        return Date.now ? Date.now() : new Date().getTime();
    }

    function _throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : _now();
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        };
        return function() {
            var now = _now();
            if (!previous && options.leading === false) {
                previous = now;
            }
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }
})(document, window, jQuery, $g);
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return Uc.apply(null, arguments)
    }

    function b(a) {
        Uc = a
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
        return Da(a, b, c, d, !0).utc()
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a) {
        return void 0 === a
    }

    function n(a, b) {
        var c, d, e;
        if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Wc.length > 0)
            for (c in Wc) d = Wc[c], e = b[d], m(e) || (a[d] = e);
        return a
    }

    function o(b) {
        n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Xc === !1 && (Xc = !0, a.updateOffset(this), Xc = !1)
    }

    function p(a) {
        return a instanceof o || null != a && null != a._isAMomentObject
    }

    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function r(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = q(b)), c
    }

    function s(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
        return g + f
    }

    function t() {}

    function u(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function v(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = w(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function w(a) {
        var b = null;
        if (!Yc[a] && "undefined" != typeof module && module && module.exports) try {
            b = Vc._abbr, require("./locale/" + a), x(b)
        } catch (c) {}
        return Yc[a]
    }

    function x(a, b) {
        var c;
        return a && (c = m(b) ? z(a) : y(a, b), c && (Vc = c)), Vc._abbr
    }

    function y(a, b) {
        return null !== b ? (b.abbr = a, Yc[a] = Yc[a] || new t, Yc[a].set(b), x(a), Yc[a]) : (delete Yc[a], null)
    }

    function z(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Vc;
        if (!c(a)) {
            if (b = w(a)) return b;
            a = [a]
        }
        return v(a)
    }

    function A(a, b) {
        var c = a.toLowerCase();
        Zc[c] = Zc[c + "s"] = Zc[b] = a
    }

    function B(a) {
        return "string" == typeof a ? Zc[a] || Zc[a.toLowerCase()] : void 0
    }

    function C(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = B(c), b && (d[b] = a[c]));
        return d
    }

    function D(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function E(b, c) {
        return function(d) {
            return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b)
        }
    }

    function F(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function G(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function H(a, b) {
        var c;
        if ("object" == typeof a)
            for (c in a) this.set(c, a[c]);
        else if (a = B(a), D(this[a])) return this[a](b);
        return this
    }

    function I(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function J(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (bd[a] = e), b && (bd[b[0]] = function() {
            return I(e.apply(this, arguments), b[1], b[2])
        }), c && (bd[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function K(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function L(a) {
        var b, c, d = a.match($c);
        for (b = 0, c = d.length; c > b; b++) bd[d[b]] ? d[b] = bd[d[b]] : d[b] = K(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function M(a, b) {
        return a.isValid() ? (b = N(b, a.localeData()), ad[b] = ad[b] || L(b), ad[b](a)) : a.localeData().invalidDate()
    }

    function N(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (_c.lastIndex = 0; d >= 0 && _c.test(a);) a = a.replace(_c, c), _c.lastIndex = 0, d -= 1;
        return a
    }

    function O(a, b, c) {
        td[a] = D(b) ? b : function(a, d) {
            return a && c ? c : b
        }
    }

    function P(a, b) {
        return f(td, a) ? td[a](b._strict, b._locale) : new RegExp(Q(a))
    }

    function Q(a) {
        return R(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function S(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
            c[b] = r(a)
        }), c = 0; c < a.length; c++) ud[a[c]] = d
    }

    function T(a, b) {
        S(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function U(a, b, c) {
        null != b && f(ud, a) && ud[a](b, c._a, c, a)
    }

    function V(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function W(a, b) {
        return c(this._months) ? this._months[a.month()] : this._months[Ed.test(b) ? "format" : "standalone"][a.month()]
    }

    function X(a, b) {
        return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ed.test(b) ? "format" : "standalone"][a.month()]
    }

    function Y(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function Z(a, b) {
        var c;
        return a.isValid() ? "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), V(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) : a
    }

    function $(b) {
        return null != b ? (Z(this, b), a.updateOffset(this, !0), this) : F(this, "Month")
    }

    function _() {
        return V(this.year(), this.month())
    }

    function aa(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function ba(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
    }

    function ca() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = R(d[b]), e[b] = R(e[b]), f[b] = R(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i")
    }

    function da(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[wd] < 0 || c[wd] > 11 ? wd : c[xd] < 1 || c[xd] > V(c[vd], c[wd]) ? xd : c[yd] < 0 || c[yd] > 24 || 24 === c[yd] && (0 !== c[zd] || 0 !== c[Ad] || 0 !== c[Bd]) ? yd : c[zd] < 0 || c[zd] > 59 ? zd : c[Ad] < 0 || c[Ad] > 59 ? Ad : c[Bd] < 0 || c[Bd] > 999 ? Bd : -1, j(a)._overflowDayOfYear && (vd > b || b > xd) && (b = xd), j(a)._overflowWeeks && -1 === b && (b = Cd), j(a)._overflowWeekday && -1 === b && (b = Dd), j(a).overflow = b), a
    }

    function ea(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function fa(a, b) {
        var c = !0;
        return g(function() {
            return c && (ea(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
        }, b)
    }

    function ga(a, b) {
        Jd[a] || (ea(b), Jd[a] = !0)
    }

    function ha(a) {
        var b, c, d, e, f, g, h = a._i,
            i = Kd.exec(h) || Ld.exec(h);
        if (i) {
            for (j(a).iso = !0, b = 0, c = Nd.length; c > b; b++)
                if (Nd[b][1].exec(i[1])) {
                    e = Nd[b][0], d = Nd[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Od.length; c > b; b++)
                    if (Od[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Od[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!Md.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), wa(a)
        } else a._isValid = !1
    }

    function ia(b) {
        var c = Pd.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (ha(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function ja(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ka(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function la(a) {
        return ma(a) ? 366 : 365
    }

    function ma(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function na() {
        return ma(this.year())
    }

    function oa(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ka(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function pa(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = oa(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return 0 >= j ? (f = a - 1, g = la(f) + j) : j > la(a) ? (f = a + 1, g = j - la(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function qa(a, b, c) {
        var d, e, f = oa(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return 1 > g ? (e = a.year() - 1, d = g + ra(e, b, c)) : g > ra(a.year(), b, c) ? (d = g - ra(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function ra(a, b, c) {
        var d = oa(a, b, c),
            e = oa(a + 1, b, c);
        return (la(a) - d + e) / 7
    }

    function sa(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function ta(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function ua(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ta(a), a._w && null == a._a[xd] && null == a._a[wd] && va(a), a._dayOfYear && (e = sa(a._a[vd], d[vd]), a._dayOfYear > la(e) && (j(a)._overflowDayOfYear = !0), c = ka(e, 0, a._dayOfYear), a._a[wd] = c.getUTCMonth(), a._a[xd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[yd] && 0 === a._a[zd] && 0 === a._a[Ad] && 0 === a._a[Bd] && (a._nextDay = !0, a._a[yd] = 0), a._d = (a._useUTC ? ka : ja).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[yd] = 24)
        }
    }

    function va(a) {
        var b, c, d, e, f, g, h, i;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = sa(b.GG, a._a[vd], qa(Ea(), 1, 4).year), d = sa(b.W, 1), e = sa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = sa(b.gg, a._a[vd], qa(Ea(), f, g).year), d = sa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > ra(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = pa(c, d, e, f, g), a._a[vd] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function wa(b) {
        if (b._f === a.ISO_8601) return void ha(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            k = 0;
        for (e = N(b._f, b._locale).match($c) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), bd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), U(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[yd] <= 12 && b._a[yd] > 0 && (j(b).bigHour = void 0), b._a[yd] = xa(b._locale, b._a[yd], b._meridiem), ua(b), da(b)
    }

    function xa(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function ya(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], wa(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function za(a) {
        if (!a._d) {
            var b = C(a._i);
            a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), ua(a)
        }
    }

    function Aa(a) {
        var b = new o(da(Ba(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function Ba(a) {
        var b = a._i,
            e = a._f;
        return a._locale = a._locale || z(a._l), null === b || void 0 === e && "" === b ? l({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(da(b)) : (c(e) ? ya(a) : e ? wa(a) : d(b) ? a._d = b : Ca(a), k(a) || (a._d = null), a))
    }

    function Ca(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ia(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
            return parseInt(a, 10)
        }), ua(b)) : "object" == typeof f ? za(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function Da(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Aa(f)
    }

    function Ea(a, b, c, d) {
        return Da(a, b, c, d, !1)
    }

    function Fa(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ea();
        for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d
    }

    function Ga() {
        var a = [].slice.call(arguments, 0);
        return Fa("isBefore", a)
    }

    function Ha() {
        var a = [].slice.call(arguments, 0);
        return Fa("isAfter", a)
    }

    function Ia(a) {
        var b = C(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = z(), this._bubble()
    }

    function Ja(a) {
        return a instanceof Ia
    }

    function Ka(a, b) {
        J(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return 0 > a && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
        })
    }

    function La(a, b) {
        var c = (b || "").match(a) || [],
            d = c[c.length - 1] || [],
            e = (d + "").match(Ud) || ["-", 0, 0],
            f = +(60 * e[1]) + r(e[2]);
        return "+" === e[0] ? f : -f
    }

    function Ma(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Ea(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Ea(b).local()
    }

    function Na(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Oa(b, c) {
        var d, e = this._offset || 0;
        return this.isValid() ? null != b ? ("string" == typeof b ? b = La(qd, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Na(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? cb(this, Za(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Na(this) : null != b ? this : NaN
    }

    function Pa(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Qa(a) {
        return this.utcOffset(0, a)
    }

    function Ra(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Na(this), "m")), this
    }

    function Sa() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(La(pd, this._i)), this
    }

    function Ta(a) {
        return this.isValid() ? (a = a ? Ea(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
    }

    function Ua() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Va() {
        if (!m(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (n(a, this), a = Ba(a), a._a) {
            var b = a._isUTC ? h(a._a) : Ea(a._a);
            this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Wa() {
        return this.isValid() ? !this._isUTC : !1
    }

    function Xa() {
        return this.isValid() ? this._isUTC : !1
    }

    function Ya() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function Za(a, b) {
        var c, d, e, g = a,
            h = null;
        return Ja(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Vd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: r(h[xd]) * c,
            h: r(h[yd]) * c,
            m: r(h[zd]) * c,
            s: r(h[Ad]) * c,
            ms: r(h[Bd]) * c
        }) : (h = Wd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: $a(h[2], c),
            M: $a(h[3], c),
            d: $a(h[4], c),
            h: $a(h[5], c),
            m: $a(h[6], c),
            s: $a(h[7], c),
            w: $a(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = ab(Ea(g.from), Ea(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ia(g), Ja(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function $a(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function _a(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function ab(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Ma(b, a), a.isBefore(b) ? c = _a(a, b) : (c = _a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function bb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (ga(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Za(c, d), cb(this, e, a), this
        }
    }

    function cb(b, c, d, e) {
        var f = c._milliseconds,
            g = c._days,
            h = c._months;
        b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), h && Z(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function db(a, b) {
        var c = a || Ea(),
            d = Ma(c, this).startOf("day"),
            e = this.diff(d, "days", !0),
            f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
            g = b && (D(b[f]) ? b[f]() : b[f]);
        return this.format(g || this.localeData().calendar(f, this, Ea(c)))
    }

    function eb() {
        return new o(this)
    }

    function fb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
    }

    function gb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
    }

    function hb(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function ib(a, b) {
        var c, d = p(a) ? a : Ea(a);
        return this.isValid() && d.isValid() ? (b = B(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
    }

    function jb(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function kb(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function lb(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Ma(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = B(b), "year" === b || "month" === b || "quarter" === b ? (g = mb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
    }

    function mb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function nb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ob() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function pb(b) {
        var c = M(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }

    function qb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function rb(a) {
        return this.from(Ea(), a)
    }

    function sb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function tb(a) {
        return this.to(Ea(), a)
    }

    function ub(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = z(a), null != b && (this._locale = b), this)
    }

    function vb() {
        return this._locale
    }

    function wb(a) {
        switch (a = B(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function xb(a) {
        return a = B(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function yb() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function zb() {
        return Math.floor(+this / 1e3)
    }

    function Ab() {
        return this._offset ? new Date(+this) : this._d
    }

    function Bb() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function Cb() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function Db() {
        return this.isValid() ? this.toISOString() : "null"
    }

    function Eb() {
        return k(this)
    }

    function Fb() {
        return g({}, j(this))
    }

    function Gb() {
        return j(this).overflow
    }

    function Hb() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Ib(a, b) {
        J(0, [a, a.length], 0, b)
    }

    function Jb(a) {
        return Nb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Kb(a) {
        return Nb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Lb() {
        return ra(this.year(), 1, 4)
    }

    function Mb() {
        var a = this.localeData()._week;
        return ra(this.year(), a.dow, a.doy)
    }

    function Nb(a, b, c, d, e) {
        var f;
        return null == a ? qa(this, d, e).year : (f = ra(a, d, e), b > f && (b = f), Ob.call(this, a, b, c, d, e))
    }

    function Ob(a, b, c, d, e) {
        var f = pa(a, b, c, d, e),
            g = ka(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Pb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Qb(a) {
        return qa(a, this._week.dow, this._week.doy).week
    }

    function Rb() {
        return this._week.dow
    }

    function Sb() {
        return this._week.doy
    }

    function Tb(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ub(a) {
        var b = qa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Vb(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Wb(a, b) {
        return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
    }

    function Xb(a) {
        return this._weekdaysShort[a.day()]
    }

    function Yb(a) {
        return this._weekdaysMin[a.day()]
    }

    function Zb(a, b, c) {
        var d, e, f;
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
            if (e = Ea([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function $b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Vb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function _b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function ac(a) {
        return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
    }

    function bc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function cc() {
        return this.hours() % 12 || 12
    }

    function dc(a, b) {
        J(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function ec(a, b) {
        return b._meridiemParse
    }

    function fc(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function gc(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function hc(a, b) {
        b[Bd] = r(1e3 * ("0." + a))
    }

    function ic() {
        return this._isUTC ? "UTC" : ""
    }

    function jc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function kc(a) {
        return Ea(1e3 * a)
    }

    function lc() {
        return Ea.apply(null, arguments).parseZone()
    }

    function mc(a, b, c) {
        var d = this._calendar[a];
        return D(d) ? d.call(b, c) : d
    }

    function nc(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function oc() {
        return this._invalidDate
    }

    function pc(a) {
        return this._ordinal.replace("%d", a)
    }

    function qc(a) {
        return a
    }

    function rc(a, b, c, d) {
        var e = this._relativeTime[c];
        return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function sc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return D(c) ? c(b) : c.replace(/%s/i, b)
    }

    function tc(a) {
        var b, c;
        for (c in a) b = a[c], D(b) ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function uc(a, b, c, d) {
        var e = z(),
            f = h().set(d, b);
        return e[c](f, a)
    }

    function vc(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return uc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = uc(a, f, c, e);
        return g
    }

    function wc(a, b) {
        return vc(a, b, "months", 12, "month")
    }

    function xc(a, b) {
        return vc(a, b, "monthsShort", 12, "month")
    }

    function yc(a, b) {
        return vc(a, b, "weekdays", 7, "day")
    }

    function zc(a, b) {
        return vc(a, b, "weekdaysShort", 7, "day")
    }

    function Ac(a, b) {
        return vc(a, b, "weekdaysMin", 7, "day")
    }

    function Bc() {
        var a = this._data;
        return this._milliseconds = se(this._milliseconds), this._days = se(this._days), this._months = se(this._months), a.milliseconds = se(a.milliseconds), a.seconds = se(a.seconds), a.minutes = se(a.minutes), a.hours = se(a.hours), a.months = se(a.months), a.years = se(a.years), this
    }

    function Cc(a, b, c, d) {
        var e = Za(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function Dc(a, b) {
        return Cc(this, a, b, 1)
    }

    function Ec(a, b) {
        return Cc(this, a, b, -1)
    }

    function Fc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function Gc() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Fc(Ic(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Hc(g)), h += e, g -= Fc(Ic(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function Hc(a) {
        return 4800 * a / 146097
    }

    function Ic(a) {
        return 146097 * a / 4800
    }

    function Jc(a) {
        var b, c, d = this._milliseconds;
        if (a = B(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Hc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(Ic(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function Kc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
    }

    function Lc(a) {
        return function() {
            return this.as(a)
        }
    }

    function Mc(a) {
        return a = B(a), this[a + "s"]()
    }

    function Nc(a) {
        return function() {
            return this._data[a]
        }
    }

    function Oc() {
        return q(this.days() / 7)
    }

    function Pc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !! c, a, d)
    }

    function Qc(a, b, c) {
        var d = Za(a).abs(),
            e = Ie(d.as("s")),
            f = Ie(d.as("m")),
            g = Ie(d.as("h")),
            h = Ie(d.as("d")),
            i = Ie(d.as("M")),
            j = Ie(d.as("y")),
            k = e < Je.s && ["s", e] || 1 >= f && ["m"] || f < Je.m && ["mm", f] || 1 >= g && ["h"] || g < Je.h && ["hh", g] || 1 >= h && ["d"] || h < Je.d && ["dd", h] || 1 >= i && ["M"] || i < Je.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, Pc.apply(null, k)
    }

    function Rc(a, b) {
        return void 0 === Je[a] ? !1 : void 0 === b ? Je[a] : (Je[a] = b, !0)
    }

    function Sc(a) {
        var b = this.localeData(),
            c = Qc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Tc() {
        var a, b, c, d = Ke(this._milliseconds) / 1e3,
            e = Ke(this._days),
            f = Ke(this._months);
        a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var Uc, Vc, Wc = a.momentProperties = [],
        Xc = !1,
        Yc = {}, Zc = {}, $c = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        _c = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        ad = {}, bd = {}, cd = /\d/,
        dd = /\d\d/,
        ed = /\d{3}/,
        fd = /\d{4}/,
        gd = /[+-]?\d{6}/,
        hd = /\d\d?/,
        id = /\d\d\d\d?/,
        jd = /\d\d\d\d\d\d?/,
        kd = /\d{1,3}/,
        ld = /\d{1,4}/,
        md = /[+-]?\d{1,6}/,
        nd = /\d+/,
        od = /[+-]?\d+/,
        pd = /Z|[+-]\d\d:?\d\d/gi,
        qd = /Z|[+-]\d\d(?::?\d\d)?/gi,
        rd = /[+-]?\d+(\.\d{1,3})?/,
        sd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        td = {}, ud = {}, vd = 0,
        wd = 1,
        xd = 2,
        yd = 3,
        zd = 4,
        Ad = 5,
        Bd = 6,
        Cd = 7,
        Dd = 8;
    J("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), J("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), J("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), A("month", "M"), O("M", hd), O("MM", hd, dd), O("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    }), O("MMMM", function(a, b) {
        return b.monthsRegex(a)
    }), S(["M", "MM"], function(a, b) {
        b[wd] = r(a) - 1
    }), S(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[wd] = e : j(c).invalidMonth = a
    });
    var Ed = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        Fd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Gd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Hd = sd,
        Id = sd,
        Jd = {};
    a.suppressDeprecationWarnings = !1;
    var Kd = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Ld = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Md = /Z|[+-]\d\d(?::?\d\d)?/,
        Nd = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Od = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Pd = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = fa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), J("Y", 0, 0, function() {
        var a = this.year();
        return 9999 >= a ? "" + a : "+" + a
    }), J(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), O("Y", od), O("YY", hd, dd), O("YYYY", ld, fd), O("YYYYY", md, gd), O("YYYYYY", md, gd), S(["YYYYY", "YYYYYY"], vd), S("YYYY", function(b, c) {
        c[vd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
    }), S("YY", function(b, c) {
        c[vd] = a.parseTwoDigitYear(b)
    }), S("Y", function(a, b) {
        b[vd] = parseInt(a, 10)
    }), a.parseTwoDigitYear = function(a) {
        return r(a) + (r(a) > 68 ? 1900 : 2e3)
    };
    var Qd = E("FullYear", !1);
    a.ISO_8601 = function() {};
    var Rd = fa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var a = Ea.apply(null, arguments);
        return this.isValid() && a.isValid() ? this > a ? this : a : l()
    }),
        Sd = fa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var a = Ea.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : l()
        }),
        Td = function() {
            return Date.now ? Date.now() : +new Date
        };
    Ka("Z", ":"), Ka("ZZ", ""), O("Z", qd), O("ZZ", qd), S(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0, c._tzm = La(qd, a)
    });
    var Ud = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Vd = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        Wd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Za.fn = Ia.prototype;
    var Xd = bb(1, "add"),
        Yd = bb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Zd = fa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    J(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), J(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Ib("gggg", "weekYear"), Ib("ggggg", "weekYear"), Ib("GGGG", "isoWeekYear"), Ib("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), O("G", od), O("g", od), O("GG", hd, dd), O("gg", hd, dd), O("GGGG", ld, fd), O("gggg", ld, fd), O("GGGGG", md, gd), O("ggggg", md, gd), T(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = r(a)
    }), T(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), O("Q", cd), S("Q", function(a, b) {
        b[wd] = 3 * (r(a) - 1)
    }), J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), O("w", hd), O("ww", hd, dd), O("W", hd), O("WW", hd, dd), T(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = r(a)
    });
    var $d = {
        dow: 0,
        doy: 6
    };
    J("D", ["DD", 2], "Do", "date"), A("date", "D"), O("D", hd), O("DD", hd, dd), O("Do", function(a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }), S(["D", "DD"], xd), S("Do", function(a, b) {
        b[xd] = r(a.match(hd)[0], 10)
    });
    var _d = E("Date", !0);
    J("d", 0, "do", "day"), J("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }), J("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }), J("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), O("d", hd), O("e", hd), O("E", hd), O("dd", sd), O("ddd", sd), O("dddd", sd), T(["dd", "ddd", "dddd"], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : j(c).invalidWeekday = a
    }), T(["d", "e", "E"], function(a, b, c, d) {
        b[d] = r(a)
    });
    var ae = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        ce = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), O("DDD", kd), O("DDDD", ed), S(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = r(a)
    }), J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, cc), J("hmm", 0, 0, function() {
        return "" + cc.apply(this) + I(this.minutes(), 2)
    }), J("hmmss", 0, 0, function() {
        return "" + cc.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), J("Hmm", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2)
    }), J("Hmmss", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), dc("a", !0), dc("A", !1), A("hour", "h"), O("a", ec), O("A", ec), O("H", hd), O("h", hd), O("HH", hd, dd), O("hh", hd, dd), O("hmm", id), O("hmmss", jd), O("Hmm", id), O("Hmmss", jd), S(["H", "HH"], yd), S(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), S(["h", "hh"], function(a, b, c) {
        b[yd] = r(a), j(c).bigHour = !0
    }), S("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d)), j(c).bigHour = !0
    }), S("hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d, 2)), b[Ad] = r(a.substr(e)), j(c).bigHour = !0
    }), S("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d))
    }), S("Hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d, 2)), b[Ad] = r(a.substr(e))
    });
    var de = /[ap]\.?m?\.?/i,
        ee = E("Hours", !0);
    J("m", ["mm", 2], 0, "minute"), A("minute", "m"), O("m", hd), O("mm", hd, dd), S(["m", "mm"], zd);
    var fe = E("Minutes", !1);
    J("s", ["ss", 2], 0, "second"), A("second", "s"), O("s", hd), O("ss", hd, dd), S(["s", "ss"], Ad);
    var ge = E("Seconds", !1);
    J("S", 0, 0, function() {
        return~~ (this.millisecond() / 100)
    }), J(0, ["SS", 2], 0, function() {
        return~~ (this.millisecond() / 10)
    }), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), J(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), J(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), J(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), J(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), J(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), A("millisecond", "ms"), O("S", kd, cd), O("SS", kd, dd), O("SSS", kd, ed);
    var he;
    for (he = "SSSS"; he.length <= 9; he += "S") O(he, nd);
    for (he = "S"; he.length <= 9; he += "S") S(he, hc);
    var ie = E("Milliseconds", !1);
    J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
    var je = o.prototype;
    je.add = Xd, je.calendar = db, je.clone = eb, je.diff = lb, je.endOf = xb, je.format = pb, je.from = qb, je.fromNow = rb, je.to = sb, je.toNow = tb, je.get = H, je.invalidAt = Gb, je.isAfter = fb, je.isBefore = gb, je.isBetween = hb, je.isSame = ib, je.isSameOrAfter = jb, je.isSameOrBefore = kb, je.isValid = Eb, je.lang = Zd, je.locale = ub, je.localeData = vb, je.max = Sd, je.min = Rd, je.parsingFlags = Fb, je.set = H, je.startOf = wb, je.subtract = Yd, je.toArray = Bb, je.toObject = Cb, je.toDate = Ab, je.toISOString = ob, je.toJSON = Db, je.toString = nb, je.unix = zb, je.valueOf = yb, je.creationData = Hb, je.year = Qd, je.isLeapYear = na, je.weekYear = Jb, je.isoWeekYear = Kb, je.quarter = je.quarters = Pb, je.month = $, je.daysInMonth = _, je.week = je.weeks = Tb, je.isoWeek = je.isoWeeks = Ub, je.weeksInYear = Mb, je.isoWeeksInYear = Lb, je.date = _d, je.day = je.days = $b, je.weekday = _b, je.isoWeekday = ac, je.dayOfYear = bc, je.hour = je.hours = ee, je.minute = je.minutes = fe, je.second = je.seconds = ge, je.millisecond = je.milliseconds = ie, je.utcOffset = Oa, je.utc = Qa, je.local = Ra, je.parseZone = Sa, je.hasAlignedHourOffset = Ta, je.isDST = Ua, je.isDSTShifted = Va, je.isLocal = Wa, je.isUtcOffset = Xa, je.isUtc = Ya, je.isUTC = Ya, je.zoneAbbr = ic, je.zoneName = jc, je.dates = fa("dates accessor is deprecated. Use date instead.", _d), je.months = fa("months accessor is deprecated. Use month instead", $), je.years = fa("years accessor is deprecated. Use year instead", Qd), je.zone = fa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Pa);
    var ke = je,
        le = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        }, me = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        }, ne = "Invalid date",
        oe = "%d",
        pe = /\d{1,2}/,
        qe = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        }, re = t.prototype;
    re._calendar = le, re.calendar = mc, re._longDateFormat = me, re.longDateFormat = nc, re._invalidDate = ne, re.invalidDate = oc, re._ordinal = oe, re.ordinal = pc, re._ordinalParse = pe, re.preparse = qc, re.postformat = qc, re._relativeTime = qe, re.relativeTime = rc, re.pastFuture = sc, re.set = tc, re.months = W, re._months = Fd, re.monthsShort = X, re._monthsShort = Gd, re.monthsParse = Y, re._monthsRegex = Id, re.monthsRegex = ba, re._monthsShortRegex = Hd, re.monthsShortRegex = aa, re.week = Qb, re._week = $d, re.firstDayOfYear = Sb, re.firstDayOfWeek = Rb, re.weekdays = Wb, re._weekdays = ae, re.weekdaysMin = Yb, re._weekdaysMin = ce, re.weekdaysShort = Xb, re._weekdaysShort = be, re.weekdaysParse = Zb, re.isPM = fc, re._meridiemParse = de, re.meridiem = gc, x("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = fa("moment.lang is deprecated. Use moment.locale instead.", x), a.langData = fa("moment.langData is deprecated. Use moment.localeData instead.", z);
    var se = Math.abs,
        te = Lc("ms"),
        ue = Lc("s"),
        ve = Lc("m"),
        we = Lc("h"),
        xe = Lc("d"),
        ye = Lc("w"),
        ze = Lc("M"),
        Ae = Lc("y"),
        Be = Nc("milliseconds"),
        Ce = Nc("seconds"),
        De = Nc("minutes"),
        Ee = Nc("hours"),
        Fe = Nc("days"),
        Ge = Nc("months"),
        He = Nc("years"),
        Ie = Math.round,
        Je = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, Ke = Math.abs,
        Le = Ia.prototype;
    Le.abs = Bc, Le.add = Dc, Le.subtract = Ec, Le.as = Jc, Le.asMilliseconds = te, Le.asSeconds = ue, Le.asMinutes = ve, Le.asHours = we, Le.asDays = xe, Le.asWeeks = ye, Le.asMonths = ze, Le.asYears = Ae, Le.valueOf = Kc, Le._bubble = Gc, Le.get = Mc, Le.milliseconds = Be, Le.seconds = Ce, Le.minutes = De, Le.hours = Ee, Le.days = Fe, Le.weeks = Oc, Le.months = Ge, Le.years = He, Le.humanize = Sc, Le.toISOString = Tc, Le.toString = Tc, Le.toJSON = Tc, Le.locale = ub, Le.localeData = vb, Le.toIsoString = fa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tc), Le.lang = Zd, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), O("x", od), O("X", rd), S("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), S("x", function(a, b, c) {
        c._d = new Date(r(a))
    }), a.version = "2.11.1", b(Ea), a.fn = ke, a.min = Ga, a.max = Ha, a.now = Td, a.utc = h, a.unix = kc, a.months = wc, a.isDate = d, a.locale = x, a.invalid = l, a.duration = Za, a.isMoment = p, a.weekdays = yc, a.parseZone = lc, a.localeData = z, a.isDuration = Ja, a.monthsShort = xc, a.weekdaysMin = Ac, a.defineLocale = y, a.weekdaysShort = zc, a.normalizeUnits = B, a.relativeTimeThreshold = Rc, a.prototype = ke;
    var Me = a;
    return Me
});
(function(root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('moment'));
    } else {
        factory(root.moment);
    }
}(this, function(moment) {
    "use strict";
    if (moment.tz !== undefined) {
        logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
        return moment;
    }
    var VERSION = "0.5.0",
        zones = {}, links = {}, names = {}, guesses = {}, cachedGuess, momentVersion = moment.version.split('.'),
        major = +momentVersion[0],
        minor = +momentVersion[1];
    if (major < 2 || (major === 2 && minor < 6)) {
        logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
    }

    function charCodeToInt(charCode) {
        if (charCode > 96) {
            return charCode - 87;
        } else if (charCode > 64) {
            return charCode - 29;
        }
        return charCode - 48;
    }

    function unpackBase60(string) {
        var i = 0,
            parts = string.split('.'),
            whole = parts[0],
            fractional = parts[1] || '',
            multiplier = 1,
            num, out = 0,
            sign = 1;
        if (string.charCodeAt(0) === 45) {
            i = 1;
            sign = -1;
        }
        for (i; i < whole.length; i++) {
            num = charCodeToInt(whole.charCodeAt(i));
            out = 60 * out + num;
        }
        for (i = 0; i < fractional.length; i++) {
            multiplier = multiplier / 60;
            num = charCodeToInt(fractional.charCodeAt(i));
            out += num * multiplier;
        }
        return out * sign;
    }

    function arrayToInt(array) {
        for (var i = 0; i < array.length; i++) {
            array[i] = unpackBase60(array[i]);
        }
    }

    function intToUntil(array, length) {
        for (var i = 0; i < length; i++) {
            array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000));
        }
        array[length - 1] = Infinity;
    }

    function mapIndices(source, indices) {
        var out = [],
            i;
        for (i = 0; i < indices.length; i++) {
            out[i] = source[indices[i]];
        }
        return out;
    }

    function unpack(string) {
        var data = string.split('|'),
            offsets = data[2].split(' '),
            indices = data[3].split(''),
            untils = data[4].split(' ');
        arrayToInt(offsets);
        arrayToInt(indices);
        arrayToInt(untils);
        intToUntil(untils, indices.length);
        return {
            name: data[0],
            abbrs: mapIndices(data[1].split(' '), indices),
            offsets: mapIndices(offsets, indices),
            untils: untils,
            population: data[5] | 0
        };
    }

    function Zone(packedString) {
        if (packedString) {
            this._set(unpack(packedString));
        }
    }
    Zone.prototype = {
        _set: function(unpacked) {
            this.name = unpacked.name;
            this.abbrs = unpacked.abbrs;
            this.untils = unpacked.untils;
            this.offsets = unpacked.offsets;
            this.population = unpacked.population;
        },
        _index: function(timestamp) {
            var target = +timestamp,
                untils = this.untils,
                i;
            for (i = 0; i < untils.length; i++) {
                if (target < untils[i]) {
                    return i;
                }
            }
        },
        parse: function(timestamp) {
            var target = +timestamp,
                offsets = this.offsets,
                untils = this.untils,
                max = untils.length - 1,
                offset, offsetNext, offsetPrev, i;
            for (i = 0; i < max; i++) {
                offset = offsets[i];
                offsetNext = offsets[i + 1];
                offsetPrev = offsets[i ? i - 1 : i];
                if (offset < offsetNext && tz.moveAmbiguousForward) {
                    offset = offsetNext;
                } else if (offset > offsetPrev && tz.moveInvalidForward) {
                    offset = offsetPrev;
                }
                if (target < untils[i] - (offset * 60000)) {
                    return offsets[i];
                }
            }
            return offsets[max];
        },
        abbr: function(mom) {
            return this.abbrs[this._index(mom)];
        },
        offset: function(mom) {
            return this.offsets[this._index(mom)];
        }
    };

    function OffsetAt(at) {
        var timeString = at.toTimeString();
        var abbr = timeString.match(/\(.+\)/);
        if (abbr && abbr[0]) {
            abbr = abbr[0].match(/[A-Z]/g).join('');
        } else {
            abbr = timeString.match(/[A-Z]{3,5}/g)[0];
        }
        if (abbr === 'GMT') {
            abbr = undefined;
        }
        this.at = +at;
        this.abbr = abbr;
        this.offset = at.getTimezoneOffset();
    }

    function ZoneScore(zone) {
        this.zone = zone;
        this.offsetScore = 0;
        this.abbrScore = 0;
    }
    ZoneScore.prototype.scoreOffsetAt = function(offsetAt) {
        this.offsetScore += Math.abs(this.zone.offset(offsetAt.at) - offsetAt.offset);
        if (this.zone.abbr(offsetAt.at).match(/[A-Z]/g).join('') !== offsetAt.abbr) {
            this.abbrScore++;
        }
    };

    function findChange(low, high) {
        var mid, diff;
        while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
            mid = new OffsetAt(new Date(low.at + diff));
            if (mid.offset === low.offset) {
                low = mid;
            } else {
                high = mid;
            }
        }
        return low;
    }

    function userOffsets() {
        var startYear = new Date().getFullYear() - 2,
            last = new OffsetAt(new Date(startYear, 0, 1)),
            offsets = [last],
            change, next, i;
        for (i = 1; i < 48; i++) {
            next = new OffsetAt(new Date(startYear, i, 1));
            if (next.offset !== last.offset) {
                change = findChange(last, next);
                offsets.push(change);
                offsets.push(new OffsetAt(new Date(change.at + 6e4)));
            }
            last = next;
        }
        for (i = 0; i < 4; i++) {
            offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
            offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
        }
        return offsets;
    }

    function sortZoneScores(a, b) {
        if (a.offsetScore !== b.offsetScore) {
            return a.offsetScore - b.offsetScore;
        }
        if (a.abbrScore !== b.abbrScore) {
            return a.abbrScore - b.abbrScore;
        }
        return b.zone.population - a.zone.population;
    }

    function addToGuesses(name, offsets) {
        var i, offset;
        arrayToInt(offsets);
        for (i = 0; i < offsets.length; i++) {
            offset = offsets[i];
            guesses[offset] = guesses[offset] || {};
            guesses[offset][name] = true;
        }
    }

    function guessesForUserOffsets(offsets) {
        var offsetsLength = offsets.length,
            filteredGuesses = {}, out = [],
            i, j, guessesOffset;
        for (i = 0; i < offsetsLength; i++) {
            guessesOffset = guesses[offsets[i].offset] || {};
            for (j in guessesOffset) {
                if (guessesOffset.hasOwnProperty(j)) {
                    filteredGuesses[j] = true;
                }
            }
        }
        for (i in filteredGuesses) {
            if (filteredGuesses.hasOwnProperty(i)) {
                out.push(names[i]);
            }
        }
        return out;
    }

    function rebuildGuess() {
        var offsets = userOffsets(),
            offsetsLength = offsets.length,
            guesses = guessesForUserOffsets(offsets),
            zoneScores = [],
            zoneScore, i, j;
        for (i = 0; i < guesses.length; i++) {
            zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
            for (j = 0; j < offsetsLength; j++) {
                zoneScore.scoreOffsetAt(offsets[j]);
            }
            zoneScores.push(zoneScore);
        }
        zoneScores.sort(sortZoneScores);
        return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
    }

    function guess(ignoreCache) {
        if (!cachedGuess || ignoreCache) {
            cachedGuess = rebuildGuess();
        }
        return cachedGuess;
    }

    function normalizeName(name) {
        return (name || '').toLowerCase().replace(/\//g, '_');
    }

    function addZone(packed) {
        var i, name, split, normalized;
        if (typeof packed === "string") {
            packed = [packed];
        }
        for (i = 0; i < packed.length; i++) {
            split = packed[i].split('|');
            name = split[0];
            normalized = normalizeName(name);
            zones[normalized] = packed[i];
            names[normalized] = name;
            if (split[5]) {
                addToGuesses(normalized, split[2].split(' '));
            }
        }
    }

    function getZone(name, caller) {
        name = normalizeName(name);
        var zone = zones[name];
        var link;
        if (zone instanceof Zone) {
            return zone;
        }
        if (typeof zone === 'string') {
            zone = new Zone(zone);
            zones[name] = zone;
            return zone;
        }
        if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
            zone = zones[name] = new Zone();
            zone._set(link);
            zone.name = names[name];
            return zone;
        }
        return null;
    }

    function getNames() {
        var i, out = [];
        for (i in names) {
            if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
                out.push(names[i]);
            }
        }
        return out.sort();
    }

    function addLink(aliases) {
        var i, alias, normal0, normal1;
        if (typeof aliases === "string") {
            aliases = [aliases];
        }
        for (i = 0; i < aliases.length; i++) {
            alias = aliases[i].split('|');
            normal0 = normalizeName(alias[0]);
            normal1 = normalizeName(alias[1]);
            links[normal0] = normal1;
            names[normal0] = alias[0];
            links[normal1] = normal0;
            names[normal1] = alias[1];
        }
    }

    function loadData(data) {
        addZone(data.zones);
        addLink(data.links);
        tz.dataVersion = data.version;
    }

    function zoneExists(name) {
        if (!zoneExists.didShowError) {
            zoneExists.didShowError = true;
            logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
        }
        return !!getZone(name);
    }

    function needsOffset(m) {
        return !!(m._a && (m._tzm === undefined));
    }

    function logError(message) {
        if (typeof console !== 'undefined' && typeof console.error === 'function') {
            console.error(message);
        }
    }

    function tz(input) {
        var args = Array.prototype.slice.call(arguments, 0, -1),
            name = arguments[arguments.length - 1],
            zone = getZone(name),
            out = moment.utc.apply(null, args);
        if (zone && !moment.isMoment(input) && needsOffset(out)) {
            out.add(zone.parse(out), 'minutes');
        }
        out.tz(name);
        return out;
    }
    tz.version = VERSION;
    tz.dataVersion = '';
    tz._zones = zones;
    tz._links = links;
    tz._names = names;
    tz.add = addZone;
    tz.link = addLink;
    tz.load = loadData;
    tz.zone = getZone;
    tz.zoneExists = zoneExists;
    tz.guess = guess;
    tz.names = getNames;
    tz.Zone = Zone;
    tz.unpack = unpack;
    tz.unpackBase60 = unpackBase60;
    tz.needsOffset = needsOffset;
    tz.moveInvalidForward = true;
    tz.moveAmbiguousForward = false;
    var fn = moment.fn;
    moment.tz = tz;
    moment.defaultZone = null;
    moment.updateOffset = function(mom, keepTime) {
        var zone = moment.defaultZone,
            offset;
        if (mom._z === undefined) {
            if (zone && needsOffset(mom) && !mom._isUTC) {
                mom._d = moment.utc(mom._a)._d;
                mom.utc().add(zone.parse(mom), 'minutes');
            }
            mom._z = zone;
        }
        if (mom._z) {
            offset = mom._z.offset(mom);
            if (Math.abs(offset) < 16) {
                offset = offset / 60;
            }
            if (mom.utcOffset !== undefined) {
                mom.utcOffset(-offset, keepTime);
            } else {
                mom.zone(offset, keepTime);
            }
        }
    };
    fn.tz = function(name) {
        if (name) {
            this._z = getZone(name);
            if (this._z) {
                moment.updateOffset(this);
            } else {
                logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
            }
            return this;
        }
        if (this._z) {
            return this._z.name;
        }
    };

    function abbrWrap(old) {
        return function() {
            if (this._z) {
                return this._z.abbr(this);
            }
            return old.call(this);
        };
    }

    function resetZoneWrap(old) {
        return function() {
            this._z = null;
            return old.apply(this, arguments);
        };
    }
    fn.zoneName = abbrWrap(fn.zoneName);
    fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
    fn.utc = resetZoneWrap(fn.utc);
    moment.tz.setDefault = function(name) {
        if (major < 2 || (major === 2 && minor < 9)) {
            logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
        }
        moment.defaultZone = name ? getZone(name) : null;
        return moment;
    };
    var momentProperties = moment.momentProperties;
    if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
        momentProperties.push('_z');
        momentProperties.push('_a');
    } else if (momentProperties) {
        momentProperties._z = null;
    }
    loadData({
        "version": "2015g",
        "zones": ["America/New_York|EST EDT|50 40|01010101010101010101010|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6"],
        "links": ["America/New_York|America/Toronto", "America/New_York|Canada/Eastern", ]
    });
    return moment;
}));
TGAMD = window.TGAMD || {};
TGAMD.analytics = (function($, user, DepthCharge) {
    'use strict';
    var storeKeys = {
        lastid: 'tgamd.analytics.article.lastid',
        engagement: 'tgamd.analytics.article.engagement'
    };

    function referrer(url) {
        url = typeof url != 'string' ? '' : url;
        var internal = is_internal(url);
        if (internal) {
            return {
                original: '',
                short: ''
            };
        }
        return {
            original: url,
            short: shorten(url)
        };
    }

    function is_internal(domain) {
        var internal_domains = [/theglobeandmail.com/];
        domain = shorten(domain);
        var i = 0,
            internal = false;
        for (i; i < internal_domains.length; ++i) {
            if (domain.match(internal_domains[i])) {
                internal = true;
                break;
            }
        }
        return internal;
    }

    function shorten(uri) {
        var halt = 'undefined' === typeof uri || uri.length === 0;
        if (halt) {
            return '';
        }
        var partial = uri.split('://')[1].replace('www.', '');
        if (partial.indexOf('/') !== -1) {
            partial = partial.split('/')[0];
        }
        return partial;
    }

    function getRole(asNum) {
        var roles = ['Anonymous User', 'Registered User', 'Premium User', 'Wealth User'];
        var type = user.role();
        return asNum ? type : roles[type];
    }

    function qs() {
        return location.search === '' ? '' : '?' + location.search;
    }

    function articleMeta() {
        function getTagContent(name) {
            return $('meta[name="' + name + '"]').attr('content');
        }
        return {
            id: getTagContent('article:id'),
            type: getTagContent('article:type'),
            comments: getTagContent('article:comments'),
            engagement: getTagContent('article:engagement'),
            pages: parseInt(getTagContent('article:pages'), 10),
            onpage: parseInt(getTagContent('article:onpage'), 10)
        };
    }

    function oSet(o) {
        var prop, eVar;
        if (!window.s) {
            throw new Error("window.s was not found: cannot set prop, eVar or events");
        }
        if (o.prop) {
            prop = 'prop' + o.prop;
            window.s[prop] = o.val;
        } else if (o.eVar) {
            eVar = 'eVar' + o.eVar;
            window.s[eVar] = o.val;
        } else if (o.events) {
            window.s.events = window.s.apl(window.s.events, o.events);
            if (o.val) {
                window.s.products = ';;;;' + o.events + '=' + o.val;
            }
        }
    }

    function isEngaging() {
        var meta = articleMeta();
        return (meta.engagement === 'true' && meta.comments === 'false');
    }

    function isSameArticle() {
        var id = articleMeta().id,
            lastId = localStorage.getItem(storeKeys.lastid);
        return parseInt(lastId, 10) === parseInt(id, 10);
    }

    function trackArticleEngagement() {
        var meta = articleMeta();
        var storeKey = storeKeys.engagement;
        var multipage = meta.pages > 1;
        var currentPage = meta.onpage;
        var onePagePercent = multipage ? (parseInt(100 / meta.pages, 10)) : null;
        var charge = null;
        var selector = null;
        var opts = {
            matchFirst: true
        };
        var defaultDepthSelector = '.entry-content .column-2';
        var depthSelector = {
            embeddable: '.entry-content',
            infographic: '.infographicImage',
            interactive: '#landing_layout',
            enriched: '.article-wrapper--enriched'
        };
        if (!isEngaging()) {
            setEngagementMetric();
            return;
        }

        function setEngagementMetric() {
            if (localStorage.getItem(storeKey) !== null) {
                oSet({
                    events: 'event60',
                    val: localStorage.getItem(storeKey)
                });
                localStorage.removeItem(storeKey);
            }
        }

        function depthChargeCallback(pctRead) {
            localStorage.setItem(storeKey, pctRead.replace('-', '.'));
        }
        if (!isSameArticle()) {
            localStorage.setItem(storeKeys.lastid, meta.id);
            setEngagementMetric();
        }
        if (!multipage) {
            selector = depthSelector[meta.type] ? depthSelector[meta.type] : defaultDepthSelector;
            $(document).ready(function() {
                charge = new DepthCharge(selector, opts, depthChargeCallback);
            });
        } else {
            localStorage.setItem(storeKey, currentPage * onePagePercent);
        }
    }
    return {
        referrer: referrer,
        qs: qs,
        oSet: oSet,
        user: {
            role: getRole,
            is: user.is
        },
        bootstrap: function() {
            if (window.location.protocol === 'https:') {
                return;
            }
            trackArticleEngagement();
        }
    };
})(jQuery, TGAMD.user, TGAMD.DepthCharge || {});
$g.namespace('globe.gigya.comments');
globe.gigya.comments.articleInfo = function(categoryID, secType, streamId) {
    var request = [];
    var params = {
        categoryID: categoryID,
        streamID: streamId
    };
    if ($(".widget_stories").length > 0 && secType == 'sec') {
        $(".sm-comments").each(function() {
            var artId = (this.id).split("_")[0];
            request.push(artId.replace('ArticleID', ''));
        });
        $.extend(params, {
            streamIDs: request,
            callback: globe.gigya.comments.secCount
        });
    }
    if ($(".article__comments-count").length > 0 && secType == 'art') {
        var articleId = $(".article__comments-count").eq(0).attr('href').split("/comments")[0].split('/article')[1];
        $.extend(params, {
            callback: globe.gigya.comments.artCount
        });
    }
    $(document).ready(function() {
        if ((secType == 'sec' && params.streamIDs.length > 0) || (secType == 'art')) {
            gigya.comments.getStreamInfo(params);
        }
    });
};
globe.gigya.comments.secCount = function(responses) {
    if (responses.errorCode == "0") {
        var streamIDs = responses.streamInfo;
        for (var res = 0, l = streamIDs.length; res < l; res++) {
            var artId = streamIDs[res].streamID;
            var numberOfComments = streamIDs[res].commentCount;
            $(".sm-comments[id^='ArticleID" + artId + "']").each(function() {
                var articleSpanID = (this.id);
                var articleInfoType = articleSpanID.split("_")[1];
                if (articleInfoType == "comment") {
                    $("#" + articleSpanID + " .cbub").html(numberOfComments);
                }
            });
        }
    }
};
globe.gigya.comments.artCount = function(responses) {
    if (responses.errorCode == "0") {
        var numberOfComments = responses.streamInfo.commentCount;
        var count = numberOfComments != '1' ? numberOfComments + ' Comments' : numberOfComments + ' Comment';
        $(".article__comments-count").html(count);
    }
};
var tgu = {
    "name": 'tgam_gigya_user',
    "val": util.getStoredValue('tgam_gigya_user')
};
globe.gigya.comments.removeIgnore = function(uid) {
    var tguVal = util.getStoredIndex(tgu.name, 1, '|');
    if ((tguVal == "na") || (tguVal.indexOf(uid) < 0)) {} else {
        var uids = tguVal.split('~');
        var newUserIds = [];
        for (var i = 0; i < uids.length; i++) {
            if (uids[i] != uid) {
                newUserIds.push(uids[i]);
            }
        }
        tguVal = (newUserIds.length > 0) ? newUserIds.join('~') : 'na';
        util.storeIndexValue(tgu.name, 1, tguVal, '|', 360);
    }
};
globe.gigya.comments.addIgnore = function(uid) {
    var tguVal = util.getStoredIndex(tgu.name, 1, '|');
    if (tguVal == "na") {
        util.storeIndexValue(tgu.name, 1, uid, '|', 360);
    } else {
        if (tguVal.indexOf(uid) != -1) {} else {
            util.storeIndexValue(tgu.name, 1, tguVal + '~' + uid, '|', 360);
        }
    }
};
globe.gigya.comments.loadConfirmForm = function(formType) {
    var $formTypes = {
        'ignore': [{
            title: 'Ignore User',
            body: 'To hide all comments from this user, click the Ignore User button below.',
            buttonLabel: 'Ignore User',
            option: formType,
            buttonMargin: '0'
        }],
        'flag': [{
            title: 'Report Comment',
            body: 'Do you want to report this comment to a moderator?',
            buttonLabel: 'Report Comment',
            option: formType,
            buttonMargin: '0'
        }],
        'delete': [{
            title: 'Delete Comment',
            body: 'Do you want to delete this comment?',
            buttonLabel: 'Delete Comment',
            option: formType,
            buttonMargin: '0'
        }]
    };
    var _html = '';
    _html += "<div id='confirmForm' class='tooltip'><button class='cancel closeModal closeModal2' type='button'></button>" + "<h2>" + $formTypes[formType][0].title + "</h2><div id='popup_template' style='border-width:0; margin-left:0'>" + "<div class='toolBody'>" + $formTypes[formType][0].body + "</div>" + "<div class='toolFooter'><button type='button' class='cancel btn btn_light' data='cancel' >Cancel</button>" + "<button type='button' class='confirm btn btn_light' data='" + $formTypes[formType][0].option + "Confirm' >" + $formTypes[formType][0].buttonLabel + "</button></div></div></div>";
    return _html;
};
globe.gigya.comments.loadAbuseForm = function(inputs) {
    var options = [{
        v: 'Obscenity/Vulgarity',
        n: 'Obscenity/Vulgarity'
    }, {
        v: 'Hate Speech',
        n: 'Hate Speech'
    }, {
        v: 'Personal Attack',
        n: 'Personal Attack'
    }, {
        v: 'Advertising',
        n: 'Advertising'
    }, {
        v: 'Copyright/Plagiarism',
        n: 'Copyright/Plagiarism'
    }, {
        v: 'Other',
        n: 'Other'
    }];
    var renderOptions = function() {
        var optionsList = '';
        for (var i = 0, l = options.length; i < l; i++) {
            optionsList += '<option value="' + options[i].v + '">' + options[i].n + '</option>';
        }
        return optionsList;
    };
    var renderInputs = function() {
        var inputList = '';
        for (var i = 0, l = inputs.length; i < l; i++) {
            var ds = inputs[i].id == undefined ? '' : 'id=' + inputs[i].id + '';
            inputList += "<input type='hidden' " + ds + " value=\"" + inputs[i].v + "\" name='" + inputs[i].n + "' >";
        }
        return inputList;
    };
    var _html = '';
    _html += "<div id='reportForm' class='tooltip abuse_report' >" + "<button type='button' class='cancel closeModal closeModal2'  ></button>" + "<h2>Report User</h2>" + "<form method='post' name='reportAbuseForm' id='reportAbuseForm' action='http://v1.theglobeandmail.com/cgi-bin/form.cgi'>" + renderInputs() + "<label for='subjectDropDown'>Type:</label>" + "<select id='subjectDropDown' name='Subject' >" + renderOptions() + "</select>" + "<label for='txtDetails'>Comment: (optional)</label>" + "<textarea rows='5' cols='35' id='txtDetails'></textarea>" + "<div class='toolFooter'><button type='submit' class='btn btn_light' >Send</button>" + "<button type='button' class='cancel btn btn_light' >Cancel</button></div>" + "</form>" + "</div>";
    return _html;
};
globe.gigya.comments.showConfirmSuccessForm = function(formType) {
    var $formTypes = {
        'user': [{
            id: "reportAbuseForm",
            html: "<div class='toolBody'>This user has been reported to a moderator for review. </div><div class='toolFooter'><button type='button' style='float:right;' class='cancel btn btn_light' >Close</button></div>"
        }],
        'flag': [{
            id: "popup_template",
            html: "<div id='popup_template' style='border-width:0; margin-left:0'>" + "<div class='toolBody'>This userâ€™s comment has been reported to a moderator for review. </div><div class='toolFooter'><button type='button' style='float:right;' class='cancel btn btn_light' >Close</button></div></div>"
        }],
        'ignore': [{
            id: "popup_template",
            html: "<div id='popup_template' style='border-width:0; margin-left:0'>" + "<div class='toolBody'>This user has been marked as an Ignored User.</div><div class='toolFooter'><button type='button' style='float:right;' class='cancel btn btn_light' >Close</button></div></div>"
        }],
        'delete': [{
            id: "popup_template",
            html: "<div id='popup_template' style='border-width:0; margin-left:0'>" + "<div class='toolBody'>This comment has been deleted successfully.</div><div class='toolFooter'><button type='button' style='float:right;' class='cancel btn btn_light' >Close</button></div></div>"
        }]
    };
    $('#' + $formTypes[formType][0].id).remove();
    return $formTypes[formType][0].html;
};
globe.gigya.comments.getSortSelectForm = function(options, title, selection, formClassName) {
    var tpl = '<form class="' + formClassName + '"">' + title + ':<select>';
    for (var i = 0, l = options.length; i < l; i++) {
        var s = selection === options[i].v ? ' selected' : '';
        tpl += '<option value="' + options[i].v + '"' + s + '>' + options[i].n + '</option>';
    }
    tpl += '</select></form>';
    return tpl;
};
var $g_user = {
    loginUrl: $g_conf.securePubUrl + '/login/',
    registerUrl: $g_conf.securePubUrl + '/register/',
    isLoggedIn: ($g.getCookie('SSO_COOKIE') && $g.getCookie('hd')) ? true : false,
    logout: function() {
        if ($('#drawerOverlay').length < 1) {
            return true;
        }
        $.ajax({
            url: $g_conf.publicationUrl + 'template/ajax/user/logout.jsp',
            type: 'POST',
            dataType: 'json',
            data: '',
            cache: false,
            error: function() {
                $g_user.drawerOverlay("You couldn\'t be logged out at this time. Please refresh the page and try again");
            },
            success: function(json) {
                if (json.success == 'true') {
                    $g_user.renderMastLinks();
                    $g_user.drawerOverlay("You've been logged out! See you next time!");
                }
            }
        });
        return false;
    },
    getProfileName: function() {
        try {
            var pn = $g.getCookie('hd').split('|')[1];
            if ((pn.length > 8) && (typeof currentVideo === 'undefined')) {
                pn = pn.substring(0, 8) + '\u2026';
            }
            return pn;
        } catch (e) {
            return 'Profile';
        }
    },
    drawerOverlay: function(msg) {
        $('#drawerStatus').css({
            'width': '0px',
            'background-color': 'transparent'
        });
        $('#drawerOverlay h2').text(msg);
        $('#drawerOverlay').slideDown(400);
        setTimeout(function() {
            $('#drawerOverlay').slideUp(400);
        }, 2900);
        $('#drawerStatus').animate({
            width: '100%',
            backgroundColor: '#DA161F'
        }, 2900);
    },
    logError: function(msg) {
        $('#userlogin-form .usrmerrors').hide().html('<li><p>' + msg + '</p></li>').fadeIn();
        $('#userlogin-form .usrmerrors li p').animate({
            backgroundPosition: "(0 -170px)"
        }, 500);
    },
    renderMastOptions: function(options) {
        $('#util_user_account a').attr('href', options.accountUrl).attr('rel', options.accountRel).text(options.accountText).attr('target', '_top');
        $('#util_user_action a').attr('href', options.manageUrl).attr('rel', options.manageRel).text(options.manageText).attr('target', '_top');
    },
    renderMastLinks: function() {
        var options;
        if ($g_user.isLoggedIn) {
            options = {
                accountText: $g_user.getProfileName(),
                accountUrl: $g_conf.publicationUrl + 'community/',
                accountRel: '',
                manageText: 'Logout',
                manageUrl: $g_conf.securePubUrl + '/logout/',
                manageRel: 'logout'
            };
            $g_user.renderMastOptions(options);
            $(document).ready(function() {
                if (!$("body").hasClass("mywatchlist") && !$("body").hasClass("newwatchlist")) {
                    $('.globalutil a[rel="logout"]').click(function() {
                        return $g_user.logout();
                    });
                }
            });
        } else {
            options = {
                accountText: 'Login',
                accountUrl: $g_user.loginUrl,
                accountRel: 'login',
                manageText: 'Register',
                manageUrl: $g_user.registerUrl,
                manageRel: ''
            };
            if (window.top.frames.length > 0) {
                try {
                    if (window.top.frames[0].adv.wireframe) {
                        options.accountUrl = options.accountUrl + '?prev=' + encodeURIComponent(window.top.location.href);
                        options.manageUrl = options.manageUrl + '?prev=' + encodeURIComponent(window.top.location.href);
                    }
                } catch (e) {}
            }
            $g_user.renderMastOptions(options);
            $('.globalutil .manage a').unbind('click');
        }
    }
};
var validate = {
    defaultErrors: {
        fieldRequired: 'This field is required',
        fieldAlphaNum: 'This field should contain only letters, numbers and underscores',
        fieldAlpha: 'This field should only contain letters',
        fieldMinChars: function(len) {
            return 'This field should be at least ' + len.toString() + ' characters long';
        },
        fieldAlphaNumWithSpaces: 'This field should contain only letters, numbers, underscores and spaces',
        fieldProperName: 'This field should contain only letters, apostrophes and dashes',
        fieldValidEmailAddress: 'Please enter a valid email address'
    },
    isAlphaNumeric: function(val) {
        var re = /^\w+$/;
        return re.test(val);
    },
    hasLetterAndNumber: function(val) {
        var re = /[A-z].*\d|\d.*[A-z]/;
        return re.test(val);
    },
    isAlphaOnly: function(val) {
        var re = /^[a-zA-Z]+$/;
        return re.test(val);
    },
    isNotEmpty: function(val) {
        return val != "";
    },
    checkMinLength: function(val, min) {
        return val.length >= parseInt(min);
    },
    checkMaxLength: function(val, max) {
        return val.length <= parseInt(max);
    },
    hasLowerUpper: function(val) {
        var re = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        return re.test(val);
    },
    hasRepeating: function(val) {
        var re = /^.*([A-z0-9])\1{2,}.*$/;
        return !re.test(val);
    },
    emailAddress: function(val) {
        var re = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
        return re.test(val);
    },
    isProperName: function(val) {
        var re = /^[a-zA-Z_'\s-]+$/;
        return re.test(val);
    },
    isProperPhone: function(val) {
        var re = /^(\(?\d{3}(\)? ?|-?|\.?)){2}\d{4}/;
        return re.test(val);
    },
    matchFields: function(val1, val2) {
        if (val1 != val2) {
            return false;
        } else {
            return true;
        }
    },
    isCanadianPostalCode: function(val) {
        var CA_CODE = /^[ABCEGHJKLMNPRSTVXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/i;
        return CA_CODE.test(val);
    },
    isAmericanPostalCode: function(val) {
        var US_CODE = /^[0-9]{5}(?:-[0-9]{4})?$/;
        return US_CODE.test(val);
    },
    isBritishPostalCode: function(val) {
        var GB_CODE = /^([A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][ABD-HJLNP-UW-Z]{2})*$/i;
        return GB_CODE.test(val);
    }
};
var TGAMD = window.TGAMD || {};
TGAMD.pencilAd = (function(window, $, g_conf, user) {
    var defaults = {
        advSponsorship: true,
        advRemovePencil: false,
        advStopPencil: false,
        advPencil: false,
        adMarkup: ''
    }, adType = null,
        settings = null,
        pencil = null,
        $banner = null,
        $page = null;

    function getHTML(type) {
        var html = {
            'replace': "<a href='" + settings.url + "' id='topSubscribeBanner'><img src='" + settings.img + "'></a>",
            'sponsor': "<div id='topSubscribeBanner' class='banner_grey'>" + settings.adMarkup + "</div>",
            'remove': null,
            'none': ["<div id='topSubscribeBanner' class='banner_grey'>", "<div class='banner_container'>", "<div><span class='main_message'>" + settings.txt + "</span></div>", "<div><span class='onespritetorulethemall-devices'></span></div>", "<div><span class='second_message'>And get unlimited access on all your devices</span></div>", "<div><a href='" + settings.url + "' class='button_yellow' target='_parent'>" + settings.buttonTxt + "</a></div>", "</div></div></div>"].join("")
        };
        return html[type];
    }

    function getAdType() {
        if (settings.advRemovePencil) {
            return 'remove';
        }
        if (settings.replaceAsset) {
            return 'replace';
        }
        if (settings.advPencil || settings.advStopPencil || !settings.advSponsorship) {
            return 'none';
        }
        window.aPs = 'grpl';
        settings.adMarkup = window.fnTkt('a' + 'ai', 1000, 45, window.ai, 'i', window.nc);
        return 'sponsor';
    }

    function goToUrl() {
        window.location.href = settings.url;
    }

    function waypoint() {
        if (typeof $.waypoints == 'undefined') return;
        $.waypoints.settings.scrollThrottle = 30;
        $banner.waypoint(function(evt, dir) {
            $page.toggleClass('sticky', dir === 'down');
        });
    }

    function init(cfg) {
        if (user.is.premium) {
            return;
        }
        settings = $.extend(defaults, cfg);
        adType = getAdType();
        pencil = getHTML(adType);
        if (pencil === null) {
            return;
        }
        $('#tertiary_nav').after(pencil);
        $banner = $('#topSubscribeBanner');
        $page = $('#page');
        if (settings.persist) {
            waypoint();
        }
        if (adType === 'none') {
            $banner.on('click', goToUrl);
        }
    }
    return {
        init: init
    };
})(window, jQuery, $g_conf, TGAMD.user);
var TGAMD = window.TGAMD || {};
TGAMD.prerollAd = (function(window, $, util) {
    var settings = {
        adMarkup: '',
        advPreroll: false,
        adExpiry: {
            '5m': ((0.0208333333 / 3) / 2),
            '10m': 0.0208333333 / 3,
            '15m': 0.0208333333 / 2,
            '30m': 0.0208333333,
            '1d': 1,
            '0': 0
        }
    };

    function close() {
        var $preroll = $('#adPreVideo,.modal-backdrop'),
            endEvt;
        $preroll.addClass('out');
        endEvt = util.getTransitonEnd();
        $("#adPreVideo").on(endEvt, $preroll.remove());
        if (settings.adExpiry[settings.freq] != 0) {
            if ((util.getCookie(settings.wId) == undefined)) {
                util.deleteCookie(settings.wId);
                util.setCookie(settings.wId, true, settings.adExpiry[settings.freq]);
            }
        }
    }

    function write(advAd) {
        var params = {
            adServerURL: advAd,
            bgcolor: '#ffffff',
            width: settings.width,
            height: settings.height,
            playerID: settings.playerID,
            playerKey: settings.playerKey,
            isVid: 'true',
            isUI: 'true',
            autoStart: 'true',
            includeAPI: 'true',
            htmlFallback: 'true',
            templateLoadHandler: 'myTemplateLoaded',
            dynamicStreaming: 'true',
            videoPlayer: settings.videoPlayer
        }, list = '';
        for (var k in params) {
            var p = (k == 'videoPlayer') ? '@' : '';
            list += "<param name='" + p + k + "' value='" + params[k] + "' />";
        }
        return ["<div class='modal modal_imgspotlight adPreroll in' id='adPreVideo'>", "<div class='modal-body'><object id='myExperience' class='BrightcoveExperience'>" + list + "</object></div>", "</div>"].join("");
    }

    function init(cfg) {
        $.extend(settings, cfg);
        if (settings.advPreroll) {
            if (((util.getCookie(settings.wId) == undefined)) || settings.freq == 0) {
                settings.adMarkup = window.fnTkt('a' + 'ai', 576, 324, ai, 'bca', nc);
                var activePlayer = write(settings.adMarkup),
                    $nav = $('#tertiary_nav');
                $nav.after(activePlayer);
                $('.modal').appendTo($('body'));
                $('#adPreVideo').modal({
                    backdrop: 'static'
                }).show('shown');
            }
        }
    }
    return {
        init: init,
        close: close
    }
}(window, jQuery, util));
! function() {
    function a(a, h) {
        a = a || "", h = h || {};
        for (var i in b) b.hasOwnProperty(i) && (h.autoFix && (h["fix_" + i] = !0), h.fix = h.fix || h["fix_" + i]);
        var j = [],
            k = function(b) {
                a += b
            }, l = function(b) {
                a = b + a
            }, m = {
                comment: /^<!--/,
                endTag: /^<\//,
                atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s>]/i,
                startTag: /^</,
                chars: /^[^<]/
            }, n = {
                comment: function() {
                    var b = a.indexOf("-->");
                    return b >= 0 ? {
                        content: a.substr(4, b),
                        length: b + 3
                    } : void 0
                },
                endTag: function() {
                    var b = a.match(d);
                    return b ? {
                        tagName: b[1],
                        length: b[0].length
                    } : void 0
                },
                atomicTag: function() {
                    var b = n.startTag();
                    if (b) {
                        var c = a.slice(b.length);
                        if (c.match(new RegExp("</\\s*" + b.tagName + "\\s*>", "i"))) {
                            var d = c.match(new RegExp("([\\s\\S]*?)</\\s*" + b.tagName + "\\s*>", "i"));
                            if (d) return {
                                tagName: b.tagName,
                                attrs: b.attrs,
                                content: d[1],
                                length: d[0].length + b.length
                            }
                        }
                    }
                },
                startTag: function() {
                    var b = a.match(c);
                    if (b) {
                        var d = {};
                        return b[2].replace(e, function(a, b) {
                            var c = arguments[2] || arguments[3] || arguments[4] || f.test(b) && b || null;
                            d[b] = c
                        }), {
                            tagName: b[1],
                            attrs: d,
                            unary: !! b[3],
                            length: b[0].length
                        }
                    }
                },
                chars: function() {
                    var b = a.indexOf("<");
                    return {
                        length: b >= 0 ? b : a.length
                    }
                }
            }, o = function() {
                for (var b in m)
                    if (m[b].test(a)) {
                        g && console.log("suspected " + b);
                        var c = n[b]();
                        return c ? (g && console.log("parsed " + b, c), c.type = c.type || b, c.text = a.substr(0, c.length), a = a.slice(c.length), c) : null
                    }
            }, p = function(a) {
                for (var b; b = o();)
                    if (a[b.type] && a[b.type](b) === !1) return
            }, q = function() {
                var b = a;
                return a = "", b
            }, r = function() {
                return a
            };
        return h.fix && ! function() {
            var b = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                c = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                d = [];
            d.last = function() {
                return this[this.length - 1]
            }, d.lastTagNameEq = function(a) {
                var b = this.last();
                return b && b.tagName && b.tagName.toUpperCase() === a.toUpperCase()
            }, d.containsTagName = function(a) {
                for (var b, c = 0; b = this[c]; c++)
                    if (b.tagName === a) return !0;
                return !1
            };
            var e = function(a) {
                return a && "startTag" === a.type && (a.unary = b.test(a.tagName) || a.unary), a
            }, f = o,
                g = function() {
                    var b = a,
                        c = e(f());
                    return a = b, c
                }, i = function() {
                    var a = d.pop();
                    l("</" + a.tagName + ">")
                }, j = {
                    startTag: function(a) {
                        var b = a.tagName;
                        "TR" === b.toUpperCase() && d.lastTagNameEq("TABLE") ? (l("<TBODY>"), m()) : h.fix_selfClose && c.test(b) && d.containsTagName(b) ? d.lastTagNameEq(b) ? i() : (l("</" + a.tagName + ">"), m()) : a.unary || d.push(a)
                    },
                    endTag: function(a) {
                        var b = d.last();
                        b ? h.fix_tagSoup && !d.lastTagNameEq(a.tagName) ? i() : d.pop() : h.fix_tagSoup && k()
                    }
                }, k = function() {
                    f(), m()
                }, m = function() {
                    var a = g();
                    a && j[a.type] && j[a.type](a)
                };
            o = function() {
                return m(), e(f())
            }
        }(), {
            append: k,
            readToken: o,
            readTokens: p,
            clear: q,
            rest: r,
            stack: j
        }
    }
    var b = function() {
        var a, b = {}, c = this.document.createElement("div");
        return a = "<P><I></P></I>", c.innerHTML = a, b.tagSoup = c.innerHTML !== a, c.innerHTML = "<P><i><P></P></i></P>", b.selfClose = 2 === c.childNodes.length, b
    }(),
        c = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
        d = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
        e = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
        f = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
        g = !1;
    a.supports = b, a.tokenToString = function(a) {
        var b = {
            comment: function(a) {
                return "<--" + a.content + "-->"
            },
            endTag: function(a) {
                return "</" + a.tagName + ">"
            },
            atomicTag: function(a) {
                return console.log(a), b.startTag(a) + a.content + b.endTag(a)
            },
            startTag: function(a) {
                var b = "<" + a.tagName;
                for (var c in a.attrs) {
                    var d = a.attrs[c];
                    b += " " + c + '="' + (d ? d.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"'
                }
                return b + (a.unary ? "/>" : ">")
            },
            chars: function(a) {
                return a.text
            }
        };
        return b[a.type](a)
    }, a.escapeAttributes = function(a) {
        var b = {};
        for (var c in a) {
            var d = a[c];
            b[c] = d && d.replace(/(^|[^\\])"/g, '$1\\"')
        }
        return b
    };
    for (var h in b) a.browserHasFlaw = a.browserHasFlaw || !b[h] && h;
    this.htmlParser = a
}(),
function() {
    function a() {}

    function b(a) {
        return "function" == typeof a
    }

    function c(a, b, c) {
        var d, e = a && a.length || 0;
        for (d = 0; e > d; d++) b.call(c, a[d], d)
    }

    function d(a, b, c) {
        var d;
        for (d in a) a.hasOwnProperty(d) && b.call(c, d, a[d])
    }

    function e(a, b) {
        return d(b, function(b, c) {
            a[b] = c
        }), a
    }

    function f(a, b) {
        return a = a || {}, d(b, function(b, c) {
            null == a[b] && (a[b] = c)
        }), a
    }

    function g(a) {
        try {
            return k.call(a)
        } catch (b) {
            var d = [];
            return c(a, function(a) {
                d.push(a)
            }), d
        }
    }

    function h(a) {
        return /^script$/i.test(a.tagName)
    }
    var i = this;
    if (!i.postscribe) {
        var j = !1,
            k = Array.prototype.slice,
            l = function() {
                function a(a, b, c) {
                    var d = k + b;
                    if (2 === arguments.length) {
                        var e = a.getAttribute(d);
                        return null == e ? e : String(e)
                    }
                    null != c && "" !== c ? a.setAttribute(d, c) : a.removeAttribute(d)
                }

                function f(b, c) {
                    var d = b.ownerDocument;
                    e(this, {
                        root: b,
                        options: c,
                        win: d.defaultView || d.parentWindow,
                        doc: d,
                        parser: i.htmlParser("", {
                            autoFix: !0
                        }),
                        actuals: [b],
                        proxyHistory: "",
                        proxyRoot: d.createElement(b.nodeName),
                        scriptStack: [],
                        writeQueue: []
                    }), a(this.proxyRoot, "proxyof", 0)
                }
                var k = "data-ps-";
                return f.prototype.write = function() {
                    [].push.apply(this.writeQueue, arguments);
                    for (var a; !this.deferredRemote && this.writeQueue.length;) a = this.writeQueue.shift(), b(a) ? this.callFunction(a) : this.writeImpl(a)
                }, f.prototype.callFunction = function(a) {
                    var b = {
                        type: "function",
                        value: a.name || a.toString()
                    };
                    this.onScriptStart(b), a.call(this.win, this.doc), this.onScriptDone(b)
                }, f.prototype.writeImpl = function(a) {
                    this.parser.append(a);
                    for (var b, c = [];
                        (b = this.parser.readToken()) && !h(b);) c.push(b);
                    this.writeStaticTokens(c), b && this.handleScriptToken(b)
                }, f.prototype.writeStaticTokens = function(a) {
                    var b = this.buildChunk(a);
                    if (b.actual) return b.html = this.proxyHistory + b.actual, this.proxyHistory += b.proxy, this.proxyRoot.innerHTML = b.html, j && (b.proxyInnerHTML = this.proxyRoot.innerHTML), this.walkChunk(), j && (b.actualInnerHTML = this.root.innerHTML), b
                }, f.prototype.buildChunk = function(a) {
                    var b = this.actuals.length,
                        d = [],
                        e = [],
                        f = [];
                    return c(a, function(a) {
                        if (d.push(a.text), a.attrs) {
                            if (!/^noscript$/i.test(a.tagName)) {
                                var c = b++;
                                e.push(a.text.replace(/(\/?>)/, " " + k + "id=" + c + " $1")), "ps-script" !== a.attrs.id && f.push("atomicTag" === a.type ? "" : "<" + a.tagName + " " + k + "proxyof=" + c + (a.unary ? " />" : ">"))
                            }
                        } else e.push(a.text), f.push("endTag" === a.type ? a.text : "")
                    }), {
                        tokens: a,
                        raw: d.join(""),
                        actual: e.join(""),
                        proxy: f.join("")
                    }
                }, f.prototype.walkChunk = function() {
                    for (var b, c = [this.proxyRoot]; null != (b = c.shift());) {
                        var d = 1 === b.nodeType,
                            e = d && a(b, "proxyof");
                        if (!e) {
                            d && (this.actuals[a(b, "id")] = b, a(b, "id", null));
                            var f = b.parentNode && a(b.parentNode, "proxyof");
                            f && this.actuals[f].appendChild(b)
                        }
                        c.unshift.apply(c, g(b.childNodes))
                    }
                }, f.prototype.handleScriptToken = function(a) {
                    var b = this.parser.clear();
                    b && this.writeQueue.unshift(b), a.src = a.attrs.src || a.attrs.SRC, a.src && this.scriptStack.length ? this.deferredRemote = a : this.onScriptStart(a);
                    var c = this;
                    this.writeScriptToken(a, function() {
                        c.onScriptDone(a)
                    })
                }, f.prototype.onScriptStart = function(a) {
                    a.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(a)
                }, f.prototype.onScriptDone = function(a) {
                    return a !== this.scriptStack[0] ? void this.options.error({
                        message: "Bad script nesting or script finished twice"
                    }) : (this.scriptStack.shift(), this.write.apply(this, a.outerWrites), void(!this.scriptStack.length && this.deferredRemote && (this.onScriptStart(this.deferredRemote), this.deferredRemote = null)))
                }, f.prototype.writeScriptToken = function(a, b) {
                    var c = this.buildScript(a),
                        d = this.shouldRelease(c),
                        e = this.options.afterAsync;
                    a.src && (c.src = a.src, this.scriptLoadHandler(c, d ? e : function() {
                        b(), e()
                    }));
                    try {
                        this.insertScript(c), (!a.src || d) && b()
                    } catch (f) {
                        this.options.error(f), b()
                    }
                }, f.prototype.buildScript = function(a) {
                    var b = this.doc.createElement(a.tagName);
                    return d(a.attrs, function(a, c) {
                        b.setAttribute(a, c)
                    }), a.content && (b.text = a.content), b
                }, f.prototype.insertScript = function(a) {
                    this.writeImpl('<span id="ps-script"/>');
                    var b = this.doc.getElementById("ps-script");
                    b.parentNode.replaceChild(a, b)
                }, f.prototype.scriptLoadHandler = function(a, b) {
                    function c() {
                        a = a.onload = a.onreadystatechange = a.onerror = null, b()
                    }
                    var d = this.options.error;
                    e(a, {
                        onload: function() {
                            c()
                        },
                        onreadystatechange: function() {
                            /^(loaded|complete)$/.test(a.readyState) && c()
                        },
                        onerror: function() {
                            d({
                                message: "remote script failed " + a.src
                            }), c()
                        }
                    })
                }, f.prototype.shouldRelease = function(a) {
                    var b = /^script$/i.test(a.nodeName);
                    return !b || !! (this.options.releaseAsync && a.src && a.hasAttribute("async"))
                }, f
            }(),
            m = function() {
                function c() {
                    var a = k.shift();
                    a && (a.stream = d.apply(null, a))
                }

                function d(b, d, f) {
                    function i(a) {
                        a = f.beforeWrite(a), m.write(a), f.afterWrite(a)
                    }
                    m = new l(b, f), m.id = j++, m.name = f.name || m.id, h.streams[m.name] = m;
                    var k = b.ownerDocument,
                        n = {
                            write: k.write,
                            writeln: k.writeln
                        };
                    e(k, {
                        write: function() {
                            return i(g(arguments).join(""))
                        },
                        writeln: function() {
                            return i(g(arguments).join("") + "\n")
                        }
                    });
                    var o = m.win.onerror || a;
                    return m.win.onerror = function(a, b, c) {
                        f.error({
                            msg: a + " - " + b + ":" + c
                        }), o.apply(m.win, arguments)
                    }, m.write(d, function() {
                        e(k, n), m.win.onerror = o, f.done(), m = null, c()
                    }), m
                }

                function h(d, e, g) {
                    b(g) && (g = {
                        done: g
                    }), g = f(g, {
                        releaseAsync: !1,
                        afterAsync: a,
                        done: a,
                        error: function(a) {
                            throw a
                        },
                        beforeWrite: function(a) {
                            return a
                        },
                        afterWrite: a
                    }), d = /^#/.test(d) ? i.document.getElementById(d.substr(1)) : d.jquery ? d[0] : d;
                    var h = [d, e, g];
                    return d.postscribe = {
                        cancel: function() {
                            h.stream ? h.stream.abort() : h[1] = a
                        }
                    }, k.push(h), m || c(), d.postscribe
                }
                var j = 0,
                    k = [],
                    m = null;
                return e(h, {
                    streams: {},
                    queue: k,
                    WriteStream: l
                })
            }();
        i.postscribe = m
    }
}();
TGAMD = window.TGAMD || {};
TGAMD.loginModal = (function(doc, win, $) {
    var loginModalHTML = ''+
    '<div id="loginModal">'+
        '<div class="loginBg"></div>'+
        '<div class="loginWrapper">'+
            '<div class="closeModal btn-close"></div>'+
            '<h1 class="h1--login">Log in</h1>'+
            '<div class="login__noaccount">Don&rsquo;t have an account? <a href="' + CPC_URL + '/register" class="login__link">Create one here.</a></div>'+
            '<div class="login__notLinked">'+
                '<div>We did not find an account associated with the account below:</div>'+
                '<div class="login__notLinked__profile">'+
                    '<span class="icon"></span>'+
                    '<img src="" class="login__notLinked__thumbnail">'+
                    '<span class="login__notLinked__profile__name"> </span>'+
                    '<span class="login__notLinked__profile__email"> </span>'+
                '</div>'+
                '<div class="loginForm__errorMessage"></div>'+
                '<div class="login__notLinked__actionButtons clearfix">'+
                    '<button class="actionbutton createNewAccount">Create new account</button>'+
                    '<button class="actionbutton cancelCreate">Cancel</button>'+
                '</div>'+
            '</div>'+
            '<div class="login__socialaccount">'+
                '<div class="login__socialaccount__heading">With your social account</div>'+
                '<div class="login__socialaccount__links" id="loginDiv">'+
                    '<div class="loginFacebook" data-social="facebook">'+
                        '<span class="icon gmicon-facebook"></span>'+
                    '</div>'+
                    '<div class="loginGoogle" data-social="googleplus"><span class="icon gmicon-googleplus"></span></div>'+
                    '<div class="loginLinkedin" data-social="linkedin"><span class="icon gmicon-linkedin"></span></div>'+
                '</div>'+
            '</div>'+
            '<div class="login__withemail">OR with your email and password</div>'+
                '<form name="loginForm" class="loginForm" action="">'+
                    '<div class="loginForm__row">'+
                        '<div class="iconOverlay">'+
                            '<input type="email" name="email" id="email" class="loginForm__inputText" placeholder="Your email address">'+
                            '<span class="icon gmicon-user"></span>'+
                        '</div>'+
                    '</div>'+
                '<div class="loginForm__row">'+
                    '<div class="iconOverlay">'+
                        '<input type="password" name="password" id="password" class="loginForm__inputPassword" placeholder="Your password">'+
                        '<span class="icon gmicon-lock"></span>'+
                        '<span class="loginForm__showHidePassword">Show</span>'+
                    '</div>'+
                '</div>'+
                '<div class="loginForm__row rememberMeDiv">'+
                    '<input type="checkbox" checked="checked" id="rememberMe" class="interests__checkbox" value="true">'+
                    '<label for="rememberMe" class="interests__label">'+
                        '<div class="interests__label__fakeCheck"><span></span></div>'+
                        'Keep me logged in'+
                    '</label>'+
                '</div>'+
                '<div class="loginForm__errorMessage"></div>'+
                '<div class="loginForm__row">'+
                    '<button type="submit" class="loginFormButton" id="loginSubmitButton"></button>'+
                '</div>'+
            '</form>'+
            '<div class="login__trouble"><a href="' + CPC_URL + '/recover" class="login__link">Trouble logging in?</a></div>'+
        '</div>'+
    '</div>';
    var CPC_URL = $g_conf.securePubUrl + '/account/#!';
    var LOGIN_URL = $g_conf.securePubUrl + '/login/';
    var REGISTER_URL = $g_conf.securePubUrl + '/register/';
    var config = {
        elem_loginButton: '#util_user_account',
        elem_loginButton__html: '<span id="loginButton">Login</span>',
        elem_loginButton__html_loggedin: '<a href="' + CPC_URL + '/" id="profileButton"></a>',
        elem_registerButton: '#util_user_action',
        elem_registerButton__html: '<a href="' + CPC_URL + '/register" id="registerButton">Register</a>',
        elem_registerButton__html_loggedin: '<a href="' + CPC_URL + '/logout" id="registerButton">Logout</a>',
        elem_loginModal: '#loginModal',
        elem_loginModal__html: loginModalHTML,
        API_URL: 'https://' + $g_conf.servicesHost + '/usermanagement/api/'
    };
    var cpt = 0;

    function showLogin() {
        s.pageName = 'login:section';
        try {
            var s_code = s.t();
            if (s_code) document.write(s_code);
        } catch (e) {}
        if (!$("html").is(".ie9, .ltie9")) {
            $('#loginModal').addClass('displayed');
            $('#email').focus();
            $('.closeModal, #loginModal>div:not(.loginWrapper)').on('click', closeLogin);
            $(".loginForm__showHidePassword").bind('click', togglePassword);
            $("#loginDiv>div").on('click', function() {
                socialLogin($(this).data("social"));
            })
            if (cpt === 0) {
                $(".loginForm").on('submit', login);
            }
            cpt++;
            

            return false;
        }
    }

    function closeLogin() {
        $('#loginModal').removeClass('displayed');
    }

    function togglePassword() {
        var field = $("#password");
        if (field.attr('type') == "text") {
            field.get(0).type = 'password';
            $(".loginForm__showHidePassword").removeClass("activated");
        } else {
            field.get(0).type = 'text';
            $(".loginForm__showHidePassword").addClass("activated");
        }
    }

    function setCookie(name, value, expires, path, domain, secure) {
        var cookieStr = name + '=' + value + '; ';
        if (expires) {
            expires = setExpiration(expires);
            cookieStr += 'expires=' + expires + '; ';
        }
        if (path) {
            cookieStr += 'path=' + path + '; ';
        }
        if (domain) {
            cookieStr += 'domain=' + domain + '; ';
        }
        if (secure) {
            cookieStr += 'secure; ';
        }
        document.cookie = cookieStr;
    }

    function setExpiration(cookieLife) {
        if (!cookieLife) {
            cookieLife = 0;
        }
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLife * 1000);
        return expr.toGMTString();
    }

    function gigyaLogin_socialLogin(response) {
        var data = {
            'uid': response.UID,
            'timestamp': response.timestamp,
            'uidSig': response.UIDSig,
            'deviceType': 'BROWSER'
        };
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: config.API_URL + 'users/v2/socialLogin',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'TGAM site=GNEWS'
            }
        }).error(function(data) {
            $(".loginForm__errorMessage").show();
            var response = JSON.parse(data.responseText);
            $(".loginForm__errorMessage").text(response.errors[0].message);
        }).success(function(data) {
            var myParam = {};
            for (var i = 0; i < data.response.sessionData.length; i++) {
                if (data.response.sessionData[i].maxAge != '-1') {
                    var expires = data.response.sessionData[i].maxAge;
                } else {
                    var expires = false;
                }
                var options = {
                    domain: data.response.sessionData[i].domain,
                    path: data.response.sessionData[i].path,
                    secure: data.response.sessionData[i].secure,
                    expires: setExpiration(expires)
                };
                setCookie(data.response.sessionData[i].name, data.response.sessionData[i].value, expires, data.response.sessionData[i].path, data.response.sessionData[i].domain, data.response.sessionData[i].secure);
                myParam[i] = [data.response.sessionData[i].name, options];
            }
            window.location.replace(window.location.href + "?ord=1")
            return false;
        });
    }

    function gigyaLogin_goToStep2(response) {
        $(".login__socialaccount").hide();
        $(".loginForm").hide();
        $(".login__withemail").hide();
        $(".login__notLinked").addClass('activated');
        $(".login__notLinked__actionButtons").show();
        var provider = response.user.providers[0];
        $(".login__notLinked__profile .icon").addClass('gmicon-' + provider);
        $(".login__notLinked__thumbnail").attr('src', response.user.thumbnailURL);
        $(".login__notLinked__profile__name").text(response.user.nickname);
        $(".login__notLinked__profile__email").text(response.user.email);
        $(".createNewAccount").on('click', function() {
            gigyaLogin_socialLogin(response)
        })
        $(".linkAnAccount").on('click', function() {
            $(".login__notLinked__actionButtons").hide();
            $(".loginForm").show();
            $(".linkHeader").show();
            $(".login__withemail").hide();
        })
        $(".cancelCreate").on('click', function() {
            $(".login__socialaccount").show();
            $(".loginForm").show();
            $(".login__withemail").show();
            $(".login__notLinked").removeClass('activated');
            $(".linkHeader").hide();
            gigya.socialize.logout();
        })
    }

    function gigyaLogin(response) {
        if (response.status === 'OK') {
            var re = /^\d+$/;
            if (re.test(response.UID)) {
                gigyaLogin_socialLogin(response);
            } else if (response.user.UID !== '') {
                if (response.user.email !== '') {
                    $.ajax({
                        type: 'PUT',
                        dataType: "json",
                        url: config.API_URL + 'users/v2/validateUserParameter',
                        data: '{"email":"' + response.user.email + '"}',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'TGAM site=GNEWS'
                        },
                        success: function() {
                            gigyaLogin_goToStep2(response);
                        },
                        error: function(data, status, error) {
                            var data = JSON.parse(data.responseText);
                            if (data.errors && data.errors[0].code == '112') {
                                gigyaLogin_socialLogin(response);
                            } else if (data.errors && data.errors[0].code == '130') {
                                gigyaLogin_socialLogin(response);
                            } else {
                                var msg = '';
                                if (data.errors && data.errors.length > 0) {
                                    for (var err = 0; err < data.errors.length; err++) {
                                        msg += '<br>' + data.errors[err].message;
                                    }
                                }
                                gigya.socialize.logout();
                                $(".loginForm__errorMessage").show();
                                $(".loginForm__errorMessage").text(msg);
                            }
                        }
                    });
                } else {
                    gigyaLogin_goToStep2(response);
                }
            }
        } else {
            $(".loginForm__errorMessage").show();
            $(".loginForm__errorMessage").text('There is a communication problem with your social media provider. Please check your Internet connection');
        }
    }

    function socialLogin(provider) {
        if (provider == 'facebook') {
            s.linkTrackVars = 'events';
            s.linkTrackEvents = 'event69';
            s.events = 'event69';
            s.tl(true, 'o', 'Facebook Social Login Click');
        } else if (provider == 'googleplus') {
            s.linkTrackVars = 'events';
            s.linkTrackEvents = 'event70';
            s.events = 'event70';
            s.tl(true, 'o', 'Google+ Social Login Click');
        } else if (provider == 'linkedin') {
            s.linkTrackVars = 'events';
            s.linkTrackEvents = 'event71';
            s.events = 'event71';
            s.tl(true, 'o', 'LinkedIn Social Login Click');
        }
        $(".loginForm__errorMessage").hide();
        var params = {
            provider: provider,
            callback: gigyaLogin
        };
        gigya.socialize.login(params);
    }

    function login(e) {
        e.preventDefault();
        $("#loginSubmitButton").attr('disabled', 'disabled').addClass('disabled');
        $(".loginForm__errorMessage").hide();
        var rememberMe = ($('#rememberMe:checked').val()) ? "true" : "false";
        var data = {
            "email": $("#email").val(),
            "password": $("#password").val(),
            "rememberMe": rememberMe,
            "deviceType": "BROWSER"
        };
        $.ajax({
            url: config.API_URL + 'users/v2/login',
            type: 'POST',
            dataType: "json",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'TGAM site=GNEWS'
            },
            data: JSON.stringify(data),
            success: function(data) {
                s.linkTrackVars = 'events';
                s.linkTrackEvents = 'event4';
                s.events = 'event4';
                s.tl();
                s.prop2 = typeof s.getAndPersistValue === "undefined" ? "" : s.getAndPersistValue("Logged In", "s_user_login_status");
                s.eVar3 = "D=c2";
                s.prop10 = TGAMD.analytics.user.role();
                s.eVar10 = "D=c10";
                var myParam = {};
                for (var i = 0; i < data.response.sessionData.length; i++) {
                    if (data.response.sessionData[i].maxAge != '-1') {
                        var expires = data.response.sessionData[i].maxAge;
                    } else {
                        var expires = false;
                    }
                    var options = {
                        domain: data.response.sessionData[i].domain,
                        path: data.response.sessionData[i].path,
                        secure: data.response.sessionData[i].secure,
                        expires: setExpiration(expires)
                    };
                    setCookie(data.response.sessionData[i].name, data.response.sessionData[i].value, expires, data.response.sessionData[i].path, data.response.sessionData[i].domain, data.response.sessionData[i].secure);
                    myParam[i] = [data.response.sessionData[i].name, options];
                }
                window.location.replace(window.location.href + "?ord=1")
                return false;
            },
            error: function(data) {
                $("#loginSubmitButton").removeAttr('disabled').removeClass('disabled');
                var data = JSON.parse(data.responseText);
                if (data.errors[0].code == '130') {
                    util.setCookie('invalidEmail', $("#email").val(), '1', '/');
                    document.location.href = CPC_URL + '/resend';
                } else {
                    $(".loginForm__errorMessage").show();
                    $(".loginForm__errorMessage").text(data.errors[0].message);
                }
            },
            cache: false
        });
        return false;
    }

    function init_loggedOut() {
        $(function() {
            if (!$("html").is(".ie9, .ltie9")) {
                $(config.elem_registerButton).html(config.elem_registerButton__html);
                $('body').append(config.elem_loginModal__html);
                $("a[href='" + LOGIN_URL + "']").each(function() {
                    $(this).css('cursor', 'pointer').bind('click', function(e) {
                        e.preventDefault();
                        showLogin();
                    });
                });
                $("a[href='" + REGISTER_URL + "']").each(function() {
                    $(this).css('cursor', 'pointer').attr('href', CPC_URL + '/register')
                });
                $('#loginModal, .loginBg').css('height', $('html').height() + 'px');
            }
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                closeLogin();
            }
        });
    }

    function init_loggedIn() {
        $(function() {
            if (!$("html").is(".ie9, .ltie9")) {
                var userName = $g_user.getProfileName();
                $(config.elem_loginButton).html(config.elem_loginButton__html_loggedin);
                $(config.elem_registerButton).html(config.elem_registerButton__html_loggedin);
                $("#profileButton").html(userName);
            }
        });
    }
    if ($g.getCookie('SSO_COOKIE') != null) {
        init_loggedIn();
    } else {
        init_loggedOut();
    }
    return {
        config: config,
        open: showLogin,
        close: closeLogin
    }
})(document, window, jQuery);
TGAMD = window.TGAMD || {};

TGAMD.toggleInert = function(target, enable) {
    
}

TGAMD.firstpartydata = (function(doc, win, $) {
    var CPC_URL = $g_conf.securePubUrl + '/account/#!';
    var LOGIN_URL = $g_conf.securePubUrl + '/login/';
    var REGISTER_URL = $g_conf.securePubUrl + '/register/';
    var API_URL = 'https://' + $g_conf.servicesHost + '/usermanagement/api/';
    var config = {
        insertAfter: '#attic',
        title: 'We\'d like to get to know you better.',
        content_beforeForm: 'this is the text <strong>BEFORE</strong>',
        dataArray: [{
            'label': 'Industry:',
            'data': 'INDUSTRY'
        }, {
            'label': 'Birth year:',
            'data': 'BIRTH_YEAR'
        }, {
            'label': 'Position:',
            'data': 'POSITION'
        }, {
            'label': 'Income range:',
            'data': 'INCOME_RANGE'
        }, {
            'label': 'Gender:',
            'data': 'GENDER'
        }],
        content_afterForm: 'this is the text <strong>after</strong>',
        errorMessage: 'Please choose at least one value before submitting the form.',
        attributes: {
            BIRTH_YEAR: [{
                "valueCode": "2002",
                "description": 2002
            }, {
                "valueCode": "2001",
                "description": 2001
            }, {
                "valueCode": "2000",
                "description": 2000
            }, {
                "valueCode": "1999",
                "description": 1999
            }, {
                "valueCode": "1998",
                "description": 1998
            }, {
                "valueCode": "1997",
                "description": 1997
            }, {
                "valueCode": "1996",
                "description": 1996
            }, {
                "valueCode": "1995",
                "description": 1995
            }, {
                "valueCode": "1994",
                "description": 1994
            }, {
                "valueCode": "1993",
                "description": 1993
            }, {
                "valueCode": "1992",
                "description": 1992
            }, {
                "valueCode": "1991",
                "description": 1991
            }, {
                "valueCode": "1990",
                "description": 1990
            }, {
                "valueCode": "1989",
                "description": 1989
            }, {
                "valueCode": "1988",
                "description": 1988
            }, {
                "valueCode": "1987",
                "description": 1987
            }, {
                "valueCode": "1986",
                "description": 1986
            }, {
                "valueCode": "1985",
                "description": 1985
            }, {
                "valueCode": "1984",
                "description": 1984
            }, {
                "valueCode": "1983",
                "description": 1983
            }, {
                "valueCode": "1982",
                "description": 1982
            }, {
                "valueCode": "1981",
                "description": 1981
            }, {
                "valueCode": "1980",
                "description": 1980
            }, {
                "valueCode": "1979",
                "description": 1979
            }, {
                "valueCode": "1978",
                "description": 1978
            }, {
                "valueCode": "1977",
                "description": 1977
            }, {
                "valueCode": "1976",
                "description": 1976
            }, {
                "valueCode": "1975",
                "description": 1975
            }, {
                "valueCode": "1974",
                "description": 1974
            }, {
                "valueCode": "1973",
                "description": 1973
            }, {
                "valueCode": "1972",
                "description": 1972
            }, {
                "valueCode": "1971",
                "description": 1971
            }, {
                "valueCode": "1970",
                "description": 1970
            }, {
                "valueCode": "1969",
                "description": 1969
            }, {
                "valueCode": "1968",
                "description": 1968
            }, {
                "valueCode": "1967",
                "description": 1967
            }, {
                "valueCode": "1966",
                "description": 1966
            }, {
                "valueCode": "1965",
                "description": 1965
            }, {
                "valueCode": "1964",
                "description": 1964
            }, {
                "valueCode": "1963",
                "description": 1963
            }, {
                "valueCode": "1962",
                "description": 1962
            }, {
                "valueCode": "1961",
                "description": 1961
            }, {
                "valueCode": "1960",
                "description": 1960
            }, {
                "valueCode": "1959",
                "description": 1959
            }, {
                "valueCode": "1958",
                "description": 1958
            }, {
                "valueCode": "1957",
                "description": 1957
            }, {
                "valueCode": "1956",
                "description": 1956
            }, {
                "valueCode": "1955",
                "description": 1955
            }, {
                "valueCode": "1954",
                "description": 1954
            }, {
                "valueCode": "1953",
                "description": 1953
            }, {
                "valueCode": "1952",
                "description": 1952
            }, {
                "valueCode": "1951",
                "description": 1951
            }, {
                "valueCode": "1950",
                "description": 1950
            }, {
                "valueCode": "1949",
                "description": 1949
            }, {
                "valueCode": "1948",
                "description": 1948
            }, {
                "valueCode": "1947",
                "description": 1947
            }, {
                "valueCode": "1946",
                "description": 1946
            }, {
                "valueCode": "1945",
                "description": 1945
            }, {
                "valueCode": "1944",
                "description": 1944
            }, {
                "valueCode": "1943",
                "description": 1943
            }, {
                "valueCode": "1942",
                "description": 1942
            }, {
                "valueCode": "1941",
                "description": 1941
            }, {
                "valueCode": "1940",
                "description": 1940
            }, {
                "valueCode": "1939",
                "description": 1939
            }, {
                "valueCode": "1938",
                "description": 1938
            }, {
                "valueCode": "1937",
                "description": 1937
            }, {
                "valueCode": "1936",
                "description": 1936
            }, {
                "valueCode": "1935",
                "description": 1935
            }, {
                "valueCode": "1934",
                "description": 1934
            }, {
                "valueCode": "1933",
                "description": 1933
            }, {
                "valueCode": "1932",
                "description": 1932
            }, {
                "valueCode": "1931",
                "description": 1931
            }, {
                "valueCode": "1930",
                "description": 1930
            }, {
                "valueCode": "1929",
                "description": 1929
            }, {
                "valueCode": "1928",
                "description": 1928
            }, {
                "valueCode": "1927",
                "description": 1927
            }, {
                "valueCode": "1926",
                "description": 1926
            }, {
                "valueCode": "1925",
                "description": 1925
            }, {
                "valueCode": "1924",
                "description": 1924
            }, {
                "valueCode": "1923",
                "description": 1923
            }, {
                "valueCode": "1922",
                "description": 1922
            }, {
                "valueCode": "1921",
                "description": 1921
            }, {
                "valueCode": "1920",
                "description": 1920
            }, {
                "valueCode": "1919",
                "description": 1919
            }, {
                "valueCode": "1918",
                "description": 1918
            }, {
                "valueCode": "1917",
                "description": 1917
            }, {
                "valueCode": "1916",
                "description": 1916
            }, {
                "valueCode": "1915",
                "description": 1915
            }, {
                "valueCode": "1914",
                "description": 1914
            }, {
                "valueCode": "1913",
                "description": 1913
            }, {
                "valueCode": "1912",
                "description": 1912
            }, {
                "valueCode": "1911",
                "description": 1911
            }, {
                "valueCode": "1910",
                "description": 1910
            }, {
                "valueCode": "1909",
                "description": 1909
            }, {
                "valueCode": "1908",
                "description": 1908
            }, {
                "valueCode": "1907",
                "description": 1907
            }, {
                "valueCode": "1906",
                "description": 1906
            }, {
                "valueCode": "1905",
                "description": 1905
            }, {
                "valueCode": "1904",
                "description": 1904
            }, {
                "valueCode": "1903",
                "description": 1903
            }, {
                "valueCode": "1902",
                "description": 1902
            }, {
                "valueCode": "1901",
                "description": 1901
            }],
            INDUSTRY: [{
                "name": "Accounting",
                "domainId": 108,
                "sortOrder": 1,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 42,
                "valueCode": "ACCT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Accounting"
            }, {
                "name": "Advertising/Media",
                "domainId": 108,
                "sortOrder": 2,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 43,
                "valueCode": "ADVERT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Advertising/Media"
            }, {
                "name": "Agriculture/Food/Beverage/Fishing",
                "domainId": 108,
                "sortOrder": 3,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 44,
                "valueCode": "FOOD",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Agriculture/Food/Beverage/Fishing"
            }, {
                "name": "Banking/Finance",
                "domainId": 108,
                "sortOrder": 4,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 45,
                "valueCode": "BANK",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Banking/Finance"
            }, {
                "name": "Communication",
                "domainId": 108,
                "sortOrder": 5,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 46,
                "valueCode": "COMMUNICATE",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Communication"
            }, {
                "name": "Construction",
                "domainId": 108,
                "sortOrder": 6,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 47,
                "valueCode": "CONSTRUCT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Construction"
            }, {
                "name": "Education",
                "domainId": 108,
                "sortOrder": 7,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 48,
                "valueCode": "EDUCAT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Education"
            }, {
                "name": "Engineering/ Research/Development",
                "domainId": 108,
                "sortOrder": 8,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 49,
                "valueCode": "ENGINEER",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Engineering/ Research/Development"
            }, {
                "name": "Health/Welfare",
                "domainId": 108,
                "sortOrder": 9,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 50,
                "valueCode": "HEALTH",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Health/Welfare"
            }, {
                "name": "Importing/Exporting",
                "domainId": 108,
                "sortOrder": 10,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 51,
                "valueCode": "IMPORT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Importing/Exporting"
            }, {
                "name": "Information Systems",
                "domainId": 108,
                "sortOrder": 11,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 52,
                "valueCode": "INFOSYS",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Information Systems"
            }, {
                "name": "Insurance",
                "domainId": 108,
                "sortOrder": 12,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 53,
                "valueCode": "INSURE",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Insurance"
            }, {
                "name": "Law",
                "domainId": 108,
                "sortOrder": 13,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 54,
                "valueCode": "LAW",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Law"
            }, {
                "name": "Management Consulting",
                "domainId": 108,
                "sortOrder": 14,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 55,
                "valueCode": "MGMT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Management Consulting"
            }, {
                "name": "Manufacturing",
                "domainId": 108,
                "sortOrder": 15,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 56,
                "valueCode": "MANUFACT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Manufacturing"
            }, {
                "name": "Market Research",
                "domainId": 108,
                "sortOrder": 16,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 57,
                "valueCode": "MARKET",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Market Research"
            }, {
                "name": "Mining/Forestry",
                "domainId": 108,
                "sortOrder": 17,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 58,
                "valueCode": "MINING",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Mining/Forestry"
            }, {
                "name": "Oil/Gas",
                "domainId": 108,
                "sortOrder": 18,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 59,
                "valueCode": "OIL",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Oil/Gas"
            }, {
                "name": "Public Utilities",
                "domainId": 108,
                "sortOrder": 19,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 60,
                "valueCode": "UTIL",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Public Utilities"
            }, {
                "name": "Real Estate",
                "domainId": 108,
                "sortOrder": 20,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 61,
                "valueCode": "REALEST",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Real Estate"
            }, {
                "name": "Retail Trade",
                "domainId": 108,
                "sortOrder": 21,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 62,
                "valueCode": "RETAIL",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Retail Trade"
            }, {
                "name": "Transportation",
                "domainId": 108,
                "sortOrder": 22,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 63,
                "valueCode": "TRANSPORT",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Transportation"
            }, {
                "name": "Wholesale Trade",
                "domainId": 108,
                "sortOrder": 23,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 64,
                "valueCode": "WHOLESALE",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Wholesale Trade"
            }, {
                "name": "Other",
                "domainId": 108,
                "sortOrder": 99,
                "attributeCode": "INDUSTRY",
                "attributeId": 62,
                "valueId": 65,
                "valueCode": "OTHER",
                "domainCode": "INDUSTRY",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Other"
            }],
            POSITION: [{
                "name": "Analyst",
                "domainId": 3,
                "sortOrder": 1,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 158,
                "valueCode": "ANALYST",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Analyst"
            }, {
                "name": "Associate",
                "domainId": 3,
                "sortOrder": 2,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 159,
                "valueCode": "ASSOCIATE",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Associate"
            }, {
                "name": "CEO/president/Chairman",
                "domainId": 3,
                "sortOrder": 3,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 160,
                "valueCode": "CEO_PRESIDENT_CHAIRMAN",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "CEO/president/Chairman"
            }, {
                "name": "Consultant",
                "domainId": 3,
                "sortOrder": 4,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 161,
                "valueCode": "CONSULTANT",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Consultant"
            }, {
                "name": "Director",
                "domainId": 3,
                "sortOrder": 5,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 162,
                "valueCode": "DIRECTOR",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Director"
            }, {
                "name": "Exec Management (VP/EVP/MD)",
                "domainId": 3,
                "sortOrder": 6,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 163,
                "valueCode": "EXEC_MANAGEMENT",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Exec Management (VP/EVP/MD)"
            }, {
                "name": "Manager/supervisor",
                "domainId": 3,
                "sortOrder": 7,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 164,
                "valueCode": "MANAGER_SUPERVISOR",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Manager/supervisor"
            }, {
                "name": "Other C Level (CFO, COO/CIO/CMO)",
                "domainId": 3,
                "sortOrder": 8,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 165,
                "valueCode": "OTHER_C_LEVEL",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Other C Level (CFO, COO/CIO/CMO)"
            }, {
                "name": "Owner/Partner/Proprietor",
                "domainId": 3,
                "sortOrder": 9,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 166,
                "valueCode": "OWNER_PARTNER_PROPRIETOR",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Owner/Partner/Proprietor"
            }, {
                "name": "Professional",
                "domainId": 3,
                "sortOrder": 10,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 167,
                "valueCode": "PROFESSIONAL",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Professional"
            }, {
                "name": "Program/Project Manager",
                "domainId": 3,
                "sortOrder": 11,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 168,
                "valueCode": "PROGRAM_PROJECT_MANAGER",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Program/Project Manager"
            }, {
                "name": "Secretary/Treasurer",
                "domainId": 3,
                "sortOrder": 12,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 169,
                "valueCode": "SECRETARY_TREASURER",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Secretary/Treasurer"
            }, {
                "name": "Senior Manager/Dept Head",
                "domainId": 3,
                "sortOrder": 13,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 170,
                "valueCode": "SENIOR_MANAGER_DEPT_HEAD",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Senior Manager/Dept Head"
            }, {
                "name": "Technical/Business Specialist",
                "domainId": 3,
                "sortOrder": 14,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 171,
                "valueCode": "TECHNICAL_BUSINESS_SPECIALIST",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Technical/Business Specialist"
            }, {
                "name": "Retired",
                "domainId": 3,
                "sortOrder": 15,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 173,
                "valueCode": "RETIRED",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Retired"
            }, {
                "name": "Other",
                "domainId": 3,
                "sortOrder": 16,
                "attributeCode": "POSITION",
                "attributeId": 71,
                "valueId": 174,
                "valueCode": "OTHER",
                "domainCode": "POSITION",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Other"
            }],
            GENDER: [{
                "name": "Female",
                "domainId": 101,
                "sortOrder": 1,
                "attributeCode": "GENDER",
                "attributeId": 7,
                "valueId": 4,
                "valueCode": "F",
                "domainCode": "GENDER",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Female"
            }, {
                "name": "Male",
                "domainId": 101,
                "sortOrder": 2,
                "attributeCode": "GENDER",
                "attributeId": 7,
                "valueId": 5,
                "valueCode": "M",
                "domainCode": "GENDER",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Male"
            }, {
                "name": "Rather not Say",
                "domainId": 101,
                "sortOrder": 3,
                "attributeCode": "GENDER",
                "attributeId": 7,
                "valueId": 172,
                "valueCode": "O",
                "domainCode": "GENDER",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Rather not Say"
            }],
            INCOME_RANGE: [{
                "name": "Under $59,999",
                "domainId": 109,
                "sortOrder": 1,
                "attributeCode": "INCOME_RANGE",
                "attributeId": 63,
                "valueId": 66,
                "valueCode": "UNDER_59000",
                "domainCode": "INCOME_RANGE",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "Under $59,999"
            }, {
                "name": "$60,000 to $74,999",
                "domainId": 109,
                "sortOrder": 2,
                "attributeCode": "INCOME_RANGE",
                "attributeId": 63,
                "valueId": 67,
                "valueCode": "60000_74999",
                "domainCode": "INCOME_RANGE",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "$60,000 to $74,999"
            }, {
                "name": "$75,000 to $99,999",
                "domainId": 109,
                "sortOrder": 3,
                "attributeCode": "INCOME_RANGE",
                "attributeId": 63,
                "valueId": 68,
                "valueCode": "75000_99999",
                "domainCode": "INCOME_RANGE",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "$75,000 to $99,999"
            }, {
                "name": "$100,000 to $149,999",
                "domainId": 109,
                "sortOrder": 4,
                "attributeCode": "INCOME_RANGE",
                "attributeId": 63,
                "valueId": 69,
                "valueCode": "100000_149999",
                "domainCode": "INCOME_RANGE",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "$100,000 to $149,999"
            }, {
                "name": "$150,000 to $249,999",
                "domainId": 109,
                "sortOrder": 5,
                "attributeCode": "INCOME_RANGE",
                "attributeId": 63,
                "valueId": 70,
                "valueCode": "150000_249999",
                "domainCode": "INCOME_RANGE",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "$150,000 to $249,999"
            }, {
                "name": "$250,000 and over",
                "domainId": 109,
                "sortOrder": 6,
                "attributeCode": "INCOME_RANGE",
                "attributeId": 63,
                "valueId": 71,
                "valueCode": "OVER_250000",
                "domainCode": "INCOME_RANGE",
                "dataType": "CHAR",
                "required": false,
                "allowMultipleSelect": false,
                "enteredValueField": false,
                "allowModifiedByUser": true,
                "description": "$250,000 and over"
            }]
        },
        onSubmit: function() {
            hideBlock();
        }
    };

    function populateForm() {
        if (localStorage.getItem('user')) {
            var userProfile = JSON.parse(localStorage.getItem('user'));
            $.each(userProfile.attributes, function(key, val) {
                if (config.attributes[key]) {
                    $('#' + key + ' option[value="' + val + '"]').prop('selected', true);
                }
            })
        }
    }

    function showBlock() {
        hideBlock();
        var firstpartydata_form = '<form id="firstpartydata_form">';
        $.each(config.dataArray, function(index, val) {
            firstpartydata_form += '<div>' + val.label + ' <select name="' + val.data + '" id="' + val.data + '"><option value="">-- Select --</option>';
            $.each(config.attributes[val.data], function(subkey, subval) {
                firstpartydata_form += '<option value="' + subval.valueCode + '">' + subval.description + '</option>';
            })
            firstpartydata_form += '</select></div>'
        });
        firstpartydata_form += '<div class="firstpartydata_submit"><button class="btn btn_light">Send</button><span class="firstpartydata_errorMessage"></span>'
        firstpartydata_form += '</div></form>';
        var contentHtml = '<div id="firstpartydata"><div id="firstpartydata_wrapper">' + '<h2>' + config.title + '</h2>';
        if (config.content_beforeForm != '') {
            contentHtml += '<div id="content_beforeForm">' + config.content_beforeForm + '</div>';
        }
        contentHtml += '<div id="content_form">' + firstpartydata_form + '</div>';
        if (config.content_afterForm != '') {
            contentHtml += '<div id="content_afterForm">' + config.content_afterForm + '</div>';
        }
        contentHtml += '</div></div>';
        $(config.insertAfter).after(contentHtml);
        if (!localStorage.getItem('user')) {
            $.ajax({
                url: API_URL + 'users/v2/user',
                type: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'TGAM site=GNEWS gamsso=' + $g.getCookie('SSO_COOKIE')
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    return false;
                },
                success: function(json) {
                    localStorage.setItem("user", JSON.stringify(json.response));
                    populateForm();
                }
            })
        } else {
            populateForm();
        }
        $('#firstpartydata_form').submit(function(event) {
            event.preventDefault();
            ensightenLayer.FPDError = false;
            ensightenLayer.FPDAnswers = [];
            $('.firstpartydata_errorMessage').hide();
            var uzr = JSON.parse(localStorage.getItem('user'));
            var clean = 0;
            $.each(config.dataArray, function(index, val) {
                if ($('#' + val.data + ' option:selected').val() === '') {
                    $('.firstpartydata_errorMessage').show().html(config.errorMessage);
                    clean++;
                } else {
                    ensightenLayer.FPDAnswers.push(val.label);
                }
                uzr.attributes[val.data] = $('#' + val.data + ' option:selected').val();
            })
            if (config.dataArray.length > clean) {
                $.ajax({
                    url: API_URL + 'users/v2/user',
                    type: 'PUT',
                    dataType: 'json',
                    data: JSON.stringify(uzr),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'TGAM site=GNEWS gamsso=' + $g.getCookie('SSO_COOKIE')
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        var data = JSON.parse(XMLHttpRequest.responseText);
                        if (data.errors[0]) {
                            $('.firstpartydata_errorMessage').show().html(data.errors[0].message);
                        }
                        ensightenLayer.FPDError = true;
                    },
                    success: function(json) {
                        localStorage.setItem("user", JSON.stringify(uzr));
                        config.onSubmit();
                    }
                });
            }
            Bootstrapper.ensEvent.trigger("FPD_submit");
            return false;
        })
    }

    function hideBlock() {
        $("#firstpartydata_wrapper").remove();
    }
    if ($g.getCookie('SSO_COOKIE') != null) {
        return {
            config: config,
            show: showBlock,
            hide: hideBlock
        }
    } else {
        return false;
    }
})(document, window, jQuery)
TGAMD = window.TGAMD || {};
TGAMD.regwall = (function(doc, win, $) {
    var CPC_URL = $g_conf.securePubUrl + '/account/#!';
    var LOGIN_URL = $g_conf.securePubUrl + '/login/';
    var REGISTER_URL = $g_conf.securePubUrl + '/register/';
    var config = {
        title: 'Log in to read this article.',
        content_beforeForm: 'With a free Globe account you get access to 10 articles a month, access to editorial newsletters, and personalized story recommendations.',
        buttons: [{
            'backgroundColor': 'rgb(63,181,131)',
            'color': '#fff',
            'description': 'Log In',
            'url': 'javascript:TGAMD.loginModal.open()'
        }, {
            'backgroundColor': 'rgb(51,51,51)',
            'color': '#fff',
            'description': 'Create a free account',
            'url': REGISTER_URL
        }],
        content_afterForm: '<hr>Want more than 10 articles a month? <a href="">Suscribe to Globe Unlimited</a> and get full access to Globeandmail.com.'
    };

    function showRegwall() {
        hideRegwall();
        var contentHtml = '<div id="regwall"><div id="regwall_wrapper">' + '<h2>' + config.title + '</h2>';
        if (config.content_beforeForm != '') {
            contentHtml += '<div id="content_beforeForm">' + config.content_beforeForm + '</div>';
        }
        contentHtml += '<div class="content_buttons">';
        $.each(config.buttons, function(index, val) {
            contentHtml += '<a href="' + val.url + '" target="_top" class="regwall_button" style="background-color:' + val.backgroundColor + ';color:' + val.color + '">' + val.description + '</a>';
        });
        contentHtml += '</div>';
        if (config.content_afterForm != '') {
            contentHtml += '<div id="content_afterForm">' + config.content_afterForm + '</div>';
        }
        contentHtml += '</div></div>';
        $('.x140x460').css({
            'position': 'relative'
        });
        $('.x140x460 *').css({
            'opacity': '0.4'
        });
        $('.x140x460').eq(0).append(contentHtml);
    }

    function hideRegwall() {
        $('.x140x460 *').css({
            'opacity': '1'
        });
        $("#regwall").remove();
    }
    if ($g.getCookie('SSO_COOKIE') == null) {
        return {
            config: config,
            show: showRegwall,
            hide: hideRegwall
        }
    } else {
        return false;
    }
})(document, window, jQuery)
TGAMD = window.TGAMD || {};
TGAMD.registerModal = (function(doc, win, $) {
    var config = {
        elem_registerModal: '#registerModal',
        elem_registerModal__html: '<div id="registerModal"> <div class="registerBg"></div> <div class="registerWrapper"> <div class="closeRegisterModal btn-close"></div> <div id="preRegister"> <h1 class="h1--register">Register for a <span>Free Account</span></h1> <div class="register__noaccount">Already have an account? <span onclick="TGAMD.loginModal.open(); TGAMD.registerModal.close();" class="loginHere__link">Log in here.</span> </div> <div class="register__notLinked"> <div>We did not find an account associated with the account below:</div> <div class="register__notLinked__profile"> <span class="icon"></span> <img src="" class="register__notLinked__thumbnail"> <span class="register__notLinked__profile__name"> </span> <span class="register__notLinked__profile__email"> </span> </div> <div class="registerForm__errorMessage"></div> <div class="register__notLinked__actionButtons clearfix"> <button class="actionbutton createNewAccount">Create new account</button> <button class="actionbutton cancelCreate">Cancel</button> </div> </div> <div class="register__socialaccount"> <div class="registerWith">With your social account</div> <div class="register__socialaccount__links" id="registerDiv"> <div class="registerFacebook" data-social="facebook"> <span class="icon gmicon-facebook"></span> </div> <div class="registerGoogle" data-social="googleplus"> <span class="icon gmicon-googleplus"></span> </div> <div class="registerLinkedin" data-social="linkedin"> <span class="icon gmicon-linkedin"></span> </div> </div> </div> <div class="registerWith">Or with your email</div> </div> <form name="registerForm" class="registerForm" id="registerForm"> <div id="registerStep1"> <div class="inputRow_icon" id="emailRow-icon"></div> <input type="email" name="email" id="registerForm_email" class="registerForm__inputText" placeholder="Email address"> <div class="registerForm__error" id="registerForm__error_email"></div> <div class="inputRow_icon" id="passwordRow-icon"></div> <input type="password" name="password" id="registerForm_password" class="registerForm__inputPassword" placeholder="Password"> <span class="registerForm__showHidePassword">Show</span> <br style="clear:left;"/> <div class="registerForm__error" id="registerForm__error_password"></div> <div class="registerForm_row"> <div class="registerForm_leftCol"> <input type="text" name="firstName" id="registerForm_firstName" class="registerForm__inputText" placeholder="First name"> <div class="registerForm__error" id="registerForm__error_firstName"></div> </div> <div class="registerForm_rightCol"> <input type="text" name="lastName" id="registerForm_lastName" class="registerForm__inputText" placeholder="Last name"> <div class="registerForm__error" id="registerForm__error_lastName"></div> </div> </div> <div class="inputRow_icon" id="displayNameRow-icon"></div> <input type="text" name="displayName" id="registerForm_displayName" class="registerForm__inputText" placeholder="Display name"> <div class="registerForm__error" id="registerForm__error_displayName"></div> <div class="registerForm_row"> <div class="registerForm_leftCol"> <div id="registerForm_countryList"></div> <div class="registerForm__error" id="registerForm__error_country"></div> </div> <div class="registerForm_rightCol"> <input type="text" name="postalCode" id="registerForm_postalCode" class="registerForm__inputText" placeholder="Postal/zip code"> <div class="registerForm__error" id="registerForm__error_postalCode"></div> </div> </div> <div class="registerForm__errorMessage"></div> <div id="registerSubmitButton"></div> <p class="regModalLegal">We need this Account Information to register you. We use your email to create your account, tell you important things about your account, or notify you of special Globe promotions. You can edit this information in our <a href="\https://sec.theglobeandmail.com/account/#!/login\" target="_blank">Customer Preference Centre</a>. You will be given a mechanism to unsubscribe from any non-essential email from us. Your email address will not be given to third parties for their commercial use.</p> <p class="regModalLegal">By creating an account, you will be subject to our <a href="http://www.theglobeandmail.com/help/terms-and-conditions/" target="_blank">Terms and Conditions</a>. See also our <a href="http://www.theglobeandmail.com/help/privacy-policy/" target="_blank">Privacy Policy</a> and <a href="http://www.theglobeandmail.com/help/" target="_blank">FAQs</a>.</p> </div> <div id="registerStep2"> <h1 class="h1--register">Supplementary Information</h1> <div class="optionalInfoCaption">To improve your experience, please provide the following optional information. </div> <div class="inputRow_icon" id="birthYearRow-icon"></div> <div id="registerForm_birthYearList"></div> <div class="registerForm__error" id="registerForm__error_birthYear"></div> <div class="inputRow_icon" id="industryRow-icon"></div> <div id="registerForm_industryList"></div> <div class="registerForm__error" id="registerForm__error_industry"></div> <div class="inputRow_icon" id="positionRow-icon"></div> <div id="registerForm_positionList"></div> <div class="registerForm__error" id="registerForm__error_position"></div> <div class="inputRow_icon" id="incomeRow-icon"></div> <div id="registerForm_incomeList"></div> <div class="registerForm__error" id="registerForm__error_income"></div> <div class="inputRow_icon" id="genderRow-icon"></div> <div id="registerForm_genderList"></div> <div class="registerForm__error" id="registerForm__error_gender"></div> <div class="registerForm__errorMessage"></div> <button id="fpdSubmitButton"></button> <p class="regModalLegal">By completing this optional information you give The Globe consent to display advertising, content recommendations and communications from The Globe based on supplementary information you provide.</p> <p class="regModalLegal">By creating an account, you will be subject to our <a href="http://www.theglobeandmail.com/help/terms-and-conditions/" target="_blank">Terms and Conditions</a>. See also our <a href="http://www.theglobeandmail.com/help/privacy-policy/" target="_blank">Privacy Policy</a> and <a href="http://www.theglobeandmail.com/help/" target="_blank">FAQs</a>.</p> </div> </form> </div> </div>',
        elem_confirmEmailModal: '#confirmEmailModal',
        elem_confirmEmailModal__html: '<div id="confirmEmailModal"> <div class="confirmEmailBg"></div> <div class="confirmEmailWrapper"> <div class="closeConfirmEmail btn-close"></div> <div id="confirmEmail_title">Thank You!</div> <div id="confirmEmail_subtitle">Please check your email</div> <p>We&#39;ve sent an email to <span class="confirmationEmail">your email address</span> containing a URL you&#39;ll need to follow to verify your account. You should receive the email within the next few minutes.</p> <p>Please note Your Globe and Mail account will expire after 30 days if not validated as described in the email.</p> </div> </div>',
        API_URL: 'https://' + $g_conf.servicesHost + '/usermanagement/api/',
        country: '',
        industry: '',
        position: '',
        income: '',
        gender: ''
    };

    function showRegister() {
        if (!$("html").is(".ie9, .ltie9")) {
            trackRegisterPage1();
            $.ajax({
                url: config.API_URL + '/site/v2/bootstrap',
                type: 'GET',
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'TGAM site=GNEWS'
                },
                success: function(data) {
                    config.country = data.response.countries;
                    var allYears = {};
                    var currentYear = (new Date).getFullYear();
                    for (var index = 0, y = currentYear - 14; y > 1900; index++, y--) {
                        var obj = {
                            'valueCode': y.toString(),
                            'description': y
                        };
                        allYears[index] = obj;
                    }
                    config.birthYear = allYears;
                    config.industry = data.response.attributes.INDUSTRY;
                    config.position = data.response.attributes.POSITION;
                    config.income = data.response.attributes.INCOME_RANGE;
                    config.gender = data.response.attributes.GENDER;
                    var countryList = '';
                    countryList += '<select name="country" id="registerForm_country"><option value="">Select country</option>';
                    $.each(config.country, function(subkey, subval) {
                        countryList += '<option value="' + subval.code + '">' + subval.name + '</option>';
                    })
                    countryList += '</select>';
                    var birthYearList = '';
                    birthYearList += '<select name="birthYear" id="registerForm_birthYear"><option value="">Select birth year</option>';
                    $.each(config.birthYear, function(subkey, subval) {
                        birthYearList += '<option value="' + subval.valueCode + '">' + subval.description + '</option>';
                    })
                    birthYearList += '</select>';
                    var industryList = '';
                    industryList += '<select name="industry" id="registerForm_industry"><option value="">Select industry</option>';
                    $.each(config.industry, function(subkey, subval) {
                        industryList += '<option value="' + subval.valueCode + '">' + subval.name + '</option>';
                    })
                    industryList += '</select>';
                    var positionList = '';
                    positionList += '<select name="position" id="registerForm_position"><option value="">Select occupation</option>';
                    $.each(config.position, function(subkey, subval) {
                        positionList += '<option value="' + subval.valueCode + '">' + subval.name + '</option>';
                    })
                    positionList += '</select>';
                    var incomeList = '';
                    incomeList += '<select name="income" id="registerForm_income"><option value="">Select income range</option>';
                    $.each(config.income, function(subkey, subval) {
                        incomeList += '<option value="' + subval.valueCode + '">' + subval.name + '</option>';
                    })
                    incomeList += '</select>';
                    var genderList = '';
                    genderList += '<select name="gender" id="registerForm_gender"><option value="">Select gender</option>';
                    $.each(config.gender, function(subkey, subval) {
                        genderList += '<option value="' + subval.valueCode + '">' + subval.name + '</option>';
                    })
                    genderList += '</select>';
                    $("#registerForm_countryList").html(countryList);
                    $("#registerForm_birthYearList").html(birthYearList);
                    $("#registerForm_industryList").html(industryList);
                    $("#registerForm_positionList").html(positionList);
                    $("#registerForm_incomeList").html(incomeList);
                    $("#registerForm_genderList").html(genderList);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    return false;
                }
            });
            $('#loginModal').removeClass('displayed');
            $("#registerStep1").css("display", "block");
            $("#preRegister").css("display", "block");
            $("#registerStep2").css("display", "none");
            $('#registerModal').addClass('displayed');
            
            $('#email').focus();
        } else {
            window.location.href = $g_conf.securePubUrl + "/account/#!/register";
        }
    }

    function closeRegister() {
        $('#registerModal').removeClass('displayed');
    }

    function showConfirmEmail() {
        if (!$("html").is(".ie9, .ltie9")) {
            $('#confirmEmailModal').addClass('displayed');
            $(document).ready(function(event) {
                if ($g.getCookie("p_reg_tId") !== undefined) {
                    $.ajax({
                        method: "POST",
                        url: "/template/ajax/registration/piano_tracking.jsp",
                        data: {
                            t: $g.getCookie("p_reg_tId")
                        }
                    }).done(function() {
                        $g.deleteCookie("p_reg_tId");
                    });
                }
            });
            trackRegisterPage3();
            if ($('#confirmEmailModal').hasClass('displayed')) {
                $('.closeConfirmEmail, #confirmEmailModal>div:not(.confirmEmailWrapper)').on('click', closeConfirmEmail);
            }
        }
    }

    function closeConfirmEmail() {
        $('#confirmEmailModal').removeClass('displayed');
    }

    function togglePassword() {
        var field = $("#registerForm_password");
        if (field.attr('type') == "text") {
            field.get(0).type = 'password';
            $(".registerForm__showHidePassword").removeClass("activated");
        } else {
            field.get(0).type = 'text';
            $(".registerForm__showHidePassword").addClass("activated");
        }
    }

    function validateEmail() {
        $(".registerForm__errorMessage").hide();
        var email = $("#registerForm_email").val();
        $("#registerForm_email").removeClass('inputError_border');
        $("#registerForm__error_email").html("");
        $.ajax({
            url: config.API_URL + 'users/v2/validateUserParameter',
            type: 'PUT',
            dataType: "json",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'TGAM site=GNEWS'
            },
            data: '{"email":"' + email + '"}',
            success: function(data) {},
            error: function(data) {
                var data = JSON.parse(data.responseText);
                var msg = '';
                if (data.errors && data.errors.length > 0) {
                    for (var err = 0; err < data.errors.length; err++) {
                        msg += data.errors[err].message + '<br />';
                    }
                }
                $("#registerForm_email").addClass('inputError_border');
                $("#registerForm__error_email").html(msg);
            }
        });
        return false;
    }

    function validatePassword() {
        $(".registerForm__errorMessage").hide();
        var password = $("#registerForm_password").val();
        $("#registerForm_password").removeClass('inputError_border');
        $(".registerForm__showHidePassword").removeClass('inputError_border');
        $("#registerForm__error_password").html("");
        $.ajax({
            url: config.API_URL + 'users/v2/validateUserParameter',
            type: 'PUT',
            dataType: "json",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'TGAM site=GNEWS'
            },
            data: '{"password":"' + password + '"}',
            success: function(data) {},
            error: function(data) {
                var data = JSON.parse(data.responseText);
                var msg = '';
                if (data.errors && data.errors.length > 0) {
                    for (var err = 0; err < data.errors.length; err++) {
                        msg += data.errors[err].message + '<br />';
                    }
                    $("#registerForm_password").addClass('inputError_border');
                    $(".registerForm__showHidePassword").addClass('inputError_border');
                    $("#registerForm__error_password").html(msg);
                }
            }
        });
        return false;
    }

    function validateFirstName() {
        $("#registerForm_firstName").removeClass('inputError_border');
        $("#registerForm__error_firstName").html("");
        var firstName = $("#registerForm_firstName").val();
        if (firstName == "") {
            $("#registerForm_firstName").addClass('inputError_border');
            $("#registerForm__error_firstName").html(validate.defaultErrors.fieldRequired);
        } else if (!validate.isAlphaOnly(firstName)) {
            $("#registerForm_firstName").addClass('inputError_border');
            $("#registerForm__error_firstName").html(validate.defaultErrors.fieldAlpha);
        }
    }

    function validateLastName() {
        $("#registerForm_lastName").removeClass('inputError_border');
        $("#registerForm__error_lastName").html("");
        var lastName = $("#registerForm_lastName").val();
        if (lastName == "") {
            $("#registerForm_lastName").addClass('inputError_border');
            $("#registerForm__error_lastName").html(validate.defaultErrors.fieldRequired);
        } else if (!validate.isAlphaOnly(lastName)) {
            $("#registerForm_lastName").addClass('inputError_border');
            $("#registerForm__error_lastName").html(validate.defaultErrors.fieldAlpha);
        }
    }

    function validateDisplayName() {
        $(".registerForm__errorMessage").hide();
        var displayName = $("#registerForm_displayName").val();
        $("#registerForm_displayName").removeClass('inputError_border');
        $("#registerForm__error_displayName").html("");
        if (displayName != "") {
            $.ajax({
                url: config.API_URL + 'users/v2/validateUserParameter',
                type: 'PUT',
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'TGAM site=GNEWS'
                },
                data: '{"displayName":"' + displayName + '"}',
                success: function(data) {},
                error: function(data) {
                    var data = JSON.parse(data.responseText);
                    var msg = '';
                    if (data.errors && data.errors.length > 0) {
                        for (var err = 0; err < data.errors.length; err++) {
                            msg += data.errors[err].message + '<br />';
                            if (data.errors[err].alternatives) {
                                if (data.errors[err].alternatives.length > 0) {
                                    msg += 'Suggestions: ' + data.errors[err].alternatives[0];
                                }
                                for (var i = 1; i < data.errors[err].alternatives.length; i++) {
                                    msg += ', ' + data.errors[err].alternatives[i];
                                }
                            }
                        }
                        $("#registerForm_displayName").addClass('inputError_border');
                        $("#registerForm__error_displayName").html(msg);
                    }
                }
            });
        }
        return false;
    }

    function validatePostalCode() {
        $(".registerForm__errorMessage").hide();
        $("#registerForm_postalCode").removeClass('inputError_border');
        $("#registerForm__error_postalCode").html("");
        $("#registerForm_country").removeClass('inputError_border');
        $("#registerForm__error_country").html("");
        var countryCode = $('#registerForm_country option:selected').val();
        var postalCode = $("#registerForm_postalCode").val();
        if (postalCode != "") {
            if (countryCode == "") {
                $("#registerForm_country").addClass('inputError_border');
                $("#registerForm__error_country").html("Please select the country");
            } else if (countryCode == 'CA' && !validate.isCanadianPostalCode(postalCode) || countryCode == 'US' && !validate.isAmericanPostalCode(postalCode) || countryCode == 'GB' && !validate.isBritishPostalCode(postalCode)) {
                $("#registerForm_postalCode").addClass('inputError_border');
                $("#registerForm__error_postalCode").html("Please enter a valid postal/zip code");
            }
        }
    }

    function AccountInfoSubmit() {
        $(".registerForm__errorMessage").hide();
        $("#registerForm input").removeClass('inputError_border');
        $("#registerForm__error_country").html("");
        $("#registerForm select").removeClass('inputError_border');
        $("#registerSubmitButton").attr('disabled', 'disabled').addClass('disabled');
        var email = $("#registerForm_email").val();
        var password = $("#registerForm_password").val();
        var firstName = $("#registerForm_firstName").val();
        var lastName = $("#registerForm_lastName").val();
        var displayName = $("#registerForm_displayName").val();
        if (email == "") {
            validateEmail();
            if (password == "") {
                validatePassword();
            }
            if (firstName == "") {
                validateFirstName();
            }
            if (lastName == "") {
                validateLastName();
            }
            $("#registerSubmitButton").removeAttr('disabled').removeClass('disabled');
        } else {
            var data = {
                "email": email,
                "password": password,
                "firstName": firstName,
                "lastName": lastName,
                "displayName": displayName,
                "countryCode": $('#registerForm_country option:selected').val(),
                "postalCode": $('#registerForm_country option:selected').val() ? $("#registerForm_postalCode").val() : ""
            };
            $.ajax({
                url: config.API_URL + 'users/v2/validateUserParameter',
                type: 'PUT',
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'TGAM site=GNEWS'
                },
                data: JSON.stringify(data),
                success: function(data) {
                    $("#registerSubmitButton").removeAttr('disabled').removeClass('disabled');
                    $("#registerStep1").css("display", "none");
                    $("#preRegister").css("display", "none");
                    $("#registerStep2").css("display", "block");
                    trackRegisterPage2();
                },
                error: function(data) {
                    $("#registerSubmitButton").removeAttr('disabled').removeClass('disabled');
                    var data = JSON.parse(data.responseText);
                    var msg = [];
                    msg['email'] = '';
                    msg['password'] = '';
                    msg['firstName'] = '';
                    msg['lastName'] = '';
                    msg['displayName'] = '';
                    msg['country'] = '';
                    msg['postalCode'] = '';
                    if (data.errors && data.errors.length > 0) {
                        for (var err = 0; err < data.errors.length; err++) {
                            $("#registerForm_" + data.errors[err].field + "").addClass('inputError_border');
                            if (data.errors[err].field == "password") {
                                $(".registerForm__showHidePassword").addClass('inputError_border');
                            }
                            msg[data.errors[err].field] += data.errors[err].message + '<br />';
                            if (data.errors[err].alternatives) {
                                if (data.errors[err].alternatives.length > 0) {
                                    msg += 'Suggestions: ' + data.errors[err].alternatives[0];
                                }
                                for (var i = 1; i < data.errors[err].alternatives.length; i++) {
                                    msg += ', ' + data.errors[err].alternatives[i];
                                }
                            }
                        }
                        $("#registerForm__error_email").html(msg['email']);
                        $("#registerForm__error_password").html(msg['password']);
                        $("#registerForm__error_firstName").html(msg['firstName']);
                        $("#registerForm__error_lastName").html(msg['lastName']);
                        $("#registerForm__error_displayName").html(msg['displayName']);
                        $("#registerForm__error_country").html(msg['country']);
                        $("#registerForm__error_postalCode").html(msg['postalCode']);
                    }
                }
            });
        }
        return false;
    }

    function fpdSubmit(event) {
        event.preventDefault();
        $(".registerForm__errorMessage").hide();
        $("#registerForm input").removeClass('inputError_border');
        $("#fpdSubmitButton").attr('disabled', 'disabled').addClass('disabled');
        var email = $("#registerForm_email").val();
        var data = {
            "email": email,
            "password": $("#registerForm_password").val(),
            "firstName": $("#registerForm_firstName").val(),
            "lastName": $("#registerForm_lastName").val(),
            "displayName": $("#registerForm_displayName").val(),
            "countryCode": $('#registerForm_country option:selected').val(),
            "postalCode": $('#registerForm_country option:selected').val() ? $("#registerForm_postalCode").val() : "",
            "attributes": {
                "BIRTH_YEAR": $("#registerForm_birthYear option:selected").val(),
                "INDUSTRY": $("#registerForm_industry option:selected").val(),
                "POSITION": $("#registerForm_position option:selected").val(),
                "INCOME_RANGE": $("#registerForm_income option:selected").val(),
                "GENDER": $("#registerForm_gender option:selected").val()
            },
            "url": $g_conf.securePubUrl + '/account/#!/validateaccount/'
        };
        $.ajax({
            url: config.API_URL + 'users/v2/user',
            type: 'POST',
            dataType: "json",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'TGAM site=GNEWS'
            },
            data: JSON.stringify(data),
            success: function(data) {
                $("#registerForm input").val("");
                closeRegister();
                $("#fpdSubmitButton").removeAttr('disabled').removeClass('disabled');
                $("#registerStep1").css("display", "block");
                $("#preRegister").css("display", "block");
                $("#registerStep2").css("display", "none");
                $("#registerSubmitButton").removeAttr('disabled').removeClass('disabled');
                $(".confirmationEmail").html(email);
                showConfirmEmail();
            },
            error: function(data) {
                $("#registerSubmitButton").removeAttr('disabled').removeClass('disabled');
                $("#fpdSubmitButton").removeAttr('disabled').removeClass('disabled');
                $("#registerStep1").css("display", "block");
                $("#preRegister").css("display", "block");
                $("#registerStep2").css("display", "none");
                var data = JSON.parse(data.responseText);
                var msg = [];
                msg['email'] = '';
                msg['password'] = '';
                msg['firstName'] = '';
                msg['lastName'] = '';
                msg['displayName'] = '';
                msg['country'] = '';
                msg['postalCode'] = '';
                if (data.errors && data.errors.length > 0) {
                    for (var err = 0; err < data.errors.length; err++) {
                        $("#registerForm_" + data.errors[err].field + "").addClass('inputError_border');
                        if (data.errors[err].field == "password") {
                            $(".registerForm__showHidePassword").addClass('inputError_border');
                        }
                        msg[data.errors[err].field] += data.errors[err].message + '<br />';
                        if (data.errors[err].alternatives) {
                            if (data.errors[err].alternatives.length > 0) {
                                msg += 'Suggestions: ' + data.errors[err].alternatives[0];
                            }
                            for (var i = 1; i < data.errors[err].alternatives.length; i++) {
                                msg += ', ' + data.errors[err].alternatives[i];
                            }
                        }
                    }
                    $("#registerForm__error_email").html(msg['email']);
                    $("#registerForm__error_password").html(msg['password']);
                    $("#registerForm__error_firstName").html(msg['firstName']);
                    $("#registerForm__error_lastName").html(msg['lastName']);
                    $("#registerForm__error_displayName").html(msg['displayName']);
                    $("#registerForm__error_country").html(msg['country']);
                    $("#registerForm__error_postalCode").html(msg['postalCode']);
                }
            }
        });
        return false;
    }

    function trackRegisterPage1() {
        s.pageName = "register:section";
        s.events = "event1,event16";
        try {
            var s_code = s.t();
            if (s_code) document.write(s_code);
        } catch (e) {}
    }

    function trackRegisterPage2() {
        s.pageName = "register:supplementaryinfo:section";
        s.events = "event16";
        try {
            var s_code = s.t();
            if (s_code) document.write(s_code);
        } catch (e) {}
    }

    function trackRegisterPage3() {
        s.pageName = "register:thankyou:section";
        s.events = "event16";
        try {
            var s_code = s.t();
            if (s_code) document.write(s_code);
        } catch (e) {}
    }

    function setCookie(name, value, expires, path, domain, secure) {
        var cookieStr = name + '=' + value + '; ';
        if (expires) {
            expires = setExpiration(expires);
            cookieStr += 'expires=' + expires + '; ';
        }
        if (path) {
            cookieStr += 'path=' + path + '; ';
        }
        if (domain) {
            cookieStr += 'domain=' + domain + '; ';
        }
        if (secure) {
            cookieStr += 'secure; ';
        }
        document.cookie = cookieStr;
    }

    function setExpiration(cookieLife) {
        if (!cookieLife) {
            cookieLife = 0;
        }
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLife * 1000);
        return expr.toGMTString();
    }

    function gigyaLogin_socialLogin(response) {
        var data = {
            'uid': response.UID,
            'timestamp': response.timestamp,
            'uidSig': response.UIDSig,
            'deviceType': 'BROWSER'
        };
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: config.API_URL + 'users/v2/socialLogin',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'TGAM site=GNEWS'
            }
        }).error(function(data) {
            $(".registerForm__errorMessage").show();
            var response = JSON.parse(data.responseText);
            $(".registerForm__errorMessage").text(response.errors[0].message);
        }).success(function(data) {
            var myParam = {};
            for (var i = 0; i < data.response.sessionData.length; i++) {
                if (data.response.sessionData[i].maxAge != '-1') {
                    var expires = data.response.sessionData[i].maxAge;
                } else {
                    var expires = false;
                }
                var options = {
                    domain: data.response.sessionData[i].domain,
                    path: data.response.sessionData[i].path,
                    secure: data.response.sessionData[i].secure,
                    expires: setExpiration(expires)
                };
                setCookie(data.response.sessionData[i].name, data.response.sessionData[i].value, expires, data.response.sessionData[i].path, data.response.sessionData[i].domain, data.response.sessionData[i].secure);
                myParam[i] = [data.response.sessionData[i].name, options];
            }
            window.location.replace(window.location.href + "?ord=1")
            return false;
        });
    }

    function gigyaLogin_goToStep2(response) {
        $(".register__socialaccount").hide();
        $(".registerForm").hide();
        $(".register__withemail").hide();
        $(".register__notLinked").addClass('activated');
        $(".register__notLinked__actionButtons").show();
        var provider = response.user.providers[0];
        $(".register__notLinked__profile .icon").addClass('gmicon-' + provider);
        $(".register__notLinked__thumbnail").attr('src', response.user.thumbnailURL);
        $(".register__notLinked__profile__name").text(response.user.nickname);
        $(".register__notLinked__profile__email").text(response.user.email);
        $(".createNewAccount").on('click', function() {
            gigyaLogin_socialLogin(response)
        })
        $(".linkAnAccount").on('click', function() {
            $(".register__notLinked__actionButtons").hide();
            $(".registerForm").show();
            $(".linkHeader").show();
            $(".register__withemail").hide();
        })
        $(".cancelCreate").on('click', function() {
            $(".register__socialaccount").show();
            $(".registerForm").show();
            $(".register__withemail").show();
            $(".register__notLinked").removeClass('activated');
            $(".linkHeader").hide();
            gigya.socialize.logout();
        })
    }

    function gigyaLogin(response) {
        if (response.status === 'OK') {
            var re = /^\d+$/;
            if (re.test(response.UID)) {
                gigyaLogin_socialLogin(response);
            } else if (response.user.UID !== '') {
                if (response.user.email !== '') {
                    $.ajax({
                        type: 'PUT',
                        dataType: "json",
                        url: config.API_URL + 'users/v2/validateUserParameter',
                        data: '{"email":"' + response.user.email + '"}',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'TGAM site=GNEWS'
                        },
                        success: function() {
                            gigyaLogin_goToStep2(response);
                        },
                        error: function(data, status, error) {
                            var data = JSON.parse(data.responseText);
                            if (data.errors && data.errors[0].code == '112') {
                                gigyaLogin_socialLogin(response);
                            } else if (data.errors && data.errors[0].code == '130') {
                                gigyaLogin_socialLogin(response);
                            } else {
                                var msg = '';
                                if (data.errors && data.errors.length > 0) {
                                    for (var err = 0; err < data.errors.length; err++) {
                                        msg += '<br>' + data.errors[err].message;
                                    }
                                }
                                gigya.socialize.logout();
                                $(".registerForm__errorMessage").show();
                                $(".registerForm__errorMessage").text(msg);
                            }
                        }
                    });
                } else {
                    gigyaLogin_goToStep2(response);
                }
            }
        } else {
            $(".registerForm__errorMessage").show();
            $(".registerForm__errorMessage").text('There is a communication problem with your social media provider. Please check your Internet connection');
        }
    }

    function socialLogin(provider) {
        if (provider == 'facebook') {
            s.linkTrackVars = 'events';
            s.linkTrackEvents = 'event69';
            s.events = 'event69';
            s.tl(true, 'o', 'Facebook Social Login Click');
        } else if (provider == 'googleplus') {
            s.linkTrackVars = 'events';
            s.linkTrackEvents = 'event70';
            s.events = 'event70';
            s.tl(true, 'o', 'Google+ Social Login Click');
        } else if (provider == 'linkedin') {
            s.linkTrackVars = 'events';
            s.linkTrackEvents = 'event71';
            s.events = 'event71';
            s.tl(true, 'o', 'LinkedIn Social Login Click');
        }
        $(".registerForm__errorMessage").hide();
        var params = {
            provider: provider,
            callback: gigyaLogin
        };
        gigya.socialize.login(params);
    }

    function init_registered() {
        $(function() {
            if (!$("html").is(".ie9, .ltie9")) {
                $('#page').after(config.elem_registerModal__html);
                $('#registerModal, .registerBg').css('height', $('html').height() + 'px');
                $('#page').after(config.elem_confirmEmailModal__html);
                $('#confirmEmailModal, .confirmEmailBg').css('height', $('html').height() + 'px');
                $("a[href='" + $g_conf.securePubUrl + "/account/#!/register']").each(function() {
                    $(this).css('cursor', 'pointer').removeAttr('href').bind('click', function(e) {
                        e.preventDefault();
                        showRegister();
                    });
                });
                $('.closeRegisterModal, #registerModal>div:not(.registerWrapper)').on('click', closeRegister);
                $(".registerForm__showHidePassword").on('click', togglePassword);
                $("#registerDiv>div").on('click', function() {
                    socialLogin($(this).data("social"));
                });
                $("#registerForm_email").on('blur', validateEmail);
                $("#registerForm_password").on('blur', validatePassword);
                $("#registerForm_firstName").on('blur', validateFirstName);
                $("#registerForm_lastName").on('blur', validateLastName);
                $("#registerForm_displayName").on('blur', validateDisplayName);
                $("#registerForm_country").on('blur', validatePostalCode);
                $("#registerForm_postalCode").on('blur', validatePostalCode);
                $("#registerSubmitButton").on('click', AccountInfoSubmit);
                $('#registerForm').on('submit', fpdSubmit);
            }
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                closeRegister();
                closeConfirmEmail();
            }
        });
    }
    if ($g.getCookie('SSO_COOKIE') == null) {
        init_registered();
    }
    return {
        config: config,
        open: showRegister,
        close: closeRegister,
        openConfirmEmail: showConfirmEmail,
        closeConfirmEmail: closeConfirmEmail
    }
})(document, window, jQuery);
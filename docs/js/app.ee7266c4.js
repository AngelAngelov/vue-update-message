(function (t) {
    function e(e) {
        for (var s, a, r = e[0], c = e[1], l = e[2], u = 0, p = []; u < r.length; u++) a = r[u], o[a] && p.push(o[a][0]), o[a] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        m && m(e);
        while (p.length) p.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], s = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== o[c] && (s = !1)
            }
            s && (i.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var s = {},
        o = {
            1: 0
        },
        i = [];

    function a(e) {
        if (s[e]) return s[e].exports;
        var n = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = t, a.c = s, a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) a.d(n, s, function (e) {
                return t[e]
            }.bind(null, s));
        return n
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var m = c;
    i.push([2, 0]), n()
})({
    "+q/x": function (t, e, n) {},
    2: function (t, e, n) {
        t.exports = n("Vtdi")
    },
    EDI0: function (t, e, n) {},
    "KL5/": function (t, e, n) {
        "use strict";
        var s = n("+q/x"),
            o = n.n(s);
        o.a
    },
    Vtdi: function (t, e, n) {
        "use strict";
        n.r(e);
        n("VRzm");
        var s = n("Kw5r"),
            o = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t._m(0), n("HelloWorld", {
                    attrs: {
                        msg: "Welcome to Your Vue.js App"
                    }
                })], 1)
            },
            i = [function () {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "row"
                }, [s("img", {
                    attrs: {
                        src: n("zwU1"),
                        height: "100px;"
                    }
                }), s("h1", {
                    staticClass: "mt-3"
                }, [t._v("vue-update-message")])])
            }],
            a = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", [n("h3", [t._v("Choose mode")]), n("div", {
                    staticClass: "col-md-12"
                }, [n("label", {
                    staticClass: "mr-3"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.mode,
                        expression: "mode"
                    }],
                    attrs: {
                        type: "radio",
                        name: "mode",
                        value: "stack"
                    },
                    domProps: {
                        checked: t._q(t.mode, "stack")
                    },
                    on: {
                        change: function (e) {
                            t.mode = "stack"
                        }
                    }
                }), t._v(" Stack\n      ")]), n("label", [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.mode,
                        expression: "mode"
                    }],
                    attrs: {
                        type: "radio",
                        name: "mode",
                        value: "single"
                    },
                    domProps: {
                        checked: t._q(t.mode, "single")
                    },
                    on: {
                        change: function (e) {
                            t.mode = "single"
                        }
                    }
                }), t._v(" Single message\n      ")])]), t._m(0)]), n("div", [n("div", {
                    staticClass: "pb-3 col-md-12"
                }, [n("h3", [t._v("Message text (html)")]), n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.message,
                        expression: "message"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        "max-height": "300px",
                        "max-width": "100%"
                    },
                    domProps: {
                        value: t.message
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.message = e.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "pb-3 row "
                }, [n("h3", {
                    staticClass: "w-100"
                }, [t._v("Message settings")]), n("div", {
                    staticClass: "col-md-3"
                }, [n("label", [t._v("Message type")]), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.msgSettings.type,
                        expression: "msgSettings.type"
                    }],
                    staticClass: "form-control",
                    on: {
                        change: function (e) {
                            var n = Array.prototype.filter.call(e.target.options, function (t) {
                                return t.selected
                            }).map(function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.$set(t.msgSettings, "type", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "success"
                    }
                }, [t._v("Success")]), n("option", {
                    attrs: {
                        value: "error"
                    }
                }, [t._v("Error")]), n("option", {
                    attrs: {
                        value: "info"
                    }
                }, [t._v("Info")])])]), n("div", {
                    staticClass: "col-md-3"
                }, [n("label", [t._v("Position")]), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.msgSettings.placement,
                        expression: "msgSettings.placement"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        disabled: "true" == t.msgSettings.showInContainer
                    },
                    on: {
                        change: function (e) {
                            var n = Array.prototype.filter.call(e.target.options, function (t) {
                                return t.selected
                            }).map(function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.$set(t.msgSettings, "placement", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "top"
                    }
                }, [t._v("Top")]), n("option", {
                    attrs: {
                        value: "top-left"
                    }
                }, [t._v("Top left")]), n("option", {
                    attrs: {
                        value: "top-right"
                    }
                }, [t._v("Top right")]), n("option", {
                    attrs: {
                        value: "bottom"
                    }
                }, [t._v("Bottom")]), n("option", {
                    attrs: {
                        value: "bottom-left"
                    }
                }, [t._v("Bottom left")]), n("option", {
                    attrs: {
                        value: "bottom-right"
                    }
                }, [t._v("Bottom right")])])]), n("div", {
                    staticClass: "col-md-3"
                }, [n("label", [t._v("Duration")]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.msgSettings.duration,
                        expression: "msgSettings.duration"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.msgSettings.duration
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.msgSettings, "duration", e.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "col-md-3"
                }, [n("label", [t._v("Is sticky")]), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.msgSettings.isSticky,
                        expression: "msgSettings.isSticky"
                    }],
                    staticClass: "form-control",
                    on: {
                        change: function (e) {
                            var n = Array.prototype.filter.call(e.target.options, function (t) {
                                return t.selected
                            }).map(function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.$set(t.msgSettings, "isSticky", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "false"
                    }
                }, [t._v("No")]), n("option", {
                    attrs: {
                        value: "true"
                    }
                }, [t._v("Yes")])])]), n("div", {
                    staticClass: "col-md-3"
                }, [n("label", [t._v("Dismissible")]), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.msgSettings.dismissible,
                        expression: "msgSettings.dismissible"
                    }],
                    staticClass: "form-control",
                    on: {
                        change: function (e) {
                            var n = Array.prototype.filter.call(e.target.options, function (t) {
                                return t.selected
                            }).map(function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.$set(t.msgSettings, "dismissible", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "false"
                    }
                }, [t._v("No")]), n("option", {
                    attrs: {
                        value: "true"
                    }
                }, [t._v("Yes")])])]), n("div", {
                    staticClass: "col-md-3"
                }, [n("label", [t._v("Show in container")]), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.msgSettings.showInContainer,
                        expression: "msgSettings.showInContainer"
                    }],
                    staticClass: "form-control",
                    on: {
                        change: function (e) {
                            var n = Array.prototype.filter.call(e.target.options, function (t) {
                                return t.selected
                            }).map(function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.$set(t.msgSettings, "showInContainer", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "false"
                    }
                }, [t._v("No")]), n("option", {
                    attrs: {
                        value: "true"
                    }
                }, [t._v("Yes")])])])]), n("div", {
                    staticClass: "mb-3"
                }, [n("button", {
                    staticClass: "btn btn-primary",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: t.showMessage
                    }
                }, [t._v("Show message")]), n("p", [t._v('Hit "Show message" button multiple times to display multiple messages')])])])])
            },
            r = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "text-left"
                }, [n("strong", [t._v("Single")]), t._v(" mode will display only one message on screen and when you create new message the old one will hide.\n      "), n("br"), n("strong", [t._v("Stack ")]), t._v(" mode will display multiple messages on screen. All messages will be shown on screeen and they will\n      dissapear according to their settings (duration, dissmisable, etc...)\n    ")])
            }],
            c = {
                data: function () {
                    return {
                        mode: "stack",
                        message: '<h4><span class="fa fa-exclamation-triangle"></span> Test message!</h4>\n<p>This is a sample message text ...</p>',
                        msgSettings: {
                            type: "success",
                            placement: "top",
                            isSticky: !1,
                            dismissible: !1,
                            duration: 3e3,
                            showInContainer: !1
                        }
                    }
                },
                methods: {
                    showMessage: function () {
                        var t = {
                            placement: this.msgSettings.placement,
                            isSticky: "true" == this.msgSettings.isSticky,
                            dismissible: "true" == this.msgSettings.dismissible,
                            duration: this.msgSettings.duration
                        };
                        switch ("true" == this.msgSettings.showInContainer && (t.element = ".message"), this.msgSettings.type) {
                            case "success":
                                this.$message.success(this.message, t);
                                break;
                            case "error":
                                this.$message.error(this.message, t);
                                break;
                            case "info":
                                this.$message.info(this.message, t);
                                break;
                            default:
                                break
                        }
                    },
                    changeMode: function () {
                        this.$message.setMode(this.mode)
                    }
                },
                watch: {
                    mode: "changeMode"
                }
            },
            l = c,
            m = (n("KL5/"), n("KHd+")),
            u = Object(m["a"])(l, a, r, !1, null, "67b0e262", null),
            p = u.exports,
            d = {
                name: "app",
                components: {
                    HelloWorld: p
                }
            },
            g = d,
            h = (n("ZL7j"), Object(m["a"])(g, o, i, !1, null, null, null)),
            f = h.exports,
            v = n("yT7P"),
            b = n("xmWZ"),
            y = n("qpph"),
            w = n("oyJW"),
            _ = (n("pIFo"), function () {
                function t(e) {
                    Object(b["a"])(this, t), Object(w["a"])(this, "dismissBtnTemplate", '<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                            <span aria-hidden="true">&times;</span>\n                        </button>'), this.message = e.message, this.type = e.type, this.options = e.options, this.container = e.container, this.el = document.createElement("div"), this.el.className = "update-message update-".concat(this.type, " fade ").concat(this.options.placement), e.options.element && (this.el.className += " in-container");
                    var n = this.template();
                    this.el.innerHTML = n
                }
                return Object(y["a"])(t, [{
                    key: "mount",
                    value: function () {
                        var t = this;
                        if (-1 !== this.options.placement.indexOf("top") ? this.container.insertBefore(this.el, this.container.firstChild) : this.container.appendChild(this.el), this.el.className += " show", this.options.dismissible) {
                            this.el.className += " update-message-dismissible";
                            var e = this.el.querySelector("button.close");
                            e.addEventListener("click", function (e) {
                                var n = e.currentTarget.parentElement;
                                t.removeMessage(n)
                            })
                        }
                        this.options.isSticky || setTimeout(function (t) {
                            t.removeMessage(t.el)
                        }, this.options.duration, this)
                    }
                }, {
                    key: "removeMessage",
                    value: function (t) {
                        t.addEventListener("transitionend", function (t) {
                            t.target.parentElement.removeChild(t.target)
                        }), t.className = t.className.replace(/\bshow\b/g, "")
                    }
                }, {
                    key: "hide",
                    value: function () {
                        this.el.parentElement && this.el.parentElement.removeChild(this.el)
                    }
                }, {
                    key: "template",
                    value: function () {
                        var t = "";
                        return this.options.dismissible && (t = this.dismissBtnTemplate), "".concat(this.message, " ").concat(t)
                    }
                }]), t
            }()),
            x = _,
            S = function () {
                function t() {
                    Object(b["a"])(this, t), Object(w["a"])(this, "defaultOptions", {
                        duration: 3e3,
                        dismissible: !1,
                        isSticky: !1,
                        placement: "top"
                    }), Object(w["a"])(this, "constOptions", {
                        position: "fixed",
                        width: "20vw",
                        mode: "stack",
                        successText: "#155724",
                        successBackground: "#d4edda",
                        successBorder: "#c3e6cb",
                        errorText: "#721c24",
                        errorBackground: "#f8d7da",
                        errorBorder: "#f5c6cb",
                        infoText: "#0c5460",
                        infoBackground: "#d1ecf1",
                        infoBorder: "#bee5eb"
                    }), this.counter = 1, this.isInitialCall = !0, this.containers = [], this.containers["top"] = null, this.containers["top-left"] = null, this.containers["top-right"] = null, this.containers["bottom"] = null, this.containers["bottom-left"] = null, this.containers["bottom-right"] = null
                }
                return Object(y["a"])(t, [{
                    key: "init",
                    value: function (t) {
                        this.constOptions = Object(v["a"])({}, this.constOptions, t);
                        var e = document.querySelector("body");
                        this.addStyleInHeader(), this.containers["top"] = document.createElement("div"), this.containers["top"].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 top", e.insertBefore(this.containers["top"], e.firstChild), this.containers["top-left"] = document.createElement("div"), this.containers["top-left"].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 top-left", e.insertBefore(this.containers["top-left"], e.firstChild), this.containers["top-right"] = document.createElement("div"), this.containers["top-right"].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 top-right", e.insertBefore(this.containers["top-right"], e.firstChild), this.containers["bottom"] = document.createElement("div"), this.containers["bottom"].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 bottom", e.insertBefore(this.containers["bottom"], e.lastChild), this.containers["bottom-left"] = document.createElement("div"), this.containers["bottom-left"].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 bottom-left", e.insertBefore(this.containers["bottom-left"], e.lastChild), this.containers["bottom-right"] = document.createElement("div"), this.containers["bottom-right"].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 bottom-right", e.insertBefore(this.containers["bottom-right"], e.lastChild)
                    }
                }, {
                    key: "show",
                    value: function (t) {
                        this.userSettings = t.userOptions;
                        var e = Object(v["a"])({}, this.defaultOptions, this.userSettings, this.constOptions),
                            n = null;
                        if (n = e.element ? document.querySelector(e.element) : this.containers[e.placement], "single" === this.constOptions.mode) this.message && this.message.hide(), this.message = new x({
                            message: t.message,
                            type: t.type,
                            options: e,
                            container: n
                        }), this.message.mount();
                        else if ("stack" === this.constOptions.mode) {
                            var s = new x({
                                message: t.message,
                                type: t.type,
                                options: e,
                                container: n
                            });
                            s.mount()
                        }
                    }
                }, {
                    key: "setMode",
                    value: function (t) {
                        "stack" !== t && "single" !== t || (this.constOptions.mode = t)
                    }
                }, {
                    key: "addStyleInHeader",
                    value: function () {
                        var t = this.containerStyle(),
                            e = document.head || document.getElementsByTagName("head")[0],
                            n = document.createElement("style");
                        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), e.appendChild(n)
                    }
                }, {
                    key: "containerStyle",
                    value: function () {
                        var t = ".update-message {\n                        position: ".concat(this.constOptions.position, ";\n                        width: ").concat(this.constOptions.width, ";\n                        opacity: .8;\n                        padding: .75rem 1.25rem;\n                        margin-bottom: 1rem;\n                        border: 1px solid transparent;\n                        border-radius: .25rem;\n                    }\n                    .update-message, .update-message > * {\n                        box-sizing: border-box;\n                    }\n                    .update-message-dismissible {\n                        padding-right: 4rem !important;\n                    }\n                    .update-success {\n                        color: ").concat(this.constOptions.successText, ";\n                        background-color: ").concat(this.constOptions.successBackground, ";\n                        border-color: ").concat(this.constOptions.successBorder, ";\n                    }\n                    .update-error {\n                        color: ").concat(this.constOptions.errorText, ";\n                        background-color: ").concat(this.constOptions.errorBackground, ";\n                        border-color: ").concat(this.constOptions.errorBorder, ";\n                    }\n                    .update-info {\n                        color: ").concat(this.constOptions.infoText, ";\n                        background-color: ").concat(this.constOptions.infoBackground, ";\n                        border-color: ").concat(this.constOptions.infoBorder, ";\n                    }\n                    .update-message.top {\n                        top: 2rem;\n                        left: 50%;\n                        transform: translateX(-50%);\n                    }\n                    .update-message.bottom {\n                        bottom: 2rem;\n                        left: 50%;\n                        transform: translateX(-50%);\n                    }\n                    .update-message.top-left {\n                        top: 2rem;\n                        left: 1rem;\n                    }\n                    .update-message.top-right {\n                        top: 2rem;\n                        right: 1rem;\n                    }\n                    .update-message.bottom-left {\n                        bottom: 2rem;\n                        left: 1rem;\n                    }\n                    .update-message.bottom-right {\n                        bottom: 2rem;\n                        right: 1rem;\n                    }\n                    .update-message.in-container {\n                        position: relative !important;\n                        top: auto !important;\n                        bottom: auto !important;\n                        left: auto !important;\n                        right: auto !important;\n                        width: 100% !important;\n                        transform: none !important;\n                    }\n                    .fade {\n                        transition: opacity .15s linear;\n                    }\n                    .fade:not(.show) {\n                        opacity: 0;\n                    }"),
                            e = ".custom-message-container {\n                                position: ".concat(this.constOptions.position, ";\n                                width: ").concat(this.constOptions.width, ";\n                                box-sizing: border-box;\n                                z-index: 9999;\n                            }\n                            .custom-message-container > * {\n                                box-sizing: border-box;\n                            }\n                            .update-message::after, .update-message::before{\n                                box-sizing: border-box;\n                            }\n                            .custom-message-container .update-message {\n                                position: relative !important;\n                                top: auto !important;\n                                bottom: auto !important;\n                                left: auto !important;\n                                right: auto !important;\n                                width: 100% !important;\n                                transform: none !important;\n                            }\n                            .custom-message-container.top {\n                                top: 2rem;\n                                left: 50%;\n                                transform: translateX(-50%);\n                            }\n                            .custom-message-container.top-left {\n                                top: 2rem;\n                                left: 1rem;\n                            }\n                            .custom-message-container.top-right {\n                                top: 2rem;\n                                right: 1rem;\n                            }\n                            .custom-message-container.bottom {\n                                bottom: 2rem;\n                                left: 50%;\n                                transform: translateX(-50%);\n                            }\n                            .custom-message-container.bottom-left {\n                                bottom: 2rem;\n                                left: 1rem;\n                            }\n                            .custom-message-container.bottom-right {\n                                bottom: 2rem;\n                                right: 1rem;\n                            }"),
                            n = ".close:not(:disabled):not(.disabled) {\n                                cursor: pointer;\n                            }\n                            .update-message-dismissible .close {\n                                position: absolute;\n                                top: 0;\n                                right: 0;\n                                padding: .75rem 1.25rem;\n                                color: inherit;\n                            }\n                            button.close {\n                                padding: 0;\n                                background-color: transparent;\n                                border: 0;\n                                -webkit-appearance: none;\n                            }\n                            [type=reset], [type=submit], button, html [type=button] {\n                                -webkit-appearance: button;\n                            }\n                            .close {\n                                float: right;\n                                font-size: 1.5rem;\n                                font-weight: 700;\n                                line-height: 1;\n                                color: #000;\n                                text-shadow: 0 1px 0 #fff;\n                                opacity: .5;\n                            }\n                            button, select {\n                                text-transform: none;\n                            }\n                            button, input {\n                                overflow: visible;\n                            }";
                        return t += n, "stack" === this.constOptions.mode && (t += e), t
                    }
                }]), t
            }(),
            k = new S,
            O = {
                install: function (t, e) {
                    k.init(e), t.prototype.$message = {
                        success: function (t, e) {
                            k.show({
                                message: t,
                                type: "success",
                                userOptions: e
                            })
                        },
                        error: function (t, e) {
                            k.show({
                                message: t,
                                type: "error",
                                userOptions: e
                            })
                        },
                        info: function (t, e) {
                            k.show({
                                message: t,
                                type: "info",
                                userOptions: e
                            })
                        },
                        setMode: function (t) {
                            k.setMode(t)
                        }
                    }
                }
            };
        s["a"].use(O), s["a"].config.productionTip = !1, new s["a"]({
            render: function (t) {
                return t(f)
            }
        }).$mount("#app")
    },
    ZL7j: function (t, e, n) {
        "use strict";
        var s = n("EDI0"),
            o = n.n(s);
        o.a
    },
    zwU1: function (t, e, n) {
        t.exports = n.p + "vue-update-message/img/logo.82b9c7a5.png"
    }
});
//# sourceMappingURL=app.ee7266c4.js.map
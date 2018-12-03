!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.GridManager = e() : t.GridManager = e()
}(this, function () {
    return function (t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var a = n[o] = {i: o, l: !1, exports: {}};
            return t[o].call(a.exports, a, a.exports, e), a.l = !0, a.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.i = function (t) {
            return t
        }, e.d = function (t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: o})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 21)
    }([function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.Base = e.$ = e.jTool = void 0;
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }();
        n(23);
        var r = window.jTool, i = window.jTool, l = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "getKey", value: function (t) {
                    return t.attr("grid-manager") || ""
                }
            }, {
                key: "getSetTopAttr", value: function () {
                    return "grid-manager-mock-thead"
                }
            }, {
                key: "getEmptyHtml", value: function (t, e) {
                    return '<tr emptyTemplate>\n\t\t\t\t\t<td colspan="' + (t || 1) + '">\n\t\t\t\t\t' + (e || "") + "\n\t\t\t\t\t</td>\n\t\t\t\t</tr>"
                }
            }, {
                key: "updateEmptyCol", value: function (t) {
                    var e = i("tr[emptyTemplate]", t);
                    0 !== e.length && i("td", e).attr("colspan", i('th[th-visible="visible"]', t).length)
                }
            }, {
                key: "outLog", value: function (t, e) {
                    switch (e) {
                        case"info":
                            console.info("GridManager Info: ", t);
                            break;
                        case"warn":
                            console.warn("GridManager Warn: ", t);
                            break;
                        case"error":
                            console.error("GridManager Error: ", t);
                            break;
                        default:
                            console.log("GridManager: ", t)
                    }
                }
            }, {
                key: "getColTd", value: function (t) {
                    var e = t.closest("table[grid-manager]"), n = t.index(), o = r("tbody tr", e), a = [], i = null;
                    return r.each(o, function (t, e) {
                        (i = r("td", e).get(n)) && a.push(i)
                    }), r(a)
                }
            }, {
                key: "setAreVisible", value: function (t, e, n) {
                    var o = this, a = null, l = void 0, u = null, s = null, c = [], d = null, f = null;
                    r.each(t, function (t, g) {
                        u = r(g), a = u.closest("table"), l = a.closest(".table-wrap"), s = r("tbody tr[cache-key]", a), d = r('.config-area li[th-name="' + u.attr("th-name") + '"]', l), f = i('input[type="checkbox"]', d), r.each(s, function (t, e) {
                            c.push(r(e).find("td").get(u.index()))
                        }), e ? (u.attr("th-visible", "visible"), r.each(c, function (t, e) {
                            e.setAttribute("td-visible", "visible")
                        }), d.addClass("checked-li"), f.prop("checked", !0)) : (u.attr("th-visible", "none"), r.each(c, function (t, e) {
                            e.setAttribute("td-visible", "none")
                        }), d.removeClass("checked-li"), f.prop("checked", !1)), o.updateEmptyCol(a), "function" == typeof n && n()
                    })
                }
            }, {
                key: "getTextWidth", value: function (t) {
                    var e = r(t), n = r(".th-wrap", e), o = r(".th-text", e), a = e.closest(".table-wrap"),
                        i = r(".text-dreamland", a);
                    i.text(o.text()), i.css({
                        fontSize: o.css("font-size"),
                        fontWeight: o.css("font-weight"),
                        fontFamily: o.css("font-family")
                    });
                    var l = n.css("padding-left"), u = n.css("padding-right");
                    return i.width() + (l || 0) + (u || 0) + 2 + 1
                }
            }, {
                key: "showLoading", value: function (t, e) {
                    if (!t || 0 === t.length) return !1;
                    var n = t.find(".load-area");
                    n.length > 0 && n.remove();
                    var o = r('<div class="load-area loading"><div class="loadInner kernel"></div></div>');
                    t.append(o);
                    var a = i(".load-area .loadInner", t), l = t.height(), u = a.height();
                    return a.css("margin-top", (l - u) / 2), window.setTimeout(function () {
                        "function" == typeof e && e()
                    }, 100), !0
                }
            }, {
                key: "hideLoading", value: function (t, e) {
                    return !(!t || 0 === t.length) && (window.setTimeout(function () {
                        r(".load-area", t).remove(), "function" == typeof e && e()
                    }, 500), !0)
                }
            }, {
                key: "updateInteractive", value: function (t, e) {
                    var n = ["Adjust", "Drag"], o = t.closest(".table-wrap");
                    e && -1 !== n.indexOf(e) ? o.attr("user-interactive", e) : o.removeAttr("user-interactive")
                }
            }, {
                key: "updateScrollStatus", value: function (t) {
                    var e = t.closest(".table-div");
                    return t.width() === e.width() ? (e.css("overflow-x", "hidden"), "hidden") : (e.css("overflow-x", "auto"), "auto")
                }
            }, {
                key: "getVisibleForColumn", value: function (t) {
                    return t.isShow ? "visible" : "none"
                }
            }, {
                key: "cloneObject", value: function (t) {
                    return JSON.parse(JSON.stringify(t))
                }
            }]), t
        }(), u = new l;
        e.jTool = i, e.$ = r, e.Base = u
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), i = n(0), l = n(19), u = n(6), s = o(u), c = n(11), d = o(c), f = n(20), g = o(f), h = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "getVersion", value: function () {
                    return g.default.version
                }
            }, {
                key: "getScope", value: function (t) {
                    return g.default.scope[i.Base.getKey(t)]
                }
            }, {
                key: "setScope", value: function (t, e) {
                    g.default.scope[i.Base.getKey(t)] = e
                }
            }, {
                key: "getRowData", value: function (t, e) {
                    var n = i.Base.getKey(t);
                    if (g.default.responseData[n]) {
                        if ("element" === i.jTool.type(e)) return g.default.responseData[n][e.getAttribute("cache-key")];
                        if ("nodeList" === i.jTool.type(e)) {
                            var o = [];
                            return i.jTool.each(e, function (t, e) {
                                o.push(g.default.responseData[n][e.getAttribute("cache-key")])
                            }), o
                        }
                        return {}
                    }
                }
            }, {
                key: "setRowData", value: function (t, e, n) {
                    g.default.responseData[i.Base.getKey(t)][e] = n
                }
            }, {
                key: "getTableData", value: function (t) {
                    return g.default.responseData[i.Base.getKey(t)] || []
                }
            }, {
                key: "setTableData", value: function (t, e) {
                    var n = i.Base.getKey(t);
                    g.default.responseData[n] || (g.default.responseData[n] = {}), g.default.responseData[n] = e
                }
            }, {
                key: "delUserMemory", value: function (t, e) {
                    if (!t || 0 === t.length) return window.localStorage.removeItem("GridManagerMemory"), i.Base.outLog("用户记忆被全部清除: " + e, "warn"), !0;
                    var n = this.getSettings(t);
                    i.Base.outLog(n.gridManagerName + "用户记忆被清除: " + e, "warn");
                    var o = window.localStorage.getItem("GridManagerMemory");
                    return !!o && (o = JSON.parse(o), delete o[this.getMemoryKey(n)], window.localStorage.setItem("GridManagerMemory", JSON.stringify(o)), !0)
                }
            }, {
                key: "getMemoryKey", value: function (t) {
                    return window.location.pathname + window.location.hash + "-" + t.gridManagerName
                }
            }, {
                key: "getUserMemory", value: function (t) {
                    if (!t || 0 === t.length) return {};
                    var e = this.getMemoryKey(this.getSettings(t));
                    if (!e) return {};
                    var n = window.localStorage.getItem("GridManagerMemory");
                    return n && "{}" !== n ? (n = JSON.parse(n), {
                        key: e,
                        cache: JSON.parse(n[e] || "{}")
                    }) : (t.attr("grid-manager-cache-error", "error"), {})
                }
            }, {
                key: "saveUserMemory", value: function (t, e) {
                    if (e.disableCache) return !1;
                    var n = (0, i.jTool)("thead[grid-manager-thead] th", t);
                    if (!n || 0 === n.length) return i.Base.outLog("saveUserMemory:无效的thList,请检查是否正确配置table,thead,th", "error"), !1;
                    var o = {};
                    if (o.column = e.columnMap, e.supportAjaxPage) {
                        var a = {};
                        a[e.pageSizeKey] = e.pageData[e.pageSizeKey], o.page = a
                    }
                    var r = JSON.stringify(o), l = window.localStorage.getItem("GridManagerMemory");
                    return l = l ? JSON.parse(l) : {}, l[this.getMemoryKey(e)] = r, window.localStorage.setItem("GridManagerMemory", JSON.stringify(l)), r
                }
            }, {
                key: "initSettings", value: function (t, e) {
                    var n = this, o = new l.Settings;
                    o.textConfig = new l.TextSettings, i.jTool.extend(!0, o, e), this.setSettings(t, o), o.supportAutoOrder && o.columnData.unshift(d.default.getColumn(o)), o.supportCheckbox && o.columnData.unshift(s.default.getColumn(o)), o.columnMap = {}, o.columnData.forEach(function (t, e) {
                        o.columnMap[t.key] = t, o.columnMap[t.key].isShow = t.isShow || void 0 === t.isShow, o.columnMap[t.key].index = e
                    });
                    return function () {
                        if (!o.disableCache) {
                            var e = n.getUserMemory(t), a = e.cache && e.cache.column ? e.cache.column : {},
                                r = Object.keys(a), l = Object.keys(o.columnMap);
                            if (0 !== r.length) {
                                var u = !0;
                                r.length !== l.length && (u = !1), u && i.jTool.each(o.columnMap, function (t, e) {
                                    if (!a[t] || a[t].text !== e.text || a[t].align !== e.align || a[t].sorting !== e.sorting || a[t].remind !== e.remind || a[t].template && a[t].template !== e.template) return u = !1, !1
                                }), u ? i.jTool.extend(!0, o.columnMap, a) : n.delUserMemory(t, "存储记忆项与配置项[columnData]不匹配")
                            }
                        }
                    }(), this.setSettings(t, o), o
                }
            }, {
                key: "getSettings", value: function (t) {
                    return t && 0 !== t.length ? i.jTool.extend(!0, {}, g.default.settings[i.Base.getKey(t)] || {}) : {}
                }
            }, {
                key: "setSettings", value: function (t, e) {
                    g.default.settings[i.Base.getKey(t)] = i.jTool.extend(!0, {}, e)
                }
            }, {
                key: "update", value: function (t, e) {
                    e || (e = this.getSettings(t)), e.columnMap = this.reworkColumnMap(t, e.columnMap), this.setSettings(t, e), this.saveUserMemory(t, e)
                }
            }, {
                key: "reworkColumnMap", value: function (t, e) {
                    if (!e || i.jTool.isEmptyObject(e)) return void i.Base.outLog("columnMap 为无效数据", "error");
                    var n = null;
                    return i.jTool.each(e, function (e, o) {
                        n = (0, i.jTool)('thead[grid-manager-thead] th[th-name="' + o.key + '"]', t), o.width = n.width() + "px", o.index = n.index(), o.isShow = "visible" === n.attr("th-visible")
                    }), e
                }
            }, {
                key: "cleanTableCacheForVersion", value: function () {
                    var t = window.localStorage.getItem("GridManagerVersion");
                    t || window.localStorage.setItem("GridManagerVersion", g.default.version), t && t !== g.default.version && (this.delUserMemory(null, "版本已升级,原全部缓存被自动清除"), window.localStorage.setItem("GridManagerVersion", g.default.version))
                }
            }]), t
        }();
        e.default = new h
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), r = n(0), i = n(1), l = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(i), u = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "init", value: function (t) {
                    this.__bindAdjustEvent(t)
                }
            }, {
                key: "resetAdjust", value: function (t) {
                    if (!t || 0 === t.length) return !1;
                    var e = (0, r.jTool)('thead [th-visible="visible"]', t), n = (0, r.jTool)(".adjust-action", e);
                    if (!n || 0 === n.length) return !1;
                    n.show(), n.eq(n.length - 1).hide(), r.Base.updateScrollStatus(t)
                }
            }, {
                key: "destroy", value: function (t) {
                    t.unbind("mouseup mouseleave"), t.unbind("mousemove"), t.off("mousedown", ".adjust-action")
                }
            }, {
                key: "__bindAdjustEvent", value: function (t) {
                    var e = this;
                    t.off("mousedown", ".adjust-action"), t.on("mousedown", ".adjust-action", function (t) {
                        var n = (0, r.jTool)(this), o = n.closest("th"), a = o.parent(), i = a.closest("table"),
                            u = l.default.getSettings(i), s = a.find('th[th-visible="visible"]'),
                            c = s.eq(o.index(s) + 1), d = r.Base.getColTd(o);
                        return u.adjustBefore(t), o.addClass("adjust-selected"), d.addClass("adjust-selected"), r.Base.updateInteractive(i, "Adjust"), e.__runMoveEvent(i, o, c), e.__runStopEvent(i, o, d), !1
                    })
                }
            }, {
                key: "__runMoveEvent", value: function (t, e, n) {
                    var o = null, a = null, i = r.Base.getTextWidth(e), l = r.Base.getTextWidth(n);
                    t.unbind("mousemove"), t.bind("mousemove", function (u) {
                        t.addClass("no-select-text"), o = u.clientX - e.offset().left, o = Math.ceil(o), a = n.width() + e.width() - o, a = Math.ceil(a), o < i || (a < l && (a = l), o !== e.width() && (o + a < e.width() + n.width() && (a = e.width() + n.width() - o), e.width(o), n.width(a), 1 === e.closest("thead[" + r.Base.getSetTopAttr() + "]").length && ((0, r.jTool)('thead[grid-manager-thead] th[th-name="' + e.attr("th-name") + '"]', t).width(o), (0, r.jTool)('thead[grid-manager-thead] th[th-name="' + n.attr("th-name") + '"]', t).width(a), (0, r.jTool)("thead[" + r.Base.getSetTopAttr() + "]", t).width((0, r.jTool)("thead[grid-manager-thead]", t).width()))))
                    })
                }
            }, {
                key: "__runStopEvent", value: function (t, e, n) {
                    t.unbind("mouseup mouseleave"), t.bind("mouseup mouseleave", function (o) {
                        var a = l.default.getSettings(t);
                        t.unbind("mousemove mouseleave"), e.hasClass("adjust-selected") && a.adjustAfter(o), e.removeClass("adjust-selected"), n.removeClass("adjust-selected"), t.removeClass("no-select-text"), r.Base.updateInteractive(t), r.Base.updateScrollStatus(t), l.default.update(t, a)
                    })
                }
            }, {
                key: "html", get: function () {
                    return '<span class="adjust-action"></span>'
                }
            }]), t
        }();
        e.default = new u
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }

                return function (e, n, o) {
                    return n && t(e.prototype, n), o && t(e, o), e
                }
            }(), i = n(0), l = n(10), u = o(l), s = n(2), c = o(s), d = n(5), f = o(d), g = n(1), h = o(g), p = n(7),
            v = o(p), y = n(6), m = o(y), b = n(8), T = o(b), j = n(11), k = o(j), w = n(12), x = o(w), M = n(13),
            S = o(M), D = function () {
                function t() {
                    a(this, t)
                }

                return r(t, [{
                    key: "refresh", value: function (t, e) {
                        var n = this, o = h.default.getSettings(t), a = t.closest(".table-wrap");
                        (0, i.jTool)(".page-toolbar .refresh-action", a).addClass("refreshing"), i.Base.showLoading(a);
                        var r = this.transformToPromise(t, o);
                        o.ajax_beforeSend(r), r.then(function (r) {
                            n.driveDomForSuccessAfter(t, o, r, e), o.ajax_success(r), o.ajax_complete(r), i.Base.hideLoading(a), n.removeRefreshingClass(a)
                        }).catch(function (t) {
                            o.ajax_error(t), o.ajax_complete(t), i.Base.hideLoading(a), n.removeRefreshingClass(a)
                        })
                    }
                }, {
                    key: "transformToPromise", value: function (t, e) {
                        var n = "function" == typeof e.ajax_data ? e.ajax_data(e) : e.ajax_data;
                        return "string" == typeof n ? function () {
                            var o = i.jTool.extend(!0, {}, e.query);
                            return e.supportAjaxPage && (o[e.currentPageKey] = e.pageData[e.currentPageKey], o[e.pageSizeKey] = e.pageData[e.pageSizeKey]), e.supportSorting && i.jTool.each(e.sortData, function (t, n) {
                                o["" + e.sortKey + t] = n
                            }), "POST" !== e.ajax_type.toUpperCase() || e.ajax_headers["Content-Type"] || (e.ajax_headers["Content-Type"] = "application/x-www-form-urlencoded"), o = e.requestHandler(i.Base.cloneObject(o)), e.supportAjaxPage && i.jTool.each(e.pageData, function (t, n) {
                                e.pageData[t] = o[t] || n
                            }), e.supportSorting && i.jTool.each(e.sortData, function (t, n) {
                                e.sortData[t] = o["" + e.sortKey + t] || n
                            }), h.default.setSettings(t, e), new Promise(function (t, a) {
                                i.jTool.ajax({
                                    url: n,
                                    type: e.ajax_type,
                                    data: o,
                                    headers: e.ajax_headers,
                                    xhrFields: e.ajax_xhrFields,
                                    cache: !0,
                                    success: function (e) {
                                        t(e)
                                    },
                                    error: function (t, e, n) {
                                        a(t, e, n)
                                    }
                                })
                            })
                        }() : "function" == typeof n.then ? n : "object" === i.jTool.type(n) || "array" === i.jTool.type(n) ? new Promise(function (t) {
                            t(n)
                        }) : void 0
                    }
                }, {
                    key: "removeRefreshingClass", value: function (t) {
                        var e = (0, i.jTool)(".page-toolbar .refresh-action", t);
                        window.setTimeout(function () {
                            e.removeClass("refreshing")
                        }, 2e3)
                    }
                }, {
                    key: "cleanData", value: function (t) {
                        var e = h.default.getSettings(t);
                        this.insertEmptyTemplate(t, e), e.supportCheckbox && m.default.resetDOM(t, []), e.supportAjaxPage && (f.default.resetPageData(t, e, 0), u.default.updateMenuPageStatus(e.gridManagerName, e))
                    }
                }, {
                    key: "driveDomForSuccessAfter", value: function (t, e, n, o) {
                        if (!n) return void i.Base.outLog("请求数据失败！请查看配置参数[ajax_data]是否配置正确，并查看通过该地址返回的数据格式是否正确", "error");
                        var a = "string" == typeof n ? JSON.parse(n) : n;
                        a = e.responseHandler(i.Base.cloneObject(a));
                        var r = a[e.dataKey], l = null;
                        if (r && 0 !== r.length) {
                            if (e.supportAutoOrder) {
                                var s = e.pageData, c = 1;
                                s && s[e.pageSizeKey] && s[e.currentPageKey] && (c = s[e.pageSizeKey] * (s[e.currentPageKey] - 1) + 1), r = r.map(function (t, e) {
                                    return t[k.default.key] = c + e, t
                                })
                            }
                            e.supportCheckbox && (r = r.map(function (t) {
                                return t[m.default.key] = !1, t
                            })), h.default.setTableData(t, r);
                            var d = (0, i.jTool)("tbody", t).get(0);
                            d.innerHTML = "";
                            var g = [];
                            i.jTool.each(r, function (t, n) {
                                var o = document.createElement("tr");
                                o.setAttribute("cache-key", t);
                                var a = [];
                                i.jTool.each(e.columnMap, function (t, e) {
                                    l = e.template, l = "function" == typeof l ? l(n[e.key], n) : "string" == typeof l ? l : n[e.key];
                                    var o = null;
                                    e.isAutoCreate ? o = (0, i.jTool)(l).get(0) : (o = (0, i.jTool)('<td gm-create="false"></td>').get(0), "element" === i.jTool.type(l) ? o.appendChild(l) : o.innerHTML = l || ""), e.align && o.setAttribute("align", e.align), a[e.index] = o, e.useCompile && g.push({
                                        td: o,
                                        row: n
                                    })
                                }), a.forEach(function (t) {
                                    o.appendChild(t)
                                }), d.appendChild(o)
                            }), this.bindEvent(t), this.initVisible(t);
                            try {
                                "function" == typeof e.compileVue && g.length > 0 && e.compileVue(g)
                            } catch (t) {
                                i.Base.outLog("框架模板解析异常, 请查看template配置项", "error")
                            }
                        } else this.insertEmptyTemplate(t, e), a[e.totalsKey] = 0;
                        e.supportCheckbox && m.default.resetDOM(t, r), e.supportAjaxPage && (f.default.resetPageData(t, e, a[e.totalsKey]), u.default.updateMenuPageStatus(e.gridManagerName, e)), "function" == typeof o && o(a)
                    }
                }, {
                    key: "insertEmptyTemplate", value: function (t, e) {
                        var n = (0, i.jTool)('th[th-visible="visible"]', t).length;
                        (0, i.jTool)("tbody", t).html(i.Base.getEmptyHtml(n, e.emptyTemplate))
                    }
                }, {
                    key: "bindEvent", value: function (t) {
                        (0, i.jTool)("[gm-click]", t).unbind("click"), (0, i.jTool)("[gm-click]", t).bind("click", function () {
                            var e = h.default.getRowData(t, this.parentNode.parentNode),
                                n = h.default.getScope(t) || window, o = n[this.getAttribute("gm-click")];
                            "function" == typeof o && o.call(n, e)
                        })
                    }
                }, {
                    key: "createDOM", value: function (t) {
                        var e = h.default.getSettings(t), n = "<thead grid-manager-thead>", o = "", a = "", r = "", l = "",
                            u = "", s = [];
                        e.disableCache ? i.jTool.each(e.columnMap, function (t, e) {
                            s.push(e)
                        }) : i.jTool.each(e.columnMap, function (t, e) {
                            s[e.index] = e
                        }), i.jTool.each(s, function (s, c) {
                            switch (e.supportRemind && "string" == typeof c.remind && "" !== c.remind && (r = 'remind="' + c.remind + '"'), l = "", e.supportSorting && "string" == typeof c.sorting && (c.sorting === e.sortDownText ? (l = 'sorting="' + e.sortDownText + '"', e.sortData[c.key] = e.sortDownText, h.default.setSettings(t, e)) : c.sorting === e.sortUpText ? (l = 'sorting="' + e.sortUpText + '"', e.sortData[c.key] = e.sortUpText, h.default.setSettings(t, e)) : l = 'sorting=""'), a = c.width ? 'width="' + c.width + '"' : "", o = c.align ? 'align="' + c.align + '"' : "", u = i.Base.getVisibleForColumn(c), c.key) {
                                case k.default.key:
                                    n += k.default.getThString(e, u);
                                    break;
                                case m.default.key:
                                    n += m.default.getThString(e, u);
                                    break;
                                default:
                                    n += '<th gm-create="false" th-name="' + c.key + '" th-visible="' + u + '" ' + r + " " + l + " " + a + " " + o + ">" + c.text + "</th>"
                            }
                        }), n += "</thead>", t.html(n + "<tbody></tbody>"), e.supportCheckbox && m.default.bindCheckboxEvent(t);
                        var d = null, g = null, p = (0, i.jTool)("thead[grid-manager-thead]", t), y = (0, i.jTool)("th", p),
                            b = '<div class="table-wrap">\n\t\t\t\t\t\t<div class="table-div" style="height:calc(' + e.height + ' - 40px)"></div>\n\t\t\t\t\t\t<span class="text-dreamland"></span>\n\t\t\t\t\t</div>';
                        t.wrap(b);
                        var j = t.closest(".table-wrap");
                        e.supportConfig && j.append(v.default.html), e.supportAjaxPage && (j.append(f.default.createHtml(e)), f.default.initAjaxPage(t, e)), e.supportExport && j.append(T.default.html);
                        var w = (0, i.jTool)(".config-list", j), M = null, D = 0,
                            C = (0, i.jTool)('<div class="th-wrap"></div>');
                        i.jTool.each(y, function (t, n) {
                            if (M = (0, i.jTool)(n), d = !(!e.supportAutoOrder || "true" !== M.attr("gm-order")), g = !(!e.supportCheckbox || "true" !== M.attr("gm-checkbox")), e.supportConfig && w.append('<li th-name="' + M.attr("th-name") + '">\n\t\t\t\t\t\t\t\t<input type="checkbox"/>\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<span class="fake-checkbox"></span>\n\t\t\t\t\t\t\t\t\t' + M.text() + "\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</li>"), !e.supportDrag || d || g ? C.html('<span class="th-text">' + M.html() + "</span>") : C.html('<span class="th-text drag-action">' + M.html() + "</span>"), e.supportRemind && void 0 !== M.attr("remind") && !d && !g) {
                                var o = (0, i.jTool)(x.default.html);
                                o.find(".ra-title").text(M.text()), o.find(".ra-con").text(M.attr("remind") || M.text()), C.append(o)
                            }
                            var a = M.attr("sorting");
                            if (e.supportSorting && void 0 !== a && !d && !g) {
                                var r = (0, i.jTool)(S.default.html);
                                switch (a) {
                                    case e.sortUpText:
                                        r.addClass("sorting-up");
                                        break;
                                    case e.sortDownText:
                                        r.addClass("sorting-down")
                                }
                                C.append(r)
                            }
                            if (e.supportAdjust && !d && !g) {
                                var l = (0, i.jTool)(c.default.html);
                                t === y.length - 1 && l.hide(), C.append(l)
                            }
                            if (M.html(C), d || g) D = 50; else {
                                var u = i.Base.getTextWidth(M), s = M.width();
                                D = s > u ? s : u
                            }
                            M.removeAttr("width"), M.width(D)
                        }), t.removeClass("GridManager-loading"), t.addClass("GridManager-ready")
                    }
                }, {
                    key: "initVisible", value: function (t) {
                        var e = (0, i.jTool)("tbody tr", t), n = null, o = null, a = "visible",
                            r = h.default.getSettings(t);
                        i.jTool.each(r.columnMap, function (r, l) {
                            n = (0, i.jTool)('th[th-name="' + l.key + '"]', t), a = i.Base.getVisibleForColumn(l), n.attr("th-visible", a), i.jTool.each(e, function (t, e) {
                                o = (0, i.jTool)("td", e).eq(n.index()), o.attr("td-visible", a)
                            })
                        })
                    }
                }]), t
            }();
        e.default = new D
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), r = n(0), i = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "getLanguage", value: function (t) {
                    return t.i18n
                }
            }, {
                key: "getText", value: function (t, e, n) {
                    return t.textConfig[e][n || this.getLanguage(t)] || ""
                }
            }, {
                key: "i18nText", value: function (t, e, n, o, a) {
                    var i = this, l = [];
                    if (3 === arguments.length && "array" === r.jTool.type(arguments[2])) l = arguments[2]; else if (arguments.length > 2) for (var u = 2; u < arguments.length; u++) l.push(arguments[u]);
                    var s = "";
                    try {
                        return s = i.getText(t, e), l && 0 !== l.length ? s = s.replace(/{\d+}/g, function (t) {
                            return l[t.match(/\d+/)] || ""
                        }) : s
                    } catch (n) {
                        return r.Base.outLog("未找到与" + e + "相匹配的" + i.getLanguage(t) + "语言", "warn"), ""
                    }
                }
            }]), t
        }();
        e.default = new i
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), i = n(0), l = n(3), u = o(l), s = n(1), c = o(s), d = n(4), f = o(d), g = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "createHtml", value: function (t) {
                    return '<div class="page-toolbar">\n\t\t\t\t\t\t<div class="refresh-action"><i class="iconfont icon-refresh"></i></div>\n\t\t\t\t\t\t<div class="goto-page">\n\t\t\t\t\t\t\t' + f.default.i18nText(t, "goto-first-text") + '\n\t\t\t\t\t\t\t<input type="text" class="gp-input"/>\n\t\t\t\t\t\t\t' + f.default.i18nText(t, "goto-last-text") + '\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="change-size"><select name="pSizeArea"></select></div>\n\t\t\t\t\t\t<div class="dataTables_info"></div>\n\t\t\t\t\t\t<div class="ajax-page"><ul class="pagination"></ul></div>\n\t\t\t\t\t</div>'
                }
            }, {
                key: "initAjaxPage", value: function (t, e) {
                    var n = e.sizeData;
                    if (!n || 0 === n.length) return void i.Base.outLog("渲染失败：参数[sizeData]配置错误", "error");
                    e.disableCache || this.__configPageForCache(t, e);
                    var o = t.closest(".table-wrap"), a = (0, i.jTool)(".page-toolbar", o),
                        r = (0, i.jTool)('select[name="pSizeArea"]', a);
                    a.hide(), r.html(this.__getPageSizeHtml(n)), this.__bindPageJumpEvent(t), this.__bindSetPageSizeEvent(t)
                }
            }, {
                key: "resetPageData", value: function (t, e, n) {
                    var o = this;
                    if (!isNaN(parseInt(n, 10))) {
                        var a = this.__getPageData(e, n);
                        o.__createPaginationDOM(t, e, a), o.__resetPSize(t, e, a), c.default.setSettings(t, i.jTool.extend(!0, e, {pageData: a}));
                        var r = t.closest(".table-wrap");
                        (0, i.jTool)(".page-toolbar", r).show()
                    }
                }
            }, {
                key: "gotoPage", value: function (t, e, n) {
                    (!n || n < 1) && (n = 1), n > e.pageData.tPage && (n = e.pageData.tPage), e.pageData[e.currentPageKey] = n, e.pageData[e.pageSizeKey] = e.pageData[e.pageSizeKey] || e.pageSize, c.default.setSettings(t, e);
                    var o = i.jTool.extend({}, e.query, e.sortData, e.pageData);
                    e.pagingBefore(o), u.default.refresh(t, function () {
                        e.pagingAfter(o)
                    })
                }
            }, {
                key: "__createPaginationDOM", value: function (t, e, n) {
                    var o = t.closest(".table-wrap"), a = (0, i.jTool)(".page-toolbar", o);
                    (0, i.jTool)(".pagination", a).html(this.__joinPagination(e, n))
                }
            }, {
                key: "__joinPagination", value: function (t, e) {
                    var n = Number(e[t.currentPageKey] || 0), o = Number(e.tPage || 0), a = "", r = "",
                        i = "first-page", l = "previous-page";
                    1 === n && (i += " disabled", l += " disabled"), a += '<li c-page="1" class="' + i + '">\n\t\t\t\t\t' + f.default.i18nText(t, "first-page") + '\n\t\t\t\t</li>\n\t\t\t\t<li c-page="' + (n - 1) + '" class="' + l + '">\n\t\t\t\t\t' + f.default.i18nText(t, "previous-page") + "\n\t\t\t\t</li>";
                    var u = 1, s = o;
                    for (n > 4 && (a += '<li c-page="1">\n\t\t\t\t\t\t1\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="disabled">\n\t\t\t\t\t\t...\n\t\t\t\t\t</li>', u = n - 2), o - n > 4 && (s = n + 2, r += '<li class="disabled">\n\t\t\t\t\t\t...\n\t\t\t\t\t</li>\n\t\t\t\t\t<li c-page="' + o + '">\n\t\t\t\t\t\t' + o + "\n\t\t\t\t\t</li>"), u; u <= s; u++) a += u !== n ? '<li c-page="' + u + '">' + u + "</li>" : '<li class="active">' + n + "</li>";
                    a += r;
                    var c = "next-page", d = "last-page";
                    return n >= o && (c += " disabled", d += " disabled"), a += '<li c-page="' + (n + 1) + '" class="' + c + '">\n\t\t\t\t\t' + f.default.i18nText(t, "next-page") + '\n\t\t\t\t</li>\n\t\t\t\t<li c-page="' + o + '" class="' + d + '">\n\t\t\t\t\t' + f.default.i18nText(t, "last-page") + "\n\t\t\t\t</li>"
                }
            }, {
                key: "__getPageSizeHtml", value: function (t) {
                    var e = "";
                    return i.jTool.each(t, function (t, n) {
                        e += '<option value="' + n + '">' + n + "</option>"
                    }), e
                }
            }, {
                key: "__bindPageJumpEvent", value: function (t) {
                    var e = t.closest(".table-wrap"), n = (0, i.jTool)(".page-toolbar", e);
                    this.__bindPageClick(t, n), this.__bindInputEvent(t, n), this.__bindRefreshEvent(n)
                }
            }, {
                key: "__bindPageClick", value: function (t, e) {
                    var n = this;
                    e.off("click", "li"), e.on("click", "li", function () {
                        var e = (0, i.jTool)(this), o = e.attr("c-page");
                        if (!o || !Number(o) || e.hasClass("disabled")) return i.Base.outLog("指定页码无法跳转,已停止。原因:1、可能是当前页已处于选中状态; 2、所指向的页不存在", "info"), !1;
                        o = window.parseInt(o), n.gotoPage(t, c.default.getSettings(t), o)
                    })
                }
            }, {
                key: "__bindInputEvent", value: function (t, e) {
                    var n = this, o = (0, i.jTool)(".gp-input", e);
                    o.unbind("keyup"), o.bind("keyup", function () {
                        if (13 === event.which) {
                            var e = parseInt(this.value, 10);
                            n.gotoPage(t, c.default.getSettings(t), e), this.value = ""
                        }
                    })
                }
            }, {
                key: "__bindRefreshEvent", value: function (t) {
                    var e = (0, i.jTool)(".refresh-action", t);
                    e.unbind("click"), e.bind("click", function (t) {
                        var e = (0, i.jTool)(t.target).closest(".table-wrap"),
                            n = (0, i.jTool)("table[grid-manager]", e);
                        u.default.refresh(n)
                    })
                }
            }, {
                key: "__bindSetPageSizeEvent", value: function (t) {
                    var e = t.closest(".table-wrap"), n = (0, i.jTool)(".page-toolbar", e),
                        o = (0, i.jTool)("select[name=pSizeArea]", n);
                    if (!o || 0 === o.length) return i.Base.outLog("未找到单页显示数切换区域，停止该事件绑定", "info"), !1;
                    o.unbind("change"), o.bind("change", function (e) {
                        var n = (0, i.jTool)(e.target), o = n.closest(".table-wrap"),
                            a = (0, i.jTool)("table[grid-manager]", o), r = c.default.getSettings(t);
                        r.pageData = {}, r.pageData[r.currentPageKey] = 1, r.pageData[r.pageSizeKey] = window.parseInt(n.val()), c.default.saveUserMemory(a, r), c.default.setSettings(t, r);
                        var l = i.jTool.extend({}, r.query, r.sortData, r.pageData);
                        r.pagingBefore(l), u.default.refresh(a, function () {
                            r.pagingAfter(l)
                        })
                    })
                }
            }, {
                key: "__resetPSize", value: function (t, e, n) {
                    var o = t.closest(".table-wrap"), a = (0, i.jTool)(".page-toolbar", o),
                        r = (0, i.jTool)('select[name="pSizeArea"]', a), l = (0, i.jTool)(".dataTables_info", a);
                    if (!r || 0 === r.length) return !1;
                    var u = 1 === n[e.currentPageKey] ? 1 : (n[e.currentPageKey] - 1) * n[e.pageSizeKey] + 1,
                        s = n[e.currentPageKey] * n[e.pageSizeKey], c = n.tSize,
                        d = f.default.i18nText(e, "dataTablesInfo", [u, s, c]);
                    return r.val(n[e.pageSizeKey] || 10), l.html(d), r.show(), !0
                }
            }, {
                key: "__getPageData", value: function (t, e) {
                    var n = t.pageData[t.pageSizeKey] || t.pageSize, o = Math.ceil(e / n),
                        a = t.pageData[t.currentPageKey] || 1, r = {};
                    return r.tPage = o, r[t.currentPageKey] = a > o ? 1 : a, r[t.pageSizeKey] = n, r.tSize = e, r
                }
            }, {
                key: "__configPageForCache", value: function (t, e) {
                    var n = c.default.getUserMemory(t), o = n.cache, a = null;
                    a = o && o.page && o.page[e.pageSizeKey] ? o.page[e.pageSizeKey] : e.pageSize || 10;
                    var r = {};
                    r[e.pageSizeKey] = a, r[e.currentPageKey] = 1, i.jTool.extend(e, {pageData: r}), c.default.setSettings(t, e)
                }
            }, {
                key: "destroy", value: function (t) {
                    var e = t.closest(".table-wrap"), n = (0, i.jTool)(".page-toolbar", e),
                        o = (0, i.jTool)(".gp-input", n), a = (0, i.jTool)(".refresh-action", n),
                        r = (0, i.jTool)("select[name=pSizeArea]", n);
                    n.off("click", "li"), o.unbind("keyup"), a.unbind("click"), r.unbind("change")
                }
            }]), t
        }();
        e.default = new g
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), i = n(0), l = n(4), u = o(l), s = n(1), c = o(s), d = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "getCheckedTr", value: function (t) {
                    return t.get(0).querySelectorAll('tbody tr[checked="true"]')
                }
            }, {
                key: "getCheckedData", value: function (t) {
                    return c.default.getRowData(t, this.getCheckedTr(t))
                }
            }, {
                key: "getThString", value: function (t, e) {
                    return '<th th-name="' + this.key + '" th-visible="' + e + '" gm-checkbox="true" gm-create="true">\n\t\t\t\t\t\t\t\t<input type="checkbox"/>\n\t\t\t\t\t\t\t\t<span style="display: none">\n\t\t\t\t\t\t\t\t\t' + u.default.i18nText(t, "checkall-text") + "\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</th>"
                }
            }, {
                key: "getColumn", value: function (t) {
                    return {
                        key: this.key,
                        text: u.default.getText(t, "checkall-text"),
                        isAutoCreate: !0,
                        isShow: !0,
                        width: "50px",
                        align: "center",
                        template: function (t) {
                            return '<td gm-checkbox="true" gm-create="true"><input type="checkbox" ' + (t ? 'checked="checked"' : "") + "/></td>"
                        }
                    }
                }
            }, {
                key: "bindCheckboxEvent", value: function (t) {
                    var e = this, n = c.default.getSettings(t);
                    t.off("click", 'th[gm-checkbox="true"] input[type="checkbox"]'), t.on("click", 'th[gm-checkbox="true"] input[type="checkbox"]', function () {
                        n.checkedBefore(e.getCheckedData(t)), n.checkedAllBefore(e.getCheckedData(t));
                        var o = e.resetData(t, this.checked, !0);
                        e.resetDOM(t, o), n.checkedAfter(e.getCheckedData(t)), n.checkedAllAfter(e.getCheckedData(t))
                    }), t.off("click", 'td[gm-checkbox="true"] input[type="checkbox"]'), t.on("click", 'td[gm-checkbox="true"] input[type="checkbox"]', function () {
                        n.checkedBefore(e.getCheckedData(t));
                        var o = e.resetData(t, this.checked, !1, (0, i.jTool)(this).closest("tr").attr("cache-key"));
                        e.resetDOM(t, o), n.checkedAfter(e.getCheckedData(t))
                    })
                }
            }, {
                key: "resetData", value: function (t, e, n, o) {
                    var a = this, r = c.default.getTableData(t);
                    return n && !o && r.forEach(function (t) {
                        t[a.key] = e
                    }), !n && o && (r[o][this.key] = e), c.default.setTableData(t, r), r
                }
            }, {
                key: "resetDOM", value: function (t, e) {
                    var n = this, o = e && e.length > 0;
                    e && e.forEach(function (e, a) {
                        var r = (0, i.jTool)('tbody tr[cache-key="' + a + '"]', t),
                            l = (0, i.jTool)('td[gm-checkbox="true"] input[type="checkbox"]', r);
                        r.attr("checked", e[n.key]), l.prop("checked", e[n.key]), e[n.key] || (o = !1)
                    }), (0, i.jTool)('thead tr th[gm-checkbox="true"] input[type="checkbox"]', t).prop("checked", o)
                }
            }, {
                key: "destroy", value: function (t) {
                    t.off("click", 'th[gm-checkbox="true"] input[type="checkbox"]'), t.off("click", 'td[gm-checkbox="true"] input[type="checkbox"]')
                }
            }, {
                key: "key", get: function () {
                    return "gm_checkbox"
                }
            }]), t
        }();
        e.default = new d
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), i = n(0), l = n(1), u = o(l), s = n(2), c = o(s), d = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "init", value: function (t) {
                    this.__bindConfigEvent(t)
                }
            }, {
                key: "__bindConfigEvent", value: function (t) {
                    var e = this, n = t.closest("div.table-wrap"), o = (0, i.jTool)(".config-action", n);
                    o.unbind("click"), o.bind("click", function () {
                        var t = (0, i.jTool)(this), n = t.closest(".table-wrap");
                        e.toggle(n)
                    }), (0, i.jTool)(".config-list li", n).unbind("click"), (0, i.jTool)(".config-list li", n).bind("click", function () {
                        var t = (0, i.jTool)(this), e = t.attr("th-name"), n = t.find('input[type="checkbox"]'),
                            o = t.closest(".table-wrap"), a = (0, i.jTool)(".table-div", o),
                            r = (0, i.jTool)("[grid-manager]", o), l = u.default.getSettings(r),
                            s = (0, i.jTool)('thead[grid-manager-thead] th[th-name="' + e + '"]', r);
                        if (t.hasClass("no-click")) return !1;
                        t.closest(".config-list").find(".no-click").removeClass("no-click");
                        var d = !n.prop("checked");
                        a.addClass("config-editing"), i.Base.setAreVisible(s, d, function () {
                            a.removeClass("config-editing")
                        });
                        var f = (0, i.jTool)('.config-area input[type="checkbox"]:checked', o);
                        1 === f.length && f.parent().addClass("no-click"), l.supportAdjust && c.default.resetAdjust(r), (0, i.jTool)(".sa-inner", o).width("100%");
                        var g = (0, i.jTool)('thead[grid-manager-thead] th[th-visible="visible"]', r);
                        i.jTool.each(g, function (t, e) {
                            "true" === e.getAttribute("gm-create") ? e.style.width = "50px" : e.style.width = "auto"
                        }), i.jTool.each(g, function (t, e) {
                            var n = i.Base.getTextWidth(e), o = (0, i.jTool)(e).width();
                            o < n ? (0, i.jTool)(e).width(n) : (0, i.jTool)(e).width(o)
                        }), u.default.update(r, l);
                        var h = (0, i.jTool)("thead[" + i.Base.getSetTopAttr() + "]", r);
                        1 === h.length && (h.remove(), a.trigger("scroll"))
                    })
                }
            }, {
                key: "toggle", value: function (t) {
                    var e = (0, i.jTool)("table[grid-manager]", t), n = u.default.getSettings(e),
                        o = (0, i.jTool)(".config-area", t);
                    if ("block" === o.css("display")) return o.hide(), !1;
                    var a = null, r = null, l = 0;
                    i.jTool.each(n.columnMap, function (t, e) {
                        if (a = (0, i.jTool)('li[th-name="' + e.key + '"]', o), r = (0, i.jTool)('input[type="checkbox"]', a), e.isShow) return a.addClass("checked-li"), r.prop("checked", !0), void l++;
                        a.removeClass("checked-li"), r.prop("checked", !1)
                    });
                    var s = (0, i.jTool)(".checked-li", o);
                    1 === l ? s.addClass("no-click") : s.removeClass("no-click"), o.show()
                }
            }, {
                key: "destroy", value: function (t) {
                    var e = t.closest("div.table-wrap");
                    (0, i.jTool)(".config-action", e).unbind("click"), (0, i.jTool)(".config-list li", e).unbind("click")
                }
            }, {
                key: "html", get: function () {
                    return '<div class="config-area">\n\t\t\t\t\t\t<span class="config-action">\n\t\t\t\t\t\t\t<i class="iconfont icon-close"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<ul class="config-list"></ul>\n\t\t\t\t\t</div>'
                }
            }]), t
        }();
        e.default = new d
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), i = n(0), l = n(3), u = o(l), s = n(1), c = o(s), d = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "getHref", value: function (t) {
                    return this.URI + window.btoa(unescape(encodeURIComponent(t || "")))
                }
            }, {
                key: "getDownload", value: function (t, e) {
                    return e || (e = c.default.getSettings(t).gridManagerName), e + ".xls"
                }
            }, {
                key: "createExportHTML", value: function (t, e) {
                    return '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">\n\t\t\t\t\t\t\t\t<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>\n\t\t\t\t\t\t\t\t<body>\n\t\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t' + t + "\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t" + e + "\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</body>\n\t\t\t\t\t\t\t</html>"
                }
            }, {
                key: "__exportGridToXls", value: function (t, e, n) {
                    var o = (0, i.$)("#gm-export-action");
                    if (0 === o.length) return u.default.outLog("导出失败，请查看配置项:supportExport是否配置正确", "error"), !1;
                    var a = "", r = "",
                        l = (0, i.$)('thead[grid-manager-thead] th[th-visible="visible"][gm-create="false"]', t),
                        s = null, c = null;
                    s = n ? (0, i.$)('tbody tr[checked="true"]', t) : (0, i.$)("tbody tr", t), i.$.each(l, function (t, e) {
                        a += "<th>" + e.getElementsByClassName("th-text")[0].textContent + "</th>"
                    }), i.$.each(s, function (t, e) {
                        c = (0, i.$)('td[gm-create="false"][td-visible="visible"]', e), r += "<tr>", i.$.each(c, function (t, e) {
                            r += "<td>" + e.textContent + "</td>"
                        }), r += "</tr>"
                    });
                    var d = this.createExportHTML(a, r);
                    return o.prop("href", this.getHref(d)), o.prop("download", this.getDownload(t, e)), o.get(0).click(), !0
                }
            }, {
                key: "html", get: function () {
                    return '<a href="" download="" id="gm-export-action"></a>'
                }
            }, {
                key: "URI", get: function () {
                    return "data:application/vnd.ms-excel;base64,"
                }
            }]), t
        }();
        e.default = new d
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }();
        n(22);
        var i = n(0), l = n(2), u = o(l), s = n(5), c = o(s), d = n(1), f = o(d), g = n(6), h = o(g), p = n(7),
            v = o(p), y = n(3), m = o(y), b = n(16), T = o(b), j = n(8), k = o(j), w = n(10), x = o(w), M = n(12),
            S = o(M), D = n(18), C = o(D), _ = n(13), O = o(_), E = n(17), L = o(E), A = function () {
                function t() {
                    a(this, t)
                }

                return r(t, [{
                    key: "init", value: function (t, e, n) {
                        var o = (0, i.jTool)(t);
                        if (!e || i.jTool.isEmptyObject(e)) return void i.Base.outLog("init()方法中未发现有效的参数", "error");
                        if (!e.columnData || 0 === e.columnData.length) return void i.Base.outLog("请对参数columnData进行有效的配置", "error");
                        e.ajax_url && (i.Base.outLog("ajax_url在v2.6.0以后将被废弃, 请使用ajax_data替代", "warn"), e.ajax_data = e.ajax_url), "string" != typeof e.gridManagerName || "" === e.gridManagerName.trim() ? e.gridManagerName = i.Base.getKey(o) : o.attr("grid-manager", e.gridManagerName), f.default.cleanTableCacheForVersion();
                        var a = f.default.initSettings(o, e);
                        return "" === a.gridManagerName.trim() ? void i.Base.outLog("请在html标签中为属性[grid-manager]赋值或在配置项中配置gridManagerName", "error") : o.hasClass("GridManager-ready") || o.hasClass("GridManager-loading") ? void i.Base.outLog("渲染失败,可能该表格已经渲染或正在渲染", "error") : (o.addClass("GridManager-loading"), this.initTable(o, a), void 0 !== o.attr("grid-manager-cache-error") && window.setTimeout(function () {
                            f.default.saveUserMemory(o, a), o.removeAttr("grid-manager-cache-error")
                        }, 1e3), void("function" == typeof n && n(a.query)))
                    }
                }, {
                    key: "initTable", value: function (t, e) {
                        m.default.createDOM(t), e.supportAdjust && u.default.resetAdjust(t), e.supportAdjust && u.default.init(t), e.supportDrag && T.default.init(t), e.supportSorting && O.default.init(t), e.supportRemind && S.default.init(t), e.supportConfig && v.default.init(t), L.default.onTbodyHover(t), C.default.init(t), e.supportMenu && x.default.init(t), e.firstLoading ? m.default.refresh(t) : m.default.insertEmptyTemplate(t, e)
                    }
                }], [{
                    key: "get", value: function (t) {
                        return f.default.getSettings((0, i.jTool)(t))
                    }
                }, {
                    key: "setScope", value: function (t, e) {
                        return f.default.setScope((0, i.jTool)(t), e)
                    }
                }, {
                    key: "getLocalStorage", value: function (t) {
                        return f.default.getUserMemory((0, i.jTool)(t))
                    }
                }, {
                    key: "clear", value: function (t) {
                        return f.default.delUserMemory((0, i.jTool)(t), "通过clear()方法清除")
                    }
                }, {
                    key: "getRowData", value: function (t, e) {
                        return f.default.getRowData((0, i.jTool)(t), e)
                    }
                }, {
                    key: "setSort", value: function (t, e, n, o) {
                        O.default.__setSort((0, i.jTool)(t), e, n, o)
                    }
                }, {
                    key: "showTh", value: function (t, e) {
                        i.Base.setAreVisible((0, i.jTool)(e), !0), f.default.update((0, i.jTool)(t))
                    }
                }, {
                    key: "hideTh", value: function (t, e) {
                        i.Base.setAreVisible((0, i.jTool)(e), !1), f.default.update((0, i.jTool)(t))
                    }
                }, {
                    key: "exportGridToXls", value: function (t, e, n) {
                        return k.default.__exportGridToXls((0, i.jTool)(t), e, n)
                    }
                }, {
                    key: "setQuery", value: function (t, e, n, o) {
                        var a = (0, i.jTool)(t), r = f.default.getSettings(a);
                        "boolean" != typeof n && (o = n, n = !0), i.jTool.extend(r, {query: e}), n && (r.pageData.cPage = 1), f.default.setSettings(a, r), m.default.refresh(a, o)
                    }
                }, {
                    key: "setAjaxData", value: function (t, e, n) {
                        var o = (0, i.jTool)(t), a = f.default.getSettings(o);
                        i.jTool.extend(a, {ajax_data: e}), f.default.setSettings(o, a), m.default.refresh(o, n)
                    }
                }, {
                    key: "refreshGrid", value: function (t, e, n) {
                        var o = (0, i.jTool)(t), a = f.default.getSettings(o);
                        "boolean" != typeof e && (n = e, e = !1), e && (a.pageData.cPage = 1, f.default.setSettings(o, a)), m.default.refresh(o, n)
                    }
                }, {
                    key: "getCheckedTr", value: function (t) {
                        return h.default.getCheckedTr((0, i.jTool)(t))
                    }
                }, {
                    key: "getCheckedData", value: function (t) {
                        return h.default.getCheckedData((0, i.jTool)(t))
                    }
                }, {
                    key: "cleanData", value: function (t) {
                        return m.default.cleanData((0, i.jTool)(t))
                    }
                }, {
                    key: "destroy", value: function (t) {
                        var e = (0, i.jTool)(t);
                        u.default.destroy(e), c.default.destroy(e), h.default.destroy(e), v.default.destroy(e), T.default.destroy(e), L.default.destroy(e), x.default.destroy(e), S.default.destroy(e), C.default.destroy(e), O.default.destroy(e), f.default.setSettings(e, {});
                        var n = e.closest(".table-wrap");
                        e.removeClass("GridManager-ready"), e.html(""), n.after(e), n.remove()
                    }
                }, {
                    key: "version", get: function () {
                        return f.default.getVersion()
                    }
                }]), t
            }();
        e.default = A
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }

                return function (e, n, o) {
                    return n && t(e.prototype, n), o && t(e, o), e
                }
            }(), i = n(0), l = n(1), u = o(l), s = n(4), c = o(s), d = n(8), f = o(d), g = n(5), h = o(g), p = n(7),
            v = o(p), y = function () {
                function t() {
                    a(this, t)
                }

                return r(t, [{
                    key: "init", value: function (t) {
                        var e = u.default.getSettings(t);
                        this.createMenuDOM(e), this.bindRightMenuEvent(t, e)
                    }
                }, {
                    key: "createMenuDOM", value: function (t) {
                        var e = '<div class="grid-menu" ' + this.keyName + '="' + t.gridManagerName + '">';
                        t.supportAjaxPage && (e += '<span grid-action="refresh-page" refresh-type="previous">\n\t\t\t\t\t\t\t' + c.default.i18nText(t, "previous-page") + '\n\t\t\t\t\t\t\t<i class="iconfont icon-up"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span grid-action="refresh-page" refresh-type="next">\n\t\t\t\t\t\t\t' + c.default.i18nText(t, "next-page") + '\n\t\t\t\t\t\t\t<i class="iconfont icon-down"></i>\n\t\t\t\t\t\t</span>'), e += '<span grid-action="refresh-page" refresh-type="refresh">\n\t\t\t\t\t\t' + c.default.i18nText(t, "refresh") + '\n\t\t\t\t\t\t<i class="iconfont icon-refresh"></i>\n\t\t\t\t\t</span>', t.supportExport && (e += '<span class="grid-line"></span>\n\t\t\t\t\t\t<span grid-action="export-excel" only-checked="false">\n\t\t\t\t\t\t\t' + c.default.i18nText(t, "save-as-excel") + '\n\t\t\t\t\t\t\t<i class="iconfont icon-xls"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span grid-action="export-excel" only-checked="true">\n\t\t\t\t\t\t\t' + c.default.i18nText(t, "save-as-excel-for-checked") + '\n\t\t\t\t\t\t\t<i class="iconfont icon-xls"></i>\n\t\t\t\t\t\t</span>'), t.supportConfig && (e += '<span class="grid-line"></span>\n\t\t\t\t\t\t<span grid-action="config-grid">\n\t\t\t\t\t\t\t' + c.default.i18nText(t, "config-grid") + '\n\t\t\t\t\t\t\t<i class="iconfont icon-config"></i>\n\t\t\t\t\t\t</span>'), e += "</div>", (0, i.jTool)("body").append(e)
                    }
                }, {
                    key: "bindRightMenuEvent", value: function (t, e) {
                        var n = this, o = t.closest(".table-wrap"),
                            a = (0, i.jTool)(".grid-menu[" + n.keyName + '="' + e.gridManagerName + '"]'),
                            r = (0, i.jTool)("body");
                        o.unbind("contextmenu"), o.bind("contextmenu", function (t) {
                            if (t.preventDefault(), t.stopPropagation(), "TBODY" !== t.target.nodeName && 0 === (0, i.jTool)(t.target).closest("tbody").length) return void console.log("contextmenu    !TBODY");
                            var l = (0, i.jTool)('[grid-action="export-excel"][only-checked="true"]');
                            0 === (0, i.jTool)('tbody tr[checked="true"]', (0, i.jTool)('table[grid-manager="' + e.gridManagerName + '"]')).length ? l.addClass("disabled") : l.removeClass("disabled");
                            var u = a.width(), s = a.height(), c = document.documentElement.offsetHeight,
                                d = document.documentElement.offsetWidth, f = c < t.clientY + s ? t.clientY - s : t.clientY,
                                g = d < t.clientX + u ? t.clientX - u : t.clientX;
                            a.css({
                                top: f + o.get(0).scrollTop + (document.body.scrollTop || document.documentElement.scrollTop),
                                left: g + o.get(0).scrollLeft + (document.body.scrollLeft || document.documentElement.scrollLeft)
                            }), (0, i.jTool)(".grid-menu[" + n.keyName + "]").hide(), a.show(), r.off("mousedown.gridMenu"), r.on("mousedown.gridMenu", function (t) {
                                var e = (0, i.jTool)(t.target);
                                e.hasClass(".grid-menu") || 1 === e.closest(".grid-menu").length || (r.off("mousedown.gridMenu"), a.hide())
                            })
                        });
                        var l = (0, i.jTool)('[grid-action="refresh-page"]');
                        l.unbind("click"), l.bind("click", function (t) {
                            if (n.isDisabled(this, t)) return !1;
                            var e = (0, i.jTool)(this).closest(".grid-menu"),
                                o = (0, i.jTool)('table[grid-manager="' + e.attr(n.keyName) + '"]'),
                                a = this.getAttribute("refresh-type"), l = u.default.getSettings(o),
                                s = l.pageData[l.currentPageKey];
                            "previous" === a && s > 1 ? s -= 1 : "next" === a && s < l.pageData.tPage ? s += 1 : "refresh" === a && (s = s), h.default.gotoPage(o, l, s), r.off("mousedown.gridMenu"), e.hide()
                        }), e.supportExport && function () {
                            var t = (0, i.jTool)('[grid-action="export-excel"]');
                            t.unbind("click"), t.bind("click", function (t) {
                                if (n.isDisabled(this, t)) return !1;
                                var e = (0, i.jTool)(this).closest(".grid-menu"),
                                    o = (0, i.jTool)('table[grid-manager="' + e.attr(n.keyName) + '"]'), a = !1;
                                "true" === this.getAttribute("only-checked") && (a = !0), f.default.__exportGridToXls(o, void 0, a), r.off("mousedown.gridMenu"), e.hide()
                            })
                        }(), e.supportConfig && function () {
                            var t = (0, i.jTool)('[grid-action="config-grid"]');
                            t.unbind("click"), t.bind("click", function (t) {
                                if (n.isDisabled(this, t)) return !1;
                                var e = (0, i.jTool)(this).closest(".grid-menu"),
                                    o = (0, i.jTool)('table[grid-manager="' + e.attr(n.keyName) + '"]');
                                v.default.toggle(o.closest(".table-wrap")), r.off("mousedown.gridMenu"), e.hide()
                            })
                        }()
                    }
                }, {
                    key: "updateMenuPageStatus", value: function (t, e) {
                        var n = (0, i.jTool)(".grid-menu[" + this.keyName + '="' + t + '"]');
                        if (n && 0 !== n.length) {
                            var o = (0, i.jTool)('[refresh-type="previous"]', n),
                                a = (0, i.jTool)('[refresh-type="next"]', n), r = e.pageData[e.currentPageKey],
                                l = e.pageData.tPage;
                            1 === r || 0 === l ? o.addClass("disabled") : o.removeClass("disabled"), r === l || 0 === l ? a.addClass("disabled") : a.removeClass("disabled")
                        }
                    }
                }, {
                    key: "isDisabled", value: function (t, e) {
                        return !!(0, i.jTool)(t).hasClass("disabled") && (e.stopPropagation(), e.preventDefault(), !0)
                    }
                }, {
                    key: "destroy", value: function (t) {
                        var e = t.closest(".table-wrap"), n = u.default.getSettings(t),
                            o = (0, i.jTool)(".grid-menu[" + this.keyName + '="' + n.gridManagerName + '"]'),
                            a = (0, i.jTool)("body");
                        e.unbind("contextmenu"), (0, i.jTool)('[grid-action="refresh-page"]').unbind("click"), (0, i.jTool)('[grid-action="export-excel"]').unbind("click"), (0, i.jTool)('[grid-action="config-grid"]').unbind("click"), a.off("mousedown.gridMenu"), o.remove()
                    }
                }, {
                    key: "keyName", get: function () {
                        return "grid-master"
                    }
                }]), t
            }();
        e.default = new y
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), r = n(4), i = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(r), l = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "getThString", value: function (t, e) {
                    return '<th th-name="' + this.key + '" th-visible="' + e + '" gm-order="true" gm-create="true">' + i.default.i18nText(t, "order-text") + "</th>"
                }
            }, {
                key: "getColumn", value: function (t) {
                    return {
                        key: this.key,
                        text: i.default.getText(t, "order-text"),
                        isAutoCreate: !0,
                        isShow: !0,
                        width: "50px",
                        align: "center",
                        template: function (t) {
                            return '<td gm-order="true" gm-create="true">' + t + "</td>"
                        }
                    }
                }
            }, {
                key: "key", get: function () {
                    return "gm_order"
                }
            }]), t
        }();
        e.default = new l
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), r = n(0), i = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "init", value: function (t) {
                    this.__bindRemindEvent(t)
                }
            }, {
                key: "__bindRemindEvent", value: function (t) {
                    var e = (0, r.$)(".remind-action", t);
                    e.unbind("mouseenter"), e.bind("mouseenter", function () {
                        var t = (0, r.$)(this).find(".ra-area"), e = (0, r.$)(this).closest(".table-div");
                        t.show();
                        var n = e.get(0).offsetWidth - ((0, r.$)(this).offset().left - e.offset().left) > t.get(0).offsetWidth;
                        t.css({left: n ? "0px" : "auto", right: n ? "auto" : "0px"})
                    }), e.unbind("mouseleave"), e.bind("mouseleave", function () {
                        (0, r.$)(this).find(".ra-area").hide()
                    })
                }
            }, {
                key: "destroy", value: function (t) {
                    var e = (0, r.$)(".remind-action", t);
                    e.unbind("mouseenter"), e.unbind("mouseleave")
                }
            }, {
                key: "html", get: function () {
                    return '<div class="remind-action">\n\t\t\t\t\t\t<i class="ra-help iconfont icon-help"></i>\n\t\t\t\t\t\t<div class="ra-area">\n\t\t\t\t\t\t\t<span class="ra-title"></span>\n\t\t\t\t\t\t\t<span class="ra-con"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>'
                }
            }]), t
        }();
        e.default = new i
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), i = n(0), l = n(3), u = o(l), s = n(1), c = o(s), d = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "init", value: function (t) {
                    this.__bindSortingEvent(t)
                }
            }, {
                key: "__setSort", value: function (t, e, n, o) {
                    var a = this, r = c.default.getSettings(t);
                    if (!e || "object" !== i.$.type(e) || i.$.isEmptyObject(e)) return i.Base.outLog("排序数据不可用", "warn"), !1;
                    i.$.extend(r.sortData, e), c.default.setSettings(t, r), "function" != typeof n && (n = function () {
                    }), void 0 === o && (o = !0), o ? u.default.refresh(t, function (e) {
                        a.updateSortStyle(t), n(e)
                    }) : n()
                }
            }, {
                key: "__bindSortingEvent", value: function (t) {
                    var e = this;
                    t.off("mouseup", ".sorting-action"), t.on("mouseup", ".sorting-action", function () {
                        var t = (0, i.$)(this), n = t.closest("th"), o = n.closest("table"), a = n.attr("th-name"),
                            r = c.default.getSettings(o);
                        if (!a || "" === i.$.trim(a)) return i.Base.outLog("排序必要的参数丢失", "error"), !1;
                        var l = r.sortData[n.attr("th-name")];
                        r.isCombSorting || (r.sortData = {}), r.sortData[n.attr("th-name")] = l === r.sortDownText ? r.sortUpText : r.sortDownText, c.default.setSettings(o, r);
                        var s = i.$.extend({}, r.query, r.sortData, r.pageData);
                        r.sortingBefore(s), u.default.refresh(o, function () {
                            e.updateSortStyle(o), r.sortingAfter(s, n)
                        })
                    })
                }
            }, {
                key: "updateSortStyle", value: function (t) {
                    var e = c.default.getSettings(t), n = null, o = null;
                    i.$.each((0, i.$)(".sorting-action", t), function (t, e) {
                        (0, i.$)(e).removeClass("sorting-up sorting-down"), (0, i.$)(e).closest("th").attr("sorting", "")
                    }), i.$.each(e.sortData, function (a, r) {
                        n = (0, i.$)('thead th[th-name="' + a + '"]', t), o = (0, i.$)(".sorting-action", n), r === e.sortUpText && (o.addClass("sorting-up"), o.removeClass("sorting-down"), n.attr("sorting", e.sortUpText)), r === e.sortDownText && (o.addClass("sorting-down"), o.removeClass("sorting-up"), n.attr("sorting", e.sortDownText))
                    })
                }
            }, {
                key: "destroy", value: function (t) {
                    t.off("mouseup", ".sorting-action")
                }
            }, {
                key: "html", get: function () {
                    return '<div class="sorting-action">\n\t\t\t\t\t\t<i class="sa-icon sa-up iconfont icon-up"></i>\n\t\t\t\t\t\t<i class="sa-icon sa-down iconfont icon-down"></i>\n\t\t\t\t\t</div>'
                }
            }]), t
        }();
        e.default = new d
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.GM_VERSION = "2.6.0", e.GM_PUBLISH_METHOD_LIST = ["init", "get", "version", "getLocalStorage", "clear", "getRowData", "setSort", "showTh", "hideTh", "exportGridToXls", "setQuery", "setAjaxData", "refreshGrid", "getCheckedTr", "getCheckedData", "cleanData", "destroy"]
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.publishMethodArray = e.PublishMethod = void 0;
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), r = n(9), i = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(r), l = n(14), u = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "init", value: function (t, e, n) {
                    return (new i.default).init(t, e, n)
                }
            }, {
                key: "version", value: function () {
                    return i.default.version
                }
            }, {
                key: "get", value: function (t) {
                    return i.default.get(t)
                }
            }, {
                key: "getLocalStorage", value: function (t) {
                    return i.default.getLocalStorage(t)
                }
            }, {
                key: "clear", value: function (t) {
                    return i.default.clear(t)
                }
            }, {
                key: "getRowData", value: function (t, e) {
                    return i.default.getRowData(t, e)
                }
            }, {
                key: "setSort", value: function (t, e, n, o) {
                    i.default.setSort(t, e, n, o)
                }
            }, {
                key: "showTh", value: function (t, e) {
                    i.default.showTh(t, e)
                }
            }, {
                key: "hideTh", value: function (t, e) {
                    i.default.hideTh(t, e)
                }
            }, {
                key: "exportGridToXls", value: function (t, e, n) {
                    return i.default.exportGridToXls(t, e, n)
                }
            }, {
                key: "setQuery", value: function (t, e, n, o) {
                    i.default.setQuery(t, e, n, o)
                }
            }, {
                key: "setAjaxData", value: function (t, e, n) {
                    i.default.setAjaxData(t, e, n)
                }
            }, {
                key: "refreshGrid", value: function (t, e, n) {
                    i.default.refreshGrid(t, e, n)
                }
            }, {
                key: "getCheckedTr", value: function (t) {
                    return i.default.getCheckedTr(t)
                }
            }, {
                key: "getCheckedData", value: function (t) {
                    return i.default.getCheckedData(t)
                }
            }, {
                key: "cleanData", value: function (t) {
                    return i.default.cleanData(t)
                }
            }, {
                key: "destroy", value: function (t) {
                    return i.default.destroy(t)
                }
            }]), t
        }(), s = l.GM_PUBLISH_METHOD_LIST, c = new u;
        e.PublishMethod = c, e.publishMethodArray = s
    }, function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), i = n(0), l = n(2), u = o(l), s = n(1), c = o(s), d = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "init", value: function (t) {
                    this.__bindDragEvent(t)
                }
            }, {
                key: "__bindDragEvent", value: function (t) {
                    var e = this;
                    t.off("mousedown", ".drag-action"), t.on("mousedown", ".drag-action", function (n) {
                        var o = (0, i.jTool)("body"), a = c.default.getSettings(t),
                            r = (0, i.jTool)(this).closest("th"), l = null, s = null, d = r.parent(),
                            f = (0, i.jTool)('th[th-visible="visible"]', d), g = d.closest("table"),
                            h = g.closest(".table-div"), p = g.closest(".table-wrap"), v = i.Base.getColTd(r);
                        a.dragBefore(n), o.addClass("no-select-text"), i.Base.updateInteractive(g, "Drag"), r.addClass("drag-ongoing opacityChange"), v.addClass("drag-ongoing opacityChange"), p.append('<div class="dreamland-div"></div>');
                        var y = (0, i.jTool)(".dreamland-div", p);
                        y.get(0).innerHTML = '<table class="dreamland-table ' + g.attr("class") + '"></table>';
                        var m = "", b = null, T = null;
                        i.jTool.each(v, function (t, e) {
                            T = e.cloneNode(!0), T.style.height = e.offsetHeight + "px", b = (0, i.jTool)(e).closest("tr").clone(), m += b.html(T.outerHTML).get(0).outerHTML
                        });
                        var j = '<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th style="height:' + r.height() + 'px">\n\t\t\t\t\t\t\t\t' + (0, i.jTool)(".drag-action", r).get(0).outerHTML + "\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t" + m + "\n\t\t\t\t\t\t\t</tbody>";
                        (0, i.jTool)(".dreamland-table", y).html(j);
                        var k = 0;
                        o.unbind("mousemove"), o.bind("mousemove", function (t) {
                            k = r.index(f), l = void 0, k > 0 && (l = f.eq(k - 1)), s = void 0, k < f.length && (s = f.eq(k + 1)), l && 0 !== l.length && "true" === l.attr("gm-create") ? l = void 0 : s && 0 !== s.length && "true" === s.attr("gm-create") && (s = void 0), y.show(), y.css({
                                width: r.get(0).offsetWidth,
                                height: g.get(0).offsetHeight,
                                left: t.clientX - p.offset().left + window.pageXOffset - r.get(0).offsetWidth / 2,
                                top: t.clientY - p.offset().top + window.pageYOffset - y.find("th").get(0).offsetHeight / 2
                            });
                            var n = !1;
                            1 === r.closest("thead[" + i.Base.getSetTopAttr() + "]").length && (n = !0), e.updateDrag(g, l, s, r, v, y, n), f = (0, i.jTool)('th[th-visible="visible"]', d)
                        }), o.unbind("mouseup"), o.bind("mouseup", function (e) {
                            var n = c.default.getSettings(t);
                            o.unbind("mousemove"), o.unbind("mouseup"), y = (0, i.jTool)(".dreamland-div"), 0 !== y.length && y.animate({
                                top: g.get(0).offsetTop + "px",
                                left: r.get(0).offsetLeft - h.get(0).scrollLeft + "px"
                            }, n.animateTime, function () {
                                r.removeClass("drag-ongoing"), v.removeClass("drag-ongoing"), y.remove(), n.dragAfter(e)
                            }), c.default.update(t, n), n.supportAdjust && u.default.resetAdjust(g), o.removeClass("no-select-text"), i.Base.updateInteractive(g)
                        })
                    })
                }
            }, {
                key: "updateDrag", value: function (t, e, n, o, a, r, l) {
                    var u = null, s = null;
                    if (e && 0 !== e.length && r.offset().left < e.offset().left) {
                        if (u = i.Base.getColTd(e), e.before(o), i.jTool.each(a, function (t, e) {
                            u.eq(t).before(e)
                        }), l) {
                            var c = (0, i.jTool)('thead[grid-manager-thead] th[th-name="' + e.attr("th-name") + '"]', t),
                                d = (0, i.jTool)('thead[grid-manager-thead] th[th-name="' + o.attr("th-name") + '"]', t);
                            c.before(d)
                        }
                    } else if (n && 0 !== n.length && r.offset().left + r.width() > n.offset().left && (s = i.Base.getColTd(n), n.after(o), i.jTool.each(a, function (t, e) {
                        s.eq(t).after(e)
                    }), l)) {
                        var f = (0, i.jTool)('thead[grid-manager-thead] th[th-name="' + n.attr("th-name") + '"]', t),
                            g = (0, i.jTool)('thead[grid-manager-thead] th[th-name="' + o.attr("th-name") + '"]', t);
                        f.after(g)
                    }
                }
            }, {
                key: "destroy", value: function (t) {
                    var e = (0, i.jTool)("body");
                    t.off("mousedown", ".drag-action"), e.unbind("mousemove"), e.unbind("mouseup")
                }
            }]), t
        }();
        e.default = new d
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), r = n(0), i = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "onTbodyHover", value: function (t) {
                    var e = this;
                    t.off("mousemove", "td"), t.on("mousemove", "td", function () {
                        e.updateHover(this)
                    })
                }
            }, {
                key: "updateHover", value: function (t) {
                    var e = (0, r.$)(t), n = e.parent(), o = e.closest("table[grid-manager]");
                    "true" === e.attr("col-hover") && "true" === n.attr("row-hover") || ("true" !== n.attr("row-hover") && ((0, r.$)('tr[row-hover="true"]', o).removeAttr("row-hover"), n.attr("row-hover", "true")), "true" !== e.attr("col-hover") && ((0, r.$)('td[col-hover="true"]', o).removeAttr("col-hover"), r.Base.getColTd(e).attr("col-hover", "true")))
                }
            }, {
                key: "destroy", value: function (t) {
                    t.off("mousemove", "td")
                }
            }]), t
        }();
        e.default = new i
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), r = n(0), i = n(1), l = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(i), u = function () {
            function t() {
                o(this, t)
            }

            return a(t, [{
                key: "init", value: function (t) {
                    this.bindResizeToTable(t), this.bindScrollToTableDiv(t)
                }
            }, {
                key: "bindResizeToTable", value: function (t) {
                    var e = l.default.getSettings(t);
                    (0, r.jTool)(window).bind("resize." + e.gridManagerName, function () {
                        var e = (0, r.jTool)("thead[" + r.Base.getSetTopAttr() + "]", t);
                        e && 1 === e.length && (e.remove(), t.closest(".table-div").trigger("scroll"))
                    })
                }
            }, {
                key: "bindScrollToTableDiv", value: function (t) {
                    var e = t.closest(".table-div");
                    e.unbind("scroll"), e.bind("scroll", function (e, n) {
                        var o = (0, r.jTool)(this).scrollTop(), a = (0, r.jTool)("thead[grid-manager-thead]", t),
                            i = (0, r.jTool)("tbody", t), l = (0, r.jTool)("thead[" + r.Base.getSetTopAttr() + "]", t);
                        return 0 === (0, r.jTool)("tr", i).length || ((0 === l.length || n) && (0 === l.length && t.append(a.clone(!0).attr(r.Base.getSetTopAttr(), "")), l = (0, r.jTool)("thead[" + r.Base.getSetTopAttr() + "]", t), l.removeAttr("grid-manager-thead"), l.removeClass("scrolling"), l.css({
                            width: a.width(),
                            left: -t.closest(".table-div").scrollLeft() + "px"
                        }), r.jTool.each((0, r.jTool)("th", a), function (t, e) {
                            (0, r.jTool)("th", l).eq(t).width((0, r.jTool)(e).width())
                        })), 0 !== l.length ? (0 === o ? (a.removeClass("scrolling"), l.remove()) : (a.addClass("scrolling"), l.css({left: -t.closest(".table-div").scrollLeft() + "px"})), !0) : void 0)
                    })
                }
            }, {
                key: "destroy", value: function (t) {
                    var e = t.closest(".table-div"), n = l.default.getSettings(t);
                    (0, r.jTool)(window).unbind("resize." + n.gridManagerName), e.unbind("scroll")
                }
            }]), t
        }();
        e.default = new u
    }, function (t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.TextSettings = e.Settings = void 0;
        var a = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }, r = n(0), i = function t() {
            o(this, t);
            var e = {compileVue: !1}, n = {supportDrag: !0, dragBefore: r.$.noop, dragAfter: r.$.noop},
                i = {supportAdjust: !0, adjustBefore: r.$.noop, adjustAfter: r.$.noop}, l = {supportMenu: !0},
                u = {supportRemind: !1}, s = {supportConfig: !0},
                c = {width: "100%", height: "300px", animateTime: 300}, d = {disableCache: !1}, f = {
                    supportSorting: !1,
                    isCombSorting: !1,
                    sortKey: "sort_",
                    sortData: {},
                    sortUpText: "ASC",
                    sortDownText: "DESC",
                    sortingBefore: r.$.noop,
                    sortingAfter: r.$.noop
                }, g = {
                    supportAjaxPage: !1,
                    sizeData: [10, 20, 30, 50, 100],
                    pageSize: 20,
                    pageData: {},
                    totalsKey: "totals",
                    currentPageKey: "cPage",
                    pageSizeKey: "pSize",
                    pagingBefore: r.$.noop,
                    pagingAfter: r.$.noop
                }, h = {supportAutoOrder: !0}, p = {
                    supportCheckbox: !0,
                    checkedBefore: r.$.noop,
                    checkedAfter: r.$.noop,
                    checkedAllBefore: r.$.noop,
                    checkedAllAfter: r.$.noop
                }, v = {i18n: "zh-cn"}, y = {
                    columnData: [],
                    gridManagerName: "",
                    firstLoading: !0,
                    ajax_data: void 0,
                    ajax_type: "GET",
                    query: {},
                    ajax_headers: {},
                    ajax_xhrFields: {},
                    ajax_beforeSend: r.$.noop,
                    ajax_success: r.$.noop,
                    ajax_complete: r.$.noop,
                    ajax_error: r.$.noop,
                    requestHandler: function (t) {
                        return t
                    },
                    responseHandler: function (t) {
                        return t
                    },
                    dataKey: "data",
                    emptyTemplate: '<div class="gm-emptyTemplate">暂无数据</div>'
                }, m = {supportExport: !0}, b = a({}, e, n, i, l, u, s, c, d, f, g, h, p, v, y, m);
            r.$.extend(!0, this, b)
        }, l = function t() {
            o(this, t), this["order-text"] = {
                "zh-cn": "序号",
                "zh-tw": "序號",
                "en-us": "order"
            }, this["first-page"] = {
                "zh-cn": "首页",
                "zh-tw": "首頁",
                "en-us": "first"
            }, this["previous-page"] = {
                "zh-cn": "上一页",
                "zh-tw": "上一頁",
                "en-us": "previous"
            }, this["next-page"] = {
                "zh-cn": "下一页",
                "zh-tw": "下一頁",
                "en-us": "next"
            }, this["last-page"] = {
                "zh-cn": "尾页",
                "zh-tw": "尾頁",
                "en-us": "last"
            }, this.dataTablesInfo = {
                "zh-cn": "此页显示 {0}-{1} 共{2}条",
                "zh-tw": "此頁顯示 {0}-{1} 共{2}條",
                "en-us": "this page show {0}-{1} count {2}"
            }, this["goto-first-text"] = {
                "zh-cn": "跳转至",
                "zh-tw": "跳轉至",
                "en-us": "goto"
            }, this["goto-last-text"] = {"zh-cn": "页", "zh-tw": "頁", "en-us": "page"}, this.refresh = {
                "zh-cn": "重新加载",
                "zh-tw": "重新加載",
                "en-us": "Refresh"
            }, this["save-as-excel"] = {
                "zh-cn": "另存为Excel",
                "zh-tw": "另存為Excel",
                "en-us": "Save as Excel"
            }, this["save-as-excel-for-checked"] = {
                "zh-cn": "已选中项另存为Excel",
                "zh-tw": "已選中項另存為Excel",
                "en-us": "Save selected as Excel"
            }, this["config-grid"] = {
                "zh-cn": "配置表",
                "zh-tw": "配置表",
                "en-us": "Setting Grid"
            }, this["checkall-text"] = {"zh-cn": "全选", "zh-tw": "全選", "en-us": "All"}
        };
        e.Settings = i, e.TextSettings = l
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = n(14), a = {version: o.GM_VERSION, scope: {}, responseData: {}, originalTh: {}, settings: {}};
        e.default = a
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = n(0), a = n(9), r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(a), i = n(15);
        !function (t) {
            Element.prototype.GM = Element.prototype.GridManager = function () {
                if ("TABLE" !== this.nodeName) return void o.Base.outLog("不支持对非table标签实例化", "error");
                var e = null, n = null, a = null, l = null;
                if (0 === arguments.length ? (e = "init", n = {}, a = void 0) : "string" !== t.type(arguments[0]) ? (e = "init", n = arguments[0], a = arguments[1]) : (e = arguments[0], n = arguments[1], a = arguments[2], l = arguments[3]), -1 === i.publishMethodArray.indexOf(e)) return void o.Base.outLog("方法调用错误，请确定方法名[" + e + "]是否正确", "error");
                var u = r.default.get(this);
                return "init" === e || u && u.gridManagerName ? i.PublishMethod[e](this, n, a, l) || this : void o.Base.outLog("方法调用错误，请确定表格已实例化", "error")
            }
        }(o.jTool), function () {
            window.GridManager = window.GM = r.default
        }(), function (t) {
            void 0 !== t && t.fn.extend && (t.fn.extend({
                GridManager: function () {
                    return 0 === arguments.length ? this.get(0).GridManager() : 1 === arguments.length ? this.get(0).GridManager(arguments[0]) : 2 === arguments.length ? this.get(0).GridManager(arguments[0], arguments[1]) : 3 === arguments.length ? this.get(0).GridManager(arguments[0], arguments[1], arguments[2]) : void 0
                }
            }), t.fn.extend({GM: t.fn.GridManager}))
        }(window.jQuery), function (t) {
            window.$ = t || void 0
        }(window.jQuery), e.default = r.default
    }, function (t, e) {
    }, function (t, e, n) {
        var o, o;
        !function t(e, n, a) {
            function r(l, u) {
                if (!n[l]) {
                    if (!e[l]) {
                        var s = "function" == typeof o && o;
                        if (!u && s) return o(l, !0);
                        if (i) return i(l, !0);
                        var c = new Error("Cannot find module '" + l + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var d = n[l] = {exports: {}};
                    e[l][0].call(d.exports, function (t) {
                        return r(e[l][1][t] || t)
                    }, d, d.exports, t, e, n, a)
                }
                return n[l].exports
            }

            for (var i = "function" == typeof o && o, l = 0; l < a.length; l++) r(a[l]);
            return r
        }({
            1: [function (t, e, n) {
                var o = t("./utilities"), a = t("../src/Css"), r = {
                    show: function () {
                        return o.each(this.DOMList, function (t, e) {
                            var n = "", o = ["SPAN", "A", "FONT", "I"];
                            if (-1 !== e.nodeName.indexOf(o)) return e.style.display = "inline-block", this;
                            switch (e.nodeName) {
                                case"TABLE":
                                    n = "table";
                                    break;
                                case"THEAD":
                                    n = "table-header-group";
                                    break;
                                case"TBODY":
                                    n = "table-row-group";
                                    break;
                                case"TR":
                                    n = "table-row";
                                    break;
                                case"TH":
                                case"TD":
                                    n = "table-cell";
                                    break;
                                default:
                                    n = "block"
                            }
                            e.style.display = n
                        }), this
                    }, hide: function () {
                        return o.each(this.DOMList, function (t, e) {
                            e.style.display = "none"
                        }), this
                    }, animate: function (t, e, n) {
                        var r = this, i = "", l = "", u = r.DOMList[0];
                        if (t) {
                            "undefined" === o.type(n) && "function" === o.type(e) && (n = e, e = 0), "undefined" === o.type(n) && (n = o.noop), "undefined" === o.type(e) && (e = 0), o.each(t, function (t, e) {
                                t = o.toHyphen(t), i += t + ":" + o.getStyle(u, t) + ";", l += t + ":" + e + ";"
                            });
                            var s = "@keyframes jToolAnimate {from {" + i + "}to {" + l + "}}",
                                c = document.createElement("style");
                            c.className = "jTool-animate-style", c.type = "text/css", document.head.appendChild(c), c.textContent = c.textContent + s, u.style.animation = "jToolAnimate " + e / 1e3 + "s ease-in-out forwards", window.setTimeout(function () {
                                a.css.call(r, t), u.style.animation = "", document.head.removeChild(c), n()
                            }, e)
                        }
                    }
                };
                e.exports = r
            }, {"../src/Css": 3, "./utilities": 13}], 2: [function (t, e, n) {
                var o = t("./utilities"), a = {
                    addClass: function (t) {
                        return this.changeClass(t, "add")
                    }, removeClass: function (t) {
                        return this.changeClass(t, "remove")
                    }, toggleClass: function (t) {
                        return this.changeClass(t, "toggle")
                    }, hasClass: function (t) {
                        return [].some.call(this.DOMList, function (e) {
                            return e.classList.contains(t)
                        })
                    }, parseClassName: function (t) {
                        return t.indexOf(" ") ? t.split(" ") : [t]
                    }, changeClass: function (t, e) {
                        var n = this.parseClassName(t);
                        return o.each(this.DOMList, function (t, a) {
                            o.each(n, function (t, n) {
                                a.classList[e](n)
                            })
                        }), this
                    }
                };
                e.exports = a
            }, {"./utilities": 13}], 3: [function (t, e, n) {
                var o = t("./utilities"), a = {
                    css: function (t, e) {
                        function n(t, e) {
                            "number" === o.type(e) && (e = e.toString()), -1 !== r.indexOf(t) && -1 === e.indexOf("px") && (e += "px"), o.each(a.DOMList, function (n, o) {
                                o.style[t] = e
                            })
                        }

                        var a = this,
                            r = ["width", "height", "min-width", "max-width", "min-height", "min-height", "top", "left", "right", "bottom", "padding-top", "padding-right", "padding-bottom", "padding-left", "margin-top", "margin-right", "margin-bottom", "margin-left", "border-width", "border-top-width", "border-left-width", "border-right-width", "border-bottom-width"];
                        if ("string" === o.type(t) && !e && 0 !== e) return -1 !== r.indexOf(t) ? parseInt(o.getStyle(this.DOMList[0], t), 10) : o.getStyle(this.DOMList[0], t);
                        if ("object" === o.type(t)) {
                            var i = t;
                            for (var l in i) n(l, i[l])
                        } else n(t, e);
                        return this
                    }, width: function (t) {
                        return this.css("width", t)
                    }, height: function (t) {
                        return this.css("height", t)
                    }
                };
                e.exports = a
            }, {"./utilities": 13}], 4: [function (t, e, n) {
                var o = t("./utilities"), a = {
                    dataKey: "jTool" + o.version, data: function (t, e) {
                        var n = this, a = {};
                        if (void 0 === t && void 0 === e) return n.DOMList[0][n.dataKey];
                        if (void 0 !== e) {
                            var r = o.type(e);
                            return "string" !== r && "number" !== r || n.attr(t, e), o.each(n.DOMList, function (o, r) {
                                a = r[n.dataKey] || {}, a[t] = e, r[n.dataKey] = a
                            }), this
                        }
                        return a = n.DOMList[0][n.dataKey] || {}, this.transformValue(a[t] || n.attr(t))
                    }, removeData: function (t) {
                        var e, n = this;
                        void 0 !== t && (o.each(n.DOMList, function (o, a) {
                            e = a[n.dataKey] || {}, delete e[t]
                        }), n.removeAttr(t))
                    }, attr: function (t, e) {
                        return void 0 === t && void 0 === e ? "" : void 0 !== e ? (o.each(this.DOMList, function (n, o) {
                            o.setAttribute(t, e)
                        }), this) : this.transformValue(this.DOMList[0].getAttribute(t))
                    }, removeAttr: function (t) {
                        void 0 !== t && o.each(this.DOMList, function (e, n) {
                            n.removeAttribute(t)
                        })
                    }, prop: function (t, e) {
                        return void 0 === t && void 0 === e ? "" : void 0 !== e ? (o.each(this.DOMList, function (n, o) {
                            o[t] = e
                        }), this) : this.transformValue(this.DOMList[0][t])
                    }, removeProp: function (t) {
                        void 0 !== t && o.each(this.DOMList, function (e, n) {
                            delete n[t]
                        })
                    }, val: function (t) {
                        return this.prop("value", t) || ""
                    }, transformValue: function (t) {
                        return "null" === o.type(t) && (t = void 0), t
                    }
                };
                e.exports = a
            }, {"./utilities": 13}], 5: [function (t, e, n) {
                var o = t("./utilities"), a = t("./Sizzle"), r = {
                    append: function (t) {
                        return this.html(t, "append")
                    }, prepend: function (t) {
                        return this.html(t, "prepend")
                    }, before: function (t) {
                        t.jTool && (t = t.DOMList[0]);
                        var e = this.DOMList[0];
                        return e.parentNode.insertBefore(t, e), this
                    }, after: function (t) {
                        t.jTool && (t = t.DOMList[0]);
                        var e = this.DOMList[0], n = e.parentNode;
                        n.lastChild == e ? n.appendChild(t) : n.insertBefore(t, e.nextSibling)
                    }, text: function (t) {
                        return void 0 !== t ? (o.each(this.DOMList, function (e, n) {
                            n.textContent = t
                        }), this) : this.DOMList[0].textContent
                    }, html: function (t, e) {
                        if (void 0 === t && void 0 === e) return this.DOMList[0].innerHTML;
                        var n = this, a = o.type(t);
                        t.jTool ? t = t.DOMList : "string" === a ? t = o.createDOM(t || "") : "element" === a && (t = [t]);
                        var r;
                        return o.each(n.DOMList, function (n, a) {
                            e ? "prepend" === e && (r = a.firstChild) : a.innerHTML = "", o.each(t, function (t, e) {
                                e = e.cloneNode(!0), e.nodeType || (e = document.createTextNode(e)), r ? a.insertBefore(e, r) : a.appendChild(e), a.normalize()
                            })
                        }), this
                    }, wrap: function (t) {
                        var e;
                        return o.each(this.DOMList, function (n, o) {
                            e = o.parentNode;
                            var r = new a(t, o.ownerDocument).get(0);
                            e.insertBefore(r, o), r.querySelector(":empty").appendChild(o)
                        }), this
                    }, closest: function (t) {
                        function e() {
                            if (!n || 0 === o.length || 1 !== n.nodeType) return void(n = null);
                            -1 === [].indexOf.call(o, n) && (n = n.parentNode, e())
                        }

                        var n = this.DOMList[0].parentNode;
                        if (void 0 === t) return new a(n);
                        var o = document.querySelectorAll(t);
                        return e(), new a(n)
                    }, parent: function () {
                        return this.closest()
                    }, clone: function (t) {
                        return new a(this.DOMList[0].cloneNode(t || !1))
                    }, remove: function () {
                        o.each(this.DOMList, function (t, e) {
                            e.parentNode.removeChild(e)
                        })
                    }
                };
                e.exports = r
            }, {"./Sizzle": 9, "./utilities": 13}], 6: [function (t, e, n) {
                var o = t("./Sizzle"), a = {
                    get: function (t) {
                        return this.DOMList[t]
                    }, eq: function (t) {
                        return new o(this.DOMList[t])
                    }, find: function (t) {
                        return new o(t, this)
                    }, index: function (t) {
                        var e = this.DOMList[0];
                        return t ? t.jTool && (t = t.DOMList) : t = e.parentNode.childNodes, t ? [].indexOf.call(t, e) : -1
                    }
                };
                e.exports = a
            }, {"./Sizzle": 9}], 7: [function (t, e, n) {
                var o = t("./utilities"), a = {
                    on: function (t, e, n, o) {
                        return this.addEvent(this.getEventObject(t, e, n, o))
                    }, off: function (t, e) {
                        return this.removeEvent(this.getEventObject(t, e))
                    }, bind: function (t, e, n) {
                        return this.on(t, void 0, e, n)
                    }, unbind: function (t) {
                        return this.removeEvent(this.getEventObject(t))
                    }, trigger: function (t) {
                        return o.each(this.DOMList, function (e, n) {
                            try {
                                if (n.jToolEvent && n.jToolEvent[t].length > 0) {
                                    var a = new Event(t);
                                    n.dispatchEvent(a)
                                } else "click" !== t ? o.error("预绑定的事件只有click事件可以通过trigger进行调用") : "click" === t && n[t]()
                            } catch (e) {
                                o.error("事件:[" + t + "]未能正确执行, 请确定方法已经绑定成功")
                            }
                        }), this
                    }, getEventObject: function (t, e, n, a) {
                        if ("function" == typeof e && (a = n || !1, n = e, e = void 0), !t) return o.error("事件绑定失败,原因: 参数中缺失事件类型"), this;
                        if (e && "element" === o.type(this.DOMList[0]) || (e = ""), "" !== e) {
                            var r = n;
                            n = function (t) {
                                for (var n = t.target; n !== this;) {
                                    if (-1 !== [].indexOf.call(this.querySelectorAll(e), n)) {
                                        r.apply(n, arguments);
                                        break
                                    }
                                    n = n.parentNode
                                }
                            }
                        }
                        var i, l, u = t.split(" "), s = [];
                        return o.each(u, function (t, r) {
                            if ("" === r.trim()) return !0;
                            i = r.split("."), l = {
                                eventName: r + e,
                                type: i[0],
                                querySelector: e,
                                callback: n || o.noop,
                                useCapture: a || !1,
                                nameScope: i[1] || void 0
                            }, s.push(l)
                        }), s
                    }, addEvent: function (t) {
                        var e = this;
                        return o.each(t, function (t, n) {
                            o.each(e.DOMList, function (t, e) {
                                e.jToolEvent = e.jToolEvent || {}, e.jToolEvent[n.eventName] = e.jToolEvent[n.eventName] || [], e.jToolEvent[n.eventName].push(n), e.addEventListener(n.type, n.callback, n.useCapture)
                            })
                        }), e
                    }, removeEvent: function (t) {
                        var e, n = this;
                        return o.each(t, function (t, a) {
                            o.each(n.DOMList, function (t, n) {
                                n.jToolEvent && (e = n.jToolEvent[a.eventName]) && (o.each(e, function (t, e) {
                                    n.removeEventListener(e.type, e.callback)
                                }), n.jToolEvent[a.eventName] = void 0)
                            })
                        }), n
                    }
                };
                e.exports = a
            }, {"./utilities": 13}], 8: [function (t, e, n) {
                var o = t("./utilities"), a = {
                    offset: function () {
                        var t = {top: 0, left: 0}, e = this.DOMList[0];
                        if (!e.getClientRects().length) return t;
                        if ("none" === o.getStyle(e, "display")) return t;
                        t = e.getBoundingClientRect();
                        var n = e.ownerDocument.documentElement;
                        return {
                            top: t.top + window.pageYOffset - n.clientTop,
                            left: t.left + window.pageXOffset - n.clientLeft
                        }
                    }, scrollTop: function (t) {
                        return this.scrollFN(t, "top")
                    }, scrollLeft: function (t) {
                        return this.scrollFN(t, "left")
                    }, scrollFN: function (t, e) {
                        var n = this.DOMList[0];
                        return t || 0 === t ? (this.setScrollFN(n, e, t), this) : this.getScrollFN(n, e)
                    }, getScrollFN: function (t, e) {
                        return o.isWindow(t) ? "top" === e ? t.pageYOffset : t.pageXOffset : 9 === t.nodeType ? "top" === e ? t.body.scrollTop : t.body.scrollLeft : 1 === t.nodeType ? "top" === e ? t.scrollTop : t.scrollLeft : void 0
                    }, setScrollFN: function (t, e, n) {
                        return o.isWindow(t) ? "top" === e ? t.document.body.scrollTop = n : t.document.body.scrollLeft = n : 9 === t.nodeType ? "top" === e ? t.body.scrollTop = n : t.body.scrollLeft = n : 1 === t.nodeType ? "top" === e ? t.scrollTop = n : t.scrollLeft = n : void 0
                    }
                };
                e.exports = a
            }, {"./utilities": 13}], 9: [function (t, e, n) {
                var o = t("./utilities"), a = function (t, e) {
                    var n;
                    return t ? o.isWindow(t) ? (n = [t], e = void 0) : t === document ? (n = [document], e = void 0) : t instanceof HTMLElement ? (n = [t], e = void 0) : t instanceof NodeList || t instanceof Array ? (n = t, e = void 0) : t.jTool ? (n = t.DOMList, e = void 0) : /<.+>/.test(t) ? (n = o.createDOM(t), e = void 0) : (e ? e = "string" == typeof e ? document.querySelectorAll(e) : e instanceof HTMLElement ? [e] : e instanceof NodeList ? e : e.jTool ? e.DOMList : void 0 : n = document.querySelectorAll(t), e && (n = [], o.each(e, function (e, a) {
                        o.each(a.querySelectorAll(t), function (t, e) {
                            e && n.push(e)
                        })
                    }))) : t = null, n && 0 !== n.length || (n = void 0), this.jTool = !0, this.DOMList = n, this.length = this.DOMList ? this.DOMList.length : 0, this.querySelector = t, this
                };
                e.exports = a
            }, {"./utilities": 13}], 10: [function (t, e, n) {
                function o(t) {
                    function e() {
                        var e = "";
                        return "object" === l.type(t.data) ? (l.each(t.data, function (t, n) {
                            "" !== e && (e += "&"), e += t + "=" + n
                        }), e) : t.data
                    }

                    var n = {
                        url: null,
                        type: "GET",
                        data: null,
                        headers: {},
                        async: !0,
                        xhrFields: {},
                        beforeSend: l.noop,
                        complete: l.noop,
                        success: l.noop,
                        error: l.noop
                    };
                    if (t = i(n, t), !t.url) return void l.error("jTool ajax: url不能为空");
                    var o = new XMLHttpRequest, a = "";
                    "GET" === t.type.toUpperCase() && (a = e(), a && (t.url = t.url + (-1 === t.url.indexOf("?") ? "?" : "&") + a), a = null), "POST" === t.type.toUpperCase() && (t.headers["Content-Type"] || (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), 0 === t.headers["Content-Type"].indexOf("application/x-www-form-urlencoded") && (a = e()), 0 === t.headers["Content-Type"].indexOf("application/json") && (a = JSON.stringify(t.data))), o.open(t.type, t.url, t.async);
                    for (var r in t.xhrFields) o[r] = t.xhrFields[r];
                    for (var u in t.headers) o.setRequestHeader(u, t.headers[u]);
                    t.beforeSend(o), o.onload = function () {
                        t.complete(o, o.status)
                    }, o.onreadystatechange = function () {
                        4 === o.readyState && (o.status >= 200 && o.status < 300 || 304 === o.status ? t.success(o.response, o.status) : t.error(o, o.status, o.statusText))
                    }, o.send(a)
                }

                function a(t, e, n) {
                    o({url: t, type: "POST", data: e, success: n})
                }

                function r(t, e, n) {
                    o({url: t, type: "GET", data: e, success: n})
                }

                var i = t("./extend"), l = t("./utilities");
                e.exports = {ajax: o, post: a, get: r}
            }, {"./extend": 11, "./utilities": 13}], 11: [function (t, e, n) {
                function o() {
                    function t(e, o) {
                        for (var r in e) e.hasOwnProperty(r) && (n && "object" === a.type(e[r]) ? ("object" !== a.type(o[r]) && (o[r] = {}), t(e[r], o[r])) : o[r] = e[r])
                    }

                    if (0 === arguments.length) return {};
                    var e, n = !1, o = 1, r = arguments[0];
                    for (1 === arguments.length && "object" == typeof arguments[0] ? (r = this, o = 0) : 2 === arguments.length && "boolean" == typeof arguments[0] ? (n = arguments[0], r = this, o = 1) : arguments.length > 2 && "boolean" == typeof arguments[0] && (n = arguments[0], r = arguments[1] || {}, o = 2); o < arguments.length; o++) e = arguments[o] || {}, t(e, r);
                    return r
                }

                var a = t("./utilities");
                e.exports = o
            }, {"./utilities": 13}], 12: [function (t, e, n) {
                var o = t("./Sizzle"), a = t("./extend"), r = t("./utilities"), i = t("./ajax"), l = t("./Event"),
                    u = t("./Css"), s = t("./Class"), c = t("./Document"), d = t("./Offset"), f = t("./Element"),
                    g = t("./Animate"), h = t("./Data"), p = function (t, e) {
                        return new o(t, e)
                    };
                o.prototype = p.prototype = {}, p.extend = p.prototype.extend = a, p.extend(r), p.extend(i), p.prototype.extend(l), p.prototype.extend(u), p.prototype.extend(s), p.prototype.extend(c), p.prototype.extend(d), p.prototype.extend(f), p.prototype.extend(g), p.prototype.extend(h), void 0 !== window.$ && (window._$ = $), window.jTool = window.$ = p, e.exports = p
            }, {
                "./Animate": 1,
                "./Class": 2,
                "./Css": 3,
                "./Data": 4,
                "./Document": 5,
                "./Element": 6,
                "./Event": 7,
                "./Offset": 8,
                "./Sizzle": 9,
                "./ajax": 10,
                "./extend": 11,
                "./utilities": 13
            }], 13: [function (t, e, n) {
                function o() {
                    return -1 != navigator.userAgent.indexOf("Chrome")
                }

                function a(t) {
                    return null !== t && t === t.window
                }

                function r(t) {
                    return Array.isArray(t)
                }

                function i(t) {
                    return m[y.call(t)] || (t instanceof Element ? "element" : "")
                }

                function l() {
                }

                function u(t, e) {
                    t && t.jTool && (t = t.DOMList);
                    var n = i(t);
                    if ("array" === n || "nodeList" === n || "arguments" === n) [].every.call(t, function (t, n) {
                        return a(t) ? l() : t.jTool ? t = t.get(0) : l(), !1 !== e.call(t, n, t)
                    }); else if ("object" === n) for (var o in t) if (!1 === e.call(t[o], o, t[o])) break
                }

                function s(t) {
                    return t.trim()
                }

                function c(t) {
                    throw new Error("[jTool Error: " + t + "]")
                }

                function d(t) {
                    var e = !0;
                    for (var n in t) t.hasOwnProperty(n) && (e = !1);
                    return e
                }

                function f(t, e) {
                    return e ? window.getComputedStyle(t)[e] : window.getComputedStyle(t)
                }

                function g(t) {
                    var e = ["px", "vem", "em", "%"], n = "";
                    return "number" == typeof t ? n : (u(e, function (e, o) {
                        if (-1 !== t.indexOf(o)) return n = o, !1
                    }), n)
                }

                function h(t) {
                    return t.replace(/-\w/g, function (t) {
                        return t.split("-")[1].toUpperCase()
                    })
                }

                function p(t) {
                    return t.replace(/([A-Z])/g, "-$1").toLowerCase()
                }

                function v(t) {
                    var e = document.querySelector("#jTool-create-dom");
                    if (!e || 0 === e.length) {
                        var n = document.createElement("table");
                        n.id = "jTool-create-dom", n.style.display = "none", document.body.appendChild(n), e = document.querySelector("#jTool-create-dom")
                    }
                    e.innerHTML = t || "";
                    var o = e.childNodes;
                    return 1 != o.length || /<tbody|<TBODY/.test(t) || "TBODY" !== o[0].nodeName || (o = o[0].childNodes), 1 != o.length || /<thead|<THEAD/.test(t) || "THEAD" !== o[0].nodeName || (o = o[0].childNodes), 1 != o.length || /<tr|<TR/.test(t) || "TR" !== o[0].nodeName || (o = o[0].childNodes), 1 != o.length || /<td|<TD/.test(t) || "TD" !== o[0].nodeName || (o = o[0].childNodes), 1 != o.length || /<th|<TH/.test(t) || "TH" !== o[0].nodeName || (o = o[0].childNodes), document.body.removeChild(e), o
                }

                var y = Object.prototype.toString, m = {
                    "[object String]": "string",
                    "[object Boolean]": "boolean",
                    "[object Undefined]": "undefined",
                    "[object Number]": "number",
                    "[object Object]": "object",
                    "[object Error]": "error",
                    "[object Function]": "function",
                    "[object Date]": "date",
                    "[object Array]": "array",
                    "[object RegExp]": "regexp",
                    "[object Null]": "null",
                    "[object NodeList]": "nodeList",
                    "[object Arguments]": "arguments",
                    "[object Window]": "window",
                    "[object HTMLDocument]": "document"
                };
                e.exports = {
                    isWindow: a,
                    isChrome: o,
                    isArray: r,
                    noop: l,
                    type: i,
                    toHyphen: p,
                    toHump: h,
                    getStyleUnit: g,
                    getStyle: f,
                    isEmptyObject: d,
                    trim: s,
                    error: c,
                    each: u,
                    createDOM: v,
                    version: "1.2.25"
                }
            }, {}]
        }, {}, [12])
    }])
});
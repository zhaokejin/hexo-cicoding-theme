var searchFunc = function (e, l, n) {
    var c = '<i id="local-search-close">x</i>';
    $.ajax({
        url: e,
        dataType: "json",
        success: function (e) {
            var t = e.posts;
            t.map(function (e) {
                return e.content = e.text, e.url = "/" + e.path, e
            });
            var a = document.getElementById(l),
                r = document.getElementById(n);
            a.addEventListener("input", function () {
                var f = '<ul class="search-result-list">',
                    p = this.value.trim().toLowerCase().split(/[\s\-]+/);
                if (r.innerHTML = "", !(this.value.trim().length <= 0)) {
                    if (t.forEach(function (e) {
                        var a = !0;
                        e.title && "" !== e.title.trim() || (e.title = "Untitled");
                        var r = e.title.trim().toLowerCase(),
                            l = e.content.trim().replace(/<[^>]+>/g, "").toLowerCase(),
                            t = e.url,
                            n = -1,
                            c = -1,
                            s = -1;
                        if ("" !== l ? p.forEach(function (e, t) {
                            n = r.indexOf(e), c = l.indexOf(e), n < 0 && c < 0 ?
                                a = !1 : (c < 0 && (c = 0), 0 === t && (s = c))
                        }) : a = !1, a) {
                            f += '<li><a href="' + t + '" class="search-result-title">' +
                                r + "</a>";
                            var i = e.content.trim().replace(/<[^>]+>/g, "");
                            if (0 <= s) {
                                var o = s - 20,
                                    u = s + 80;
                                o < 0 && (o = 0), 0 === o && (u = 100), u > i.length &&
                                (u = i.length);
                                var h = i.substr(o, u);
                                p.forEach(function (e) {
                                    var t = new RegExp(e, "gi");
                                    h = h.replace(t,
                                        '<em class="search-keyword">' + e +
                                        "</em>")
                                }), f += '<p class="search-result">' + h +
                                    "...</p>"
                            }
                            f += "</li>"
                        }
                    }), -1 === (f += "</ul>").indexOf("<li>")) return r.innerHTML = c +
                        '<ul><span class="local-search-empty">没有找到内容，更换下搜索词试试吧~<span></ul>';
                    r.innerHTML = c + f
                }
            })
        }
    })
};
$(document).on("click", "#local-search-close", function () {
    $("#local-search-input").val(""), $("#local-search-result").html("")
}), searchFunc("/content.json", "local-search-input", "local-search-result");
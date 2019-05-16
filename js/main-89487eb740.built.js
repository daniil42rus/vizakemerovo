function SendMail(n, o, e, s, l) {
    var r, d;
    "2" == s ? (r = "Письмо успешно отправлено", d = "На указанный Вами E-mail отправлено письмо со списком стран, в которые можно получить визу, не выезжая из Кемерова.") : (r = "Мы получили Ваше письмо!", d = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!"), $.confirm({
        title: n,
        content: '<div style="width: 100%; max-width: 400px;"><div class="Form-Description">' + o + '</div><div class="Form-Item"><input id="alert_name" type="text" class="Form-Input" required><label class="Input-InputLabel">Введите Ваше имя</label></div><div class="Form-Item"><input id="alert_email" type="email" class="Form-Input" required><label class="Input-InputLabel">Введите Ваш E-mail</label></div><div class="Form-Item"><input id="alert_phone" type="text" class="Form-Input PhoneNumber" required><label class="Input-InputLabel">Введите Ваш телефон</label></div><p class="Form-Note mt-0">Отправляя эту форму, Вы даете своё согласие нашему сайту на обработку персональной информации.</p></div>',
        onContentReady: function () {
            $("#alert_phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (XXX) XXX-XX-XX"})
        },
        buttons: {
            confirm: {
                text: e, btnClass: "ActiveButton", action: function () {
                    var t = this.$content.find("#alert_name").val(), a = this.$content.find("#alert_phone").val(),
                        i = this.$content.find("#alert_email").val(), e = 0;
                    return /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(t) ? ($("#alert_name").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(i) ? ($("#alert_email").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(a) ? ($("#alert_phone").removeClass("Required"), void(e || ($.alert({
                        animation: "top",
                        closeAnimation: "scale",
                        title: r,
                        content: "<div style='width: 100%; max-width: 400px;'>" + d + "</div>",
                        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
                    }), $.ajax({
                        type: "POST",
                        url: "/functions/sendmail.php",
                        data: {type: s, name: t, phone: a, email: i, country: l, title: n, description: o}
                    }).done(function (e) {
                        1 == e && $.ajax({
                            type: "POST",
                            url: "/functions/sendmail.php",
                            data: {type: 3, name: t, phone: a, email: i}
                        })
                    })))) : ($("#alert_phone").addClass("Required"), e++, !1)) : ($("#alert_email").addClass("Required"), e++, !1)) : ($("#alert_name").addClass("Required"), e++, !1)
                }
            }
        }
    })
}

function ConfirmForm(e) {
    var t = (e = $("#" + e)).find(".FormName").val(), a = e.find(".FormPhone").val(), i = e.find(".FormEmail").val(),
        n = 0, o = e.find(".Form-Title").text();
    return sucftitle = "Мы получили Ваше письмо!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(t) ? (e.find(".FormName").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(i) ? (e.find(".FormEmail").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(a) ? (e.find(".FormPhone").removeClass("Required"), void(n || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='width: 100%; max-width: 400px;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), e.find(".FormName").val(""), e.find(".FormPhone").val(""), e.find(".FormEmail").val(""), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 4, name: t, phone: a, email: i, comment: o}
    })))) : (e.find(".FormPhone").addClass("Required"), n++, !1)) : (e.find(".FormEmail").addClass("Required"), n++, !1)) : (e.find(".FormName").addClass("Required"), n++, !1)
}

function ConfirmVisa(e) {
    var t = $("#VisaForm"), a = t.find(".FormName").val(), i = t.find(".FormPhone").val(),
        n = t.find(".FormEmail").val(), o = 0;
    return sucftitle = "Мы получили Ваше письмо!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(a) ? (t.find(".FormName").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(n) ? (t.find(".FormEmail").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(i) ? (t.find(".FormPhone").removeClass("Required"), void(o || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='width: 100%; max-width: 400px;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), t.find(".FormName").val(""), t.find(".FormPhone").val(""), t.find(".FormEmail").val(""), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 11, name: a, phone: i, email: n, country: e}
    })))) : (t.find(".FormPhone").addClass("Required"), o++, !1)) : (t.find(".FormEmail").addClass("Required"), o++, !1)) : (t.find(".FormName").addClass("Required"), o++, !1)
}

$(".PhoneNumber").mask("+7 (999) 999-99-99", {placeholder: "+7 (XXX) XXX-XX-XX"}), jconfirm.defaults = {
    title: "Hello",
    titleClass: "",
    type: "default",
    typeAnimated: !0,
    draggable: !1,
    dragWindowGap: 15,
    dragWindowBorder: !0,
    animateFromElement: !0,
    smoothContent: !0,
    content: "Are you sure to continue?",
    contentLoaded: function (e, t, a) {
    },
    icon: "",
    theme: "custom",
    backgroundDismiss: !0,
    closeIcon: !0,
    closeIconClass: "fal fa-times",
    useBootstrap: !1
}, $(function () {
    jQuery('img[src*=".svg"]').each(function () {
        var a = jQuery(this), i = a.attr("id"), n = a.attr("class"), e = a.attr("src");
        jQuery.get(e, function (e) {
            var t = jQuery(e).find("svg");
            void 0 !== i && (t = t.attr("id", i)), void 0 !== n && (t = t.attr("class", n + " replaced-svg")), t = t.removeAttr("xmlns:a"), a.replaceWith(t)
        }, "xml")
    })
}), $(".ContinentItems-Item").hover(function () {
    var e = $(this).find(".Items-Name").text();
    switch ($(".VectorMap").removeClass("VectorMap-Hovered"), e) {
        case"Шенген":
            $("#shengen").addClass("VectorMap-Hovered");
            break;
        case"Европа":
            $("#europe").addClass("VectorMap-Hovered");
            break;
        case"Азия":
            $("#asia").addClass("VectorMap-Hovered");
            break;
        case"Австралия и Океания":
            $("#australia").addClass("VectorMap-Hovered");
            break;
        case"Северная Америка":
            $("#namerica").addClass("VectorMap-Hovered");
            break;
        case"Южная Америка":
            $("#samerica").addClass("VectorMap-Hovered");
            break;
        default:
            $(".VectorMap").removeClass("VectorMap-Hovered")
    }
}), $(".ContinentItems-Item").mouseleave(function (e) {
    $(".VectorMap").removeClass("VectorMap-Hovered"), "" !== lightenContinent && $("#" + lightenContinent).addClass("VectorMap-Hovered")
});
var lightenContinent, typingTimer, doneTypingInterval = 50;

function CountrySearch() {
    $(".SearchBlock-ResultsBlock").css({display: "none"});
    var s = $("#CountrySearch").val();
    /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+$/.test(s) ? ($("#SearchBlock").removeClass("Invalid"), $.ajax({
        type: "POST",
        url: "/functions/dbfunctions.php",
        data: {type: 1, countrie: s}
    }).done(function (e) {
        $(".SearchBlock-ResultsBlock").css({display: "block"});
        for (var t, a = jQuery.parseJSON(e), i = "", n = 0; n < a.length; n++) {
            var o = a[n];
            t = o.continent, i += "<li onclick='SetSearchValue(\"" + o.name + '", ' + o.continent + ")'>" + o.name + "</li>"
        }
        strip(i.toLowerCase()) === s.toLowerCase() ? ($(".SearchBlock-ResultsBlock").css({display: "none"}), $("#ChooseCountryButton").removeClass("ActiveButton_theme_notactive"), $("#ChooseCountryButton").attr("onclick", "ChooseCountry();"), CheckContinentAndLight(t)) : ($("#ChooseCountryButton").addClass("ActiveButton_theme_notactive"), $("#ChooseCountryButton").attr("onclick", "")), i ? $("#SearchOptions").html(i) : $("#SearchOptions").html("<p>Страна с указанным именем не найдена</p>")
    })) : ($("#SearchBlock").addClass("Invalid"), $("#ChooseCountryButton").addClass("ActiveButton_theme_notactive"), $("#ChooseCountryButton").attr("onclick", ""))
}

function SetSearchValue(e, t) {
    $("#CountrySearch").val(e), $(".SearchBlock-ResultsBlock").css({display: "none"}), $("#ChooseCountryButton").removeClass("ActiveButton_theme_notactive"), $("#ChooseCountryButton").attr("onclick", "ChooseCountry();"), CheckContinentAndLight(t)
}

function CheckContinentAndLight(e) {
    switch (e = parseInt(e), $(".VectorMap").removeClass("VectorMap-Hovered"), e) {
        case 1:
            $("#shengen").addClass("VectorMap-Hovered"), lightenContinent = "shengen";
            break;
        case 2:
            $("#europe").addClass("VectorMap-Hovered"), lightenContinent = "europe";
            break;
        case 3:
            $("#asia").addClass("VectorMap-Hovered"), lightenContinent = "asia";
            break;
        case 4:
            $("#australia").addClass("VectorMap-Hovered"), lightenContinent = "australia";
            break;
        case 5:
            $("#namerica").addClass("VectorMap-Hovered"), lightenContinent = "namerica";
            break;
        case 6:
            $("#samerica").addClass("VectorMap-Hovered"), lightenContinent = "samerica"
    }
}

function ChooseCountry() {
    var e = $("#CountrySearch").val();
    $.ajax({type: "POST", url: "/functions/dbfunctions.php", data: {type: 2, countrie: e}}).done(function (e) {
        location.href = "/" + e + "/"
    })
}

function strip(e) {
    var t = document.createElement("DIV");
    return t.innerHTML = e, t.textContent || t.innerText || ""
}

($input = $("#CountrySearch")).on("keyup", function () {
    clearTimeout(typingTimer), typingTimer = setTimeout(CountrySearch(), doneTypingInterval)
}), $input.on("keydown", function () {
    clearTimeout(typingTimer)
}), $(document).mouseup(function (e) {
    var t = $(".SearchBlock-ResultsBlock");
    0 === t.has(e.target).length && t.hide()
});
var $input;
doneTypingInterval = 50;
($input = $("#CountryFilter")).on("keyup", function () {
    clearTimeout(typingTimer), typingTimer = setTimeout(CountryFilter(), doneTypingInterval)
}), $input.on("keydown", function () {
    clearTimeout(typingTimer)
});
var itemsNaturalOrder = [];

function CountryFilter() {
    var e = $("#CountryFilter").val().toLowerCase(), t = [], a = [];
    if (2 <= e.length) {
        $(".CountrieBlock").each(function () {
            $(this).find(".CountrieBlock-Container").removeClass("ContriesBlocks_theme_lighten"), $(this).find(".HeaderName").text().toLowerCase().includes(e) ? t.push($(this)) : a.push($(this))
        });
        var i = 2;
        t.forEach(function (e) {
            e.css({order: i}), i++
        }), a.forEach(function (e) {
            "static" === e.attr("id") ? e.css({order: "1"}) : (e.find(".CountrieBlock-Container").addClass("ContriesBlocks_theme_lighten"), e.css({order: i}), i++)
        })
    } else {
        $(".CountrieBlock").find(".CountrieBlock-Container").removeClass("ContriesBlocks_theme_lighten");
        var n = 1;
        itemsNaturalOrder.forEach(function (e) {
            e.css({order: n}), n++
        })
    }
}

function ConfirmCAForm(e) {
    var t = (e = $("." + e)).find(".FormName").val(), a = e.find(".FormPhone").val(), i = e.find(".FormEmail").val(),
        n = 0, o = e.find(".Form-Title").text(), s = e.find("h2").text();
    return sucftitle = "Мы получили Ваше письмо!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(t) ? (e.find(".FormName").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(i) ? (e.find(".FormEmail").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(a) ? (e.find(".FormPhone").removeClass("Required"), void(n || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='max-width: 400px; width: 100%;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), e.find(".FormName").val(""), e.find(".FormPhone").val(""), e.find(".FormEmail").val(""), $(".CustomAction").slick("slickPlay"), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 8, name: t, phone: a, email: i, comment: o, action: s}
    })))) : (e.find(".FormPhone").addClass("Required"), n++, !1)) : (e.find(".FormEmail").addClass("Required"), n++, !1)) : (e.find(".FormName").addClass("Required"), n++, !1)
}

function MangeCASlider(e) {
    "" !== $(e).val() ? $(".CustomAction").slick("slickPause") : $(".CustomAction").slick("slickPlay")
}

function SendCAMail(e, t, a, i) {
    var n = $("." + i), o = n.find(".Form-Title").text(), s = n.find("h2").text();
    $(".CustomAction").slick("slickPause"), $.confirm({
        title: "",
        content: '<div style="width: 100%; max-width: 400px;"><div class="Form-Title" style="line-height:24px">' + e + '</div><div class="Form-Description">' + t + '</div><div class="Form-Item"><input id="alert_name" type="text" class="Form-Input" required><label class="Input-InputLabel">Введите Ваше имя</label></div><div class="Form-Item"><input id="alert_email" type="email" class="Form-Input" required><label class="Input-InputLabel">Введите Ваш E-mail</label></div><div class="Form-Item"><input id="alert_phone" type="text" class="Form-Input PhoneNumber" required><label class="Input-InputLabel">Введите Ваш телефон</label></div><p class="Form-Note mt-0">Отправляя эту форму, Вы даете своё согласие нашему сайту на обработку персональной информации.</p></div>',
        onContentReady: function () {
            $("#alert_phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (XXX) XXX-XX-XX"})
        },
        onClose: function () {
            $(".CustomAction").slick("slickPlay")
        },
        buttons: {
            confirm: {
                text: a, btnClass: "ActiveButton", action: function () {
                    var e = this.$content.find("#alert_name").val(), t = this.$content.find("#alert_phone").val(),
                        a = this.$content.find("#alert_email").val(), i = 0;
                    return /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(e) ? ($("#alert_name").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(a) ? ($("#alert_email").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(t) ? ($("#alert_phone").removeClass("Required"), void(i || ($.alert({
                        animation: "top",
                        closeAnimation: "scale",
                        title: "Мы получили Ваше письмо!",
                        content: "<div style='width: 100%; max-width: 400px;'>Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!</div>",
                        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
                    }), $.ajax({
                        type: "POST",
                        url: "/functions/sendmail.php",
                        data: {type: 8, name: e, phone: t, email: a, comment: o, action: s}
                    })))) : ($("#alert_phone").addClass("Required"), i++, !1)) : ($("#alert_email").addClass("Required"), i++, !1)) : ($("#alert_name").addClass("Required"), i++, !1)
                }
            }
        }
    })
}

function SendContactsMail(e) {
    var t = $("#" + e), a = t.find(".FormName").val(), i = t.find(".FormPhone").val(), n = 0;
    return sucftitle = "Мы получили Ваше письмо!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(a) ? (t.find(".FormName").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(i) ? (t.find(".FormPhone").removeClass("Required"), void(n || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='width: 100%; max-width: 400px;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), t.find(".FormName").val(""), t.find(".FormPhone").val(""), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 10, name: a, phone: i}
    })))) : (t.find(".FormPhone").addClass("Required"), n++, !1)) : (t.find(".FormName").addClass("Required"), n++, !1)
}

function OrderTicket(n, o) {
    var e = n;
    $.confirm({
        title: "Заказать билет",
        content: '<div style="width: 100%; max-width: 400px;"><div class="Form-Description">' + e + '</div><div class="Form-Item"><input id="alert_name" type="text" class="Form-Input" required><label class="Input-InputLabel">Введите Ваше имя</label></div><div class="Form-Item"><input id="alert_email" type="email" class="Form-Input" required><label class="Input-InputLabel">Введите Ваш E-mail</label></div><div class="Form-Item"><input id="alert_phone" type="text" class="Form-Input PhoneNumber" required><label class="Input-InputLabel">Введите Ваш телефон</label></div><p class="Form-Note mt-0">Отправляя эту форму, Вы даете своё согласие нашему сайту на обработку персональной информации.</p></div>',
        onContentReady: function () {
            $("#alert_phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (XXX) XXX-XX-XX"})
        },
        buttons: {
            confirm: {
                text: "Заказать билет", btnClass: "ActiveButton", action: function () {
                    var e = this.$content.find("#alert_name").val(), t = this.$content.find("#alert_phone").val(),
                        a = this.$content.find("#alert_email").val(), i = 0;
                    return /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(e) ? ($("#alert_name").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(a) ? ($("#alert_email").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(t) ? ($("#alert_phone").removeClass("Required"), void(i || ($.alert({
                        animation: "top",
                        closeAnimation: "scale",
                        title: "Мы получили Ваше письмо!",
                        content: "<div style='width: 100%; max-width: 400px;'>Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!</div>",
                        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
                    }), $.ajax({
                        type: "POST",
                        url: "/functions/sendmail.php",
                        data: {type: 18, name: e, phone: t, email: a, bilet: n, price: o}
                    })))) : ($("#alert_phone").addClass("Required"), i++, !1)) : ($("#alert_email").addClass("Required"), i++, !1)) : ($("#alert_name").addClass("Required"), i++, !1)
                }
            }
        }
    })
}

function SendHeaderMail(t) {
    var e = $("." + t).find("input.PhoneNumber").val(), a = $("." + t).find("button"), i = a.outerWidth(), n = a.text(),
        o = a.attr("onclick");
    /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(e) ? (a.html("<img src='/img/spinner.svg' class='Spinner'>"), a.css({width: i + "px"}), a.attr("onclick", ""), $("." + t).find(".Header-Input").removeClass("Required"), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 1, title: "Заказ консультации", section: $("." + t).find(".Header-Offer").text(), phone: e}
    }).done(function (e) {
        if (1 != e) return !1;
        a.html(n), a.attr("onclick", o), $("." + t).find("input.PhoneNumber").val(""), $.alert({
            animation: "top",
            closeAnimation: "scale",
            title: "Мы получили Ваше письмо!",
            content: "<div style='width: 100%; max-width: 400px'>Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!</div>",
            buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
        })
    })) : $("." + t).find(".Header-Input").addClass("Required")
}

function MangeSlider(e) {
    var t = $(e).val();
    /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(t) ? $(".Header-Slides").slick("slickPause") : $(".Header-Slides").slick("slickPlay")
}

function ShowFeed(e) {
    var t = $("#" + e).find(".Profile-Name").text(), a = $("#" + e).find(".Profile-Occupation").text(),
        i = $("#" + e).find(".Text-Title").text(), n = $("#" + e).find(".Text-Description").text(),
        o = $("#" + e).find(".Profile-Avatar").css("background-image");
    o = o.replace("url(", "").replace(")", "").replace(/\"/gi, ""), $.confirm({
        title: "",
        content: '<div class="FeedsBlock d-flex justify-content-center mt-0"><div class="FeedsBlock-Profile"><div class="Profile-Avatar" style="background-image: url(' + o + '); box-shadow: none"></div><div class="Profile-Name">' + t + '</div><div class="Profile-Occupation">' + a + '</div></div><div class="FeedsBlock-Text"><div class="Text-Title">' + i + '</div><p class="Text-Description mb-0" style="max-height: 100%">' + n + "</p></div></div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton", isHidden: !0}}
    })
}

function SetMigType(e) {
    $(".MigType .Iconic").removeClass("Form-IconicInputActive"), $(".MigType .Iconic").removeClass("Required"), $("#MigType" + e).addClass("Form-IconicInputActive"), $("#migtype").val(e), $.ajax({
        type: "POST",
        url: "/functions/dbfunctions.php",
        data: {type: "4", migtype: e}
    }).done(function (e) {
        e = '<option value="" selected disabled>Выберите страну</option>' + e, $(".FTCountry").html(e)
    })
}

function ConfirmMigration() {
    var e = $(".RequiredDocuments-Form"), t = e.find(".FormName").val(), a = e.find(".FormPhone").val(),
        i = e.find(".FormEmail").val(), n = e.find("#migtype").val(), o = e.find(".FTCountry").val(), s = 0;
    return sucftitle = "Мы получили Ваше письмо!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(t) ? (e.find(".FormName").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(a) ? (e.find(".FormPhone").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(i) ? (e.find(".FormEmail").removeClass("Required"), /^([1-3]){1}$/.test(n) ? (e.find(".MigType .Iconic").removeClass("Required"), o ? (e.find(".FTCountry").removeClass("Required"), void(s || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='max-width: 400px; width: 100%;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), e.find(".FormName").val(""), e.find(".FormPhone").val(""), e.find(".FormEmail").val(""), $(".Iconic").removeClass("Form-IconicInputActive"), e.find(".FTCountry").val(""), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 17, name: t, phone: a, email: i, migtype: n, country: o}
    })))) : (e.find(".FTCountry").addClass("Required"), s++, !1)) : (e.find(".MigType .Iconic").addClass("Required"), s++, !1)) : (e.find(".FormEmail").addClass("Required"), s++, !1)) : (e.find(".FormPhone").addClass("Required"), s++, !1)) : (e.find(".FormName").addClass("Required"), s++, !1)
}

$(".CountrieBlock").each(function () {
    itemsNaturalOrder.push($(this))
}), $(".CustomAction").slick({
    fade: !0,
    arrows: !1,
    autoplay: !0,
    pauseOnFocus: !0,
    pauseOnHover: !1,
    autoplaySpeed: 8e3,
    dots: !0,
    infinite: !0,
    touchMove: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{breakpoint: 991, settings: {fade: !1}}]
}), $(".Header-Slides").slick({
    fade: !0,
    cssEase: "linear",
    arrows: !1,
    autoplay: !0,
    pauseOnFocus: !0,
    pauseOnHover: !1,
    autoplaySpeed: 8e3,
    dots: !0,
    infinite: !0,
    touchMove: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
}), $(".FeedsBlock-Slides").slick({
    fade: !0,
    arrows: !0,
    autoplay: !0,
    pauseOnFocus: !0,
    pauseOnHover: !1,
    autoplaySpeed: 8e3,
    dots: !1,
    infinite: !0,
    touchMove: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: ".FeedsArrows",
    prevArrow: ".Arrow-Left",
    nextArrow: ".Arrow-Right",
    responsive: [{breakpoint: 576, settings: {fade: !1}}]
});
var toTop = 64, position = scrollMoveXY().y;

function scrollMoveXY() {
    return {
        x: window.pageXOffset || window.scrollX || document.documentElement && document.documentElement.scrollLeft || document.body && document.body.scrollLeft || 0,
        y: window.pageYOffset || window.scrollY || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0
    }
}

function SetPurpose(e) {
    $(".Iconic").removeClass("Form-IconicInputActive"), $(".Iconic").removeClass("Required"), $("#Iconic" + e).addClass("Form-IconicInputActive"), $("#purpose").val(e)
}

function ConfirmQueryDocuments(e, t) {
    var a = $(".RequiredDocuments-Form"), i = a.find(".FormName").val(), n = a.find(".FormPhone").val(),
        o = a.find(".FormEmail").val(), s = a.find(".FormPurpose").val(), l = 0;
    return sucftitle = "Письмо успешно отправлено", sucftext = "На указанный Вами E-mail отправлено письмо со списком необходимых документов для оформления визы в выбранную Вами страну.", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(i) ? (a.find(".FormName").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(n) ? (a.find(".FormPhone").removeClass("Required"), /^([1-3]){1}$/.test(s) ? (a.find(".Iconic").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(o) ? (a.find(".FormEmail").removeClass("Required"), void(l || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='max-width: 400px; width: 100%;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), a.find(".FormName").val(""), a.find(".FormPhone").val(""), a.find(".FormEmail").val(""), $(".Iconic").removeClass("Form-IconicInputActive"), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 13, name: i, phone: n, email: o, purpose: s, continent: e, country: t}
    }).done(function (e) {
        1 == e && $.ajax({
            type: "POST",
            url: "/functions/sendmail.php",
            data: {type: 14, name: i, phone: n, email: o, purpose: s, country: t}
        })
    })))) : (a.find(".FormEmail").addClass("Required"), l++, !1)) : (a.find(".Iconic").addClass("Required"), l++, !1)) : (a.find(".FormPhone").addClass("Required"), l++, !1)) : (a.find(".FormName").addClass("Required"), l++, !1)
}

function ShowSubmission(n) {
    $.ajax({type: "POST", url: "/functions/dbfunctions.php", data: {type: 3, id: n}}).done(function (e) {
        var t = e.split("|"), a = t[0], i = t[1];
        $(".SubmissionsTypes-Block").removeClass("Block_theme_active"), $("#Block" + n).addClass("Block_theme_active"), $("#WhatWeDo").fadeOut("fast"), $("#WhatYouDo").fadeOut("fast", function () {
            $("#WhatWeDo").html(a), $("#WhatYouDo").html(i), $("#WhatWeDo").fadeIn("fast"), $("#WhatYouDo").fadeIn("fast")
        }), $("html, body").animate({scrollTop: $("#SubmissionsDesc").offset().top - 64}, 500)
    })
}

function OrderVisa(e) {
    SendMail($(".Block_theme_active").find(".BlockName").text(), $(".Block_theme_active").find(".BlockRules").text(), "Оформить визу", "12", e)
}

function ShowSubmission(n) {
    $.ajax({type: "POST", url: "/functions/dbfunctions.php", data: {type: 3, id: n}}).done(function (e) {
        var t = e.split("|"), a = t[0], i = t[1];
        $(".SubmissionsTypes-Block").removeClass("Block_theme_active"), $("#Block" + n).addClass("Block_theme_active"), $("#WhatWeDo").fadeOut("fast"), $("#WhatYouDo").fadeOut("fast", function () {
            $("#WhatWeDo").html(a), $("#WhatYouDo").html(i), $("#WhatWeDo").fadeIn("fast"), $("#WhatYouDo").fadeIn("fast")
        }), $("html, body").animate({scrollTop: $("#SubmissionsDesc").offset().top - 64}, 500)
    })
}

function OrderVisa(e) {
    SendMail("Заказать консультацию", "", "Получить консультацию", 11, e)
}

function ShowTab(e) {
    $(".Tab").removeClass("Tab_theme_active"), $(".Taber-" + e).addClass("Tab_theme_active"), $(".TabsContent").css({display: "none"}), $("#Strah-" + e).fadeIn()
}

function ShowZKCountries() {
    $.confirm({
        title: 'Список стран системы "Зеленая карта"',
        content: '<div style="width: 100%; max-width: 400px;"><ul style="margin-top:32px; columns: 3; list-style: none; column-gap: 48px"><li>Австрия</li><li>Азербайджанская Республика</li><li>Албания</li><li>Андорра</li><li>Беларусь</li><li>Бельгия</li><li>Болгария</li><li>Босния и Герцеговина</li><li>Великобритания</li><li>Венгрия</li><li>Германия</li><li>Греция</li><li>Дания</li><li>Израиль</li><li>Иран</li><li>Ирландия</li><li>Исландия</li><li>Испания</li><li>Италия</li><li>Кипр</li><li>Латвия</li><li>Литва</li><li>Люксембург</li><li>Мальта</li><li>Марокко</li><li>Молдова</li><li>Македония</li><li>Нидерланды</li><li>Норвегия</li><li>Португалия</li><li>Польша</li><li>Румыния</li><li>Сербия</li><li>Словацкая Республика</li><li>Словения</li><li>Тунис</li><li>Турция</li><li>Украина</li><li>Финляндия</li><li>Франция</li><li>Хорватия</li><li>Чешская Республика</li><li>Швейцария</li><li>Швеция</li><li>Эстония</li></ul></div>',
        buttons: {cancel: {text: "Закрыть", btnClass: "CloseButton"}}
    })
}

function ConfirmStrahovka() {
    var e = $("#MedStrahForm"), t = e.find(".FormName").val(), a = e.find(".FormPhone").val(),
        i = e.find(".FormEmail").val(), n = 0;
    return sucftitle = "Мы получили Ваше письмо!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(t) ? (e.find(".FormName").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(a) ? (e.find(".FormPhone").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(i) ? (e.find(".FormEmail").removeClass("Required"), void(n || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='max-width: 400px; width: 100%;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), e.find(".FormName").val(""), e.find(".FormPhone").val(""), e.find(".FormEmail").val(""), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 19, name: t, phone: a, email: i}
    })))) : (e.find(".FormEmail").addClass("Required"), n++, !1)) : (e.find(".FormPhone").addClass("Required"), n++, !1)) : (e.find(".FormName").addClass("Required"), n++, !1)
}

function SetPassType(e) {
    $(".PassType .Iconic").removeClass("Form-IconicInputActive"), $(".PassType .Iconic").removeClass("Required"), $("#PassType" + e).addClass("Form-IconicInputActive"), $("#passtype").val(e), CheckShowVal()
}

function SetPassWho(e) {
    $(".PassWho .Iconic").removeClass("Form-IconicInputActive"), $(".PassWho .Iconic").removeClass("Required"), $("#PassWho" + e).addClass("Form-IconicInputActive"), $("#passwho").val(e), CheckShowVal()
}

function CheckShowVal() {
    var e, t = parseInt($("#passtype").val()), a = parseInt($("#passwho").val());
    1 == t && 1 == a ? e = 5e3 : 1 == t && 2 == a ? e = 3e3 : 2 == t && 1 == a ? e = 3e3 : 2 == t && 2 == a && (e = 2e3), 1 == t ? $(".FinalTerm").text("10") : 2 == t && $(".FinalTerm").text("5"), t && a ? ($(".CountingValue").fadeIn(), $(".FinalPrice").text(e)) : $(".CountingValue").fadeOut()
}

function ConfirmPassport() {
    var e = $(".RequiredDocuments-Form"), t = e.find(".FormName").val(), a = e.find(".FormPhone").val(),
        i = e.find(".FormEmail").val(), n = e.find("#passtype").val(), o = e.find("#passwho").val(), s = 0;
    return sucftitle = "Мы получили Ваше письмо!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", /^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(t) ? (e.find(".FormName").removeClass("Required"), /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(a) ? (e.find(".FormPhone").removeClass("Required"), /^[0-9A-Za-z_\.]{1,50}@([0-9A-Za-z_\.\-]+\.){1,50}([0-9A-Za-z]){2,4}$/.test(i) ? (e.find(".FormEmail").removeClass("Required"), /^([1-3]){1}$/.test(n) ? (e.find(".PassType .Iconic").removeClass("Required"), /^([1-3]){1}$/.test(o) ? (e.find(".PassWho .Iconic").removeClass("Required"), void(s || ($.alert({
        animation: "top",
        closeAnimation: "scale",
        title: sucftitle,
        content: "<div style='max-width: 400px; width: 100%;'>" + sucftext + "</div>",
        buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
    }), e.find(".FormName").val(""), e.find(".FormPhone").val(""), e.find(".FormEmail").val(""), $(".Iconic").removeClass("Form-IconicInputActive"), $(".CountingValue").fadeOut(), n = $("#PassType" + n + " span").text(), o = $("#PassWho" + o + " span").text(), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 16, name: t, phone: a, email: i, passtype: n, passwho: o}
    }).done(function (e) {
        2 == e && $.ajax({
            type: "POST",
            url: "/functions/sendmail.php",
            data: {type: 20, name: t, phone: a, email: i, passtype: n, passwho: o}
        })
    })))) : (e.find(".PassWho .Iconic").addClass("Required"), s++, !1)) : (e.find(".PassType .Iconic").addClass("Required"), s++, !1)) : (e.find(".FormEmail").addClass("Required"), s++, !1)) : (e.find(".FormPhone").addClass("Required"), s++, !1)) : (e.find(".FormName").addClass("Required"), s++, !1)
}

function SendHeaderMail(t) {
    var e = $("." + t).find("input.PhoneNumber").val(), a = $("." + t).find("button"), i = a.outerWidth(), n = a.text(),
        o = a.attr("onclick");
    /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(e) ? (a.html("<img src='/img/spinner.svg' class='Spinner'>"), a.css({width: i + "px"}), a.attr("onclick", ""), $("." + t).find(".Header-Input").removeClass("Required"), $.ajax({
        type: "POST",
        url: "/functions/sendmail.php",
        data: {type: 1, title: "Заказ консультации", section: $("." + t).find(".Header-Offer").text(), phone: e}
    }).done(function (e) {
        if (1 != e) return !1;
        a.html(n), a.attr("onclick", o), $("." + t).find("input.PhoneNumber").val(""), $.alert({
            animation: "top",
            closeAnimation: "scale",
            title: "Мы получили Ваше письмо!",
            content: "<div style='width: 100%; max-width: 400px'>Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!</div>",
            buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
        })
    })) : $("." + t).find(".Header-Input").addClass("Required")
}

function MangeSlider(e) {
    var t = $(e).val();
    /^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(t) ? $(".Header-Slides").slick("slickPause") : $(".Header-Slides").slick("slickPlay")
}

function CheckTour() {
    var e = $(".FTCountry").val(), t = $(".FTNightsFrom").val(), a = $(".FTNightsTo").val(), i = $(".FTAdult").val(),
        n = $(".FTKids").val(), o = 0;
    return null == e ? ($(".FTCountry").addClass("Required"), o++, !1) : ($(".FTCountry").removeClass("Required"), null == t ? ($(".FTNightsFrom").addClass("Required"), o++, !1) : ($(".FTNightsFrom").removeClass("Required"), null == a ? ($(".FTNightsTo").addClass("Required"), o++, !1) : ($(".FTNightsTo").removeClass("Required"), null == i ? ($(".FTAdult").addClass("Required"), o++, !1) : ($(".FTAdult").removeClass("Required"), null == n ? ($(".FTKids").addClass("Required"), o++, !1) : ($(".FTKids").removeClass("Required"), void(o || ($(".TourForm-FirstStep").slideToggle(), $(".TourForm-LastStep").slideToggle())))))))
}

function TourBack() {
    $(".TourForm-LastStep").slideToggle(), $(".TourForm-FirstStep").slideToggle()
}

function OrderTour() {
    var e = $(".FTCountry").val(), t = $(".FTNightsFrom").val(), a = $(".FTNightsTo").val(), i = $(".FTAdult").val(),
        n = $(".FTKids").val(), o = $(".FTName").val(), s = $(".FTPhone").val(), l = 0;
    if (sucftitle = "Мы получили Ваш запрос!", sucftext = "Благодарим, что обратились в наш визовый центр. Наши специалисты свяжутся с Вами в ближайшее время!", !/^[a-zA-Zа-яА-ЯіІїЇъЪёЁґҐ\-\s]+/.test(o)) return $(".FTName").addClass("Required"), l++, !1;
    if ($(".FTName").removeClass("Required"), !/^\+([0-9]){1}([\s])([\(])([0-9]){3}([\)])(\s)([0-9]){3}([\-])([0-9]){2}([\-])([0-9]){2}$/.test(s)) return $(".FTPhone").addClass("Required"), l++, !1;
    if ($(".FTPhone").removeClass("Required"), !l) {
        $.alert({
            animation: "top",
            closeAnimation: "scale",
            title: sucftitle,
            content: "<div style='width: 100%; max-width: 400px;'>" + sucftext + "</div>",
            buttons: {cancel: {text: "Закрыть", btnClass: "ActiveButton ActiveButton_size_36"}}
        }), $(".FTName").val(""), $(".FTPhone").val("");
        e = $(".FTCountry").val(), t = $(".FTNightsFrom").val(), a = $(".FTNightsTo").val(), i = $(".FTAdult").val(), n = $(".FTKids").val();
        $.ajax({
            type: "POST",
            url: "/functions/sendmail.php",
            data: {type: 15, country: e, nightsf: t, nightst: a, adults: i, kids: n, name: o, phone: s}
        })
    }
}

$(window).bind("scroll", function () {
    position = scrollMoveXY().y, $("#bt-menu").hasClass("bt-menu-open") || (toTop < position || position < 0 ? $("#Nav").addClass("Nav_status_floating") : $("#Nav").removeClass("Nav_status_floating"))
}), $(document).ready(function () {
    toTop < position && $("#Nav").addClass("Nav_status_floating")
}), function () {
    var t, e, a, i;
    t = document.getElementById("bt-menu"), e = t.querySelector("a.bt-menu-trigger"), a = document.querySelector("a.bt-menu-trigger-out"), i = function () {
        classie.remove(t, "bt-menu-open"), classie.add(t, "bt-menu-close")
    }, e.addEventListener("click", function (e) {
        e.stopPropagation(), e.preventDefault(), classie.has(t, "bt-menu-open") ? (i(), $("nav ul").slideToggle(), position <= 64 && $("#Nav").removeClass("Nav_status_floating")) : (classie.remove(t, "bt-menu-close"), classie.add(t, "bt-menu-open"), $("nav ul").slideToggle(), $("#Nav").addClass("Nav_status_floating"))
    }), a && a.addEventListener("click", function (e) {
        e.stopPropagation(), e.preventDefault(), classie.remove(t, "bt-menu-close"), classie.add(t, "bt-menu-open")
    })
}(), function (e) {
    "use strict";

    function a(e) {
        return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }

    var i, n, o;

    function t(e, t) {
        (i(e, t) ? o : n)(e, t)
    }

    "classList" in document.documentElement ? (i = function (e, t) {
        return e.classList.contains(t)
    }, n = function (e, t) {
        e.classList.add(t)
    }, o = function (e, t) {
        e.classList.remove(t)
    }) : (i = function (e, t) {
        return a(t).test(e.className)
    }, n = function (e, t) {
        i(e, t) || (e.className = e.className + " " + t)
    }, o = function (e, t) {
        e.className = e.className.replace(a(t), " ")
    });
    var s = {hasClass: i, addClass: n, removeClass: o, toggleClass: t, has: i, add: n, remove: o, toggle: t};
    "function" == typeof define && define.amd ? define(s) : e.classie = s
}(window), $("a").click(function () {
    $(this).attr("href");
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - toTop}, 500);
    var e = $("#bt-menu");
    return e.hasClass("bt-menu-open") && ($("nav ul").slideToggle(), e.removeClass("bt-menu-open")), !1
}), $(".Header-Slides").slick({
    fade: !0,
    cssEase: "linear",
    arrows: !1,
    autoplay: !0,
    pauseOnFocus: !0,
    pauseOnHover: !1,
    autoplaySpeed: 8e3,
    dots: !0,
    infinite: !0,
    touchMove: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});



/********** Template CSS **********/

: root {
    --primary: #2870FF;
    --secondary: # FFF0E6;
    --light: black;
    --dark: black;
    B2BEB5
}

.back - to - top {
    position: fixed;
    display: none;
    right: 30 px;
    bottom: 30 px;
    z - index: 99;
}


/*** Spinner ***/

#
spinner {
    opacity: 0;
    visibility: hidden;
    transition: opacity .5 s ease - out,
    visibility 0 s linear .5 s;
    z - index: 99999;
}

#
spinner.show {
    transition: opacity .5 s ease - out,
    visibility 0 s linear 0 s;
    visibility: visible;
    opacity: 1;
}

.youtube_video_area.col - xl - 3: nth - child(3).single_video {
    margin - left: 0 px;
    padding - bottom: 5 px;
}


/* line 12, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video {
    position: relative;
    margin - right: 5 px;
}

@media(max - width: 767 px) {
    /* line 12, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video {
        margin: 0;
    }
}

@media(min - width: 768 px) and(max - width: 991 px) {
    /* line 12, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video {
        margin: 0;
    }
}


/* line 22, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.thumb img {
    width: 100 % ;
}


/* line 26, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.hover_elements {
    position: absolute;
    left: 0;
    top: 0;
    width: 100 % ;
    height: 100 % ;
    background: transparent; -
    webkit - transition: 0.4 s; -
    moz - transition: 0.4 s; -
    o - transition: 0.4 s;
    transition: 0.4 s;
}


/* line 34, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.hover_elements.video {
    top: 50 % ;
    position: absolute;
    left: 50 % ; -
    webkit - transform: translate(-50 % , -50 % ); -
    moz - transform: translate(-50 % , -50 % ); -
    ms - transform: translate(-50 % , -50 % );
    transform: translate(-50 % , -50 % );
}


/* line 39, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.hover_elements.video a {
    background: #ED1B1B;
    width: 58 px;
    height: 58 px; -
    webkit - border - radius: 50 % ; -
    moz - border - radius: 50 % ;
    border - radius: 50 % ;
    font - size: 14 px;
    display: inline - block;
    color: #fff;
    text - align: center;
    line - height: 58 px;
    margin - bottom: 40 px; -
    webkit - transition: 0.4 s; -
    moz - transition: 0.4 s; -
    o - transition: 0.4 s;
    transition: 0.4 s;
    opacity: 0;
}

@media(max - width: 767 px) {
    /* line 39, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.video a {
        opacity: 1;
        margin - bottom: 0;
    }
}

@media(min - width: 768 px) and(max - width: 991 px) {
    /* line 39, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.video a {
        opacity: 1;
        margin - bottom: 0;
    }
}


/* line 62, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.hover_elements.hover_inner {
    position: absolute;
    bottom: 30 px;
    left: 30 px;
}

@media(min - width: 992 px) and(max - width: 1200 px) {
    /* line 62, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.hover_inner {
        bottom: 20 px;
    }
}


/* line 69, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.hover_elements.hover_inner span {
    font - size: 14 px;
    font - weight: 400;
    color: #ED1B1B;
    font - family: "Muli", sans - serif; -
    webkit - transition: 0.4 s; -
    moz - transition: 0.4 s; -
    o - transition: 0.4 s;
    transition: 0.4 s;
    position: relative;
    left: 30 px;
    opacity: 0;
}

@media(max - width: 767 px) {
    /* line 69, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.hover_inner span {
        left: 0;
        opacity: 1;
    }
}

@media(min - width: 768 px) and(max - width: 991 px) {
    /* line 69, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.hover_inner span {
        left: 0;
        opacity: 1;
    }
}


/* line 87, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.hover_elements.hover_inner h3 {
    margin - bottom: 0; -
    webkit - transition: 0.4 s; -
    moz - transition: 0.4 s; -
    o - transition: 0.4 s;
    transition: 0.4 s;
    position: relative;
    top: 30 px;
    opacity: 0;
}

@media(max - width: 767 px) {
    /* line 87, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.hover_inner h3 {
        top: 0;
        opacity: 1;
    }
}

@media(min - width: 768 px) and(max - width: 991 px) {
    /* line 87, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.hover_inner h3 {
        top: 0;
        opacity: 1;
    }
}


/* line 101, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video.hover_elements.hover_inner h3 a {
    font - size: 22 px;
    font - weight: 600;
    color: #fff;
}

@media(min - width: 992 px) and(max - width: 1200 px) {
    /* line 101, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */
    .youtube_video_area.single_video.hover_elements.hover_inner h3 a {
        font - size: 18 px;
    }
}


/* line 113, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video: hover.hover_elements {
    background: rgba(0, 0, 0, 0.2);
}


/* line 115, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video: hover.hover_elements.hover_inner {
    position: absolute;
    bottom: 30 px;
    left: 30 px;
}


/* line 119, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area.single_video: hover.hover_elements.hover_inner span {
    left: 0 px;
    opacity: 1;
}

.ls - video {
    bottom: 0;
    right: 0;
    width: 100 % ;
    z - index: -1;
    overflow: hidden;
}

@media(min - aspect - ratio: 16 / 9) {
    .ls - video {
        width: 100 % ;
        height: 100 % ;
    }
}

.full - screen - video - container {
    position: relative;
    display: flex;
    justify - content: center;
    align - items: flex - start;
    height: 100 vh;
    width: 100 vw;
    overflow: hidden;
}

.full - screen - video - container video {
    position: absolute;
    z - index: -1;
    width: auto;
    height: auto;
    top: 50 % ;
    left: 50 % ;
    min - height: 100 % ;
    min - width: 100 % ;
    transform: translate(-50 % , -50 % );
}

.full - screen - video - content {
    background - color: white;
    font - weight: bold;
    padding: 20 px;
    font - size: 100 px;
    color: #333;
    margin-top: 100px;
}


/* line 123, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area .single_video:hover .hover_elements .hover_inner h3 {
    top: 0px;
    opacity: 1;
}


/* line 129, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.youtube_video_area .single_video:hover .hover_elements .video a {
    opacity: 1;
    margin-bottom: 0;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
}


/* line 140, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.audioplayer-playing .audioplayer-playpause a::before,
.audioplayer-playing .audioplayer-playpause a::after {
    content: '';
    width: 4px;
    height: 14px;
    background-color: # ED1B1B;
}


/* line 146, ../../Arafath/CL/Cl November/221. Music/HTML/scss/_video.scss */

.audioplayer - playing.audioplayer - playpause {
    background: rgba(253, 79, 26, 0);
    border: 1 px solid# ED1B1B;
}

.container - fluid {
    width: 100 % ;
    padding - right: 15 px;
    padding - left: 15 px;
    margin - right: auto;
    margin - left: auto
}

.row {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex; -
    ms - flex - wrap: wrap;
    flex - wrap: wrap;
    margin - right: -15 px;
    margin - left: -15 px
}

.no - gutters {
    margin - right: 0;
    margin - left: 0
}

.no - gutters > .col,
    .no - gutters > [class *= col - ] {
        padding - right: 0;
        padding - left: 0
    }


/*===
/*** Button ***/

.btn {
    font - weight: 500;
    transition: .5 s;
}

.btn.btn - primary,
    .btn.btn - outline - primary: hover {
        color: #FFFFFF;
    }

.btn.btn - primary: hover {
    color: var (--primary);
    background: transparent;
}

.btn - square {
    width: 38 px;
    height: 38 px;
}

.btn - sm - square {
    width: 32 px;
    height: 32 px;
}

.btn - lg - square {
    width: 48 px;
    height: 48 px;
}

.btn - square,
    .btn - sm - square,
    .btn - lg - square {
        padding: 0;
        display: flex;
        align - items: center;
        justify - content: center;
        font - weight: normal;
    }


/*** Navbar ***/

.fixed - top {
    transition: .5 s;
}

.top - bar {
    height: 45 px;
    border - bottom: 1 px solid rgba(255, 255, 255, .07);
}

.navbar.dropdown - toggle::after {
    border: none;
    content: "\f107";
    font - family: "Font Awesome 5 Free";
    font - weight: 900;
    vertical - align: middle;
    margin - left: 8 px;
}

.navbar.navbar - nav.nav - link {
    margin - right: 30 px;
    padding: 25 px 0;
    color: #FFFFFF;
    font - weight: 500;
    outline: none;
}

.navbar.navbar - nav.nav - link: hover,
    .navbar.navbar - nav.nav - link.active {
        color: var (--primary);
    }

@media(max - width: 991.98 px) {
    .navbar.navbar - nav {
            margin - top: 10 px;
            border - top: 1 px solid rgba(0, 0, 0, .07);
            background: var (--dark);
        }
        .navbar.navbar - nav.nav - link {
            padding: 10 px 0;
        }
}

@media(min - width: 992 px) {
    .navbar.nav - item.dropdown - menu {
            display: block;
            visibility: hidden;
            top: 100 % ;
            transform: rotateX(-75 deg);
            transform - origin: 0 % 0 % ;
            transition: .5 s;
            opacity: 0;
        }
        .navbar.nav - item: hover.dropdown - menu {
            transform: rotateX(0 deg);
            visibility: visible;
            transition: .5 s;
            opacity: 1;
        }
}


/*** Header ***/

.carousel - caption {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align - items: center;
    justify - content: center;
    text - align: center;
    background: rgba(1, 4, 4, 0.455);
    z - index: 1;
}

.carousel - control - prev,
    .carousel - control - next {
        width: 15 % ;
    }

.carousel - control - prev - icon,
    .carousel - control - next - icon {
        width: 3 rem;
        height: 3 rem;
        background - color: var (--dark);
        border: 12 px solid
        var (--dark);
        border - radius: 3 rem;
    }

@media(max - width: 768 px) {#
    header - carousel.carousel - item {
        position: relative;
        min - height: 450 px;
    }#
    header - carousel.carousel - item img {
        position: absolute;
        width: 100 % ;
        height: 100 % ;
        object - fit: cover;
    }
}

.page - header1 {
    padding - top: 12 rem;
    padding - bottom: 6 rem;
    background: linear - gradient(rgba(0, 29, 35, 0.455), rgba(0, 29, 35, 0.455)), url(/static/asset / img / church - 5. jpg) center center no - repeat;
    background - size: cover;
}

.page - header2 {
    padding - top: 12 rem;
    padding - bottom: 6 rem;
    background: linear - gradient(rgba(0, 29, 35, 0.455), rgba(0, 29, 35, 0.455)), url(/static/asset / img / church - 5. jpg) center center no - repeat;
    background - size: cover;
}

.page - header3 {
    padding - top: 12 rem;
    padding - bottom: 6 rem;
    background: linear - gradient(rgba(0, 29, 35, 0.455), rgba(0, 29, 35, 0.455)), url(/static/asset / img / church - 5. jpg) center center no - repeat;
    background - size: cover;
}

.page - header4 {
    padding - top: 12 rem;
    padding - bottom: 6 rem;
    background: linear - gradient(rgba(0, 29, 35, 0.455), rgba(0, 29, 35, 0.455)), url(/static/asset / img / church - 5. jpg) center center no - repeat;
    background - size: cover;
}

.page - header5 {
    padding - top: 12 rem;
    padding - bottom: 6 rem;
    background: linear - gradient(rgba(0, 29, 35, 0.455), rgba(0, 29, 35, 0.455)), url(/static/asset / img / church - 5. jpg) center center no - repeat;
    background - size: cover;
}

.page - header6 {
    padding - top: 12 rem;
    padding - bottom: 6 rem;
    background: linear - gradient(rgba(0, 29, 35, 0.455), rgba(0, 29, 35, 0.455)), url(/static/asset / img / church - 5. jpg) center center no - repeat;
    background - size: cover;
}

.page - header.breadcrumb - item + .breadcrumb - item::before {
    color: #999999;
}


/*** Causes ***/

.causes-item .progress {
    height: 5px;
    border-radius: 0;
    overflow: visible;
}

.causes-item .progress .progress-bar {
    position: relative;
    overflow: visible;
    width: 0px;
    border-radius: 0;
    transition: 5s;
}

.causes-item .progress .progress-bar span {
    position: absolute;
    top: -7px;
    right: 0;
    width: 40px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background: var(--primary);
    color: # FFFFFF;
}

.causes - item.causes - overlay {
    position: absolute;
    width: 100 % ;
    height: 0;
    top: 0;
    left: 0;
    display: flex;
    align - items: center;
    justify - content: center;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
    opacity: 0;
    transition: .5 s;
}

.causes - item: hover.causes - overlay {
    height: 100 % ;
    opacity: 1;
}


/*** Service ***/

.service - item {
    box - shadow: 0 0 45 px rgba(0, 0, 0, .06);
}


/*** Donate ***/

.donate {
    background: rgba(0, 29, 35, .8);
}

.btn - group.btn - light: hover,
    .btn - group input[type = "radio"]: checked + label {
        color: var (--primary);
        border - color: var (--primary);
    }


/*** Team ***/

.team - item img {
    position: relative;
    top: 0;
    transition: .5 s;
}

.team - item: hover img {
    top: -30 px;
}

.team - item.team - text {
    position: relative;
    height: 100 px;
    transition: .5 s;
}

.team - item: hover.team - text {
    margin - top: -60 px;
    height: 160 px;
}

.team - item.team - text.team - social {
    opacity: 0;
    transition: .5 s;
}

.team - item: hover.team - text.team - social {
    opacity: 1;
}

.team - item.team - social.btn {
    display: inline - flex;
    color: var (--primary);
    background: #FFFFFF;
    border - radius: 40 px;
}

.team - item.team - social.btn: hover {
    color: #FFFFFF;
    background: var (--primary);
}


/*** Testimonial ***/

.testimonial - carousel::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100 % ;
    width: 0;
    background: linear - gradient(to right, rgba(255, 255, 255, 1) 0 % , rgba(255, 255, 255, 0) 100 % );
    z - index: 1;
}

.testimonial - carousel::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100 % ;
    width: 0;
    background: linear - gradient(to left, rgba(255, 255, 255, 1) 0 % , rgba(255, 255, 255, 0) 100 % );
    z - index: 1;
}

@media(min - width: 768 px) {
    .testimonial - carousel::before,
        .testimonial - carousel::after {
            width: 200 px;
        }
}

@media(min - width: 992 px) {
    .testimonial - carousel::before,
        .testimonial - carousel::after {
            width: 300 px;
        }
}

.testimonial - carousel.owl - item.testimonial - text {
    background: var (--light);
    transform: scale(.8);
    transition: .5 s;
}

.testimonial - carousel.owl - item.center.testimonial - text {
    background: var (--primary);
    transform: scale(1);
}

.testimonial - carousel.owl - item.testimonial - text * ,
    .testimonial - carousel.owl - item.testimonial - item img {
        transition: .5 s;
    }

.testimonial - carousel.owl - item.center.testimonial - text * {
    color: var (--light) !important;
}

.testimonial - carousel.owl - item.center.testimonial - item img {
    background: var (--primary) !important;
}

.testimonial - carousel.owl - nav {
    position: absolute;
    width: 350 px;
    top: 15 px;
    left: 50 % ;
    transform: translateX(-50 % );
    display: flex;
    justify - content: space - between;
    opacity: 0;
    transition: .5 s;
    z - index: 1;
}

.testimonial - carousel: hover.owl - nav {
    width: 300 px;
    opacity: 1;
}

.testimonial - carousel.owl - nav.owl - prev,
    .testimonial - carousel.owl - nav.owl - next {
        position: relative;
        color: var (--primary);
        font - size: 45 px;
        transition: .5 s;
    }

.testimonial - carousel.owl - nav.owl - prev: hover,
    .testimonial - carousel.owl - nav.owl - next: hover {
        color: var (--dark);
    }


/*** Footer ***/

.footer.btn.btn - link {
    display: block;
    margin - bottom: 5 px;
    padding: 0;
    text - align: left;
    color: rgba(255, 255, 255, 0.5);
    font - weight: normal;
    text - transform: capitalize;
    transition: .3 s;
}

.footer.btn.btn - link::before {
    position: relative;
    content: "\f105";
    font - family: "Font Awesome 5 Free";
    font - weight: 900;
    color: rgba(255, 255, 255, 0.5);
    margin - right: 10 px;
}

.footer.btn.btn - link: hover {
    color: var (--light);
    letter - spacing: 1 px;
    box - shadow: none;
}

.footer.btn.btn - square {
    color: rgba(255, 255, 255, 0.5);
    border: 1 px solid rgba(255, 255, 255, 0.5);
}

.footer.btn.btn - square: hover {
    color: var (--secondary);
    border - color: var (--light);
}

.footer.copyright {
    padding: 25 px 0;
    font - size: 15 px;
    border - top: 1 px solid rgba(256, 256, 256, .1);
}

.footer.copyright a {
    color: var (--secondary);
}

.footer.copyright a: hover {
    color: var (--primary);
}
webkit = ua.match(/WebKit\/([\d.]+)/),
    android = ua.match(/(Android)\s+([\d.]+)/),
    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
    touchpad = webos && ua.match(/TouchPad/),
    kindle = ua.match(/Kindle\/([\d.]+)/),
    silk = ua.match(/Silk\/([\d._]+)/), black berry = ua.match(/(blackBerry).*Version\/([\d.]+)/),
    bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
    rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
    playbook = ua.match(/PlayBook/),
    chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
    firefox = ua.match(/Firefox\/([\d.]+)/)

// Todo: clean this up with a better OS/browser seperation:
// - discern (more) between multiple browsers on android
// - decide if kindle fire in silk mode is android or not
// - Firefox on Android doesn't specify the Android version
// - possibly devide in os, device and browser hashes

if (browser.webkit = !!webkit) browser.version = webkit[1]

if (android) os.android = true, os.version = android[2]
if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
if (webos) os.webos = true, os.version = webos[2]
if (touchpad) os.touchpad = true
if (black berry) os.black berry = true, os.version = black berry[2]
if (bb10) os.bb10 = true, os.version = bb10[2]
if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
if (playbook) browser.playbook = true
if (kindle) os.kindle = true, os.version = kindle[1]
if (silk) browser.silk = true, browser.version = silk[1]
if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
if (chrome) browser.chrome = true, browser.version = chrome[1]
if (firefox) browser.firefox = true, browser.version = firefox[1]

os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)))
os.phone = !!(!os.tablet && (android || iphone || webos || black berry || bb10 ||
    (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/))))
}

detect.call($, navigator.userAgent)
    // make available to unit tests
$.__detect = detect

})(Zepto)

;
(function($) {
    var $$ = $.zepto.qsa,
        handlers = {},
        _zid = 1,
        specialEvents = {},
        hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

    function zid(element) {
        return element._zid || (element._zid = _zid++)
    }

    function findHandlers(element, event, fn, selector) {
        event = parse(event)
        if (event.ns) var matcher = matcherFor(event.ns)
        return (handlers[zid(element)] || []).filter(function(handler) {
            return handler &&
                (!event.e || handler.e == event.e) &&
                (!event.ns || matcher.test(handler.ns)) &&
                (!fn || zid(handler.fn) === zid(fn)) &&
                (!selector || handler.sel == selector)
        })
    }

    function parse(event) {
        var parts = ('' + event).split('.')
        return { e: parts[0], ns: parts.slice(1).sort().join(' ') }
    }

    function matcherFor(ns) {
        return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
    }

    function eachEvent(events, fn, iterator) {
        if ($.type(events) != "string") $.each(events, iterator)
        else events.split(/\s/).forEach(function(type) { iterator(type, fn) })
    }

    function eventCapture(handler, captureSetting) {
        return handler.del &&
            (handler.e == 'focus' || handler.e == 'blur') ||
            !!captureSetting
    }

    function realEvent(type) {
        return hover[type] || type
    }

    function add(element, events, fn, selector, getDelegate, capture) {
        var id = zid(element),
            set = (handlers[id] || (handlers[id] = []))
        eachEvent(events, fn, function(event, fn) {
            var handler = parse(event)
            handler.fn = fn
            handler.sel = selector
                // emulate mouseenter, mouseleave
            if (handler.e in hover) fn = function(e) {
                var related = e.relatedTarget
                if (!related || (related !== this && !$.contains(this, related)))
                    return handler.fn.apply(this, arguments)
            }
            handler.del = getDelegate && getDelegate(fn, event)
            var callback = handler.del || fn
            handler.proxy = function(e) {
                var result = callback.apply(element, [e].concat(e.data))
                if (result === false) e.preventDefault(), e.stopPropagation()
                return result
            }
            handler.i = set.length
            set.push(handler)
            element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
        })
    }

    function remove(element, events, fn, selector, capture) {
        var id = zid(element)
        eachEvent(events || '', fn, function(event, fn) {
            findHandlers(element, event, fn, selector).forEach(function(handler) {
                delete handlers[id][handler.i]
                element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
            })
        })
    }

    $.event = { add: add, remove: remove }

    $.proxy = function(fn, context) {
        if ($.isFunction(fn)) {
            var proxyFn = function() { return fn.apply(context, arguments) }
            proxyFn._zid = zid(fn)
            return proxyFn
        } else if (typeof context == 'string') {
            return $.proxy(fn[context], fn)
        } else {
            throw new TypeError("expected function")
        }
    }

    $.fn.bind = function(event, callback) {
        return this.each(function() {
            add(this, event, callback)
        })
    }
    $.fn.unbind = function(event, callback) {
        return this.each(function() {
            remove(this, event, callback)
        })
    }
    $.fn.one = function(event, callback) {
        return this.each(function(i, element) {
            add(this, event, callback, null, function(fn, type) {
                return function() {
                    var result = fn.apply(element, arguments)
                    remove(element, type, fn)
                    return result
                }
            })
        })
    }

    var returnTrue = function() { return true },
        returnFalse = function() { return false },
        ignoreProperties = /^([A-Z]|layer[XY]$)/,
        eventMethods = {
            preventDefault: 'isDefaultPrevented',
            stopImmediatePropagation: 'isImmediatePropagationStopped',
            stopPropagation: 'isPropagationStopped'
        }

    function createProxy(event) {
        var key, proxy = { originalEvent: event }
        for (key in event)
            if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

        $.each(eventMethods, function(name, predicate) {
            proxy[name] = function() {
                this[predicate] = returnTrue
                return event[name].apply(event, arguments)
            }
            proxy[predicate] = returnFalse
        })
        return proxy
    }

    // emulates the 'defaultPrevented' property for browsers that have none
    function fix(event) {
        if (!('defaultPrevented' in event)) {
            event.defaultPrevented = false
            var prevent = event.preventDefault
            event.preventDefault = function() {
                this.defaultPrevented = true
                prevent.call(this)
            }
        }
    }

    $.fn.delegate = function(selector, event, callback) {
        return this.each(function(i, element) {
            add(element, event, callback, selector, function(fn) {
                return function(e) {
                    var evt, match = $(e.target).closest(selector, element).get(0)
                    if (match) {
                        evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element })
                        return fn.apply(match, [evt].concat([].slice.call(arguments, 1)))
                    }
                }
            })
        })
    }
    $.fn.undelegate = function(selector, event, callback) {
        return this.each(function() {
            remove(this, event, callback, selector)
        })
    }

    $.fn.live = function(event, callback) {
        $(document.body).delegate(this.selector, event, callback)
        return this
    }
    $.fn.die = function(event, callback) {
        $(document.body).undelegate(this.selector, event, callback)
        return this
    }

    $.fn.on = function(event, selector, callback) {
        return !selector || $.isFunction(selector) ?
            this.bind(event, selector || callback) : this.delegate(selector, event, callback)
    }
    $.fn.off = function(event, selector, callback) {
        return !selector || $.isFunction(selector) ?
            this.unbind(event, selector || callback) : this.undelegate(selector, event, callback)
    }

    $.fn.trigger = function(event, data) {
        if (typeof event == 'string' || $.isPlainObject(event)) event = $.Event(event)
        fix(event)
        event.data = data
        return this.each(function() {
            // items in the collection might not be DOM elements
            // (todo: possibly support events on plain old objects)
            if ('dispatchEvent' in this) this.dispatchEvent(event)
        })
    }

    // triggers event handlers on current element just as if an event occurred,
    // doesn't trigger an actual event, doesn't bubble
    $.fn.triggerHandler = function(event, data) {
        var e, result
        this.each(function(i, element) {
            e = createProxy(typeof event == 'string' ? $.Event(event) : event)
            e.data = data
            e.target = element
            $.each(findHandlers(element, event.type || event), function(i, handler) {
                result = handler.proxy(e)
                if (e.isImmediatePropagationStopped()) return false
            })
        })
        return result
    }

    // shortcut methods for `.bind(event, fn)` for each event type
    ;
    ('focusin focusout load resize scroll unload click dblclick ' +
        'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
        'change select keydown keypress keyup error').split(' ').forEach(function(event) {
        $.fn[event] = function(callback) {
            return callback ?
                this.bind(event, callback) :
                this.trigger(event)
        }
    })

    ;
    ['focus', 'blur'].forEach(function(name) {
        $.fn[name] = function(callback) {
            if (callback) this.bind(name, callback)
            else this.each(function() {
                try { this[name]() } catch (e) {}
            })
            return this
        }
    })

    $.Event = function(type, props) {
        if (typeof type != 'string') props = type, type = props.type
        var event = document.createEvent(specialEvents[type] || 'Events'),
            bubbles = true
        if (props)
            for (var name in props)(name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
        event.initEvent(type, bubbles, true, null, null, null, null, null, null, null, null, null, null, null, null)
        event.isDefaultPrevented = function() { return this.defaultPrevented }
        return event
    }

})(Zepto)

;
(function($) {
    var jsonpID = 0,
        document = window.document,
        key,
        name,
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        scriptTypeRE = /^(?:text|application)\/javascript/i,
        xmlTypeRE = /^(?:text|application)\/xml/i,
        jsonType = 'application/json',
        htmlType = 'text/html',
        blankRE = /^\s*$/

    // trigger a custom event and return false if it was cancelled
    function triggerAndReturn(context, eventName, data) {
        var event = $.Event(eventName)
        $(context).trigger(event, data)
        return !event.defaultPrevented
    }

    // trigger an Ajax "global" event
    function triggerGlobal(settings, context, eventName, data) {
        if (settings.global) return triggerAndReturn(context || document, eventName, data)
    }

    // Number of active Ajax requests
    $.active = 0

    function ajaxStart(settings) {
        if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
    }

    function ajaxStop(settings) {
        if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
    }

    // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
    function ajaxBeforeSend(xhr, settings) {
        var context = settings.context
        if (settings.beforeSend.call(context, xhr, settings) === false ||
            triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
            return false

        triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
    }

    function ajaxSuccess(data, xhr, settings) {
        var context = settings.context,
            status = 'success'
        settings.success.call(context, data, status, xhr)
        triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
        ajaxComplete(status, xhr, settings)
    }
    // type: "timeout", "error", "abort", "parsererror"
    function ajaxError(error, type, xhr, settings) {
        var context = settings.context
        settings.error.call(context, xhr, type, error)
        triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error])
        ajaxComplete(type, xhr, settings)
    }
    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
    function ajaxComplete(status, xhr, settings) {
        var context = settings.context
        settings.complete.call(context, xhr, status)
        triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
        ajaxStop(settings)
    }

    // Empty function, used as default callback
    function empty() {}

    $.ajaxJSONP = function(options) {
        if (!('type' in options)) return $.ajax(options)

        var callbackName = 'jsonp' + (++jsonpID),
            script = document.createElement('script'),
            cleanup = function() {
                clearTimeout(abortTimeout)
                $(script).remove()
                delete window[callbackName]
            },
            abort = function(type) {
                cleanup()
                    // In case of manual abort or timeout, keep an empty function as callback
                    // so that the SCRIPT tag that eventually loads won't result in an error.
                if (!type || type == 'timeout') window[callbackName] = empty
                ajaxError(null, type || 'abort', xhr, options)
            },
            xhr = { abort: abort },
            abortTimeout

        if (ajaxBeforeSend(xhr, options) === false) {
            abort('abort')
            return false
        }

        window[callbackName] = function(data) {
            cleanup()
            ajaxSuccess(data, xhr, options)
        }

        script.onerror = function() { abort('error') }

        script.src = options.url.replace(/=\?/, '=' + callbackName)
        $('head').append(script)

        if (options.timeout > 0) abortTimeout = setTimeout(function() {
            abort('timeout')
        }, options.timeout)

        return xhr
    }

    $.ajaxSettings = {
        // Default type of request
        type: 'GET',
        // Callback that is executed before request
        beforeSend: empty,
        // Callback that is executed if the request succeeds
        success: empty,
        // Callback that is executed the the server drops error
        error: empty,
        // Callback that is executed on request complete (both: error and success)
        complete: empty,
        // The context for the callbacks
        context: null,
        // Whether to trigger "global" Ajax events
        global: true,
        // Transport
        xhr: function() {
            return new window.XMLHttpRequest()
        },
        // MIME types mapping
        accepts: {
            script: 'text/javascript, application/javascript',
            json: jsonType,
            xml: 'application/xml, text/xml',
            html: htmlType,
            text: 'text/plain'
        },
        // Whether the request is to another domain
        crossDomain: false,
        // Default timeout
        timeout: 0,
        // Whether data should be serialized to string
        processData: true,
        // Whether the browser should be allowed to cache GET responses
        cache: true,
    }

    function mimeToDataType(mime) {
        if (mime) mime = mime.split(';', 2)[0]
        return mime && (mime == htmlType ? 'html' :
            mime == jsonType ? 'json' :
            scriptTypeRE.test(mime) ? 'script' :
            xmlTypeRE.test(mime) && 'xml') || 'text'
    }

    function appendQuery(url, query) {
        return (url + '&' + query).replace(/[&?]{1,2}/, '?')
    }

    // serialize payload and append it to the URL for GET requests
    function serializeData(options) {
        if (options.processData && options.data && $.type(options.data) != "string")
            options.data = $.param(options.data, options.traditional)
        if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
            options.url = appendQuery(options.url, options.data)
    }

    $.ajax = function(options) {
        var settings = $.extend({}, options || {})
        for (key in $.ajaxSettings)
            if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

        ajaxStart(settings)

        if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
            RegExp.$2 != window.location.host

        if (!settings.url) settings.url = window.location.toString()
        serializeData(settings)
        if (settings.cache === false) settings.url = appendQuery(settings.url, '_=' + Date.now())

        var dataType = settings.dataType,
            hasPlaceholder = /=\?/.test(settings.url)
        if (dataType == 'jsonp' || hasPlaceholder) {
            if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?')
            return $.ajaxJSONP(settings)
        }

        var mime = settings.accepts[dataType],
            baseHeaders = {},
            protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
            xhr = settings.xhr(),
            abortTimeout

        if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest'
        if (mime) {
            baseHeaders['Accept'] = mime
            if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
            xhr.overrideMimeType && xhr.overrideMimeType(mime)
        }
        if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
            baseHeaders['Content-Type'] = (settings.contentType || 'application/x-www-form-urlencoded')
        settings.headers = $.extend(baseHeaders, settings.headers || {})

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = empty;
                clearTimeout(abortTimeout)
                var result, error = false
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
                    dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'))
                    result = xhr.responseText

                    try {
                        // http://perfectionkills.com/global-eval-what-are-the-options/
                        if (dataType == 'script')(1, eval)(result)
                        else if (dataType == 'xml') result = xhr.responseXML
                        else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
                    } catch (e) { error = e }

                    if (error) ajaxError(error, 'parsererror', xhr, settings)
                    else ajaxSuccess(result, xhr, settings)
                } else {
                    ajaxError(null, xhr.status ? 'error' : 'abort', xhr, settings)
                }
            }
        }

        var async = 'async' in settings ? settings.async : true
        xhr.open(settings.type, settings.url, async)

        for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name])

        if (ajaxBeforeSend(xhr, settings) === false) {
            xhr.abort()
            return false
        }

        if (settings.timeout > 0) abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = empty
            xhr.abort()
            ajaxError(null, 'timeout', xhr, settings)
        }, settings.timeout)

        // avoid sending empty string (#319)
        xhr.send(settings.data ? settings.data : null)
        return xhr
    }

    // handle optional data/success arguments
    function parseArguments(url, data, success, dataType) {
        var hasData = !$.isFunction(data)
        return {
            url: url,
            data: hasData ? data : undefined,
            success: !hasData ? data : $.isFunction(success) ? success : undefined,
            dataType: hasData ? dataType || success : success
        }
    }

    $.get = function(url, data, success, dataType) {
        return $.ajax(parseArguments.apply(null, arguments))
    }

    $.post = function(url, data, success, dataType) {
        var options = parseArguments.apply(null, arguments)
        options.type = 'POST'
        return $.ajax(options)
    }

    $.getJSON = function(url, data, success) {
        var options = parseArguments.apply(null, arguments)
        options.dataType = 'json'
        return $.ajax(options)
    }

    $.fn.load = function(url, data, success) {
        if (!this.length) return this
        var self = this,
            parts = url.split(/\s/),
            selector,
            options = parseArguments(url, data, success),
            callback = options.success
        if (parts.length > 1) options.url = parts[0], selector = parts[1]
        options.success = function(response) {
            self.html(selector ?
                $('<div>').html(response.replace(rscript, "")).find(selector) :
                response)
            callback && callback.apply(self, arguments)
        }
        $.ajax(options)
        return this
    }

    var escape = encodeURIComponent

    function serialize(params, obj, traditional, scope) {
        var type, array = $.isArray(obj)
        $.each(obj, function(key, value) {
            type = $.type(value)
            if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']'
                // handle data in serializeArray() format
            if (!scope && array) params.add(value.name, value.value)
                // recurse into nested objects
            else if (type == "array" || (!traditional && type == "object"))
                serialize(params, value, traditional, key)
            else params.add(key, value)
        })
    }

    $.param = function(obj, traditional) {
        var params = []
        params.add = function(k, v) { this.push(escape(k) + '=' + escape(v)) }
        serialize(params, obj, traditional)
        return params.join('&').replace(/%20/g, '+')
    }
})(Zepto)

;
(function($) {
    $.fn.serializeArray = function() {
        var result = [],
            el
        $(Array.prototype.slice.call(this.get(0).elements)).each(function() {
            el = $(this)
            var type = el.attr('type')
            if (this.nodeName.toLowerCase() != 'fieldset' &&
                !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
                ((type != 'radio' && type != 'checkbox') || this.checked))
                result.push({
                    name: el.attr('name'),
                    value: el.val()
                })
        })
        return result
    }

    $.fn.serialize = function() {
        var result = []
        this.serializeArray().forEach(function(elm) {
            result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
        })
        return result.join('&')
    }

    $.fn.submit = function(callback) {
        if (callback) this.bind('submit', callback)
        else if (this.length) {
            var event = $.Event('submit')
            this.eq(0).trigger(event)
            if (!event.defaultPrevented) this.get(0).submit()
        }
        return this
    }

})(Zepto)

;
(function($, undefined) {
    var prefix = '',
        eventPrefix, endEventName, endAnimationName,
        vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
        document = window.document,
        testEl = document.createElement('div'),
        supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        transform,
        transitionProperty, transitionDuration, transitionTiming,
        animationName, animationDuration, animationTiming,
        cssReset = {}

    function dasherize(str) { return downcase(str.replace(/([a-z])([A-Z])/, '$1-$2')) }

    function downcase(str) { return str.toLowerCase() }

    function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : downcase(name) }

    $.each(vendors, function(vendor, event) {
        if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
            prefix = '-' + downcase(vendor) + '-'
            eventPrefix = event
            return false
        }
    })

    transform = prefix + 'transform'
    cssReset[transitionProperty = prefix + 'transition-property'] =
        cssReset[transitionDuration = prefix + 'transition-duration'] =
        cssReset[transitionTiming = prefix + 'transition-timing-function'] =
        cssReset[animationName = prefix + 'animation-name'] =
        cssReset[animationDuration = prefix + 'animation-duration'] =
        cssReset[animationTiming = prefix + 'animation-timing-function'] = ''

    $.fx = {
        off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
        speeds: { _default: 400, fast: 200, slow: 600 },
        cssPrefix: prefix,
        transitionEnd: normalizeEvent('TransitionEnd'),
        animationEnd: normalizeEvent('AnimationEnd')
    }

    $.fn.animate = function(properties, duration, ease, callback) {
        if ($.isPlainObject(duration))
            ease = duration.easing, callback = duration.complete, duration = duration.duration
        if (duration) duration = (typeof duration == 'number' ? duration :
            ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
        return this.anim(properties, duration, ease, callback)
    }

    $.fn.anim = function(properties, duration, ease, callback) {
        var key, cssValues = {},
            cssProperties, transforms = '',
            that = this,
            wrappedCallback, endEvent = $.fx.transitionEnd

        if (duration === undefined) duration = 0.4
        if ($.fx.off) duration = 0

        if (typeof properties == 'string') {
            // keyframe animation
            cssValues[animationName] = properties
            cssValues[animationDuration] = duration + 's'
            cssValues[animationTiming] = (ease || 'linear')
            endEvent = $.fx.animationEnd
        } else {
            cssProperties = []
                // CSS transitions
            for (key in properties)
                if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
                else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

            if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
            if (duration > 0 && typeof properties === 'object') {
                cssValues[transitionProperty] = cssProperties.join(', ')
                cssValues[transitionDuration] = duration + 's'
                cssValues[transitionTiming] = (ease || 'linear')
            }
        }

        wrappedCallback = function(event) {
            if (typeof event !== 'undefined') {
                if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
                $(event.target).unbind(endEvent, wrappedCallback)
            }
            $(this).css(cssReset)
            callback && callback.call(this)
        }
        if (duration > 0) this.bind(endEvent, wrappedCallback)

        // trigger page reflow so new elements can animate
        this.size() && this.get(0).clientLeft

        this.css(cssValues)

        if (duration <= 0) setTimeout(function() {
            that.each(function() { wrappedCallback.call(this) })
        }, 0)

        return this
    }

    testEl = null
})(Zepto)
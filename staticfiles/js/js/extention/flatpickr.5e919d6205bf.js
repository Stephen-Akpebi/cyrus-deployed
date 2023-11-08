/********** Template CSS **********/

: root {
    --primary: #2870FF;
    --secondary: # FFF0E6;
    --light: black;
    --dark: black;
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
color: var (--primary);
}
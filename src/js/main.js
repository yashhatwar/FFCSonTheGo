import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/main.scss';

import $ from 'jquery';
import 'bootstrap';
import html2canvas from 'html2canvas';

import './color_change';
import { removeTouchHoverCSSRule } from './utils';

$(function() {
    // disable hover for touch screen devices
    removeTouchHoverCSSRule();

    $('.quick-selection .btn').click(function() {
        $(this).blur();
    });

    // Timetable screenshot
    $('#takeScreenshotBtn').click(function() {
        // Hack: scroll to top gives better image with html2canvas
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
        var timetable_img_src;
        var courseListTable_img_src;
        var newWindow_data = '';
        $('body').width('1500');
        $('.screenshot_msg').show();
        var newWindow = window.open();
        newWindow.document.write('<h1>Wait. Capturing screenshot...</h1>');
        // timetable screenshot
        html2canvas(document.getElementById('timetable')).then((canvas) => {
            timetable_img_src = canvas.toDataURL('image/jpeg');
            newWindow_data = `<html>
                <head><title>FFCS on The Go</title></head>
                <body>
                    <h1>Click on the respective images to download.</h1>
                    <br>
                    <h3>Timetable</h3>
                    <a href="${timetable_img_src}" download="FFCSOTG_MyTimeTable">
                        <img width="100%" src="${timetable_img_src}" alt="FFCSOTG_MyTimeTable"/>
                    </a>`;
            html2canvas(document.getElementById('courseListTable')).then(
                (canvas) => {
                    courseListTable_img_src = canvas.toDataURL('image/jpeg');
                    newWindow_data =
                        newWindow_data +
                        `<br><br>
                        <h3>Course List</h3>
                        <a href="${courseListTable_img_src}" download="FFCSOTG_MyCourses">
                            <img width="100%" src="${courseListTable_img_src}" alt="FFCSOTG_MyCourses"/>
                        </a>
                        </body></html>`;

                    // closing the document to clear the the current content
                    newWindow.document.close();
                    newWindow.document.write(newWindow_data);
                    newWindow.document.close();
                    $('.screenshot_msg').hide();
                    $('body').width('initial');
                },
            );
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'Timetable',
            eventAction: 'click',
            eventLabel: 'Screenshot',
        });
    });

    /**
     * Need to rework these events based on new share button
     */
    // $('header .alert-dismissible a').click(function() {
    //     ga('send', {
    //         hitType: 'event',
    //         eventCategory: 'Promotion',
    //         eventAction: 'click',
    //         eventLabel: 'GitHub',
    //     });
    // });
    // $('#shareWhatsApp a').click(function() {
    //     ga('send', {
    //         hitType: 'event',
    //         eventCategory: 'Share',
    //         eventAction: 'click',
    //         eventLabel: 'WhatsApp',
    //     });
    // });
});

// open github repo on ctrl+u
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 117 || e.keyCode === 85)) {
        window.open('https://github.com/vatz88/FFCSonTheGo');
        return false;
    } else {
        return true;
    }
};

// Setup a listener to track Add to Homescreen events.
window.addEventListener('beforeinstallprompt', (e) => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'A2H',
        eventAction: 'Seen',
        eventLabel: `A2H Shown`,
    });
    e.userChoice.then((choiceResult) => {
        ga('send', {
            hitType: 'event',
            eventCategory: 'A2H',
            eventAction: 'click',
            eventLabel: `A2H ${choiceResult.outcome}`,
        });
    });
});

// const Sentry = require('@sentry/browser');
// Sentry.init({
//     dsn: 'https://2108314c87344a6c9c4d1db1e82b5d05@sentry.io/1487980',
// });

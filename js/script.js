// fullPage.js initialize
$(document).ready(function()
{
$('#fullpage').fullpage({
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    css3: true,
    navigationTooltips: ['Home', 'Skills', 'Projects', 'About'],
    sectionsColor: ['#fff','#fff', '#fff', '#fff', '#fff'],
    licenseKey: 'YOUR_KEY_HERE',
    anchors:['Home', 'Skills', 'Projects', 'Contacts'],
    keyboardScrolling: true,

    afterLoad: function(origin, destination, direction){
        var loadedSection = this;

        //using index
        if(origin.index == 2){
            AOS.init({
    duration: 1000
 });
        }
    }
});

$.fn.fullpage.setAllowScrolling(false);
//methods
});

//animate on scroll
 AOS.init({
    duration: 1000
 });

 //skills progress bars
 $('#circle-1').circleProgress({
    value: 0.80,
    size: 180,
    fill: {
    gradient: ["red", "orange"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
});

$('#circle-2').circleProgress({
    value: 0.90,
    size: 180,
    fill: {
    gradient: ["red", "orange"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
});

$('#circle-3').circleProgress({
    value: 0.95,
    size: 180,
    fill: {
    gradient: ["red", "orange"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
});

$('#circle-4').circleProgress({
    value: 0.95,
    size: 180,
    fill: {
    gradient: ["red", "orange"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
});
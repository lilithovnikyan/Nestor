$( document ).ready(function() {
    if($('#linechart').length) {
        var ctx = document.getElementById("linechart").getContext('2d');
        var linechart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["0", "Mar 18", "Mar 19", "Mar 20", "Mar 21", "Mar 22"],
                datasets: [
                    {
                        label: "Date",
                        borderColor: '#3489FF',
                        fill: false,
                        data: [0, 25, 100, 75, 110, 175, 160, 300],
                    },
                ]
            },
            options: {
                responsive: true,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
            }
        });
        function toggleSmooth(btn) {
            var value = btn.classList.toggle('btn-on');
            Chart.helpers.each(Chart.instances, function(chart) {
                chart.options.elements.line.tension = value ? 0.4 : 0.000001;
                chart.update();
            });
        }
        $('#calendar-demo').dcalendar();
        $( ".open-data-picker" ).click(function() {
            $('.chart-calendar').toggleClass('chart-calendar-open');
            $('.more-info-calendar').toggleClass('more-info-calendar-open');
        });
    }
    $( ".toggle-menu" ).click(function() {
        $('aside').toggleClass('toggle-open-aside');
    });
    if($('.team-more-info').length) {
        $( ".team-more-info" ).click(function() {
            $(this).parent().find('.team-hide-block').toggleClass('team-hide-block-open');
            $(this).parent().find('.team-close-btn').toggleClass('team-close-btn-open');
            $(this).parent().find('.team-hide-content').toggleClass('team-hide-content-open');
            $(this).parent().find('.team-more-info').toggleClass('team-more-info-close');
        });
        $( ".team-close-btn" ).click(function() {
            $(this).parent().find('.team-hide-block').toggleClass('team-hide-block-open');
            $(this).parent().find('.team-close-btn').toggleClass('team-close-btn-open');
            $(this).parent().find('.team-hide-content').toggleClass('team-hide-content-open');
            $(this).parent().find('.team-more-info').toggleClass('team-more-info-close');
        });
    }
    if($('.edit-profile-open').length) {
        $( ".edit-profile-open" ).click(function() {
            $(this).parent().find('.cancel-save-hide').toggleClass('cancel-save-open');
            $(this).parent().parent().find('.delete-save-hide').toggleClass('delete-save-open');
            $(this).parent().parent().find('.profile-form-item').toggleClass('profile-form-item-edit');
            $(this).toggleClass('edit-profile-hide');
            $('.dashboard-block-5-left-content').find('input').removeAttr( "readonly" )
        });
    }
    if($('.cancel-save-hide').length) {
        $( ".cancel-save-hide" ).click(function() {
            $(this).parent().find('.cancel-save-hide').toggleClass('cancel-save-open');
            $(this).parent().find('.edit-profile-open').toggleClass('edit-profile-hide');
            $(this).parent().parent().find('.delete-save-hide').toggleClass('delete-save-open');
            $('.dashboard-block-5-left-content').find('input').attr('readonly', true);
            $(this).parent().parent().find('.profile-form-item').toggleClass('profile-form-item-edit');
        });
    }
    if($('.change-password-open').length) {
        $( ".change-password-open" ).click(function() {
            $(this).parent().find('.old-password-hide').toggleClass('old-password-open');
            $(this).parent().find('.current-password-open').toggleClass('current-password-hide');
            $(this).parent().parent().find('.delete-save-hide').toggleClass('delete-save-open');
            $(this).toggleClass('change-password-hide');
            $(this).parent().find('.password-cancel-hide').toggleClass('password-cancel-open');
        });
    }
    if($('.password-cancel-hide').length) {
        $( ".password-cancel-hide" ).click(function() {
            $(this).parent().find('.old-password-hide').toggleClass('old-password-open');
            $(this).parent().find('.current-password-open').toggleClass('current-password-hide');
            $(this).parent().find('.change-password-open').toggleClass('change-password-hide');
            $(this).parent().find('.password-cancel-hide').toggleClass('password-cancel-open');
            $(this).parent().parent().find('.delete-save-hide').toggleClass('delete-save-open');
        });
    }
    if($('.email-phone-click').length) {
        $( ".email-phone-click" ).click(function() {
            $('.forgot-email-block').css('display', 'none');
            $('.forgot-phone-block').css('display', 'block');
        });
    }
    if($('.email-forgot-click').length) {
        $( ".email-forgot-click" ).click(function() {
            $('.forgot-email-block').css('display', 'block');
            $('.forgot-phone-block').css('display', 'none0');
        });
    }
    if($('.dropdown-item-click').length) {
        $( ".dropdown-item-click" ).click(function() {
            $('.dropdown-item-icon').toggleClass('dropdown-item-icon-open');
        });
    }
    if($('.dashboard-block-8 table').length) {
        $( ".dashboard-block-8 table tr" ).click(function() {
            $('.header-hide-btn').css('display','flex');
            $(this).find('.check-list .container').css('display', 'block');
        });
    }
    if($('.dial-delete-btn').length) {
        $( ".dial-delete-btn" ).click(function() {
            $('.header-hide-btn').css('display','none');
            $('.check-list .container').css('display', 'none');
        });
    }
    if($('.dashboard-block-6 table').length) {
        $( ".dashboard-block-6 table tr" ).click(function() {
            $('.header-hide-btn').css('display','flex');
            $(this).find('.check-list .container').css('display', 'block');
        });
    }
    if($('.dial-team-btn').length) {
        $( ".dial-team-btn" ).click(function() {
            $('.dashboard-block-8').css('display','none');
            $('.dashboard-block-9').css('display', 'none');
            $('.dashboard-block-7').css('display', 'none');
            $('.dashboard-block-10').css('display', 'flex');
            $('.dashboard-block-11').css('display', 'block');
        });
    }
    if($('.close-calls-list').length) {
        $( ".close-calls-list" ).click(function() {
            $('.calls-list-abs').css('display','none');
        });
    }
    if($('.view-all-click').length) {
        $( ".view-all-click" ).click(function() {
            $('.calls-list-abs').css('display','block');
        });
    }
    if($('.calls-list-block-img').length) {
        $( ".calls-list-block-img" ).click(function() {
            $(this).parent().find('.calls-list-block-abs').toggleClass('calls-list-block-abs-open');
        });
    }
    if($('.reports-table').length) {
        $( ".reports-table tr" ).click(function() {
            $('.header-hide-btn').css('display','flex');
        });
    }
    if($('.open-click-body').length) {
        $( ".open-click-body" ).click(function() {
            $('.call-block').toggleClass('call-block-open');

        });
    }
    if($('.call-block-hover').length) {
        $( ".call-block-hover" ).click(function() {
            $('.call-block').toggleClass('call-block-open');
        });
    }
    if($('.call-phone').length) {
        $( ".call-phone" ).click(function() {
            $('.call-block-3').toggleClass('call-block-3-open');
            $('.call-back-left').toggleClass('call-back-left-open');
            $('.call-block-4').toggleClass('call-block-4-open');
            $('.call-block').toggleClass('call-block-rel');
            $('.calls-icons').toggleClass('calls-icons-open');
            $('.close-call').toggleClass('close-call-open');
            $('.open-call').toggleClass('open-call-close');
        });
    }
    if($('.call-add-number-open').length) {
        $( ".call-add-number-open" ).click(function() {
            $('.calls-icons-modal-1').toggleClass('calls-icons-modal-open');
        });
    }
    if($('.close-calls-modal-1').length) {
        $( ".close-calls-modal-1" ).click(function() {
            $('.calls-icons-modal-1').toggleClass('calls-icons-modal-open');
        });
    }
    if($('.call-add-email-open').length) {
        $( ".call-add-email-open" ).click(function() {
            $('.calls-icons-modal-2').toggleClass('calls-icons-modal-open');
        });
    }
    if($('.close-calls-modal-2').length) {
        $( ".close-calls-modal-2" ).click(function() {
            $('.calls-icons-modal-2').toggleClass('calls-icons-modal-open');
        });
    }
    if($('.answer-block-click').length) {
        $( ".answer-block-click" ).click(function() {
                $('.voice-block').removeClass('voice-block-open');
                $('.answer-block').toggleClass('answer-block-open');
                $('.live-answer').toggleClass('live-answer-open');
        });
    }
    if($('.voice-block-click').length) {
        $( ".voice-block-click" ).click(function() {
                $('.answer-block').removeClass('answer-block-open');
                $('.live-answer').toggleClass('live-answer-open');
                $('.voice-block').toggleClass('voice-block-open');
        });
    }




    if($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                767:{
                    items:3
                },
                1400:{
                    items:4
                }
            }
        })
    }

    if($('#demo').length) {
        document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                defaultDate: '2020-05-12',
                navLinks: true, // can click day/week names to navigate views
                businessHours: true, // display business hours
                editable: true,
                events: [
                    {
                        title: 'Business Lunch',
                        start: '2020-05-03T13:00:00',
                        constraint: 'businessHours'
                    },
                    {
                        title: 'Meeting',
                        start: '2020-05-13T11:00:00',
                        constraint: 'availableForMeeting', // defined below
                        color: '#257e4a'
                    },
                    {
                        title: 'Conference',
                        start: '2020-05-18',
                        end: '2020-05-20'
                    },
                    {
                        title: 'Party',
                        start: '2020-05-29T20:00:00'
                    },

                    // areas where "Meeting" must be dropped
                    {
                        groupId: 'availableForMeeting',
                        start: '2020-05-11T10:00:00',
                        end: '2020-05-11T16:00:00',
                        rendering: 'background'
                    },
                    {
                        groupId: 'availableForMeeting',
                        start: '2020-05-13T10:00:00',
                        end: '2020-05-13T16:00:00',
                        rendering: 'background'
                    },

                    // red areas where no events can be dropped
                    {
                        start: '2020-05-24',
                        end: '2020-05-28',
                        overlap: false,
                        rendering: 'background',
                        color: '#ff9f89'
                    },
                    {
                        start: '2020-05-06',
                        end: '2020-05-08',
                        overlap: false,
                        rendering: 'background',
                        color: '#ff9f89'
                    }
                ]
            });

            calendar.render();
        });
        tail.DateTime("#demo", {
            dateRanges: [
                {
                    start: new Date(2018, 0, 5),
                    end: new Date(2018, 0, 7)
                },
                {
                    start: new Date(2018, 1, 1),
                    end: new Date(2018, 1, 28),
                    days: ["SUN", "SAT"]
                },

                {
                    days: ["SUN"]
                }
            ]
        });
        var today = new Date();
        var dd = String(today.getDate() + 1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy + ' ' + '00:00:00';
        document.getElementById('demo').value = today;


        tail.DateTime("#addTask", {
            dateRanges: [
                {
                    start: new Date(2018, 0, 5),
                    end: new Date(2018, 0, 7)
                },
                {
                    start: new Date(2018, 1, 1),
                    end: new Date(2018, 1, 28),
                    days: ["SUN", "SAT"]
                },

                {
                    days: ["SUN"]
                }
            ]
        });
        var today = new Date();
        var dd = String(today.getDate() + 1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy + ' ' + '00:00:00';
        document.getElementById('addTask').value = today;
    }
    $("#multiple").select2({
        placeholder: "Select a programming language",
        allowClear: true
    });

});

;(function($) {
    function generateId() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };


    function _DatePicker($el, options) {
        var id = generateId();
        var self = this;
        if (options && options.range) {
            var $modal, isModal = false;
            var $body = $('<div class="row"><div class="col-xs-12"><div class="datepicker_from_to" id="datepicker_'+id+'"></div></div></div>');
            var $ranges;
            if (options.customRange) {
                var ranges = options.customRange;
                $ranges = $('<div class="row"><div class="col-xs-12" style="border:1px solid #eee;"><div class="text-center"></div></div></div>');
                for (var i = 0; i < ranges.length; i++) {
                    for ( property in ranges[i] ) {
                        var range = property.toLowerCase().replace(' ', '-');
                        $ranges.find('div.text-center').append('<button class="'+range+' btn btn-xs btn-link">'+property+'</button>');
                    }
                }
            } else {
                $ranges = $('<div class="row"><div class="col-xs-12" style="border:1px solid #eee;"><div class="text-center"><button class="yesterday btn btn-xs btn-link">Yesterday</button><button class="today btn btn-xs btn-link">Today</button>'+
                                '<button class="term btn btn-xs btn-link">Term</button><button class="term-to-date btn btn-xs btn-link">Term to Date</button></div></div></div>');
            }


            if (options.clockpicker) {
                var inputStartTime = '<div class="form-group form-group-material"><label class="control-label">Start Time</label><div class="input-group start_time"><input readonly type="text" value="00:00:00" class="form-control"><span class="input-group-addon cursor-pointer"><i class="icon-alarm"></i></span></div></div>';
                var inputEndTime   = '<div class="form-group form-group-material"><label class="control-label">End Time</label><div class="input-group end_time">  <input readonly type="text" value="11:59:59" class="form-control"><span class="input-group-addon cursor-pointer"><i class="icon-alarm"></i></span></div></div>';

                $ranges.append('<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12 col-sm-offset-0 mt-20">' +
                    '<div class="row"><div class="col-sm-6">'+inputStartTime+'</div><div class="col-xs-12 visible-xs"></div><div class="col-sm-6">'+inputEndTime+'</div></div>' +
                '</div>');
            }

            $body.append($ranges);


            if ($el.parents('.modal-body').length) {
                $el.parents('.modal-body').addClass('not-include-calendar');
                isModal = true;
                $modal = $('<div class="modal-body pb-10 include-calendar" style="display:none;"></div>');
                var $modalFooter = $('<div class="modal-footer include-calendar" style="display:none;"><button type="button" class="btn btn-sm btn-link dpicker-cancel-btn legitRipple">Cancel</button> <button type="button" class="btn btn-sm dpicker-apply-btn btn-primary legitRipple">Apply</button></div>');
                $modal.append($body);
                $modal.insertAfter($el.parents('.modal-body'));
                $el.parents('.modal').find('.modal-footer').addClass('not-include-calendar');
                $modalFooter.insertAfter($el.parents('.modal').find('.modal-body.include-calendar'));
            } else {
                $modal = $('<div id="'+id+'" class="modal fade">' +
                    '<div class="modal-dialog">' +
                        '<div class="modal-content">' +
                            '<div class="modal-body pb-10"></div><div class="modal-footer">' +
        						'<button type="button" class="btn btn-sm btn-link dpicker-cancel-btn legitRipple">Cancel</button> <button type="button" class="btn btn-sm dpicker-apply-btn btn-primary legitRipple">Apply</button>' +
        						'</div></div></div></div>');

                $modal.find('.modal-body').html($body);
                $('body').append($modal);
            }

            var defaultDates = $el.val();
            var startDate = new Date();
            var endDate = new Date();
            if (defaultDates && defaultDates.split('-').length) {
                startDate = moment(defaultDates.split('-')[0]).toDate();
                endDate = moment(defaultDates.split('-')[1]).toDate();
            }


    		var _picker;
            if (options.view == 'months') {
                var currentY = (new Date()).getFullYear();
                self.currentY = currentY;
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var $wrapper = $('<div class="datepicker_from_to"><div class="pickmeup pmu-flat pmu-view-months"></div></div>');
                for (var j = 0; j < 2; j++) {
                    var $nav, instanceClass;
                    if (j === 0) {
                        $nav = $('<nav><div class="pmu-prev pmu-button"><i class="icon-arrow-left32"></i></div><div class="pmu-month pmu-button">'+(currentY-1)+'</div></nav>');
                        instanceClass = 'left-instance';
                    } else {
                        $nav = $('<nav><div class="pmu-month pmu-button">'+currentY+'</div><div class="pmu-next pmu-button"><i class="icon-arrow-right32"></i></div></nav>');
                        instanceClass = 'right-instance';
                    }
                    var $instance = $('<div class="pmu-instance '+ instanceClass +'"><div class="pmu-months"></div></div>');
                    $instance.prepend($nav);
                    for (var i = 0; i < months.length; i++) {
                        var $m = $('<div class="pmu-button month-btn">' + months[i] + '</div>');
                        $instance.find('.pmu-months').append($m);
                    }
                    $wrapper.find('.pmu-view-months').append($instance);
                }

                _picker = $modal.find('.modal-body').html($wrapper);
                self.initMonthPickerEvents(_picker);
            } else {
                _picker = pickmeup('#datepicker_' + id, {
                   flat: true,
                   date: [
                       startDate, endDate
                   ],
                   mode: 'range',
                   calendars : 2,
                   render: function (date, d) {
                       var dates = pickmeup('#datepicker_' + id).get_date(false);
                       var class_name = [];
                       if (!date || !dates.length) {return;}
                       if (date.valueOf() === dates[0].valueOf()) {
                           class_name.push('pmu-selected-first');
                       }
                       if (date.valueOf() === dates[dates.length - 1].valueOf()) {
                           class_name.push('pmu-selected-last');
                       }
                       return {class_name: class_name.join(' ')};
                     }
               });

               var element = document.getElementById('datepicker_' + id);
               element.addEventListener('pickmeup-change', function (e) {
                   $modal.find('button').removeClass('active');
                   $el.trigger('change');
               });
            }



            this._picker = _picker;
            this.$modal = $modal;
            this.$el = $el;
            this.isModal = isModal;
            this.options = options;

            if (isModal) {
                $el.on('click', function() {
                    $(this).parents('.modal-body.not-include-calendar').hide();
                    $(this).parents('.modal').find('.modal-footer.not-include-calendar').hide();

                    $(this).parents('.modal').find('.modal-body.include-calendar').show();
                    $(this).parents('.modal').find('.modal-footer.include-calendar').show();
                });
            } else {
                $el.attr('data-toggle', 'modal').attr('data-target', '#' + id);
            }



            this.buttonEvents($ranges);

            setTimeout(function() {
                if (isModal) {
                    $el.parents('.modal').find('.dpicker-apply-btn').trigger('click');
                } else {
                    $modal.find('.dpicker-apply-btn').trigger('click');
                }

            }, 225);


            if (options.clockpicker) {
                if (jQuery().clockpicker) {
                    $modal.find('.start_time').clockpicker({
                        placement: 'top',
                        autoclose: true,
                        default: '00:00:00',
                        afterDone: function(e, d) {
                            var value = $modal.find('.start_time').find('input').val();
                            $modal.find('.start_time').find('input').val(value + ':00');
                        }
                    });

                    $modal.find('.end_time').clockpicker({
                        placement: 'top',
                        autoclose: true,
                        default: '23:59:59',
                        afterDone: function(e, d) {
                            var value = $modal.find('.end_time').find('input').val();
                            $modal.find('.end_time').find('input').val(value + ':59');
                        }
                    });
                } else {
                    console.warn('Please include Clockpicker plugin!');
                }
            }


        } else {
            // ***** SINGLE SELECT ******
            var defaultDate = $el.val();
            $el.attr('id', id);
            var _picker = pickmeup('#' + id, {
    			// position: 'right', //We can add position to the plugin's option later.
                format: 'm/d/Y',
    			hide_on_select : true
    		});


            var element = document.getElementById(id);
            element.addEventListener('pickmeup-change', function (e) {
                $el.trigger('change');
                if ($el.is('button')) {
                    var res = moment(_picker.get_date()).format('MM/DD/YYYY');
                    $el.find('span:last').text(res);
                }
            });

            if (defaultDate) {
                _picker.set_date(defaultDate);
            }
            if ($el.is('button')) {
                var res = moment(_picker.get_date()).format('MM/DD/YYYY');
                $el.find('span:last').text(res);
            }


        }

    };


    _DatePicker.prototype.buttonEvents = function($ranges) {
        var picker = this._picker;
        var $modal = this.$modal;
        var $el = this.$el;
        var isModal = this.isModal;
        var self = this;

        if (self.options.hasAll) {
            $ranges.find('div.text-center').prepend('<button class="all btn btn-xs btn-link">All</button>');
        }

        if (self.options.customRange) {
            var ranges = self.options.customRange;
            $ranges.find('button').on('click', function() {
                $ranges.find('button').removeClass('active');
                $(this).addClass('active').trigger('blur');
                for (var i = 0; i < ranges.length; i++) {
                    for ( property in ranges[i] ) {
                        var className = property.toLowerCase().replace(' ', '-');
                        var range = ranges[i][property];
                        if ($(this).hasClass(className)) {
                            picker.set_date(range);
                        }
                    }
                }
                if ($(this).hasClass('all')) {
                    picker.clear();
                }
            });
        } else {
            $ranges.find('button').on('click', function() {
                $ranges.find('button').removeClass('active');
                $(this).addClass('active').trigger('blur');
                if ($(this).hasClass('today')) {
                    picker.set_date([moment().toDate(), moment().toDate()]);
                } else if ($(this).hasClass('yesterday')) {
                    var yesterday = moment().add(-1, 'days');
                    picker.set_date([yesterday.toDate(), yesterday.toDate()]);
                } else if ($(this).hasClass('term')) {
                    picker.set_date([moment().toDate(), moment().add(+7, 'days').toDate()]);
                } else if ($(this).hasClass('term-to-date')) {
                    picker.set_date([moment().startOf('month').toDate(), moment().endOf('month').toDate()]);
                } else if ($(this).hasClass('all')) {
                    picker.clear();
                }
            });
        }




        if (isModal) {
            $el.parents('.modal').find('.dpicker-cancel-btn').on('click', function() {
                $el.parents('.modal').find('.modal-body.include-calendar').hide();
                $el.parents('.modal').find('.modal-footer.include-calendar').hide();

                $el.parents('.modal-body.not-include-calendar').show();
                $el.parents('.modal').find('.modal-footer.not-include-calendar').show();
            });

            $el.parents('.modal').find('.dpicker-apply-btn').on('click', function() {
                self.setFieldValue();
                $el.parents('.modal').find('.dpicker-cancel-btn').trigger('click');
            });

        } else {
            $modal.find('.dpicker-cancel-btn').on('click', function() {
                $modal.modal('hide');
            });

            $modal.find('.dpicker-apply-btn').on('click', function() {
                self.setFieldValue();
                $modal.find('.dpicker-cancel-btn').trigger('click');
            });
        }
    };


    _DatePicker.prototype.setFieldValue = function() {
        if (!this._picker.get_date) {
            return;
        }
        var $el = this.$el;
        var dates = this._picker.get_date(false);

        var startTime = this.$modal.find('.start_time > input').val();
        var endTime = this.$modal.find('.end_time > input').val();
        var options = this.options;

        var result = '';
        if (dates.length >= 2) {
            if (options.clockpicker) {
                result += moment(dates[0]).format('DD MMM YYYY') + ' ' + startTime + ' - ';
                result += moment(dates[1]).format('DD MMM YYYY') + ' ' + endTime;
            } else {
                result += moment(dates[0]).format('DD MMM YYYY') + ' - ';
                result += moment(dates[1]).format('DD MMM YYYY');
            }


        } else {
            result = 'All';
        }

        if ($el.is('input')) {
            $el.val(result).trigger('change');
        } else {
            $el.children('div').addClass('pull-left').html('<span class="text-semibold">Date: </span>' + result);
        }

        if (this.options && {}.toString.call(this.options.onDone) === '[object Function]') {
            this.options.onDone(result);
        }
    };


    // _DatePicker.prototype.initMonthPickerEvents = function($picker) {
    //     var self = this;
    //
    //     self.selectedYM = {
    //         months: [],
    //         years: [],
    //     };
    //
    //     var state = 0;
    //
    //     $picker.find('.left-instance .pmu-prev').on('click', function() {
    //         self.currentY--;
    //         $(this).parent().children('.pmu-month.pmu-button').text(self.currentY - 1);
    //         $picker.find('.right-instance .pmu-month.pmu-button').text(self.currentY);
    //     });
    //
    //     $picker.find('.right-instance .pmu-next').on('click', function() {
    //         self.currentY++;
    //         $(this).parent().children('.pmu-month.pmu-button').text(self.currentY);
    //         $picker.find('.left-instance .pmu-month.pmu-button').text(self.currentY - 1);
    //     });
    //
    //     $picker.find('.left-instance .month-btn').on('click', function() {
    //         if (state == 0) {
    //             self.selectedYM.months = [$(this).text()];
    //             self.selectedYM.years = [self.currentY - 1];
    //             $picker.find('.pmu-selected').removeClass('pmu-selected').removeClass('pmu-selected-first').removeClass('pmu-selected-last');
    //             $(this).addClass('pmu-selected-first');
    //             state = 1;
    //         } else {
    //             self.selectedYM.months.push($(this).text());
    //             self.selectedYM.years.push(self.currentY - 1);
    //             $(this).addClass('pmu-selected-last');
    //             self.sortMonths($picker);
    //             state = 0;
    //         }
    //         $(this).addClass('pmu-selected');
    //     });
    //
    //     $picker.find('.right-instance .month-btn').on('click', function() {
    //         if (state == 0) {
    //             self.selectedYM.months = [$(this).text()];
    //             self.selectedYM.years = [self.currentY];
    //             $picker.find('.pmu-selected').removeClass('pmu-selected').removeClass('pmu-selected-first').removeClass('pmu-selected-last');
    //             $(this).addClass('pmu-selected-first');
    //             state = 1;
    //         } else {
    //             self.selectedYM.months.push($(this).text());
    //             self.selectedYM.years.push(self.currentY);
    //             $(this).addClass('pmu-selected-last');
    //             self.sortMonths($picker);
    //             state = 0;
    //         }
    //         $(this).addClass('pmu-selected');
    //     });
    //
    // };


    // _DatePicker.prototype.sortMonths = function($picker) {
    //     var selectedYM = this.selectedYM;
    //
    //     if (selectedYM.years[0] > selectedYM.years[1]) {
    //         var newYM = {
    //             months: [],
    //             years: []
    //         };
    //
    //         newYM.months.push(selectedYM.months[1]);
    //         newYM.months.push(selectedYM.months[0]);
    //
    //         newYM.years.push(selectedYM.years[1]);
    //         newYM.years.push(selectedYM.years[0]);
    //
    //
    //         this.selectedYM = newYM;
    //
    //         var $start = $picker.find('.pmu-selected-last').removeClass('pmu-selected-last');
    //         var $end = $picker.find('.pmu-selected-first').removeClass('pmu-selected-first');
    //
    //         $start.addClass('pmu-selected-first');
    //         $end.addClass('pmu-selected-end');
    //     }
    // };


    $.fn.calendar = function(options) {
        return this.each(function() {
            (new _DatePicker($(this), options));
        });
    };
})(jQuery);

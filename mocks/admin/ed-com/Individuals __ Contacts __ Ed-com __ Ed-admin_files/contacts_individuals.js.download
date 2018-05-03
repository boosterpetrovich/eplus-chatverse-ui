$(function() {
	
	initProgramsTree();
	initOrganisationTree();
	
	    $(document).on('click', 'ul.group-by a', function(event) {
        event.preventDefault();
        var value = $(this).text();
        $(this).parents('ul').prev().find('span.value').text(value);
        // $('.subject-tree-panel').hide();
        if (value.toLowerCase() == 'person entity') {
            $('.group-by-person').show();
			$('.group-by-program').hide();
            $('.group-by-organisation').hide();
        }    
		if (value.toLowerCase() == 'organisation') {
            $('.group-by-person').hide();
            $('.group-by-program').hide();
            $('.group-by-organisation').show();
        }   
		if (value.toLowerCase() == 'program') {
            $('.group-by-person').hide();
            $('.group-by-program').show();
            $('.group-by-organisation').hide();
        } 
		// else if (value.toLowerCase() == 'subject tree'){
            // $('.subject-tree-panel').show();
            // $('.program-track').hide();
		// }

        $('ul.group-by').children('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

});

function initProgramsTree() {
	$('.programs-tree').jstree({
		"core" : {
		   // so that create works
		   "check_callback" : true,
		   "dblclick_toggle" : false,
			"themes" : {
			  "variant" : "large",
			  "dots": true,
			  "icons": false
		  },
		  "search": {
			  "show_only_matches" : true
		  },
		 },
		 "search": {
		   "show_only_matches" : true
		 },
		 "checkbox" : {
			"three_state": true
		},
		 "plugins" : ["search", "checkbox"]

	}).on('loaded.jstree', function() {
		$(this).jstree('open_all');
	}).on("refresh.jstree", function (event, data) {
		$(this).jstree("open_all");
	}).on("select_node.jstree", function () {
		programsTreeChanged(this);
	}).on("deselect_node.jstree", function () {
		programsTreeChanged(this);
	});

    setTimeout(function() {
        $('.programs-tree').jstree('refresh');
    }, 50)



    var to = false;
    $('.programs-tree-search').keyup(function () {
      if(to) { clearTimeout(to); }
      to = setTimeout(function () {
          var v = $('.programs-tree-search').val();
          $('.programs-tree').jstree(true).search(v);
          // $('.organisation-tree_modal.independent').jstree(true).search(v);
      }, 250);
    });


}

function programsTreeChanged(el) {
	var nodes = $(el).jstree().get_selected('full', true);
    var programs = [], activities = [], nodeActivities = [];

	// $('#selected-organisations-popover ul.organisation-list').html('');
    $.each(nodes,function(i, node) {
		var text = $(node.text).text() ? $(node.text).text() : node.text;
        if (node.data.type == 'activity') {
			activities.push(text.trim());
			nodeActivities.push(node);
		}

    });

    nodeActivities.sort(function(a, b) {
        var aId = Number(a.id.split('_')[1]);
        var bId = Number(b.id.split('_')[1]);
        return aId - bId;
    });

 	var list = [];
	var lastIndex = 0;
	var str = '';
	for (var i = 0; i < nodeActivities.length; i++) {
		var parents = nodeActivities[i].parents;
		for (var j = parents.length - 1; j >= 0 ; j--) {
			if (parents[j] != '#') {
				var text = $('#' + parents[j] + '_anchor').text().trim();
                text = text.replace(/(<([^>]+)>)/ig,"");
				if (list.indexOf(text) == -1) {
                    lastIndex = (parents.length - 2 - j)*15;
                    var tick = '';
                    if ($('#' + parents[j] + '_anchor').hasClass('jstree-clicked')) {
                        tick = '<span><i class="icon-check2"></i></span> ';
                    }
                    if ($('#' + parents[j]).attr('data-type') == 'program') {
                        programs.push(text);
                    }
                    str += '<div class="row no-margin mb-5" style="padding-left:' + (lastIndex) + 'px">' +
                            '<div class="col-xs-12 no-padding">' + tick + text + '</div></div>';
                    list.push(text);
				}
			}
		}
        var text = nodeActivities[i].text.trim();
        text = text.replace(/(<([^>]+)>)/ig,"");
        if (list.indexOf() == -1) {
            var tick = '';
            if (nodeActivities[i].state.selected) {
                tick = '<span><i class="icon-check2"></i></span> ';
            }
            str += '<div class="row no-margin mb-5" style="padding-left:' + (lastIndex + 15) + 'px">' +
                    '<div class="col-xs-12 no-padding">' + tick + text + '</div></div>';
            list.push(text);
        }
	}

	$('#selected-programs-popover .programs-list').html('<div class="popover-tree">' + str + '</div>');

    if (programs.length) {
		$('span.activities').text(': ' + programs[0]);
        $('span.selected-programs').text(programs.length);
	} else {
		$('span.activities').text(':');
        $('span.selected-programs').text('');
	}
	if (activities.length) {
		$('span.activities').append(' (' + activities[0] + ', ...)');
	}

	if (programs.length == 0 && activities.length == 0) {
		$('span.activities').text('');
	}



	initProgramsPopover();

}


function initProgramsPopover() {
  $('.selected-programs').popover('destroy');
    setTimeout(function() {
        $('.selected-programs').popover({
           'html': true,
           "trigger": 'click',
           "placement": 'left',
           container: 'body',
           content: $($('#selected-programs-popover').html()).attr('id','')
       }).on('click', function(event) {
           event.preventDefault();
           $('.close').click(function(e){
               $(this).parents(".popover").popover('hide')
           });
       });
    }, 250);
}

//-----------------
function initOrganisationTree() {
    $('.organisation-tree_modal').each(function(i, tree) {
		var threeState = $(tree).attr('data-three-state') == 'false' ? false : true;
		$(tree).jstree({
			"core" : {
			   // so that create works
			   "check_callback" : true,
			   "dblclick_toggle" : false,
				"themes" : {
				  "variant" : "large",
				  "dots": true,
				  "icons": false
			  },
			  "search": {
	   			  "show_only_matches" : true
		 	  },
			 },
			 "search": {
			   "show_only_matches" : true
			 },
			 "checkbox" : {
				"three_state": threeState
			},
			 "plugins" : ["search", "checkbox"]

		}).on('loaded.jstree', function() {
		    $(this).jstree('open_all');
		}).on("refresh.jstree", function (event, data) {
	        $(this).jstree("open_all");
	    }).on("select_node.jstree", function () {
	        treeChanged(this);
	    }).on("deselect_node.jstree", function () {
	        treeChanged(this);
	    });
	});


	$('.organisation-tree_modal').jstree('refresh');


    var to = false;
    $('.organisation-search').keyup(function () {
      if(to) { clearTimeout(to); }
      to = setTimeout(function () {
          var v = $('.organisation-search').val();
          $('.organisation-tree_modal').jstree(true).search(v);
          $('.organisation-tree_modal.independent').jstree(true).search(v);
      }, 250);
    });


    initOrganisatonSwitchery();
}



function treeChanged(el) {
    var nodes = $(el).jstree().get_selected('full', true);
    var selected = [];
    //
    var independent = $(el).attr('data-three-state') == 'false' ? true : false;


    $.each(nodes,function(i, node){
        var text = $(node.text).text() ? $(node.text).text() : node.text;
        selected.push(text);
    });


    if (selected.length > 1) {
        $('[data-target="#modal-org-tree"] > span').text(': ' + selected[0] + ', ' + selected[1]);
        $('.selected-organisations').text(selected.length);

    } else if (selected.length) {
        $('[data-target="#modal-org-tree"] > span').text(': ' + selected[0]);
        $('.selected-organisations').text(selected.length);
    } else {
        $('[data-target="#modal-org-tree"] > span').text('');
        $('.selected-organisations').text('');
    }


    drawPopoverTree(el, independent,'location');
}

function drawPopoverTree(el, independent,type_tree) {
    var nodes = $(el).jstree().get_selected('full', true);

    var leafs = [];
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].children.length == 0 && !independent) {
            leafs.push(nodes[i]);
        } else if (independent) {
            leafs.push(nodes[i]);
        }
    }

    leafs.sort(function(a, b) {
        var aId = Number(a.id.split('_')[1]);
        var bId = Number(b.id.split('_')[1]);
        return aId - bId;
    });


    var list = [];
    var lastIndex = 0;
    var str = '';
    for (var i = 0; i < leafs.length; i++) {
        var parents = leafs[i].parents;
        for (var j = parents.length - 1; j >= 0 ; j--) {
            if (parents[j] != '#') {
                var text = $('#' + parents[j] + '_anchor').text().trim();
                text = text.replace(/(<([^>]+)>)/ig,"");
                if (list.indexOf(text) == -1) {
                    lastIndex = (parents.length - 2 - j)*15;
                    var tick = '';
                    if ($('#' + parents[j] + '_anchor').hasClass('jstree-clicked')) {
                        tick = '<span><i class="icon-check2"></i></span> ';
                    }
                    str += '<div class="row no-margin mb-5" style="padding-left:' + (lastIndex) + 'px">' +
                            '<div class="col-xs-12 no-padding">' + tick + text + '</div></div>';
                    list.push(text);
                }
            }
        }
        var text = leafs[i].text.trim();
        text = text.replace(/(<([^>]+)>)/ig,"");
        if (list.indexOf() == -1) {
            var tick = '';
            if (leafs[i].state.selected) {
                tick = '<span><i class="icon-check2"></i></span> ';
            }
            if (independent) {
                var level = Number($('#' + leafs[i].id + '_anchor').parent('li').attr('aria-level')) - 1;
                str += '<div class="row no-margin mb-5" style="padding-left:' + (level*15) + 'px">' +
                        '<div class="col-xs-12 no-padding">' + tick + text + '</div></div>';
            } else {
                str += '<div class="row no-margin mb-5" style="padding-left:' + (lastIndex + 15) + 'px">' +
                        '<div class="col-xs-12 no-padding">' + tick + text + '</div></div>';
            }


            list.push(text);
        }

    }
	if (type_tree == 'location'){
		$('#selected-organisations-popover .organisation-list').html('<div class="popover-tree">' + str + '</div>');
		initOrganisationPopover();
	}
	if (type_tree == 'program'){
		$('#selected-programs-popover .programs-list').html('<div class="popover-tree">' + str + '</div>');
		initProgramsPopover();
	}
    if (type_tree == 'cycles') {
        $('#selected-cycles-popover .cycles-list').html('<div class="popover-tree">' + str + '</div>');
		initCyclesPopover();
    }
}


function initOrganisationPopover() {
    $('.selected-organisations').popover('destroy');
    setTimeout(function() {
        $('.selected-organisations').popover({
           'html': true,
           "trigger": 'click',
           "placement": 'left',
           container: 'body',
           content: $($('#selected-organisations-popover').html()).attr('id','')
       }).on('click', function(event) {
           event.preventDefault();
           $('.close').click(function(e){
               $(this).parents(".popover").popover('hide')
           });
       });
    }, 250);
}


function initOrganisatonSwitchery() {
    var switches = Array.prototype.slice.call(document.querySelectorAll('#modal-switchery'));
    switches.forEach(function(html) {
        var switchery = new Switchery(html, {color: '#4CAF50'});
    });

    $('#modal-switchery').on('change', function(e) {
        if (this.checked) {
            $('.organisation-tree_modal').show();
            $('.organisation-tree_modal.independent').hide();
            $('#modal-option-multi-select').show();
            $('#modal-option-single-select').hide();
            treeChanged($('.organisation-tree_modal:not(.independent)'));
        } else {
            $('.organisation-tree_modal').hide();
            $('.organisation-tree_modal.independent').show();
            $('#modal-option-multi-select').hide();
            $('#modal-option-single-select').show();
            treeChanged($('.organisation-tree_modal.independent'));
        }
    });

    setTimeout(function() {
        $('#modal-switchery').trigger('change');
    }, 1000);
}

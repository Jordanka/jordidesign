var JSONData = [
	{
		id: 1,
		fullName: "Palmina Trombetta",
		eMail: "palmina.trombetta@tonic3.com",
		task: "UX Designer"
	},{
		id: 2,
		fullName: "Garry Haralambou",
		eMail: "garry.haralambou@tonic3.com",
		task: "UX Designer"
	},{
		id: 3,
		fullName: "Elisa Cibrario",
		eMail: "elisa.cibrario@tonic3.com",
		task: "UX Designer"
	},{
		id: 4,
		fullName: "Scott Souder",
		eMail: "scott.souder@tonic3.com",
		task: "UX Designer"
	},{
		id: 5,
		fullName: "Arthur Edwards",
		eMail: "arthur.edwards@tonic3.com",
		task: "UX Designer"
	},{
		id: 6,
		fullName: "Joe Jennings",
		eMail: "joe.jennigs@tonic3.com",
		task: "UX Designer"
	},{
		id: 7,
		fullName: "Sreedevi Rao",
		eMail: "sreedevi.rao@tonic3.com",
		task: "UX Designer"
	},{
		id: 8,
		fullName: "James Duffy",
		eMail: "james.duffy@tonic3.com",
		task: "UX Designer"
	},{
		id: 9,
		fullName: "Michael Vaughn",
		eMail: "michael.vaughn@tonic3.com",
		task: "UX Designer"
	},{
		id: 10,
		fullName: "Catherine Snow",
		eMail: "catherine.snow@tonic3.com",
		task: "UX Designer"
	},{
		id: 11,
		fullName: "Melissa Carvalho",
		eMail: "melissa.carvalho@tonic3.com",
		task: "UX Designer"
	},{
		id: 12,
		fullName: "Louis Capone",
		eMail: "louis.capone@tonic3.com",
		task: "UX Designer"
	},{
		id: 13,
		fullName: "Ambrose Rivera",
		eMail: "ambrose.rivera@tonic3.com",
		task: "UX Designer"
	},{
		id: 14,
		fullName: "Laura Lipscomb",
		eMail: "laura.lipscomb@tonic3.com",
		task: "UX Designer"
	},{
		id: 15,
		fullName: "Karen Mann",
		eMail: "karen.mann@tonic3.com",
		task: "UX Designer"
	},{
		id: 16,
		fullName: "Dillon Hesse",
		eMail: "dillon.hesse@tonic3.com",
		task: "UX Designer"
	},{
		id: 17,
		fullName: "Marti Gold",
		eMail: "marti.gold@tonic3.com",
		task: "UX Designer"
	},{
		id: 18,
		fullName: "Pamela Rock",
		eMail: "pamela.rock@tonic3.com",
		task: "UX Designer"
	},{
		id: 19,
		fullName: "Arturo Sanchez",
		eMail: "arturo.sanchez@tonic3.com",
		task: "UX Designer"
	},{
		id: 20,
		fullName: "Andrea Payret",
		eMail: "andrea.payret@tonic3.com",
		task: "UX Designer"
	},{
		id: 21,
		fullName: "Christopher Lee",
		eMail: "christopher.lee@tonic3.com",
		task: "UX Designer"
	},{
		id: 22,
		fullName: "Valerie Mickell",
		eMail: "valerie.mickell@tonic3.com",
		task: "UX Designer"
	},{
		id: 23,
		fullName: "Prisca Soto",
		eMail: "prisca.soto@tonic3.com",
		task: "UX Designer"
	},{
		id: 24,
		fullName: "Aneil Razvi",
		eMail: "aneil.razvi@tonic3.com",
		task: "UX Designer"
	},{
		id: 25,
		fullName: "Christopher Lee",
		eMail: "christopher.lee@tonic3.com",
		task: "UX Designer"
	},{
		id: 26,
		fullName: "Valerie Mickell",
		eMail: "valerie.mickell@tonic3.com",
		task: "UX Designer"
	},{
		id: 27,
		fullName: "Prisca Soto",
		eMail: "prisca.soto@tonic3.com",
		task: "UX Designer"
	},{
		id: 28,
		fullName: "Aneil Razvi",
		eMail: "aneil.razvi@tonic3.com",
		task: "UX Designer"
	},{
		id: 29,
		fullName: "Heather Atkinson",
		eMail: "heather.atkinson@tonic3.com",
		task: "UX Designer"
	},{
		id: 30,
		fullName: "Ryan Kotopka",
		eMail: "ryan.kotopka@tonic3.com",
		task: "UX Designer"
	},{
		id: 31,
		fullName: "Matt Bruce",
		eMail: "matt.bruce@tonic3.com",
		task: "UX Designer"
	},{
		id: 32,
		fullName: "Edward Sumner",
		eMail: "edward.sumner@tonic3.com",
		task: "UX Designer"
	},{
		id: 33,
		fullName: "Priscilla Lim",
		eMail: "priscilla.lim@tonic3.com",
		task: "UX Designer"
	},{
		id: 34,
		fullName: "Kinjal Poonatar",
		eMail: "kinjal.poonatar@tonic3.com",
		task: "UX Designer"
	},{
		id: 35,
		fullName: "Darcy Dewit",
		eMail: "darcy.dewit@tonic3.com",
		task: "UX Designer"
	},{
		id: 36,
		fullName: "Michael Lukus",
		eMail: "michael.lukus@tonic3.com",
		task: "UX Designer"
	},{
		id: 37,
		fullName: "Anita Cator",
		eMail: "anita.cator@tonic3.com",
		task: "UX Designer"
	}
];

(function($){
	var l = function(){};
	l._DIV = null;
	l.fn = {
		"data": function (e, json) { e.$.data = json; },
		"dataFilter": function (e, fn) { e.$.dataFilter = fn; },
		"ajax": function (e, url) { e.$.ajax = url; },
		"ajaxReady": function (e, fn) { e.$.ajaxReady = fn; },
		"ready": function (e, fn) { e.$.ready = fn; },
		"update": function(e) { l.Update(e, $(e).val()); }
	}

	l.Update = function(e, v) {
		if (e.$.data) {
			var retList = new Array();
			for(var d in e.$.data) {d = e.$.data[d];
				
				if (e.$.dataFilter) {
					ret = e.$.dataFilter(v, d);
					if (ret) retList.push(ret);
					//console.log(retList);
				}
			}
			
			if (e.$.ready) e.$.ready($(e), retList);
			return;
		}

		if (e.$.ajax) {
			$.ajax({
				url: e.$.ajax + v,
				success: function(d){
					if (e.$.ajaxReady) r = e.$.ajaxReady(d);
					console.log(e.$.ajax);
					if (r && e.$.ready) e.$.ready(e, r);
				}
			
			})	
		}
  		return;
	}

	l.arg = function(e, k, v) { if (l.fn[k]) l.fn[k](e, v); if (l.fn[v]) l.fn[v](e); }
	$.fn.AutoComplete = function(args) {
		
	    return this.each(function() {
	    	var e = this;
	    	if (!this.$) this.$ = function() {};
	    	if (!$(this).hasClass("AutoComplete®")) {
	    		$(this).on('input', function(){
	    			l.Update(e, $(this).val());
	    		})	    		
	    		$(this).addClass("AutoComplete®");
	    		l.Update(e, $(this).val());
	    	}

			for(a in args) { l.arg(this, a, args[a]); }	    	
	    });
	}
}(jQuery));


(function($){

	var $fromBox = $('#from_box'),
		$nameInput = $('.name'), 
		$lastnameInput = $('.lastname'),
		$emailInput = $('.email'),
		$roleInput = $('.role'),
		$toBox = $('#to_box'),
		$whyBox = $('#why_box'),
		$badge = $('.badge'),
		$submit = $('.submit input')
		$blackout = $('.blackout'),
		$modalBadge = $('#modal_badge'),
		$modalConfirm = $('#modal_confirm');

	//Ok Events
	fromOk = function () {
		if ($nameInput.val() != "" && $lastnameInput.val() != "" && $emailInput.val() != "" && $roleInput.val() != ""){
			$fromBox.children().css('border-top', '2px solid #f26a25');
			$fromBox.find('.ok').show();
			$fromBox.find('input').each ( function() {
	            $(this).next().hide();
	    	});
		} else {
			$fromBox.children().css('border-top', '2px solid black');
			$fromBox.find('.ok').hide();
		} 
	};	
	
	$nameInput.focusout( function() {
		fromOk(); 		
	});

	$lastnameInput.focusout( function() {
		fromOk(); 	
	});

	$emailInput.focusout( function() {
		fromOk();		
	});

	$roleInput.focusout( function() {
		fromOk(); 		
	});

	$toBox.find('input').focusout( function() {
		if ($('.person').length){
	        $toBox.children().css('border-top', '2px solid #f26a25');
			$toBox.find('.ok').show();
			$toBox.find('input').next().hide();
	    } else {
			$toBox.children().css('border-top', '2px solid black');
			$toBox.find('.ok').hide();
		} 	 		
	});

	$whyBox.find('textarea').focusout( function() {
		if ($whyBox.find('textarea').val() != ""){
			$whyBox.children().css('border-top', '2px solid #f26a25');
			$whyBox.find('.ok').show();
			$whyBox.find('p').hide();
		} else {
			$whyBox.children().css('border-top', '2px solid black');
			$whyBox.find('.ok').hide();
		} 		
	});			

	//Badge Events
	$badge.find('img').on ('click', function() {
		var height = $('.canvas').height(),
			name = $(this).closest('.badge').find('h3').text(),
			description = $(this).closest('.badge').find('p').text(),
			src = $(this).attr('src');

		src = src.substr(0, src.indexOf('.'));
		src = src + '_big.jpg'; 
		
		$blackout.css('height', height);
		$blackout.show();
		$modalBadge.css("top", Math.max(0, (($(window).height() - $modalBadge.outerHeight()) / 2) + $(window).scrollTop()) + "px");
		$modalBadge.css("left", Math.max(0, (($(window).width() - $modalBadge.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
		$modalBadge.find('img').attr('src', src);
		$modalBadge.find('h1').text(name);
		$modalBadge.find('p').text(description);
		$modalBadge.show();
	});

	$('.ratio').click(function(){
	    if ($(this).is(':checked')){
	      $('.badges_stroke').css('border-top', '2px solid #f26a25');
	      $('.badges_stroke').find('img').show();
	      $('.badges_val').hide();
	    }
	});

	//Submit Events
	clearForm = function () {
		$nameInput.val('');
		$lastnameInput.val('');
		$emailInput.val('');
		$emailInput.val('');
		$roleInput.val('');
		$whyBox.find('textarea').val('');
		$('.ratio').each(function(){
		    $(this).prop('checked', false);   
		});
		$fromBox.children().css('border-top', '2px solid black');
		$fromBox.find('.ok').hide();
		$toBox.children().css('border-top', '2px solid black');
		$toBox.find('.ok').hide();
		$whyBox.children().css('border-top', '2px solid black');
		$whyBox.find('.ok').hide();
		$('.badges_stroke').css('border-top', '2px solid black');
	    $('.badges_stroke').find('img').hide();
	    $PersonList[0].clear();
	};

	validateForm = function () {
		var success = true;
    	$fromBox.find('input').each ( function() {
            if($(this).val() == "") {
                $(this).next().show();
                success = false;
            } 
    	});

    	if($('.person').length == 0){
    		$toBox.find('input').next().show();
    		success = false;
    	}

    	if($whyBox.find('textarea').val() == "") {
            $whyBox.find('p').show();
            success = false;
        }

        var cont = 0;
        $('.ratio').each(function(){
        	if($(this).is(':checked')) {
        		cont++;
        	}
		});

		if (cont == 0) {
			$('.badges_val').show();
			success = false;
		}

		cont = 0;

    	return success;
	}

	$submit.on('click', function (e){
		e.preventDefault();
		if(!validateForm()) {
			console.log('HOla');
		} else {
			var height = $('.canvas').height();
			$blackout.css('height', height);
			$blackout.show();
			$modalConfirm.css("top", Math.max(0, (($(window).height() - $modalConfirm.outerHeight()) / 2) + $(window).scrollTop()) + "px");
			$modalConfirm.css("left", Math.max(0, (($(window).width() - $modalConfirm.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
			$modalConfirm.show();
			clearForm();
		}				
	});

	$blackout.on('click', function(){
		$modalBadge.hide();
		$modalConfirm.hide();
		$(this).hide();
	});

	$modalBadge.find('.close').on('click', function () {
		$modalBadge.hide();
		$blackout.hide();
	});

	$modalConfirm.find('.close').on('click', function () {
		$modalConfirm.hide();
		$blackout.hide();
	});

	//On load
	$("#first").fadeOut();	

	$(".form_cont input.search").focusin(function(){
		$ac = $(this).parent().find(".autocomplete");
		$ac.fadeIn();
	})
	$(".form_cont input.search").focusout(function(){
		$ac = $(this).parent().find(".autocomplete");
		$ac.fadeOut();
	})

	$PersonList = $(".Persons");
	$PersonList[0].clear = function() {
		$(this).empty();
	}

	$(".form_cont input.search").AutoComplete({
		data: JSONData,
		dataFilter: function(v, e) {
			v = v.toLowerCase();
			if (e.fullName.toLowerCase().indexOf(v) > -1 ) return e;
			if (e.eMail.toLowerCase().indexOf(v) > -1 ) return e;

			return null;
		},
		ready: function ($e, l) {
			$ac = $e.parent().find(".autocomplete");
			$ac.show();
			$ac.empty();
			if (l.length == 0 ) {
				$("<div class='warning'>No matches found</div>").appendTo($ac);
			}

			for(var ii in l) { var i = l[ii]; if (ii >= 4) break;
				$li = $("<li/>");
				$li[0].Person = i;
				$li.attr("id", i.id);
				$("<span>"+ i.fullName + "</span>").appendTo($li);
				$("<span> ("+ i.eMail + ")</span>").appendTo($li);
				$li.appendTo($ac);
				//$(".form_cont input.search").AutoComplete(["update"]);
				
				$li.on("click",function(){
					$l = $e.parent().find(".Persons");
					$Person =  $("<div/>").appendTo($l);
					$Person.attr("id", this.Person.id);
					$Person.addClass("person");

					$("<img src='assets/images/delete.jpg'>").appendTo($Person).on("click",function(){
						$(this).parent().remove();
						if($('.person').length == 0){
				    		$toBox.children().css('border-top', '2px solid black');
							$toBox.find('.ok').hide();
				    	}	
					})
					$("<h3>" + this.Person.fullName + "</h3>").appendTo($Person);
					$("<p>" + this.Person.task + "</p>").appendTo($Person);
					$("<p>" + this.Person.eMail + "</p>").appendTo($Person);

					$(".form_cont input.search").val('');
					$toBox.children().css('border-top', '2px solid #f26a25');
					$toBox.find('.ok').show();
					$toBox.find('input').next().hide();
				})
			}
		}
	});

})(jQuery);
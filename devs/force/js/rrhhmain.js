var JSON_tech = {
	"Inglés" : {"area" : "Idiomas"},
	"Portugués" : {"area" : "Idiomas"},
	"Español" : {"area" : "Idiomas"},
	"CSS3": { "area": "Diseño" },
	"Photoshop": { "area": "Diseño" },
	"Illustrator": { "area": "Diseño" },
	"MS Paint": { "area": "Diseño" },
	"PHP": { "area": "Desarrollo" },
	"JavaScript": { "area": "Desarrollo" },
	"HTML5": { "area": "Desarrollo" },
	"Awesomeness": { "area": "Desarrollo" },
	"Redes": { "area": "IT" },
	"Hardware": { "area": "IT" },	
	"Clientes": { "area": "Gestión" },
	"Staff": { "area": "Gestión" },
	"Facebook": { "area": "Social Media" },
	"Google+": { "area": "Social Media" },
	"Google-": { "area": "Social Media" },
	"Google Analytics": { "area": "Métricas" },	
};

(function($){
	//Menu lateral
	var $menuBtn = $('.menu-btn');
	var $menuCont = $('#menu-container');

	$menuBtn.on('click', function(event){

    	event.preventDefault();
    	
    	// toggle open class
    	$menuCont.toggleClass("open");
    	
    	// slide menu
    	if ($menuCont.hasClass("open")) {
	    	$menuCont.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	$menuCont.animate({
		    	left: -$menuCont.width()
	    	}, 250);	
    	}
    });

    //Listado de tecnologías
	var $Models = {};
	
	if ($("[techModel]").length != 0) {
		$("[techModel]").each(function(){ var $this = $(this); var $model = $this.clone();
			$model.removeAttr("techModel").$modelParent = $(this.parentNode);
			$Models[$this.attr("techModel")] = $model;
		}).remove();

		for (var t in JSON_tech) {
			var $ntech = $Models["Tech"].clone();
			$ntech.find("[caption]").html(t);
			$ntech.attr("techArea", JSON_tech[t].area);
			$ntech.appendTo($Models["Tech"].$modelParent);

			if (!$Models["techArea"].$modelParent.find("[area = '" + JSON_tech[t].area+  "']").length) {
				var $ntechArea = $Models["techArea"].clone()

				
				$ntechArea.find("input").attr("area", JSON_tech[t].area);
				
				$ntechArea.find("[caption]").html(JSON_tech[t].area)
				$ntechArea.appendTo($Models["techArea"].$modelParent);		
			}
		}
		$("[tech]").hide();
		$("body").on('click', "[techArea]",function(){ $this = $(this);
			if ($this.is(":checked")) {
				$("[techArea = '" + $this.attr("area") + "']").fadeIn();
			} else {
				$("[techArea = '" + $this.attr("area") + "']").fadeOut();
			}
		})
	}

	var $Header = $("body [header]");	
	if (document.setHeader) {
		$Header.hide();
		document.setHeader({title: $Header.find("h1").text()});
	}

	// Filtros
	$('.filter_title a').on('click', function(e){
		e.preventDefault();
		$('#other_filters').toggleClass('hide');
		if($('.export_title').css('margin-top') == '30px'){
			if($('.novedad_list').length != 0) {
				$('.export_title').css('margin-top', '100px');
			} else {
				$('.export_title').css('margin-top', '160px');
			}
			$(this).text('-');
		} else {
			$('.export_title').css('margin-top', '30px');
			$(this).text('+');
		}
	});

	$('.export_title a').on('click', function(e){
		e.preventDefault();
		$('#export').toggleClass('hide');
		if($('#example_wrapper').css('margin-top') == '30px'){
			if($('.activo_small').length != 0) {
				$('#example_filter').css('top', '-198px');
			};

			$('#example_wrapper').css('margin-top', '80px');
			$(this).text('-');
		} else {
			$('#example_wrapper').css('margin-top', '30px');
			if($('.activo_small').length != 0) {
				$('#example_filter').css('top', '-148px');
			};

			$(this).text('+');
		}
	});

	// Tabla
    $('#example').DataTable();
     function isTextNode(){
		return( this.nodeType === 3 );
	}

    var textNodes = $('#example_filter label').contents().filter( isTextNode );
    var lastTextNode = textNodes.last();
    lastTextNode.replaceWith(
        document.createTextNode( "Búsqueda:" )
    );

	var $Form = $("[profile]");
	if ($Form.length) {
		$Form.$Steps = $("[step]");
		$Form.$Steps.hide();

		$Form.prevStep = function() {
			var c = $Form.$currentStep.attr("step"); c--;
			var $p = $Form.$Steps.filter("[step = '"+ c + "']");
			if ($p.length) $Form.setStep(c);
		}

		$Form.nextStep = function() {
			var c = $Form.$currentStep.attr("step"); c++;
			var $n = $Form.$Steps.filter("[step = '"+ c + "']");
			if ($n.length) $Form.setStep(c);
		}

		$Form.setStep = function(n) {
			n = parseInt(n);
			$Form.$Steps.hide();
			$Form.$currentStep = $Form.$Steps.filter("[step = '"+ n + "']");
			$Form.$currentStep.show();
			$("body, html").animate({scrollTop:0}, '500', 'swing', function() { /* null */ });
			var $tostep = $("[tostep = '"+ n+"']");
			if ($("[step = '"+(n-1)+"']").length) $("[prev]").fadeIn();
			else $("[prev]").fadeOut();
			if ($("[step = '"+(n+1)+"']").length) $("[next]").fadeIn();
			else $("[next]").fadeOut();


			$('[tostep]').css("border-top", "2px solid black")
				.find('h2').css("font-weight", "normal");

			$tostep.css("border-top", "5px solid black")
				.find('h2').css("font-weight", "800");
		}

		$("[tostep]").on("click",function(){
			var thisStep = $(this);
			$Form.setStep($(this).attr("tostep"));

		})

		$(".submit .nav [prev]").on("click",$Form.prevStep)
		$(".submit .nav [next]").on("click",$Form.nextStep)

		$Form.setStep(1);
	}

	//Agrega grupos de formularios
	$("[duplicate]").on("click", function(){ var $this = $(this);
		this.model.after(this.clone.clone());
	})
	$("[duplicate]").each(function(){ var $this = $(this);
		var dup = $this.attr("duplicate");
		if (!this.clone) {
			this.model = $("[model = '"+ dup +"']");
			this.clone = this.model.clone();
			this.model.empty();
			this.model.hide();
			this.clone.removeAttr(dup);		
			if(dup == "addStudy" || dup == "addFormation"){
				this.clone.css('border-bottom', '1px solid #ccc');
				this.clone.css('padding-bottom', '30px');
			} else {
				$this.css('border-top', '1px solid #ccc');
				$this.css('margin-top', '30px');
				$this.css('padding-top', '10px');
			}
		}
		if (this.model.attr("keep") == 1) {
			$this.trigger("click");
		}
	})

	//Carga la foto del perfil
	$('.profile img').on('click', function(){
		$('.photo').click();
	});

	//Crea ventanas modales
	var $blackout = $("<blackout><center><data></data></center></blackout>");
	var $iframe = $("<iframe/>");

	$("body").append($blackout);
	$blackout.on("click", function(ev){
		ev.preventDefault();
		$blackout.hide();
	})

	$("body").on("click", "[modal-overlay]",function(){
		var $this = $(this);
		$blackout.fadeIn();
		//$.ajax({
			//url: $this.attr("modal-overlay"),
			//success: function(data) {				
				$iframe.attr("src", "overlays/"+ $this.attr("modal-overlay"));				
				$blackout.find("center data").empty().append($iframe);

				switch($this.attr("modal-overlay")) {
				    case "banks.html":
				        $iframe.css("height", "650px");
				        break;
				    case "novedades.html":
				        $iframe.css("height", "390px");
				        break;
				    case "tipo_novedades.html":
				        $iframe.css("height", "310px");
				        break;
				    case "sectores.html":
				        $iframe.css("height", "310px");
				        break;
				    case "posiciones.html":
				        $iframe.css("height", "430px");
				        break;
				    case "conocimientos.html":
				        $iframe.css("height", "410px");
				        break;
				    case "oficinas.html":
				        $iframe.css("height", "650px");
				        break;
				    default:
				        $iframe.css("height", "500px");
				}
				var top = ($blackout.height() - $iframe.height()) / 2 ;
				var left = ($blackout.width() - $iframe.width()) / 2 ;
				$iframe.css("top", Math.max(0, top) + "px");
				$iframe.css("left", Math.max(0, left) + "px");				
			//}
		//})
	})
}(jQuery));



(function($, Hbars) {

	//URLs
	var baseURL = 'http://www.jordidesign.com/library/';
	var listURL = baseURL + "api.php?action=list";
	var createURL = baseURL + "api.php?action=create";
	var updateURL = baseURL + "api.php?action=update";
	var deleteURL = baseURL + "api.php?action=delete";

	//Selectors
	var $listView = $('#list_view');
	var $detailView = $('#detail_view');
	var $formView = $('#form_view');
	var $sideNav = $('.sidebar');
	var $pageWrapper = $('#page-wrapper');
	var $loader = $("#loader");

	var $newWork = $('#new_work');
	var $allWorks = $('#all_works');
	var $dwWorks = $('#dw_works');
	var $dgWorks = $('#dg_works');
	var $diWorks = $('#di_works');

	var $backToList = $('#backtolist');
	var $detSeccion = $('#det-seccion');
	var $detSubseccion = $('#det-subseccion');
	var $detProveedor = $('#det-proveedor');
	var $detCliente = $('#det-cliente');
	var $detFecha = $('#det-fecha');
	var $detSkills = $('#det-skills');
	var $detDetalle = $('#det-detalle');
	var $detMiniatura = $('#det-miniatura');
	var $detImagenes = $('#det-imagenes');
	var $editWork = $('#edit');
	var $deleteWork = $('#delete');

	var $formTitle = $('.panel-heading h4');
	var $inputTitle = $('#title');
	var $inputSeccion = $('#seccion option');
	var $inputSubseccion = $('#subseccion option');
	var $inputProveedor = $('#proveedor option');
	var $inputCliente = $('#cliente option');
	var $inputFecha = $('#fecha');
	var $inputSkills = $('input:checkbox');
	var $inputDetalle = $('#detalle');
	var $inputMiniatura = $('#miniatura');
	var $inputImagenes = $('#imagenes');

	var $form = $formView.find("form");
	var $btnCancel = $formView.find("button");
	var $panelError = $("#panelError");

	var workData = {};
	var $thumb = null;
	var action = 'new';

	//___________GENERAL_____________

	//Loader
	var showLoader = function() {
		$loader.removeClass('hide');
	};

	var hideLoader = function() {
		$loader.addClass('hide');
	};

	//Error message
	var showErrorMessage = function(message) {
		$panelError.text(message);
		$panelError.removeClass("hide");
	};

	//___________LIST VIEW_____________

	//Inserta la data de cada thumb en un template y este a su vez en el DOM
	var addWork = function(work) {
		switch (work.seccion) {
			case "Diseño Web/Apps":
				work.clase = "panel-red";
				work.icon = "fa-exclamation-circle";
				break;

			case "UX/UI & Frontend":
				work.clase = "panel-yellow";
				work.icon = "fa-clock-o";
				break;

			case "Gráfico & Industrial":
				work.clase = "panel-green";
				work.icon = "fa-check-circle";
				break;
		}

		var source = $("#thumbs-template").html();
		var template = Hbars.compile(source);
		var div = template(work);
		$listView.find('#thumbs-cont').append(div);
	};

	//Trae la info de la bd e itera llamando a addWork
	var listWorks = function() {
		$.ajax(listURL, {
			type: 'GET',
			dataType: 'json'
		}).done(function(res) {
			if (!res.error) {
				var works = res.data.works;
				$.each(works, function(index, work) {
					addWork(work);
				});
			} else {
				showErrorMessage("No se pudo ontener la lista de proyectos");
			}
		});
	}

	//___________DETAILS VIEW_____________

	//Popula el objeto workData con la info del thumb seleccionado
	var loadWorkData = function(thumb) {
		var workData = {
			id: $(thumb).closest('.panel').find(".huge").text(),
			titulo: $(thumb).closest('.panel').find("h5").text(),
			seccion: $(thumb).closest('.panel').find('.seccion').text(),
			subseccion: $(thumb).closest('.panel').find('.subseccion').text(),
			proveedor: $(thumb).closest('.panel').find('.proveedor').text(),
			cliente: $(thumb).closest('.panel').find('.cliente').text(),
			fecha: $(thumb).closest('.panel').find('.fecha').text(),
			skills: $(thumb).closest('.panel').find('.skills').text(),
			detalle: $(thumb).closest('.panel').find('.detalle').text(),
			miniatura: $(thumb).closest('.panel').find('.miniatura').text(),
			imagenes: $(thumb).closest('.panel').find('.imagenes').text()
		};
		return workData;
	};

	//Publica la info de workData en el Detail View
	var prepareDetails = function(thumb) {
		$thumb = $(thumb).closest('.col-lg-3');
		workData = loadWorkData(thumb);
		$detailView.find('h5').text(workData.titulo);
		$detSeccion.text(workData.seccion);
		$detSubseccion.text(workData.subseccion);
		$detProveedor.text(workData.proveedor);
		$detCliente.text(workData.cliente);
		$detFecha.text(workData.fecha);
		$detSkills.text(workData.skills);
		$detDetalle.text(workData.detalle);
		$detMiniatura.text(workData.miniatura);
		$detImagenes.text(workData.imagenes);
	}

	//___________FORM VIEW_____________

	//Carga la info de taskData en el Form View
	var prepareForm = function() {
		$formTitle.text("Editar Tarea");
		$inputTitle.val(workData.titulo);
		$inputSeccion.each(function() {
			if (workData.seccion.indexOf($(this).val()) != -1) {
				$(this).prop("selected", true);
			}
		});
		$inputSubseccion.each(function() {
			if (workData.subseccion.indexOf($(this).val()) != -1) {
				$(this).prop("selected", true);
			}
		});
		$inputProveedor.each(function() {
			if (workData.proveedor.indexOf($(this).val()) != -1) {
				$(this).prop("selected", true);
			}
		});
		$inputCliente.each(function() {
			if (workData.cliente.indexOf($(this).val()) != -1) {
				$(this).prop("selected", true);
			}
		});
		$inputFecha.val(workData.fecha);
		$inputSkills.each(function() {
			if (workData.skills.indexOf($(this).val()) != -1) {
				$(this).attr("checked", true);
			}
		});
		$inputDetalle.val(workData.detalle);
		$inputMiniatura.val(workData.miniatura);
		$inputImagenes.val(workData.imagenes);
	}

	//Elimina las clases de alerta las validaciones
	var cleanErrorClass = function() {
		$panelError.text("");
		$panelError.addClass("hide");
		$(".form-group").removeClass("has-error");
	};

	//Vacia el form
	var cleanForm = function() {
		$formTitle.text("Crear Proyecto");
		$inputTitle.val("");
		$inputSeccion.prop("selected", "");
		$inputSubseccion.prop("selected", "");
		$inputProveedor.prop("selected", "");
		$inputCliente.prop("selected", "");
		$inputFecha.val("");
		$inputSkills.prop("selected", "");
		$inputDetalle.val("");
		$inputMiniatura.val("");
		$inputImagenes.val("");
	};

	//Popula el objeto taskData con la info del form
	var populateData = function() {
		workData.titulo = $inputTitle.val();
		workData.seccion = $inputSeccion.filter(":checked").val();
		workData.subseccion = $inputSubseccion.filter(":checked").val();
		workData.proveedor = $inputProveedor.filter(":checked").val();
		workData.cliente = $inputCliente.filter(":checked").val();
		workData.fecha = $inputFecha.val();
		$inputSkills.each(function(){
			if($(this).checked == true){
				console.log('ey');
			}
		    //workData.skills.push($(this).val());
		});
		//workData.skills = $inputSkills.filter(":checked").val();
		workData.detalle = $inputDetalle.val();
		workData.miniatura = $inputMiniatura.val();
		workData.imagenes = $inputImagenes.val();
		console.log(workData);
	};

	//Validación
	var validateData = function() {
		populateData();
		var valid = true;

		if (workData.titulo.length == 0) {
			valid = false;
			$inputTitle.closest(".form-group").addClass("has-error");
		}

		if (workData.seccion == null || workData.seccion == "Seleccionar") {
			valid = false;
			$inputSeccion.closest(".form-group").addClass("has-error");
		}

		if (workData.subseccion == null || workData.subseccion == "Seleccionar") {
			valid = false;
			$inputSubseccion.closest(".form-group").addClass("has-error");
		}

		if (workData.proveedor == null || workData.proveedor == "Seleccionar") {
			valid = false;
			$inputProveedor.closest(".form-group").addClass("has-error");
		}

		if (workData.cliente == null || workData.cliente == "Seleccionar") {
			valid = false;
			$inputCliente.closest(".form-group").addClass("has-error");
		}

		if (workData.fecha.length == 0) {
			valid = false;
			$inputFecha.closest(".form-group").addClass("has-error");
		}

		if (workData.skills == null || workData.skills == "Seleccionar") {
			valid = false;
			$inputSkills.closest(".form-group").addClass("has-error");
		}

		if (workData.detalle.length == 0) {
			valid = false;
			$inputDetalle.closest(".form-group").addClass("has-error");
		}

		if (workData.miniatura.length == 0) {
			valid = false;
			$inputMiniatura.closest(".form-group").addClass("has-error");
		}

		if (workData.imagenes.length == 0) {
			valid = false;
			$inputImagenes.closest(".form-group").addClass("has-error");
		}

		return valid;
	};

	//___________PROCESS FORM_____________

	//Guarda la info del form en la bd en dependencia de si estamos editando o creando.
	var saveWork = function() {
		var url = action == 'new' ? createURL : updateURL;
		var updateDom = action == 'new' ? addWork : updateWork;
		var work = JSON.parse(JSON.stringify(workData));
		$.ajax(url, {
			type: 'POST',
			dataType: 'json',
			data: work
		}).done(function(res) {
			if (!res.error) {
				workData.id = res.data.id_works;
				updateDom(workData);
				displayView("list");
				action = 'new';
				cleanForm();
			} else {
				showErrorMessage("Ocurrió un error, no se pudo guardar el proyecto");
			}
		});
	}

	//Actualiza el thumb con la info que vino del form.
	var updateWork = function(workData) {
		$thumb.find('.panel').removeClass('panel-yellow');
		$thumb.find('.panel').removeClass('panel-red');
		$thumb.find('.panel').removeClass('panel-green');

		switch (workData.seccion) {
			case "Diseño Web/Apps":
				workData.clase = "panel-red";
				workData.icon = "fa-exclamation-circle";
				break;

			case "UX/UI & Frontend":
				workData.clase = "panel-yellow";
				workData.icon = "fa-clock-o";
				break;

			case "Gráfico & Industrial":
				workData.clase = "panel-green";
				workData.icon = "fa-check-circle";
				break;
		}

		$thumb.find(".huge").text(workData.id);
		$thumb.find("h5").text(workData.titulo);
		$thumb.find(".seccion").text(workData.seccion);
		$thumb.find(".subseccion").text(workData.subseccion);
		$thumb.find(".proveedor").text(workData.proveedor);
		$thumb.find(".cliente").text(workData.cliente);
		$thumb.find(".fecha").text(workData.fecha);
		$thumb.find(".skills").text(workData.skills);
		$thumb.find(".detalle").text(workData.detalle);
		$thumb.find(".miniatura").text(workData.miniatura);
		$thumb.find(".imagenes").text(workData.imagenes);
		$thumb.find('.panel').addClass('panel');
		$thumb.find('.panel').addClass(workData.clase);
		$thumb.find('.panel-heading i').addClass(workData.icon);
		$thumb = null;
	}

	//___________MENU_____________

	//Right View Selector
	var displayView = function(view, seccion) {
		$listView.addClass("hide");
		$detailView.addClass("hide");
		$formView.addClass("hide");

		switch (view) {
			case "list":
				$listView.removeClass("hide");
				$sideNav.removeClass("hide");
				$pageWrapper.removeClass('hide-nav');

				$listView.find('.panel-red').closest('.col-lg-3').addClass('hide');
				$listView.find('.panel-yellow').closest('.col-lg-3').addClass('hide');
				$listView.find('.panel-green').closest('.col-lg-3').addClass('hide');

				switch (seccion) {
					case "Diseño Web/Apps":
						$listView.find('.panel-red').closest('.col-lg-3').removeClass('hide');
						break;

					case "UX/UI & Frontend":
						$listView.find('.panel-yellow').closest('.col-lg-3').removeClass('hide');
						break;

					case "Gráfico & Industrial":
						$listView.find('.panel-green').closest('.col-lg-3').removeClass('hide');
						break;

					default:
						$listView.find('.panel-red').closest('.col-lg-3').removeClass('hide');
						$listView.find('.panel-yellow').closest('.col-lg-3').removeClass('hide');
						$listView.find('.panel-green').closest('.col-lg-3').removeClass('hide');
				}
				break;

			case "detail":
				$detailView.removeClass("hide");
				$sideNav.addClass('hide');
				$pageWrapper.addClass('hide-nav');
				break;

			case "form":
				$formView.removeClass("hide");
				$sideNav.addClass('hide');
				$pageWrapper.addClass('hide-nav');
				break;
		}
	}

	//___________EVENT HANDLERS_____________

	//Left menu actions.
	$newWork.on("click", function(e) {
		displayView("form");
	});

	$allWorks.on("click", function() {
		displayView("list");
	});

	$dwWorks.on("click", function() {
		displayView("list", "Diseño Web/Apps");
	});

	$dgWorks.on("click", function() {
		displayView("list", "UX/UI & Frontend");
	});

	$diWorks.on("click", function() {
		displayView("list", "Gráfico & Industrial");
	});

	//List view actions
	$listView.on("click", ".panel-footer", function() {
		prepareDetails(this);
		displayView("detail");
	});

	//Detail view actions
	$backToList.on("click", function() {
		displayView("list");
	});

	$editWork.on("click", function() {
		prepareForm();
		action = 'editar';
		displayView("form");
	});

	$deleteWork.on("click", function(e) {
		if (confirm("¿Esta seguro de que desea eliminar el proyecto?")) {
			var userData = { id: workData.id };

			var promise = $.ajax(deleteURL, {
				type: 'POST',
				dataType: 'json',
				data: userData
			});

			promise.done(function(res) {
				if (!res.error) {
					$thumb.remove();
				} else {
					showErrorMessage("No se pudo eliminar el proyecto");
				}
			});

			promise.fail(function(res) {});

			promise.always(function(res) {});
		};
		displayView("list");
	});

	//Form view actions
	$form.on("submit", function(e) {
		cleanErrorClass();
		if (validateData()) {
			saveWork();
		} else {
			showErrorMessage("Revisar los datos ingresados");
		}
		e.preventDefault();
	});

	$btnCancel.on("click", function(e) {
		if (confirm("¿Esta seguro de que desea cancelar? Si continua perdera la información ingresada.")) {
			displayView("list");
			cleanErrorClass();
			cleanForm();
		};
	});

	//On Ajax states
	$(document).on("ajaxSend", function() {
		showLoader();
	});

	$(document).on("ajaxComplete", function() {
		hideLoader();
	});

	//On Load 
	$('#side-menu').metisMenu();
	$(window).bind("load resize", function() {
		topOffset = 50;
		width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
		if (width < 768) {
			$('div.navbar-collapse').addClass('collapse')
			topOffset = 100; // 2-row-menu
		} else {
			$('div.navbar-collapse').removeClass('collapse')
		}

		height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
		height = height - topOffset;
		if (height < 1) height = 1;
		if (height > topOffset) {
			$("#page-wrapper").css("min-height", (height) + "px");
		}
	});
	listWorks();

})(jQuery, Handlebars);

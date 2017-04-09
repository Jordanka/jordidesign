$(function() {
    var table = $('#table_id').DataTable({
        "dom": 'ft<"bottom"lp>',
        "columns": [
            { "width": "9%" },
            { "width": "11%" },
            { "width": "9%" },
            { "width": "10%" },
            { "width": "7%" },
            { "width": "7%" },
            { "width": "13%" },
            { "width": "10%" },
            { "width": "9%" },
            { "width": "7%" },
            { "width": "8%" }
        ],
        "order": [
            [1, "asc"]
        ],
        "oLanguage": { 
             "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch": "<p class='list-label'>Buscar</p>",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate').addClass('pagination');
            $('.dataTables_filter input').addClass('form-control');
            $('.dataTables_filter input').addClass('input-sm');

        }
    });
});

$(function() {
    var saveComment = function(data) {
        // Convert pings to human readable format
        $(data.pings).each(function(index, id) {
            var user = usersArray.filter(function(user) {
                return user.id == id
            })[0];
            data.content = data.content.replace('@' + id, '@' + user.fullname);
        });

        return data;
    }

    $('#comments-cont').comments({
        profilePictureURL: 'img/users/user-icon-01.png',
        currentUserId: 1,
        roundProfilePictures: true,
        textareaRows: 1,
        enableAttachments: false,
        enableHashtags: true,
        enablePinging: true,
        highlightColor: '#0072bc',
        deleteButtonColor: '#ff4338',

        getUsers: function(success, error) {
            setTimeout(function() {
                success(usersArray);
            }, 500);
        },
        getComments: function(success, error) {
            setTimeout(function() {
                success(commentsArray);
            }, 500);
        },
        postComment: function(data, success, error) {
            setTimeout(function() {
                success(saveComment(data));
            }, 500);
        },
        putComment: function(data, success, error) {
            setTimeout(function() {
                success(saveComment(data));
            }, 500);
        },
        deleteComment: function(data, success, error) {
            setTimeout(function() {
                success();
            }, 500);
        },
        upvoteComment: function(data, success, error) {
            setTimeout(function() {
                success(data);
            }, 500);
        },
        uploadAttachments: function(dataArray, success, error) {
            setTimeout(function() {
                success(dataArray);
            }, 500);
        },
    });
});

$(function() {
    //Functions
    var openFilters = function(that) {
        $('.filters').show();
        $('.dataTables_filter').show();
        that.addClass('open');
        that.find('i.fa-sort-desc').addClass('fa-sort-asc');
        that.find('i').removeClass('fa-sort-desc');
    }

    var closeFilters = function(that) {
        $('.filters').hide();
        $('.dataTables_filter').hide();
        that.removeClass('open');
        that.find('i.fa-sort-asc').addClass('fa-sort-desc');
        that.find('i').removeClass('fa-sort-asc');
    }

    var openDetails = function() {
        $('.list-cont').hide();
        $('.details-cont').show();
        $('.list-bc').hide();
        $('.details-bc').show();
    }

    var closeDetails = function() {
        $('.list-cont').show();
        $('.details-cont').hide();
        $('.list-bc').show();
        $('.details-bc').hide();
    }

    var openAccordion = function(that) {
        $('.accordion-head').each(function() {
            closeAccordion($(this));
        });
        that.addClass('open');
        that.next('.accordion-body').show();
        that.find('i.fa-sort-desc').addClass('fa-sort-asc');
        that.find('i').removeClass('fa-sort-desc');
    }

    var closeAccordion = function(that) {
        that.removeClass('open');
        that.next('.accordion-body').hide();
        that.find('i.fa-sort-asc').addClass('fa-sort-desc');
        that.find('i').removeClass('fa-sort-asc');
    }

    //Posicion arancelaria
    var paDetails = function(that) {
        var masCont = that.closest('tr').find('.mas-cont');

        if(masCont.hasClass('active')){
            masCont.removeClass('active');
            masCont.closest('tr').next().css('height', 0 + 'px');
        } else {
            var cont=0;
            var value;
            $('.mas-cont').each(function(){
                $(this).removeClass('active');
                $(this).closest('tr').next().css('height', 0 + 'px');
            });

            masCont.addClass('active');
            masCont.closest('tr').next().css('height', masCont.height() + 'px');

            $('.mas-cont').each(function(){
                cont++
                if($(this).hasClass('active')) {
                    value=cont;
                }
            });
            masCont.css('top', (value-1)*43 + 96 +'px');
        }
    }

    //Events
    $('.vermas').on('click', function(e) {
        e.preventDefault();
        openDetails();
    });

    $('.backtolist').on('click', function(e) {
        e.preventDefault();
        closeDetails();
    });

    $('.details-bc a').on('click', function(e) {
        e.preventDefault();
        closeDetails();
    });

    $('.filtrar').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            closeFilters($(this));
        } else {
            openFilters($(this));
        }
    });

    $('.accordion-head').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            closeAccordion($(this));
        } else {
            openAccordion($(this));
        }
    });

    $('.accordion-btn').on('click', function(e) {
        e.preventDefault();
    });
    
    $('a.vermas').on('click', function(e){
        e.preventDefault();
        paDetails($(this));
    });

    //Start
    $(document).ready(function() {
        $('.accordion-head').each(function() {
            if (!$(this).hasClass('open')) {
                $(this).next('.accordion-body').hide();
            }
        });
    });

});

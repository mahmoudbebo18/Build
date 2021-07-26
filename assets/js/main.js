
$( document ).ready(function() {
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('toggled')
       $('html').toggleClass('nav-open')
    })
    });

    $(document).ready(function() {
      $('#dataTabling').DataTable( {
          language: {
              url: 'AngularERP\src\assets\i18n\dataTable.json'
          }
      } );
  } );

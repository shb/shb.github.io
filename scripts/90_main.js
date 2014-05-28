$(function ready()
{
	// Style switcher
	$('#uniform a').on('click', function(evt) {
	  setActiveStyleSheet($(this).data('style'));
	  return false;
	});

	// Magnific popup
	$('a[href$=".jpg"] > img').each(function(i,el) {
		$(el).parent('a').addClass('mfp-zoom').magnificPopup({ type:'image' });
	});
	$('.media > a:first-child[href^="#"]').magnificPopup({
		type: 'inline',
		midClick: true
	});

	// Language switcher
	$('#languages a').on('click', function(evt) {
	  var lang = $(this).attr('href').substr(1);
	  i18n.lang(lang);
	});
})

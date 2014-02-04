$(function ready()
{
	// Style switcher
	$('#uniform a').on('click', function(evt) {
	  setActiveStyleSheet($(this).data('style'));
	  return false;
	});

	// Language switcher
	$('#languages a').on('click', function(evt) {
	  var lang = $(this).attr('href').substr(1);
	  i18n.lang(lang);
	});
})

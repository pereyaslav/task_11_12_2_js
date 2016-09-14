$(function () {
	var html = $('#page').html();
	var form = [
		{
			fio: ' Переяславская Светлана Александровна '
			, img: 'img/img1.jpg'
			, work: 'Преподаватель Луганского национального университета имени Тараса Шевченко (эвакуирован в г. Старобельск) '
			, wish: ['это популярное и востребованное направление в сфере IT', 'мне интересно направление разработки сайтов', 'больше шансов найти достойную работу', 'можно создать собственный сайт-блог']
			, tel: '+380502135646'
			, email: 'pereyaslav_rov@mai.ru'
			, skype: 'pereyaslav15'
			, vk: 'https://vk.com/id253558310'
			, fb: 'https://www.facebook.com/svetlana.pereyaslavska'
		}
  ];
	var content = tmpl(html, {
		data: form
	});
	$('body').append(content);
	// console.log (form.length);
});

var searchQuery;
var resultNumber;
var startDate;
var endDate;

$('#search-button').click(function(){
	$('#top-articles').empty();
	searchQuery = $('#search-field').val();
	resultNumber = $('#records-number-field').val();
	startDate = $('#start-year-field').val() + '0101';
	endDate = $('#end-year-field').val() + '1231';
	search(searchQuery, resultNumber, startDate, endDate);
})

$('#clear-button').click(function(){
	$('#top-articles').empty();
})

function search(q, num, begin_date, end_date) {

	var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7dab0ac361ad41dfaec99ec48bee4a19&q=' + q + '&begin_date=' + begin_date + '&end_date=' + end_date + '&sort=newest&page=0'; 

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response){

		console.log();
		
		for (var i = 0; i < num; i++) {
			
			console.log("Headline: ", response.response.docs[i].headline.main);
			console.log("Byline: ", response.response.docs[i].byline.original);

			var articleAnchor = $('<a>');
			articleAnchor.attr('href', response.response.docs[i].web_url);
			articleAnchor.addClass('link-unstyled');
			var articleSpan = $('<span>');
			articleSpan.attr('display', 'block');
			
			var articleHeadline = $('<h3>');
			articleHeadline.text(response.response.docs[i].headline.main);
			var articleByline = $('<h4>');
			articleByline.text(response.response.docs[i].byline.original);
			var articleP = $('<p>');
			articleP.text(response.response.docs[i].abstract);

			$('#top-articles').prepend(articleAnchor);
			
			articleAnchor.append(articleSpan);
			articleSpan.append(articleHeadline);
			articleSpan.append(articleByline);
			articleSpan.append(articleP);
			articleSpan.append('<hr>');


		}
		

	}).fail(function(err) {
		throw err;
	})



}


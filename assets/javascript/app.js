
var searchQuery;
var resultNumber;
var startDate;
var endDate;

$('#search-button').click(function(){
	searchQuery = $('#search-field').val();
	resultNumber;
	startDate = $('#start-year-field').val() + '0101';
	endDate = $('#end-year-field').val() + '1231';
	search(searchQuery, resultNumber, startDate, endDate);
})

$('#clear').click(function(){

})

function search(q, num, begin_date, end_date) {

	var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7dab0ac361ad41dfaec99ec48bee4a19&q=' + q + '&begin_date=' + begin_date + '&end_date=' + end_date; 

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response){
		console.log(response);

		
	}).fail(function(err) {
		throw err;
	})

}


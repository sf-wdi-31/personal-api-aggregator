console.log("Sanity Check: JS is working!");
var template;
var apiAddresses = [
  'https://fathomless-plains-84466.herokuapp.com/api',
  'https://fierce-savannah-91724.herokuapp.com/api',
  'https://floating-crag-42747.herokuapp.com/api',
  'https://cryptic-depths-62490.herokuapp.com/api',
  'https://evening-woodland-80550.herokuapp.com/api',
  'https:///afternoon-hollows-57203.herokuapp.com/api',
  'https://ancient-shore-92488.herokuapp.com/api',
  'https://boiling-sea-29554.herokuapp.com/api',
  'https://warm-atoll-72220.herokuapp.com/api',
  'https://pure-beach-28009.herokuapp.com/api',
  'https://safe-plains-86136.herokuapp.com/api',
  'https://fathomless-forest-84639.herokuapp.com/api',
  'https://arcane-woodland-15893.herokuapp.com/api',
  'https://afternoon-plains-79332.herokuapp.com/api',
  'https://evening-tundra-69507.herokuapp.com/api',
  'https://stark-dawn-84023.herokuapp.com/api'
]

var profiles = [];


$(document).ready(function(){

  var source = $('#developer-data-template').html();
  template = Handlebars.compile(source);

  apiAddresses.forEach(function(address){
    pingPersonalApi(address + '/profile');
  })


});


function pingPersonalApi(route){
  $.ajax({
    method: 'GET',
    url: route,
    dataType: 'json',
    success: onSuccess,
    error: onError,
    complete: onComplete
  });
}

function onSuccess(data){
  console.log(data);
  profiles.push(data);
  var apiHtml = template({ profiles: profiles });
  $(".data-container").html(apiHtml);
}

function onError(xhr, status, message){
  console.log(message);
}

function onComplete(){
  console.log('AJAX request complete')
}

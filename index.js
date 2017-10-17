let categories;

function getCategories(number){
  return fetch(`http://jservice.io/api/categories?count=5`)
}

function getCategoriesThen(number){
  return getCategories(number).then(function(response){
    return response.json()
  })
}

function getCategoriesThenInterpretResponse(number){
  return getCategoriesThen(number).then(function(response){
    categories = response
  })
}

// declare your functions here...
// declare your functions here...
function paragraphSelector(){
 return $('p')
}

function lastImageSelector(){
 let elem = $('img')
 return elem.slice(-1)
}

function ninjaBabySelector(){
  return $('#baby-ninja')
}

function divSelector(){
  let elem = $('div')
  return elem.slice(0,2)
}

function firstListItem(){
  return $('ul li').slice(0,1)
}

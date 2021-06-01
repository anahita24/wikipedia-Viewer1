


let value ="wikipedia";

document.getElementById("searchButton").addEventListener("click", function () {
  // console.log(document.getElementById("searchBox").value);
  fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=24&gsrsearch=${value}`)
  .then(response => response.json())
  .then(result => {
    //[{..., character: emoji}, {...charcater}]
    var innerHtml =" ";
    //result.forEach(element=>innerHtml += `<li> ${element.pages}</li>`);
   // document.getElementById("WikipediaList").innerHTML = innerHtml;
   //console.log(result);
  // console.log(result.query.pages);
   for (var i in result.query.pages) {
    //console.log(result.query.pages[i].title);
    {
      
      var link = result.query.pages[i].title.toLowerCase().replace(/ /g, '-')  .replace(/[^\w-]+/g, '');
      link="https://en.wikipedia.org/wiki/"+link;
      //console.log(link)
      innerHtml+='<div class="col-sm-4">'
    innerHtml+='<li class="list-group-item">'+result.query.pages[i].title+"<a href="+link+"><br/>Read more......</a>"+"</li></div>";
    }
    document.getElementById("WikipediaList").innerHTML = innerHtml;
}
  })
  .catch(error => console.log('error', error));
});

document.getElementById("inputId").addEventListener("input", (event) => {
  value = event.target.value;
  //console.log(event.target.value);
  document.getElementById("searchButton").click();
});

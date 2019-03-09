// from data.js
var tableData = data;




// YOUR CODE HERE!
// YOUR CODE HERE!
// From data.js


// Grabbing references to HTML elements needed to append table.
var tbody = d3.select("#tbody");

 
var filterBtn = d3.select("#filter-btn");


var inputField = d3.select("#datetime");

var submit = d3.select("#filter-btn"); 


var inputDate = d3.select("#datetime");


// function will append table when called. 
function loadTable(inputFilter) {
  
  d3.select("tbody")
  
    .selectAll("tr")
  
    .data(inputFilter)
  
    .enter()
  
    .append("tr")
  
    .html(function(d) {
  
      return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
  
              <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
    });
  };



// listner with function to filter the table data.
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Grab input value
  var inputValue = inputDate.property("value");
  console.log(inputValue);

  // Filter dataset based on input
  if (inputValue) {
  var inputFilter = tableData.filter(x => x.datetime === inputValue);}
  console.log(inputFilter);
 
// append table by calling loadTable
  loadTable(inputFilter);
});
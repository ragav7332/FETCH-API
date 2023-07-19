

//Creating container which contains Row and coloumns
var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

//Fetching the data from Restcountries API
var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));

//function for processing cards and display of required datas
function foo(data1)
{
for(var i=0;i<data1.length;i++)
{
  row.innerHTML+=`<div class="col-md-4">
   <div class="card">
      <h4 class="card-header bg-dark" style="color:white; text-align:center">${data1[i].name}</h4>
      <img style="padding:10px; display:block; margin-left: auto; margin-right: auto; width: 90%;" src="${data1[i].flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text" style="text-align:center;">Capital: ${data1[i].capital}</p>
          <p class="card-text" style="text-align:center">Region: ${data1[i].region}</p>
          <p class="card-text" style="text-align:center">Country Code: ${data1[i].alpha3Code}</p>
        </div>
        <div class="card-footer mx-auto">
        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="opendata(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</button>
     </div>  
</div>`;
document.body.append(container); 
}

}

//function for fetching data from openweathermap as per the country's latitude and longitude
function opendata(lat,lon)
{
  let res=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e7c3fc1be1e0089a7262e983c6f7198b`)  
  .then((data)=>data.json()).then((data2)=>
  {alert(`
  Latitude: ${lat} 
  Longitude: ${lon} 
  Temp: ${data2.main.temp}`);   //printing Temp
});
}
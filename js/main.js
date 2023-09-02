let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')
let final = [];



async function ApiMovies(input) 
{
   let res = await fetch(`https://api.themoviedb.org/3/trending/all/${input}?api_key=9e5c26ddbd024153e0cbee75447bc205`)
   finalRsu = await res.json()
   final = await finalRsu.results
    console.log(final)
}

function displayApi()
{
    let MyStor = [];
    for (let i= 0; i < final.length; i++) 
    {
    MyStor +=`
    <div class="image-area">
    <div class="img-wrapper">
    <img src="https://image.tmdb.org/t/p/w300${final[i].poster_path}" alt="Atul Prajapati">
    <h2>${final[i].name}</h2>
          <ul>
				<li><a href="https://github.com/atuljustano"><i class="fab fa-github"></i></a></li>
				<li><a href="https://www.instagram.com/atulkprajapati2000/"><i class="fab fa-instagram"></i></a></li>
				<li><a href="https://twitter.com/atuljustano"><i class="fab fa-twitter"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw"><i class="fab fa-youtube"></i></a></li>
			</ul>
            </div>
            </div>
  
`
  document.getElementById('rowData').innerHTML = MyStor ;      
    }
}

function getDay() 
{
    ApiMovies('day')
    displayApi()
}


function getWeek() 
{
    ApiMovies('week')
    displayApi()
}


 async function Callback() 
{
     await ApiMovies('week')
     await  displayApi()
     
}
Callback()


    
    
    
    
    
    

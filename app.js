let cardscontainer=document.querySelector(".cards-container");
let searchButton=document.querySelector(".btn-search");
let inputSearch=document.querySelector(".text-search");
let btnPost=document.querySelector(".create-post");
let postSection=document.querySelector(".post");
let closePostSection=document.querySelector(".exit-btn");
let nameOfMovie=document.querySelector(".add-nameOfMovie");
let typeMovie=document.querySelector(".type-movie");
let durationMovie=document.querySelector(".duration-movie");
let addBtn=document.querySelector(".add-btn");
let btnfilter=document.querySelector(".btn-filters");
let filterSection=document.querySelector(".filter");
let typeselector=document.querySelector(".type-select");

postSection.style.display='none';
filterSection.style.display='none';

typeselector.innerHTML=createOptions(filterMoviesByType(movies));


typeselector.addEventListener("change",(e)=>{
      
    cardscontainer.innerHTML=createCards(findByType(movies,typeselector.value));
})

btnfilter.addEventListener("click",(e)=>{
   if(filterSection.style.display==='none'){
      filterSection.style.display='flex';
      postSection.style.display='none';
   }else {
    filterSection.style.display='none';
   }
})
cardscontainer.innerHTML=createCards(movies);

//SEARCH FILTER
searchButton.addEventListener("click",(e)=>{

   cardscontainer.innerHTML=createCards(findByName(movies,inputSearch.value));

})



//REMOVE MOVIE
cardscontainer.addEventListener("click",(e)=>{
  let object=e.target;
  if(object.classList.contains("delete-btn")){
    let id=object.classList[1].split("-")[1];
     movies=removeCardById(movies,+id);
     cardscontainer.innerHTML=createCards(movies);
  }
  update(movies);
})

//ADD MOVIE

btnPost.addEventListener("click",(e)=>{
  if(postSection.style.display==='none'){
     postSection.style.display='flex';
     filterSection.style.display='none';
  }else {
    postSection.style.display='none';
  }
})

closePostSection.addEventListener("click",(e)=>{
    if(postSection.style.display==='flex'){
        postSection.style.display='none';
     }
})

addBtn.addEventListener("click",(e)=>{
     let movie=[];
     movie.id=lastId(movies);
     movie.name=nameOfMovie.value;
     movie.type=typeMovie.value;
     movie.src="/img/ennio.jpg";
     movie.duration=durationMovie.value;
     movies.push(movie);
     cardscontainer.innerHTML=createCards(movies);
     nameOfMovie.value=null;
     typeMovie.value=null;
     durationMovie.value=null;
})








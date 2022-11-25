function findByType(arr,type){
    let filterMoviesByType=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].type.toLowerCase().includes(type.toLowerCase())){
           filterMoviesByType.push(arr[i]);
        }
    }
return filterMoviesByType;
}

function findByName(arr,name){
    let filterName=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].name.toLowerCase().includes(name.toLowerCase())){
          filterName.push(arr[i]);
        }
    }
    return filterName;
}

function findByPrice(arr,price){
    let filterPrice=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].price===price){
          filterPrice.push(arr[i]);
        }
    }
    return filterPirce;
}

function filterByDuration(arr,duration){
    let filterDuration=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].duration===duration){
          filterDuration.push(arr[i]);
        }
    }
    return filterDuration;
}

function createCard(card){
    return`
    <article class="card item-${card.id}">
                <h2>${card.name}</h2>
                <img src="${card.src}" alt="error">
                <p>${card.type}</p>
                <footer> <p>Duration<span>(min)</span> :${card.duration}</p><br>
                   <div class"btn-card">
                    <button class="rezervare-btn">Rezervare Online</button>
                    <button class="delete-btn id-${card.id}">DELETE</button>
                    </div>
                </footer>
    </article>
    `
}

function removeCardByName(arr,name){
    let filterCard=[];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i].name.toLowerCase()===name.toLowerCase())){
          filterCard.push(arr[i]);
        }
    }
   return filterCard;
}

function removeCardById(arr,id){
    let filterCard=[];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i].id===id)){
          filterCard.push(arr[i]);
        }
    }
   return filterCard;
}


function createCards(cards){
    let text="";
    for(let i=0;i<cards.length;i++){
       text+=createCard(cards[i]);
    }
return text;
}


function lastId(arr){
    let lastId=1;
    for(let i=0;i<arr.length;i++){
       lastId++;
     }
     return lastId;
}


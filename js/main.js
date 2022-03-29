const elList = document.getElementById("main-list");
const elTop = document.getElementById("top-movie");
const elAction = document.getElementById("action");
const elCategories = document.getElementById("categories");
let newMovie = [];
let topMovie = [];
let action = [];
let cate = [];

movies.forEach((item, index) => {
  let elYear = 2018;
  if (item.year >= elYear) {
    topMovie.push(item);
  }
});

let idx = 0;

topMovie.forEach((item, index) => {
  if (index < 12) {
    let li = document.createElement("li");
    li.className = 'movie__main col-3';
    li.innerHTML = `
    <div class="movie__item item">
    <div class="item__imgbox">
      <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
      <div class="movie__btns d-flex align-items-center justify-content-between">
        <p class="movie__tv text-uppercase mb-0">tv series</p>
        <button class="movie__btn" onclick="func('${item.imdbId}')"><i class='bx bxs-heart' ></i></button>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <span class="item__years">USA, ${item.year}</span>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
        More
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex col-12">
              <div class="col-6 p-3">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="col-6 p-3">${item.summary}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <h4 class="item__title">${item.title}</h4>
    <div class="item__box d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
      <span class="item__range">${item.runtime}</span>
      </div>
      <div class="d-flex align-items-center">
        <i class='bx bxs-star' style='color:#d8e818'></i>
        <span class="item__percent">${item.imdbRating}</span>
      </div>
    </div>
    <div>
      <span class="item__category text-capitalize">${item.categories}</span>
    </div>
  </div>
`;
    idx++;
    elList.appendChild(li);
  }
});


movies.forEach((item, index) => {
  let elRate = 8.8;
  if (item.imdbRating >= elRate) {
    newMovie.push(item);
  }
});

newMovie.forEach((item, index) => {
  if(index < 4){ 
    let li = document.createElement("li");
    li.className = 'movie__main col-3';
    li.innerHTML = `
    <div class="movie__item item">
    <div class="item__imgbox">
      <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
      <div class="movie__btns d-flex align-items-center justify-content-between">
        <p class="movie__tv text-uppercase mb-0">tv series</p>
        <button class="movie__btn" onclick="func('${item.imdbId}')"><i class='bx bxs-heart' ></i></button>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <span class="item__years">USA, ${item.year}</span>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
        More
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex col-12">
              <div class="col-6 p-3">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="col-6 p-3">${item.summary}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <h4 class="item__title">${item.title}</h4>
    <div class="item__box d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
      <span class="item__range">${item.runtime}</span>
      </div>
      <div class="d-flex align-items-center">
        <i class='bx bxs-star' style='color:#d8e818'></i>
        <span class="item__percent">${item.imdbRating}</span>
      </div>
    </div>
    <div>
      <span class="item__category text-capitalize">${item.categories}</span>
    </div>
  </div>
`;
    idx++;
    elTop.appendChild(li);
  }  
});


movies.forEach((item, index) => {
  let elAct = "Action";
  if (item.categories == elAct) {
    action.push(item);
  }
});
action.forEach((item, index) => {
  if(index < 4){ 
    let li = document.createElement("li");
    li.className = 'movie__main col-3';
    li.innerHTML = `
    <div class="movie__item item">
    <div class="item__imgbox">
      <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
      <div class="movie__btns d-flex align-items-center justify-content-between">
        <p class="movie__tv text-uppercase mb-0">tv series</p>
        <button class="movie__btn" onclick="func('${item.imdbId}')"><i class='bx bxs-heart' ></i></button>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <span class="item__years">USA, ${item.year}</span>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
        More
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex col-12">
              <div class="col-6 p-3">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="col-6 p-3">${item.summary}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <h4 class="item__title">${item.title}</h4>
    <div class="item__box d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
      <span class="item__range">${item.runtime}</span>
      </div>
      <div class="d-flex align-items-center">
        <i class='bx bxs-star' style='color:#d8e818'></i>
        <span class="item__percent">${item.imdbRating}</span>
      </div>
    </div>
    <div>
      <span class="item__category text-capitalize">${item.categories}</span>
    </div>
  </div>
`;
    idx++;
    elAction.appendChild(li);
  }  
});

movies.forEach((item, index) => {
  if(index < 4){ 
    let li = document.createElement("li");
    li.className = 'movie__main col-3';
    li.innerHTML = `
    <div class="movie__item item">
    <div class="item__imgbox">
      <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
      <div class="movie__btns d-flex align-items-center justify-content-between">
        <p class="movie__tv text-uppercase mb-0">tv series</p>
        <button class="movie__btn" onclick="func('${item.imdbId}')"><i class='bx bxs-heart' ></i></button>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <span class="item__years">USA, ${item.year}</span>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
        More
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex col-12">
              <div class="col-6 p-3">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="col-6 p-3">${item.summary}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <h4 class="item__title">${item.title}</h4>
    <div class="item__box d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
      <span class="item__range">${item.runtime}</span>
      </div>
      <div class="d-flex align-items-center">
        <i class='bx bxs-star' style='color:#d8e818'></i>
        <span class="item__percent">${item.imdbRating}</span>
      </div>
    </div>
    <div>
      <span class="item__category text-capitalize">${item.categories}</span>
    </div>
  </div>
`;
    idx++;
    elCategories.appendChild(li);
  }
});


const elBtn = document.querySelectorAll(".movie__btn");
const elCanvas = document.querySelector("#canva-list");
let arr = [];
let idxs = 0;
function func(aaa){
  movies.forEach((item ) => {
    if(aaa == item.imdbId){
      let li = document.createElement("li");
      li.className = 'movie__main';
      li.innerHTML = `
      <div class="movie__item item">
      <div class="item__imgbox">
        <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
        <div class="movie__btns d-flex align-items-center justify-content-between">
          <p class="movie__tv text-uppercase mb-0">tv series</p>
          <button class="modal__btn"><i class='bx bxs-trash-alt'></i></button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="item__years">USA, ${item.year}</span>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${idxs}">
          More
        </button>
  
        <!-- Modal -->
        <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex col-12">
                <div class="col-6 p-3">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-6 p-3">${item.summary}</div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
      <h4 class="item__title">${item.title}</h4>
      <div class="item__box d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
        <span class="item__range">${item.runtime}</span>
        </div>
        <div class="d-flex align-items-center">
          <i class='bx bxs-star' style='color:#d8e818'></i>
          <span class="item__percent">${item.imdbRating}</span>
        </div>
      </div>
      <div>
        <span class="item__category text-capitalize">${item.categories}</span>
      </div>
    </div>
  `;
      elCanvas.appendChild(li);
      idxs++;
    }
  });
  const elDel = document.querySelectorAll(".modal__btn");
  
  elDel.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentNode.parentNode.parentNode.remove();
    });
  });
}


const elSearch = document.querySelector("#movie-search");
const elModalList = document.getElementById("modal-list");
const Form = document.getElementById('form');
const elSearchModal = document.getElementById('search-modal');  

Form.addEventListener("submit", (e) =>{
  e.preventDefault();
  let elValue = elSearch.value.toLowerCase();
  movies.forEach(item =>{
    if(item.title.toLowerCase().indexOf(elValue) != -1){
      let li = document.createElement("li");
      li.className = 'movie__main col-3';
      li.innerHTML = `
      <div class="movie__item item">
      <div class="item__imgbox">
        <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
        <div class="movie__btns d-flex align-items-center justify-content-between">
          <p class="movie__tv text-uppercase mb-0">tv series</p>
          <button class="movie__btn" onclick="func('${item.imdbId}')"><i class='bx bxs-heart' ></i></button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="item__years">USA, ${item.year}</span>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${idxs}">
          More
        </button>
  
        <!-- Modal -->
        <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex col-12">
                <div class="col-6 p-3">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-6 p-3">${item.summary}</div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
      <h4 class="item__title">${item.title}</h4>
      <div class="item__box d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
        <span class="item__range">${item.runtime}</span>
        </div>
        <div class="d-flex align-items-center">
          <i class='bx bxs-star' style='color:#d8e818'></i>
          <span class="item__percent">${item.imdbRating}</span>
        </div>
      </div>
      <div>
        <span class="item__category text-capitalize">${item.categories}</span>
      </div>
    </div>
  `;
      elModalList.appendChild(li);
      idxs++;
      elSearchModal.style.display = 'block';
    }
    elSearch.value = ""; 
    const elCancel = document.getElementById('cancel');

    elCancel.addEventListener('click', ()=>{
      elSearchModal.style.display = 'none';
      elModalList.innerHTML = "";
    }) 
  });
})
function myFunction() {
  elSearchModal.style.display = 'block';
  elModalList.innerHTML = "";
}

const rightBtn = document.querySelector(".btn-slider-right");
const leftBtn = document.querySelector('#left');
const elItems = document.querySelectorAll('#main-list li');
let count = 0;

rightBtn.addEventListener('click', function change(){
  count++;
  resetInter();
  changeList();
});

leftBtn.addEventListener('click', function change() {
  count--;
  resetInter();
  changeList();
});

function changeList() {
  if(count > elItems.length - 1) {
    count  = 0;
  }else if(count < 0) {
    count = elItems.length - 1;
  }
  elList.style.transform = `translateX(${-count * 50}%)`;
  elList.style.transition = 'transform 0.7s ease';
}
let interval = setInterval(run, 3000);

function run() {
  count++;
  changeList();
}
function resetInter() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}


const elFilForm = document.getElementById('filter-form');
const elText = document.getElementById('filter-text');
const elStart = document.getElementById('filter-start');
const elEnd = document.getElementById('filter-end');
const elDate = document.getElementById('date');
const elFilList = document.getElementById('filter-list');
const divItem = document.querySelector('.div-item');


// Category Filter

let category = [];
movies.forEach((items) => {
  category.push(...items.categories);
});

category = [...new Set(category)]

for (let i = 0; i < category.length; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', category[i])
  op.textContent = category[i]
  elDate.appendChild(op);
}

let filmNew = []

elFilForm.addEventListener("submit", (e) => {
  e.preventDefault();
  elFilList.innerHTML = "";
  filmNew = []

  for(let j = 0; j < movies.length; j++) {
    let title = movies[j].title.toLowerCase().includes(elText.value.toLowerCase())
    let year = movies[j].year;
    let cate = true
    if (elDate.value == 'all') {
      cate = true
    } else {
      cate = movies[j].categories.includes(elDate.value);
    }

    if (title && cate && year >= elStart.value && year <= elEnd.value) {
      filmNew.push(movies[j])
    }
  }

  // Displayga chiarish joyi
  if(filmNew.length == 0) {
    divItem.innerHTML = "";
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    li.className = 'movie__main col-3';
    h3.className = 'movie__desc';
    h3.textContent = 'Sorry this movie is unavailable 🙁';
    divItem.appendChild(h3);
    elFilList.appendChild(li);
    elText.value = "";
    elStart.value = "";
    elEnd.value = "";
  }
  else {
  filmNew.forEach(item =>{
      let li = document.createElement("li");
      li.className = 'movie__main col-3';
      li.innerHTML = `
      <div class="movie__item item">
      <div class="item__imgbox">
        <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
        <div class="movie__btns d-flex align-items-center justify-content-between">
          <p class="movie__tv text-uppercase mb-0">tv series</p>
          <button class="movie__btn" onclick="func('${item.imdbId}')"><i class='bx bxs-heart' ></i></button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="item__years">USA, ${item.year}</span>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${idxs}">
          More
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex col-12">
                <div class="col-6 p-3">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-6 p-3">${item.summary}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <h4 class="item__title">${item.title}</h4>
      <div class="item__box d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
        <span class="item__range">${item.runtime}</span>
        </div>
        <div class="d-flex align-items-center">
          <i class='bx bxs-star' style='color:#d8e818'></i>
          <span class="item__percent">${item.imdbRating}</span>
        </div>
      </div>
      <div>
        <span class="item__category text-capitalize">${item.categories}</span>
      </div>
    </div>
  `;
    elFilList.appendChild(li);
    elText.value = "";
    elStart.value = "";
    elEnd.value = "";
    divItem.innerHTML = "";
  });
}
});

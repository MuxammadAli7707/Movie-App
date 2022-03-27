const elNew = document.querySelector("#new-list");
let news = [];

movies.forEach((item, index) => {
  let elYears = 2018;
  if (item.year >= elYears) {
    news.push(item);
  }
});
news.forEach((item, index) => {
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
          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
            More
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    elNew.appendChild(li);
});


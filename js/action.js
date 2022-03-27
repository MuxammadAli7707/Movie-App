const elActionAll = document.querySelector("#action-all");
let actionAll = [];


movies.forEach((item, index) => {
  let elActAll = "Action";
  if (item.categories == elActAll) {
    actionAll.push(item);
  }
});
actionAll.forEach((item, index) => {
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
                <div class="modal-body">
                  ${item.summary}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
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
    elActionAll.appendChild(li);
});
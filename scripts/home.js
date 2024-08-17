let moviesHTML = '';
movies.forEach((movie) => {
 moviesHTML += `
 <div class="movie-container">
        <div class="image-container">
          <img class="movie-image" src="${movie.image}" alt="">
        </div>
        <div class="movie-title">${movie.name}</div>
        <div class="movie-details">
          <span class="release-year">${movie.year}</span>
          <span class="dot">&#183;</span>
          <span class="views">${movie.views}m</span>
          <span class="category">movie</span>
        </div>
      </div>
 `;
});
document.querySelector('.js-movies-grid').innerHTML = moviesHTML;
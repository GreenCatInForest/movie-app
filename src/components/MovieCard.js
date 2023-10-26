export const MovieCard = () => {
  return (
    <div class="card movie-card m-3">
      <img src="..." class="card-img-top" alt="movie banner" />
      <div class="card-body text-center">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button type="button" class="btn btn-primary">
          Add to Fav
        </button>
      </div>
    </div>
  );
};

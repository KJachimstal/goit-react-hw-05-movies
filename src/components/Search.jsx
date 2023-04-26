export const Search = props => {
  return (
    <div>
      <form className="search-form">
        <input
          className="search-form__input"
          type="text"
          name="query"
          placeholder="Search movies"
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

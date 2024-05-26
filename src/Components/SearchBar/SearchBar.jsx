const SearchBar = ({ query, onSubmit, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    // setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          // value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

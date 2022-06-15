import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [character, setCharacter] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [search, setSearch] = useState(String);
  let [pageNumber, setPageNumber] = useState(1);

  const getData = async (url) => {
    setIsLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setCharacter(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(`https://swapi.dev/api/people/?page=${pageNumber}`);
  }, [pageNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(`https://swapi.dev/api/people/?search=${search}`);
  };
  const handleClick = () => {};

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={search}
          type="text"
          placeholder="Search character"
          className="form__input"
          onChange={(evt) => setSearch(evt.target.value)}
        />
        <button className="form__btn" type="submit">
          Search
        </button>
      </form>
      <div className="encyclopedia">
        {isloading ? (
          <Loader />
        ) : (
          character.map((character) => (
            <div className="encyclopedia__character" key={character.name}>
              <h3
                className="encyclopedia__character__name"
                onClick={handleClick}
              >
                {character.name}
              </h3>
              <h5>
                Gender: <span>{character.gender}</span>
              </h5>
              <h5>
                Height: <span>{character.height}</span>
              </h5>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        <button
          className="btn"
          onClick={() => setPageNumber((pageNumber -= 1))}
        >
          Previous page
        </button>
        <button
          className="btn"
          onClick={() => setPageNumber((pageNumber += 1))}
        >
          Next page
        </button>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [character, setCharacter] = useState();
  const [isloading, setIsLoading] = useState(true);
  let [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    return async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://swapi.dev/api/people/?page=${pageNumber}`
      );
      const data = await res.json();
      console.log(data);
      setCharacter(data.results);
      setIsLoading(false);
    };
  }, [pageNumber]);

  const handleClick = () => {};

  return (
    <div className="App">
      <form className="form">
        <input
          type="text"
          placeholder="Search character"
          className="form__input"
        />
        <button className="form__btn">Search</button>
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

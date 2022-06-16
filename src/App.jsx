import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Form from "./components/Form";
import Encyclopedia from "./components/Encyclopedia";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [search, setSearch] = useState(String);
  let [pageNumber, setPageNumber] = useState(1);

  const getData = async (url) => {
    setIsLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setCharacters(data.results);
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

  const handlePagination = (num) => {
    // Paginacion Infinita
    if (pageNumber == 1 && num == -1) {
      return setPageNumber((pageNumber = 9));
    } else if (pageNumber == 9 && num == 1) {
      return setPageNumber((pageNumber = 1));
    }
    setPageNumber((pageNumber += num));
  };

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
      <Encyclopedia
        handleClick={handleClick}
        isloading={isloading}
        characters={characters}
      />
      <Pagination handlePagination={handlePagination} />
    </div>
  );
}

export default App;

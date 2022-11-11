import './App.css';
import axios from "axios";
import Books from './components/Books';
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/books";

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data)
}

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    })
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Books books={books} />
    </div>
  );
}

export default App;

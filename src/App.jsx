import { useEffect, useState } from "react";
import Figure from "./components/Figure";
import "./App.css";

function App() {
  // toISOString devuelve una cadena de formato YYYYYY-MM-DDTHH:mm:ss.sssZ
  //Date.now() devuelve milisegundos
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [imgApod, setImgApod] = useState("");
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "PLZO0NQsD1ah35ajA52Ehmou8MdkrYcOckdVZrxh";
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png";

  const getApod = async () => {
    const res = await fetch(
      `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
    );
    const data = await res.json();
    setImgApod(data.url);
    setApod(data);
  };

  useEffect(() => {
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    //toLocaleString() devuelve fecha en formato de la zona local
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <h2 className="title">
        NASA API <img src={logo} alt="NASA logo" />
      </h2>
      <div className="head">
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      </div>
      <div className="content">
       
          <img src={imgApod} alt="apod" />
     
        {date > today ? (
          <h2>Please choose another date</h2>
        ) : (
          <Figure data={apod} />
        )}
      </div>
      <div className="standard-dialog">
        <h1 className="dialog-text">
          Shangya Mao - 2023 -{" "}
          <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
        </h1>
      </div>
    </div>
  );
}

export default App;

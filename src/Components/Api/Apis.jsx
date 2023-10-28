import axios from "axios";
 import "./Apis.css";
 import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import cloudIcon from "./Assets/clouds-outlined-weather-symbol_icon-icons.com_54695.png";
// import humidityIcon from "./Assets/icons8-humidity-52.png";
// import windIcon from "./Assets/icons8-air-52.png";
// import rainIcon from "./Assets/icons8-rain-64.png";
// import locationIcon from "./Assets/icons8-worldwide-location-32.png";

function Apis() {
  const [date, setDate] = useState({
    celcius: 0,
    mainCelcius: 0,
    MaxCelcius: 0,
    name: "Welcome to our website",
    humidity: 0,
    speed: 0,
    rain: 0,
    Image: "./Assets/clouds-outlined-weather-symbol_icon-icons.com_54695.png",
  });

  const [name, setName] = useState("");

  useEffect(() => {
    // call API on initial render
    fetchData();
  }, []);

  const fetchData = () => {
    if (name !== "") {
      //const apiKey = "My_API_Key"; // replace with your own API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e48d4a71cd4012dda9b27bb95b5af129&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let imagePath = "";
          if (res.data.weather[0].main === "Clouds") {
            imagePath =
              "./Assets/clouds-outlined-weather-symbol_icon-icons.com_54695.png";
          } else if (res.data.weather[0].main === "Rain") {
            imagePath = "./Assets/rainy.png";
          } else if (res.data.weather[0].main === "Drizzle") {
            imagePath = "./Assets/drizzle.png";
          } else if (res.data.weather[0].main === "Mist") {
            imagePath = "./Assets/fog.png";
          } else if (res.data.weather[0].main === "Sunny") {
            imagePath = "./Assets/cloudy (1).png";
          } else {
            imagePath =
              "./Assets/clouds-outlined-weather-symbol_icon-icons.com_54695.png";
          }
        //   console.log(res.data);

          setDate({
            ...date,
            celcius: res.data.main.temp,
            mainCelcius: res.data.main.temp_min,
            MaxCelcius: res.data.main.temp_max,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            pressure: res.data.main.pressure,
            Image: imagePath,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleClick = () => {
    fetchData(); // call API when button is clicked
  };

  const handleChange = (e) => {
    setName(e.target.value);
    fetchData(); // call API when input is changed
  };

  return (
    <div>
        <div className="container-weather">
    <div className="box-container">
    <div className="navBar">
        <div className="nav">
          <div className="logo">weather</div>
          <Link to="">Home</Link>
          <div className="login">
            <Link to="">login</Link>
          </div>
          <Link to="">Help</Link>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city Name"
          onChange={handleChange}
        />
        <button id="tion" onClick={handleClick}></button>
      </div>
      <div className="weather">
        <div className="winfo">
          <h1>{date.name}</h1>
          <img src={date.Image} alt="" />
          <div className="original">
            <h3>{Math.round(date.mainCelcius)}°C</h3>
            <h2>{Math.round(date.celcius)}°C</h2>
            <h3>{Math.round(date.MaxCelcius)}°C</h3>
          </div>
          <div className="details">
            <div className="humidity">
              {/* <img src={humidityIcon} alt="Humidity Icon" /> */}
              <p>{Math.round(date.humidity)}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              {/* <img src={windIcon} alt="Wind Icon" /> */}
              <p>{Math.round(date.speed)} mph</p>
              <p>Wind</p>
            </div>
            <div className="pressure">
              {/* <img src={rainIcon} alt="Rain Icon" /> */}
              <p>{Math.round(date.pressure)} h</p>
              <p>pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Apis;



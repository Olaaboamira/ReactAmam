import axios from "axios";
import "./Apis.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../Picture/logo.png";
import buttonLogo from "../Picture/icons8-worldwide-location-32.png";

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
          //   console.log(res.data);


          // This allows the component to re-render with the updated weather information.
          setDate({
            ...date,
            celcius: res.data.main.temp,
            mainCelcius: res.data.main.temp_min,
            MaxCelcius: res.data.main.temp_max,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            pressure: res.data.main.pressure
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
      <div div className="container-weather">
        {/* navbar to move to another page */}
        <div className="container-nav">
          <Link to="/">HOME</Link>
          <div className="login">
            <Link to="/SginUp">LOGOUT</Link>
          </div>
          <Link to="/">HELP</Link>
        </div>
        <div className="container-logo">
          <img src={logoImg} alt="pp" />
        </div>

        {/* animated the search  */}
        <div className="search">
          <input required type="text" onChange={handleChange} />
          <label>
            <span style={{ transitionDelay: "250ms" }}>S</span>
            <span style={{ transitionDelay: "200ms" }}>e</span>
            <span style={{ transitionDelay: "150ms" }}>a</span>
            <span style={{ transitionDelay: "100ms" }}>r</span>
            <span style={{ transitionDelay: "50ms" }}>c</span>
            <span style={{ transitionDelay: "0ms" }}>h</span>
          </label>
          {/* the handleClick function will be called when the image is clicked by the user. */}
          <img src={buttonLogo} alt="" id="tion" onClick={handleClick}></img>
        </div>

        <div className="winfo">
          <h1>{date.name}</h1>
          <img src={date.Image} alt="" />
          {/* displays the minimum and current temperature in Celsius.  */}
          <div className="original">
            <h3>{Math.round(date.mainCelcius)}°C</h3>
            <h2>{Math.round(date.celcius)}°C</h2>
            <h3>{Math.round(date.MaxCelcius)}°C</h3>
          </div>
          <div className="details">
            <div className="humidity">
              {/* function is used to round the temperature value to the nearest whole number */}
              <p>{Math.round(date.humidity)}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p>{Math.round(date.speed)} mph</p>
              <p>Wind</p>
            </div>
            <div className="pressure">
              <p>{Math.round(date.pressure)} h</p>
              <p>pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apis;

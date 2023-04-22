import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Weather from "./components/Weather";
import News from "./components/News";
import { getWeather } from "./redux/reducers/weatherReducer";
import { getSearch } from "./redux/reducers/webReducer";
function App() {
  const aranacakKelime = useRef(null);
  const dispatch = useDispatch();
  const { webState, weatherState } = useSelector((state) => state);
  console.log("WEATHER", weatherState.weather);
  console.log("WEBSTATE", webState);

  


  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getWeather(aranacakKelime.current.value))
    dispatch(getSearch(aranacakKelime.current.value))
  };

  return (
      <div className="container-fluid px-5 bg-primary-subtle py-5 " style={{height:'100vh',}}>
        <div className="row">
        <h1 className="text-center mb-4  logo">DiyBar</h1>
        <form
          onSubmit={handleSearch}
          className="d-flex align-items-center justify-content-center gap-2"
        >
          <input
            type="text"
            className="form-control w-50 text-center"
            ref={aranacakKelime}
            placeholder="Şehir giriniz..."
          />
          <button type="submit" className="btn  ">
            ARA
          </button>
        </form>
        </div>
        <div className="row d-flex flex-row  mt-5 bg-bg-danger-subtle">
          <div className="col-8 pb-5">
            {weatherState.weather  && <News news={webState.search}/> }
          </div>
          <div className="col-4" style={{zIndex:'2'}}>
            {weatherState.weather !== null && <Weather weather={weatherState.weather}/>}
          </div>
        </div>

      </div>
  );
}

export default App;


/* 
<div className="container d-flex align-items-center flex-column mt-5 bg-success-subtle ">
        <h1>Diyardan</h1>
        <form
          onSubmit={handleSearch}
          className="d-flex align-items-center justify-content-center gap-2"
        >
          <input
            type="text"
            className="form-control w-50 text-center"
            ref={aranacakKelime}
            placeholder="Şehir giriniz..."
          />
          <button type="submit" className="btn btn-outline-success">
            ARA
          </button>
        </form>
        <div className="row d-flex flex-row  ">
          <div className="col-8 bg-danger">
            {weatherState.weather  && <News news={webState.search}/> }
          </div>
          <div className="col-4 border border-4 border-dark" style={{zIndex:'2'}}>
            {weatherState.weather !== null && <Weather weather={weatherState.weather}/>}
          </div>
        </div>
      </div>
*/
import React, {useState,useEffect} from 'react'

const url = `https://restcountries.com/v3.1/all`;

const Countries = () => {


    const [countries,setCountries] = useState([]);

    
    const fetchCountryData = async() =>{
        
        const response = await fetch(url)
        const countries  = await response.json()
        setCountries(countries)
        console.log(countries)
    }
    useEffect(( )=> {
        fetchCountryData()
    },[])





  return (
      <>
    <div className="container mt-5">
      <div className="row">

        {countries.map((country)=> {
            return(
                
                <div className="col-md-4 mt-5">
                    <div className="card">
                    <img src={country.flags.png} alt={country.id} />

                    <div className="card-body">

                    <h5>Name: {country.name.common} </h5>
                    <h5> Official: <span> {country.name.official}</span></h5>
                    <h5> Status: <span> {country.status}</span></h5>
                    <h5> Capital: <span>{country.capital}</span></h5>
                    <h5> Region: <span>{country.region}</span></h5>
                    <h5> Subregion: <span> {country.subregion}</span></h5>
                    
                    <button className="btn btn-primary btn-1">Google Map <span>{country.googleMaps}</span></button>
                    </div>

        
                </div>
            </div>
            )
        })}

        </div>
        </div>
    </>
  )
}

export default Countries;
import React from "react"
import { useEffect, useState } from "react"

const Widget = ({ icon, header, title, iconColor, headerType, widgetType }) => {

  const [weather, setWeather] = useState({})
  const [hoursData, setHoursData] = useState()

  let defIcon = (icon === "Sunset") || (icon === "Visibility") || (icon === "Time") ? false : true 
  
  useEffect(() => {
    let tokenLink = "https://spforms.ardentleisure.com/parksapi/gettoken"
    let token = ""
    let weatherLink = "http://prk-prod-ms-public-254646448.ap-southeast-2.elb.amazonaws.com/parksapi/OpenWeather?location=3"
    let tradingHoursLink = "http://prk-prod-ms-public-254646448.ap-southeast-2.elb.amazonaws.com/parksapi/TradingHours/GetToday?location=3"
    let weatherData = {}

    const load = async () => {
      fetch(tokenLink, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
        },
        body: JSON.stringify({
          Username: "ParksWeb",
          Password: "EC52AB07-5D9E-48F5-9F53-1984D43AD698"
        }),
      })
      .then(response => response.json())
      .then(data => {
        token = data.token
        console.log(token)
        fetch(weatherLink, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            accept: "text/plain",
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(response => response.json())
        .then(responseData => {
          let today = new Date().toISOString().slice(0, -14)
          responseData.daily.forEach(day => {
            if(day.dt.slice(0, -10) === today) {
              let des = day.weather[0].spLongDescription
              // weatherData.view = des.charAt(0).toUpperCase() + des.slice(1)
              weatherData.view = des
              weatherData.sunset = sunsetTimeCalculation(day.sunset)
              setWeather(weatherData)
            }
          })
        })
        .catch(err => {
          console.log("NETWORK ERROR!")
        })

        fetch(tradingHoursLink, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            accept: "text/plain",
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(res => res.json())
        .then(resData => {
          let hoursToday = resData.tradingHoursString
          setHoursData(hoursToday)
        })
        .catch(err => {
          console.log("NETWORK ERROR!")
        })
      })
    }
    load()
  }, [])


  function sunsetTimeCalculation(date) {
    let d = new Date(date)
    let hours = d.getHours()-12
    let minutes = d.getMinutes()<10 ? "0"+d.getMinutes() : d.getMinutes()
    return "Experience golden hour before "+hours+":"+minutes+"pm"
  }

  return (
    <div className="col">
      {widgetType && (
        <div className="row widget widgetLeftIcon">
          <div className={`icon ${icon} bg-${iconColor}`}></div>
          <div className="col">
            <div className={`h4 m-0 txt-${headerType} font-weight-6`}>
              {header}
            </div>
            {icon === "Sunset" && (
              <p className="txt-md m-0">{weather.sunset}</p>
            )}
            {icon === "Visibility" && (
              <p className="txt-md m-0">{weather.view}</p>
            )} 
            {icon === "Time" && (
              <p className="txt-md m-0">{hoursData}</p>
            )}
            {defIcon && (
              <p className="txt-md m-0">{title}</p>
            )}
          </div>
        </div>
      )}
      {!widgetType && (
        <div className="widget">
          <div className="row center">
            <div className={`col icon ${icon} bg-${iconColor}`}></div>
          </div>
          <div className="row">
            <div
              className={`data h4 txt-center m-0 txt-${headerType} font-weight-6`}
            >
              {header}
              {icon === "Sunset" && (
                <p className="txt-md m-0">{weather.sunset}</p>
              )}
              {icon === "Visibility" && (
                <p className="txt-md m-0">{weather.view}</p>
              )}
              {icon === "Time" && (
                 <p className="txt-md m-0">{hoursData}</p>
              )}
              {defIcon && (
                <p className="txt-md m-0">{title}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Widget

/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
  
  'api strict';

  const api_key =  "cf6a0b63b2625078a36c4987feb5909e";

  /**
   * fetch data from server
   * @param {string} URL  API url 
   * @param {Function} callback  callback
   */

  export const fetchData = function(URL , callback){
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
  }

  
  export const url = {
    currentWeather(lat, lon){
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
      return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
      return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon){
      return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * 
     * @param {string} query Search query e.g.: "London" , "New York"
     * @returns 
     */
    geo(query){
      return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
  }
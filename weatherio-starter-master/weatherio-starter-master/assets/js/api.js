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

  fetchData
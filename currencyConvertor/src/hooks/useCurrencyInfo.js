import {useEffect, useState} from "react";

//uisng PROMISE , but its not working
// //CREATing Custome HOOK
//  function useCurrencyInfo(currency){
//     const [data, setData] = useState({});//the initial data

//        useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
//         .then((res)=>{res.json}) // converting the data into json value
//         .then(function(res){
//             setData(res.currency);
//             console.log(data);
//         })
//     }, [currency])//here the dependencies is 'currency' which means that whenever there will be any change in the currency this useEffect will be re-render
//     return data;
// }


//uisng Async-await
function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Initial data
  
    useEffect(() => {
      // Define an async function to fetch data
      const fetchData = async () => {
        try {
          // Fetching data from the API
          const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
          const result = await response.json(); // Converting the data into JSON
  
          // Update the state with the fetched data
          setData(result[currency]);
          console.log(result)
          console.log(result[currency] + "fetched data"); // Log the fetched currency data
        } catch (error) {
          console.error('Error fetching currency data:', error); // Handle errors
        }
      };
  
      fetchData(); // Call the async function
    }, [currency]); // Dependencies array, re-renders when 'currency' changes
  
    return data;
  }
  

//returning the whole method
export default useCurrencyInfo;
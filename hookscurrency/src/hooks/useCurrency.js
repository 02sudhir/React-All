import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() =>{
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[])
}
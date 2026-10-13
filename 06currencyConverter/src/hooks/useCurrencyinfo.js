import { useEffect , useState } from "react";

// creating our custom hook :-

function useCurrencyinfo(currency){
    // isme automatically fetch call ho jayega hume ek aur function nhi banana padega
    //for holiding the json data aur mujhe woh data ui mei update bhi karna hai hence useState()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())//parcing data recieved from api to json
        .then((res) => setData(res[currency])) // same as res.{currency}
    } , [currency]) //call tabhi jab currency change kare hum
    console.log(data)
    return data
}

export default useCurrencyinfo;
// humne pura method hi return kar diya -> yeh mai use kar paunga for these particular tasks if and when needed
// use state mei bhi method hai woh bass ek data return kar rha idhar
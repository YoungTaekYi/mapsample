// import dummy from "./db/data.json"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import useFetch from './hooks/useFetch'

export default function DayList() {
    // const [days,setDays] = useState([])
    const [count,setCount] = useState(0)
    // console.log(dummy)
    //어떠한 상태값이 바뀌었을떄 동작하는 함수를 작성할 수 있다.
    // useEffect(()=>{
    //     // console.log('count change')
    //     fetch(`http://localhost:3001/days`).then(res=>{
    //         return res.json()
    //     }).then(data=>{
    //         setDays(data)
    //     })
    // },[])//의존성 배열

    const days = useFetch('http://localhost:3001/days')
    return(
        <>
            <ul className="list_day">
                {days.map(day =>(
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
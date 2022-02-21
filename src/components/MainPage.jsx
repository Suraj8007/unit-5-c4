import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"

import {myData} from "./data"
export const MainPage = () => {
    const [text, setText] = useState("")
    const [fdata, setFdata] = useState([])
    console.log(fdata)
    // console.log(text)
    // console.log(data)
    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        axios.get("https://fast-reef-22226.herokuapp.com/data").then((d) => {
            // console.log(d)
            setData(d)
        }).then(setData())

    }
    return (
        <div>
            <Link to="/search">
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt=''></img></div>
            <input onChange={(e) => setText(e.target.value)} onKeyPress={(e) => {
               

            }} className="search-box" type="text" />
            {/* <div>
                {data.filter((a) => {
                    if (a.title == text) {
                       return {a}
                    }
                    //    console.log(D)
                })}
            </div> */}
                </Link>
            
        </div>
    )
}
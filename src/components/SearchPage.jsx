import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { myData } from "./data"

export const SearchPage = () => {
    const [text, setText] = useState("")
    const [fdata, setFdata] = useState([])
    // console.log(fdata)
    console.log(myData)
    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        axios.get("https://fast-reef-22226.herokuapp.com/data").then((d) => {
            // console.log(d)
            setData(d)
        }).then(setData())

    }
    return (<>
        <div className="navbar">
            <div>
                <Link to="/">
                    <img className="logo" src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" alt=""></img>
                </Link>
            </div>
            <div>
                <input onChange={(e) => setText(e.target.value)} onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        setFdata(myData.filter((a) => {
                            if (a.title == text) {
                                return a;
                            }
                            //    console.log(D)
                        }))
                    }

                }} className="search-box" type="text" />
            </div>
            <div><button className="search" onClick={() => {
                setFdata(myData.filter((a) => {
                    if (a.title === text) {
                        return a;
                    }
                }))
            }}>Search</button></div>

        </div>
        <div>
            <button id='sort-alphabetically' >Sort A-Z</button>
            <button  id='sort-alphabetically-desc'>Sort Z-A</button>
            <button  id='sort-by-date'>Sort by Date(ASC)</button>
            <button  id='sort-by-date-desc'>Sort by Date(DSC)</button>
            <button  id='sort-by-quality'>Sort by quality(ASC)</button>
            <button  id='sort-by-quality-desc'>Sort by quality(DSC)</button>
            <button  id='filter-explicit'>Filter Explicit</button>
        </div>
        <div id="detailed-result">
            {fdata.map(d => {
                return (<>
                    <div id="result" >
                        <h3 className="title"><a href={d.url} >{d.title}</a></h3>
                        <p className="desc">{d.description}</p>
                        <p className="author">{d.author}</p>
                        <p className="creation-date">Creation Date:{d.creation_date}</p>
                        <p className="explicit">Explicit:{d.explicit?"Yes":"No"}</p>
                        <p className="quality">Quality %:{d.quality}</p>

                    </div>
                </>)
            })}
        </div>

    </>)
}
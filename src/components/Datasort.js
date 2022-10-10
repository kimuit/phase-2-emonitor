import React, { useEffect, useState } from "react";
import "./Datasort.css";
import  Tableheader  from "./Tableheader";
import Search from "./Search";


export const Datasort = () => {
       const [data, setData] = useState([]);
       const [results, setResults] = useState([]);

    //fetching data
    useEffect(() => {
        fetch(`https://my-project-data.herokuapp.com/data`)
            .then((res) => res.json())
            .then((data) => {
               
                setData(data)
                setResults(data)
            })
            .catch((error)=>{
            console.error(error)
})
    }, [])
        const change = (e) => {
        setData(results.filter(data =>
            data.first_name.toLowerCase()
                .includes(e.target.value.toLowerCase())))
    }

    return (
        <>

            <Search change={change}/>
            <Tableheader />
            <div>
                {data.map((data, key) => {
                    return (
                        <div key={key}>
                            <Sort
                                key={key} first_name={data.first_name} phone_no={data.phone_no} email={data.email} house_no={data.house_no} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
const Sort = ({ first_name, phone_no, house_no, email }) => {
    if (!first_name) return <div />;

    return (
    
   <table>
   <tr>
    <td className="td"><h4>{first_name}</h4></td>
    <td className="td"> <h5>{phone_no}</h5></td>
    <td className="td"><h6>{email}</h6></td>
    <td className="td"><h5>{house_no}</h5></td>
  </tr>
</table>
    );
};
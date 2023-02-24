import React from 'react'

function E2(props) {
    let data=props.empdetails1
    console.log(data);
  return (
    <div>
        <table border='solid' cellPadding='10px' text-align='center'>
            <tr>
                <th>empid</th>
                <th>empname</th>
                <th>empsal</th>
                <th>empdesi</th>
                <th>empgender</th>
                <th>empedu</th>
                <th>empexp</th>
                <th>companies</th>
                <th>empimg</th>
                <th>empskills</th>
                <th>empcity</th>
            </tr>
            {data.map((x)=>{
                return (
                <tr>
                    <td>{x.empid}</td>
                    <td>{x.empname}</td>
                    <td>{x.empsal}</td>
                    <td>{x.empdes}</td>
                    <td>{x.empgender}</td>
                    <td>{x.empedu}</td>
                    <td>{x.empexp}</td>
                    <td>
                    <ul>
                    <li>{x.companies.previous}</li>
                    <li>{x.companies.current}</li>
                    </ul>
                    </td>
                    <td><img src={x.empimg} alt="" height='100px' /></td>
                    <td>
                    <ul>
                        {x.empskills.map((y)=>{
                    return <li>{y}</li>
                     }) }
                    </ul>
                    </td>
                    <td>{x.empcity}</td>
                </tr>
                )
            })}
            
        </table>
    </div>
  )
}

export default E2
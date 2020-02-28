import React, { Component } from 'react';

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

const rows = [
    createData('First-time Adult Passport Book', 'DS-11', '$110', '$35'),
    createData('First-time Adult Passport Card', 'DS-11', '$30', '$35'),
    createData('First-time Adult Passport Book & Card', 'DS-11', '$140', '$35'),
    createData('Adult Passport Card ', 'DS-82', '$30', 'No Charge')
  ];
  
class PassPortTable extends Component {
    state = {  }
    render() { 
        return ( 
            <div>                
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col" >What are you applying for?</th>
                    <th scope="col">Use Form</th>
                    <th scope="col">
                        Application Fee *Paid to the U.S. Department of State
</th>
                    <th scope="col">Execution Fee
(Acceptance Fee)
**Paid to the Acceptance Facility</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.name}>
                            <th scope="row" width="35%">
                                {row.name}
                            </th>
                            <td align="center" width="10%"><a href="#" style={{textDecoration:'underline'}}>{row.calories}</a></td>
                            <td align="center">{row.fat}</td>
                            <td align="center">{row.carbs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default PassPortTable;
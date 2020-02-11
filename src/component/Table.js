import React from 'react';

const table = (props) => {
    return (
            <tr>
                <td>{props.currency}</td>
                <td>{props.unit}</td>
                <td>{props.buying}</td>
                <td>{props.median}</td>
                <td>{props.selling}</td>
            </tr>    
    
    );
};

export default table;
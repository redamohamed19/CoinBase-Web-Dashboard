import threebuttons from '../imgs/3buttons.svg';
import cursor from '../imgs/cursor.svg';
import React from 'react';
const Conversion_Rate_to_Naira = () => {
  return (
    <div className="Conversion_Rate_to_Naira">
      <div className="Conversion_Rate_to_Naira_intro">
        <h4>Conversion Rate to Naira</h4>
        <button id="table_plus">
          <img src={threebuttons} alt="plus" />
        </button>
      </div>
      <div className="container_table_conversion">
        <div className="table_conversion">
          <tr>
            <th>iTunes Card</th>
            <th></th>
            <th>Amazon Card</th>
            <th></th>
            <th>Bitcoin</th>
            <th></th>
          </tr>
          <tr>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>Bitcoin BTC</td>
            <td>N400.00</td>
          </tr>
          <tr>
            <td>USA E-Code card</td>
            <td>N400.00</td>
            <td>USA E-Code card</td>
            <td>N400.00</td>
            <td>Bitcoin BTC</td>
            <td>N400.00</td>
          </tr>
          <tr>
            <td>UK Physical Card</td>
            <td>N400.00</td>
            <td>UK Physical Card</td>
            <td>N400.00</td>
            <td>Bitcoin BTC</td>
            <td>N400.00</td>
          </tr>
          <tr>
            <td>UK E-Code Card</td>
            <td>N400.00</td>
            <td>UK E-Code Card</td>
            <td>N400.00</td>
            <td>Bitcoin BTC</td>
            <td>N400.00</td>
          </tr>
        </div>
        <button>
          <img src={cursor} alt="cursor" />
        </button>
      </div>
    </div>
  );
};
export default Conversion_Rate_to_Naira;

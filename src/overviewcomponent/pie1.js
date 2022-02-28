import base from '../imgs/Base.png';
import backchart from '../imgs/chart_background.png';
import threebuttons from '../imgs/3buttons.svg';
import { RadialBarChart, RadialBar } from 'recharts';
import React from 'react';

const pie1 = props => {
  return (
    <div className="chart_container">
      <div className="chart">
        <RadialBarChart
          width={200}
          height={200}
          innerRadius="80%"
          outerRadius="40%"
          data={props.data}
          startAngle={0}
          endAngle={360}
        >
          <RadialBar minAngle={0} background dataKey="uv" />
        </RadialBarChart>
        <p>{props.number}</p>

        <img src={backchart} alt="backchart" />
      </div>
      <div className="tt_transactions">
        <h4>{props.pietitle}</h4>
        <div className="base_info">
          <img src={base} alt="base" />
          <p>22.8%</p>
        </div>
      </div>
      <button id="chart_plus">
        <img src={threebuttons} alt="plus" />
      </button>
    </div>
  );
};
export default pie1;

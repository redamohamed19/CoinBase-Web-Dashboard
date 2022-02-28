import './css/overview.css';
import Pie1 from './overviewcomponent/pie1';
import ConversionRateToNaira from './overviewcomponent/Conversion_Rate_to_Naira';
import Wallet from './overviewcomponent/wallet';
import calander from './imgs/calander.svg';
import Statics from './overviewcomponent/statics';
import React from 'react';
const data = [
  {
    uv: 2,

    fill: 'rgba(253, 116, 155, 1)'
  },
  {
    uv: 3,

    fill: 'rgba(255,255,255,1)'
  }
];
const data1 = [
  {
    uv: 3,

    fill: 'rgba(253, 116, 155, 1)'
  },
  {
    uv: 4,

    fill: 'rgba(255,255,255,1)'
  }
];
const data2 = [
  {
    uv: 7,

    fill: 'rgba(253, 116, 155, 1)'
  },
  {
    uv: 8,
    fill: 'rgba(255,255,255,1)'
  }
];

const overview = () => {
  return (
    <section className="overview">
      <div className="title_overview">
        <h4>User Management System Overview</h4>
        <h4>Accounts | RAMON RIDWAN</h4>
      </div>
      <div className="soustitle_overview">
        <h4>Overview</h4>
        <img src={calander} alt="calander" />
      </div>

      <div className="overview_chart">
        <Pie1
          data={data}
          pietitle="Total Number Of Transaction"
          number="15000"
        />
        <Pie1 data={data1} pietitle="Total Number Of Trade" number="43498" />
        <Pie1 data={data2} pietitle="Market Rate Value" number="87%" />
      </div>
      <ConversionRateToNaira />
      <Wallet />
      <Statics />
    </section>
  );
};
export default overview;

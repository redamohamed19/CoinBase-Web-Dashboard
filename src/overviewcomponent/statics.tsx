import threebuttons from '../imgs/3buttons.svg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import React from 'react';
const data = [
  {
    name: 'Amazon',

    pv: 40
  },
  {
    name: 'Google',

    pv: 47
  },
  {
    name: 'Itunes',

    pv: 20
  },
  {
    name: 'Payonner',

    pv: 38
  },
  {
    name: 'Bitcoin',

    pv: 44
  },
  {
    name: 'Etherium',

    pv: 39
  },
  {
    name: 'Techno',

    pv: 32
  },
  {
    name: 'Paypal',

    pv: 42
  },
  {
    name: 'Alixepress',

    pv: 48
  },
  {
    name: 'jumia',

    pv: 48
  }
];
const statics = () => {
  return (
    <div className="overview_statics">
      <div className="overview_statics_intro">
        <h4>Statics</h4>
        <button id="table_plus">
          <img src={threebuttons} alt="plus" />
        </button>
      </div>

      <BarChart
        width={1200}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={30}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 80, right: 40 }} />
        <YAxis />
        <Tooltip />

        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="rgba(156, 75, 175, 1) " />
      </BarChart>
    </div>
  );
};
export default statics;

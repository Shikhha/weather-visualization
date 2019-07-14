import React, { Component } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function calAverage(data) {
  let add = 0;
  data.forEach(element => {
    add += element;
  });

  const average = add / data.length;
  return Math.floor(average);
}
export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {calAverage(data)} {units}
      </div>
    </div>
  );
};

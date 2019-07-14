import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default ({ data, color }) => {
  return (
    <Sparklines height={100} width={160} data={data}>
      <SparklinesLine color={color} />
    </Sparklines>
  );
};

import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const MakeChart = (data, color) => {
  return (
    <Sparklines data={data}>
      <SparklinesLine color="red" />
    </Sparklines>
  );
};

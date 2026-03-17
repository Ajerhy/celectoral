import { useMemo } from "react";
import { Bar,Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { ChartOptions } from "chart.js";

const ETIQUETAS_PARTIDOS = [
  "UPP",
  "MDA",
  "MTS",
  "NGP",
  "LIBRE",
  "MNR",
  "FSUTPC",
  "FRI",
  "BLANCO",
  "NULO",
];
const ETIQUETAS_COLOR = [
  "#025744",
  "#fcbf28",
  "#006d36",
  "#16a7e0",
  "#E11D48",
  "#ff84b0",
  "#5c9743",
  "#014995",
  "#dbd2d2",
  "#777777",
];

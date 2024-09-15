import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function RainChart() {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
            padding: 16,
          }}
        />
        <Legend />
        <Line
          type="natural"
          dataKey="pv"
          stroke="var(--ds-amber-900)"
          activeDot={{ r: 4 }}
        />
        <Line type="monotone" dataKey="uv" stroke="var(--ds-blue-900)" />
      </LineChart>
    </ResponsiveContainer>
  );
}

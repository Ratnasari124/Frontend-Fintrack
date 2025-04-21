"use client"; // kalau pakai app dir di Next.js 13+ (opsional)

import { Box, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { year: "2020", value: 150 },
  { year: "2021", value: 300 },
  { year: "2022", value: 250 },
  { year: "2023", value: 400 },
  { year: "2024", value: 350 },
  { year: "2025", value: 468 },
];

export default function TrendChart() {
  return (
    <Box
      bg="white"
      p={4}
      rounded="xl"
      boxShadow="md"
      height="300px" // ⬅️ ini penting agar ResponsiveContainer bisa dapat ukuran
    >
      <Text mb={2} fontWeight="bold">
        Tren Keuangan Tahunan
      </Text>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3182ce" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

import { Box, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { cabang: "1", pemasukan: 300, pengeluaran: 100 },
  { cabang: "2", pemasukan: 250, pengeluaran: 120 },
  { cabang: "3", pemasukan: 350, pengeluaran: 150 },
  { cabang: "4", pemasukan: 280, pengeluaran: 180 },
];

export default function BranchChart() {
  return (
    <Box bg="white" p={4} rounded="xl" boxShadow="md">
      <Text mb={2} fontWeight="bold">Tren Keuangan Cabang</Text>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="cabang" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pemasukan" fill="#3182ce" />
          <Bar dataKey="pengeluaran" fill="#e53e3e" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

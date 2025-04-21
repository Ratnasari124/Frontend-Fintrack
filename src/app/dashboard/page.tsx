import { Box, Grid, Heading, Text } from "@chakra-ui/react";
// ✅ BENAR, pakai relative path dari app/admin ke components
import StatCards from "../../components/StatCards";
import BranchOverview from "../../components/BranchOverview";
import TrendChart from "../../components/TrendChart";
import BranchChart from "../../components/BranchChart";



export default function DashboardPage() {
  return (
    <Box p={6}>
      <Heading fontSize="2xl" mb={4}>Main Dashboard</Heading>
      <StatCards />
      <Box mt={4}><Text fontWeight="bold">Jumlah Cabang: 4</Text></Box>
      <Box mt={10}><BranchOverview /></Box>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={10}>
        <TrendChart />
        <BranchChart />
      </Grid>
    </Box>
  );
}

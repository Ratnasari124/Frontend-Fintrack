import { Box, Flex, Text } from "@chakra-ui/react";

const stats = [
  { label: "Pemasukan", value: "Rp. 12.000.000,00" },
  { label: "Pengeluaran", value: "Rp. 5.000.000,00" },
  { label: "Saldo", value: "Rp. 7.000.000,00" },
];

export default function StatCards() {
  return (
    <Flex gap={4} direction={{ base: "column", md: "row" }}>
      {stats.map((item, i) => (
        <Box key={i} bg="white" boxShadow="md" p={5} rounded="xl" flex="1">
          <Text fontSize="sm" color="gray.500">{item.label}</Text>
          <Text fontSize="xl" fontWeight="bold">{item.value}</Text>
        </Box>
      ))}
    </Flex>
  );
}

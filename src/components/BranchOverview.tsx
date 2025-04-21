import { Box, Image, Text, Heading, HStack } from "@chakra-ui/react";

const branches = [
  { name: "Cabang 1", location: "Klagen", image: "/images/cabang1.jpg" },
  { name: "Cabang 2", location: "Lowokwaru", image: "/images/cabang2.jpg" },
  { name: "Cabang 3", location: "Junrejo", image: "/images/cabang3.jpg" },
];

export default function BranchOverview() {
  return (
    <Box>
      <Heading size="md" mb={4}>Dokumentasi Cabang</Heading>
      <HStack spacing={4} overflowX="auto">
        {branches.map((branch, idx) => (
          <Box key={idx} minW="250px">
            <Image src={branch.image} alt={branch.name} rounded="xl" mb={2} />
            <Text fontWeight="bold">{branch.name}</Text>
            <Text fontSize="sm" color="gray.500">{branch.location}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

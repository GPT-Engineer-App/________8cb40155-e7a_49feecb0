import React from "react";
import { Box, Stat, StatLabel, StatNumber, StatGroup, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const DashboardHome = () => {
  const salesData = [
    { month: "Jan", sales: 500 },
    { month: "Feb", sales: 750 },
    { month: "Mar", sales: 1000 },
    { month: "Apr", sales: 1250 },
    { month: "May", sales: 1500 },
    { month: "Jun", sales: 2000 },
  ];

  return (
    <Box>
      <StatGroup>
        <Stat>
           <StatLabel>총 매출</StatLabel>
          <StatNumber>$12,345</StatNumber>
        </Stat>
        <Stat>
           <StatLabel>월간 매출</StatLabel>
          <StatNumber>$5,678</StatNumber>
        </Stat>
        <Stat>
           <StatLabel>신규 고객</StatLabel>
          <StatNumber>50</StatNumber>
        </Stat>
      </StatGroup>
      <Box mt={8}>
        <Table>
          <Thead>
            <Tr>
              <Th>Month</Th>
              <Th isNumeric>Sales</Th>
            </Tr>
          </Thead>
          <Tbody>
            {salesData.map((data, index) => (
              <Tr key={index}>
                <Td>{data.month}</Td>
                <Td isNumeric>${data.sales}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default DashboardHome;

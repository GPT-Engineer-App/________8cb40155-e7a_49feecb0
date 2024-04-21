import React from 'react';
import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

const SalesData = () => {
 
  const totalSales = 5000;
  const monthlySales = 2500;
  const newCustomers = 10;

  return (
    <Box>
      <Stat>
         <StatLabel>총 매출</StatLabel>
        <StatNumber>{totalSales}</StatNumber>
      </Stat>
      <Stat>
         <StatLabel>월간 매출</StatLabel>
        <StatNumber>{monthlySales}</StatNumber>
      </Stat>
      <Stat>
         <StatLabel>이번 달 신규 고객</StatLabel>
        <StatNumber>{newCustomers}</StatNumber>
      </Stat>
    </Box>
  );
};

export default SalesData;
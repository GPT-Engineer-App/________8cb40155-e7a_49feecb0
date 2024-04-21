import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const PaymentInfo = () => {
  const paymentData = [
    { id: 1, customerName: "John Doe", amount: 100, date: "2023-06-01", method: "Credit Card" },
    { id: 2, customerName: "Jane Smith", amount: 150, date: "2023-06-02", method: "PayPal" },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>고객</Th>
            <Th>금액</Th>
            <Th>날짜</Th>
            <Th>결제 방법</Th>
          </Tr>
        </Thead>
        <Tbody>
          {paymentData.map((payment) => (
            <Tr key={payment.id}>
              <Td>{payment.customerName}</Td>
              <Td>{payment.amount}</Td>
              <Td>{payment.date}</Td>
              <Td>{payment.method}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PaymentInfo;

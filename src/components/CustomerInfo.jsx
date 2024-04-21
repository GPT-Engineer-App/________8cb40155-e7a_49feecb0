import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const CustomerInfo = () => {
  const customerData = [
    { id: 1, name: "John Doe", phone: "1234567890", email: "john@example.com", address: "123 Main St" },
    { id: 2, name: "Jane Smith", phone: "9876543210", email: "jane@example.com", address: "456 Park Ave" },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>연락처</Th>
            <Th>이메일</Th>
            <Th>주소</Th>
            <Th>액션</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customerData.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.name}</Td>
              <Td>{customer.phone}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.address}</Td>
              <Td>
                <Button size="sm" mr={2}>
                  Edit
                </Button>
                <Button size="sm">Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerInfo;

import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ReservationInfo = () => {
  const reservationData = [
    { id: 1, customerName: "John Doe", date: "2023-06-01", time: "10:00 AM", status: "Confirmed" },
    { id: 2, customerName: "Jane Smith", date: "2023-06-02", time: "11:30 AM", status: "Pending" },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>고객</Th>
            <Th>날짜</Th>
            <Th>시간</Th>
            <Th>상태</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reservationData.map((reservation) => (
            <Tr key={reservation.id}>
              <Td>{reservation.customerName}</Td>
              <Td>{reservation.date}</Td>
              <Td>{reservation.time}</Td>
              <Td>{reservation.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ReservationInfo;

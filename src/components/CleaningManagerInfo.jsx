import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Image } from "@chakra-ui/react";

const CleaningManagerInfo = () => {
  const managerData = [
    {
      id: 1,
      name: "Manager 1",
      phone: "1111111111",
      email: "manager1@example.com",
      password: "password1",
      confirmPassword: "password1",
      address: "Address 1",
      dateOfBirth: "1990-01-01",
      gender: "Male",
      experience: "1년 이상 3년 미만",
      preferredField: "주택 청소",
      otherExperience: "Other experience 1",
      introduction: "Introduction 1",
      strengths: "Strengths 1",
      preferredWorkingHours: "9AM - 5PM",
      preferredArea: "Area 1",
      profilePicture: "https://example.com/profile1.jpg",
    },
    {
      id: 2,
      name: "Manager 2",
      phone: "2222222222",
      email: "manager2@example.com",
      password: "password2",
      confirmPassword: "password2",
      address: "Address 2",
      dateOfBirth: "1995-01-01",
      gender: "Female",
      experience: "3년 이상 5년 미만",
      preferredField: "사무실 청소",
      otherExperience: "Other experience 2",
      introduction: "Introduction 2",
      strengths: "Strengths 2",
      preferredWorkingHours: "10AM - 6PM",
      preferredArea: "Area 2",
      profilePicture: "https://example.com/profile2.jpg",
    },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>사진</Th>
            <Th>이름</Th>
            <Th>연락처</Th>
            <Th>이메일</Th>
            <Th>주소</Th>
            <Th>생년월일</Th>
            <Th>성별</Th>
            <Th>경력</Th>
            <Th>선호분야</Th>
            <Th>기타경험</Th>
            <Th>자기소개</Th>
            <Th>특기/강점</Th>
            <Th>희망시간</Th>
            <Th>희망지역</Th>
            <Th>액션</Th>
          </Tr>
        </Thead>
        <Tbody>
          {managerData.map((manager) => (
            <Tr key={manager.id}>
              <Td>
                <Image src={manager.profilePicture} alt="Profile" boxSize="60px" objectFit="cover" borderRadius="full" />
              </Td>
              <Td>{manager.name}</Td>
              <Td>{manager.phone}</Td>
              <Td>{manager.email}</Td>
              <Td>{manager.address}</Td>
              <Td>{new Date(manager.dateOfBirth).toLocaleDateString()}</Td>
              <Td>{manager.gender}</Td>
              <Td>{manager.experience}</Td>
              <Td>{manager.preferredField}</Td>
              <Td>{manager.otherExperience}</Td>
              <Td>{manager.introduction}</Td>
              <Td>{manager.strengths}</Td>
              <Td>{manager.preferredWorkingHours}</Td>
              <Td>{manager.preferredArea}</Td>
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

export default CleaningManagerInfo;

import React from "react";
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CustomerInfo from "../components/CustomerInfo";
import CleaningManagerInfo from "../components/CleaningManagerInfo";
import ReservationInfo from "../components/ReservationInfo";
import PaymentInfo from "../components/PaymentInfo";
import DashboardHome from "../components/DashboardHome";

const Dashboard = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <Box p={4}>
       <Heading mb={4}>관리자 대시보드</Heading>
      <Tabs>
        <TabList>
           <Tab>홈</Tab>
           <Tab>고객 정보</Tab>
           <Tab>청소 관리자 정보</Tab>
           <Tab>예약 정보</Tab>
           <Tab>결제 정보</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <DashboardHome />
          </TabPanel>
          <TabPanel>
            <CustomerInfo />
          </TabPanel>
          <TabPanel>
            <CleaningManagerInfo />
          </TabPanel>
          <TabPanel>
            <ReservationInfo />
          </TabPanel>
          <TabPanel>
            <PaymentInfo />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;

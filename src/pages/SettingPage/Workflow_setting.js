import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SideBar1 } from "../Sidebar1";
import ProfileHeader from "../ProfileHeader";

const RecruiterRoboLogo31Icon = styled.img`
  position: relative;
  width: 81px;
  height: 74px;
  object-fit: cover;
`;
const Logo = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6xs) var(--padding-7xs);
`;
const WebsiteName1 = styled.div`
  position: relative;
  line-height: 135.5%;
  font-weight: 600;
  display: inline-block;
  width: 83px;
  height: 64px;
  flex-shrink: 0;
`;
const WebsiteName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Logoheading = styled.div`
  position: absolute;
  top: 35px;
  left: 0px;
  width: 278px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-11xl);
`;
const Topleft = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 278px;
  height: 177px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  font-family: var(--font-poppins);
`;
const PhnoteIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const Darkmode1 = styled.div`
  position: absolute;
  top: 5px;
  left: 53px;
  font-weight: 500;
  display: inline-block;
  width: 165px;
  height: 22px;
`;
const Darkmode = styled.div`
  position: relative;
  width: 218px;
  height: 32px;
`;
const SettingsIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
const Settings1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
`;
const Settings = styled.div`
  position: relative;
  width: 218px;
  height: 32px;
  color: var(--color-darkslateblue-100);
`;
const Bottomsidebar = styled.div`
  position: absolute;
  top: 883px;
  left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-16xl);
`;
const Home2Icon = styled.img`
  position: absolute;
  top: 0.5px;
  left: 0px;
  width: 25px;
  height: 25px;
  overflow: hidden;
`;
const Dashboard1 = styled.div`
  position: absolute;
  top: 5px;
  left: 55px;
  font-weight: 500;
  display: inline-block;
  width: 165px;
  height: 22px;
`;
const Dashboard = styled.div`
  position: relative;
  width: 220px;
  height: 32px;
`;
const Div = styled.div`
  position: absolute;
  top: -5px;
  left: 7px;
  font-weight: 600;
`;
const Addjob1 = styled.div`
  position: absolute;
  top: 4px;
  left: -4px;
  border-radius: var(--br-5xs);
  background-color: var(--color-lightslategray);
  width: 36px;
  height: 38px;
`;
const Addjob2 = styled.div`
  position: absolute;
  top: 12px;
  left: 57px;
  font-size: var(--font-size-lg);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-lightslategray);
  text-align: left;
  display: inline-block;
  width: 165px;
  height: 22px;
`;
const Addjob = styled.div`
  position: relative;
  width: 227px;
  height: 46px;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const MaterialSymbolsworkOutlineIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const Topsidebar = styled.div`
  position: absolute;
  top: 177px;
  left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16xl);
`;
const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 278px;
  height: 1080px;
  overflow: hidden;
`;
const Profile = styled.div`
  position: relative;
  font-weight: 600;
`;
const Headername = styled.div`
  position: absolute;
  top: 37px;
  left: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NotificationChild = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-200);
  width: 50px;
  height: 50px;
  z-index: 0;
`;
const Notification1Icon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 12px;
  left: 13px;
  width: 25px;
  height: 25px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Notification1 = styled.div`
  position: absolute;
  top: 12px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ProfileIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 100px;
  width: 74px;
  height: 74px;
`;
const Rightheader = styled.div`
  position: absolute;
  top: 13px;
  right: 33px;
  width: 174px;
  height: 74px;
`;
const Profileheader = styled.div`
  position: absolute;
  width: calc(100% - 284px);
  top: 0px;
  right: 0px;
  left: 284px;
  background-color: var(--color-white);
  height: 100px;
  overflow: hidden;
  font-size: var(--font-size-9xl);
  color: var(--color-gray-500);
`;
const Select = styled.div`
  position: absolute;
  top: 10px;
  left: 28px;
`;
const ChevronIcon = styled.img`
  position: absolute;
  height: 32.25%;
  width: 12.29%;
  top: 33.75%;
  right: 16.82%;
  bottom: 34%;
  left: 70.88%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.8;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 95px;
  left: calc(50% - 512px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 40px;
  overflow: hidden;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
`;
const Dropdown1 = styled.div`
  position: absolute;
  top: 175px;
  left: calc(50% - 512px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 40px;
  overflow: hidden;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
`;
const Save = styled.div`
  position: relative;
  font-weight: 500;
`;
const Exam1Wrapper = styled.div`
  position: absolute;
  top: 255px;
  left: 259px;
  border-radius: var(--br-mini);
  background-color: var(--color-dodgerblue);
  width: 125px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xs);
  box-sizing: border-box;
  color: var(--color-white);
`;
const LiveInterview1Wrapper = styled.div`
  position: absolute;
  top: 1051px;
  left: 260px;
  border-radius: var(--br-mini);
  background-color: var(--color-dodgerblue);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
  color: var(--color-white);
`;
const Exam2Wrapper = styled.div`
  position: absolute;
  top: 255px;
  left: 747px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-dodgerblue);
  box-sizing: border-box;
  width: 125px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xs);
  color: var(--color-dodgerblue);
`;
const LiveInterview2Wrapper = styled.div`
  position: absolute;
  top: 1052px;
  left: 725px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-dodgerblue);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
  color: var(--color-dodgerblue);
`;
const Exam3Wrapper = styled.div`
  position: absolute;
  top: 255px;
  left: 1235px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-dodgerblue);
  box-sizing: border-box;
  width: 125px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xs);
  color: var(--color-dodgerblue);
`;
const InterviewerName = styled.div`
  position: absolute;
  top: 1136px;
  left: 260px;
  letter-spacing: -0.02em;
  font-weight: 500;
`;
const Savebutton = styled.div`
  position: absolute;
  top: 1393px;
  left: 1039px;
  border-radius: var(--br-mini);
  background-color: var(--color-darkslateblue-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-21xl);
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const Savebutton1 = styled.div`
  position: absolute;
  top: 1393px;
  left: 1221px;
  border-radius: var(--br-mini);
  background-color: var(--color-darkslateblue-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-21xl);
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const Role = styled.div`
  position: absolute;
  top: 103px;
  left: 51px;
  font-weight: 500;
`;
const WrittenExam = styled.div`
  position: absolute;
  top: 183px;
  left: 51px;
  font-weight: 500;
`;
const LiveInterview = styled.div`
  position: absolute;
  top: 982px;
  left: 51px;
  font-weight: 500;
`;
const BackgroundCheck = styled.div`
  position: absolute;
  top: 1247px;
  left: 51px;
  font-weight: 500;
`;
const Dropdown2 = styled.div`
  position: absolute;
  top: 970px;
  left: calc(50% - 512px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 40px;
  overflow: hidden;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
`;
const Dropdown3 = styled.div`
  position: absolute;
  top: 1239px;
  left: calc(50% - 512px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 40px;
  overflow: hidden;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
`;
const Skills = styled.div`
  position: absolute;
  top: 10px;
  left: 24px;
`;
const ChevronIcon4 = styled.img`
  position: absolute;
  height: 34.75%;
  width: 12.29%;
  top: 33.75%;
  right: 12.12%;
  bottom: 31.5%;
  left: 75.59%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.8;
`;
const Dropdown4 = styled.div`
  position: absolute;
  top: 90px;
  left: calc(50% - 392px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 40px;
  overflow: hidden;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
`;
const TypeYourMessage = styled.div`
  position: absolute;
  top: 24px;
  left: 20px;
  letter-spacing: -0.02em;
`;
const TypeYourMessageHereWrapper = styled.div`
  position: absolute;
  top: 38px;
  left: 0px;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25);
  width: 1057px;
  height: 138px;
  overflow: hidden;
`;
const CreateCustomMail = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-xl);
  letter-spacing: -0.02em;
  font-weight: 500;
  color: var(--color-gray-100);
`;
const Email = styled.div`
  position: absolute;
  top: 431px;
  left: 22px;
  width: 1057px;
  height: 176px;
  font-size: var(--font-size-lg);
  color: #c7c7c7;
`;
const StartDate1 = styled.div`
  position: absolute;
  top: 9px;
  left: 0px;
  letter-spacing: -0.02em;
  font-weight: 500;
`;
const Date1 = styled.div`
  position: absolute;
  top: 10px;
  left: 19px;
`;
const UilcalenderIcon = styled.img`
  position: absolute;
  top: 8px;
  left: 132px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Calender = styled.div`
  position: absolute;
  top: 0px;
  left: 136px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 170px;
  height: 40px;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-200);
`;
const StartDate = styled.div`
  position: absolute;
  top: 170px;
  left: 23px;
  width: 306px;
  height: 40px;
`;
const Select1 = styled.div`
  position: absolute;
  top: 10px;
  left: 26px;
`;
const ChevronIcon5 = styled.img`
  position: absolute;
  height: 33.5%;
  width: 12.29%;
  top: 33.75%;
  right: 15%;
  bottom: 32.75%;
  left: 72.71%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.8;
`;
const Dropdown5 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 0px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 40px;
  overflow: hidden;
`;
const Threshhold1 = styled.div`
  position: absolute;
  top: 10px;
  left: 0px;
  font-size: var(--font-size-xl);
  letter-spacing: -0.02em;
  font-weight: 500;
  color: var(--color-gray-100);
`;
const Threshhold = styled.div`
  position: absolute;
  top: 351px;
  left: 22px;
  width: 274px;
  height: 40px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
`;
const Skills1 = styled.div`
  position: absolute;
  top: 95px;
  left: 22px;
  letter-spacing: -0.02em;
  font-weight: 500;
`;
const EndDate1 = styled.div`
  position: absolute;
  top: 8px;
  left: 0px;
  letter-spacing: -0.02em;
  font-weight: 500;
`;
const Date11 = styled.div`
  position: absolute;
  top: 10px;
  left: 23px;
`;
const UilcalenderIcon1 = styled.img`
  position: absolute;
  top: 10px;
  left: 133px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Calender1 = styled.div`
  position: absolute;
  top: 0px;
  left: 141px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 170px;
  height: 40px;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-200);
`;
const EndDate = styled.div`
  position: absolute;
  top: 259px;
  left: 22px;
  width: 311px;
  height: 40px;
`;
const Platform2 = styled.div`
  position: absolute;
  top: 11px;
  left: 22px;
`;
const ChevronIcon6 = styled.img`
  position: absolute;
  height: 34.75%;
  width: 12.29%;
  top: 33.75%;
  right: 11.53%;
  bottom: 31.5%;
  left: 76.18%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.8;
`;
const Dropdown6 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 17.5px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 40px;
  overflow: hidden;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
`;
const Platform = styled.div`
  position: absolute;
  top: 10px;
  left: 24px;
  width: 305px;
  height: 40px;
`;
const Container = styled.div`
  position: absolute;
  top: 327px;
  left: 259px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 1102px;
  height: 617px;
  overflow: hidden;
`;
const Scrollbar = styled.div`
  position: absolute;
  top: 71px;
  right: -5px;
  border-radius: 49px;
  background-color: var(--color-dodgerblue);
  width: 5px;
  height: 523px;
  overflow: hidden;
  transform: rotate(180deg);
  transform-origin: 0 0;
`;
const Personal = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 21px);
  font-weight: 500;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 25px;
  left: 0px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100)
  width: 98px;
  height: 3px;
  display: none;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 25px;
  left: 155px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 98px;
  height: 3px;
`;
const PersonalParent = styled.div`
  position: relative;
  width: 98px;
  height: 28px;
  cursor: pointer;
`;
const Settingsubheadingpannel = styled.div`
  position: fixed;
  top: 184px;
    left: 357px;
  width: 254px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-51xl);
  font-size: var(--font-size-base);
  color: var(--color-lightslategray);
`;
const Maincontainer = styled.div`
  position: absolute;
  top: 150px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  width: 1542px;
  height: 100%;
  font-size: var(--font-size-xl);
  color: var(--color-gray-100);
  overflow: scroll;
//   overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-dodgerblue);
    border-radius: 10px;
  }
`;
const Sidediv = styled.div`
  position: relative;
//   top: 150px;
//   left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  width: 100%;
  height: 1478px;
  font-size: var(--font-size-xl);
  color: var(--color-gray-100);
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-dodgerblue);
    border-radius: 10px;
  }
`;
const SettingRoot = styled.div`
position: fixed;
background-color: #f5f7fa;
width: 100%;
height: 1080px;
text-align: left;
font-size: var(--font-size-sm);
color: var(--color-gray-100);
font-family: var(--font-inter);
zoom: 75%;
overflow: hidden;
`;

const WorkflowSetting = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/settingteam");
  }, [navigate]);

  return (
    <SettingRoot>
      <SideBar1 clickedTab={"Settings"}/>
      <ProfileHeader clickedTab={"Setting"}/>
      <Maincontainer>
      <Sidediv>
        <Dropdown>
          <Select>Select</Select>
          <ChevronIcon alt="" src="/chevron.svg" />
        </Dropdown>
        <Dropdown1>
          <Select>0 - 10</Select>
          <ChevronIcon alt="" src="/chevron.svg" />
        </Dropdown1>
        <Exam1Wrapper>
          <Save>Exam 1</Save>
        </Exam1Wrapper>
        <LiveInterview1Wrapper>
          <Save>Live Interview 1</Save>
        </LiveInterview1Wrapper>
        <Exam2Wrapper>
          <Save>Exam 2</Save>
        </Exam2Wrapper>
        <LiveInterview2Wrapper>
          <Save>Live Interview 2</Save>
        </LiveInterview2Wrapper>
        <Exam3Wrapper>
          <Save>Exam 3</Save>
        </Exam3Wrapper>
        <InterviewerName>Interviewer Name</InterviewerName>
        <Savebutton>
          <Save>Save</Save>
        </Savebutton>
        <Savebutton1>
          <Save>Cancel</Save>
        </Savebutton1>
        <Role>Role</Role>
        <WrittenExam>Written Exam</WrittenExam>
        <LiveInterview>Live Interview</LiveInterview>
        <BackgroundCheck>Background Check</BackgroundCheck>
        <Dropdown2>
          <Select>0 - 10</Select>
          <ChevronIcon alt="" src="/chevron.svg" />
        </Dropdown2>
        <Dropdown3>
          <Select>Yes</Select>
          <ChevronIcon alt="" src="/chevron.svg" />
        </Dropdown3>
        <Container>
          <Dropdown4>
            <Skills>Skills</Skills>
            <ChevronIcon4 alt="" src="/chevron1.svg" />
          </Dropdown4>
          <Email>
            <TypeYourMessageHereWrapper>
              <TypeYourMessage>Type your message here...</TypeYourMessage>
            </TypeYourMessageHereWrapper>
            <CreateCustomMail>Create custom mail</CreateCustomMail>
          </Email>
          <StartDate>
            <StartDate1>Start Date</StartDate1>
            <Calender>
              <Date1>dd-mm-yyyy</Date1>
              <UilcalenderIcon alt="" src="/uilcalender.svg" />
            </Calender>
          </StartDate>
          <Threshhold>
            <Dropdown5>
              <Select1>Select</Select1>
              <ChevronIcon5 alt="" src="/chevron2.svg" />
            </Dropdown5>
            <Threshhold1>Threshhold</Threshhold1>
          </Threshhold>
          <Skills1>Skills</Skills1>
          <EndDate>
            <EndDate1>End Date</EndDate1>
            <Calender1>
              <Date11>dd-mm-yyyy</Date11>
              <UilcalenderIcon1 alt="" src="/uilcalender.svg" />
            </Calender1>
          </EndDate>
          <Platform>
            <EndDate1>Platform</EndDate1>
            <Dropdown6>
              <Platform2>Platform</Platform2>
              <ChevronIcon6 alt="" src="/chevron1.svg" />
            </Dropdown6>
          </Platform>
        </Container>
        

        </Sidediv>
        {/* <Scrollbar /> */}
        <Settingsubheadingpannel>
          <PersonalParent onClick={onFrameContainer6Click}>
            <Personal>Team</Personal>
            <FrameChild />
            <FrameItem />
          </PersonalParent>
          <Save>Workflow</Save>
        </Settingsubheadingpannel>
      </Maincontainer>
    </SettingRoot>
  );
};

export default WorkflowSetting;

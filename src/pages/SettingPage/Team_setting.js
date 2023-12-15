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
  background-color: var(--color-darkslateblue-100);
  width: 98px;
  height: 3px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 25px;
  left: 155px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 98px;
  height: 3px;
  display: none;
`;
const PersonalParent = styled.div`
  position: relative;
  width: 98px;
  height: 28px;
`;
const Preferences = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--color-lightslategray);
  cursor: pointer;
`;
const Settingsubheadingpannel = styled.div`
  position: absolute;
  top: 35px;
  left: 30px;
  width: 254px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-51xl);
`;
const HrManager = styled.div`
  position: absolute;
  top: 35px;
  left: 290px;
  font-weight: 500;
`;
const Srinivas = styled.div`
  position: absolute;
  top: 28px;
  left: 989px;
  font-weight: 500;
  font-family: var(--font-poppins);
  color: var(--color-darkslategray);
`;
const Manager = styled.div`
  position: absolute;
  top: 0px;
  left: -4px;
  font-weight: 500;
`;
const Resume = styled.div`
  position: absolute;
  top: 21px;
  left: 1359px;
  width: 74px;
  height: 27px;
  text-align: center;
  color: var(--color-darkslategray);
  font-family: var(--font-poppins);
`;
const Div1 = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  line-height: 130%;
  font-weight: 500;
  color: var(--color-darkslateblue-200);
`;
const Srinivasgmailcom = styled.div`
  position: absolute;
  top: 35px;
  left: 610px;
  font-weight: 500;
`;
const HrManagerParent = styled.div`
  position: absolute;
  top: 34px;
  left: calc(50% - 771px);
  width: 1542px;
  height: 70px;
`;
const Interviewer = styled.div`
  position: absolute;
  top: 0px;
  left: -13px;
  font-weight: 500;
`;
const SeniorDeveloperParent = styled.div`
  position: absolute;
  top: 114px;
  left: calc(50% - 771px);
  width: 1542px;
  height: 70px;
`;
const SeniorDeveloperGroup = styled.div`
  position: absolute;
  top: 194px;
  left: calc(50% - 771px);
  width: 1542px;
  height: 70px;
`;
const HrManagerGroup = styled.div`
  position: absolute;
  top: 274px;
  left: calc(50% - 771px);
  width: 1542px;
  height: 70px;
`;
const HrManagerContainer = styled.div`
  position: absolute;
  top: 354px;
  left: calc(50% - 771px);
  width: 1542px;
  height: 70px;
`;
const Designation = styled.div`
  position: absolute;
  top: 1px;
  left: 267px;
  font-weight: 600;
`;
const Email = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  font-weight: 600;
`;
const Match = styled.div`
  position: absolute;
  top: 0px;
  left: 619px;
  width: 47px;
  height: 24px;
`;
const Applieddate = styled.div`
  position: absolute;
  top: 0px;
  left: 958px;
  width: 139px;
  height: 24px;
`;
const Role = styled.div`
  position: absolute;
  top: 1px;
  left: 1335px;
  font-weight: 600;
`;
const SNo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 130%;
  font-weight: 600;
  color: var(--color-lightslategray);
`;
const Heading = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 747px);
  width: 1443px;
  height: 24px;
`;
const Candidateslist = styled.div`
  position: absolute;
  width: 100%;
  top: 125px;
  right: 0px;
  left: 0px;
  height: 424px;
`;
const Main = styled.div`
  position: absolute;
  width: 100%;
  top: 63px;
  right: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 592px;
  font-size: var(--font-size-lg);
  color: var(--color-gray-300);
`;
const Gridiconsadd = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AddTeam = styled.div`
  position: relative;
  font-weight: 500;
`;
const GridiconsaddParent = styled.div`
  position: absolute;
  top: 655px;
  left: 689px;
  border-radius: var(--br-mini);
  background-color: var(--color-dodgerblue);
  width: 164px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  font-size: var(--font-size-xl);
  color: var(--color-white);
`;
const Maincontainer = styled.div`
  position: absolute;
  top: 150px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  width: 1542px;
  height: 100%
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-100);
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

const TeamSetting = () => {
  const navigate = useNavigate();

  const onPreferencesTextClick = useCallback(() => {
    navigate("/settingworkflow");
  }, [navigate]);

  return (
    <SettingRoot>
      <SideBar1 clickedTab={"Settings"}/>
      <ProfileHeader clickedTab={"Setting"}/>
      <Maincontainer>
        <Settingsubheadingpannel>
          <PersonalParent>
            <Personal>Team</Personal>
            <FrameChild />
            <FrameItem />
          </PersonalParent>
          <Preferences onClick={onPreferencesTextClick}>Workflow</Preferences>
        </Settingsubheadingpannel>
        <Main>
          <Candidateslist>
            <HrManagerParent>
              <HrManager>HR Manager</HrManager>
              <Srinivas>Srinivas</Srinivas>
              <Resume>
                <Manager>Manager</Manager>
              </Resume>
              <Div1>1.</Div1>
              <Srinivasgmailcom>Srinivas@gmail.com</Srinivasgmailcom>
            </HrManagerParent>
            <SeniorDeveloperParent>
              <HrManager>Senior Developer</HrManager>
              <Srinivas>Ajay</Srinivas>
              <Resume>
                <Interviewer>Interviewer</Interviewer>
              </Resume>
              <Div1>2.</Div1>
              <Srinivasgmailcom>Ajay@gmail.com</Srinivasgmailcom>
            </SeniorDeveloperParent>
            <SeniorDeveloperGroup>
              <HrManager>Senior Developer</HrManager>
              <Srinivas>Naveen</Srinivas>
              <Resume>
                <Interviewer>Interviewer</Interviewer>
              </Resume>
              <Div1>3</Div1>
              <Srinivasgmailcom>Naveen@gmail.com</Srinivasgmailcom>
            </SeniorDeveloperGroup>
            <HrManagerGroup>
              <HrManager>HR Manager</HrManager>
              <Srinivas>Srinivas</Srinivas>
              <Resume>
                <Manager>Manager</Manager>
              </Resume>
              <Div1>4</Div1>
              <Srinivasgmailcom>Srinivas@gmail.com</Srinivasgmailcom>
            </HrManagerGroup>
            <HrManagerContainer>
              <HrManager>HR Manager</HrManager>
              <Srinivas>Srinivas</Srinivas>
              <Resume>
                <Manager>Manager</Manager>
              </Resume>
              <Div1>5</Div1>
              <Srinivasgmailcom>Srinivas@gmail.com</Srinivasgmailcom>
            </HrManagerContainer>
            <Heading>
              <Designation>Designation</Designation>
              <Match>
                <Email>Email</Email>
              </Match>
              <Applieddate>
                <Email>Name</Email>
              </Applieddate>
              <Role>Role</Role>
              <SNo>S. No</SNo>
            </Heading>
          </Candidateslist>
        </Main>
        <GridiconsaddParent>
          <Gridiconsadd alt="" src="/gridiconsadd.svg" />
          <AddTeam>Add Team</AddTeam>
        </GridiconsaddParent>
      </Maincontainer>
    </SettingRoot>
  );
};

export default TeamSetting;

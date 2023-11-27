import { FunctionComponent } from "react";
import styled from "styled-components";

const PhnoteIcon = styled.img`
  position: absolute;
  top: 0px;
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
const Bottomsidebar = styled.div`
  position: absolute;
  top: 747px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-16xl);
`;
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
  padding: 7px 6px;
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
  padding: 0px 20px;
  box-sizing: border-box;
  gap: 30px;
`;
const Topleft = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 278px;
  height: 177px;
  overflow: hidden;
  text-align: center;
  font-size: 14px;
  color: #161616;
  font-family: var(--font-poppins);
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
  color: #314ca3;
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  left: 14px;
  font-weight: 600;
`;
const Addjob1 = styled.div`
  position: absolute;
  top: 0px;
  left: -7px;
  border-radius: 8px;
  background-color: var(--color-lightslategray);
  width: 50px;
  height: 46px;
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
  font-size: 32px;
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const Candidates = styled.div`
  position: relative;
  width: 220px;
  height: 32px;
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
const SidebarRoot = styled.div`
  background-color: var(--color-white);
  width: 278px;
  height: 1080px;
  position: absolute;
    top: 0px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-lightslategray);
  font-family: var(--font-inter);
`;

const LeftSidebar = () => {
  return (
    <SidebarRoot>
      <Bottomsidebar>
        <Darkmode>
          <PhnoteIcon alt="" src="/phnote.svg" />
          <Darkmode1>Billing</Darkmode1>
        </Darkmode>
        <Darkmode>
          <Settings1>
            <SettingsIcon alt="" src="/settings@2x.png" />
          </Settings1>
          <Darkmode1>Settings</Darkmode1>
        </Darkmode>
        <Darkmode>
          <Settings1>
            <SettingsIcon alt="" src="/logout@2x.png" />
          </Settings1>
          <Darkmode1>Logout</Darkmode1>
        </Darkmode>
      </Bottomsidebar>
      <Topleft>
        <Logoheading>
          <Logo>
            <RecruiterRoboLogo31Icon
              alt=""
              src="/recruiter-robo-logo-3-1@2x.png"
            />
          </Logo>
          <WebsiteName>
            <WebsiteName1>Recruiter Robo</WebsiteName1>
          </WebsiteName>
        </Logoheading>
      </Topleft>
      <Topsidebar>
        <Dashboard>
          <Home2Icon alt="" src="/home-2.svg" />
          <Dashboard1>Dashboard</Dashboard1>
        </Dashboard>
        <Addjob>
          <Addjob1>
            <Div>+</Div>
          </Addjob1>
          <Addjob2>Add Job</Addjob2>
        </Addjob>
        <Candidates>
          <SettingsIcon alt="" src="/cv@2x.png" />
          <Dashboard1>Candidates</Dashboard1>
        </Candidates>
        <Candidates>
          <MaterialSymbolsworkOutlineIcon
            alt=""
            src="/materialsymbolsworkoutline.svg"
          />
          <Dashboard1>Jobs</Dashboard1>
        </Candidates>
        <Candidates>
          <MaterialSymbolsworkOutlineIcon
            alt=""
            src="/materialsymbolsbubblechartoutline.svg"
          />
          <Dashboard1>Analytics</Dashboard1>
        </Candidates>
      </Topsidebar>
    </SidebarRoot>
  );
};

export default LeftSidebar;

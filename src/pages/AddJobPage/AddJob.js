import styled from "styled-components";
// import BasicDateRangeCalendar from "../../components/Calendar";
// import LeftSidebar from "./Sidebar";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";
// import { ProfileHeader1 } from "../ProfileHeader1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const DiagramIcon = styled.img`
  position: absolute;
  top: 124px;
  left: 130px;
  width: 314px;
  height: 314px;
`;
const NewApplicationIn = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
  display: inline-block;
  width: 117px;
`;
const Div = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
  font-size: var(--font-size-base);
  font-weight: 600;
  display: inline-block;
  width: 21px;
`;
const NewApplication = styled.div`
  position: absolute;
  top: 116px;
  left: 428px;
  width: 117px;
  height: 68px;
`;
const Div1 = styled.div`
  position: absolute;
  top: 0px;
  left: 55px;
  font-weight: 600;
`;
const TotalApplications = styled.div`
  position: absolute;
  top: 36px;
  left: 0px;
  font-size: var(--font-size-base);
  color: var(--color-dimgray);
`;
const Totalapplications = styled.div`
  position: absolute;
  top: 208px;
  left: 215px;
  width: 144px;
  height: 60px;
  font-size: var(--font-size-xl);
`;
const DeveloperOnSite = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Subtitle = styled.div`
  position: absolute;
  top: 34px;
  left: 0px;
  width: 296px;
  height: 27px;
`;
const BackendDeveloper = styled.div`
  position: absolute;
  top: 0px;
  left: 19px;
  font-weight: 500;
`;
const TitleChild = styled.div`
  position: absolute;
  top: 10px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-dodgerblue);
  width: 9px;
  height: 9px;
`;
const Title = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 309px;
  height: 30px;
  font-size: var(--font-size-xl);
  color: var(--color-gray-100);
`;
const FrontendSoftwareDeveloper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 309px;
  height: 61px;
  font-size: var(--font-size-lg);
  color: var(--color-dimgray);
`;
const SvgSpinners3DotsMoveIcon = styled.img`
  position: absolute;
  top: 24px;
  left: 526px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Frontend = styled.div`
  position: absolute;
  top: 348px;
  left: 744px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 574px;
  height: 281px;
`;
const DiagramIcon1 = styled.img`
  position: absolute;
  top: 123px;
  left: 130px;
  width: 314px;
  height: 322px;
`;
const Applied1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const Div2 = styled.div`
  position: absolute;
  top: 23px;
  left: 17px;
  font-size: var(--font-size-base);
  font-weight: 600;
`;
const Applied = styled.div`
  position: absolute;
  top: 170px;
  left: 97px;
  width: 55px;
  height: 47px;
`;
const OnSiteHyderabad = styled.div`
  position: absolute;
  top: 0px;
  left: 89px;
`;
const Subtitle1 = styled.div`
  position: absolute;
  top: 34px;
  left: 0px;
  width: 268px;
  height: 27px;
`;
const Title1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 214px;
  height: 30px;
  font-size: var(--font-size-xl);
  color: var(--color-gray-100);
`;
const UxuiDesigner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 268px;
  height: 61px;
`;
const SvgSpinners3DotsMoveIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 502px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const BackendSoftwareDeveloper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 526px;
  height: 61px;
  font-size: var(--font-size-lg);
  color: var(--color-dimgray);
`;
const Backend = styled.div`
  position: absolute;
  top: 348px;
  left: 0px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 574px;
  height: 281px;
`;
const DiagramIcon2 = styled.img`
  position: absolute;
  top: 131px;
  left: 130px;
  width: 314px;
  height: 314px;
`;
const Newapplication = styled.div`
  position: absolute;
  top: 122px;
  left: 409px;
  width: 117px;
  height: 68px;
`;
const Frontend1 = styled.div`
  position: absolute;
  top: 0px;
  left: 744px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 574px;
  height: 288px;
`;
const DiagramIcon3 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  width: 574px;
  height: 288px;
`;
const Applied2 = styled.div`
  position: absolute;
  top: 177px;
  left: 102px;
  width: 55px;
  height: 47px;
`;
const OnSiteHyderabad1 = styled.div`
  position: absolute;
  top: 0px;
  left: 78px;
`;
const Title3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 170px;
  height: 30px;
  font-size: var(--font-size-xl);
  color: var(--color-gray-100);
`;
const SvgSpinners3DotsMoveIcon3 = styled.img`
  position: absolute;
  top: 2px;
  left: 502px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Uxui = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 574px;
  height: 288px;
`;
const Ongoingjobscointainer = styled.div`
  position: absolute;
  width: 100%;
  top: 54px;
  right: 0px;
  left: 0px;
  height: 585px;
`;
const OngoingJobs = styled.div`
  position: absolute;
  top: 5px;
  left: 0px;
  font-size: 24px;
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--color-gray-200);
`;
const Ongoingjobs = styled.div`
  position: absolute;
  top: 323px;
  left: calc(50% - 693px);
  width: 1318px;
  height: 683px;
`;
const Profile = styled.div`
  position: relative;
  font-weight: 600;
  height: 44px;
`;
const LineChartIcon = styled.img`
  position: relative;
  border-radius: var(--br-5xs);
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const TotalCandidates = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-lightslategray);
`;
const Totalcandidates = styled.div`
  position: absolute;
  top: 82px;
  left: 78px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 259px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  height: 63%;
  gap: 35%;
`;
const CandidatesHired = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-lightslategray);
  text-align: left;
`;
const Candidateshired = styled.div`
  position: absolute;
  top: 82px;
  left: 425px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 256px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  height: 63%;
  gap: 35%;
`;
const Div10 = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  width: 89px;
  height: 44px;
  flex-shrink: 0;
`;
const Totalvacancies = styled.div`
  position: absolute;
  top: 82px;
  left: 772px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 256px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  height: 63%;
  gap: 35%;
`;
const Vacanciesclosed = styled.div`
  position: absolute;
  top: 82px;
  left: 1119px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 256px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  height: 63%;
  gap: 35%;
`;
const Lifetime1 = styled.div`
  position: absolute;
  top: 0px;
  left: 26px;
  font-weight: 500;
  display: inline-block;
  width: 70px;
  height: 20px;
`;
const LifetimeChild = styled.div`
  position: absolute;
  top: 1.9px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-white);
  border: 1px solid var(--color-dodgerblue);
  box-sizing: border-box;
  width: 18px;
  height: 17.1px;
`;
const LifetimeItem = styled.div`
  position: absolute;
  top: 4.8px;
  left: 3px;
  border-radius: 50%;
  background-color: var(--color-dodgerblue);
  border: 1px solid var(--color-dodgerblue);
  box-sizing: border-box;
  width: 12px;
  height: 11.4px;
`;
const Lifetime = styled.div`
  position: relative;
  width: 96px;
  height: 20px;
`;
const DaysItem = styled.div`
  position: absolute;
  top: 4.8px;
  left: 3px;
  border-radius: 50%;
  width: 12px;
  height: 11.4px;
`;
const Timeperiod = styled.div`
  position: absolute;
  top: 30px;
  left: 78px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 60px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;
const Container1 = styled.div`
  position: absolute;
  top: 58px;
  left: calc(50% - 771px);
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.08);
  width: 1542px;
  height: 259px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-21xl);
  color: var(--color-darkslateblue);
`;
const WelcomeRobert = styled.div`
  position: relative;
  font-weight: 500;
`;
const Greetings = styled.div`
  position: absolute;
  width: calc(100% - 1267px);
  top: 23px;
  right: 1185px;
  left: 82px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-13xl);
  color: var(--color-gray-200);
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
const Main = styled.div`
  position: absolute;
  width: calc(100% - 378px);
  top: 150px;
  right: 50px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 110vh;
  font-family: var(--font-poppins);
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 7px;
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
const Headername = styled.div`
  position: absolute;
  top: 37px;
  left: 330px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NotificationChild = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #f4f4f6;
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
  gap: 10px;
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
  font-size: 28px;
  color: #0a0f21;
`;
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
  top: 768px;
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
  font-size: var(--font-size-sm);
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
const Dashboard2 = styled.div`
  position: absolute;
  top: 5px;
  left: 55px;
  font-weight: 500;
  display: inline-block;
  width: 165px;
  height: 22px;
`;
const Dashboard1 = styled.div`
  position: relative;
  width: 220px;
  height: 32px;
  color: var(--color-darkslateblue);
`;
const Div12 = styled.div`
  position: absolute;
  top: 0px;
  left: 14px;
  font-weight: 600;
`;
const Addjob1 = styled.div`
  position: absolute;
  top: 0px;
  left: -7px;
  border-radius: var(--br-5xs);
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
  font-size: var(--font-size-13xl);
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
const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 278px;
  height: 1080px;
  overflow: hidden;
  font-size: var(--font-size-lg);
  color: var(--color-lightslategray);
`;
const DashboardRoot = styled.div`
  position: fixed;
  background-color: #f5f7fa;
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  zoom: 75%;
  overflow: hidden;
}
`;
const Temporary = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 19px;
  left: 24px;
  font-weight: 500;
  z-index: 0;
`;
const TemporaryWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: -1px;
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-dimgray);
  box-sizing: border-box;
  width: 720px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
`;
const EmploymentType = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const Employmenttype = styled.div`
  position: absolute;
  top: 570px;
  left: 122px;
  width: 718px;
  height: 108px;
`;
const Joblocation = styled.div`
  position: absolute;
  top: 438px;
  left: 122px;
  width: 718px;
  height: 108px;
`;
const Worktype = styled.div`
  position: absolute;
  top: 306px;
  left: 122px;
  width: 718px;
  height: 108px;
`;
const Jobtitle = styled.div`
  position: absolute;
  top: 174px;
  left: 122px;
  width: 718px;
  height: 108px;
`;
const Container1Child = styled.div`
  position: absolute;
  top: 133.5px;
  left: -0.5px;
  border-top: 1px solid rgba(184, 184, 184, 0.57);
  box-sizing: border-box;
  width: 953px;
  height: 1px;
`;
const MdiarrowLeftIcon = styled.img`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const CompanyRole = styled.div`
  position: absolute;
  top: 0px;
  left: 41px;
  font-weight: 500;
`;
const Heading = styled.div`
  position: absolute;
  top: 60px;
  left: 108px;
  width: 461px;
  height: 29px;
  text-align: center;
  color: var(--color-gray-100);
`;
const SaveAndContinue = styled.div`
  position: relative;
  font-weight: 600;
`;
const SaveAndContinueWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-9xs);
  background-color: var(--color-dodgerblue);
  width: 718px;
  height: 67px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-5xs);
  box-sizing: border-box;
`;
const Saveandcontinue = styled.div`
  position: absolute;
  top: 1285px;
  left: 122px;
  width: 718px;
  height: 67px;
  color: var(--color-white);
`;
const JobdescriptionChild = styled.div`
  position: absolute;
  top: 77px;
  left: -1px;
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-dimgray);
  box-sizing: border-box;
  width: 720px;
  height: 282px;
`;
const JobDescription = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const BoldIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const ItalicIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 40px;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const UnderlineIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 80px;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const BulletedListIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 120px;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const FontSizeIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 160px;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const Textformatting = styled.div`
  position: absolute;
  top: 41px;
  left: 0px;
  width: 184px;
  height: 24px;
`;
const EnableAiChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-xs);
  background-color: var(--color-whitesmoke-100);
`;
const Ai = styled.div`
  position: absolute;
  top: 7.69%;
  left: 16%;
  font-weight: 500;
`;
const IonswitchIcon = styled.img`
  position: absolute;
  height: 76.92%;
  width: 26.67%;
  top: 11.54%;
  right: 16%;
  bottom: 11.54%;
  left: 57.33%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const EnableAi = styled.div`
  position: absolute;
  top: 39px;
  left: 208px;
  width: 75px;
  height: 26px;
  font-size: var(--font-size-lg);
  color: var(--color-black);
`;
const Jobdescription = styled.div`
  position: absolute;
  top: 715px;
  left: 122px;
  width: 718px;
  height: 358px;
  color: var(--color-darkslategray);
`;
const AddSkill = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 10px;
  left: 27px;
  font-weight: 500;
  z-index: 0;
`;
const AddSkillWrapper = styled.div`
  position: absolute;
  top: 81px;
  left: -2px;
  border-radius: var(--br-mini);
  border: 2px solid var(--color-darkslategray);
  box-sizing: border-box;
  width: 128px;
  height: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-5xs);
`;
const AddSkillKeywords = styled.div`
  position: absolute;
  top: 37px;
  left: 0px;
`;
const AddSkills = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const Addskills1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 708px;
  height: 59px;
  font-family: var(--font-inter);
`;
const Addskills = styled.div`
  position: absolute;
  top: 1100px;
  left: 122px;
  width: 708px;
  height: 130px;
  font-size: var(--font-size-lg);
  font-family: var(--font-poppins);
`;

const SelectOneOption = styled.div`
  position: absolute;
  top: 50px;
  left: calc(50% - 272px);
  font-weight: 500;
`;
const FillJd = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  font-weight: 500;
`;
const ChevronIcon = styled.img`
  position: absolute;
  height: 20.94%;
  width: 8.54%;
  top: 39.84%;
  right: 7%;
  bottom: 39.22%;
  left: 84.46%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.8;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 104px;
  left: calc(50% - 113px);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 280px;
  height: 64px;
  overflow: hidden;
  font-size: 16px;
`;

const Dashboard = styled.div`
  position: relative;
  width: 220px;
  height: 32px;
`;

const Addjob3 = styled.div`
  position: relative;
  width: 227px;
  height: 46px;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const CvIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  object-fit: cover;
`;

const Sidebar1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 278px;
  height: 1080px;
  font-size: var(--font-size-lg);
  color: var(--color-lightslategray);
`;
const Profileheader1 = styled.div`
  position: absolute;
  width: calc(100% - 284px);
  top: 0px;
  right: 0px;
  left: 284px;
  background-color: var(--color-white);
  height: 100px;
  overflow: hidden;
  font-size: var(--font-size-9xl);
  color: var(--color-gray-300);
`;
const AddJobRoot = styled.div`
  position: relative;
  background-color: var(--color-whitesmoke-100);
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const MainRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1675px;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const AddJob = () => {
  // const [showCalendar, setShowCalendar] = useState(false);

  // const handleRadioClick = () => {
  //   setShowCalendar(true);
  // };

  // const handleCloseCalendar = () => {
  //   setShowCalendar(false);
  // };

  const navigate = useNavigate();

  const onDropDownclick = useCallback(() => {
    navigate("/uploadjd");
  }, [navigate]);

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "uploadJD") {
      navigate("/uploadjd");
    }
  };

  const onSaveAndContinueContainerClick = useCallback(() => {
    navigate("/afteruploadorfilljd");
  }, [navigate]);

  return (
    <DashboardRoot>
      <Main>
        <div
          style={{
            position: "relative",
            backgroundColor: "#fff",
            width: "100%",
            height: "1675px",
            textAlign: "left",
            fontSize: "24px",
            color: "#222327",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "193px",
              left: "calc(50% - 449px)",
              borderRadius: "15px",
              border: "1px solid silver",
              boxSizing: "border-box",
              width: "952px",
              height: "1429px",
              color: "#605e5c",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "570px",
                left: "122px",
                width: "718px",
                height: "108px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "-1px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid silver",
                  boxSizing: "border-box",
                  width: "720px",
                  height: "69px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 16px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    margin: "0",
                    top: "19px",
                    left: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Temporary
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  fontWeight: "500",
                  color: "#3f424b",
                }}
              >
                Employment type
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "438px",
                left: "122px",
                width: "718px",
                height: "108px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "-1px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid silver",
                  boxSizing: "border-box",
                  width: "720px",
                  height: "69px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 16px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    margin: "0",
                    top: "19px",
                    left: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Hyderabad
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  fontWeight: "500",
                  color: "#3f424b",
                }}
              >
                Job location
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "306px",
                left: "122px",
                width: "718px",
                height: "108px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "-1px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid silver",
                  boxSizing: "border-box",
                  width: "720px",
                  height: "69px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 16px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    margin: "0",
                    top: "19px",
                    left: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Hybrid
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  fontWeight: "500",
                  color: "#3f424b",
                }}
              >
                Workplace type
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "174px",
                left: "122px",
                width: "718px",
                height: "108px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "-1px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid silver",
                  boxSizing: "border-box",
                  width: "720px",
                  height: "69px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 16px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    margin: "0",
                    top: "19px",
                    left: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Project Manager
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  fontWeight: "500",
                  color: "#3f424b",
                }}
              >
                Job title
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "133.5px",
                left: "-0.5px",
                borderTop: "1px solid rgba(184, 184, 184, 0.57)",
                boxSizing: "border-box",
                width: "953px",
                height: "1px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: "108px",
                width: "461px",
                height: "29px",
                textAlign: "center",
                color: "#222327",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "24px",
                  height: "24px",
                  overflow: "hidden",
                }}
                alt=""
                src="/mdiarrowleft.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "41px",
                  fontWeight: "500",
                }}
              >{`Company role & environment`}</div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "1285px",
                left: "122px",
                width: "718px",
                height: "67px",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={onSaveAndContinueContainerClick}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  borderRadius: "4px",
                  backgroundColor: "#438ffe",
                  width: "718px",
                  height: "67px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 8px",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ position: "relative", fontWeight: "600" }}>
                  Save and continue
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "715px",
                left: "122px",
                width: "718px",
                height: "358px",
                color: "#3f424b",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "77px",
                  left: "-1px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid silver",
                  boxSizing: "border-box",
                  width: "720px",
                  height: "282px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  fontWeight: "500",
                }}
              >
                Job Description
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "41px",
                  left: "0px",
                  width: "184px",
                  height: "24px",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "24px",
                    height: "24px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/bold@2x.png"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "40px",
                    width: "24px",
                    height: "24px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/italic@2x.png"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "80px",
                    width: "24px",
                    height: "24px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/underline@2x.png"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "120px",
                    width: "24px",
                    height: "24px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/bulleted-list@2x.png"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "160px",
                    width: "24px",
                    height: "24px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/font-size@2x.png"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "39px",
                  left: "208px",
                  width: "75px",
                  height: "26px",
                  fontSize: "18px",
                  color: "#000",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0%",
                    right: "0%",
                    bottom: "0%",
                    left: "0%",
                    borderRadius: "12px",
                    backgroundColor: "#f5f7fa",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "7.69%",
                    left: "16%",
                    fontWeight: "500",
                  }}
                >
                  AI
                </div>
                <img
                  style={{
                    position: "absolute",
                    height: "76.92%",
                    width: "26.67%",
                    top: "11.54%",
                    right: "16%",
                    bottom: "11.54%",
                    left: "57.33%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    maxHeight: "100%",
                  }}
                  alt=""
                  src="/ionswitch.svg"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "1100px",
                left: "122px",
                width: "708px",
                height: "130px",
                fontSize: "18px",
                fontFamily: "Poppins",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "81px",
                  left: "-2px",
                  borderRadius: "15px",
                  border: "2px solid #3f424b",
                  boxSizing: "border-box",
                  width: "128px",
                  height: "51px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 8px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    margin: "0",
                    top: "10px",
                    left: "27px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Add skill
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "708px",
                  height: "59px",
                  fontFamily: "Inter",
                }}
              >
                <div style={{ position: "absolute", top: "37px", left: "0px" }}>
                  Add skill keywords to make your job visible to the right
                  candidates (Select up to 10)
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#3f424b",
                  }}
                >
                  Add Skills *
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "calc(50% - 272px)",
              fontWeight: "500",
            }}
          >
            Select one option from below to create job post
          </div>
          <div
            style={{
              position: "absolute",
              top: "104px",
              left: "calc(50% - 113px)",
              borderRadius: "15px",
              backgroundColor: "#fff",
              boxShadow:
                "0px -1px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25)",
              width: "280px",
              height: "64px",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "21px",
                left: "21px",
                fontWeight: "500",
              }}
            >
              <select
                className="dropdown-select"
                onChange={handleDropdownChange}
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  fontSize: "30px",
                  left: "32px",
                  top: "-5px",
                  border: "none",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                <option value="fillJD">Fill JD</option>
                <option value="uploadJD">Upload JD</option>
              </select>
            </div>
          </div>
        </div>
      </Main>
      <ProfileHeader clickedTab={"Create A Job Post"} />

      <SideBar1 clickedTab={"Add Job"} />
    </DashboardRoot>
  );
};

export default AddJob;

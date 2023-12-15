import styled from "styled-components";
import BasicDateRangeCalendar from "../../components/Calendar";
// import LeftSidebar from "./Sidebar";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";
// import { ProfileHeader1 } from "../ProfileHeader1";

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
  color: rgba(0, 0, 0, 0.6);
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
  color: rgba(0, 0, 0, 0.6);
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
  color: rgba(0, 0, 0, 0.6);
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
  color: rgba(0, 0, 0, 0.6);
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
  // border-radius: 12px;
  // box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.08);
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

const DashboardRoot = styled.div`
  position: fixed;
  background-color: #f5f7fa;
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: rgba(0, 0, 0, 0.6);
  font-family: var(--font-inter);
  zoom: 75%;
  overflow: hidden;
}
`;

const Dashboard = () => {
  // const [showCalendar, setShowCalendar] = useState(false);

  // const handleRadioClick = () => {
  //   setShowCalendar(true);
  // };

  // const handleCloseCalendar = () => {
  //   setShowCalendar(false);
  // };

  return (
    <DashboardRoot>
      <Main>
        <Ongoingjobs>
          <Ongoingjobscointainer>
            <Frontend>
              <DiagramIcon alt="" src="/diagram.svg" />
              <NewApplication>
                <NewApplicationIn>New application in 1 hour</NewApplicationIn>
                <Div>52</Div>
              </NewApplication>
              <Totalapplications>
                <Div1>134</Div1>
                <TotalApplications>Total applications</TotalApplications>
              </Totalapplications>
              <FrontendSoftwareDeveloper>
                <Subtitle>
                  <DeveloperOnSite>
                    Developer | On-site (Hyderabad)
                  </DeveloperOnSite>
                </Subtitle>
                <Title>
                  <BackendDeveloper>{`Frontend software developer `}</BackendDeveloper>
                  <TitleChild />
                </Title>
              </FrontendSoftwareDeveloper>
              <SvgSpinners3DotsMoveIcon
                alt=""
                src="/svgspinners3dotsmove.svg"
              />
            </Frontend>
            <Backend>
              <DiagramIcon1 alt="" src="/diagram.svg" />
              <Applied>
                <Applied1>Applied</Applied1>
                <Div2>52</Div2>
              </Applied>
              <Totalapplications>
                <Div1>134</Div1>
                <TotalApplications>Total applications</TotalApplications>
              </Totalapplications>
              <BackendSoftwareDeveloper>
                <UxuiDesigner>
                  <Subtitle1>
                    <DeveloperOnSite>{`Develop | `}</DeveloperOnSite>
                    <OnSiteHyderabad>On-site (Hyderabad)</OnSiteHyderabad>
                  </Subtitle1>
                  <Title1>
                    <BackendDeveloper>Backend developer</BackendDeveloper>
                    <TitleChild />
                  </Title1>
                </UxuiDesigner>
                <SvgSpinners3DotsMoveIcon1
                  alt=""
                  src="/svgspinners3dotsmove.svg"
                />
              </BackendSoftwareDeveloper>
            </Backend>
            <Frontend1>
              <DiagramIcon2 alt="" src="/diagram.svg" />
              <Newapplication>
                <NewApplicationIn>New application in 1 hour</NewApplicationIn>
                <Div>52</Div>
              </Newapplication>
              <Totalapplications>
                <Div1>134</Div1>
                <TotalApplications>Total applications</TotalApplications>
              </Totalapplications>
              <BackendSoftwareDeveloper>
                <Subtitle>
                  <DeveloperOnSite>
                    Developer | On-site (Hyderabad)
                  </DeveloperOnSite>
                </Subtitle>
                <Title>
                  <BackendDeveloper>{`Frontend software developer `}</BackendDeveloper>
                  <TitleChild />
                </Title>
                <SvgSpinners3DotsMoveIcon1
                  alt=""
                  src="/svgspinners3dotsmove.svg"
                />
              </BackendSoftwareDeveloper>
            </Frontend1>
            <Uxui>
              <DiagramIcon3 alt="" src="/diagram1.svg" />
              <Applied2>
                <Applied1>Applied</Applied1>
                <Div2>52</Div2>
              </Applied2>
              <Totalapplications>
                <Div1>134</Div1>
                <TotalApplications>Total applications</TotalApplications>
              </Totalapplications>
              <BackendSoftwareDeveloper>
                <UxuiDesigner>
                  <Subtitle1>
                    <DeveloperOnSite>{`Design | `}</DeveloperOnSite>
                    <OnSiteHyderabad1>On-site (Hyderabad)</OnSiteHyderabad1>
                  </Subtitle1>
                  <Title3>
                    <BackendDeveloper>UX/UI Designer</BackendDeveloper>
                    <TitleChild />
                  </Title3>
                </UxuiDesigner>
                <SvgSpinners3DotsMoveIcon3
                  alt=""
                  src="/svgspinners3dotsmove.svg"
                />
              </BackendSoftwareDeveloper>
            </Uxui>
          </Ongoingjobscointainer>
          <OngoingJobs>Ongoing jobs</OngoingJobs>
        </Ongoingjobs>
        <Container1>
          <Totalcandidates>
            <Profile>1414</Profile>
            <LineChartIcon alt="" src="/line-chart@2x.png" />
            <TotalCandidates>Total candidates</TotalCandidates>
          </Totalcandidates>
          <Candidateshired>
            <Profile>678</Profile>
            <LineChartIcon alt="" src="/line-chart@2x.png" />
            <CandidatesHired>Candidates hired</CandidatesHired>
          </Candidateshired>
          <Totalvacancies>
            <Div10>213</Div10>
            <LineChartIcon alt="" src="/line-chart@2x.png" />
            <CandidatesHired>Total vaccancies</CandidatesHired>
          </Totalvacancies>
          <Vacanciesclosed>
            <Div10>12</Div10>
            <LineChartIcon alt="" src="/line-chart@2x.png" />
            <CandidatesHired>Vaccancies closed</CandidatesHired>
          </Vacanciesclosed>
          <Timeperiod>
            <label class="Time-Selection">
              <input type="radio" name="radio" />
              Lifetime
            </label>
            <label class="Time-Selection">
              <input type="radio" name="radio" />
              30 Days
            </label>
            <label class="Time-Selection">
              <input
                type="radio"
                name="radio"
                // onClick={handleRadioClick}
              />
              Custom
            </label>

            {/* {showCalendar && (
        <div>
          <BasicDateRangeCalendar />
          <button onClick={handleCloseCalendar}>Close Calendar</button>
        </div>
          )} */}
          </Timeperiod>
        </Container1>
        <Greetings>
          <WelcomeRobert>Welcome, Robert</WelcomeRobert>
        </Greetings>
        {/* <Scrollbar /> */}
      </Main>
      <ProfileHeader clickedTab={"Dashboard"} />

      <SideBar1 clickedTab={"Dashboard"} />
    </DashboardRoot>
  );
};

export default Dashboard;

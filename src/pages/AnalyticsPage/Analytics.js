import styled from "styled-components";
// import BasicDateRangeCalendar from "../../components/Calendar";
// import LeftSidebar from "./Sidebar";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";
// import { ProfileHeader1 } from "../ProfileHeader1";

import "./AnalyticsCss.css";

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

const DashboardRoot = styled.div`
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
}
`;

const Analytics = () => {
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
        <div className="main1">
          <div className="graph-4">
            <div className="candidates-applied-for">
              Candidates applied for different position
            </div>
            <div className="graphdescription">
              <div className="description">
                <div className="ellipse-parent">
                  <div className="group-child" />
                  <div className="qa-tester">QA tester</div>
                </div>
                <div className="ellipse-group">
                  <div className="group-item" />
                  <div className="qa-tester">UI/UX Designer</div>
                </div>
                <div className="ellipse-container">
                  <div className="group-inner" />
                  <div className="qa-tester">Frontend developer</div>
                </div>
                <div className="group-div">
                  <div className="ellipse-div" />
                  <div className="qa-tester">Backend developer</div>
                </div>
                <div className="ellipse-parent1">
                  <div className="group-child1" />
                  <div className="qa-tester">Data scientist</div>
                </div>
                <div className="ellipse-parent2">
                  <div className="group-child2" />
                  <div className="qa-tester">Consultant</div>
                </div>
              </div>
              <div className="graph">
                <img className="cirlcles-icon" alt="" src="/cirlcles.svg" />
                <div className="div">40%</div>
                <div className="div1">25%</div>
                <div className="div2">15%</div>
                <div className="div3">10%</div>
                <div className="div4">5%</div>
                <div className="div5">5%</div>
              </div>
            </div>
          </div>
          <div className="graph-3">
            <div className="graph-3-child" />
            <div className="graph-3-item" />
            <div className="degrees">
              <div className="degrees-child" />
              <div className="degrees-item" />
              <div className="degrees-inner" />
              <div className="line-div" />
              <div className="degrees-child1" />
              <div className="degrees-child2" />
              <div className="degrees-child3" />
              <div className="div6">0</div>
              <div className="associate">Associate</div>
              <div className="bachelors">Bachelor’s</div>
              <div className="masters">Master’s</div>
              <div className="doctoral">Doctoral</div>
            </div>
            <div className="graph-3-inner" />
            <div className="graph-3-child1" />
            <div className="graph-3-child2" />
            <div className="graph-3-child3" />
            <div className="graph-3-child4" />
            <div className="graph-3-child5" />
            <div className="graph-3-child6" />
            <div className="graph-3-child7" />
            <div className="graph-3-child8" />
            <div className="graph-3-child9" />
            <div className="rectangle-div" />
            <div className="div7">200</div>
            <div className="div8">400</div>
            <div className="div9">600</div>
            <div className="div10">800</div>
            <div className="div11">1000</div>
            <div className="div12">1200</div>
            <div className="div13">1400</div>
            <div className="div14">1600</div>
            <div className="div15">1800</div>
            <div className="div16">2000</div>
            <div className="graph-3-child10" />
            <div className="graph-3-child11" />
            <div className="graph-3-child12" />
            <div className="div17">290</div>
            <div className="div18">1,100</div>
            <div className="div19">1,250</div>
            <div className="div20">600</div>
            <div className="candidates">Candidates</div>
            <div className="candidates-by-degree">Candidates by Degree</div>
            <div className="degrees1">Degrees</div>
          </div>
          <div className="graph-2">
            <div className="match">
              <div className="match-child" />
              <div className="match-item" />
              <div className="match-inner" />
              <div className="match-child1" />
              <div className="match-child2" />
              <div className="match-child3" />
              <div className="match-child4" />
              <div className="div21">0</div>
              <div className="div22">20%</div>
              <div className="div23">40%</div>
              <div className="div24">60%</div>
              <div className="div25">80%</div>
              <div className="div26">100%</div>
            </div>
            <div className="yoe">
              <div className="yoe-child" />
              <div className="yoe-item" />
              <div className="yoe-inner" />
              <div className="yoe-child1" />
              <div className="yoe-child2" />
              <div className="yoe-child3" />
              <div className="yoe-child4" />
              <div className="yoe-child5" />
              <div className="div27">0</div>
              <div className="div28">4</div>
              <div className="div29">6</div>
              <div className="div30">8</div>
              <div className="div31">10</div>
              <div className="div32">12</div>
              <div className="div33">2</div>
            </div>
            <div className="years-of-experience">Years of experience (YOE)</div>
            <div className="match1">Match %</div>
            <div className="bars">
              <div className="bars-child" />
              <div className="bars-item" />
              <div className="bars-inner" />
              <div className="bars-child1" />
              <div className="bars-child2" />
              <div className="bars-child3" />
              <div className="bars-child4" />
              <div className="bars-child5" />
              <div className="bars-child6" />
              <div className="bars-child7" />
              <div className="bars-child8" />
              <div className="bars-child9" />
              <div className="bars-child10" />
              <div className="bars-child11" />
              <div className="bars-child12" />
              <div className="bars-child13" />
            </div>
            <div className="sort">
              <div className="sort-by-yoe">Sort by YOE</div>
              <img className="sort-down-icon" alt="" src="/sort-down@2x.png" />
            </div>
          </div>
          <div className="graph-1">
            <img
              className="screenshot-2023-03-24-at-856"
              alt=""
              src="/screenshot-20230324-at-856-1@2x.png"
            />
            <div className="last7days">
              <div className="sort-by-yoe">Last 7 days</div>
              <img className="sort-down-icon1" alt="" src="/sort-down@2x.png" />
            </div>
            <div className="country">
              <div className="sort-by-yoe">Country</div>
              <img className="sort-down-icon2" alt="" src="/sort-down@2x.png" />
            </div>
            <div className="country2">COUNTRY</div>
            <div className="candidates1">CANDIDATES</div>
            <div className="candidates2">
              <div className="sort-by-yoe">Candidates</div>
              <img className="sort-down-icon1" alt="" src="/sort-down@2x.png" />
            </div>
            <div className="graph-1-child" />
            <div className="graph-1-item" />
            <div className="graph-1-inner" />
            <div className="united-states">
              <div className="united-states1">United States</div>
              <div className="div34">43</div>
            </div>
            <div className="india">
              <div className="united-states1">India</div>
              <div className="div35">413</div>
            </div>
            <div className="canada">
              <div className="united-states1">Canada</div>
              <div className="div35">143</div>
            </div>
            <div className="blue-indian-flag-hover" />
          </div>
        </div>
      </Main>
      <ProfileHeader clickedTab={"Analytics"} />

      <SideBar1 clickedTab={"Analytics"} />
    </DashboardRoot>
  );
};

export default Analytics;

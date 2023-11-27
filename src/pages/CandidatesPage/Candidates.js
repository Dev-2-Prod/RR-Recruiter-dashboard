import styled from "styled-components";
// import BasicDateRangeCalendar from "../../components/Calendar";
// import LeftSidebar from "./Sidebar";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";
// import { ProfileHeader1 } from "../ProfileHeader1";
import { useState, useCallback } from "react";
import FilterBy from "./CandComponent/FilterBy";
import PortalPopup from "./CandComponent/PortalPopup";
import "./Frame.css";



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
  overflow-x: scroll;
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

const MaterialSymbolspersonAddOuIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AddCandidate = styled.div`
  position: relative;
  font-weight: 500;
`;
const MaterialSymbolspersonAddOuParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 4px;
  background-color: #438ffe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  gap: 16px;
  color: #fff;
`;
const MaterialSymbolssimCardDownParent = styled.div`
  position: absolute;
  top: 0px;
  left: 386px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #605e5c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  gap: 16px;
`;
const MaterialSymbolsfilterAltOuParent = styled.div`
  position: absolute;
  top: 0px;
  left: 244px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #605e5c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  gap: 16px;
`;
const Rightmainheader = styled.div`
  position: absolute;
  top: 26px;
  left: 978px;
  width: 599px;
  height: 50px;
  font-size: 20px;
`;
const Showing17 = styled.span``;
const Of100 = styled.span`
  color: #9c9c9c;
`;
const Showing17OfContainer = styled.div`
  position: absolute;
  top: 848px;
  left: 61px;
  font-weight: 500;
  color: #3f424b;
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 130%;
  font-weight: 500;
`;
const AlbertFlores = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 124px;
`;
const ProductDesigner = styled.div`
  position: absolute;
  top: 0px;
  left: 303px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 78px;
`;
const UxResearchHci = styled.div`
  position: absolute;
  top: 0px;
  left: 464px;
  line-height: 130%;
  font-weight: 500;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 154px;
`;
const TeamworkEmpathyListening = styled.div`
  position: absolute;
  top: 0px;
  left: 662px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 100px;
`;
const IitBombay = styled.div`
  position: absolute;
  top: 0px;
  left: 1009px;
  line-height: 130%;
  font-weight: 500;
`;
const Btech = styled.div`
  position: absolute;
  top: 0px;
  left: 1177px;
  line-height: 130%;
  font-weight: 500;
`;
const Bangalore = styled.div`
  position: absolute;
  top: 0px;
  left: 1344px;
  line-height: 130%;
  font-weight: 500;
`;
const Karnatka = styled.div`
  position: absolute;
  top: 0px;
  left: 1557px;
  line-height: 130%;
  font-weight: 500;
`;
const TheAsianSchool = styled.div`
  position: absolute;
  top: 0px;
  left: 815px;
  line-height: 130%;
  font-weight: 500;
`;
const Div1 = styled.div`
  position: absolute;
  top: 0px;
  left: 1877px;
  line-height: 130%;
  font-weight: 500;
`;
const Project1 = styled.div`
  position: absolute;
  top: 0px;
  left: 2388px;
  line-height: 130%;
  font-weight: 500;
`;
const Yrs = styled.div`
  position: absolute;
  top: 0px;
  left: 2085px;
  line-height: 130%;
  font-weight: 500;
`;
const India = styled.div`
  position: absolute;
  top: 0px;
  left: 1741px;
  line-height: 130%;
  font-weight: 500;
`;
const LogoslinkedinIcon = styled.img`
  position: relative;
  width: 22px;
  height: 22px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LogoslinkedinIconParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5.510869979858398px 9.184782028198242px;
  gap: 33.07px;
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: -14px;
  left: 2142px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9.184782028198242px;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 82px;
  left: 59px;
  width: 2435px;
  height: 78px;
`;
const KathrynMurphy = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 142px;
`;
const StXaviers = styled.div`
  position: absolute;
  top: 0px;
  left: 838px;
  line-height: 130%;
  font-weight: 500;
`;
const Group = styled.div`
  position: absolute;
  top: 180px;
  left: 59px;
  width: 2435px;
  height: 78px;
`;
const HermanWalton = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 140px;
`;
const SoftwareDeveloper = styled.div`
  position: absolute;
  top: 0px;
  left: 303px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 95px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 278px;
  left: 59px;
  width: 2435px;
  height: 78px;
`;
const SrSoftwareDeveloper = styled.div`
  position: absolute;
  top: 0px;
  left: 303px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 111px;
`;
const Shree = styled.p`
  margin: 0;
`;
const Parent11 = styled.div`
  position: absolute;
  top: 376px;
  left: 59px;
  width: 2435px;
  height: 78px;
`;
const Parent2 = styled.div`
  position: absolute;
  top: 474px;
  left: 59px;
  width: 2435px;
  height: 78px;
`;
const DarrellSteward = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 135px;
`;
const Parent3 = styled.div`
  position: absolute;
  top: 572px;
  left: 59px;
  width: 2435px;
  height: 78px;
`;
const KristinWatson = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 127px;
`;
const Parent4 = styled.div`
  position: absolute;
  top: 670px;
  left: 59px;
  width: 2435px;
  height: 78px;
`;
const SNo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 130%;
  font-weight: 600;
`;
const Name1 = styled.div`
  position: absolute;
  top: 0px;
  left: 143px;
  line-height: 130%;
  font-weight: 600;
`;
const Designation = styled.div`
  position: absolute;
  top: 0px;
  left: 290px;
  line-height: 130%;
  font-weight: 600;
`;
const TechnicalSkills = styled.div`
  position: absolute;
  top: 0px;
  left: 454px;
  line-height: 130%;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  width: 158px;
`;
const InterpersonalSkills = styled.div`
  position: absolute;
  top: 0px;
  left: 631px;
  line-height: 130%;
  font-weight: 600;
`;
const SchoolName = styled.div`
  position: absolute;
  top: 0px;
  left: 832px;
  line-height: 130%;
  font-weight: 600;
`;
const CollegeUni = styled.div`
  position: absolute;
  top: 0px;
  left: 1003px;
  line-height: 130%;
  font-weight: 600;
`;
const Degree = styled.div`
  position: absolute;
  top: 0px;
  left: 1144px;
  line-height: 130%;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  width: 136px;
`;
const City = styled.div`
  position: absolute;
  top: 0px;
  left: 1365px;
  line-height: 130%;
  font-weight: 600;
`;
const State = styled.div`
  position: absolute;
  top: 0px;
  left: 1489px;
  line-height: 130%;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  width: 144px;
`;
const Country = styled.div`
  position: absolute;
  top: 0px;
  left: 1687px;
  line-height: 130%;
  font-weight: 600;
`;
const PhoneNumber = styled.div`
  position: absolute;
  top: 0px;
  left: 1839px;
  line-height: 130%;
  font-weight: 600;
`;
const SocialLinks = styled.div`
  position: absolute;
  top: 0px;
  left: 2175px;
  line-height: 130%;
  font-weight: 600;
`;
const YearsOfExperienceContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 2023px;
  line-height: 130%;
  font-weight: 600;
  text-align: center;
`;
const Headings = styled.div`
  position: absolute;
  top: 18px;
  left: 59px;
  width: 2435px;
  height: 46px;
  color: #888ea2;
`;
const Container = styled.div`
  position: absolute;
  top: 88px;
  left: 5px;
  width: 2546px;
  height: 721px;
  overflow: hidden;
  color: #182651;
`;
const ProjectLists = styled.div`
  position: absolute;
  top: 106px;
  left: 2396px;
  line-height: 130%;
  font-weight: 600;
  color: #888ea2;
`;
const Scrollbar = styled.div`
  position: absolute;
  top: 930px;
  left: 836px;
  border-radius: 49px;
  background-color: #438ffe;
  width: 5px;
  height: 523px;
  overflow: hidden;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;
const Next1 = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  font-weight: 500;
`;
const ArrowIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 38px;
  width: 24px;
  height: 24px;
`;
const Next = styled.div`
  position: absolute;
  top: 8px;
  left: 265px;
  width: 62px;
  height: 24px;
`;
const Previous1 = styled.div`
  position: absolute;
  top: 3px;
  left: 28px;
  font-weight: 500;
`;
const ArrowIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
`;
const Previous = styled.div`
  position: absolute;
  top: 8px;
  left: 0px;
  width: 90px;
  height: 24px;
`;
const Div14 = styled.div`
  position: absolute;
  top: 11px;
  left: 190px;
  font-weight: 500;
`;
const Div15 = styled.div`
  position: absolute;
  top: 11px;
  left: 227px;
  font-weight: 500;
`;
const PagesChild = styled.div`
  position: absolute;
  top: 0px;
  left: 102px;
  border-radius: 10px;
  background-color: #314ca3;
  width: 40px;
  height: 40px;
`;
const Div16 = styled.div`
  position: absolute;
  top: 11px;
  left: 118px;
  font-weight: 500;
  color: #fff;
`;
const Div17 = styled.div`
  position: absolute;
  top: 11px;
  left: 153px;
  font-weight: 500;
`;
const Pages = styled.div`
  position: absolute;
  right: 1020px;
  bottom: 50px;
  width: 327px;
  height: 40px;
  font-size: 15px;
  color: #314ca3;
`;
const RightmainheaderParentRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: #fff;
  width: 100%;
  height: 930px;
  text-align: left;
  font-size: 18px;
  color: #605e5c;
  font-family: Inter;
`;



const Candidates = () => {

    // const [showCalendar, setShowCalendar] = useState(false);
  
    // const handleRadioClick = () => {
    //   setShowCalendar(true);
    // };
  
    // const handleCloseCalendar = () => {
    //   setShowCalendar(false);
    // };


    const [isFilterByOpen, setFilterByOpen] = useState(false);

  const openFilterBy = useCallback(() => {
    setFilterByOpen(true);
  }, []);

  const closeFilterBy = useCallback(() => {
    setFilterByOpen(false);
  }, []);


  return (
    <DashboardRoot>
      <Main>
      <RightmainheaderParentRoot>
      <Rightmainheader>
        <MaterialSymbolspersonAddOuParent>
          <MaterialSymbolspersonAddOuIcon
            alt=""
            src="/materialsymbolspersonaddoutlinerounded.svg"
          />
          <AddCandidate>Add candidate</AddCandidate>
        </MaterialSymbolspersonAddOuParent>
        <MaterialSymbolssimCardDownParent>
          <MaterialSymbolspersonAddOuIcon
            alt=""
            src="/materialsymbolssimcarddownloadoutlinesharp.svg"
          />
          <AddCandidate>Download CSV</AddCandidate>
        </MaterialSymbolssimCardDownParent>
        <MaterialSymbolsfilterAltOuParent onClick={openFilterBy} style={{cursor: "pointer"}}>
          <MaterialSymbolspersonAddOuIcon
            alt=""
            src="/materialsymbolsfilteraltoutline.svg"
          />
          <AddCandidate>Filter</AddCandidate>
        </MaterialSymbolsfilterAltOuParent>
      </Rightmainheader>
      <Showing17OfContainer>
        <Showing17>{`Showing 1-7 `}</Showing17>
        <Of100>of 100</Of100>
      </Showing17OfContainer>
      <Container>
        <Parent1>
          <Div>1.</Div>
          <AlbertFlores>Albert Flores</AlbertFlores>
          <ProductDesigner>Product designer</ProductDesigner>
          <UxResearchHci>UX research, HCI, Story.. etc</UxResearchHci>
          <TeamworkEmpathyListening>
            Teamwork, empathy, listening
          </TeamworkEmpathyListening>
          <IitBombay>IIT-Bombay</IitBombay>
          <Btech>B.Tech</Btech>
          <Bangalore>{`Bangalore `}</Bangalore>
          <Karnatka>Karnatka</Karnatka>
          <TheAsianSchool>The Asian School</TheAsianSchool>
          <Div1>9808765435</Div1>
          <Project1>Project 1</Project1>
          <Yrs>5yrs +</Yrs>
          <India>India</India>
          <FrameWrapper>
            <LogoslinkedinIconParent>
              <LogoslinkedinIcon alt="" src="/logoslinkedinicon.svg" />
              <LogoslinkedinIcon alt="" src="/antdesigngithubfilled.svg" />
              <LogoslinkedinIcon alt="" src="/icoutlineemail.svg" />
            </LogoslinkedinIconParent>
          </FrameWrapper>
        </Parent1>
        <Group>
          <Div>2.</Div>
          <KathrynMurphy>Kathryn Murphy</KathrynMurphy>
          <ProductDesigner>Product designer</ProductDesigner>
          <UxResearchHci>Product research, agile</UxResearchHci>
          <TeamworkEmpathyListening>
            Teamwork, leadership
          </TeamworkEmpathyListening>
          <IitBombay>IIT-Bombay</IitBombay>
          <Btech>B.Tech</Btech>
          <Bangalore>{`Kottayam `}</Bangalore>
          <Karnatka>Kerala</Karnatka>
          <StXaviers>St. Xavier's</StXaviers>
          <Div1>9808765435</Div1>
          <Project1>Project 2</Project1>
          <Yrs>4yrs+</Yrs>
          <India>India</India>
          <FrameWrapper>
            <LogoslinkedinIconParent>
              <LogoslinkedinIcon alt="" src="/logoslinkedinicon.svg" />
              <LogoslinkedinIcon alt="" src="/antdesigngithubfilled.svg" />
              <LogoslinkedinIcon alt="" src="/icoutlineemail.svg" />
            </LogoslinkedinIconParent>
          </FrameWrapper>
        </Group>
        <LineDiv>
          <Div>3.</Div>
          <HermanWalton>Herman Walton</HermanWalton>
          <SoftwareDeveloper>Software developer</SoftwareDeveloper>
          <UxResearchHci>Data structure, database</UxResearchHci>
          <TeamworkEmpathyListening>
            Teamwork, empathy, listening
          </TeamworkEmpathyListening>
          <IitBombay>Amity University</IitBombay>
          <Btech>B.Tech</Btech>
          <Bangalore>{`Rupnagar `}</Bangalore>
          <Karnatka>Karnatka</Karnatka>
          <TheAsianSchool>Delhi Public School</TheAsianSchool>
          <Div1>9808765435</Div1>
          <Project1>Project 3</Project1>
          <Yrs>2yrs +</Yrs>
          <India>India</India>
          <FrameWrapper>
            <LogoslinkedinIconParent>
              <LogoslinkedinIcon alt="" src="/logoslinkedinicon.svg" />
              <LogoslinkedinIcon alt="" src="/antdesigngithubfilled.svg" />
              <LogoslinkedinIcon alt="" src="/icoutlineemail.svg" />
            </LogoslinkedinIconParent>
          </FrameWrapper>
        </LineDiv>
        <Parent11>
          <Div>4.</Div>
          <AlbertFlores>Cody Fisher</AlbertFlores>
          <SrSoftwareDeveloper>Sr. Software developer</SrSoftwareDeveloper>
          <UxResearchHci>AWS, GPC or Azure, Go</UxResearchHci>
          <TeamworkEmpathyListening>
            Teamwork, empathy, listening
          </TeamworkEmpathyListening>
          <IitBombay>IIT-Bombay</IitBombay>
          <Btech>B.Tech</Btech>
          <Bangalore>Hyderabad</Bangalore>
          <Karnatka>Karnatka</Karnatka>
          <TheAsianSchool>
            <Shree>{`Shree `}</Shree>
            <Shree>Swaminarayan..</Shree>
          </TheAsianSchool>
          <Div1>9808765435</Div1>
          <Project1>Project 4</Project1>
          <Yrs>6yrs +</Yrs>
          <India>India</India>
          <FrameWrapper>
            <LogoslinkedinIconParent>
              <LogoslinkedinIcon alt="" src="/logoslinkedinicon.svg" />
              <LogoslinkedinIcon alt="" src="/antdesigngithubfilled.svg" />
              <LogoslinkedinIcon alt="" src="/icoutlineemail.svg" />
            </LogoslinkedinIconParent>
          </FrameWrapper>
        </Parent11>
        <Parent2>
          <Div>5.</Div>
          <AlbertFlores>Jenny Wilson</AlbertFlores>
          <ProductDesigner>Frontend engineer</ProductDesigner>
          <UxResearchHci>Bootstrap, Backbone...</UxResearchHci>
          <TeamworkEmpathyListening>
            Teamwork, empathy, listening
          </TeamworkEmpathyListening>
          <IitBombay>
            <Shree>{`University of `}</Shree>
            <Shree>Hyderabad</Shree>
          </IitBombay>
          <Btech>B.Tech</Btech>
          <Bangalore>Jamia Nagar</Bangalore>
          <Karnatka>Delhi</Karnatka>
          <TheAsianSchool>
            <Shree>{`Bombay Scottish `}</Shree>
            <Shree>School</Shree>
          </TheAsianSchool>
          <Div1>9808765435</Div1>
          <Project1>Project 5</Project1>
          <Yrs>3yrs +</Yrs>
          <India>India</India>
          <FrameWrapper>
            <LogoslinkedinIconParent>
              <LogoslinkedinIcon alt="" src="/logoslinkedinicon.svg" />
              <LogoslinkedinIcon alt="" src="/antdesigngithubfilled.svg" />
              <LogoslinkedinIcon alt="" src="/icoutlineemail.svg" />
            </LogoslinkedinIconParent>
          </FrameWrapper>
        </Parent2>
        <Parent3>
          <Div>6.</Div>
          <DarrellSteward>Darrell Steward</DarrellSteward>
          <ProductDesigner>Backend engineer</ProductDesigner>
          <UxResearchHci>PHP, Java, Python...</UxResearchHci>
          <TeamworkEmpathyListening>
            Teamwork, empathy, listening
          </TeamworkEmpathyListening>
          <IitBombay>
            <Shree>Indian Institute</Shree>
            <Shree>of Science</Shree>
          </IitBombay>
          <Btech>B.Tech</Btech>
          <Bangalore>Varanasi</Bangalore>
          <Karnatka>UP</Karnatka>
          <TheAsianSchool>Sainik School</TheAsianSchool>
          <Div1>9808765435</Div1>
          <Project1>Project 6</Project1>
          <Yrs>5.5yrs +</Yrs>
          <India>India</India>
          <FrameWrapper>
            <LogoslinkedinIconParent>
              <LogoslinkedinIcon alt="" src="/logoslinkedinicon.svg" />
              <LogoslinkedinIcon alt="" src="/antdesigngithubfilled.svg" />
              <LogoslinkedinIcon alt="" src="/icoutlineemail.svg" />
            </LogoslinkedinIconParent>
          </FrameWrapper>
        </Parent3>
        <Parent4>
          <Div>7.</Div>
          <KristinWatson>Kristin Watson</KristinWatson>
          <ProductDesigner>UI/UX designer</ProductDesigner>
          <UxResearchHci>UI design, UX research, HCI</UxResearchHci>
          <TeamworkEmpathyListening>
            Teamwork, empathy, listening
          </TeamworkEmpathyListening>
          <IitBombay>
            <Shree>{`Algappa `}</Shree>
            <Shree>University</Shree>
          </IitBombay>
          <Btech>B.Tech</Btech>
          <Bangalore>{`Aligarh `}</Bangalore>
          <Karnatka>UP</Karnatka>
          <TheAsianSchool>
            <Shree>{`Greenwood `}</Shree>
            <Shree>International...</Shree>
          </TheAsianSchool>
          <Div1>9808765435</Div1>
          <Project1>Project 7</Project1>
          <Yrs>5yrs +</Yrs>
          <India>India</India>
          <FrameWrapper>
            <LogoslinkedinIconParent>
              <LogoslinkedinIcon alt="" src="/logoslinkedinicon.svg" />
              <LogoslinkedinIcon alt="" src="/antdesigngithubfilled.svg" />
              <LogoslinkedinIcon alt="" src="/icoutlineemail.svg" />
            </LogoslinkedinIconParent>
          </FrameWrapper>
        </Parent4>
        <Headings>
          <SNo>S. No</SNo>
          <Name1>Name</Name1>
          <Designation>Designation</Designation>
          <TechnicalSkills>Technical Skills</TechnicalSkills>
          <InterpersonalSkills>Interpersonal Skills</InterpersonalSkills>
          <SchoolName>School Name</SchoolName>
          <CollegeUni>College/ Uni</CollegeUni>
          <Degree>Degree</Degree>
          <City>City</City>
          <State>State</State>
          <Country>Country</Country>
          <PhoneNumber>Phone Number</PhoneNumber>
          <SocialLinks>Social Links</SocialLinks>
          <YearsOfExperienceContainer>
            <Shree>Years of</Shree>
            <Shree>Experience</Shree>
          </YearsOfExperienceContainer>
        </Headings>
      </Container>
      <ProjectLists>Project lists</ProjectLists>
      <Scrollbar />
      <Pages>
        <Next>
          <Next1>Next</Next1>
          <ArrowIcon alt="" src="/arrow.svg" />
        </Next>
        <Previous>
          <Previous1>Previous</Previous1>
          <ArrowIcon1 alt="" src="/arrow1.svg" />
        </Previous>
        <Div14>3</Div14>
        <Div15>4</Div15>
        <PagesChild />
        <Div16>1</Div16>
        <Div17>2</Div17>
      </Pages>
    </RightmainheaderParentRoot>
    {isFilterByOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterBy}
        >
          <FilterBy onClose={closeFilterBy} />
        </PortalPopup>
      )}
      </Main>
      <ProfileHeader clickedTab={"Candidates"}/>
      
      <SideBar1 clickedTab={"Candidates"}/>
      
    </DashboardRoot>
    
  );
};

export default Candidates;

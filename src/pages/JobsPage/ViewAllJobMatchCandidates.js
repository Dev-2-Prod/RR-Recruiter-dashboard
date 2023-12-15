import { useState, useCallback } from "react";
import Feedback from "./JobsComponent/Feedback";
import PortalPopup from "./JobsComponent/PortalPopup";
import BackgroundCheck from "./JobsComponent/BackgroundCheck";
import styled from "styled-components";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";

const Div1 = styled.div`
  position: absolute;
  top: 7px;
  left: 0px;
  line-height: 130%;
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-darkslateblue-200);
`;
const AlbertFlores = styled.div`
  position: absolute;
  top: 7px;
  left: 93px;
  font-weight: 500;
  font-family: var(--font-inter);
`;
const Albertfabccom = styled.div`
  position: absolute;
  top: 7px;
  left: 252px;
  font-weight: 500;
  font-family: var(--font-inter);
`;
const Div2 = styled.div`
  position: absolute;
  top: 7px;
  left: 459px;
  font-weight: 500;
  font-family: var(--font-inter);
`;
const PercentageChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: #53c22b;
  width: 36px;
  height: 36px;
`;
const PercentageItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-limegreen-100);
  width: 36px;
  height: 36px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 9px;
  left: 5px;
  font-weight: 500;
`;
const Percentage = styled.div`
  position: absolute;
  top: 0px;
  left: 691px;
  width: 36px;
  height: 36px;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray);
`;
const Applied = styled.div`
  position: absolute;
  top: 5px;
  left: 848px;
  font-weight: 500;
  color: var(--color-orange);
`;
const Interview = styled.div`
  position: absolute;
  top: 5px;
  left: 985px;
  font-weight: 500;
  color: var(--color-black);
`;
const Div4 = styled.div`
  position: absolute;
  top: 5px;
  left: 1178px;
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const Initiate = styled.div`
  position: absolute;
  top: 5px;
  left: 1332px;
  font-weight: 500;
  color: var(--color-mediumslateblue-100);
`;
const Parent1 = styled.div`
  position: absolute;
  top: 624px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Group = styled.div`
  position: absolute;
  top: 685px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Container = styled.div`
  position: absolute;
  top: 746px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 807px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Parent11 = styled.div`
  position: absolute;
  top: 563px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Parent2 = styled.div`
  position: absolute;
  top: 502px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Hired = styled.div`
  position: absolute;
  top: 5px;
  left: 848px;
  font-weight: 500;
  color: var(--color-seagreen-100);
`;
const Feedback1 = styled.div`
  position: absolute;
  top: 5px;
  left: 985px;
  font-weight: 500;
  color: var(--color-black);
  cursor: pointer;
`;
const Done = styled.span``;
const View = styled.span`
  text-decoration: underline;
  color: var(--color-dodgerblue-200);
`;
const DoneView = styled.div`
  position: absolute;
  top: 5px;
  left: 1332px;
  font-weight: 500;
  color: var(--color-seagreen-100);
`;
const Parent3 = styled.div`
  position: absolute;
  top: 441px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Offered = styled.div`
  position: absolute;
  top: 5px;
  left: 848px;
  font-weight: 500;
  color: #da53d1;
`;
const Parent4 = styled.div`
  position: absolute;
  top: 380px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Interviewed = styled.div`
  position: absolute;
  top: 5px;
  left: 848px;
  font-weight: 500;
  color: var(--color-firebrick);
`;
const Parent5 = styled.div`
  position: absolute;
  top: 319px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Screened = styled.div`
  position: absolute;
  top: 5px;
  left: 848px;
  font-weight: 500;
  color: #9a6aff;
`;
const DoneView3 = styled.div`
  position: absolute;
  top: 5px;
  left: 1332px;
  font-weight: 500;
  cursor: pointer;
  color: var(--color-seagreen-100);
`;
const Parent6 = styled.div`
  position: absolute;
  top: 258px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const SNo = styled.div`
  position: relative;
  line-height: 130%;
  font-weight: 600;
  color: #111;
`;
const Match1 = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  font-weight: 600;
`;
const UpDownArrow = styled.img`
  position: absolute;
  top: 0px;
  left: 79px;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const Match = styled.div`
  position: relative;
  width: 103px;
  height: 24px;
`;
const SNoParent = styled.div`
  position: absolute;
  top: 135px;
  left: calc(50% - 741px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 95px;
  font-family: var(--font-inter);
`;
const MaterialSymbolsarrowBackRoIcon = styled.img`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const ProjectManager = styled.div`
  position: absolute;
  top: 0px;
  left: 56px;
  font-weight: 600;
`;
const Projectmanager1 = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 258px;
  height: 36px;
`;
const Published = styled.div`
  position: relative;
  font-weight: 500;
`;
const PublishedWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 282px;
  border-radius: var(--br-23xl);
  background-color: rgba(83, 194, 43, 0.31);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-limegreen-100);
`;
const Heading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 387px;
  height: 39px;
`;
const May2022To = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
`;
const FullTime = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Subheading = styled.div`
  position: absolute;
  top: 40px;
  left: 56px;
  width: 289px;
  height: 60px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkgray);
`;
const Projectmanager = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 387px;
  height: 100px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray);
`;
const Of35 = styled.span`
  color: var(--color-darkgray);
`;
const Showing18OfContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const Resultsshowing = styled.div`
  position: absolute;
  top: 888px;
  left: 66px;
  width: 160px;
  height: 27px;
  color: var(--color-darkslateblue-200);
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
const Div41 = styled.div`
  position: absolute;
  top: 11px;
  left: 190px;
  font-weight: 500;
`;
const Div42 = styled.div`
  position: absolute;
  top: 11px;
  left: 227px;
  font-weight: 500;
`;
const PagesChild = styled.div`
  position: absolute;
  top: 0px;
  left: 102px;
  border-radius: var(--br-3xs);
  background-color: var(--color-darkslateblue-100);
  width: 40px;
  height: 40px;
`;
const Div43 = styled.div`
  position: absolute;
  top: 11px;
  left: 118px;
  font-weight: 500;
  color: var(--color-white);
`;
const Div44 = styled.div`
  position: absolute;
  top: 11px;
  left: 153px;
  font-weight: 500;
`;
const Pages = styled.div`
  position: absolute;
  right: 43px;
  bottom: 43px;
  width: 327px;
  height: 40px;
  font-size: var(--font-size-mini);
  color: var(--color-darkslateblue-100);
  font-family: var(--font-inter);
`;
const Parent7 = styled.div`
  position: absolute;
  top: 197px;
  // left: calc(50% - 741px);
  width: 1429px;
  height: 36px;
  overflow: hidden;
`;
const Profile = styled.div`
  position: relative;
  font-weight: 600;
`;
const Main = styled.div`
  position: absolute;
  width: calc(100% - 378px);
  top: 116px;
  right: 50px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 964px;
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
  overflow-y: scroll;
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
`;
const ViewAllJobMatchCandidatesRoot = styled.div`
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
`;
const Mainscrolldiv = styled.div`
position: relative;
  // width: calc(100% - 378px);
  // top: 116px;
  // right: 50px;
  left: 98px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 964px;
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
  overflow-y: scroll;
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
`;

const ViewAllJobMatchCandidates = () => {
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const [isBackgroundCheckOpen, setBackgroundCheckOpen] = useState(false);

  const openFeedback = useCallback(() => {
    setFeedbackOpen(true);
  }, []);

  const closeFeedback = useCallback(() => {
    setFeedbackOpen(false);
  }, []);

  const openBackgroundCheck = useCallback(() => {
    setBackgroundCheckOpen(true);
  }, []);

  const closeBackgroundCheck = useCallback(() => {
    setBackgroundCheckOpen(false);
  }, []);

  return (
    <>
      <ViewAllJobMatchCandidatesRoot>
        <ProfileHeader clickedTab={"Jobs"} />

        <SideBar1 clickedTab={"Jobs"} />
        <Main>
          <Mainscrolldiv>
            <Parent7>
              <Div1>1.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Applied>Applied</Applied>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <Initiate>Initiate</Initiate>
            </Parent7>
            <Parent6>
              <Div1>2.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Screened>Screened</Screened>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <DoneView3 onClick={openBackgroundCheck}>
                <Done>{`Done, `}</Done>
                <View>view</View>
              </DoneView3>
            </Parent6>
            <Parent5>
              <Div1>3.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Interviewed>Interviewed</Interviewed>
              <Interview>Rejected</Interview>
              <Div4>80</Div4>
              <DoneView>
                <Done>{`Done, `}</Done>
                <View>view</View>
              </DoneView>
            </Parent5>
            <Parent4>
              <Div1>4.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Offered>Offered</Offered>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <DoneView>
                <Done>{`Done, `}</Done>
                <View>view</View>
              </DoneView>
            </Parent4>
            <Parent3>
              <Div1>5.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Hired>Hired</Hired>
              <Feedback1 onClick={openFeedback}>Feedback</Feedback1>
              <Div4>80</Div4>
              <DoneView>
                <Done>{`Done, `}</Done>
                <View>view</View>
              </DoneView>
            </Parent3>
            <Parent2>
              <Div1>6.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Applied>Applied</Applied>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <Initiate>Initiate</Initiate>
            </Parent2>
            <Parent11>
              <Div1>7.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Applied>Applied</Applied>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <Initiate>Initiate</Initiate>
            </Parent11>
            <Parent1>
              <Div1>8.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Applied>Applied</Applied>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <Initiate>Initiate</Initiate>
            </Parent1>
            <Group>
              <Div1>9.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Applied>Applied</Applied>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <Initiate>Initiate</Initiate>
            </Group>
            <Container>
              <Div1>10.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Applied>Applied</Applied>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <Initiate>Initiate</Initiate>
            </Container>
            <FrameDiv>
              <Div1>11.</Div1>
              <AlbertFlores>Albert Flores</AlbertFlores>
              <Albertfabccom>albert.f@abc.com</Albertfabccom>
              <Div2>9783647292</Div2>
              <Percentage>
                <PercentageChild />
                <PercentageItem />
                <Div3>80%</Div3>
              </Percentage>
              <Applied>Applied</Applied>
              <Interview>Interview</Interview>
              <Div4>80</Div4>
              <Initiate>Initiate</Initiate>
            </FrameDiv>
          </Mainscrolldiv>
          <SNoParent>
            <SNo>S. No</SNo>
            <Profile>Name</Profile>
            <Profile>Email address</Profile>
            <Profile>Phone number</Profile>
            <Match>
              <Match1>Match %</Match1>
              <UpDownArrow alt="" src="/up-down-arrow@2x.png" />
            </Match>
            <Profile>Status</Profile>
            <Profile>Action</Profile>
            <Profile>Overall score</Profile>
            <Profile>Background check</Profile>
          </SNoParent>
          <Projectmanager>
            <Heading>
              <Projectmanager1>
                <MaterialSymbolsarrowBackRoIcon
                  alt=""
                  src="/materialsymbolsarrowbackrounded.svg"
                />
                <ProjectManager>Project Manager</ProjectManager>
              </Projectmanager1>
              <PublishedWrapper>
                <Published>Published</Published>
              </PublishedWrapper>
            </Heading>
            <Subheading>
              <May2022To>30 May, 2022 to 10 June, 2022</May2022To>
              <FullTime>Full-time</FullTime>
            </Subheading>
          </Projectmanager>
          <Resultsshowing>
            <Showing18OfContainer>
              <Done>{`Showing 1-8 `}</Done>
              <Of35>of 35</Of35>
            </Showing18OfContainer>
          </Resultsshowing>
          <Pages>
            <Next>
              <Next1>Next</Next1>
              <ArrowIcon alt="" src="/arrow.svg" />
            </Next>
            <Previous>
              <Previous1>Previous</Previous1>
              <ArrowIcon1 alt="" src="/arrow1.svg" />
            </Previous>
            <Div41>3</Div41>
            <Div42>4</Div42>
            <PagesChild />
            <Div43>1</Div43>
            <Div44>2</Div44>
          </Pages>
        </Main>
      </ViewAllJobMatchCandidatesRoot>
      {isFeedbackOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFeedback}
        >
          <Feedback onClose={closeFeedback} />
        </PortalPopup>
      )}
      {isBackgroundCheckOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBackgroundCheck}
        >
          <BackgroundCheck onClose={closeBackgroundCheck} />
        </PortalPopup>
      )}
    </>
  );
};

export default ViewAllJobMatchCandidates;

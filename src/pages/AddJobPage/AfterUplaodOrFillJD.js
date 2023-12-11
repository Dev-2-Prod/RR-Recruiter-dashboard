import { useState, useCallback } from "react";
import JobDescriptionPreview from "./Component/JobDescriptionPreview";
import PortalPopup from "./Component/PortalPopup";
import JobSubmitted from "./Component/JobSubmitted";
import styled from "styled-components";
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
  color: var(--color-gray-200);
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
  background-color: var(--color-darkslateblue);
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
  color: var(--color-darkslateblue);
  text-align: left;
  display: inline-block;
  width: 165px;
  height: 22px;
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
const Settings1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
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
  left: calc(50% - 761px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Rightheader = styled.div`
  position: absolute;
  top: 13px;
  right: 33px;
  width: 174px;
  height: 74px;
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
  top: 25px;
  left: 1429px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ProfileIcon = styled.img`
  position: absolute;
  top: 13px;
  left: 1529px;
  width: 74px;
  height: 74px;
`;
const AfteruplaodOrFilljd1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 676px);
  background-color: var(--color-white);
  width: 1636px;
  height: 100px;
  overflow: hidden;
  font-size: var(--font-size-9xl);
  color: var(--color-gray-300);
`;
const JobDetails = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-darkslategray);
  text-align: center;
`;
const ProjectManager = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 13px;
  left: 24px;
  font-weight: 500;
  z-index: 0;
`;
const ProjectManagerWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: -1px;
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-dimgray);
  box-sizing: border-box;
  width: 502px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
`;
const JobTitle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const Jobtitle = styled.div`
  position: absolute;
  top: 52px;
  left: 0px;
  width: 500px;
  height: 75px;
`;
const Workplacetype = styled.div`
  position: absolute;
  top: 151px;
  left: 0px;
  width: 500px;
  height: 75px;
`;
const Joblocation = styled.div`
  position: absolute;
  top: 250px;
  left: 0px;
  width: 500px;
  height: 75px;
`;
const Employmenttype = styled.div`
  position: absolute;
  top: 349px;
  left: 0px;
  width: 500px;
  height: 75px;
`;
const SkillsRequired = styled.span``;
const Span = styled.span`
  color: #f24e1e;
`;
const Skillsrequired = styled.div`
  position: absolute;
  top: 448px;
  left: 0px;
  width: 500px;
  height: 75px;
`;
const Setthreshold = styled.div`
  position: absolute;
  top: 547px;
  left: 0px;
  width: 500px;
  height: 75px;
`;
const Recruitment = styled.div`
  position: absolute;
  top: 646px;
  left: 0px;
  width: 500px;
  height: 75px;
`;
const Jobdetails = styled.div`
  position: absolute;
  top: 114px;
  left: 70px;
  width: 500px;
  height: 721px;
`;
const JobDescription = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const Container = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  width: 824px;
  height: 771px;
`;
const PositionOverview = styled.p`
  margin: 0;
  font-weight: 600;
  color: var(--color-darkslategray);
`;
const BlankLine = styled.p`
  margin: 0;
  font-weight: 500;
`;
const ProvideInputsAnd = styled.span`
  font-weight: 500;
`;
const DesignTrainingToEnableEffe = styled.li`
  margin-bottom: 0px;
`;
const ProvideInputsAndSupportTo = styled.ul`
  margin: 0;
  padding-left: var(--padding-2xl);
`;
const SoundUnderstandingAndHands = styled.li``;
const PositionOverviewTheContainer = styled.div`
  position: absolute;
  top: 23.6px;
  left: 24px;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 35;
  -webkit-box-orient: vertical;
  width: 773px;
`;
const Description = styled.div`
  position: absolute;
  top: 31px;
  left: 0px;
  width: 822px;
  height: 761px;
  font-size: inherit;
  color: var(--color-dimgray);
`;
const Jobdescription = styled.div`
  position: absolute;
  top: 114px;
  left: 680px;
  width: 822px;
  height: 792px;
  color: var(--color-darkslategray);
`;
const JobDescription1 = styled.div`
  position: absolute;
  top: 19px;
  left: 0px;
  font-weight: 600;
`;
const PostAJob = styled.div`
  position: absolute;
  top: 0px;
  left: 1248px;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-dimgray);
  box-sizing: border-box;
  width: 200px;
  height: 67px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-5xs);
  cursor: pointer;
  color: var(--color-dimgray);
`;
const Preview = styled.div`
  position: absolute;
  top: 0px;
  left: 1021px;
  border-radius: var(--br-mini);
  background-color: var(--color-dodgerblue);
  width: 200px;
  height: 67px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-5xs);
  box-sizing: border-box;
  cursor: pointer;
  color: var(--color-white);
`;
const Mainheader = styled.div`
  position: absolute;
  top: 27px;
  left: 70px;
  width: 1448px;
  height: 67px;
  font-size: var(--font-size-5xl);
  color: var(--color-dodgerblue);
`;
const Main1 = styled.div`
  position: absolute;
  width: calc(100% - 378px);
  // height: 1080px;
  top: 116px;
  right: 50px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 800px;
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
  overflow-y: scroll;
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
`;
const AfteruplaodOrFilljdRoot = styled.div`
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

const AfterUplaodOrFillJD = () => {
  const [isJobSubmittedOpen, setJobSubmittedOpen] = useState(false);
  const [isJobDescriptionPreviewOpen, setJobDescriptionPreviewOpen] =
    useState(false);

  const openJobSubmitted = useCallback(() => {
    setJobSubmittedOpen(true);
  }, []);

  const closeJobSubmitted = useCallback(() => {
    setJobSubmittedOpen(false);
  }, []);

  const openJobDescriptionPreview = useCallback(() => {
    setJobDescriptionPreviewOpen(true);
  }, []);

  const closeJobDescriptionPreview = useCallback(() => {
    setJobDescriptionPreviewOpen(false);
  }, []);

  return (
    <>
      <AfteruplaodOrFilljdRoot>
        <SideBar1 clickedTab={"Add Job"}/>
        <ProfileHeader clickedTab={"Create A Job Post"}/>
        <Main1>
          <Jobdetails>
            <JobDetails>Job Details</JobDetails>
            <Jobtitle>
              <ProjectManagerWrapper>
                <ProjectManager>Project Manager</ProjectManager>
              </ProjectManagerWrapper>
              <JobTitle>Job title</JobTitle>
            </Jobtitle>
            <Workplacetype>
              <ProjectManagerWrapper>
                <ProjectManager>Hybrid</ProjectManager>
              </ProjectManagerWrapper>
              <JobTitle>Workplace type</JobTitle>
            </Workplacetype>
            <Joblocation>
              <ProjectManagerWrapper>
                <ProjectManager>Hyderabad</ProjectManager>
              </ProjectManagerWrapper>
              <JobTitle>Job Location</JobTitle>
            </Joblocation>
            <Employmenttype>
              <ProjectManagerWrapper>
                <ProjectManager>Full-time</ProjectManager>
              </ProjectManagerWrapper>
              <JobTitle>Employment type</JobTitle>
            </Employmenttype>
            <Skillsrequired>
              <ProjectManagerWrapper>
                <ProjectManager>
                  Time management, Leadership, Critical thinking ...
                </ProjectManager>
              </ProjectManagerWrapper>
              <JobTitle>
                <SkillsRequired>{`Skills required `}</SkillsRequired>
                <Span>*</Span>
              </JobTitle>
            </Skillsrequired>
            <Setthreshold>
              <ProjectManagerWrapper>
                <ProjectManager>80%</ProjectManager>
              </ProjectManagerWrapper>
              <JobTitle>Set Threshold %</JobTitle>
            </Setthreshold>
            <Recruitment>
              <ProjectManagerWrapper>
                <ProjectManager>10 June, 2022</ProjectManager>
              </ProjectManagerWrapper>
              <JobTitle>Recruitment valid till:</JobTitle>
            </Recruitment>
          </Jobdetails>
          <Jobdescription>
            <JobDescription>Job description</JobDescription>
            <Description>
              <Container />
              <PositionOverviewTheContainer>
                <PositionOverview>Position Overview</PositionOverview>
                <BlankLine>&nbsp;</BlankLine>
                <BlankLine>
                  The Project Manager plans and oversees one or multiple
                  inter-dependent project spanning multiple years that impact
                  one or more business units or one larger project. He/She will
                  oversee all aspects of assigned project throughout project
                  lifecycles to ensure completion within the defined scope,
                  quality, time and cost constraints. Also, to ensure accurate
                  allocations of resources throughout the project. He/She will
                  lead multi-disciplinary teams, composed of various levels of
                  personnel, vendors, and clients to create and deploy
                  successful projects.
                </BlankLine>
                <BlankLine>&nbsp;</BlankLine>
                <BlankLine>
                  You will need to be someone who is confident and decisive in
                  leading projects, overseeing the completion and integration of
                  interdependent projects and parts
                </BlankLine>
                <BlankLine>&nbsp;</BlankLine>
                <PositionOverview>{`Role & Responsibilities`}</PositionOverview>
                <PositionOverview>&nbsp;</PositionOverview>
                <PositionOverview>
                  Set project management framework
                </PositionOverview>
                <BlankLine>&nbsp;</BlankLine>
                <ProvideInputsAndSupportTo>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Provide inputs and support to develop the project
                      management framework, templates, tools and systems to
                      deliver cost, time and quality metrics
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Design training to enable effective application of project
                      management framework across the organisation
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Support the Snr Project Manager in governance of project
                      management framework through audits
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Guide team in adoption of the set framework at the
                      appropriate level
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                </ProvideInputsAndSupportTo>
                <BlankLine>&nbsp;</BlankLine>
                <PositionOverview>Develop project plan</PositionOverview>
                <BlankLine>&nbsp;</BlankLine>
                <ProvideInputsAndSupportTo>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Develop the integrated project plan including detailed
                      activities, resource planning, cost estimation per project
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Work with stakeholders to establish and gain consensus on
                      project goals, objectives and deliverables
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Review project plan to determine time frame, funding
                      limitations, procedures for accomplishing projects
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Procure project requirements such as workforce, required
                      information, various agreements and material or technology
                      needed
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Guide team to deliver plans aligned to overall project
                      objectives
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Set expectations for periodic and milestone reviews
                      including status reports, project risk identification and
                      other dashboards
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                </ProvideInputsAndSupportTo>
                <BlankLine>&nbsp;</BlankLine>
                <BlankLine>Implement project</BlankLine>
                <BlankLine>&nbsp;</BlankLine>
                <ProvideInputsAndSupportTo>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Drive project to meet schedules, budget, manpower and
                      technical quality targets
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Drive project discipline to document scope changes, issues
                      and risks that affect implementation
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Work with users, technical staff and management to
                      determine and resolve issues associated with project
                      implementation
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Conduct regular project reviews to recommend schedule
                      changes, cost or resource adjustments
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                </ProvideInputsAndSupportTo>
                <BlankLine>&nbsp;</BlankLine>
                <BlankLine>Manage teams</BlankLine>
                <BlankLine>&nbsp;</BlankLine>
                <ProvideInputsAndSupportTo>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Oversee team management including budgets, forecasting,
                      work allocations and staffing
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Develop staff through ongoing coaching, mentoring and
                      career discussions
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Define common goals, direction and accountability among
                      staff
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Drive effective performance management practices within
                      department in accordance with company policies and
                      procedures
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                </ProvideInputsAndSupportTo>
                <BlankLine>&nbsp;</BlankLine>
                <BlankLine>Requirements</BlankLine>
                <BlankLine>&nbsp;</BlankLine>
                <ProvideInputsAndSupportTo>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Possess a Bachelor degree in Computer Science, Computer
                      Engineering, Information Technology or any other relevant
                      discipline
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Minimum 5 to 10 years in IT project management and
                      familiar with ITIL
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Excellent in both written and verbal communications skills
                      and able to effectively influence various internal and
                      external stakeholders
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Demonstrated ability to work in a team with service
                      centric mindset
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Able to work in ambiguous situation with a can-do attitude
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Attention to detail and able to multi-task and manage
                      various project elements simultaneously
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Certified in PMP, CITPM or other similar PM certification
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Preferably with good experience in turnkey projects and
                      system integration
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Fundamental knowledge in IT infrastructure (servers,
                      storage, network, EUC) and IT security
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Experience in bio-medical equipment system and IoT system
                      are desirable but not necessary
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <DesignTrainingToEnableEffe>
                    <ProvideInputsAnd>
                      Keep in tune with latest and advance digital technologies
                    </ProvideInputsAnd>
                  </DesignTrainingToEnableEffe>
                  <SoundUnderstandingAndHands>
                    <ProvideInputsAnd>
                      Sound understanding and hands on experience in all phases
                      of the project lifecycle
                    </ProvideInputsAnd>
                  </SoundUnderstandingAndHands>
                </ProvideInputsAndSupportTo>
              </PositionOverviewTheContainer>
            </Description>
          </Jobdescription>
          <Mainheader>
            <JobDescription1>Job Description</JobDescription1>
            <PostAJob onClick={openJobSubmitted}>
              <Profile>Post a job</Profile>
            </PostAJob>
            <Preview onClick={openJobDescriptionPreview}>
              <Profile>Preview</Profile>
            </Preview>
          </Mainheader>
        </Main1>
      </AfteruplaodOrFilljdRoot>
      {isJobSubmittedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeJobSubmitted}
        >
          <JobSubmitted onClose={closeJobSubmitted} />
        </PortalPopup>
      )}
      {isJobDescriptionPreviewOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeJobDescriptionPreview}
        >
          <JobDescriptionPreview onClose={closeJobDescriptionPreview} />
        </PortalPopup>
      )}
    </>
  );
};

export default AfterUplaodOrFillJD;

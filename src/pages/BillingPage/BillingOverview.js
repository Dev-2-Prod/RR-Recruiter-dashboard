import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";


const YouAreActive = styled.div`
  position: absolute;
  top: 103px;
  left: 30px;
  font-size: var(--font-size-5xl);
  font-weight: 600;
`;
const AutoRechargeIs = styled.div`
  position: absolute;
  top: 20px;
  left: 19px;
  font-size: var(--font-size-5xl);
  font-weight: 600;
`;
const Modify = styled.div`
  position: absolute;
  top: 115px;
  left: 19px;
  font-weight: 600;
  color: var(--color-dodgerblue);
`;
const OnThe15th = styled.div`
  position: absolute;
  top: 67px;
  left: 19px;
  line-height: 133.02%;
  color: var(--color-black);
`;
const AutoRechargeIsOnParent = styled.div`
  position: absolute;
  top: 172px;
  left: 30px;
  border-radius: var(--br-5xs);
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  width: 967px;
  height: 166px;
  overflow: hidden;
  color: #1e1f20;
`;
const Save1 = styled.div`
  position: relative;
  font-weight: 500;
`;
const Save = styled.div`
  border-radius: var(--br-mini);
  background-color: var(--color-whitesmoke-300);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-5xl);
`;
const SaveParent = styled.div`
  position: absolute;
  top: 370px;
  left: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  text-align: center;
  color: var(--color-black);
`;
const Personal = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 36px);
  font-weight: 500;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 25.3px;
  left: 0px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 114px;
  height: 2.8px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 26px;
  left: 383px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 126px;
  height: 3px;
  display: none;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 25px;
  left: 171px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 159px;
  height: 3px;
  display: none;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 25px;
  left: 555px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 114px;
  height: 2.8px;
  display: none;
`;
const PersonalParent = styled.div`
  position: relative;
  width: 114px;
  height: 28.1px;
  cursor: pointer;
  color: var(--color-darkslateblue-100);
`;
const Preferences = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;
const Subheadingpannel = styled.div`
  position: absolute;
  top: 35px;
  left: 30px;
  width: 669px;
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
  width: calc(100% - 378px);
  top: 150px;
  right: 50px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 930px;
  color: var(--color-dodgerblue);
`;
const BillingRoot = styled.div`
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

const BillingOverview = () => {
  const navigate = useNavigate();

  const onDarkModeContainerClick = useCallback(() => {
    navigate("/billing");
  }, [navigate]);

  const onSettingsContainer1Click = useCallback(() => {
    // Please sync "Setting" to the project
  }, []);

  const onDashboardContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onAddJobContainer1Click = useCallback(() => {
    // Please sync "Add Job" to the project
  }, []);

  const onCandidatesContainerClick = useCallback(() => {
    // Please sync "Candidates" to the project
  }, []);

  const onJobsContainerClick = useCallback(() => {
    // Please sync "jobs" to the project
  }, []);

  const onOthersContainerClick = useCallback(() => {
    // Please sync "resume stats" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/billing");
  }, [navigate]);

  const onPreferencesTextClick = useCallback(() => {
    navigate("/billingpayment");
  }, [navigate]);

  const onUploadTextClick = useCallback(() => {
    navigate("/billinghistory");
  }, [navigate]);

  const onProfessionalTextClick = useCallback(() => {
    navigate("/billingpreferences");
  }, [navigate]);

  return (
    <BillingRoot>
      <SideBar1 clickedTab={"Billing"} />
      <ProfileHeader clickedTab={"Billing"} />
      
      <Maincontainer>
        <YouAreActive>You are active on Smart Recruiter Plan</YouAreActive>
        <AutoRechargeIsOnParent>
          <AutoRechargeIs>Auto recharge is on</AutoRechargeIs>
          <Modify>Modify</Modify>
          <OnThe15th>
            On the 15th of each month, your credit card will be charged to fund
            your subscription account.
          </OnThe15th>
        </AutoRechargeIsOnParent>
        <SaveParent>
          <Save>
            <Save1>Add to credit balance</Save1>
          </Save>
          <Save>
            <Save1>Cancel plan</Save1>
          </Save>
        </SaveParent>
        <Subheadingpannel>
          <PersonalParent onClick={onFrameContainer2Click}>
            <Personal>Overview</Personal>
            <FrameChild />
            <FrameItem />
            <FrameInner />
            <RectangleDiv />
          </PersonalParent>
          <Preferences onClick={onPreferencesTextClick}>
            Payment methods
          </Preferences>
          <Preferences onClick={onUploadTextClick}>Billing history</Preferences>
          <Preferences onClick={onProfessionalTextClick}>
            Preferences
          </Preferences>
        </Subheadingpannel>
      </Maincontainer>
    </BillingRoot>
  );
};

export default BillingOverview;

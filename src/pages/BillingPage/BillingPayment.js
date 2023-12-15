import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SideBar1 } from "../Sidebar1";
import ProfileHeader from "../ProfileHeader";

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
  background-color: var(--color-lightslategray);
  width: 114px;
  height: 2.8px;
  display: none;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 26px;
  left: 383px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-lightslategray);
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
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 25px;
  left: 555px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-lightslategray);
  width: 114px;
  height: 2.8px;
  display: none;
`;
const PersonalParent = styled.div`
  position: relative;
  width: 114px;
  height: 28.1px;
  cursor: pointer;
`;
const Preferences = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--color-darkslateblue-100);
  cursor: pointer;
`;
const Upload = styled.div`
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
  text-align: left;
  color: var(--color-lightslategray);
`;
const Default = styled.div`
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
const SaveWrapper = styled.div`
  position: absolute;
  top: 254px;
  left: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-lg);
`;
const MagneticCardIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const Expires042026 = styled.div`
  position: absolute;
  top: 23px;
  left: 0px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-lightslategray);
`;
const Parent1 = styled.div`
  position: absolute;
  top: 3px;
  left: 56px;
  width: 112px;
  height: 42px;
`;
const MagneticCardParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 168px;
  height: 48px;
`;
const Delete = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--color-dodgerblue);
`;
const DefaultParent = styled.div`
  position: absolute;
  top: 66px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  font-size: var(--font-size-sm);
  color: var(--color-lightslategray);
`;
const FrameParent = styled.div`
  position: absolute;
  top: calc(50% - 41.5px);
  left: calc(50% - 105px);
  width: 168px;
  height: 83px;
`;
const MaincontainerInner = styled.div`
  position: absolute;
  top: 103px;
  left: 30px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  width: 270px;
  height: 111px;
  overflow: hidden;
`;
const Delete1 = styled.div`
  position: relative;
  font-weight: 500;
  text-align: center;
`;
const SetAsDefaultParent = styled.div`
  position: absolute;
  top: 66px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-dodgerblue);
`;
const MaincontainerChild = styled.div`
  position: absolute;
  top: 103px;
  left: 360px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  width: 270px;
  height: 111px;
  overflow: hidden;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 103px;
  left: 690px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  width: 270px;
  height: 111px;
  overflow: hidden;
`;
const Maincontainer = styled.div`
  position: absolute;
  top: 150px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  font-size: var(--font-size-base);

  width: 100%;
  height: 100%;
  text-align: center;
`;
const BillingRoot = styled.div`
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

const BillingPayment = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
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

  return (
    <BillingRoot>
      <SideBar1 clickedTab={"Billing"} />
      <ProfileHeader clickedTab={"Billing"} />
      <Maincontainer>
        <Subheadingpannel>
          <PersonalParent onClick={onFrameContainerClick}>
            <Personal>Overview</Personal>
            <FrameChild />
            <FrameItem />
            <FrameInner />
            <RectangleDiv />
          </PersonalParent>
          <Preferences onClick={onPreferencesTextClick}>
            Payment methods
          </Preferences>
          <Upload onClick={onUploadTextClick}>Billing history</Upload>
          <Upload onClick={onProfessionalTextClick}>Preferences</Upload>
        </Subheadingpannel>
        <SaveWrapper>
          <Save>
            <Default>Add payment method</Default>
          </Save>
        </SaveWrapper>
        <MaincontainerInner>
          <FrameParent>
            <MagneticCardParent>
              <MagneticCardIcon alt="" src="/magnetic-card@2x.png" />
              <Parent1>
                <Div>******1998</Div>
                <Expires042026>Expires 04/2026</Expires042026>
              </Parent1>
            </MagneticCardParent>
            <DefaultParent>
              <Default>Default</Default>
              <Delete>Delete</Delete>
            </DefaultParent>
          </FrameParent>
        </MaincontainerInner>
        <MaincontainerChild>
          <FrameParent>
            <MagneticCardParent>
              <MagneticCardIcon alt="" src="/magnetic-card@2x.png" />
              <Parent1>
                <Div>******1998</Div>
                <Expires042026>Expires 04/2026</Expires042026>
              </Parent1>
            </MagneticCardParent>
            <SetAsDefaultParent>
              <Default>Set as default</Default>
              <Delete1>Delete</Delete1>
            </SetAsDefaultParent>
          </FrameParent>
        </MaincontainerChild>
        <FrameDiv>
          <FrameParent>
            <MagneticCardParent>
              <MagneticCardIcon alt="" src="/magnetic-card@2x.png" />
              <Parent1>
                <Div>******1998</Div>
                <Expires042026>Expires 04/2026</Expires042026>
              </Parent1>
            </MagneticCardParent>
            <SetAsDefaultParent>
              <Default>Set as default</Default>
              <Delete1>Delete</Delete1>
            </SetAsDefaultParent>
          </FrameParent>
        </FrameDiv>
      </Maincontainer>
    </BillingRoot>
  );
};

export default BillingPayment;

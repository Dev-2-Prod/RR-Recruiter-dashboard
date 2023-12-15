import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";

const ChangesToThese = styled.div`
  position: absolute;
  top: calc(50% - 327.1px);
  left: calc(50% - 548px);
  line-height: 126.02%;
  font-weight: 500;
  display: inline-block;
  width: 958px;
`;
const Country = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const Country1 = styled.div`
  position: absolute;
  top: 27px;
  left: 0px;
  font-size: var(--font-size-sm);
  color: var(--color-lightslategray);
  display: inline-block;
  width: 489px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 418px;
  height: 47.1px;
`;
const Usa = styled.div`
  position: absolute;
  top: 15.1px;
  left: 20px;
  display: inline-block;
  width: 31px;
  height: 16.9px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 79px;
  left: 0px;
  width: 418px;
  height: 47.1px;
  font-size: var(--font-size-mini);
  color: var(--color-darkslateblue-200);
`;
const CountryParent = styled.div`
  position: relative;
  width: 532px;
  height: 126px;
`;
const Country3 = styled.div`
  position: absolute;
  top: 27px;
  left: 0px;
  font-size: var(--font-size-sm);
  color: var(--color-lightslategray);
  display: inline-block;
  width: 520px;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const Country4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-black);
`;
const Country5 = styled.div`
  position: absolute;
  top: 27px;
  left: 0px;
  font-size: var(--font-size-sm);
  color: var(--color-lightslategray);
  display: inline-block;
  width: 532px;
`;
const Usa2 = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  display: inline-block;
  width: 59px;
  height: 17px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 79px;
  left: 0px;
  width: 418px;
  height: 47.1px;
`;
const Usa3 = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  display: inline-block;
  width: 75px;
  height: 17px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 142.1px;
  left: 0px;
  width: 418px;
  height: 47.1px;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 205.1px;
  left: 0px;
  width: 418px;
  height: 47.1px;
`;
const GroupChild2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 418px;
  height: 47px;
`;
const RectangleParent2 = styled.div`
  position: absolute;
  top: 268.2px;
  left: 0px;
  width: 418px;
  height: 47px;
`;
const CountryContainer = styled.div`
  position: relative;
  width: 532px;
  height: 315.2px;
`;
const Country7 = styled.div`
  position: absolute;
  top: 27px;
  left: 0px;
  font-size: var(--font-size-sm);
  color: var(--color-lightslategray);
`;
const RectangleParent3 = styled.div`
  position: absolute;
  top: 62px;
  left: 0px;
  width: 418px;
  height: 47.1px;
  font-size: var(--font-size-mini);
  color: var(--color-darkslateblue-200);
`;
const CountryParent1 = styled.div`
  position: relative;
  width: 532px;
  height: 109.1px;
  font-size: var(--font-size-base);
  color: var(--color-black);
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--font-size-mini);
  color: var(--color-darkslateblue-200);
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-darkslateblue-100);
  width: 190px;
  height: 50px;
`;
const Save = styled.div`
  position: absolute;
  top: 14px;
  left: 74px;
  font-weight: 500;
`;
const RectangleParent4 = styled.div`
  position: relative;
  width: 190px;
  height: 50px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 90px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 41px;
  font-size: var(--font-size-base);
  color: var(--color-black);
`;
const ChangesToThesePreferencesWParent = styled.div`
  position: absolute;
  top: 93px;
  left: 30px;
  width: 1096px;
  height: 654.2px;
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
  background-color: var(--color-lightslategray);
  width: 159px;
  height: 3px;
  display: none;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 25px;
  left: 555px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 114px;
  height: 2.8px;
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
  cursor: pointer;
`;
const Professional = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--color-darkslateblue-100);
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
  background-color: var(--color-white);
  height: 100%;
  font-size: var(--font-size-xl);
  color: var(--color-darkgray);
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

const BillingPreferences = () => {
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

  const onFrameContainer9Click = useCallback(() => {
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
        <ChangesToThesePreferencesWParent>
          <ChangesToThese>
            Changes to these preferences will apply to future invoices only. If
            you need a past invoice reissued please contact at
            roborecruiter@gmail.com
          </ChangesToThese>
          <FrameParent>
            <FrameGroup>
              <FrameContainer>
                <CountryParent>
                  <Country>Company name</Country>
                  <Country1>
                    If specified, this name will appear on invoices instead of
                    your organisation name.
                  </Country1>
                  <RectangleParent>
                    <GroupChild />
                    <Usa>USA</Usa>
                  </RectangleParent>
                </CountryParent>
                <CountryParent>
                  <Country>Billing email</Country>
                  <Country3>
                    Invoices and other billing notifications will be sent here
                    (in addition to being sent to the owners of your
                    organisation).
                  </Country3>
                  <RectangleParent>
                    <GroupChild />
                    <Usa>USA</Usa>
                  </RectangleParent>
                </CountryParent>
              </FrameContainer>
              <FrameDiv>
                <CountryContainer>
                  <Country4>Primary business address</Country4>
                  <Country5>
                    This is the physical address of the company purchasing
                    Roborecruiter services and is used to calculate any
                    applicable sales tax.
                  </Country5>
                  <RectangleContainer>
                    <GroupChild />
                    <Usa2>Country</Usa2>
                  </RectangleContainer>
                  <GroupDiv>
                    <GroupChild />
                    <Usa3>Address 1</Usa3>
                  </GroupDiv>
                  <RectangleParent1>
                    <GroupChild />
                    <Usa3>Address 2</Usa3>
                  </RectangleParent1>
                  <RectangleParent2>
                    <GroupChild2 />
                    <Usa2>Pincode</Usa2>
                  </RectangleParent2>
                </CountryContainer>
                <CountryParent1>
                  <Country>Purchase order (PO) number</Country>
                  <Country7>
                    Your PO will be displayed on future invoices.
                  </Country7>
                  <RectangleParent3>
                    <GroupChild />
                    <Usa>USA</Usa>
                  </RectangleParent3>
                </CountryParent1>
              </FrameDiv>
            </FrameGroup>
            <RectangleParent4>
              <GroupChild4 />
              <Save>Save</Save>
            </RectangleParent4>
          </FrameParent>
        </ChangesToThesePreferencesWParent>
        <Subheadingpannel>
          <PersonalParent onClick={onFrameContainer9Click}>
            <Personal>Overview</Personal>
            <FrameChild />
            <FrameItem />
            <FrameInner />
            <FrameChild1 />
          </PersonalParent>
          <Preferences onClick={onPreferencesTextClick}>
            Payment methods
          </Preferences>
          <Preferences onClick={onUploadTextClick}>Billing history</Preferences>
          <Professional onClick={onProfessionalTextClick}>
            Preferences
          </Professional>
        </Subheadingpannel>
      </Maincontainer>
    </BillingRoot>
  );
};

export default BillingPreferences;

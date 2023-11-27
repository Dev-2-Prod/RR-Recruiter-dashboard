import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SideBar1 } from "../Sidebar1";
import ProfileHeader from "../ProfileHeader";


const ShowingInvoicesWithin = styled.div`
  position: absolute;
  top: calc(50% - 11.5px);
  left: calc(50% - 208.5px);
  font-weight: 500;
`;
const UploadYourFilesBelow = styled.div`
  position: absolute;
  top: 103px;
  left: 30px;
  width: 425px;
  height: 29px;
  font-size: var(--font-size-xl);
  color: var(--color-darkgray);
`;
const Invoice = styled.div`
  position: absolute;
  top: 0px;
  left: 3px;
  font-weight: 500;
`;
const Status1 = styled.div`
  position: absolute;
  top: 0px;
  left: 295px;
  font-weight: 500;
`;
const Amount = styled.div`
  position: absolute;
  top: 0px;
  left: 449px;
  font-weight: 500;
`;
const Created = styled.div`
  position: absolute;
  top: 0px;
  left: 615px;
  font-weight: 500;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 38.5px;
  left: -0.5px;
  border-top: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  width: 1015px;
  height: 1px;
`;
const InvoiceParent = styled.div`
  position: absolute;
  top: 160px;
  left: 27px;
  width: 1014px;
  height: 39px;
`;
const Invoice1 = styled.div`
  position: absolute;
  top: 6px;
  left: 0px;
  font-weight: 500;
  color: var(--color-lightslategray);
`;
const Paid = styled.div`
  position: relative;
  font-weight: 500;
`;
const PaidWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 287px;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkseagreen);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xs) var(--padding-5xs);
  color: var(--color-forestgreen);
`;
const Div1 = styled.div`
  position: absolute;
  top: 6px;
  left: 443px;
  font-weight: 500;
`;
const Nov2023 = styled.div`
  position: absolute;
  top: 6px;
  left: 611px;
  font-weight: 500;
`;
const View = styled.div`
  position: absolute;
  top: 6px;
  left: 827px;
  font-weight: 500;
  color: var(--color-mediumseagreen);
`;
const Invoice1Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 3px;
  width: 870px;
  height: 34px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 45.5px;
  left: -0.5px;
  border-top: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  width: 1012px;
  height: 1px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 223px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 281px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 339px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 397px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 455px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameParent2 = styled.div`
  position: absolute;
  top: 513px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameParent3 = styled.div`
  position: absolute;
  top: 571px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameParent4 = styled.div`
  position: absolute;
  top: 629px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const FrameParent5 = styled.div`
  position: absolute;
  top: 687px;
  left: 30px;
  width: 1011px;
  height: 46px;
`;
const Personal = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 36px);
  font-weight: 500;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 25.3px;
  left: 0px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-lightslategray);
  width: 114px;
  height: 2.8px;
  display: none;
`;
const FrameChild7 = styled.div`
  position: absolute;
  top: 26px;
  left: 383px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-darkslateblue-100);
  width: 126px;
  height: 3px;
`;
const FrameChild8 = styled.div`
  position: absolute;
  top: 25px;
  left: 171px;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  background-color: var(--color-lightslategray);
  width: 159px;
  height: 3px;
  display: none;
`;
const FrameChild9 = styled.div`
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
  cursor: pointer;
`;
const Upload = styled.div`
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
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 930px;
  color: var(--color-black);
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

const BillingHistory = () => {
  const navigate = useNavigate();

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

  const onDarkModeContainerClick = useCallback(() => {
    navigate("/billing");
  }, [navigate]);

  const onSettingsContainer1Click = useCallback(() => {
    // Please sync "Setting" to the project
  }, []);

  const onFrameContainer28Click = useCallback(() => {
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
        <UploadYourFilesBelow>
          <ShowingInvoicesWithin>
            Showing invoices within the past 12 months
          </ShowingInvoicesWithin>
        </UploadYourFilesBelow>
        <InvoiceParent>
          <Invoice>Invoice</Invoice>
          <Status1>Status</Status1>
          <Amount>Amount</Amount>
          <Created>Created</Created>
          <FrameChild />
        </InvoiceParent>
        <FrameParent>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameParent>
        <FrameGroup>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameGroup>
        <FrameContainer>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameContainer>
        <FrameDiv>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameDiv>
        <FrameParent1>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameParent1>
        <FrameParent2>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameParent2>
        <FrameParent3>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameParent3>
        <FrameParent4>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameParent4>
        <FrameParent5>
          <Invoice1Parent>
            <Invoice1>Invoice #1</Invoice1>
            <PaidWrapper>
              <Paid>Paid</Paid>
            </PaidWrapper>
            <Div1>$ 50.89</Div1>
            <Nov2023>2-Nov-2023</Nov2023>
            <View>View</View>
          </Invoice1Parent>
          <FrameItem />
        </FrameParent5>
        <Subheadingpannel>
          <PersonalParent onClick={onFrameContainer28Click}>
            <Personal>Overview</Personal>
            <RectangleDiv />
            <FrameChild7 />
            <FrameChild8 />
            <FrameChild9 />
          </PersonalParent>
          <Preferences onClick={onPreferencesTextClick}>
            Payment methods
          </Preferences>
          <Upload onClick={onUploadTextClick}>Billing history</Upload>
          <Preferences onClick={onProfessionalTextClick}>
            Preferences
          </Preferences>
        </Subheadingpannel>
      </Maincontainer>
    </BillingRoot>
  );
};

export default BillingHistory;

import { useState, useCallback } from "react";
import ApplyButtons from "./ApplyButtons";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";

const FilterBy = styled.div`
  position: absolute;
  top: 7px;
  left: 0px;
  font-weight: 500;
`;
const Reset = styled.div`
  position: relative;
  font-weight: 500;
`;
const ResetWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-dimgray);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
`;
const ApplyWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 104px;
  border-radius: var(--br-9xs);
  background-color: var(--color-dodgerblue-100);
  border: 1px solid var(--color-dodgerblue-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
  cursor: pointer;
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: 722px;
  width: 183px;
  height: 50px;
  font-size: var(--font-size-xl);
  color: var(--color-dimgray);
  font-family: var(--font-poppins);
`;
const FilterByParent = styled.div`
  position: absolute;
  top: 28px;
  left: 35px;
  width: 905px;
  height: 50px;
  font-size: 24px;
`;
const JobFilterByChild = styled.div`
  position: absolute;
  top: 101.4px;
  left: -0.5px;
  border-top: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  width: 1008px;
  height: 1px;
`;
const JobFilterByItem = styled.div`
  position: absolute;
  top: 101.5px;
  left: 244.5px;
  border-right: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  width: 1px;
  height: 522px;
`;
const Position = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 600;
  color: var(--color-dodgerblue-100);
`;
const Status1 = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
`;
const JobPostDate = styled.div`
  position: absolute;
  top: 108px;
  left: 0px;
`;
const PositionParent = styled.div`
  position: absolute;
  top: 132px;
  left: 35px;
  width: 131px;
  height: 132px;
  font-size: var(--font-size-xl);
`;
const SearchPosition = styled.div`
  position: absolute;
  top: 12px;
  left: 18px;
  font-weight: 500;
`;
const SearchPositionWrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 279px;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  width: 342px;
  height: 44px;
  overflow: hidden;
  color: var(--color-dimgray);
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-11xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Accountant = styled.div`
  position: absolute;
  top: 2px;
  left: 36px;
  font-weight: 500;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 125px;
  height: 24px;
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
  width: 141px;
  height: 24px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 115px;
  left: 0px;
  width: 211px;
  height: 24px;
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 169px;
  left: 0px;
  width: 121px;
  height: 24px;
`;
const FrameParent2 = styled.div`
  position: absolute;
  top: 227px;
  left: 0px;
  width: 142px;
  height: 24px;
`;
const FrameParent3 = styled.div`
  position: absolute;
  top: 281px;
  left: 0px;
  width: 166px;
  height: 24px;
`;
const FrameParent4 = styled.div`
  position: absolute;
  top: 342px;
  left: 0px;
  width: 151px;
  height: 24px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 216px;
  left: 279px;
  width: 211px;
  height: 366px;
`;
const FrameParent5 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 168px;
  height: 24px;
`;
const FrameParent6 = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
  width: 127px;
  height: 24px;
`;
const FrameParent7 = styled.div`
  position: absolute;
  top: 115px;
  left: 0px;
  width: 114px;
  height: 24px;
`;
const FrameParent8 = styled.div`
  position: absolute;
  top: 169px;
  left: 0px;
  width: 168px;
  height: 24px;
`;
const FrameParent9 = styled.div`
  position: absolute;
  top: 227px;
  left: 0px;
  width: 94px;
  height: 24px;
`;
const FrameParent10 = styled.div`
  position: absolute;
  top: 281px;
  left: 0px;
  width: 133px;
  height: 24px;
`;
const FrameParent11 = styled.div`
  position: absolute;
  top: 342px;
  left: 0px;
  width: 154px;
  height: 24px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 216px;
  left: 532px;
  width: 168px;
  height: 366px;
`;
const JobFilterByRoot = styled.div`
  background-color: var(--color-white);
  width: 1007px;
  height: 623px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
  position: relative;
`;

const JobFilterBy = () => {
  const [isApplyButtonsOpen, setApplyButtonsOpen] = useState(false);

  const openApplyButtons = useCallback(() => {
    setApplyButtonsOpen(true);
  }, []);

  const closeApplyButtons = useCallback(() => {
    setApplyButtonsOpen(false);
  }, []);

  return (
    <>
      <JobFilterByRoot>
        <FilterByParent>
          <FilterBy>Filter by</FilterBy>
          <FrameParent>
            <ResetWrapper>
              <Reset>Reset</Reset>
            </ResetWrapper>
            <ApplyWrapper onClick={openApplyButtons}>
              <Reset>Apply</Reset>
            </ApplyWrapper>
          </FrameParent>
        </FilterByParent>
        <JobFilterByChild />
        <JobFilterByItem />
        <PositionParent>
          <Position>Position</Position>
          <Status1>Status</Status1>
          <JobPostDate>Job post date</JobPostDate>
        </PositionParent>
        <SearchPositionWrapper>
          <SearchPosition>Search position</SearchPosition>
        </SearchPositionWrapper>
        <GroupParent>
          <FrameGroup>
            <GroupChild />
            <Accountant>Accountant</Accountant>
          </FrameGroup>
          <FrameContainer>
            <GroupChild />
            <Accountant>Administrator</Accountant>
          </FrameContainer>
          <GroupDiv>
            <GroupChild />
            <Accountant>Advertising copywriter</Accountant>
          </GroupDiv>
          <FrameParent1>
            <GroupChild />
            <Accountant>Copywriter</Accountant>
          </FrameParent1>
          <FrameParent2>
            <GroupChild />
            <Accountant>Data scientist</Accountant>
          </FrameParent2>
          <FrameParent3>
            <GroupChild />
            <Accountant>Digital Marketing</Accountant>
          </FrameParent3>
          <FrameParent4>
            <GroupChild />
            <Accountant>Event manager</Accountant>
          </FrameParent4>
        </GroupParent>
        <GroupContainer>
          <FrameParent5>
            <GroupChild />
            <Accountant>Fashion designer</Accountant>
          </FrameParent5>
          <FrameParent6>
            <GroupChild />
            <Accountant>IT Helpdesk</Accountant>
          </FrameParent6>
          <FrameParent7>
            <GroupChild />
            <Accountant>Developer</Accountant>
          </FrameParent7>
          <FrameParent8>
            <GroupChild />
            <Accountant>Product designer</Accountant>
          </FrameParent8>
          <FrameParent9>
            <GroupChild />
            <Accountant>Analyst</Accountant>
          </FrameParent9>
          <FrameParent10>
            <GroupChild />
            <Accountant>UI developer</Accountant>
          </FrameParent10>
          <FrameParent11>
            <GroupChild />
            <Accountant>UI/UX Designer</Accountant>
          </FrameParent11>
        </GroupContainer>
      </JobFilterByRoot>
      {isApplyButtonsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeApplyButtons}
        >
          <ApplyButtons onClose={closeApplyButtons} />
        </PortalPopup>
      )}
    </>
  );
};

export default JobFilterBy;

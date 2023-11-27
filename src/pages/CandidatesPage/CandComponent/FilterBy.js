import { useState, useCallback } from "react";
import ResumePopup from "./ResumePopup";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";

const FilterBy1 = styled.div`
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
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #605e5c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
`;
const ApplyWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 104px;
  border-radius: 4px;
  background-color: #438ffe;
  border: 1px solid #438ffe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  cursor: pointer;
  color: #fff;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: 722px;
  width: 183px;
  height: 44px;
  font-size: 20px;
  color: #605e5c;
`;
const FilterByParent = styled.div`
  position: absolute;
  top: 28px;
  left: 35px;
  width: 905px;
  height: 44px;
  font-size: 24px;
`;
const FilterByChild = styled.div`
  position: absolute;
  top: 101.4px;
  left: -0.5px;
  border-top: 1px solid #9c9c9c;
  box-sizing: border-box;
  width: 1008px;
  height: 1px;
`;
const FilterByItem = styled.div`
  position: absolute;
  top: 101.5px;
  left: 244.5px;
  border-right: 1px solid #9c9c9c;
  box-sizing: border-box;
  width: 1px;
  height: 522px;
`;
const Designation = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const ExperienceInYrs = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
`;
const Collegeuni = styled.div`
  position: absolute;
  top: 108px;
  left: 0px;
`;
const Degree = styled.div`
  position: absolute;
  top: 162px;
  left: 0px;
`;
const School = styled.div`
  position: absolute;
  top: 216px;
  left: 0px;
`;
const Location1 = styled.div`
  position: absolute;
  top: 270px;
  left: 0px;
  font-weight: 600;
  color: #438ffe;
`;
const TechnicalSkills = styled.div`
  position: absolute;
  top: 324px;
  left: 0px;
`;
const InterpersonalSkills = styled.div`
  position: absolute;
  top: 378px;
  left: 0px;
`;
const ProjectLists = styled.div`
  position: absolute;
  top: 432px;
  left: 0px;
`;
const DesignationParent = styled.div`
  position: absolute;
  top: 132px;
  left: 35px;
  width: 187px;
  height: 456px;
  font-size: 20px;
  color: #222327;
`;
const SearchCityState = styled.div`
  position: absolute;
  top: 10px;
  left: 18px;
  font-weight: 500;
`;
const SearchCityStateCountryWrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 279px;
  border-radius: 4px;
  border: 1px solid #9c9c9c;
  box-sizing: border-box;
  width: 342px;
  height: 44px;
  overflow: hidden;
  color: #605e5c;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #9c9c9c;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Afghanistan = styled.div`
  position: absolute;
  top: 0px;
  left: 36px;
  font-weight: 500;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 129px;
  height: 24px;
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
  width: 93px;
  height: 24px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 115px;
  left: 0px;
  width: 90px;
  height: 24px;
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 169px;
  left: 0px;
  width: 98px;
  height: 24px;
`;
const FrameParent2 = styled.div`
  position: absolute;
  top: 227px;
  left: 0px;
  width: 90px;
  height: 24px;
`;
const FrameParent3 = styled.div`
  position: absolute;
  top: 281px;
  left: 0px;
  width: 111px;
  height: 24px;
`;
const FrameParent4 = styled.div`
  position: absolute;
  top: 342px;
  left: 0px;
  width: 100px;
  height: 24px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 216px;
  left: 279px;
  width: 129px;
  height: 366px;
`;
const FrameParent5 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 104px;
  height: 24px;
`;
const FrameParent6 = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
  width: 91px;
  height: 24px;
`;
const FrameParent7 = styled.div`
  position: absolute;
  top: 115px;
  left: 0px;
  width: 107px;
  height: 24px;
`;
const FrameParent8 = styled.div`
  position: absolute;
  top: 169px;
  left: 0px;
  width: 126px;
  height: 24px;
`;
const FrameParent9 = styled.div`
  position: absolute;
  top: 227px;
  left: 0px;
  width: 110px;
  height: 24px;
`;
const FrameParent10 = styled.div`
  position: absolute;
  top: 281px;
  left: 0px;
  width: 94px;
  height: 24px;
`;
const FrameParent11 = styled.div`
  position: absolute;
  top: 342px;
  left: 0px;
  width: 98px;
  height: 24px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 216px;
  left: 532px;
  width: 126px;
  height: 366px;
`;
const FrameParent12 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 91px;
  height: 24px;
`;
const FrameParent13 = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
  width: 79px;
  height: 24px;
`;
const FrameParent14 = styled.div`
  position: absolute;
  top: 115px;
  left: 0px;
  width: 81px;
  height: 24px;
`;
const FrameParent15 = styled.div`
  position: absolute;
  top: 169px;
  left: 0px;
  width: 77px;
  height: 24px;
`;
const FrameParent16 = styled.div`
  position: absolute;
  top: 227px;
  left: 0px;
  width: 105px;
  height: 24px;
`;
const GroupParent1 = styled.div`
  position: absolute;
  top: 216px;
  left: 777px;
  width: 105px;
  height: 251px;
`;
const FilterByRoot = styled.div`
  background-color: #fff;
  width: 1007px;
  height: 623px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: 16px;
  color: #000;
  font-family: Inter;
  position: relative; 
`;

const FilterBy = () => {
  const [isResumePopupOpen, setResumePopupOpen] = useState(false);

  const openResumePopup = useCallback(() => {
    setResumePopupOpen(true);
  }, []);

  const closeResumePopup = useCallback(() => {
    setResumePopupOpen(false);
  }, []);

  return (
    <>
      <FilterByRoot>
        <FilterByParent>
          <FilterBy1>Filter by</FilterBy1>
          <FrameParent>
            <ResetWrapper>
              <Reset>Reset</Reset>
            </ResetWrapper>
            <ApplyWrapper onClick={openResumePopup}>
              <Reset>Apply</Reset>
            </ApplyWrapper>
          </FrameParent>
        </FilterByParent>
        <FilterByChild />
        <FilterByItem />
        <DesignationParent>
          <Designation>Designation</Designation>
          <ExperienceInYrs>Experience in yrs</ExperienceInYrs>
          <Collegeuni>College/Uni</Collegeuni>
          <Degree>Degree</Degree>
          <School>School</School>
          <Location1>Location</Location1>
          <TechnicalSkills>Technical skills</TechnicalSkills>
          <InterpersonalSkills>Interpersonal skills</InterpersonalSkills>
          <ProjectLists>Project lists</ProjectLists>
        </DesignationParent>
        <SearchCityStateCountryWrapper>
          <SearchCityState>Search city, state, country</SearchCityState>
        </SearchCityStateCountryWrapper>
        <GroupParent>
          <FrameGroup>
            <GroupChild />
            <Afghanistan>Afghanistan</Afghanistan>
          </FrameGroup>
          <FrameContainer>
            <GroupChild />
            <Afghanistan>Albania</Afghanistan>
          </FrameContainer>
          <GroupDiv>
            <GroupChild />
            <Afghanistan>Algeria</Afghanistan>
          </GroupDiv>
          <FrameParent1>
            <GroupChild />
            <Afghanistan>Andorra</Afghanistan>
          </FrameParent1>
          <FrameParent2>
            <GroupChild />
            <Afghanistan>Angola</Afghanistan>
          </FrameParent2>
          <FrameParent3>
            <GroupChild />
            <Afghanistan>Argentina</Afghanistan>
          </FrameParent3>
          <FrameParent4>
            <GroupChild />
            <Afghanistan>Armenia</Afghanistan>
          </FrameParent4>
        </GroupParent>
        <GroupContainer>
          <FrameParent5>
            <GroupChild />
            <Afghanistan>Australia</Afghanistan>
          </FrameParent5>
          <FrameParent6>
            <GroupChild />
            <Afghanistan>Austria</Afghanistan>
          </FrameParent6>
          <FrameParent7>
            <GroupChild />
            <Afghanistan>Bahamas</Afghanistan>
          </FrameParent7>
          <FrameParent8>
            <GroupChild />
            <Afghanistan>Bangladesh</Afghanistan>
          </FrameParent8>
          <FrameParent9>
            <GroupChild />
            <Afghanistan>Barbados</Afghanistan>
          </FrameParent9>
          <FrameParent10>
            <GroupChild />
            <Afghanistan>Belarus</Afghanistan>
          </FrameParent10>
          <FrameParent11>
            <GroupChild />
            <Afghanistan>Belgium</Afghanistan>
          </FrameParent11>
        </GroupContainer>
        <GroupParent1>
          <FrameParent12>
            <GroupChild />
            <Afghanistan>Bhutan</Afghanistan>
          </FrameParent12>
          <FrameParent13>
            <GroupChild />
            <Afghanistan>Brazil</Afghanistan>
          </FrameParent13>
          <FrameParent14>
            <GroupChild />
            <Afghanistan>China</Afghanistan>
          </FrameParent14>
          <FrameParent15>
            <GroupChild />
            <Afghanistan>Cuba</Afghanistan>
          </FrameParent15>
          <FrameParent16>
            <GroupChild />
            <Afghanistan>Denmark</Afghanistan>
          </FrameParent16>
        </GroupParent1>
      </FilterByRoot>
      {isResumePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeResumePopup}
        >
          <ResumePopup onClose={closeResumePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilterBy;

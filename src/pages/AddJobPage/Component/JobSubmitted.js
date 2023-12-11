import styled from "styled-components";

const YourJobIs = styled.div`
  position: relative;
  top: 38px;
  left: 211px;
  font-weight: 500;
`;
const Okay = styled.div`
  position: relative;
  margin: 0 !important;
  // top: 13px;
  left: 55px;
  font-weight: 600;
  z-index: 0;
`;
const OkayWrapper = styled.div`
  position: relative;
  top: 102px;
  left: 415px;
  border-radius: var(--br-mini);
  background-color: var(--color-dodgerblue);
  border: 1px solid #9a6aff;
  box-sizing: border-box;
  width: 188px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const JobsubmittedRoot = styled.div`
  border-radius: var(--br-mini);
  background-color: var(--color-whitesmoke-100);
  width: 986px;
  height: 221px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
`;

const JobSubmitted = () => {
  return (
    <JobsubmittedRoot>
      <YourJobIs>Your Job Is Posted. You can find it in “Jobs”</YourJobIs>
      <OkayWrapper>
        <Okay>Okay</Okay>
      </OkayWrapper>
    </JobsubmittedRoot>
  );
};

export default JobSubmitted;

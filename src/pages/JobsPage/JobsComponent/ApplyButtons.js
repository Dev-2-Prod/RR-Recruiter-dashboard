import styled from "styled-components";

const ApplyWithResumes = styled.div`
  position: absolute;
  top: 6px;
  left: 16px;
  display: inline-block;
  width: 247px;
`;
const Customdates = styled.div`
  position: absolute;
  top: 33px;
  left: 43px;
  border-radius: var(--br-mini);
  background-color: var(--color-dodgerblue-100);
  width: 279px;
  height: 49px;
`;
const ApplyWithActive = styled.div`
  position: absolute;
  top: 15px;
  left: 40px;
`;
const Activeresumes = styled.div`
  position: absolute;
  top: 103px;
  left: 43px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.25), 0px 1px 1px rgba(0, 0, 0, 0.25);
  width: 279px;
  height: 49px;
  color: #3f424b;
`;
const ApplybuttonsRoot = styled.div`
  background-color: var(--color-white);
  width: 365px;
  height: 185px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
  position: relative;
`;

const ApplyButtons = () => {
  return (
    <ApplybuttonsRoot>
      <Customdates>
        <ApplyWithResumes>
          Apply with resumes received on custom dates
        </ApplyWithResumes>
      </Customdates>
      <Activeresumes>
        <ApplyWithActive>Apply with active resumes</ApplyWithActive>
      </Activeresumes>
    </ApplybuttonsRoot>
  );
};

export default ApplyButtons;

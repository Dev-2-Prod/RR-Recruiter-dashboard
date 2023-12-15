import styled from "styled-components";

const BackgroundCheck1 = styled.div`
  position: absolute;
  top: 28px;
  left: 24px;
  font-weight: 500;
`;
const CongratulationsAlbertsBack = styled.div`
  position: absolute;
  top: 74px;
  left: 24px;
  font-weight: 500;
  color: var(--color-limegreen-100);
`;
const Github = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const AboutGithubThe = styled.div`
  position: absolute;
  top: 46px;
  left: 0px;
  font-size: var(--font-size-lg);
  display: inline-block;
  width: 784px;
`;
const GithubParent = styled.div`
  position: absolute;
  top: 139px;
  left: 24px;
  width: 784px;
  height: 127px;
`;
const FacebookParent = styled.div`
  position: absolute;
  top: 290px;
  left: 24px;
  width: 784px;
  height: 127px;
`;
const TwitterParent = styled.div`
  position: absolute;
  top: 441px;
  left: 24px;
  width: 784px;
  height: 127px;
`;
const BehanceParent = styled.div`
  position: absolute;
  top: 592px;
  left: 24px;
  width: 784px;
  height: 127px;
`;
const OtherWebsiteParent = styled.div`
  position: absolute;
  top: 743px;
  left: 24px;
  width: 784px;
  height: 127px;
`;
const DownloadIcon = styled.img`
  position: absolute;
  top: 27px;
  left: 761px;
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
const BackgroundCheckRoot = styled.div`
  position: relative;
  border-radius: var(--br-lg);
  background-color: var(--color-white);
  width: 834px;
  height: 942px;
  overflow-y: scroll;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
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

const BackgroundCheck = () => {
  return (
    <BackgroundCheckRoot>
      <BackgroundCheck1>Background check</BackgroundCheck1>
      <CongratulationsAlbertsBack>
        Congratulations! Albert’s background check has been done.
      </CongratulationsAlbertsBack>
      <GithubParent>
        <Github>Github</Github>
        <AboutGithubThe>
          About Github The Total Economic Impact™ Of GitHub Enterprise Cloud and
          Advanced Security, a commissioned study conducted by Forrester
          Consulting, 2022. Results are for a composite organization based on
          interviewed customers.
        </AboutGithubThe>
      </GithubParent>
      <FacebookParent>
        <Github>Facebook</Github>
        <AboutGithubThe>
          About Github The Total Economic Impact™ Of GitHub Enterprise Cloud and
          Advanced Security, a commissioned study conducted by Forrester
          Consulting, 2022. Results are for a composite organization based on
          interviewed customers.
        </AboutGithubThe>
      </FacebookParent>
      <TwitterParent>
        <Github>Twitter</Github>
        <AboutGithubThe>
          About Github The Total Economic Impact™ Of GitHub Enterprise Cloud and
          Advanced Security, a commissioned study conducted by Forrester
          Consulting, 2022. Results are for a composite organization based on
          interviewed customers.
        </AboutGithubThe>
      </TwitterParent>
      <BehanceParent>
        <Github>Behance</Github>
        <AboutGithubThe>
          About Github The Total Economic Impact™ Of GitHub Enterprise Cloud and
          Advanced Security, a commissioned study conducted by Forrester
          Consulting, 2022. Results are for a composite organization based on
          interviewed customers.
        </AboutGithubThe>
      </BehanceParent>
      <OtherWebsiteParent>
        <Github>Other website</Github>
        <AboutGithubThe>
          About Github The Total Economic Impact™ Of GitHub Enterprise Cloud and
          Advanced Security, a commissioned study conducted by Forrester
          Consulting, 2022. Results are for a composite organization based on
          interviewed customers.
        </AboutGithubThe>
      </OtherWebsiteParent>
      <DownloadIcon alt="" src="/download@2x.png" />
    </BackgroundCheckRoot>
  );
};

export default BackgroundCheck;

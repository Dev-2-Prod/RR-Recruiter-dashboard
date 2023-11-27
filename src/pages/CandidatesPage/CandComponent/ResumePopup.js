import styled from "styled-components";

const Image1Icon = styled.img`
  // position: absolute;
  top: 0px;
  left: 0px;
  width: 525px;
  height: 768px;
  object-fit: cover;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 601.1px;
  left: 284px;
  background-color: rgba(0, 175, 39, 0.16);
  width: 115.2px;
  height: 18.2px;
`;
const Image1Parent = styled.div`
  position: absolute;
  top: 72px;
  left: 85px;
  width: 525px;
  height: 768px;
`;
const ResumepopupRoot = styled.div`
  background-color: #fff;
  width: 696px;
  position: relative;
  height: 912px;
  overflow: scroll;
  max-width: 100%;
  max-height: 100%;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-dodgerblue);
    border-radius: 10px;
  }
`;

const ResumePopup = () => {
  return (
    <ResumepopupRoot>
      <Image1Parent>
        <Image1Icon alt="" src="/image-1@2x.png" />
        <GroupChild />
      </Image1Parent>
    </ResumepopupRoot>
  );
};

export default ResumePopup;

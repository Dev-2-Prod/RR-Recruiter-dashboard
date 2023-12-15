import styled from "styled-components";

const PreviewpopupIcon = styled.img`
  position: relative;
  top: 129px;
  left: 65px;
  width: 619px;
  height: 872.7px;
  object-fit: cover;
`;
const JobdescriptionPreviewRoot = styled.div`
  background-color: var(--color-white);
  width: 749px;
  height: 1080px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  overflow-y: scroll;
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
  }
`;

const JobDescriptionPreview = () => {
  return (
    <JobdescriptionPreviewRoot>
      <PreviewpopupIcon alt="" src="/previewpopup@2x.png" />
    </JobdescriptionPreviewRoot>
  );
};

export default JobDescriptionPreview;

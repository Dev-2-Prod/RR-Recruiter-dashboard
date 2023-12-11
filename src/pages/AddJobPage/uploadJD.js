import styled from "styled-components";
import Dashboard from "../DashboardPage/Dashboard";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";

const ChooseFolder = styled.div`
  position: relative;
  font-weight: 500;
`;
const ChooseFolderWrapper = styled.div`
  position: absolute;
  top: 655px;
  left: 268px;
  border-radius: var(--br-mini);
  background-color: var(--color-dodgerblue);
  width: 165px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  box-sizing: border-box;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const DragFilesTo = styled.div`
  position: absolute;
  top: 251px;
  left: 111px;
`;
const TableruploadIcon = styled.img`
  position: absolute;
  top: 172px;
  left: 199px;
  width: 48px;
  height: 48px;
  overflow: hidden;
`;
const DragFilesToUploadParent = styled.div`
  position: absolute;
  top: 178.5px;
  left: 127.5px;
  background-color: rgba(184, 184, 184, 0.08);
  border: 1px dashed var(--color-darkgray);
  box-sizing: border-box;
  width: 446px;
  height: 441px;
  overflow: hidden;
`;
const MainChild = styled.div`
  position: absolute;
  top: 98.5px;
  left: 46.5px;
  border-top: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  width: 1576px;
  height: 1px;
`;
const Uploading = styled.div`
  position: absolute;
  top: 179px;
  left: 673px;
  font-weight: 500;
`;
const ProjectManagerJddoc = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const PercentagebarChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-37xl);
  background-color: rgba(184, 184, 184, 0.19);
  width: 762px;
  height: 8px;
`;
const PercentagebarItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-37xl);
  background-color: var(--color-dodgerblue);
  width: 330px;
  height: 8px;
`;
const Percentagebar = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 762px;
  height: 8px;
`;
const Kbsec = styled.div`
  position: absolute;
  top: 0px;
  left: 670px;
`;
const Uploadpercentage = styled.div`
  position: absolute;
  top: 64px;
  left: 0px;
  width: 762px;
  height: 24px;
  color: var(--color-darkgray);
`;
const Upload = styled.div`
  position: absolute;
  top: 0px;
  left: 78px;
  width: 762px;
  height: 88px;
`;
const HappyFileIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const Uploadbar = styled.div`
  position: absolute;
  top: 258px;
  left: 669px;
  width: 840px;
  height: 88px;
  font-size: var(--font-size-xl);
`;
const FileUpload = styled.div`
  position: absolute;
  top: 0px;
  left: 40px;
  font-weight: 500;
`;
const MdiarrowLeftIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Fileupload = styled.div`
  position: absolute;
  top: 40px;
  left: 128px;
  width: 169px;
  height: 29px;
`;
const MainRoot = styled.div`
  position: absolute;
  width: calc(100% - 378px);
  top: 150px;
  right: 50px;
  left: 328px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  height: 110vh;
  font-family: var(--font-poppins);
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 20px;
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
const DashboardRoot = styled.div`
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
}
`;
const Uploadjd = () => {
  return (
    <DashboardRoot>
    <MainRoot>
      <ChooseFolderWrapper>
        <ChooseFolder>Choose folder</ChooseFolder>
      </ChooseFolderWrapper>
      <DragFilesToUploadParent>
        <DragFilesTo>Drag files to upload</DragFilesTo>
        <TableruploadIcon alt="" src="/tablerupload.svg" />
      </DragFilesToUploadParent>
      <MainChild />
      <Uploading>Uploading</Uploading>
      <Uploadbar>
        <Upload>
          <ProjectManagerJddoc>Project manager JD.doc 32MB</ProjectManagerJddoc>
          <Percentagebar>
            <PercentagebarChild />
            <PercentagebarItem />
          </Percentagebar>
          <Uploadpercentage>
            <ProjectManagerJddoc>37% completed</ProjectManagerJddoc>
            <Kbsec>90KB/sec</Kbsec>
          </Uploadpercentage>
        </Upload>
        <HappyFileIcon alt="" src="/happy-file@2x.png" />
      </Uploadbar>
      <Fileupload>
        <FileUpload>File Upload</FileUpload>
        <MdiarrowLeftIcon alt="" src="/mdiarrowleft.svg" />
      </Fileupload>
    </MainRoot>
    <ProfileHeader clickedTab={"Create A Job Post"} />

    <SideBar1 clickedTab={"Add Job"} />
    </DashboardRoot>
  );
};

export default Uploadjd;

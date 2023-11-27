import styled from "styled-components";

const Profile = styled.div`
  position: relative;
  font-weight: 600;
  // margin-left: 18vw;
  margin-left: 285px;
`;
const Headername = styled.div`
  position: absolute;
  top: 37px;
  left: 330px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NotificationChild = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #f4f4f6;
  width: 50px;
  height: 50px;
  z-index: 0;
`;
const Notification1Icon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 12px;
  left: 13px;
  width: 25px;
  height: 25px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Notification1 = styled.div`
  position: absolute;
  top: 12px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const ProfileIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 100px;
  width: 74px;
  height: 74px;
`;
const Rightheader = styled.div`
  position: absolute;
  top: 13px;
  right: 33px;
  width: 174px;
  height: 74px;
`;
const ProfileheaderRoot = styled.div`
background-color: var(--color-white);
width: 100%;
height: 100px;
overflow: hidden;
text-align: left;
font-size: 28px;
color: rgb(10, 15, 33);
font-family: var(--font-inter);
margin-left: 285px;
`;
const Text = styled.div`
  position: relative;
  font-size: 28px;
  font-weight: 600;
  font-family: var(--font-inter);
  color: rgb(10, 15, 33);
`;

const ProfileHeader = (props) => {
  const { clickedTab } = props;
  return (
    <ProfileheaderRoot>
      <Headername>
      <Text>
          {clickedTab}
        </Text>
      </Headername>
      <Rightheader>
        <Notification1>
          <NotificationChild />
          <Notification1Icon alt="" src="/002notification1.svg" />
        </Notification1>
        <ProfileIcon alt="" src="/profile.svg" />
      </Rightheader>
    </ProfileheaderRoot>
  );
};

export default ProfileHeader;

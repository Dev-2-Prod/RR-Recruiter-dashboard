import { Img } from "../components/Img";
import { Text } from "../components/Text";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import styled from "styled-components";
const SideBar1 = (props) => {
  const activeSidebarText = {
    color: "#314ca3",
  };
  const inactiveSidebarText = {
    color: "#888EA2",
  };

  const { clickedTab } = props;
  // const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      label: "Dashboard",
      to: "/",
      icon: <Img className="h-[25px] w-[25px]" src="home-2.svg" alt="home" />,
    },
    {
      label: "Add Job",
      to: "/add-job",
      icon: (
        <Img
          className="h-[27px] w-[27px]"
          src="AddJob.svg"
          alt="carbonuserprofi"
        />
      ),
    },
    {
      label: "Candidates",
      to: "/candidates",
      icon: (
        <Img
          className="h-[25px] my-3 w-[25px]"
          src="CV.svg"
          alt="userThirtyOne"
        />
      ),
    },
    {
      label: "Jobs",
      to: "/jobs",
      icon: (
        <Img
          className="h-[25px] mb-[3px] w-[26px]"
          src="material-symbols_work-outline.svg"
          alt="group"
        />
      ),
    },
    {
      label: "Analytics",
      to: "/analytics",
      icon: (
        <Img
          className="h-[17px] w-[25px]"
          src="material-symbols_bubble-chart-outline.svg"
          alt="frame1000004265"
        />
      ),
    },
  ];

  const sideBarMenu1 = [
    {
      label: "Billing",
      to: "/billing",
      icon: (
        <Img
          className="h-[17px] w-[25px]"
          src="ph_note.svg"
          alt="frame1000004265"
        />
      ),
    },
    {
      label: "Settings",
      to: "/settingteam",
      icon: (
        <Img
          className="h-[17px] w-[25px]"
          src="settings.svg"
          alt="frame1000004265"
        />
      ),
    },
    {
      label: "Logout",
      to: "/logout",
      icon: (
        <Img
          className="h-[17px] w-[25px]"
          src="logout.svg"
          alt="frame1000004265"
        />
      ),
    },
  ];

  const RecruiterRoboLogo31Icon = styled.img`
    position: relative;
    width: 81px;
    height: 74px;
    object-fit: cover;
  `;
  const Logo = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7px 6px;
  `;
  const WebsiteName1 = styled.div`
    position: relative;
    font-size: 22px;
    line-height: 135.5%;
    font-weight: 600;
    display: inline-block;
    width: 83px;
    height: 64px;
    flex-shrink: 0;
  `;
  const WebsiteName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  const Logoheading = styled.div`
    position: absolute;
    top: 35px;
    left: 0px;
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;
    box-sizing: border-box;
    gap: 30px;
  `;
  const Topleft = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 278px;
    height: 177px;
    overflow: hidden;
    text-align: center;
    font-size: 14px;
    color: #161616;
    font-family: var(--font-poppins);
  `;

  const SidebarRoot = styled.div`
    background-color: var(--color-white);
    width: 278px;
    height: 100%;
    position: absolute;
    top: 0px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-lg);
    color: var(--color-lightslategray);
    font-family: var(--font-inter);
  `;

  // const Link = styled.a`
  // position: relative;
  // top: 177px;
  // padding: 10px 22px 10px 22px;
  // display: flex;
  // gap: 0px;
  // font-size: 22px;
  // font-weight: 500;
  // `;

  if (localStorage.getItem("imgUrl") === null) {
    localStorage.setItem("imgUrl", "images/img_ellipse28.png");
  }

  return (
    <SidebarRoot>
      <Topleft>
        <Logoheading>
          <Logo>
            <RecruiterRoboLogo31Icon
              alt=""
              src="/recruiter-robo-logo-3-1@2x.png"
            />
          </Logo>
          <WebsiteName>
            <WebsiteName1>Recruiter Robo</WebsiteName1>
          </WebsiteName>
        </Logoheading>
      </Topleft>
      <Menu
        menuItemStyles={{
          button: {
            // position: "relative",
            // top: "177px",
            // padding: "36px 22px 36px 42px",
            gap: "20px",
            // fontWeight: 500,
            // fontSize: "22px",
          },
        }}
        // className="flex flex-col font-inter items-center justify-end mb-[232px] md:pr-10 sm:pr-5 pr-[20px] pt-0.5 w-[85%]"
      >
        {sideBarMenu?.map((menu) => (
          <Link
            to={menu.to}
            key={menu.id}
            style={{
              position: "relative",
              top: "177px",
              padding: "10px 22px 10px 22px",
              display: "flex",
              gap: "0px",
              fontSize: "22px",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            <MenuItem
              {...menu}
              style={
                clickedTab === menu.label
                  ? activeSidebarText
                  : inactiveSidebarText
              }
            >
              {menu.label}
            </MenuItem>
          </Link>
        ))}
      </Menu>
      <Menu
        menuItemStyles={{
          button: {
            position: "relative",
            // top: "180px",
            // padding: "36px 22px 36px 42px",
            gap: "20px",
            // fontWeight: 500,
            // fontSize: "22px",
          },
        }}
        // className="flex flex-col font-inter items-center justify-end mb-[232px] md:pr-10 sm:pr-5 pr-[20px] pt-0.5 w-[85%]"
      >
        {sideBarMenu1?.map((menu1, i) => (
          <Link
            to={menu1.to}
            key={menu1.id}
            style={{
              position: "relative",
              top: "50vh",
              padding: "10px 22px 10px 22px",
              display: "flex",
              gap: "0px",
              fontSize: "22px",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            <MenuItem
              {...menu1}
              style={
                clickedTab === menu1.label
                  ? activeSidebarText
                  : inactiveSidebarText
              }
            >
              {menu1.label}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </SidebarRoot>
  );
};

export { SideBar1 };

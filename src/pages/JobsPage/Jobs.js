import styled from "styled-components";
// import BasicDateRangeCalendar from "../../components/Calendar";
// import LeftSidebar from "./Sidebar";
import ProfileHeader from "../ProfileHeader";
import { SideBar1 } from "../Sidebar1";
// import { ProfileHeader1 } from "../ProfileHeader1";
import { useCallback, useState } from "react";
import PortalPopup from "./JobsComponent/PortalPopup";
import JobFilterBy from "./JobsComponent/JobFilterBy";
import { useNavigate } from "react-router-dom";

import "./Main2.css";

const Main = styled.div`
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

const DashboardRoot = styled.div`
  position: fixed;
  background-color: #f5f7fa;
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  zoom: 75%;
  overflow: hidden;
}
`;

const Jobs = () => {
  // const [showCalendar, setShowCalendar] = useState(false);

  // const handleRadioClick = () => {
  //   setShowCalendar(true);
  // };

  // const handleCloseCalendar = () => {
  //   setShowCalendar(false);
  // };

  const [isJobFilterByOpen, setJobFilterByOpen] = useState(false);

  const openJobFilterBy = useCallback(() => {
    setJobFilterByOpen(true);
  }, []);

  const closeJobFilterBy = useCallback(() => {
    setJobFilterByOpen(false);
  }, []);

  const navigate = useNavigate();

  const onProjectManagerTextClick = useCallback(() => {
    navigate("/jobs-project-manager");
  }, [navigate]);

  return (
    <DashboardRoot>
      <Main>
        <div className="main2">
          <div className="resultsshowing">
            <div className="showing-1-8-of-container">
              <span>{`Showing 1-8 `}</span>
              <span className="of-35">of 35</span>
            </div>
          </div>
          <div className="container">
            <div className="uxui-designer-parent">
              <div className="uxui-designer">UX/UI Designer</div>
              <div className="april-2022">25 April, 2022</div>
              <div className="div37">780</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
              <div className="status">
                <div className="cancelled-parent">
                  <div className="cancelled">Cancelled</div>
                  <img
                    className="icon-chevron-right"
                    alt=""
                    src="/-icon-chevron-right.svg"
                  />
                </div>
                <div className="on-hold-wrapper">
                  <div className="on-hold">On-hold</div>
                </div>
                <div className="job-match-wrapper">
                  <div className="job-match">Job-match</div>
                </div>
              </div>
              <div className="div39">7.</div>
            </div>
            <div className="uxui-designer-group">
              <div className="uxui-designer1">UX/UI Designer</div>
              <div className="cancelled-wrapper">
                <div className="cancelled">Cancelled</div>
              </div>
              <div className="may-2022">18 May, 2022</div>
              <div className="div40">589</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
              <div className="div42">8.</div>
            </div>
            <div className="backend-developer-parent">
              <div className="backend-developer1">Backend developer</div>
              <div className="job-match-container">
                <div className="cancelled">Job-match</div>
              </div>
              <div className="june-2022">23 June, 2022</div>
              <div className="div43">400</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
              <div className="div45">6.</div>
            </div>
            <div className="data-scientist-parent">
              <div className="data-scientist1">Data scientist</div>
              <div className="uploaded-wrapper">
                <div className="cancelled">Uploaded</div>
              </div>
              <div className="july-2022">22 July, 2022</div>
              <div className="div37">390</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
              <div className="div48">5.</div>
            </div>
            <div className="product-designer-parent">
              <div className="product-designer">Product designer</div>
              <div className="closed-wrapper">
                <div className="cancelled">Closed</div>
              </div>
              <div className="may-20221">08 May, 2022</div>
              <div className="div49">500</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
              <div className="div51">4.</div>
            </div>
            <div className="uxui-designer-container">
              <div className="uxui-designer2">UX/UI Designer</div>
              <div className="cancelled-container">
                <div className="cancelled">Cancelled</div>
              </div>
              <div className="may-20221">20 June, 2022</div>
              <div className="div52">199</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
              <div className="div48">3.</div>
            </div>
            <div className="project-manager-parent">
              <div
                className="project-manager1"
                onClick={onProjectManagerTextClick}
              >
                Project Manager
              </div>
              <div className="job-match-frame">
                <div className="cancelled">Job-match</div>
              </div>
              <div className="june-20222">03 June, 2022</div>
              <div className="div52">150</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
              <div className="div51">2.</div>
            </div>
            <div className="uxui-designer-parent1">
              <div className="uxui-designer3">UX/UI Designer</div>
              <div className="div51">1.</div>
              <div className="uploaded-container">
                <div className="cancelled">Uploaded</div>
              </div>
              <div className="may-20222">30 May, 2022</div>
              <div className="div59">300</div>
              <div className="editapply">
                <div className="edit">Edit</div>
                <div className="apply">Apply</div>
                <div className="div38">/</div>
              </div>
            </div>
            <div className="heading-line">
              <div className="job-roles">Job Roles</div>
              <div className="s-no">S No.</div>
              <div className="status1">Status</div>
              <div className="job-posted">Job Posted</div>
              <div className="actions">Actions</div>
              <div className="total-candidates">Total candidates</div>
            </div>
          </div>
          <div
            className="filters"
            onClick={openJobFilterBy}
            style={{ cursor: "pointer" }}
          >
            <div className="material-symbolsfilter-alt-ou-parent">
              <img
                className="material-symbolsfilter-alt-ou-icon"
                alt=""
                src="/materialsymbolsfilteraltoutline.svg"
              />
              <div className="cancelled">Filters</div>
            </div>
          </div>
          <div className="all">
            <div className="all-37">All 37</div>
            <div className="all-child" />
          </div>
          <div className="pages">
            <div className="next">
              <div className="next1">Next</div>
              <img className="arrow-icon" alt="" src="/arrow.svg" />
            </div>
            <div className="previous">
              <div className="previous1">Previous</div>
              <img className="arrow-icon1" alt="" src="/arrow1.svg" />
            </div>
            <div className="div61">3</div>
            <div className="div62">4</div>
            <div className="pages-child" />
            <div className="div63">1</div>
            <div className="div64">2</div>
          </div>
        </div>
        {isJobFilterByOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeJobFilterBy}
          >
            <JobFilterBy onClose={closeJobFilterBy} />
          </PortalPopup>
        )}
      </Main>
      <ProfileHeader clickedTab={"Jobs"} />

      <SideBar1 clickedTab={"Jobs"} />
    </DashboardRoot>
  );
};

export default Jobs;

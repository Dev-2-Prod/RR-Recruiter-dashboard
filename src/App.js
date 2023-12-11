import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/DashboardPage/Dashboard";
import AddJob from "./pages/AddJobPage/AddJob";
import Addjob from "./pages/AddJobPage/AddJob";
import Candidates from "./pages/CandidatesPage/Candidates";
import Jobs from "./pages/JobsPage/Jobs";
import Analytics from "./pages/AnalyticsPage/Analytics";
import BillingPreferences from "./pages/BillingPage/BillingPreferences";
import BillingOverview from "./pages/BillingPage/BillingOverview";
import BillingHistory from "./pages/BillingPage/BillingHistory";
import BillingPayment from "./pages/BillingPage/BillingPayment";
import TeamSetting from "./pages/SettingPage/Team_setting";
import WorkflowSetting from "./pages/SettingPage/Workflow_setting";
import ViewAllJobMatchCandidates from "./pages/JobsPage/ViewAllJobMatchCandidates";
import Uploadjd from "./pages/AddJobPage/uploadJD";
import AfterUplaodOrFillJD from "./pages/AddJobPage/AfterUplaodOrFillJD";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/add-job" element={<Addjob />} />
      <Route exact path="/uploadjd" element={<Uploadjd />} />
      <Route exact path="//afteruploadorfilljd" element={<AfterUplaodOrFillJD />} />
      <Route exact path="/candidates" element={<Candidates />} />
      <Route exact path="/jobs" element={<Jobs />} />
      <Route exact path="/jobs-project-manager" element={<ViewAllJobMatchCandidates />} />
      <Route exact path="/analytics" element={<Analytics />} />
      <Route exact path="/billing" element={<BillingOverview />} />
      <Route exact path="/billinghistory" element={<BillingHistory />} />
      <Route exact path="/billingpreferences" element={<BillingPreferences />} />
      <Route exact path="/billingpayment" element={<BillingPayment />} />
      <Route exact path="/settingteam" element={<TeamSetting />} />
      <Route exact path="/settingworkflow" element={<WorkflowSetting />} />
    </Routes>
  );
}
export default App;

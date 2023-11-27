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
// import Billing from "./pages/BillingPage/Billing_final";
import Billing1 from "./pages/BillingPage/BillingHistory";
import BillingPreferences from "./pages/BillingPage/BillingPreferences";
import Billing2 from "./pages/BillingPage/BillingOverview";
import Billing3 from "./pages/BillingPage/BillingPayment";
import BillingOverview from "./pages/BillingPage/BillingOverview";
import BillingHistory from "./pages/BillingPage/BillingHistory";
import BillingPayment from "./pages/BillingPage/BillingPayment";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/add-job" element={<Addjob />} />
      <Route exact path="/candidates" element={<Candidates />} />
      <Route exact path="/jobs" element={<Jobs />} />
      <Route exact path="/analytics" element={<Analytics />} />
      <Route exact path="/billing" element={<BillingOverview />} />
      <Route exact path="/billinghistory" element={<BillingHistory />} />
      <Route exact path="/billingpreferences" element={<BillingPreferences />}/>
      <Route exact path="/billingpayment" element={<BillingPayment />} />
    </Routes>
  );
}
export default App;

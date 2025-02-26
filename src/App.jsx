import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Header from "./Components/Header/Header";
import ReferAndEarn from "./Components/ReferandEarn/referandearn";
import Footer from "./Components/footer/Footer";
import FAQ from "./Components/faq/FAQ";

function App() {
  const [count, setCount] = useState(0); // Default to 0 instead of an empty array

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/referrals") // Updated API URL
      .then((res) => {
        setCount(res.data.count);
      })
      .catch((err) => {
        console.error("Error fetching referral count:", err);
      });
  }, []);

  return (
    <>
      <Header />
      {/* Pass referral count as a prop */}
      <ReferAndEarn referralCount={count} />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;

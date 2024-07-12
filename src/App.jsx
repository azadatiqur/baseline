import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Deliveries from "./components/Deliveries";
import MyDeliveriesAndUpcoming from "./components/MyDeliveriesAndUpcoming";
import CompleteDeliveriesSection from "./components/CompleteDeliveriesSection";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Deliveries />
      <MyDeliveriesAndUpcoming />
      <CompleteDeliveriesSection />
    </>
  );
};

export default App;

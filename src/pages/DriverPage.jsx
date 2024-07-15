import Header from "../components/Header";
import Deliveries from "../components/Deliveries";
import MyDeliveriesAndUpcoming from "../components/MyDeliveriesAndUpcoming";
import CompleteDeliveriesSection from "../components/CompleteDeliveriesSection";

const Driver = () => {
  return (
    <>
      <Header />
      <Deliveries />
      <MyDeliveriesAndUpcoming />
      <CompleteDeliveriesSection />
    </>
  );
};

export default Driver;

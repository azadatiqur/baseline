import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Deliveries from "./components/Deliveries";
import MyDeliveriesAndUpcoming from "./components/MyDeliveriesAndUpcoming";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Deliveries />
      <MyDeliveriesAndUpcoming />
    </>
  );
};

export default App;

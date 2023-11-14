import CheckoutForm from "../components/Checkout/CheckoutForm";
import CheckoutInformationModel from "../models/CheckoutInformation";

const CheckoutInformation: CheckoutInformationModel = {
  firstName: "",
  lastName: "",
  billingAddress: { country: "Select Country", address: "", number: "" },
  deliveryAddress: { country: "Select Country", address: "", number: "" },
  deliveryDate: "",
  observations: "",
  paymentMethod: "cash",
  recommended: false,
};

const CheckOutPage = () => {
  return <CheckoutForm id={null} checkoutInformation={CheckoutInformation} />;
};

export default CheckOutPage;

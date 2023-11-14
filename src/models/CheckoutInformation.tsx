import AddressModel from "./Address";


class CheckoutInformationModel {
  firstName: string;
  lastName: string;
  billingAddress: AddressModel;
  deliveryAddress: AddressModel;
  deliveryDate: string;
  observations: string;
  paymentMethod: string;
  recommended: boolean;

  constructor(
    firstName: string,
    lastName: string,
    billingAddress: AddressModel,
    deliveryAddress: AddressModel,
    deliveryDate: string,
    observations: string,
    paymentMethod: string,
    recommended: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.billingAddress = billingAddress;
    this.deliveryAddress = deliveryAddress;
    this.deliveryDate = deliveryDate;
    this.observations = observations;
    this.paymentMethod = paymentMethod;
    this.recommended = recommended;
  }
}

export default CheckoutInformationModel;

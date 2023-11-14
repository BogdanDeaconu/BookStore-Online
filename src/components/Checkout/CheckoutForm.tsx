import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Checkout.module.scss";
import CheckoutInformationModel from "../../models/CheckoutInformation";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ordersActions } from "../../context/ordes-slice";
import { cartActions } from "../../context/cart-slice";

import ConfirmModal from "./ConfirmModal";

import useForm from "../../hooks/use-form";

const thisFormPosibleErrors = {
  firstName: "",
  lastName: "",
  billingAddress: {
    number: "",
    address: "",
  },
  deliveryAddress: {
    number: "",
    address: "",
  },
};

const CheckoutForm: React.FC<{
  id: number;
  checkoutInformation: CheckoutInformationModel;
}> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: any) => state.cart);

  const [isSameAddressChecked, setIsSameAddressChecked] = useState(false);
  const {
    formData,
    formErrors,
    handleInputChange,
    handleSelectChange,
    handleFormReset,
    handleTextareaChange,
    handleSubmit,
  } = useForm(
    {
      ...props.checkoutInformation,
      billingAddress: {
        ...props.checkoutInformation.billingAddress,
      },
      deliveryAddress: {
        ...props.checkoutInformation.deliveryAddress,
      },
    },
    thisFormPosibleErrors
  );

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSameAddressChange = (event) => {
    setIsSameAddressChecked(event.target.checked);

    if (event.target.checked) {
      const billingAddress = { ...formData.billingAddress };
      handleInputChange({
        target: {
          id: "deliveryAddress_country",
          value: billingAddress.country,
        },
      } as React.ChangeEvent<HTMLInputElement>);
      handleInputChange({
        target: {
          id: "deliveryAddress_address",
          value: billingAddress.address,
        },
      } as React.ChangeEvent<HTMLInputElement>);
      handleInputChange({
        target: {
          id: "deliveryAddress_number",
          value: billingAddress.number,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      handleInputChange({
        target: {
          id: "deliveryAddress_country",
          value: "",
        },
      } as React.ChangeEvent<HTMLInputElement>);
      handleInputChange({
        target: {
          id: "deliveryAddress_address",
          value: "",
        },
      } as React.ChangeEvent<HTMLInputElement>);
      handleInputChange({
        target: {
          id: "deliveryAddress_number",
          value: "",
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleCancel: () => void = () => {
    setIsModalOpen(false);
    setIsConfirmed(false);
  };

  const handleConfirm: () => void = () => {
    setIsModalOpen(false);
    setIsConfirmed(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
    const checkout = handleSubmit(event);

    dispatch(
      ordersActions.addOrder({
        id: props.id ?? Math.random(),
        items: cart.items,
        status: "In shipment",
        title: "#" + Math.floor(Math.random() * 100000),
        price: cart.totalAmount,
        quantity: cart.totalQuantity,
        checkoutInformation: checkout,
      })
    );
    dispatch(cartActions.cleartCart());
    navigate("/orders");
  };

  return (
    <>
      <ConfirmModal
        isOpen={isModalOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
      <div className={styles.checkout}>
        <div className={styles.image} />

        <div className={styles.content}>
          <div className={styles.title}>
            <h1> Order Details</h1>
          </div>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <h2> Contact Details </h2>
            <div className={styles.contact}>
              <input
                type="text"
                id="firstName"
                placeholder={
                  formErrors.firstName ? formErrors.firstName : "First Name"
                }
                value={formData.firstName}
                onChange={handleInputChange}
                className={formErrors.firstName && styles.input_error}
                required
              />

              <input
                type="text"
                id="lastName"
                placeholder={
                  formErrors.lastName ? formErrors.lastName : "Last Name"
                }
                value={formData.lastName}
                onChange={handleInputChange}
                className={formErrors.lastName && styles.input_error}
                required
              />
            </div>
            <h2>Billing Address</h2>
            <div className={styles.address}>
              <select
                id="billingAddress_country"
                name="billingAddress_country"
                onChange={handleSelectChange}
                value={formData.billingAddress.country}
              >
                <option value="Country Selection">Country Selection</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <input
                type="text"
                id="billingAddress_address"
                placeholder={
                  formErrors.billingAddress.address
                    ? formErrors.billingAddress.address
                    : "Address"
                }
                value={formData.billingAddress.address}
                onChange={handleInputChange}
                className={
                  formErrors.billingAddress.address && styles.input_error
                }
                required
              />
              <input
                type="text"
                id="billingAddress_number"
                placeholder={
                  formErrors.billingAddress.number
                    ? formErrors.billingAddress.number
                    : "Phone Number"
                }
                value={formData.billingAddress.number}
                onChange={handleInputChange}
                className={
                  formErrors.billingAddress.number && styles.input_error
                }
                required
              />
              <div>
                <input
                  type="checkbox"
                  id="delivery_address"
                  value="dfg"
                  checked={isSameAddressChecked}
                  onChange={handleSameAddressChange}
                />
                <div className={styles.checkbox}>
                  <label htmlFor="delivery_address">
                    Use addres for delivery
                  </label>
                </div>
              </div>
            </div>
            {!isSameAddressChecked && (
              <>
                <h2> Delivery Address</h2>
                <div className={styles.address}>
                  <select
                    id="deliveryAddress_country"
                    name="country"
                    onChange={handleSelectChange}
                    value={formData.deliveryAddress.country}
                  >
                    <option value="Country Selection">Country Selection</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                  </select>
                  <input
                    type="text"
                    id="deliveryAddress_address"
                    placeholder={
                      formErrors.deliveryAddress.address
                        ? formErrors.deliveryAddress.address
                        : "Address"
                    }
                    value={formData.deliveryAddress.address}
                    onChange={handleInputChange}
                    className={
                      formErrors.deliveryAddress.address && styles.input_error
                    }
                    required
                  />
                  <input
                    type="text"
                    id="deliveryAddress_number"
                    placeholder={
                      formErrors.deliveryAddress.number
                        ? formErrors.deliveryAddress.number
                        : "Phone Number"
                    }
                    value={formData.deliveryAddress.number}
                    onChange={handleInputChange}
                    className={
                      formErrors.deliveryAddress.number && styles.input_error
                    }
                    required
                  />
                </div>
              </>
            )}
            <h2> Payment Type</h2>
            <div className={styles.payment}>
              <div className={styles.payment_type}>
                <input
                  type="radio"
                  id="paymentMethod"
                  name="card"
                  value="online"
                  checked={formData.paymentMethod == "online"}
                  onChange={handleInputChange}
                />
                <label htmlFor="card">Online</label>
              </div>
              <div className={styles.payment_type}>
                <input
                  type="radio"
                  id="paymentMethod"
                  name="card"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleInputChange}
                />
                <label htmlFor="cash">Cash</label>
              </div>
            </div>
            <h2> Delivey Date</h2>
            <div className={styles.delivery_date}>
              <input
                type="date"
                id="deliveryDate"
                name="date"
                value={formData.deliveryDate}
                onChange={handleInputChange}
              />
            </div>
            <h2> Observation</h2>
            <div className={styles.observation}>
              <textarea
                id="observations"
                name="observation"
                rows={4}
                cols={50}
                placeholder="Observation"
                value={formData.observations}
                onChange={handleTextareaChange}
              ></textarea>
            </div>
            <h2> Would You Recommend Us? </h2>
            <div className={styles.recommend}>
              <input
                type="checkbox"
                id="recommended"
                name="recommend"
                value="yes"
                checked={formData.recommended}
                onChange={handleInputChange}
              />
              <label htmlFor="yes">Would you recommend us?</label>
              <br />
            </div>
            <div className={styles.button}>
              <button
                type="reset"
                className={styles.reset_button}
                onClick={handleFormReset}
              >
                Reset
              </button>
              <button type="submit" className={styles.submit_button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

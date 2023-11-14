import styles from "./ConfirmModal.module.scss";
import ReactDOM from "react-dom";

const Backdrop: React.FC = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay: React.FC<{
  onCancel: () => void;
  onConfirm: () => void;
}> = (props) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <span>Confirmation</span>
        <p> Confirm order details changes?</p>
      </header>
      <div className={styles.actions}>
        <button className={styles.cancel_button} onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.confirm_button} onClick={props.onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

const ConfirmModal: React.FC<{
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}> = (props) => {
  return (
    <>
      {props.isOpen &&
        ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop-root")!
        )}
      {props.isOpen &&
        ReactDOM.createPortal(
          <ModalOverlay
            onCancel={props.onCancel}
            onConfirm={props.onConfirm}
          />,
          document.getElementById("modal-root")!
        )}
    </>
  );
};

export default ConfirmModal;

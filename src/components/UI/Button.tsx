import { PropsWithChildren } from "react";

import classes from "./Button.module.scss";

const Button: React.FC<PropsWithChildren<{}>> = (props) => {
  return <div className={classes.button}>{props.children}</div>;
};

export default Button;
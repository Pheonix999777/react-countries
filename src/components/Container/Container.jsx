import sty from "./style.module.scss";

export let Container = ({ children }) => {
  return <div className={sty.container}>{children}</div>;
};

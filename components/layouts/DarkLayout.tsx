import { FC } from "react";

type Props = {
  children?: React.ReactNode
};


const DarkLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;

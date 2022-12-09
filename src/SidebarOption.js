import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";

function SidebarOption({ Icon, title, number, selected }) {
  const history = useHistory();

  return (
    <div onClick={()=> history.push("/")} className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;

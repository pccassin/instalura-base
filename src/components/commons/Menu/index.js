import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>Logo Area</MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>Links Area</MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>Buttons Area</MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

import Search from "../Search";

import { useNavigate, useLocation } from "react-router-dom";

import { Logo, Header } from "./styles";

import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import discord from "../../assets/discord.svg";

export default function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <Header>
      <nav>
        <img src={linkedin} alt="LinkedIn" />
        <img src={facebook} alt="Facebook" />
        <img src={discord} alt="Discord" />
      </nav>
      <Logo onClick={() => navigate("/")}>
        <img src={logo} alt="" />
        <h3>Ballerini Devs</h3>
      </Logo>
      {location.pathname === "/devs" ? <Search /> : ""}
    </Header>
  );
}

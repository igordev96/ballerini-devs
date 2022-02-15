import Search from "../Search";

import { Logo, Header } from "./styles";

import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import discord from "../../assets/discord.svg";

export default function Navbar() {
  return (
    <Header>
      <nav>
        <img src={linkedin} alt="LinkedIn" />
        <img src={facebook} alt="Facebook" />
        <img src={discord} alt="Discord" />
      </nav>
      <Logo>
        <img src={logo} alt="" />
        <h3>Ballerini Devs</h3>
      </Logo>
      {/* <Search /> */}
    </Header>
  );
}

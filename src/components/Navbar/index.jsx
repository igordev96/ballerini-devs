import Search from "../Search";

import { useNavigate, useLocation } from "react-router-dom";

import { Logo, Header } from "./styles";

import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import discord from "../../assets/discord.svg";
import Modal from "../Modal";

export default function Navbar({
  setDevs,
  devs,
  setFilteredDevs,
  buttonType,
  setButtonType,
  modalToggle,
  setModalToggle,
  editId,
  deleteRef,
}) {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <>
      <Header>
        <nav>
          <a href="https://www.linkedin.com/in/igordev96/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/rafaella.balleriniribeirogomes"
            target="_blank"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://discord.gg/ballerini" target="_blank">
            <img src={discord} alt="Discord" />
          </a>
        </nav>
        <Logo onClick={() => navigate("/")}>
          <img src={logo} alt="" />
          <h3>Ballerini Devs</h3>
        </Logo>
        {location.pathname === "/devs" ? (
          <Search
            setFilteredDevs={setFilteredDevs}
            devs={devs}
            setModalToggle={setModalToggle}
            setButtonType={setButtonType}
          />
        ) : (
          ""
        )}
      </Header>
      {modalToggle && (
        <Modal
          deleteRef={deleteRef}
          editId={editId}
          buttonType={buttonType}
          devs={devs}
          setDevs={setDevs}
          setModalToggle={setModalToggle}
        />
      )}
    </>
  );
}

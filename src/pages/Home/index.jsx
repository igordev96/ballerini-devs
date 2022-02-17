import developer from "../../assets/developer.svg";
import blob_bottom from "../../assets/blob_bottom.svg";
import blob_middle from "../../assets/blob_middle.svg";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { DevelopingGuy, LandingPage, LandingText } from "./styles";

export default function Home() {
  return (
    <LandingPage>
      <img className="blobs middle" src={blob_middle} alt="blobs" />
      <img className="blobs bottom" src={blob_bottom} alt="blobs" />
      <LandingText>
        <h1>O maior banco de devs do Brasil</h1>
        <h3>
          Não importa se front ou back end, fazer networking é muito importante.
          Faça parte da maior comunidade de desenvolvedores brasileiros.
        </h3>
        <Link to="/devs">
          <motion.button whileHover={{ scale: 1.1 }}>
            Entre Agora
            <motion.div className="line"></motion.div>
          </motion.button>
        </Link>
      </LandingText>
      <DevelopingGuy>
        <img src={developer} alt="Desenvolvedor programando" />
      </DevelopingGuy>
    </LandingPage>
  );
}


import Image from "../assets/img";
import { Conteiner } from "./styles";
import Input from "../components/input";
import ItemRepo from "../components/itemRepo";
import { useState } from "react";
import Button from "../components/button"

function App() {
const [repos,setRepos]=useState([]);

  return (
    <Conteiner>
     <Image/>
     <Input/>
    <ItemRepo/>
    <Button/>
    </Conteiner>
  );
}

export default App;


import Image from "../assets/img";
import { Conteiner } from "./styles";
import Input from "../components/input";
import ItemRepo from "../components/itemRepo";
import { useState } from "react";
import {api} from "../services/api"
import Button from "../components/button"

function App() {
const [currentRepo,setCurrentRepo]=useState('');
const [repos,setRepos]=useState([]);

const handeSearchRepo=async ()=>{
  const {data} =await api.get(`/repos/${currentRepo}`)

  if(data.id){

    const isExist=repos.find(repo=>repo.id===data.id)
    if(!isExist){
      setRepos(prev =>[...prev,data])
      setCurrentRepo('')
    }
    
  }
}
const handleRemove=(id)=>{
  const remove=repos.filter(repo=>repo.id!==id)
  setRepos(remove)
}

  
return (
  <Conteiner>
    <Image />
    <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
    <Button onClick={handeSearchRepo} />
    {repos.map((repo) => (
      <ItemRepo handleRemove={handleRemove} repo={repo} />
    ))}
  </Conteiner>
);
}

export default App;

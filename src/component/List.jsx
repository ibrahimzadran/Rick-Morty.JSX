import { useEffect, useState } from "react";
import Character from "./Character";
import './List.css'

const List = () => {
    const [characters, setCharacters] = useState([]);
   


    useEffect (()=>{
        async function fetchData(){
            const data = await fetch(`https://rickandmortyapi.com/api/character`);
            const {results}= await data.json();
            setCharacters(results);

        }
        fetchData();
    }, [characters.length]);


  return  (
    <div className="card-list">
     {
        characters.map((character)=>(
          <Character key={character.id} {...character}/>
          )
        )
      }
    </div>
  )

 
  }

export default List
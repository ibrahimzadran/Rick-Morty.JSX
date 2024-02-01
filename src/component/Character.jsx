import './Character.css'

function Character(character) {
    return (
      <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt="{character.name}" />
          <h3>`Origin: ${character.origin && character.origin.name}`</h3>
      </div>
    );
  }

export default Character
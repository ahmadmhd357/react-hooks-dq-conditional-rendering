import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [activeMenue, setActiveMenue] = useState(null)
  
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  
  function handlSetMenue(event){
    if (event.target.id === "user" ){setActiveMenue(()=> <Profile />) }
    else if(event.target.id === "photo"){setActiveMenue(()=><Photos />)}
    else if(event.target.id === "cocktail"){setActiveMenue(()=><Cocktails />)}
    else if(event.target.id === "pokemon"){setActiveMenue(()=><Pokemon />)}
  }
  
  
  return (
    <div>
      <MenuBar onSetMenue={handlSetMenue}  />
      {activeMenue}
    </div>
  );
}

export default MainBox;

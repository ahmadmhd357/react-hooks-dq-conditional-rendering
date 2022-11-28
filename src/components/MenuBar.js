import React, {useState} from "react";
function MenuBar({onSetMenue}) {
  const [active,setActive] = useState('')
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  function handlClick(event){
    setActive(event.target.id)
    onSetMenue(event)
  }
  return (
    <div className="ui four item menu">
      <span id="user" className={active==='user'?'item active':'item'} onClick={handlClick} >
        <i className="user large icon"  />
      </span>

      <span id="photo" className={active==='photo'?'item active':'item'} onClick={handlClick}  >
        <i className="photo large icon"/>
      </span>

      <span id="cocktail" className={active==='cocktail'?'item active':'item'} onClick={handlClick}  >
        <i className="cocktail large icon"/>
      </span>

      <span id="pokemon" className={active==='pokemon'?'item active':'item'} onClick={handlClick}  >
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;

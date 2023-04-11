import React, { useState } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"

const MobileMenuList = ({ menu }) => {
  console.log("MOBMENU: ", menu)

  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <button
        className='listElement'
        onClick={() => setIsActive(!isActive)}
      >
        {menu.menu}
        <span className='menuOpen'>
          {isActive ? '-' : '+'}
        </span>
      </button>
      {menu.subMenu && isActive && (
        <ul >
          {menu.subMenu.map((sm, i) => (
            <li key={i}>
              {menu.link[i] &&
                <AnchorLink
                  to={menu.link[i]}
                  title={sm}
                  stripHash={true}
                >
                </AnchorLink>
              }
              {!menu.link[i] && <a href='/'>{sm}</a>}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MobileMenuList
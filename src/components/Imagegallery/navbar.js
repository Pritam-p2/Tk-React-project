import React from 'react'
const Navbar = ({pass,filterItem}) => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

             {
              pass.map((curElem)=>{
                return(
                  <li className="nav-item" key={curElem.id}>
                  <button onClick={()=>filterItem(curElem)}><strong>{curElem}</strong></button>
              </li>
                )
              })
             }


            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React, { useState } from 'react'
import { SketchPicker } from 'react-color'


const ColorPicker = () => {
  // trigger to select box or body
  const [trigger, setTrigger] = useState("box")

  // Defalut color of UI
  const [currentColor, setCurrentColor] = useState("#D1D123")

  // hooks for background(body)
  const [currenth, setCurrenth] = useState(60)
  const [currents, setCurrents] = useState("71.67381974248926%")
  const [currentl, setCurrentl] = useState("47.852375%")

  // hooks for box
  const [currentboxh, setCurrentboxh] = useState(139)
  const [currentboxs, setCurrentboxs] = useState("71.67381974248926%")
  const [currentboxl, setCurrentboxl] = useState("47.852375%")

  

  // Slider function to use slide range
  const slider1 = (value) =>{
    if(trigger==="box"){
      return(
        setCurrentboxh(value)
      )
    }
    if(trigger==="background"){
      return(
        setCurrenth(value)
      )
    }
  }
  const slider2 = (value) =>{
    if(trigger==="box"){
      return(
        setCurrentboxs(value)
      )
    }
    if(trigger==="background"){
      return(
        setCurrents(value)
      )
    }
  }
  const slider3 = (value) =>{
    if(trigger==="box"){
      return(
        setCurrentboxl(value)
      )
    }
    if(trigger==="background"){
      return(
        setCurrentl(value)
      )
    }
  }

  // Ignitor of Sketch picker
  const handleOnChange = (color) => {
    setCurrentColor(color)
    let h = color.hsl['h']
    let s = color.hsl['s'] * 100 + "%"
    let l = color.hsl['l'] * 100 + "%"
    
    if (trigger === "background") {
      setCurrenth(h);
      setCurrents(s);
      setCurrentl(l);
      return null;
    }
    if (trigger === "box") {
      setCurrentboxh(h);
      setCurrentboxs(s);
      setCurrentboxl(l);
      return null;
    }
  }

  // body background style
  const backgroundStyle = {
    color: "black",
    backgroundColor: `hsl(${currenth}, ${currents}, ${currentl})`,
    height: "100vh",
    textAlign: "center",
  }

  // box background style
  const boxStyle = {
    backgroundColor: `hsl(${currentboxh}, ${currentboxs}, ${currentboxl})`,
    width: "500px",
    height: "100px",
    borderRadius: "6px"
  }



  return (
    <div style={backgroundStyle} onClick={() => setTrigger("background")}>
      <h1>React Color Picker</h1>
      <div className='container' style={boxStyle} onClick={(event) => { event.stopPropagation(); setTrigger("box") }}>

      </div>
      <div className='container mt-3 mb-3 p-0' style={{ display: 'flex', justifyContent: 'center', width: '226px' }} onClick={(event) => { event.stopPropagation(); setTrigger(trigger) }}>
        <SketchPicker
          color={currentColor}
          onChangeComplete={handleOnChange}
        />
      </div>

      {/* range sliders */}
      <div className='d-inline-block p-0' onClick={(event) => { event.stopPropagation(); setTrigger(trigger) }}>
        <input type='range' min={0} max={360} value={
          trigger === "box" ? currentboxh : currenth
          } onChange={(e) => slider1(e.target.value)} />
        <input type='range' value={trigger === "box" ? Number(currentboxs.replace(/%/g, '')) : Number(currents.replace(/%/g, ''))} onChange={(e) => slider2(e.target.value + "%")} />
        <input type='range' value={trigger === "box" ? Number(currentboxl.replace(/%/g, '')) : Number(currentl.replace(/%/g, ''))} onChange={(e) => slider3(e.target.value + "%")} />
      </div>
    </div>
  )
}

export default ColorPicker
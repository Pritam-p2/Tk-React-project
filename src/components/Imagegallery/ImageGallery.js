
import { useState } from 'react';
import Data from './data'
import Home from "./Home";
import Navbar from "./navbar";


// Data
const data = Data.cardData

// converting from json to unique category
const uniqueCategory = [...new Set(data.map((curElem)=>{
  return curElem.category;
})
),"All"]




function ImageGallery() {
  //const [Mmodel,setMmodel]= useState(false)
  //const [tempdata,setTempdata]=useState([])
  const[noOfElem,setnoOfElem]=useState(4);
  const[displayPics, setdisplayPics]=useState(data);

  // const getData = (name,category,description,image) => {
  //   let tempDate = [name,category,description,image];
  //   setTempdata([...tempDate])
  //   return setMmodel(true);
  // }
  

    // filtering data based on selected category
  const filterCategory = (category) => {
    setnoOfElem(4);
    if(category === "All"){
      setdisplayPics(data);
      return;
    }

    const filteredPics = data.filter((curElem)=>{
      return curElem.category === category;
    });
    setdisplayPics(filteredPics);

  }



  // pagination  
  const loadMore = () => {
    setnoOfElem(4+noOfElem)
  }
  const slice = displayPics.slice(0,noOfElem);

  return (
    <>
      <Navbar pass={uniqueCategory} filterItem={filterCategory}/>
      <Home slice={slice} loadMore={loadMore}   />
      
      
    
    </>

  );
}

export default ImageGallery;


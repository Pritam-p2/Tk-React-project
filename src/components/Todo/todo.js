import React, { useState, useEffect } from "react";
import "./style.css";




// get local storage data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
        return JSON.parse(lists); // data is local storage is changed to string using JSON.stringify in adding data to local
        // local storagge function. here we are changing them to array again. using JSON.parse 
    } else {
        return [];
    }
}

const Todo = () => {
    const [inputdata, setInputData] = useState("")
    const [items, SetItems] = useState(getLocalData()) // here initialdata is array
    const [count, setCount] = useState(0)


    // adding items
    const addItem = () => {
        if (!inputdata) {
            alert("please fill the data")
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata
            }
            SetItems([...items, myNewInputData])
            setInputData("")
        }
    }


    // detele items
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        })
        SetItems(updatedItems);

    }

    

    // adding data to local storage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items])


    // Add count
    const addCount = () => {
        setCount(count + 1)
        return
    }
    // del count
    const delCount = (id) => {
        if (count > 0) {
            return setCount(count - 1)
        }
        return
    }






    return (
        <>
            <div className="main-div">
                <div style={{ marginTop: "2rem" }} className="child-div">


                    <h1 style={{ color: "white", fontSize: "50px" }}><strong>TODO</strong></h1>

                    <h1 style={{ color: "white" }}>     Total Tasks: {items.length}</h1>
                    <h1 style={{ color: "green" }}>     Task Completed: {count}</h1>

                    <div className="addItems">
                        <input style={{fontSize:"3rem",width:"103%",height:"4.4rem"}}
                            type="text"
                            placeholder="✍ Add Item"
                            className="form-control"
                            value={inputdata}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <button style={{height:"3rem",width:"5rem",marginBottom:"-1rem",fontSize:"18px"}} onClick={addItem}><strong>ADD</strong></button>
                        {/* <i className="fa fa-plus add-btn" ></i> */}
                    </div>
                    {/* show our items  */}
                    <div className="showItems">
                        {items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <input style={{ padding: "0px", minWidth: "2rem", height: "2.4rem", marginTop: "0rem" }} type="checkbox" onClick={addCount} />
                                    <h3>{curElem.name}</h3>
                                    <div className="todo-btn">


                                        <i className="far fa-trash-alt add-btn" onClick={() => { deleteItem(curElem.id); delCount(curElem.id) }}
                                        ></i>
                                    </div>
                                </div>
                            )


                        })}
                    </div>



                </div>
            </div>
        </>
    );
};

export default Todo;
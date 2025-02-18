import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ToDoData from "../components/todoListData.js";

export default function ToDoApplication() {
    const [isNewTask, setIsNewTask] = useState("");
    const [isNewToDoList, setIsNewToDoList] = useState([]);
    const [editToDoList, setEditToDoList] = useState(false);
    const [isEditId, setIsEditId] = useState("");

    const handleInputChange = (event) => {
        setIsNewTask(event.target.value);
    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        if (!isNewTask) { alert("You must write something!"); }
        else if (isNewTask.length <= 3) {
            alert("You must write greater then three characters!");
        }
        else {
            const isNewValue = [...isNewToDoList, { id: Date.now(), task: isNewTask }];
            setIsNewToDoList(isNewValue);
            toast.success('Saved Successfully!');
            setIsNewTask("");
        }
    }

    const handleDeleteTodo = (id) => {
        const updatedList = isNewToDoList.filter((item) => item.id !== id);
        setIsNewToDoList(updatedList);
        toast('Saved Successfully!', { icon: '👏', style: { background: '#333', color: '#fff', } })
    }

    const handleEditTodo = (id) => {
        const editValue = isNewToDoList.find((item) => item.id === id);
        setIsNewTask(editValue.task);
        setEditToDoList(true);
        setIsEditId(editValue.id)
    }

    const cancleHandle = () => {
        setEditToDoList(false);
        setIsNewTask("");
    }

    const handleSaveEdit = () => { 
       const upDateList = isNewToDoList.map((item)=>{
        if(item.id === isEditId ){
            return {...isNewToDoList,  task: isNewTask}
        }
        return item;
       });
       setIsNewToDoList(upDateList);
       setIsNewTask("");
    }

    return (
        <main className="contaier">
            <Toaster position="top-center" />
            <div className="text-center">
                <h1 className=" text-2xl text-black fw-bold text-center my-4 ">Today Task</h1>
                <form>
                    <input className="mx-2 p-2 rounded bg-zinc" type="text" placeholder="Add a task..." autoComplete="off" name="addATask" value={isNewTask} onChange={handleInputChange} />
                    <button className="btn btn-primary p-2" type="submit" onClick={handleAddTodo}>Add</button>
                </form>
                <ToDoData newListData={isNewToDoList} deleteHandle={handleDeleteTodo} editHandle={handleEditTodo} editTrue={editToDoList} cancle={cancleHandle} editId={isEditId} saveEditHandle={handleSaveEdit} />
            </div>

        </main>
    );
}
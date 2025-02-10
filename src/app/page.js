"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaRegEdit, } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

export default function Home() {
  const [toDoList, setToDoList] = useState([
    { task: "Do My Homework" },
    { task: "Do My Bike Clean" }
  ]);
  const [newToDoList, setNewToDoList] = useState("");

  const handleInputChange = (event) => {
    setNewToDoList(event.target.value);
  }

  const handleAdd = () => {
    const existingName = toDoList.some((item) => item.task === newToDoList);
    if (existingName) {
      alert('Name already exists!');
      return;
    }
    else if (!newToDoList) { alert("You must write something!"); }
    else if (newToDoList.length <= 3) { alert("You must write greater then three characters!"); }
    else {
      setToDoList([...toDoList, { task: newToDoList }]);
      setNewToDoList("");
    }
  }

  const handleEdit = (task) => {
    const editList = toDoList.find((item) => item.task === task);
    setNewToDoList(editList.task);
  }

  const handleRevmove = (task) => {
    const updatedList = toDoList.filter((item) => item.task !== task);
    setToDoList(updatedList);
  }

  return (
    <main className="container">
      <div className="text-center">
        <h1 className="text-black fw-bold text-center my-4">My Todo List</h1>
        <div className="d-grid grid lg-col-6 mx-auto ">
          <div className="input-group mb-3">
            <input className="form-control" name="addtodolist" type="text" placeholder="Add a todo..." onChange={handleInputChange} value={newToDoList} />
            <button className="btn btn-primary w-full" type="button" onClick={handleAdd}>Add Task <FaPlus className="ml-4" size={14} onClick={handleAdd} />
            </button>
          </div>
        </div >
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {toDoList.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.task}</td>
                <td><FaRegEdit size={22} className="ml-4 cursor-pointer" onClick={() => handleEdit(todo.task)} /><MdOutlineDeleteSweep size={28} className="ml-4 " onClick={() => handleRevmove(todo.task)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
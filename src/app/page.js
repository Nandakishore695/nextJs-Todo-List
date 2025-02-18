"use client";
import ToDoApplication from "../components/todoListApplication.js"
import Image from 'next/image';
import githubIcon from "../../public/github-icon.svg";
export default function Home() {
  return (
    <>
    <header>
      <a href="https://github.com/Nandakishore695/nextJs-Todo-List"><Image src={githubIcon} width={70}/></a>
    </header>
    <main className="contaier">
     <ToDoApplication />
    </main>
    </>
  );
}
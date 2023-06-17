import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [formState, setFormState] = useState({
    email: null,
    password: null,
  });

  const handleChange = (ev) => {
    const name = ev.target.name;
    const vale = ev.target.value;

    setFormState({
      ...formState,
      [name]: vale,
    });
  };

  const handleOnSubmit = async (ev) => {
    ev.preventDefault();

    if (formState.email && formState.password) {
      const data = {
        email: formState.email,
        password: formState.password,
      };
      try {
        const res = await fetch("http://localhost:3001/users/login", {
          body: JSON.stringify(data),
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);
        alert("ok!");
      } catch (error) {
        alert("Errror.");
      }
    } else {
      alert("Email y 
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col border p-4  justify-around"
        >
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            className="p-2 rounded-md text-black"
            placeholder="Email"
            name="email"
            type="text"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            id="password"
            className="p-2 rounded-md text-black"
            placeholder="password"
            name="password"
            type="text"
          />

          <button
            className=" px-4 py-1 bg-white rounded-md text-black mt-4"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}

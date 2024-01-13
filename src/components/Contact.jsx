"use client";
import React, { useState, useRef } from "react";
import { FaRocketchat } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  const serviceID = "service_7czmcta";

  const templateID = "template_sxogh74";
  const publicKey = "kcfnsWzYnzolSfFG0";
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Umair",
      message: msg,
    };
    const promise = new Promise((resolve, reject) => {
      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully:", response);
          setname("");
          setemail("");
          setmsg("");
          resolve("Settings saved!");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          reject(new Error("Could not save."));
        });
    });
    toast.promise(promise, {
      loading: "Sending email...",
      success: "Message sent! 🚀",
      error: "Message failed to send",
    });
  };
  
  return (
    <div
      id="contact"
      className="flex flex-col md:mt-0 md:flex-row justify-center pb-10 z-10 md:pt-20 px-4 md:px-10 md:w-full"
    >
      <div className="md:w-1/2 p-8 text-center md:text-left">
        <h1 className="uppercase border border-blue-700 text-blue-300 bg-[#100b30] inline text-center rounded-full px-4 py-2">
          Contact Me
        </h1>
        <p className="text-4xl font-semibold text-gray-300 mt-8">
          Got a problem to solve?
        </p>
        <p className="text-sm text-gray-500 my-4">
          Get your space suit ready and tell me your ideas to develop your dream
          website.
        </p>
      </div>
      <div className="md:w-1/2 p-8">
        <form className="space-y-4" ref={form} onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block uppercase text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="mt-1 p-2 w-full text-white  bg-[#161a2c] rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block uppercase text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="mt-1 p-2 w-full text-white  rounded-md focus:outline-none focus:border-indigo-500 bg-[#161a2c]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block uppercase text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
              rows="4"
              className="mt-1 p-2 w-full text-white bg-[#161a2c]  rounded-md focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="flex justify-between items-center flex-col-reverse gap-4 md:gap-0 md:flex-row-reverse">
            <button
              type="submit"
              className="border  bg-white text-[#161a2c] p-4 rounded-sm transition duration-300 ease-in-out hover:bg-[#161a2c] hover:text-white cursor-pointer flex item-center justify-between gap-2"
            >
              Hit Me Up <FaRocketchat size={20} />
            </button>
            <h1 className="text-gray-100 flex items-center justify-between gap-2">
              <CgMail size={20} /> umairgopang123@gmail.com
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

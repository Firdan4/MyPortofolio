import React, { useState } from "react";

const ContactHeader = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataContact = { fullname, email, subject, message };
    console.log(dataContact);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full gap-10">
        <div className="mt-40">
          <h1 className="text-sm font-semibold text-gray-500">CONTACT US</h1>
          <p className="text-4xl font-semibold">
            Let's <span className="text-orange-500">Talk</span> With Me
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl border p-9 w-[80%] gap-10 md:w-[40%]">
          <div>
            <h1 className="text-xl font-semibold">Send us a Message</h1>
          </div>
          <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
            <label htmlFor="">
              Full Name<span className="text-blue-500">*</span>
            </label>
            <input
              className="rounded-md border-b border-orange-500 h-7"
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <label htmlFor="">
              E-Mail<span className="text-blue-500">*</span>
            </label>
            <input
              className="rounded-md border-b border-orange-500 h-7"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="">
              Subject<span className="text-blue-500">*</span>
            </label>
            <input
              className="rounded-md border-b border-orange-500 h-7"
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <label htmlFor="">
              Your message here<span className="text-blue-500">*</span>
            </label>
            <textarea
              className="rounded-md border-b border-orange-500 h-7"
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div className="flex justify-end mt-8">
              <ButtonSubmit submitProps="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;

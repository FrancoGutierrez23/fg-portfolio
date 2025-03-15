import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: userEmail,
      username: username,
      time: Date(Date.now().toLocaleString()),
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFeedback(t("Message sent successfully!"));
          setUserEmail("");
          setUsername("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setFeedback(t("Failed to send message. Please try again."));
        }
      );
  };

  return (
    <div className="contact-container pt-4 w-full pb-12">
      <h3 className="text-2xl text-white mb-4">{t("Contact Me")}</h3>
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder={t("Your email")}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="p-2 rounded focus:outline-none focus:border-b-3 focus:border-white bg-black border-b-2 border-b-indigo-500 text-white"
          required
        />
        <input
          type="text"
          placeholder={t("Your name")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded focus:outline-none focus:border-b-3 focus:border-white bg-black border-b-2 border-b-indigo-500 text-white"
          required
        />
        <textarea
          placeholder={t("Your message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 rounded focus:outline-none focus:border-b-3 focus:border-white bg-black border-b-2 border-b-indigo-500 text-white"
          required
        />
        <button type="submit" className="bg-indigo-500 text-white p-2 rounded">
          {t("Send")}
        </button>
      </form>
      {feedback && <p className="mt-4 text-white">{feedback}</p>}
    </div>
  );
};

export default Contact;

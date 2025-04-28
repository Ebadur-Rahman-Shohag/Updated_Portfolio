/*function Contact() {
  return (
    <div id="contact" className="max-w-md mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center mb-4">Get in Touch</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
*/
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // You can implement form submission logic here
    console.log("Form submitted:", { fullName, email, message });

    emailjs
      .sendForm("service_e32fl5f", "template_4rax8rn", form.current, {
        publicKey: "IZ6lbxloIseQ5IYOn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Clear form fields after submission
          setFullName("");
          setEmail("");
          setMessage("");
          setFormSubmitted(true);
          toast.success("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className=" max-w-md mx-auto my-8">
      <h1 className="border-b pb-5 text-3xl font-semibold text-center mb-4">
        Get in Touch
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            name="user_name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${formSubmitted && "opacity-50 cursor-not-allowed"
            }`}
          type="submit"
          value="Send"
          disabled={formSubmitted}
        >
          {formSubmitted ? "Message Sent" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;

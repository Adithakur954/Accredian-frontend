import React, { useState } from 'react';

const FAQs = [
  {
    question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work."
  },
  {
    question: "What is the minimum system configuration required?",
    answer: "The recommended system configuration includes at least 8GB RAM and a modern processor."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className='flex justify-between gap-5'>
      <div className="mb-4 flex flex-col justify-evenly text-[12px] w-fit gap-2 ">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Eligibility</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">How To Use?</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Terms & Conditions</button>
      </div>
      <div>
      {FAQs.map((faq, index) => (
        <div key={index} className="my-4 border-b">
          <div
            className="cursor-pointer text-lg font-semibold py-2 flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <p className="py-2 text-gray-600">{faq.answer}</p>
          )}
          
        </div>
      ))}
      </div>
      </div>
      <div className="text-center flex justify-between mt-6 bg-blue-600 p-4 rounded items-center ">
        <div>
        <h2 className="text-xl text-white font-semibold">
          Want to delve deeper into the program?
        </h2>
        <p className="my-2 text-white">Share your details to receive expert insights from our program team!</p>
        </div>
        <button className="bg-blue-100  text-blue-500 max-h-10 px-2 rounded">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
import { useState } from "react";
import axios from "axios"; 
import Hero from "../../assets/hero.png";

function ReferAndEarn() {
  const [show, setShow] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    friendName: "",
    friendEmail: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form before submitting
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Your name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Your email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.friendName.trim()) newErrors.friendName = "Friend's name is required";
    if (!formData.friendEmail.trim()) {
      newErrors.friendEmail = "Friend's email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.friendEmail)) {
      newErrors.friendEmail = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, form is valid
  };

  // Handle form submission
  // Import axios

const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const response = await axios.post("http://localhost:5000/api/referrals", formData);
      
      alert(response.data.message); // Show success message from backend
      setShow(false); // Close modal
      setFormData({ name: "", email: "", friendName: "", friendEmail: "" }); // Reset form
    } catch (error) {
      console.error("Submission Error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Something went wrong!");
    }
  }
};


  return (
    <div>
      <div className="h-40">
        <div className="flex justify-center items-center ">
          <ul className="flex justify-around py-4 px-8 m-5 text-xl w-158 bg-blue-200 rounded-4xl text-black">
            <li>Refer</li>
            <li>Benefits</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-around mx-56 rounded-2xl bg-blue-300 overflow-hidden p-5">
        <div className="w-1/2 flex justify-center flex-col items-center">
          <p className="font-bold text-black text-4xl p-2 mb-5 text-center">
            Get a chance to WIN exciting rewards by sharing with your friends
          </p>
          <button
            className="bg-green-500 text-white text-2xl font-bold py-2 px-4 my-2 rounded-3xl transition hover:bg-green-600"
            onClick={() => setShow(true)}
          >
            Refer Now
          </button>
        </div>

        <div>
          <img src={Hero} alt="Refer and Earn Hero" className="h-[400px]" />
        </div>
      </div>

      {/* Popup Modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-[4px]">
          <div className="bg-white bg-opacity-70 p-6 backdrop-blur-md rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold">Referral Rewards</h2>
            <p className="text-gray-600 mt-2">Invite your friends and earn amazing rewards!</p>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-4 px-2 py-1 border border-gray-300 rounded-md"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-4 px-2 py-1 border border-gray-300 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              {/* Friend's Name Input */}
              <input
                type="text"
                name="friendName"
                placeholder="Enter your friend's name"
                value={formData.friendName}
                onChange={handleChange}
                className="w-full mt-4 px-2 py-1 border border-gray-300 rounded-md"
              />
              {errors.friendName && <p className="text-red-500 text-sm">{errors.friendName}</p>}

              
              <input
                type="email"
                name="friendEmail"
                placeholder="Enter your friend's email"
                value={formData.friendEmail}
                onChange={handleChange}
                className="w-full mt-4 px-2 py-1 border border-gray-300 rounded-md"
              />
              {errors.friendEmail && <p className="text-red-500 text-sm">{errors.friendEmail}</p>}

              
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReferAndEarn;

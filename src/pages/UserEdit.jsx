import { useState, useEffect } from "react";
import Header from "../layouts/partials/header";
import { Link } from "react-router-dom";

export default function EditUser({ match }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDetails = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
      };
      setFormData(userDetails);
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User Data:", formData);
    // Perform API call to update the user
  };

  return (
    <div>
      <Header header={"Edit User"} link={"/users"} arrow={true} />
      <div className="max-w-screen-2xl mx-auto">
        <form onSubmit={handleSubmit} className="mx-4 sm:mx-9 my-3 bg-white p-6 rounded-md shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <Link
              to="/users"
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Update User
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// Users Component
import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function Users() {
  return (
    <div>
      <Header header={"Manage Users"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-2">
            <div className="max-w-xs w-full">
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search users..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              <button className="px-5 py-2 bg-gray-150 text-white border text-xs rounded-md font-medium">
                Export CSV
              </button>     
            </div>
          </div>
          <div className="my-3">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Phone</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((x, i) => (
                    <tr className="bg-white border-b hover:bg-gray-150/30" key={i}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="user"
                            className="w-8 h-8 rounded-full ring-2 ring-gray-150 object-cover"
                          />
                          <h1>John Doe</h1>
                        </div>
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">john@student.com</td>
                      <td className="px-6 py-4 max-w-xs truncate">(123)-4567890</td>
                      <td className="px-6 py-4 max-w-xs truncate"> 08 December 2019</td>
                      <td className="px-6 py-4 space-x-2 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                        <Link
                          to="/users/view"
                          className="font-medium text-gray-150 bg-gray-150 px-3 py-0.5 rounded-md hover:text-gray-250 bg-opacity-10"
                        >
                          View
                        </Link>
                        <button
                          className="font-medium text-red-600 bg-red-100 px-3 py-0.5 rounded-md hover:bg-red-200"
                        >
                          Block
                        </button>
                        <Link
                          to="/users/edit"
                          className="font-medium text-blue-600 bg-blue-100 px-3 py-0.5 rounded-md hover:bg-blue-200"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

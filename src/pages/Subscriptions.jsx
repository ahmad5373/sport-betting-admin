import Header from "../layouts/partials/header";

export default function Subscriptions() {
  return (
    <div>
      <Header header={"Manage Subscriptions"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-2">
            <div className="max-w-xs w-full">
              <div className="relative w-full sm:w-auto">
                {/* Search Input - Same as Users */}
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-5 py-2 bg-gray-150 text-white text-xs rounded-md">
                Export Reports
              </button>
            </div>
          </div>
          
          <div className="my-3">
            <div className="overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3">Plan</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Next Billing</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr className="bg-white border-b hover:bg-gray-150/30" key={i}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjXY44xj2kDrEwinLBEsObi_d-A57IoxIS8eWI3UfYK4WK8oapJJiVTcb8eM5cLJc-r8&usqp=CAU"
                            className="w-8 h-8 rounded-full ring-2 ring-gray-150"
                            alt="user"
                          />
                          <span>User {i+1}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">Premium</td>
                      <td className="px-6 py-4">
                        <span className="text-green-600 bg-green-100 px-2 py-1 rounded">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4">2024-03-01</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-blue-600 bg-blue-100 px-3 py-1 rounded-md">
                          Upgrade
                        </button>
                        <button className="text-purple-600 bg-purple-100 px-3 py-1 rounded-md">
                          Downgrade
                        </button>
                        <button className="text-red-600 bg-red-100 px-3 py-1 rounded-md">
                          Cancel
                        </button>
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
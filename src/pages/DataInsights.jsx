import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function DataInsights() {
  // Example API connections data
  const apiConnections = [
    { 
      name: 'SportRadar', 
      status: 'connected',
      lastFetch: '2024-02-20 14:30',
      endpoint: 'Player Statistics'
    },
    { 
      name: 'Betfair', 
      status: 'disconnected',
      lastFetch: '2024-02-19 09:15',
      endpoint: 'Betting Odds'
    },
    { 
      name: 'SportsFirst', 
      status: 'connected',
      lastFetch: '2024-02-20 15:45',
      endpoint: 'Live Scores'
    }
  ];

  // Example betting recommendations
  const recommendations = [
    {
      sport: 'NBA',
      recommendation: 'Over 225.5 Points',
      confidence: 'High',
      linkedUrl: 'https://fanduel.com/game123',
      lastUpdated: '2 hours ago'
    },
    {
      sport: 'NFL',
      recommendation: 'Patriots +3.5',
      confidence: 'Medium',
      linkedUrl: 'https://draftkings.com/game456',
      lastUpdated: '4 hours ago'
    }
  ];

  return (
    <div>
      <Header header={"Betting Insights Management"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          {/* API Connections Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">API Integrations</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2">
                  <tr>
                    <th className="px-6 py-3">Service</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Last Fetch</th>
                    <th className="px-6 py-3">Endpoint</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {apiConnections.map((api, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{api.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded ${api.status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {api.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{api.lastFetch}</td>
                      <td className="px-6 py-4">{api.endpoint}</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          {api.status === 'connected' ? 'Refresh' : 'Reconnect'}
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          Configure
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommendations Management */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Active Betting Recommendations</h2>
              <Link
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Create New Recommendation
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="border p-4 rounded-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-lg">{rec.sport}</h3>
                      <p className="text-sm text-gray-600">{rec.recommendation}</p>
                    </div>
                    <span className={`text-sm ${rec.confidence === 'High' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {rec.confidence} Confidence
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <a
                      href={rec.linkedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View on Partner Site
                    </a>
                    <div className="space-x-2">
                      <button className="text-gray-600 hover:text-gray-800">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Archive
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Last updated: {rec.lastUpdated}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Quality Dashboard */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Data Quality Monitor</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">Accuracy Rate</h3>
                <div className="text-2xl font-bold text-green-600">98.2%</div>
                <div className="text-sm text-gray-500">Last 7 days</div>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">Data Latency</h3>
                <div className="text-2xl font-bold text-blue-600">127ms</div>
                <div className="text-sm text-gray-500">Average response time</div>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">Trending Metrics</h3>
                <div className="text-2xl font-bold text-purple-600">24</div>
                <div className="text-sm text-gray-500">Active indicators</div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Adjust Trend Parameters</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="p-2 border rounded-md">
                    <option>Select Metric</option>
                    <option>Player Efficiency Rating</option>
                    <option>True Shooting Percentage</option>
                    <option>Usage Rates</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Weighting (%)"
                    className="p-2 border rounded-md"
                  />
                </div>
                <textarea
                  className="w-full p-2 border rounded-md h-32"
                  placeholder="Algorithm notes..."
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Update Prediction Model
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
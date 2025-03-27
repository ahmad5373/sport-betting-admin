import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function DataInsights() {
  // Example data matching the Figma structure
  const topBets = [
    {
      player: "Christian Bala",
      type: "over 1.5",
      matchup: "NY Knicks @ CLE Cavaliers",
      status: "Active"
    }
  ];

  const playerRecommendations = [
    {
      name: "Lewis Hintz",
      type: "OVER",
      proj: 15.4,
      line: 14.5,
      edge: "-1.8%",
      prob: "78%"
    },
    {
      name: "Deanna Abernathy",
      type: "UNDER",
      proj: 15.4,
      line: 14.5,
      edge: "+1.8%",
      prob: "42%"
    }
  ];

  const statusTabs = ["Advice", "AI Chat", "Saved", "Profile"];

  return (
    <div>
      <Header header={"Betting Insights Management"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          {/* Top Bets Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Top Bets</h2>
            {topBets.map((bet, index) => (
              <div key={index} className="border p-4 rounded-md mb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">**{bet.player} {bet.type}**</h3>
                    <p className="text-sm text-gray-600">{bet.matchup}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {bet.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Player Recommendations */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Player Projections</h2>
            {playerRecommendations.map((player, index) => (
              <div key={index} className="border p-4 rounded-md mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{player.name}</h3>
                  <span className={`px-3 py-1 rounded-full ${player.type === "OVER" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {player.type}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">PROJ</p>
                    <p className="font-medium">{player.proj}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">LINE</p>
                    <p className="font-medium">{player.line}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">EDGE</p>
                    <p className="font-medium">{player.edge}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">PROB</p>
                    <p className="font-medium">{player.prob}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommended Bets Section */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recommended Bets</h2>
              <Link
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Create New
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="border p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-medium">Jennifer Mode Thi NY Knicks</h3>
                    <p className="text-sm text-gray-600">Points:  Over 24.69</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    High Confidence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
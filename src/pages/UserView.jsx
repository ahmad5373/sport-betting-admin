import Header from '../layouts/partials/header'

export default function UserView() {
  const bettingStats = {
    totalBets: 47,
    activeBets: 5,
    favoriteTeam: {
      name: "NY Knicks",
      logo: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png"
    },
    totalPoints: 3280,
    averageProjection: 72.4,
    recentBets: [
      { date: "2024-03-15", matchup: "NY Knicks @ CLE Cavaliers", type: "Over 225.5", amount: "$150", status: "Active" },
      { date: "2024-03-14", matchup: "LAL Lakers vs BOS Celtics", type: "Moneyline", amount: "$200", status: "Pending" },
      { date: "2024-03-13", matchup: "GS Warriors vs DAL Mavericks", type: "Spread +3.5", amount: "$75", status: "Won" }
    ]
  };


  return (
    <div>
      <Header header={"User Details"} link={'/users'} arrow={true} />
      <div className="w-full mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className='space-y-1.5'>
            <div className='bg-white px-4 rounded-md'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                  <h3 className='text-sm py-2 cursor-pointer border-b border-gray-250 font-medium'>User Information</h3>
                 </div>
                <div>
                  <button className='px-5 py-1 border text-sm text-gray-250 rounded-md font-semibold'>Block</button>
                </div>
              </div>
            </div>
            <div className='bg-white px-4 xl:px-6 py-5'>
              <div className='flex items-center gap-4'>
                <div>
                  <img className='w-16 h-16 rounded-full ring-2 ring-green-150 object-cover border' src='https://images.pexels.com/photos/7289120/pexels-photo-7289120.jpeg?auto=compress&cs=tinysrgb&w=600' alt='users' />
                </div>
                <div>
                  <h2 className='text-xl font-semibold'>Jane Doe</h2>
                  <p className='text-xs text-gray-600'>Jane@singit.com</p>
                </div>
              </div>
            </div>
            <div className='bg-white w-full '>
              <div className='border-b px-4 xl:px-6 py-3'>
                <div>
                  <h5 className='uppercase text-xl font-bold'>Personal Information</h5>
                </div>
              </div>
              <div className='px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4'>
                {/* <div>
                  <p className='text-xs text-gray-600'>Date of Birth</p>
                  <h6 className='text-sm font-medium'>October 22, 2023</h6>
                </div> */}
                <div>
                  <p className='text-xs text-gray-600'>Address</p>
                  <h6 className='text-sm font-medium'>Florida, California</h6>
                </div>
                {/* <div>
                  <p className='text-xs text-gray-600'>Gender</p>
                  <h6 className='text-sm font-medium'>Male</h6>
                </div> */}
                <div>
                  <p className='text-xs text-gray-600'>Phone Number</p>
                  <h6 className='text-sm font-medium'>+546736748565</h6>
                </div>
                <div>
                  <p className='text-xs text-gray-600'>Registered On</p>
                  <h6 className='text-sm font-medium'>October 22, 2023</h6>
                </div>
              </div>
            </div>
          </div>
             {/* New Betting Statistics Section */}
             <div className='bg-white w-full '>
              <div className='border-b px-4 xl:px-6 py-3'>
                <div>
                  <h5 className='uppercase text-xl font-bold'>Betting Statistics</h5>
                </div>
              </div>
              <div className='px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
                {/* Total Bets Card */}
                <div className='border p-4 rounded-lg'>
                  <p className='text-xs text-gray-600 mb-1'>Total Bets</p>
                  <h3 className='text-2xl font-bold'>{bettingStats.totalBets}</h3>
                </div>

                {/* Active Bets Card */}
                <div className='border p-4 rounded-lg'>
                  <p className='text-xs text-gray-600 mb-1'>Active Bets</p>
                  <h3 className='text-2xl font-bold text-blue-600'>{bettingStats.activeBets}</h3>
                </div>

                {/* Favorite Team Card */}
                <div className='border p-4 rounded-lg'>
                  <p className='text-xs text-gray-600 mb-1'>Favorite Team</p>
                  <div className='flex items-center gap-2'>
                    <img 
                      src={bettingStats.favoriteTeam.logo} 
                      alt="team logo" 
                      className='w-8 h-8 object-contain'
                    />
                    <span className='font-medium'>{bettingStats.favoriteTeam.name}</span>
                  </div>
                </div>

                {/* Points Card */}
                <div className='border p-4 rounded-lg'>
                  <p className='text-xs text-gray-600 mb-1'>Total Points</p>
                  <h3 className='text-2xl font-bold text-green-600'>{bettingStats.totalPoints}</h3>
                </div>

                {/* Projection Card */}
                <div className='border p-4 rounded-lg'>
                  <p className='text-xs text-gray-600 mb-1'>Avg Projection</p>
                  <h3 className='text-2xl font-bold'>{bettingStats.averageProjection}%</h3>
                </div>
              </div>
            </div>

            {/* Recent Bets Section */}
            <div className='bg-white w-full '>
              <div className='border-b px-4 xl:px-6 py-3'>
                <h5 className='uppercase text-xl font-bold'>Recent Active Bets</h5>
              </div>
              <div className='px-4 xl:px-6 py-4'>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead className='text-left border-b'>
                      <tr>
                        <th className='pb-2'>Date</th>
                        <th className='pb-2'>Matchup</th>
                        <th className='pb-2'>Type</th>
                        <th className='pb-2'>Amount</th>
                        <th className='pb-2'>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bettingStats.recentBets.map((bet, index) => (
                        <tr key={index} className='border-b last:border-b-0'>
                          <td className='py-3'>{bet.date}</td>
                          <td className='py-3'>{bet.matchup}</td>
                          <td className='py-3'>{bet.type}</td>
                          <td className='py-3'>{bet.amount}</td>
                          <td className='py-3'>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              bet.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                              bet.status === 'Won' ? 'bg-green-100 text-green-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {bet.status}
                            </span>
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
      </div>
  )
}

"use client";

import * as React from 'react';

export default function HistoryPage() {
  // Mock data for the history
  const historyData = [
    { id: 1, type: 'Event Participation', description: 'Participated in Community Cleanup', date: '2024-09-15' },
    { id: 2, type: 'Donation', description: 'Donated ₱500 to Food Drive', date: '2024-09-10' },
    { id: 3, type: 'Volunteer Activity', description: 'Volunteered as a Teacher for Educational Workshop', date: '2024-08-28' },
    { id: 4, type: 'Event Participation', description: 'Participated in Beach Cleanup', date: '2024-08-20' },
  ];

  // Mock data for statistics
  const statistics = {
    totalEvents: 12,
    totalDonations: "₱3,500",
    totalVolunteerHours: 45,
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section with Statistics */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-6">Activity History</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-lime-700">{statistics.totalEvents}</h2>
            <p className="text-sm font-medium text-gray-500 mt-2">Events Attended</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-lime-700">{statistics.totalDonations}</h2>
            <p className="text-sm font-medium text-gray-500 mt-2">Total Donations</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-lime-700">{statistics.totalVolunteerHours}</h2>
            <p className="text-sm font-medium text-gray-500 mt-2">Volunteer Hours</p>
          </div>
        </div>
      </div>

      {/* Recent Activity List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        
        <ul className="divide-y divide-gray-200">
          {historyData.map((historyItem) => (
            <li key={historyItem.id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-700">{historyItem.description}</p>
                  <p className="text-sm text-gray-500 mt-1">{historyItem.type}</p>
                </div>
                <p className="text-sm text-gray-400">{historyItem.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

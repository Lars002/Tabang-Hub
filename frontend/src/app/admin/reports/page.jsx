"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Example Data
const adminReportData = [
  {
    id: 1,
    title: "Community Garden Project",
    organization: "GreenEarth",
    volunteersJoined: 50,
    status: "In Progress",
    progressData: [20, 30, 40, 50], // Example progress data
  },
  {
    id: 2,
    title: "Beach Clean-up",
    organization: "GreenEarth",
    volunteersJoined: 120,
    status: "Completed",
    progressData: [80, 90, 100, 100], // Example progress data
  },
  {
    id: 3,
    title: "Food Drive",
    organization: "FoodForAll",
    volunteersJoined: 75,
    status: "Pending",
    progressData: [0, 10, 20, 30], // Example progress data
  },
  {
    id: 4,
    title: "Water Conservation Campaign",
    organization: "GreenEarth",
    volunteersJoined: 60,
    status: "In Progress",
    progressData: [10, 25, 35, 50], // Example progress data
  },
  {
    id: 5,
    title: "Toy Donation Drive",
    organization: "FoodForAll",
    volunteersJoined: 30,
    status: "Completed",
    progressData: [50, 70, 90, 100], // Example progress data
  },
];

export default function AdminReportPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Handle opening and closing modal
  const handleViewClick = (eventId) => {
    const event = adminReportData.find((item) => item.id === eventId);
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  // Get all events from the selected organization
  const organizationEvents = adminReportData.filter(
    (event) => event.organization === selectedEvent?.organization
  );

  // Chart configuration
  const chartData = {
    labels: organizationEvents.map((event) => event.title), // Event titles as labels
    datasets: [
      {
        label: "Progress (%)",
        data: organizationEvents.map((event) => Math.max(...event.progressData)), // Max progress data for each event
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Volunteers Joined",
        data: organizationEvents.map((event) => event.volunteersJoined),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Group events by organization for display in the table
  const organizations = Array.from(new Set(adminReportData.map(event => event.organization)));

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10"> {/* Added margin top here */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Event Reports</h1>

        {/* Event Data Table */}
        <div>
          {organizations.map((organization) => (
            <div key={organization}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{organization}</h2>
              <table className="w-full border border-gray-300 rounded-lg shadow-sm mb-8">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Event Title</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Volunteers Joined</th>
                    <th className="px-6 py-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {adminReportData
                    .filter((event) => event.organization === organization)
                    .map((event) => (
                      <tr key={event.id} className="border-t hover:bg-gray-100">
                        <td className="px-6 py-4">{event.title}</td>
                        <td className="px-6 py-4">{event.status}</td>
                        <td className="px-6 py-4">{event.volunteersJoined}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleViewClick(event.id)}
                            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition-colors duration-200"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* Modal for Viewing Event Details */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-start z-50 mt-16"> {/* Added margin to move modal below navbar */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full overflow-y-auto max-h-[80vh]"> {/* Scrollable modal content */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">{selectedEvent.title}</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times; {/* Close button (X) */}
                </button>
              </div>

              {/* Event Progress Chart */}
              <div className="mb-6">
                <Bar data={chartData} options={chartOptions} />
              </div>

              {/* Event Details */}
              <div className="mt-6">
                <p className="text-lg text-gray-700">
                  <strong>Organization:</strong> {selectedEvent.organization}
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Status:</strong> {selectedEvent.status}
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Volunteers Joined:</strong> {selectedEvent.volunteersJoined}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

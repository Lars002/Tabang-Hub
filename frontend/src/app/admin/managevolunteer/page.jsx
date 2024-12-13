"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function ManageEvents() {
  const [activeEvents, setActiveEvents] = useState([
    { id: 1, name: "Community Clean-Up", date: "2024-09-10", location: "City Park" },
    { id: 2, name: "Food Drive", date: "2024-09-05", location: "Community Center" },
  ]);

  const [inactiveEvents, setInactiveEvents] = useState([
    { id: 3, name: "Tree Planting", date: "2024-08-20", location: "Forest Reserve" },
    { id: 4, name: "Charity Run", date: "2024-07-15", location: "Downtown" },
  ]);

  const handleDeactivate = (eventId) => {
    const event = activeEvents.find((e) => e.id === eventId);
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to deactivate "${event.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, deactivate",
    }).then((result) => {
      if (result.isConfirmed) {
        setActiveEvents(activeEvents.filter((e) => e.id !== eventId));
        setInactiveEvents([...inactiveEvents, event]);
        Swal.fire("Deactivated!", `"${event.name}" has been deactivated.`, "success");
      }
    });
  };

  const handleActivate = (eventId) => {
    const event = inactiveEvents.find((e) => e.id === eventId);
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to activate "${event.name}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, activate",
    }).then((result) => {
      if (result.isConfirmed) {
        setInactiveEvents(inactiveEvents.filter((e) => e.id !== eventId));
        setActiveEvents([...activeEvents, event]);
        Swal.fire("Activated!", `"${event.name}" has been activated.`, "success");
      }
    });
  };

  const handleView = (event) => {
    Swal.fire({
      title: `${event.name}`,
      html: `
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
      `,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Events</h1>

        {/* Active Events Table */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Events</h2>
        <table className="min-w-full border border-gray-300 mb-8">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">ID</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Event Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Date</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Location</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeEvents.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-4 py-2 text-black">{event.id}</td>
                <td className="px-4 py-2 text-black">{event.name}</td>
                <td className="px-4 py-2 text-black">{event.date}</td>
                <td className="px-4 py-2 text-black">{event.location}</td>
                <td className="px-4 py-2 text-black">
                  <button
                    onClick={() => handleView(event)}
                    className="bg-blue-600 text-white py-1 px-3 rounded-md shadow hover:bg-blue-500 mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDeactivate(event.id)}
                    className="bg-red-600 text-white py-1 px-3 rounded-md shadow hover:bg-red-500"
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Inactive Events Table */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Inactive Events</h2>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">ID</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Event Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Date</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Location</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inactiveEvents.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-4 py-2 text-black">{event.id}</td>
                <td className="px-4 py-2 text-black">{event.name}</td>
                <td className="px-4 py-2 text-black">{event.date}</td>
                <td className="px-4 py-2 text-black">{event.location}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleActivate(event.id)}
                    className="bg-green-600 text-white py-1 px-3 rounded-md shadow hover:bg-green-500"
                  >
                    Activate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function OrganizationManagement() {
  const [isPendingModalOpen, setIsPendingModalOpen] = useState(false);

  const activeOrganizations = [
    { id: 1, name: "Tech Innovators", contact: "tech@example.com" },
    { id: 2, name: "Health Heroes", contact: "health@example.com" },
  ];

  const inactiveOrganizations = [
    { id: 3, name: "Edu Builders", contact: "edu@example.com" },
    { id: 4, name: "Green Advocates", contact: "green@example.com" },
  ];

  const pendingOrganizations = [
    { id: 5, name: "Food Volunteers", contact: "food@example.com" },
    { id: 6, name: "Community Helpers", contact: "community@example.com" },
  ];

  const handleAccept = (orgName) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to accept "${orgName}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Accepted!", `"${orgName}" has been accepted.`, "success");
      }
    });
  };

  const handleDecline = (orgName) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to decline "${orgName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, decline",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Declined!", `"${orgName}" has been declined.`, "error");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Organization Management</h1>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsPendingModalOpen(true)}
          >
            Pending Organizations
          </button>
        </div>

        {/* Active Organizations Table */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Organizations</h2>
        <table className="min-w-full border border-gray-300 mb-8">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">ID</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Organization Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Contact</th>
            </tr>
          </thead>
          <tbody>
            {activeOrganizations.map((org) => (
              <tr key={org.id} className="border-t">
                <td className="px-4 py-2">{org.id}</td>
                <td className="px-4 py-2">{org.name}</td>
                <td className="px-4 py-2">{org.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Inactive Organizations Table */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Inactive Organizations</h2>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">ID</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Organization Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Contact</th>
            </tr>
          </thead>
          <tbody>
            {inactiveOrganizations.map((org) => (
              <tr key={org.id} className="border-t">
                <td className="px-4 py-2">{org.id}</td>
                <td className="px-4 py-2">{org.name}</td>
                <td className="px-4 py-2">{org.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending Organizations Modal */}
      {isPendingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pending Organizations</h2>
            <table className="min-w-full border border-gray-300 mb-4">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold">ID</th>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold">Organization Name</th>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold">Contact</th>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingOrganizations.map((org) => (
                  <tr key={org.id} className="border-t">
                    <td className="px-4 py-2 text-black">{org.id}</td>
                    <td className="px-4 py-2 text-black">{org.name}</td>
                    <td className="px-4 py-2 text-black">{org.contact}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleAccept(org.name)}
                        className="bg-green-600 text-white py-1 px-3 rounded-md shadow hover:bg-green-500 mr-2"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDecline(org.name)}
                        className="bg-red-600 text-white py-1 px-3 rounded-md shadow hover:bg-red-500"
                      >
                        Decline
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end">
              <button
                onClick={() => setIsPendingModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

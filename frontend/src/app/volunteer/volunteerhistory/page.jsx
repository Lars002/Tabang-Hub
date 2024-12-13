"use client";

import React from "react";

const volunteerHistoryData = [
  {
    id: 1,
    date: "2024-09-01",
    location: "Community Park",
    description: "Planted over 50 trees and removed litter from walking trails in collaboration with local environmental groups. Engaged with community members to educate them about the importance of urban forestry.",
  },
  {
    id: 2,
    date: "2024-08-15",
    location: "Local Shelter",
    description: "Worked in the kitchen preparing and serving meals for over 100 homeless individuals. Assisted with organizing donations and ensuring all visitors received adequate care and resources.",
  },
  {
    id: 3,
    date: "2024-07-30",
    location: "City Beach",
    description: "Led a team of volunteers in removing trash from the beach shoreline. Collected over 200 pounds of waste and collaborated with local authorities to promote recycling initiatives for coastal preservation.",
  },
  {
    id: 4,
    date: "2024-07-01",
    location: "Food Bank",
    description: "Sorted and packaged food for distribution to families in need. Managed inventory and worked closely with team leaders to ensure that essential items were prioritized for delivery routes.",
  },
  {
    id: 5,
    date: "2024-06-20",
    location: "Animal Shelter",
    description: "Cared for animals by feeding, grooming, and cleaning enclosures. Assisted in several successful adoptions by helping prospective pet owners understand their responsibilities and match them with suitable pets.",
  },
  {
    id: 6,
    date: "2024-05-10",
    location: "Local School",
    description: "Hosted an educational workshop on environmental sustainability for over 50 students. Engaged participants in hands-on activities such as upcycling projects and water conservation demonstrations.",
  },
];

export default function VolunteerHistory() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Volunteer History
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Thank you for your contributions! Here’s a record of your volunteer activities.
        </p>
        <ul className="space-y-6">
          {volunteerHistoryData.map((activity) => (
            <li
              key={activity.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {activity.date}
              </h2>
              <p className="text-gray-600">{activity.location}</p>
              <p className="mt-1 text-gray-700">{activity.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

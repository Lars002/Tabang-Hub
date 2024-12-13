"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function ManageSkill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [file, setFile] = useState(null);

  const skills = [
    { name: "Cooking", image: "/images/cooking.png" },
    { name: "Painting", image: "/images/painting.png" },
    { name: "Carpentry", image: "/images/carpentry.png" },
  ];

  const handleCreateSkillClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSkillName("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSaveSkill = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save this new skill?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "The new skill has been saved.", "success");
        handleCloseModal();
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Skills</h1>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleCreateSkillClick}
          >
            Create Skill
          </button>
        </div>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Skill Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Image</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.id} className="border-t">
                <td className="px-4 py-2 text-black">{skill.name}</td>
                <td className="px-4 py-2">
                  <img src={skill.image} alt={skill.name} className="h-10 w-10 rounded-md" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Skill Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Create Skill</h2>
            <form onSubmit={handleSaveSkill}>
              <div className="mb-4">
                <label htmlFor="skillName" className="block text-gray-700 mb-2">
                  Skill Name
                </label>
                <input
                  id="skillName"
                  type="text"
                  value={skillName}
                  onChange={(e) => setSkillName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="skillImage" className="block text-gray-700 mb-2">
                  Upload Image
                </label>
                <input
                  id="skillImage"
                  type="file"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Save Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

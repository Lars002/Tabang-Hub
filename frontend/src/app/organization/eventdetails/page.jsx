"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    location: "Atua ni",
    startDate: "Ugma",
    endDate: "Sunod Ugma",
    volunteersNeeded: "Isa ka baryohan",
    description: "Tabang Build aims to help the local community by building homes efficiently and quickly. Your support as a volunteer will make a great difference in achieving this goal.",
  });

  const images = [
    { src: "/images/balay.png", alt: "Building a house" },
    { src: "/images/bricks.png", alt: "Bricks for building" },
    { src: "/images/build.png", alt: "Building under construction" },
  ];

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save the changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Save the changes (you can add logic here to update event details)
        Swal.fire("Saved!", "Your changes have been saved.", "success");
        setIsEditModalOpen(false);
      }
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-5xl">
        <div className="lg:flex lg:space-x-8">
          {/* Image Carousel */}
          <div className="w-full lg:w-2/3">
            <div className="relative h-[500px]">
              <div className="overflow-hidden rounded-lg shadow-md h-full">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Carousel Controls */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                &#9664;
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                &#9654;
              </button>
            </div>
          </div>

          {/* Event Details */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Event Highlights</h2>
                <button
                  className="bg-lime-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={handleEditClick}
                >
                  Edit Event
                </button>
              </div>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <span className="text-gray-600">Location: </span>
                  <span className="ml-2 text-gray-800 font-medium">{eventDetails.location}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">Date Start: </span>
                  <span className="ml-2 text-gray-800 font-medium">{eventDetails.startDate}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">Date End: </span>
                  <span className="ml-2 text-gray-800 font-medium">{eventDetails.endDate}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">Volunteers Needed: </span>
                  <span className="ml-2 text-gray-800 font-medium">{eventDetails.volunteersNeeded}</span>
                </li>
              </ul>
            </div>

            {/* Event Description */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Event Description</h3>
              <p className="mt-4 text-base text-gray-600">{eventDetails.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Event Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Edit Event</h2>
            <form onSubmit={handleSaveChanges}>
              <div className="mb-4">
                <label htmlFor="editLocation" className="block text-gray-700 mb-2">
                  Location
                </label>
                <input
                  id="editLocation"
                  type="text"
                  value={eventDetails.location}
                  onChange={(e) => setEventDetails({ ...eventDetails, location: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editStartDate" className="block text-gray-700 mb-2">
                  Date Start
                </label>
                <input
                  id="editStartDate"
                  type="text"
                  value={eventDetails.startDate}
                  onChange={(e) => setEventDetails({ ...eventDetails, startDate: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editEndDate" className="block text-gray-700 mb-2">
                  Date End
                </label>
                <input
                  id="editEndDate"
                  type="text"
                  value={eventDetails.endDate}
                  onChange={(e) => setEventDetails({ ...eventDetails, endDate: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editVolunteers" className="block text-gray-700 mb-2">
                  Volunteers Needed
                </label>
                <input
                  id="editVolunteers"
                  type="text"
                  value={eventDetails.volunteersNeeded}
                  onChange={(e) => setEventDetails({ ...eventDetails, volunteersNeeded: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseEditModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-lime-700 text-white py-2 px-4 rounded-md shadow hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

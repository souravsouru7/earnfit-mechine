import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight, Edit2 } from "lucide-react";
import UserDetails from './UserDetails';

const SubscribersTable = ({ selectedUser, setSelectedUser }) => {
  const [subscribers] = useState([
    { id: 1, name: "Lokesh Yadav", email: "abc@email.com", status: "Active" },
    { id: 2, name: "Chutki", email: "abc@email.com", status: "Active" },
    { id: 3, name: "Zoffi Khan", email: "abc@email.com", status: "Active" },
    { id: 4, name: "Nikita Jain", email: "abc@email.com", status: "Inactive" },
    { id: 5, name: "Vidya Shet", email: "abc@email.com", status: "Inactive" },
    { id: 6, name: "Vidushi Pal", email: "abc@email.com", status: "Active" },
  ]);

  const [currentPage] = useState(1);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);

  const handleDetailsClick = (subscriber) => {
    setSelectedSubscriber(subscriber);
    setShowUserDetails(true);
    setSelectedUser(subscriber);
  };

  const handleClose = () => {
    setShowUserDetails(false);
    setSelectedSubscriber(null);
    setSelectedUser(null);
  };

  return (
    <div className="bg-black min-h-full">
      {showUserDetails ? (
        <UserDetails user={selectedSubscriber} onClose={handleClose} />
      ) : (
        <>
          {/* Action Bar */}
          <div className="flex justify-between px-4 py-3 border-b border-[#1E1E1E]">
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#1E1E1E] hover:bg-[#2a2a2a] rounded-md text-sm">
              Action on selected rows →
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#1E1E1E] hover:bg-[#2a2a2a] rounded-md text-sm">
              Filter by →
            </button>
          </div>

          {/* Table */}
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1E1E1E]">
                  <th className="p-4 text-left w-12">
                    <input
                      type="checkbox"
                      className="rounded bg-transparent border-gray-600"
                    />
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-white">
                    USER NAME
                    <button className="ml-2 px-2 py-1 bg-[#2a2a2a] rounded">
                      <Search className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-white">
                    EMAIL ID
                    <button className="ml-2 px-2 py-1 bg-[#2a2a2a] rounded">
                      <Search className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-white">
                    STATUS
                    <button className="ml-2 px-2 py-1 bg-[#2a2a2a] rounded">
                      <Search className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-white">
                    DETAILS
                    <button className="ml-2 px-2 py-1 bg-[#2a2a2a] rounded">
                      <Search className="h-4 w-4" />
                    </button>
                  </th>
                </tr>
              </thead>

              <tbody>
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-b border-[#1E1E1E] hover:bg-[#1E1E1E]">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded bg-transparent border-gray-600"
                      />
                    </td>
                    <td className="p-4 text-white text-sm">{subscriber.name || "-"}</td>
                    <td className="p-4 text-white text-sm">{subscriber.email}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          subscriber.status === "Active"
                            ? "bg-[#1a472a] text-[#4ade80]"
                            : "bg-[#4a1a1a] text-[#f87171]"
                        }`}
                      >
                        {subscriber.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button 
                        onClick={() => handleDetailsClick(subscriber)}
                        className="hover:bg-[#2a2a2a] p-2 rounded"
                      >
                        <Edit2 className="h-4 w-4 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-[#1E1E1E]">
              <div className="text-sm text-gray-400">
                Showing 1 to 09 of 100 Entries
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-400 hover:bg-[#1E1E1E] rounded">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded text-sm ${
                      currentPage === page
                        ? "bg-[#1E1E1E] text-white"
                        : "text-gray-400 hover:bg-[#1E1E1E]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-gray-400">...</span>
                <button className="px-3 py-1 text-gray-400 hover:bg-[#1E1E1E] rounded text-sm">
                  100
                </button>
                <button className="p-2 text-gray-400 hover:bg-[#1E1E1E] rounded">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SubscribersTable;
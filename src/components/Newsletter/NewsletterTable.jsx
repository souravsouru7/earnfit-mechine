import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const NewsletterTable = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 100;

  // Add mock data for the table
  const mockData = [...Array(9)].map((_, index) => ({
    id: `NM${1234 + index}`,
    title: 'New Offer',
    createdBy: 'Zoffi Khan',
    createdAt: '05-02-2024 04:30 PM',
    uploadedAt: '05-02-2024 04:30 PM',
    status: index % 4 === 0 ? 'Uploaded' : 
            index % 4 === 1 ? 'Draft' : 
            index % 4 === 2 ? 'Cancelled' : 'Scheduled'
  }));

  const handleNewClick = () => {
    navigate('/newsletter/layout');
  };

  const handleDetailsClick = (newsletterId) => {
    console.log('Navigating to:', `/newsletter/details/${newsletterId}`);
    navigate(`/newsletter/details/${newsletterId}`);
  };

  return (
    <div className="bg-black min-h-screen pt-24">
      {/* Action and Filter Row */}
      <div className="flex justify-between px-4 py-3 border-b border-[#1E1E1E]">
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#1E1E1E] hover:bg-[#2a2a2a] rounded-md">
          Action on selected rows →
        </button>
        <div className="flex gap-2">
          <button className="group flex items-center gap-2 px-4 py-2 text-white bg-[#1E1E1E] hover:bg-[#2a2a2a] rounded-md">
            <Filter className="h-4 w-4" />
            Filter by
            <span className="ml-1 text-gray-400 group-hover:text-white">→</span>
          </button>
          <button 
            onClick={handleNewClick}
            className="group flex items-center gap-2 px-4 py-2 text-white bg-[#1E1E1E] hover:bg-[#2a2a2a] rounded-md"
          >
            New
            <span className="ml-1 text-[#4ade80] group-hover:text-white">→</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr className="bg-[#1E1E1E] text-gray-200">
              <th className="p-4 text-left w-12">
                <input
                  type="checkbox"
                  className="rounded bg-transparent border-gray-600"
                />
              </th>
              <th className="p-4 text-left font-normal">
                MODULE ID
                <button className="ml-2 px-3 py-1 bg-[#2a2a2a] rounded-md text-sm hover:bg-[#333333]">
                  <Search className="h-4 w-4" />
                </button>
              </th>
              <th className="p-4 text-left font-normal">
                TITLE
                <button className="ml-2 px-3 py-1 bg-[#2a2a2a] rounded-md text-sm hover:bg-[#333333]">
                  <Search className="h-4 w-4" />
                </button>
              </th>
              <th className="p-4 text-left font-normal">
                CREATED BY
                <button className="ml-2 px-3 py-1 bg-[#2a2a2a] rounded-md text-sm hover:bg-[#333333]">
                  <Search className="h-4 w-4" />
                </button>
              </th>
              <th className="p-4 text-left font-normal">
                CREATED AT
                <button className="ml-2 px-3 py-1 bg-[#2a2a2a] rounded-md text-sm hover:bg-[#333333]">
                  <Search className="h-4 w-4" />
                </button>
              </th>
              <th className="p-4 text-left font-normal">
                UPLOAD AT
                <button className="ml-2 px-3 py-1 bg-[#2a2a2a] rounded-md text-sm hover:bg-[#333333]">
                  <Search className="h-4 w-4" />
                </button>
              </th>
              <th className="p-4 text-left font-normal">
                STATUS
                <button className="ml-2 px-3 py-1 bg-[#2a2a2a] rounded-md text-sm hover:bg-[#333333]">
                  <Search className="h-4 w-4" />
                </button>
              </th>
              <th className="p-4 text-left font-normal">
                DETAILS
                <button className="ml-2 px-3 py-1 bg-[#2a2a2a] rounded-md text-sm hover:bg-[#333333]">
                  <Search className="h-4 w-4" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E1E1E]">
            {mockData.map((row, index) => (
              <tr key={row.id} className="hover:bg-[#1E1E1E]">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="rounded bg-transparent border-gray-600"
                  />
                </td>
                <td className="p-4 text-gray-200">{row.id}</td>
                <td className="p-4 text-gray-200">{row.title}</td>
                <td className="p-4 text-gray-200">{row.createdBy}</td>
                <td className="p-4 text-gray-200">{row.createdAt}</td>
                <td className="p-4 text-gray-200">{row.uploadedAt}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      index % 4 === 0
                        ? "bg-[#1a472a] text-[#4ade80]"
                        : index % 4 === 1
                        ? "bg-[#1e293b] text-[#93c5fd]"
                        : index % 4 === 2
                        ? "bg-[#4a1a1a] text-[#f87171]"
                        : "bg-[#2e1065] text-[#c4b5fd]"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <button 
                    onClick={() => handleDetailsClick(row.id)}
                    className="hover:bg-[#2a2a2a] p-1 rounded"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-400"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4">
          <div className="text-sm text-gray-400">
            Showing 1 to 09 of 100 Entries
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:bg-[#1E1E1E] rounded">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-[#1E1E1E] text-white"
                    : "text-gray-400 hover:bg-[#1E1E1E]"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <span className="text-gray-400">...</span>
            <button className="px-3 py-1 text-gray-400 hover:bg-[#1E1E1E] rounded">
              {totalPages}
            </button>
            <button className="p-2 text-gray-400 hover:bg-[#1E1E1E] rounded">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterTable;

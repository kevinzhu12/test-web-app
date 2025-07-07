"use client";

import { useState } from 'react';

// Mock data for journal entries
const mockNotes = [
  {
    id: 1,
    title: "First Day on the New Project",
    date: "2025-07-07",
    content: "Initial setup of the monorepo was a success. Used Next.js for the frontend and Express for the backend. The setup with npm workspaces seems promising for managing dependencies. The backend is running on port 3001 and the frontend on 3000. I also learned about npm run dev, npm run build, and npm run start."
  },
  {
    id: 2,
    title: "Reflection on Q2 Goals",
    date: "2025-07-06",
    content: "Q2 was a period of intense learning. The shift to remote work required a new level of discipline and communication. Key achievements include completing the initial setup of the monorepo and understanding the deployment process to Vercel and EC2. Need to explore more about CI/CD pipelines."
  },
  {
    id: 3,
    title: "Ideas for the Design System",
    date: "2025-07-05",
    content: "Thinking about a new component library. Should we go with Radix UI primitives or build from scratch? A shared 'types' package is already in place, which is a good first step. Also, consider using Storybook for component documentation."
  },
  {
    id: 4,
    title: "Learning about Tailwind CSS",
    date: "2025-07-04",
    content: "Tailwind CSS is incredibly powerful for rapid UI development. The utility-first approach makes styling very efficient. Need to practice more with custom configurations and responsive design."
  },
  {
    id: 5,
    title: "Backend API Development",
    date: "2025-07-03",
    content: "Developed a simple Express API with TypeScript. Implemented CORS and dotenv for environment variables. The /api/hello endpoint is working as expected. Next step: integrate a database."
  },
];

export default function Journal() {
  const [selectedNote, setSelectedNote] = useState(mockNotes[0]);

  return (
    <div className="flex h-screen bg-gray-100 font-sans antialiased">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">My Journal</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            New Note
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {mockNotes.map((note) => (
            <a
              key={note.id}
              href="#"
              onClick={() => setSelectedNote(note)}
              className={`block p-3 rounded-lg transition-colors duration-200 ${selectedNote.id === note.id ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              <h3 className="text-base font-medium truncate">{note.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{note.date}</p>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-gray-50">
        <div className="p-6 border-b border-gray-200 bg-white shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">{selectedNote.title}</h2>
          <p className="text-sm text-gray-500 mt-2">{selectedNote.date}</p>
        </div>
        <article className="flex-1 overflow-y-auto p-6 text-gray-800 leading-relaxed">
          <p>{selectedNote.content}</p>
        </article>
      </main>
    </div>
  );
}

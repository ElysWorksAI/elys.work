"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function NewAppModal() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  // if route is not /, don't show the modal
  if (pathname !== "/") return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 m-4 animate-fade-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <FaTimes className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </button>

        <div className="text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            ✨ Special Early Access
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Meet getBayes.me 🎉
          </h2>

          <div className="mb-6">
            <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold mb-3">
              AI-Powered Statistics for Academic Papers
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Upload your research data and let our AI generate comprehensive
              statistical analyses tailored to your academic papers in{" "}
              <span className="underline decoration-primary decoration-2">
                just 5 minutes
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/15 dark:to-primary/10 rounded-xl p-4">
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                🚀 Early access members get:
                <br />
                • Priority support & special pricing
                <br />
                • Advanced AI statistical features
                <br />• Shape the future of research analytics
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "mailto:info@elys.work")}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 font-semibold shadow-lg shadow-primary/20"
            >
              Get Early Access Benefits
            </button>

            <a
              href="https://getbayes.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-primary/20 hover:border-primary/30 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
            >
              Explore getBayes.me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            Remind me later
          </button>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants";

import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey!, How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great, just working on some new features",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Theme</h2>
        <p className="text-sm text-base-content/70">
          Choose a theme for your chat interface
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors 
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}`}
              onClick={() => setTheme(t)}>
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
                style={{ position: "relative", zIndex: 1 }}>
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/*  testing grid -1 */}
        {/* <div className="mt-8 p-4 border rounded-lg max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Theme Test Grid</h3>
          <div className="grid grid-cols-6 gap-3">
            {THEMES.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`flex flex-col items-center p-2 rounded-lg transition
          ${theme === t ? "bg-base-200 shadow" : "hover:bg-base-200/50"}`}>
                <div
                  className="relative w-16 h-10 rounded-md overflow-hidden mb-1"
                  data-theme={t}
                  style={{ isolation: "isolate" }}>
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-xs font-medium truncate w-full text-center capitalize">
                  {t}
                </span>
              </button>
            ))}
          </div>
        </div> */}

        {/* testing grid -2 */}
        {/* <div className="flex gap-4 mt-8">
          <div data-theme="cupcake" className="p-6 rounded-xl">
            <div className="bg-primary text-primary-content p-2 rounded mb-2">
              Cupcake Primary
            </div>
            <div className="bg-secondary text-secondary-content p-2 rounded mb-2">
              Secondary
            </div>
            <div className="bg-accent text-accent-content p-2 rounded mb-2">
              Accent
            </div>
            <div className="bg-neutral text-neutral-content p-2 rounded mb-2">
              Neutral
            </div>
          </div>
          <div data-theme="retro" className="p-6 rounded-xl">
            <div className="bg-primary text-primary-content p-2 rounded mb-2">
              Retro Primary
            </div>
            <div className="bg-secondary text-secondary-content p-2 rounded mb-2">
              Secondary
            </div>
            <div className="bg-accent text-accent-content p-2 rounded mb-2">
              Accent
            </div>
            <div className="bg-neutral text-neutral-content p-2 rounded mb-2">
              Neutral
            </div>
          </div>
        </div> */}

        {/* preview section */}
        <h3 className="text-lg font-semibold mb-3">Preview</h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div className="p-4 bg-base-200">
            <div className="max-w-lg mx-auto">
              {/* Mock Chat UI */}
              <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                {/* Chat Header */}
                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">John Doe</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isSent ? "justify-end" : "justify-start"
                      }`}>
                      <div
                        className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${
                            message.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }
                        `}>
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`
                            text-[10px] mt-1.5
                            ${
                              message.isSent
                                ? "text-primary-content/70"
                                : "text-base-content/70"
                            }
                          `}>
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-base-300 bg-base-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-10"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

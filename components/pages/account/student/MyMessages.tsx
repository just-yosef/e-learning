"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MyMessages() {
  const [selectedChat, setSelectedChat] = useState("teacher");
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: "teacher",
      name: "Dr. Ahmed Ali",
      last: "Please submit your quiz today.",
    },
    {
      id: "classmates",
      name: "Study Group",
      last: "Let’s review chapter 5 together.",
    },
    {
      id: "support",
      name: "Technical Support",
      last: "Your issue has been resolved.",
    },
  ];

  const messages = {
    teacher: [
      {
        from: "teacher",
        text: "Please submit your quiz today.",
        time: "09:30 AM",
      },
      { from: "me", text: "Thanks, I’ll do it now.", time: "09:32 AM" },
    ],
    classmates: [
      {
        from: "me",
        text: "When should we start the review?",
        time: "11:00 AM",
      },
      { from: "classmates", text: "At 7 PM on Zoom.", time: "11:05 AM" },
    ],
    support: [
      {
        from: "support",
        text: "Your issue has been resolved.",
        time: "Yesterday",
      },
      { from: "me", text: "Thanks for the quick help!", time: "Yesterday" },
    ],
  };

  const handleSend = () => {
    if (!message.trim()) return;
    messages[selectedChat].push({ from: "me", text: message, time: "Now" });
    setMessage("");
  };
  const selectedchat = useMemo(
    () => chats.find((c) => c.id === selectedChat)?.name,
    [selectedChat]
  );
  return (
    <div className="w-full mx-auto">
      <Card className="shadow-md rounded-2xl overflow-hidden py-0 bg-transparent">
        <div className="flex flex-col sm:flex-row h-[70vh]">
          <div className="w-full sm:w-1/3 border-r border-muted p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Messages</h2>
            <div className="space-y-2">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedChat === chat.id
                      ? "border-blue-600 border-2 text-blue-600"
                      : "border border-muted border-2 hover:bg-gray-100"
                  }`}
                >
                  <div className="font-medium">{chat.name}</div>
                  <div className="text-sm opacity-80 truncate">{chat.last}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="border-b border-muted p-4">
              <h3 className="font-semibold">{selectedchat}</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages[selectedChat as number]?.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl text-sm shadow-sm ${
                      msg.from === "me"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-xs mt-1 opacity-70">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-muted p-4 flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

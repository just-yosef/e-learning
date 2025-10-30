"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Assignments() {
  const [assignments] = useState([
    {
      id: 1,
      title: "Assignment 1: Introduction to Programming",
      course: "Computer Science 101",
      dueDate: "Nov 5, 2025",
      status: "Pending",
      progress: 0,
      type: "Assignment",
    },
    {
      id: 2,
      title: "Quiz 1: Data Structures",
      course: "Computer Science 102",
      dueDate: "Nov 2, 2025",
      status: "Completed",
      progress: 100,
      type: "Quiz",
    },
    {
      id: 3,
      title: "Assignment 2: Web Development Basics",
      course: "Frontend Engineering",
      dueDate: "Nov 10, 2025",
      status: "In Progress",
      progress: 60,
      type: "Assignment",
    },
    {
      id: 4,
      title: "Quiz 2: JavaScript Fundamentals",
      course: "Frontend Engineering",
      dueDate: "Nov 8, 2025",
      status: "Pending",
      progress: 0,
      type: "Quiz",
    },
  ]);

  const getStatusColor = (status: "Completed" | "In Progress" | "Pending") => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-100";
      case "In Progress":
        return "text-blue-600 bg-blue-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="w-full  mx-auto">
      <Card className="shadow-md rounded-2xl overflow-hidden py-0 bg-transparent border-transparent">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Assignments & Quizzes
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {assignments.map((item) => (
              <div
                key={item.id}
                className="p-5 border rounded-2xl shadow-sm bg-white hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg dark:text-black text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.course}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(
                      item.status as "Completed" | "In Progress" | "Pending"
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-3">
                  <p>
                    Type: <span className="font-medium">{item.type}</span>
                  </p>
                  <p>
                    Due: <span className="font-medium">{item.dueDate}</span>
                  </p>
                </div>

                <Progress value={item.progress} className="h-2 mb-4" />

                <Button
                  className="w-full"
                  variant={
                    item.status === "Completed" ? "secondary" : "default"
                  }
                >
                  {item.status === "Completed"
                    ? "View Submission"
                    : "Start Now"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

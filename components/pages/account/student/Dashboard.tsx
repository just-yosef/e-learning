"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, ClipboardList, TrendingUp, User } from "lucide-react";

export default function Dashboard() {
  const [assignments] = useState([
    {
      id: 1,
      title: "Assignment 1: Intro to Programming",
      due: "Nov 5, 2025",
      progress: 60,
    },
    {
      id: 2,
      title: "Quiz 1: Data Structures",
      due: "Nov 2, 2025",
      progress: 100,
    },
  ]);

  const [courses] = useState([
    { id: 1, name: "Computer Science 101", instructor: "Dr. Ahmed Ali" },
    { id: 2, name: "Frontend Engineering", instructor: "Eng. Salma Hassan" },
  ]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl shadow-sm border">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Courses</p>
              <h3 className="text-2xl font-semibold">4</h3>
            </div>
            <BookOpen className="text-blue-600 w-8 h-8" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm border">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Assignments Due</p>
              <h3 className="text-2xl font-semibold">2</h3>
            </div>
            <ClipboardList className="text-yellow-500 w-8 h-8" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm border">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Average Grade</p>
              <h3 className="text-2xl font-semibold">87%</h3>
            </div>
            <TrendingUp className="text-green-500 w-8 h-8" />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm border">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Profile</p>
              <h3 className="text-2xl font-semibold">Complete</h3>
            </div>
            <User className="text-purple-600 w-8 h-8" />
          </CardContent>
        </Card>
      </div>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary">
            Upcoming Assignments
          </h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 grid-cols-1">
          {assignments.map((a) => (
            <Card key={a.id} className="shadow-sm border rounded-2xl py-0">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="text-sm text-gray-500">Due: {a.due}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      a.progress === 100
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {a.progress === 100 ? "Completed" : "In Progress"}
                  </span>
                </div>
                <Progress value={a.progress} className="h-2 mb-3" />
                <Button
                  className="w-full"
                  variant={a.progress === 100 ? "secondary" : "default"}
                >
                  {a.progress === 100 ? "View Submission" : "Continue"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary">My Courses</h2>
          <Button variant="outline" size="sm">
            Browse Courses
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <Card
              key={c.id}
              className="rounded-2xl border shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-1 text-primary">
                  {c.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Instructor: {c.instructor}
                </p>
                <Button className="w-full" variant="default">
                  Continue Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

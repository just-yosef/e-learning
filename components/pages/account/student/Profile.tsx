"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  BookOpen,
  GraduationCap,
  Edit3,
  TrendingUp,
} from "lucide-react";

export default function Profile() {
  const [user] = useState({
    name: "Mohamed Khaled",
    email: "mohamed.khaled@example.com",
    major: "Computer Science",
    university: "Cairo University",
    year: "3rd Year",
    gpa: 3.8,
    completedCourses: 12,
    inProgressCourses: 3,
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=60",
  });

  return (
    <div className="mx-auto space-y-3">
      <Card className="rounded-2xl shadow-sm border overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
        <CardContent className="-mt-16 flex flex-col sm:flex-row sm:items-end items-center gap-4 p-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">
              {user.major} — {user.university}
            </p>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
          <Button className="gap-2">
            <Edit3 size={18} /> Edit Profile
          </Button>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="rounded-2xl border shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="text-blue-600" />
              <h3 className="font-semibold text-lg">Academic Info</h3>
            </div>
            <p className="text-sm text-gray-600">
              Year: <span className="font-medium">{user.year}</span>
            </p>
            <p className="text-sm text-gray-600">
              GPA: <span className="font-medium">{user.gpa}</span>
            </p>
            <p className="text-sm text-gray-600">
              Major: <span className="font-medium">{user.major}</span>
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-green-600" />
              <h3 className="font-semibold text-lg">Course Overview</h3>
            </div>
            <p className="text-sm text-gray-600">
              Completed Courses:{" "}
              <span className="font-medium">{user.completedCourses}</span>
            </p>
            <p className="text-sm text-gray-600">
              In Progress:{" "}
              <span className="font-medium">{user.inProgressCourses}</span>
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-purple-600" />
              <h3 className="font-semibold text-lg">Performance</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Overall Progress</p>
            <Progress value={78} className="h-2 mb-2" />
            <p className="text-sm text-gray-500">78% course completion</p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl shadow-sm border">
        <CardContent className="p-5 space-y-3">
          <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
          <div className="flex items-center gap-3 text-gray-600">
            <User className="text-blue-600" size={18} />
            <span>{user.name}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="text-blue-600" size={18} />
            <span>{user.email}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

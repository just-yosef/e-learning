"use client"
import WrapperBody from "@/components/WrapperBody";
import { Suspense } from "react";
import ExploreCourses from "@/components/pages/home/ExploreCourses";
import AllCoursesSection from "@/components/pages/home/AllCoursesSection";
import AllSubjects from "@/components/pages/home/AllSubjects";
import Loader from "@/components/atoms/Loader";
export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <WrapperBody>
        <ExploreCourses />
        <AllCoursesSection />
        <AllSubjects />
      </WrapperBody>
    </Suspense>
  );
}

"use client";
import Course from "@/components/atoms/Course";
import { Separator } from "@/components/ui/separator";
import React from "react";
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import Courses from "@/helpers/coursesData";
import Loader from "@/components/atoms/Loader";
import Heading from "@/components/atoms/Heading";

const AllCoursesSection = () => {
  const { t } = useTranslation();
  const courses = new Courses();
  const { data, isLoading } = useQuery({
    queryFn: () => courses.getCoursesData(),
    queryKey: ["courses"],
    staleTime: 60_000,
  });

  return (
    <>
      <Heading title={t("allCourses")} />
      <Separator />
      {isLoading && <Loader />}
      <section className="my-5 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {data?.courses?.map((el) => (
          <Course
            // @ts-ignore
            id={el._id!}
            description={el.description}
            title={el.title}
            img={img}
          />
        ))}
      </section>
    </>
  );
};

export default React.memo(AllCoursesSection);

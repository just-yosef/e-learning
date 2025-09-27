import Subject from "@/models/subjects.model"
/* 
[
  {
    title: "الرياضيات",
    description: "مادة الرياضيات لشرح الجبر والهندسة وحل المسائل.",
    thumbnail: "https://example.com/math.png",
    category: "علمي",
    level: "الصف الأول الثانوي",
  },
  {
    title: "اللغة العربية",
    description: "مادة اللغة العربية لتعلم النحو والصرف والبلاغة والأدب.",
    category: "أدبي",
    level: "الصف الثاني الإعدادي",
  },
  {
    title: "العلوم",
    description: "مادة العلوم لدراسة الفيزياء والكيمياء والأحياء.",
    category: "علمي",
    level: "الصف الثالث الإعدادي",
  },
  {
    title: "التاريخ",
    description: "مادة التاريخ للتعرف على تاريخ مصر والعالم.",
    category: "أدبي",
    level: "الصف الأول الثانوي",
  },
  {
    title: "اللغة الإنجليزية",
    description: "مادة اللغة الإنجليزية لتعلم القواعد والمحادثة والقراءة.",
    category: "لغات",
    level: "الصف الخامس الابتدائي",
  },
]
*/

import { dbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnection();
        const courses = await Subject.find();
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ error: "Some Thing Went Wrong" }, { status: 500 });
    }
}


export async function POST(req: Request) {
    try {
        await dbConnection();
        const body = await req.json();
        const newCourse = await Subject.insertMany(body);
        return NextResponse.json(newCourse, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "خطأ في إضافة المادة" }, { status: 400 });
    }
}
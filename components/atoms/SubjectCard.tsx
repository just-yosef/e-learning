import { Book, Gauge, Info } from "lucide-react"
import { Card, CardContent, CardTitle } from "../ui/card"
import type { ISubject } from "@/models/subjects.model"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
const SubjectCard = ({ title, category, level, description }: ISubject) => {
    return (
        <Card className="relative gap-4">
            <CardTitle className="px-5"> {title} </CardTitle>
            <Separator />
            <CardContent>
                <h5 className="flex gap-2 my-4 text-sm">
                    <Info />
                    {description}
                </h5>

                <h5 className="flex gap-2 my-4">
                    <Gauge />
                    {level}
                </h5>
                <Badge variant={"green"} className="flex gap-2">
                    {category}
                </Badge>
            </CardContent>
            <Book className="absolute top-2 left-2 opacity-50" size={40} />
        </Card>
    )
}

export default SubjectCard
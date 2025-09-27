"use client"
import { Star, StarOffIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { useForm } from "react-hook-form"
import { Alert, AlertTitle } from "../ui/alert"

const RatingItem = () => {
    const [stars, setStart] = useState(1);
    const { register, handleSubmit,
        formState: { errors }
    } = useForm()
    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data);

        })}>
            <Card>
                <CardContent>
                    <h3 className="mb-4">
                        Rate This Course
                    </h3>
                    <section className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Star
                                fill={stars >= item ? "#ffd60a" : ""}
                                onMouseEnter={() => setStart(item)}
                            />
                        ))}
                        <input type="hidden" name="rateVal" value={stars} />
                        {stars}
                    </section>
                    <Input {...register("rateText", {
                        required: {
                            value: true,
                            message: "Pease Rate This"
                        }
                    })} className="my-2" />
                    <Button type="submit" className="mt-2"> اضف تقييم </Button>
                    {errors?.rate?.message && <>
                        <Alert className="mt-3">
                            <AlertTitle className="text-red-500"> Please Rate *</AlertTitle>
                        </Alert>
                    </>}
                </CardContent>
            </Card>
        </form>
    )
}

export default RatingItem
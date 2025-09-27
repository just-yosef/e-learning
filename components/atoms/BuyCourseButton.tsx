"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { useMutation, } from '@tanstack/react-query';
import axios from 'axios';
import Loader from './Loader';
import { useParams } from 'next/navigation';
import { useLoggedInUser } from '@/hooks/useLoggedInUser';
interface Props {
    price: number | string;
    courseTitle: string;
    courseDescription: string;
    imgs: string[];
    courseId: string;
    variant?: string
}
const BuyCourseButton = ({ courseDescription, courseTitle, price, imgs, courseId, variant = "blue", }: Props) => {
    const handelBuyCourse = async (body: any) => {
        try {
            const session = await (await axios.post(`/api/checkout`, body)).data;
            return session?.session
        } catch (err: any) {
            throw new Error(err)
        }
    }
    const { t } = useTranslation();
    const { mutate, data, isPending } = useMutation({
        mutationFn: handelBuyCourse
    })
    const { user } = useLoggedInUser();

    return (
        <Button disabled={isPending} onClick={() => mutate({ courseDescription, courseTitle, price: price.toString(), imgs, courseId, customerId: user! }, {
            onSuccess(data) {
                location.assign(data,)
            },
            // @ts-ignore
        })} variant={"default"} className="fixed bottom-5 left-5 p-8"> {!isPending ? `${t("bookCourse")} ${price}$` : <>
            <Loader />
        </>} </Button>
    )
}

export default BuyCourseButton
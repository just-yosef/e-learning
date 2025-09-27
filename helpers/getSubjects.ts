import axios from "axios";

export default async function getSubjects() {
    try {
        const res = await axios.get("http://localhost:3000/api/subjects")
        return res.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}
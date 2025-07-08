"use client"
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

function NotFoundPage(){
    const router = useRouter()

    return(
        <section>
            <div className="w-full min-h-screen flex flex-col gap-y-5 justify-center items-center">
                <p className="max-sm:text-4xl text-7xl text-center text-white font-bold">404 Not Found</p>
                <p className="max-sm:text-2xl text-3xl text-center text-white font-semibold">Page Under Maintenance</p>
                <Button onClick={()=>router.replace('/')} className="p-4" ><Home/>Back to Homepage</Button>
            </div>
        </section>
    )
}

export default  NotFoundPage;
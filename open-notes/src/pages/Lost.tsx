import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

function Lost() {
    const navigate = useNavigate();
    return (
        <div className='h-screen w-screen flex flex-col items-center justify-center font-sans overflow-hidden'>
            <img
                className='h-[clamp(260px,25vw,406px)] mb-10'
                src='https://stories.freepiklabs.com/storage/11939/Page-not-found-with-people-connecting-a-plug_Mesa-de-trabajo-1.svg'
                alt='404 Illustration (Something went wrong)'
            />

            <Button
                size="sm"
                variant="link"
                onClick={() => {
                    navigate('/')
                }}
            >
                <ArrowLeft/>
                Go back to the application
            </Button>
        </div>
    )
}

export default Lost
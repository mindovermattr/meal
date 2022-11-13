import { useState } from "react"


const useFetch =  (callback:Function)=>{

    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetching:Function = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e:any) {
            setError(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    return [fetching,isLoading,error]
}

export default useFetch
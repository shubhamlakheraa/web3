import { useRef, useCallback } from "react";


const useDebounce = (fn:Function, delay:number, immediate=false) => {

    const timerId = useRef<number | any> ();
    const debounce = useCallback(
        function (this:any){
            let context = this,
            args = arguments

            const callNow = immediate && !timerId.current
            clearTimeout(timerId.current)

            timerId.current = setTimeout(function () {
                timerId.current = null
                if(!immediate){
                    fn.apply(context, args)
                }
            }, delay)

            if(callNow) fn.apply(context, args)
        },
    [fn, delay, immediate]
    )


    return debounce

}

export default useDebounce;
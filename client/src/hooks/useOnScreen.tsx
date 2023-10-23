import { useState, useEffect } from "react";

const useOnScreen = (ref: any) => {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => {
            setIntersecting(entry.isIntersecting)
        }
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }

    }, [ref]);

    return isIntersecting;


}

export default useOnScreen;
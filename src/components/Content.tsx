import {useAppDispatch, useAppSelector} from "../redux/hooks.ts";
import {fetchRequest} from "../redux/slices/contentSlice.ts";
import {useEffect} from "react";


const Content = () => {

    const dispatch = useAppDispatch();
    const content = useAppSelector((state) => state.content);

    useEffect(() => {
        dispatch(fetchRequest())
    }, [dispatch])


    return (
        <div className={"content"}>
            {content.text}
        </div>
    );
};

export default Content;
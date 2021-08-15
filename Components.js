import {useState,useEffect} from "./MyReact.js"

export default function Component({propCount,btnEle}) {

    const [count,setCount] = useState(0)
    // const countDouble = 0;

    // setTimeout(() => {
    //     setCount(currentCount => currentCount + 1)
    // }, 1000);

    useEffect(() => {
        const handler = () => setCount(currentCount => currentCount + 1)
        btnEle.addEventListener("click",handler)
        return () => btnEle.removeEventListener('click',handler)
    },[btnEle])

    let countDouble = 0;
    return `
        State: ${count}
        Prop: ${propCount}
        Prop Double: ${countDouble}
    `
}
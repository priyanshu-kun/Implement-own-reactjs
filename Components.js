import {useState} from "./MyReact.js"

export default function myComponent({propCount}) {

    const [count,setCount] = useState(0)

    setTimeout(() => {
        setCount(prevState => prevState+1)
    }, 1000);

    const propCountDoubled = 0

    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}
    `
}
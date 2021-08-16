
let globalId = 0
let globalParent
const componentState = new Map()

export function useState(initialState) {

    const id = globalId
    const parent = globalParent
    globalId++
    return (() => {
        const { cache } = componentState.get(parent)

        if (!cache[id]) {
            cache[id] = { value: initialState === 'function' ? initialState() : initialState }
        }

        const setState = state => {
            const  { myComponent, props} = componentState.get(parent)
            if (typeof state === 'function') {
                cache[id].value = state(cache[id].value)
            }
            else {
                cache[id].value = state
            }
            render(myComponent, props, parent)
        }

        return [cache[id].value, setState]
    })()
}

export function render(myComponent, props, parent) {

    const state = componentState.get(parent) || { cache: [] }
    componentState.set(parent, { ...state, myComponent, props })
    globalParent = parent
    const output = myComponent(props)
    globalId = 0
    parent.textContent = output
}
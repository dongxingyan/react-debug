function App() {
    const [count, setCount] = React.useState(0)
    const [age, setAge] = React.useState(18)
    return <div>
        <div>your count!</div>
        <div>count: {count}</div>
        <div>your age: {age}</div>
        <button onClick={() => setCount(v => v + 2)}>change count</button>
        <button onClick={() => setAge(v => v -1)}>change name</button>
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#app'))
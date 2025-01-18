```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: avoid including count in dependencies unless needed
    //Perform side effects here, like API calls, that don't directly affect the component's render
    console.log('useEffect called');
  }, []);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```
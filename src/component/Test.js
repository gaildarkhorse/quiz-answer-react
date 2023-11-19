import { useSelector, useDispatch } from 'react-redux';

const Test = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <>
            <div>
                <span>Test: {count}</span>
            </div>
        </>
    )
}

export default Test;
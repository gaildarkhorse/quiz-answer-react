import { setLow, setHigh, setNone } from '../../features/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
// View
function Control () {
    const count = useSelector((state) => state.counter.fuzzy_count)
    const dispatch = useDispatch()
    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(setLow())}
            >
            SETLOW
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(setHigh())}
            >
            SETHIGH
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(setNone())}
            >
            SETNONE
            </button>
        </div>
    );
}

export default Control;
            
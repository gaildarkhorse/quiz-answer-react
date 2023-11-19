import * as React from 'react';
import image1 from '../../assets/checkbutton/btn_unchecked.png';
import image2 from '../../assets/checkbutton/btn_checked.png';
import './ChkboxGroup.css';
import {setLow, setHigh, setNone} from '../../features/counterSlice';
import { useDispatch } from 'react-redux';

const ChkboxGroup = ({heading, content1, content2}) => {
    const dispatch = useDispatch();
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [checkedVal, setCheckedVal] = React.useState(0);

    const handleChangeOne = () => {
        if(checkedTwo){
          setCheckedTwo(!checkedTwo);
        }
        setCheckedOne(!checkedOne);
        if(!checkedOne){
          setCheckedVal(1);
          dispatch(setLow());  
        }else{
          setCheckedVal(0);
          dispatch(setNone());
        }
    };
  
    const handleChangeTwo = () => {
        if(checkedOne){
          setCheckedOne(!checkedOne);
        }
        setCheckedTwo(!checkedTwo);
        if(!checkedTwo){
          setCheckedVal(2);
          dispatch(setHigh());
        }else{
          setCheckedVal(0);
          dispatch(setNone());
        }
    };
  
    return (
      <div className='check-box-group'>
        {heading}
        <label onClick={handleChangeOne}>
        {
          !checkedOne && 
          <img src={image1} width="30px" height="30px" alt="img1" />
        }
        {
          checkedOne &&
          <img src={image2} width="30px" height="30px" alt="img2" />
        }
        {content1}
        </label>
        <label onClick={handleChangeTwo}>
        {
          !checkedTwo && 
          <img src={image1} width="30px" height="30px" alt="img1" />
        }
        {
          checkedTwo &&
          <img src={image2} width="30px" height="30px" alt="img2" />
        }
        {content2}
        </label>
        </div>
    );
};

export default ChkboxGroup;
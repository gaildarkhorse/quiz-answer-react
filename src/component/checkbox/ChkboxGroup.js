import * as React from 'react';
import Checkbox from './CheckBox';
import image1 from '../../assets/checkbutton/btn_unchecked.png';
import image2 from '../../assets/checkbutton/btn_checked.png';

const ChkboxGroup = ({heading, content1, content2}) => {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
  
    const handleChangeOne = () => {
        if(checkedTwo){
            setCheckedTwo(!checkedTwo);
        }
        setCheckedOne(!checkedOne);
    };
  
    const handleChangeTwo = () => {
        if(checkedOne){
            setCheckedOne(!checkedOne);
        }
        setCheckedTwo(!checkedTwo);
    };
  
    return (
      <div className='check-box-group'>
        {heading}
        <label onClick={setCheckedOne}>
        {
          !checkedOne && 
          <img src={image1} width="30px" height="30px" alt="img1" />
        }
        {
          checkedOne &&
          <img src={image2} width="30px" height="30px" alt="img2" />
        }
        {"Higher"}
        </label>
        <label onClick={setCheckedTwo}>
        {
          !checkedTwo && 
          <img src={image1} width="30px" height="30px" alt="img1" />
        }
        {
          checkedTwo &&
          <img src={image2} width="30px" height="30px" alt="img2" />
        }
        {"Lower"}
        </label>
        </div>
    );
};

export default ChkboxGroup;
import * as React from 'react';
import image1 from '../../assets/checkbutton/btn_unchecked.png';
import image2 from '../../assets/checkbutton/btn_checked.png';


const Checkbox = ({ label, value}) => {
    return (
      <label>
        {
          !value && 
          <img src={image1} width="30px" height="30px" alt="img1" />
        }
        {
          value &&
          <img src={image2} width="30px" height="30px" alt="img2" />
        }
        {label}
      </label>
    );
  };

  export default Checkbox;
  
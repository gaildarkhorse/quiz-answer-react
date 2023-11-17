import * as React from 'react';
import Checkbox from './CheckBox';

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
      <div>
        <Checkbox
          label={content1}
          value={checkedOne}
          onChange={handleChangeOne}
        />
        <Checkbox
          label={content2}
          value={checkedTwo}
          onChange={handleChangeTwo}
        />
      </div>
    );
};

export default ChkboxGroup;
import { useState } from 'react';
import React from 'react';
import questions from '../data/Data';
import './QuizBox.css';
import ChkboxGroup from './checkbox/ChkboxGroup';

function QuizBox () {
    const [showFinalResults, setFinalResults] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isCheckedOne, onCheckedOne] = useState(false);
    const [isCheckedTwo, onCheckedTwo] = useState(false);

    const optionClickedOne = (question) => {
        const updatedOptions = [...selectedOptions];
        onCheckedOne(!isCheckedOne);
        if(question.option[1].isChecked){
            question.option[1].isChecked = !question.option[1].isChecked;
        }
        question.option[0].isChecked = !question.option[0].isChecked;
        if(question.option[0].isChecked){
            updatedOptions[question.no] = question.option[0].catagory_id;
            setSelectedOptions(updatedOptions);
        }
    };

    const optionClickedTwo = (question) => {
        const updatedOptions = [...selectedOptions];
        onCheckedTwo(!isCheckedTwo);
        if(question.option[0].isChecked){
            question.option[0].isChecked = !question.option[0].isChecked;
        }
        question.option[1].isChecked = !question.option[1].isChecked;
        if(question.option[1].isChecked){
            updatedOptions[question.no] = question.option[1].catagory_id;
            setSelectedOptions(updatedOptions);
        }
    };
    
    const submitClicked = () => {
        // Exception Control Here !!!!!
        setFinalResults(true);
    };

    return (
        
        <div className='quiz-box'>
            {/*  Quiz */}
            <ul className='quiz-sub-box'>
                {
                    questions.map((question) =>{
                        return (
                            <div className='quiz-item'>
                                <div className='quiz-item-main'>
                                    <h3>Q.{question.no}: {question.quiz}</h3>
                                </div>
                                {
                                    <>
                                    {/* Option 1: */}
                                    <div onClick={() => optionClickedOne(question)} key={question.option.id}>
                                    <div className='quiz-item-option'>
                                        {question.option[0].text}
                                        {
                                            question.option[0].isChecked &&
                                            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="40px" height="40px" alt="img2" />
                                        }
                                    </div>
                                    </div>

                                    {/* Option 2: */}
                                    <div onClick={() => optionClickedTwo(question)} key={question.option.id}>
                                    <div className='quiz-item-option'>
                                        {question.option[1].text}
                                        {
                                            question.option[1].isChecked &&
                                            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="40px" height="40px" alt="img2" />
                                        }
                                    </div>
                                    </div>
                                    
                                    

                                    {
                                        !question.option[0].isChecked &&
                                        !question.option[1].isChecked &&
                                        <ChkboxGroup  heading = "If you are not sure what to choose ..." content1= "Higer" content2 = "Lower"/>
                                        // <p>
                                        // If you're not sure what to choose ...:
                                        // <label>
                                        //   <input type="radio" name="myRadio" value="option1" />
                                        //   Higher
                                        // </label>
                                        // <label>
                                        //   <input type="radio" name="myRadio" value="option2" />
                                        //   Lower
                                        // </label>
                                        // </p>
                                    }
                                    </>
                                    
                                }
                            </div>
                        );
                    })
                }
            </ul>
        </div> 
   );
}

export default QuizBox;
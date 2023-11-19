import { useState } from 'react';
import React from 'react';
import questions from '../data/Data';
import './QuizBox.css';
import ChkboxGroup from './checkbox/ChkboxGroup';
import questionImg from '../assets/question-mark/question-mark.png';
import { useSelector, useDispatch } from 'react-redux';
import { setNone } from '../features/counterSlice';

function QuizBox() {
    
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [showFinalResults, setFinalResults] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(Array(71).fill(0));
    const [isCheckedOne, onCheckedOne] = useState(false);
    const [isCheckedTwo, onCheckedTwo] = useState(false);

    const optionClickedOne = (question) => {
        const updatedOptions = [...selectedOptions];
        onCheckedOne(!isCheckedOne);
        if (question.option[1].isChecked) {
            question.option[1].isChecked = (!question.option[1].isChecked);
        }
        question.option[0].isChecked = (!question.option[0].isChecked);
        if (question.option[0].isChecked) {
            updatedOptions[question.no] = question.option[0].catagory_id;
            setSelectedOptions(updatedOptions);
            dispatch(setNone());
        }
    };

    const optionClickedTwo = (question) => {
        const updatedOptions = [...selectedOptions];
        onCheckedTwo(!isCheckedTwo);
        if (question.option[0].isChecked) {
           question.option[0].isChecked = (!question.option[0].isChecked);
        }
        question.option[1].isChecked = (!question.option[1].isChecked);
        if (question.option[1].isChecked) {
            updatedOptions[question.no] = question.option[1].catagory_id;
            setSelectedOptions(updatedOptions);
            dispatch(setNone());

        }
    };

    const submitClicked = () => {
        // Exception Control Here !!!!!
        setFinalResults(true);
    };

    return (

        <div className='quiz-box'>
            <img className="p-2" src="https://cdn-icons-png.flaticon.com/512/807/807281.png" width="80px" height="80px" alt="img3" />
            {/*  Quiz */}
            <ul className='quiz-sub-box'>
                {
                    questions.map((question) => {
                        return (
                            <div className='quiz-item'>
                                <div className='quiz-item-main'>
                                    <h3>
                                        <img src={questionImg} width="50px" height="50px" alt="Q."></img>
                                        {question.no + 1}: {question.quiz}
                                    </h3>
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
                                            <ChkboxGroup heading="If you are not sure what to choose ..." content1="Higer" content2="Lower" />
                                        }
                                    </>

                                }
                                <>
                                </>
                            </div>
                            
                        );
                    })
                }
            </ul>
            
        </div>
    );
}

export default QuizBox;
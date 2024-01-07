import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StartTest from "../components/StartTest";
import EndTest from "../components/EndTest";

export function TestPage({Start, setStart, questions, answersResult, trueAnswers, ANSWERS}) {


    const navigate = useNavigate()
    const {id} = useParams();

    const [end, setEnd] = useState(false)
    const [time, setTime] = useState(2);
    const [min, setMin] = useState(0);
    const [sec, setSec] =useState(0);

    let res = JSON.parse(sessionStorage.getItem('answersResult')) || null;

    let answers = (value,index)=>{
        ANSWERS[index] = value;
    }

    useEffect(()=> {

      

        if(end){
            return
        }

        if(Start){
          if(time === 0 && min === 0 && sec === 0){
            alert('ձեր')
            return
          }else{
            const interval = setInterval(() => {
              if(sec !== 0){
                setSec(sec - 1);
              }
              else{
                setSec(59);
                if(min !== 0)
                setMin(min - 1);
                else{
                  setMin(59);
                  setTime(time - 1);
                }
              }
          }, 1000);
          return () => clearInterval(interval);
          }
        }else{
            navigate('/');
        }
        
      }, [sec])


        

    const submitHandler = async(e)=>{
        e.preventDefault();
        let UserData = await axios.get(`https://test-backend-sigma.vercel.app/users${id}`);
        let res = UserData.data;
        for(let i = 0; i<ANSWERS.length; i++){
            if(ANSWERS[i] === trueAnswers[i]){
                answersResult++;
            }
        }
        res.points = answersResult;

        sessionStorage.setItem('answersResult', JSON.stringify(answersResult))
        let user = res;

        await axios.put(`https://test-backend-sigma.vercel.app/users${id}`, user);

        setEnd(true);

    }

  return (
    <div>
        {end ? <EndTest trueAnswers={trueAnswers} res={res} questions={questions} answers={answers} ANSWERS={ANSWERS}  />
        :
        <StartTest time={time} min={min} sec={sec} submitHandler={submitHandler} questions={questions} answers={answers} />}
    </div>
    
  )
}

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

    answersResult = JSON.parse(sessionStorage.getItem('answersResult')) || 0;

    let answers = (value,index)=>{
        ANSWERS[index] = value;
    }

    useEffect(()=> {

      

        if(end){
            return
        }

        if(Start){
          if(time === 0 && min === 0 && sec === 0){
            alert('ձեր ժամանակը սպառվեց')
            TimerEnd();
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
            sessionStorage.clear();
            navigate('/');
        }
        
      }, [sec]);


      const TimerEnd = async()=>{
        let UserData = await axios.get(`https://test-backend-nodejs.vercel.app/user/${id}`);
        let res ={}
        for(let key in UserData.data){
          if(key != 'id'){
            res[key] = UserData.data[key];
          }
        }
        for(let i = 0; i<ANSWERS.length; i++){
            if(ANSWERS[i] === trueAnswers[i]){
                answersResult++;
            }
        }
        res.point = JSON.stringify(answersResult);

        if(answersResult > 0)
        sessionStorage.setItem('answersResult', JSON.stringify(answersResult));

        let user = res;

        try{
          let UserById = await axios.put(`https://test-backend-nodejs.vercel.app/user/edit/${id}`, user, {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
          });
        }catch(err){
          console.log(err.response);
        }
        setEnd(true);
        window.scroll({ top: 0 })
      }


        

    const submitHandler = async(e)=>{
        e.preventDefault();

        let UserData = await axios.get(`https://test-backend-nodejs.vercel.app/user/${id}`);
        let res ={}
        for(let key in UserData.data){
          if(key != 'id'){
            res[key] = UserData.data[key];
          }
        }
        for(let i = 0; i<ANSWERS.length; i++){
            if(ANSWERS[i] === trueAnswers[i]){
                answersResult++;
            }
        }
        res.point = JSON.stringify(answersResult);

        if(answersResult > 0)
        sessionStorage.setItem('answersResult', JSON.stringify(answersResult));

        let user = res;

        try{
          let UserById = await axios.put(`https://test-backend-nodejs.vercel.app/user/edit/${id}`, user, {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
          });
        }catch(err){
          console.log(err.response);
        }
        setEnd(true);
        window.scroll({ top: 0 })
    }

  return (
    <div>
        {end ? <EndTest trueAnswers={trueAnswers} answersResult={answersResult} questions={questions} answers={answers} ANSWERS={ANSWERS}  />
        :
        <StartTest time={time} min={min} sec={sec} submitHandler={submitHandler} questions={questions} answers={answers} />}
    </div>
    
  )
}

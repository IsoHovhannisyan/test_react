import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {TestPage} from './pages/TestPage';

export function App() {


  const [Start, setStart]= useState(false);
  const [email, setEmail] = useState('');
  const [randQuestions, setRandQuestions] = useState([
    {
        question: "	For her calculus class, Marie has scored 80, 85, and 100 on three of her tests so far. What is the minimum score Marie needs to receive on her 4th test in order to have an average of  89․",
        option1: 98,
        option2: 87,
        option3: 90,
        option4: 91,
        answer: 91
    },
    {
        question: " Թիվն ունի երկու թվանշան: Այդ թվանշանների արտադրյալը 15 է: Որքա՞ն է այդ թվանշանների գումարը:",
        option1: 6,
        option2: 7,
        option3: 10,
        option4: 8,
        answer: 8
    },
    {
        question: "	Մի տոպրակում կա հինգ տարբեր գույների գնդակներ․ երկու կարմիր, երեք կապույտ, տասը սպիտակ, չորս կանաչ և երեք սև։ Գնդակներն առանց նայելու վերցնելու են տոպրակից և ետ չեն դնում։ Առնվազն քանի՞ գնդակ պետք է վերցնել տոպրակից՝ վստահ լինելու համար, որ վերցված գնդակներից երկուսը միևնույն գույնի են։",
        option1: 6,
        option2: 20,
        option3: 5,
        option4: 3,
        answer: 6
    },
    {
        question: "	Pipe A fills the pool in 3 hours, meanwhile Pipe B fills the same pool in 6 hours. How many hours will it take Pipe A and Pipe B to fill the empty pool, if the pipes are opened at the same time?",
        option1: 1,
        option2: 2,
        option3: 3,
        option4: 4,
        answer: 2
    },
    {
        question: "	Մի շարքում կանգնած են Անին, Դավիթը, Սյուզին, Նարեկը և Արենը: Անին գտնվում է Սյուզիից ձախ, բայց Նարեկից աջ: Նարեկն ու Արենը իրար կողք կանգնած չեն, իսկ Դավիթը չի գտնվում ո՛չ Նարեկի կողքը, ո՛չ Արենի կողքը, ո՛չ էլ Անիի կողքը: Ի՞նչ հերթականությամբ են կանգնած նրանք:",
        option1: "Անի, Նարեկ, Արեն, Դավիթ, Սյուզի",
        option2: "Նարեկ, Անի, Արեն, Սյուզի, Դավիթ",
        option3: "Նարեկ, Անի, Սյուզի,Դավիթ, Արեն",
        option4: "Անի, Արեն, Սյուզի, Նարեկ, Դավիթ",
        answer: "Նարեկ, Անի, Արեն, Սյուզի, Դավիթ"
    },
    {
        question: "	Աշխատելով նույն հաստատուն արագությամբ՝ 6 միանման հաստոցներ կարող են 1 ժամում արտադրել ընդհանուր առմամբ 42 դետալ: Այս տեմպերով քանի՞ դետալ կարող են արտադրել 13 նման հաստոցները 10 ժամում:",
        option1: 850,
        option2: 800,
        option3: 1010,
        option4: 910,
        answer: 910
    },
    {
        question: "	Գտնել օրինաչափությունը և լրացնել բաց թողնված թիվը: Գրեք նաև օրինաչափությունը   15 * 14 = 205,    18 * 21 = 373,    31 * 16 = ?",
        option1: 501,
        option2: 491,
        option3: 472,
        option4: 433,
        answer: 491
    },
    {
        question: "	Աշակերտները դասարանում նստած են շարքերով: Յուրաքանչյուր շարքում կան նույն թվով աշակերտներ: Ռոբերտի դիմաց կա աշակերտների 2 շարք, իսկ հետևում` 1 շարք: Նրա շարքում կան 3 աշակերտ նրա ձախից և 5 աշակերտ՝ աջից։ Քանի՞ աշակերտ կա այս դասարանում:",
        option1: 30,
        option2: 25,
        option3: 36,
        option4: 29,
        answer: 36
    },
    {
        question: "	Գարեգինը յուրաքանչյուր տասը րոպեն մեկ մի մոմ է վառում։ Մոմերից յուրաքանչյուրը վառվում է 40 րոպե և վերջ։ Քանի՞ մոմ է վառվում այն պահից 55 րոպե հետո, երբ Գարեգինը վառեց առաջին մոմը։",
        option1: 4,
        option2: 3,
        option3: 2,
        option4: 5,
        answer: 4
    }

  ]);
  const questions = [];
  const randomQuestions = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let arr = [];

for(let i = 0; arr.length < randQuestions.length; i++ ){
  let res = randomQuestions(0, randQuestions.length - 1);
  if(!arr.includes(res))
  arr.push(res);
}

for(let i = 0; i< arr.length; i++){
  questions.push(randQuestions[arr[i]]);
}





let answersResult = 0;
let trueAnswers = questions.map(el=> el.answer);
let ANSWERS = [];

  return (
    <div className=' App'>
      <Routes>
        <Route path='/' element={<HomePage Start={Start} setStart={setStart} email={email} setEmail={setEmail} />} />
        <Route path='/test/:id' element={<TestPage  Start={Start} setStart={setStart} questions={questions} trueAnswers={trueAnswers} ANSWERS={ANSWERS} answersResult={answersResult} />} />
      </Routes>
    </div>
    
  )
}


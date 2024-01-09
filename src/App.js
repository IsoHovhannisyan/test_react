import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {TestPage} from './pages/TestPage';
import UsersPage from './pages/UsersPage';

export function App() {


  const [Start, setStart]= useState(false);
  const [email, setEmail] = useState('');
  const [randQuestions, setRandQuestions] = useState({
    test1: [{
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
  },
  {
    question: "	Ճանճը ունի 6 ոտք, սարդը՝ 8 ոտք:3 ճանճը և 2 սարդը միասին ունեն այնքան ոտք, որքան ոտք ունեն 9 հավ և ...:",
    image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/cdn/53154f67-a246-4251-8906-5b50e294e1cb/3da65589-0a00-4446-8e2b-bca1f4524b67.jpg",
    option1: "3 կատուն",
    option2: "6 կատուն",
    option3: "4 կատուն",
    option4: "2 կատուն",
    answer: "4 կատուն"
    }],
    test2: [{
      question: "	Ճանճը ունի 6 ոտք, սարդը՝ 8 ոտք:3 ճանճը և 2 սարդը միասին ունեն այնքան ոտք, որքան ոտք ունեն 9 հավ և ...:",
      image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/cdn/53154f67-a246-4251-8906-5b50e294e1cb/3da65589-0a00-4446-8e2b-bca1f4524b67.jpg",
      option1: "3 կատուն",
      option2: "6 կատուն",
      option3: "4 կատուն",
      option4: "2 կատուն",
      answer: "4 կատուն"
      },
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
  }],
    test3: [{
      question: "	For her calculus class, Marie has scored 80, 85, and 100 on three of her tests so far. What is the minimum score Marie needs to receive on her 4th test in order to have an average of  89․",
      option1: 98,
      option2: 87,
      option3: 90,
      option4: 91,
      answer: 91
  },
  {
    question: "	Ճանճը ունի 6 ոտք, սարդը՝ 8 ոտք:3 ճանճը և 2 սարդը միասին ունեն այնքան ոտք, որքան ոտք ունեն 9 հավ և ...:",
    image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/cdn/53154f67-a246-4251-8906-5b50e294e1cb/3da65589-0a00-4446-8e2b-bca1f4524b67.jpg",
    option1: "3 կատուն",
    option2: "6 կատուն",
    option3: "4 կատուն",
    option4: "2 կատուն",
    answer: "4 կատուն"
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
  }],
    test4: [{
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
    question: "	Ճանճը ունի 6 ոտք, սարդը՝ 8 ոտք:3 ճանճը և 2 սարդը միասին ունեն այնքան ոտք, որքան ոտք ունեն 9 հավ և ...:",
    image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/cdn/53154f67-a246-4251-8906-5b50e294e1cb/3da65589-0a00-4446-8e2b-bca1f4524b67.jpg",
    option1: "3 կատուն",
    option2: "6 կատուն",
    option3: "4 կատուն",
    option4: "2 կատուն",
    answer: "4 կատուն"
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
  }],
    test5: [{
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
    question: "	Ճանճը ունի 6 ոտք, սարդը՝ 8 ոտք:3 ճանճը և 2 սարդը միասին ունեն այնքան ոտք, որքան ոտք ունեն 9 հավ և ...:",
    image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/cdn/53154f67-a246-4251-8906-5b50e294e1cb/3da65589-0a00-4446-8e2b-bca1f4524b67.jpg",
    option1: "3 կատուն",
    option2: "6 կատուն",
    option3: "4 կատուն",
    option4: "2 կատուն",
    answer: "4 կատուն"
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
  }]
  });

  let testsArr = [];
  for(let key in randQuestions){
    testsArr.push(key);
  }
  console.log(testsArr);
  const questions = [];
  const Random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let NumberOfTest = Random(0, testsArr.length-1); 

  for(let i = 0; i< 1; i++){
    questions.push(randQuestions[testsArr[NumberOfTest]]);
  } 

  let answersResult = 0;
  let trueAnswers = questions[0].map(el=> el.answer);
  let ANSWERS = [];

  return (
    <div className=' App'>
      <Routes>
        <Route path='/' element={<HomePage Start={Start} setStart={setStart} email={email} setEmail={setEmail} />} />
        <Route path='/test/:id' element={<TestPage  Start={Start} setStart={setStart} questions={questions[0]} trueAnswers={trueAnswers} ANSWERS={ANSWERS} answersResult={answersResult} />} />
        <Route path='/users/:id' element={< UsersPage />} /> 
      </Routes>
    </div>
    
  )
}


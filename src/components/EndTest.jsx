import React from 'react'

export default function EndTest({trueAnswers, res, questions, answers, ANSWERS}) {

    console.log(answers);
  return (
    <div>
        <div className=' w-[100%] h-[10rem] flex justify-center items-center'>
            <h1 className=' text-[3rem]'>դուք հավաքել եք {trueAnswers.length}/{res} միավոր </h1>
        </div>
        <form className=" box w-[100%]">
            {
                questions.map((el, index) => <div className=' question' key={index}>
                    <h2 className=''>
                        {index+1}.{el.question}
                    </h2>

                    <div className={ANSWERS[index] == el.option1 ? el.option1 == el.answer ? ' bg-green-400': 'bg-red-300': el.option1 == el.answer ? ' bg-green-400': 'bg-red-300'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option1 ? true: false} id={el.option1} value={el.option1} onClick={()=> answers(el.option1, index)} />
                        <label htmlFor={el.option1} >{el.option1}</label>
                    </div>
                    <div className={ANSWERS[index] == el.option2 ? el.option2 == el.answer ? ' bg-green-400': 'bg-red-300': el.option2 == el.answer ? ' bg-green-400': 'bg-red-300'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option2 ? true: false} id={el.option2} value={el.option2} onClick={()=> answers(el.option2, index)} />
                        <label htmlFor={el.option2}>{el.option2}</label>
                    </div>

                    <div className={ANSWERS[index] == el.option3 ? el.option3 == el.answer ? ' bg-green-400': 'bg-red-300': el.option3 == el.answer ? ' bg-green-400': ' bg-red-300'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option3 ? true: false} id={el.option3} value={el.option3} onClick={()=> answers(el.option3, index)}/>
                        <label htmlFor={el.option3}>{el.option3}</label>
                    </div>
                    
                    <div className={ANSWERS[index] == el.option4 ? el.option4 == el.answer ? ' bg-green-400': 'bg-red-300': el.option4 == el.answer ? ' bg-green-400': 'bg-red-300'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option4 ? true: false} id={el.option4} value={el.option4} onClick={()=> answers(el.option4, index)} />
                        <label htmlFor={el.option4}>{el.option4}</label>
                    </div>
                    </div>)
            }
            <div className=" flex justify-center items-center w-[100%] h-[5rem] mb-[5rem]">
                <input type='submit' value='Ավարտել' className=' btn text-[2rem] mb-[2rem] cursor-pointer' />
            </div>
            
            </form>
    </div>
  )
}

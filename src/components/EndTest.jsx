import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function EndTest({trueAnswers, answersResult, questions, ANSWERS, id}) {

    const navigate = useNavigate();


  return (
    <div>
        <div className=' flex justify-center items-center w-[100%] h-[20rem]'>
            <div className=' text-center'>
                <h1 className=' text-[3rem]'>դուք հավաքել եք {trueAnswers.length}/{answersResult} միավոր </h1> 
                <div>
                    <Link to={`/users/${id}`} className=' Link'> Տեսնել բոլորի միավորները</Link>
                </div>
            
            </div>
        </div>
        
        <form className=" box w-[100%]" onSubmit={()=> navigate('/')}>
            {
                questions.map((el, index) => <div className=' question' key={index}>
                    {el.image ? <div>
                      <h2>{index+1}.{el.question}</h2>
                      <img src={el.image} alt="" />
                      
                    </div>:
                    <h2 className=''>
                        {index+1}.{el.question}
                    </h2>
                    }

                    <div className={ANSWERS[index] == el.option1 ? el.option1 == el.answer ? ' bg-green-300': 'bg-red-300': el.option1 == el.answer ? ' bg-green-300': 'bg-red-200'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option1 ? true: false} onChange={(e)=> {}} id={el.option1} value={el.option1} />
                        <label htmlFor={el.option1} >{el.option1}</label>
                    </div>
                    <div className={ANSWERS[index] == el.option2 ? el.option2 == el.answer ? ' bg-green-300': 'bg-red-200': el.option2 == el.answer ? ' bg-green-300': 'bg-red-200'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option2 ? true: false} onChange={(e)=> {}} id={el.option2} value={el.option2} />
                        <label htmlFor={el.option2}>{el.option2}</label>
                    </div>

                    <div className={ANSWERS[index] == el.option3 ? el.option3 == el.answer ? ' bg-green-300': 'bg-red-200': el.option3 == el.answer ? ' bg-green-300': ' bg-red-200'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option3 ? true: false} onChange={(e)=> {}} id={el.option3} value={el.option3}/>
                        <label htmlFor={el.option3}>{el.option3}</label>
                    </div>
                    
                    <div className={ANSWERS[index] == el.option4 ? el.option4 == el.answer ? ' bg-green-300': 'bg-red-200': el.option4 == el.answer ? ' bg-green-300': 'bg-red-200'   }>
                        <input type="radio" name={index} checked={ANSWERS[index] == el.option4 ? true: false} onChange={(e)=> {}} id={el.option4} value={el.option4} />
                        <label htmlFor={el.option4}>{el.option4}</label>
                    </div>
                    </div>)
            }
            <div className=" flex justify-center items-center w-[100%] h-[5rem] mb-[5rem]">
                <input type='submit' value='Գլխավոր էջ' className=' btn text-[2rem] mb-[2rem] cursor-pointer' />
            </div>
            
            </form>
    </div>
  )
}

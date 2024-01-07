import React from 'react'

export default function StartTest({time, min, sec, submitHandler, questions, answers}) {
  return (
    <div className="w-[100%]">
        <div className=' w-[100%] bg-slate-600 z-30'>
            <div className='Timer fixed top-[2rem] left-[5rem] z-20'>
              <h3 className=' text-[1.9rem]'>{time < 10 ? '0' + time : time} : {min < 10 ? '0' + min : min} : {sec < 10 ? '0' + sec: sec }</h3>
            </div>
          </div>

            <form className=" box w-[100%]" onSubmit={submitHandler}>
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

                    <div>
                        <input type="radio" name={index} id={el.option1} value={el.option1} onClick={()=> answers(el.option1, index)} />
                        <label htmlFor={el.option1} >{el.option1}</label>
                    </div>
                    <div>
                        <input type="radio" name={index} id={el.option2} value={el.option2} onClick={()=> answers(el.option2, index)} />
                        <label htmlFor={el.option2}>{el.option2}</label>
                    </div>

                    <div>
                        <input type="radio" name={index} id={el.option3} value={el.option3} onClick={()=> answers(el.option3, index)}/>
                        <label htmlFor={el.option3}>{el.option3}</label>
                    </div>
                    
                    <div>
                        <input type="radio" name={index} id={el.option4} value={el.option4} onClick={()=> answers(el.option4, index)} />
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

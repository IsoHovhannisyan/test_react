import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function HomePage({ setStart, email, setEmail}) {

    

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [userId, setUserId] = useState(1);


    const loadingUsers = async()=>{
        let Users = await axios.get("https://test-backend-sigma.vercel.app/users");
        setUserId(Users.data.length + 1)
        setUsers(Users.data);    
    }

    useEffect(()=> {
        loadingUsers();
    },[])

    
  
  
    const submitHandler = async(e)=>{
        e.preventDefault();
        if(!name || !surname || !phone || !email){
            alert('Լրացրեք բոլոր դաշտերը ')
            return
        }else{
            let userWithSuchEmail = users.filter(el=> el.email == email);
            if(userWithSuchEmail.length > 0){
                alert(' այս էլ․ փոստ-ով դիմորդ գոյություն ունի');
                return
            }
            await axios.post('https://test-backend-sigma.vercel.app/users', {
                name,
                surname,
                phone,
                email,
                points: 0
            })
        }
      setStart(true);

      setEmail('')
      navigate('/test/'+ userId)
    }
  
  
    return (
      <div className='HomePage'>
        {
          <div className=' register'>
              <form className=' bg-slate-300 p-[1rem] w-[400px]' onSubmit={submitHandler}>
                <p className="">Անուն</p>
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)  } placeholder='' className=' w-full' />
                <p>Ազգանուն</p>
                <input type='text' value={surname} onChange={(e)=> setSurname(e.target.value)  } placeholder='' className='w-full' />
                <p>Հեռախոսահամար</p>
                <input type='number' value={phone} onChange={(e)=> setPhone(e.target.value)  } className='w-full' />
                <p>էլ․ հասցե</p>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)  } className='w-full' />
  
                <div className=' flex justify-center items-center mt-[.8rem]'>
                <input type='submit' value='START' className=' btn bg-white pr-[1rem] pl-[1rem] pt-[.3rem] pb-[.3rem] rounded-md cursor-pointer' />
                </div>
              </form>
          </div>
  
        }
          
        
      </div>
    )
  }
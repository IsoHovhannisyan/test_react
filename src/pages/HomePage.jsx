import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast} from 'react-hot-toast';
import axios from "axios";

export function HomePage({ setStart, email, setEmail}) {

    

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState(''); 


    const loadingUsers = async()=>{
        let Users = await axios.get("https://test-backend-nodejs.vercel.app/user");
        setUsers(Users.data);    
    }

    useEffect(()=> {
        loadingUsers();
        
    },[])

    
  
  
    const submitHandler = async(e)=>{
        e.preventDefault();
        toast.loading('Sending Request', {id: 1});
        let UserId = 0
        if(!name || !surname || !phone || !email){
            toast.error('Լրացրեք բոլոր դաշտերը', {id: 1});
            return
        }else{
            let res = {
              name: name,
              surname: surname,
              phone: phone,
              email: email,
              point: '0'
            }
            let userWithSuchEmail = users.filter(el=> el.email == email);
            if(userWithSuchEmail.length > 0){
                toast.error('Այս էլ․ փոստ-ով արդեն գրանցվել են', {id: 1});
                return
            }
           
            try{
              UserId = await axios.post("https://test-backend-nodejs.vercel.app/user/add", res,{
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
              })
              toast.success('Success', {id: 1});
            }catch(err){
              toast.error('Ինչ-որ բան սխալ է', {id: 1});
              console.log(err.response);
            }
           
        }
      setStart(true);

      setEmail('')
      navigate('/test/'+ UserId.data)
    }
  
  
    return (
      <div className='HomePage'>
        <Toaster />
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
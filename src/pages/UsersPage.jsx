import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UsersPage() {

    const [users, setUsers] = useState([]);
    const UsersInOrder = [];


    let maxPoint = 10;

    const loadingUsers = async()=>{
        let UsersData = await axios.get('https://test-backend-nodejs.vercel.app/user');
        setUsers(UsersData.data);
    }


    
    for (let i = 10; i >= 0; i--) {
        let res = users.filter(el => el.point == i);
        if(res.length !== 0)
        UsersInOrder.push(...res);
    }



    useEffect(()=>{
        loadingUsers();
    },[])

  return (
    <section className=' '>
        <div className='flex justify-center items-center w-[100%] mt-[20rem]'>

        <table className=' w-[70%]'>
            <thead>
                <tr className=' text-[2rem]'>
                    <th>Անուն</th>
                    <th>Ազգանուն</th>
                    <th>Հեռախոսահամար</th>
                    <th>էլ․ հասցե</th>
                    <th>միավորներ</th>
                </tr>
            </thead>
            <tbody>
                {UsersInOrder.map(el => <tr className=' text-[1.5rem] text-center' key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.surname}</td>
                    <td>{el.phone}</td>
                    <td>{el.email}</td>
                    <td>10/{el.point}</td>
                </tr>)}
            </tbody>
        </table>
        
        </div>
        
    </section>
  )
}

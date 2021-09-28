import axios from 'axios';
import {FC, useEffect, useState} from 'react';
import {IUser} from '../types/types'
import {useParams, useHistory} from 'react-router-dom';

interface UserItemPageParamsProps {
    id: string;
}


const UserItemPage: FC = () => {  

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParamsProps>()
    const history = useHistory();

    useEffect(() => {
        fetchUser()  
    },[])

    async function fetchUser() {
        try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
        setUser(response.data);
        } catch (error) {
        console.log(error);
        }
    }


    return (         
                <div style={{padding: '15px', border: '1px solid greay'}}>
                    <button onClick={() => history.push('/users')} >Back</button>
                    <h2>Page user {user?.name}</h2>
                    <div>
                        {user?.email}
                    </div>
                
                </div>     
    );
}

export default UserItemPage;

import {FC} from 'react';
import {IUser} from '../types/types'

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void
}


const UserItem: FC<UserItemProps> = ({user, onClick}) => {  
  return (         
            <div onClick={() => onClick(user)} style={{padding: '15px', border: '1px solid greay'}}>
                {user.id}. {user.name} live in {user.address.city} city on {user.address.street} street.
            </div>     
  );
}

export default UserItem;

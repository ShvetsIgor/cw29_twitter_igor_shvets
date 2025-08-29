import {useAppDispatch, useAppSelector} from "../redux/hooks.ts";
import {userActions} from "../redux/slices/userAvatarSlice.ts";

const UserAvatar = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

    return (
        <div>
            <img src={user.avatar} alt={user.name} className={'user-avatar'}
                 onClick={() => dispatch(userActions.changeAvatar({
                     avatar: prompt('Enter new avatar url') || user.avatar
                 }))}
            />
        </div>
    );
};

export default UserAvatar;
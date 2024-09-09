import { DidYouKnow } from "./DidYouKnow"
import { FriendRequest } from "./FriendRequest"
import { UserInfo } from "./UserInfo"

export const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className="flex flex-col gap-6 sticky top-0 z-50 ">
      {userId?(
        <>
          <UserInfo userId={userId}/>
          
        </>
      ):null}
      <FriendRequest/>
      <DidYouKnow/>
    </div>
  )
}

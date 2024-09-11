import { User } from "@prisma/client"
import { DidYouKnow } from "./DidYouKnow"
import { FriendRequest } from "./FriendRequest"
import { UserInfo } from "./UserInfo"

export const RightMenu = ({user}:{user?:User}) => {
  return (
    <div className="flex flex-col gap-6 sticky top-0 z-50 ">
      {user?(
        <>
          <UserInfo user={user}/>
          
        </>
      ):null}
      <FriendRequest/>
      <DidYouKnow/>
    </div>
  )
}

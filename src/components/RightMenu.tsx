import { DidYouKnow } from "./DidYouKnow"
import { FriendRequest } from "./FriendRequest"

export const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequest/>
      <DidYouKnow/>
    </div>
  )
}

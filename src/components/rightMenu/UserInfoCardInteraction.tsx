"use client"

import { switchFollow } from "@/lib/actions";
import { useState } from "react";

export const UserInfoCardInteraction = ({
    currentUserId,
    userId,
    isFollowing,
    isFollowingSent
}:{currentUserId:string;
    userId:string;
    isFollowing:boolean;
    isFollowingSent:boolean;}) => {
        const [userState,setUserState]=useState({
            following:isFollowing,
            followingReq:isFollowingSent
        });
    const follow=async()=>{
        try {
            await switchFollow(userId);
            setUserState(prev=>({
                ...prev,
                following:prev.following&&false,
                followingReq:!prev.following&&!prev.followingReq? true:false
            }))
            
        } catch (err) {
            
        }
    }
  return (
    <>
    <form action={follow}>

        <button className="w-full bg-blue-500 text-sm text-white rounded-md p-2">
            {userState.following?"Following":userState.followingReq ?"Friend Request Sent":"Follow"}
            </button>
    </form>
    </>
  )
}

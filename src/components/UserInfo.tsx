import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const UserInfo = ({ user }: { user: User }) => {
  const createdAt=new Date(user.createdAt)
  const formatDate=createdAt.toLocaleDateString("en-IN",{
    year:"numeric",
    month:"long",
    day:"2-digit"

  })
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl">{(user.name && user.surname)?user.name +" "+user.surname:user.username}</span>
          <span className="text-sm">@{user.username}</span>
        </div>
        <p>
          {(user.description)?user.description:"Not much about the User"}
        </p>
        {user.city&&<div className="flex items-center gap-2">
          <Image src={"/map.png"} alt="" width={16} height={16} />
          <span>
            Living in <b>{user.city}</b>
          </span>
        </div>}
        {user.school&&<div className="flex items-center gap-2">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span>
            Education from <b>{user.school}</b>
          </span>
        </div>}
        {user.work&&<div className="flex items-center gap-2">
          <Image src={"/work.png"} alt="" width={16} height={16} />
          <span>
            Works at <b>{user.work}</b>
          </span>
        </div>}
        <div className="flex items-center justify-between">
            {user.website&&<div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link href={user.website} className="text-blue-500 font-medium">{user.website}</Link>
            </div>}
            <div className="flex gap-1 items-center">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span>Joined {formatDate}</span>
            </div>
        </div>
        <button className="bg-blue-500 text-sm text-white rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-sm cursor-pointer">Block User</span>
      </div>
    </div>
  );
};

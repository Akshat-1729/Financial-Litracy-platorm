import Image from "next/image";
import Link from "next/link";

export const UserInfo = ({ userId }: { userId: string }) => {
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
          <span className="text-xl">Akshat Kumar</span>
          <span className="text-sm">@Akshat</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa illo
          expedita similique temporibus error doloribus asperiores{" "}
        </p>
        <div className="flex items-center gap-2">
          <Image src={"/map.png"} alt="" width={16} height={16} />
          <span>
            Living in <b>India</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span>
            Education from <b>KV</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/work.png"} alt="" width={16} height={16} />
          <span>
            Works at <b>Forma.AI</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link href={'https://www.linkedin.com/in/akshat-kumar-209300203/'} className="text-blue-500 font-medium">akshat.in</Link>
            </div>
            <div className="flex gap-1 items-center">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span>Joined November 2024</span>
            </div>
        </div>
        <button className="bg-blue-500 text-sm text-white rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-sm cursor-pointer">Block User</span>
      </div>
    </div>
  );
};

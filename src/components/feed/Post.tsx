import Image from "next/image"
import { Comments } from "./Comments"

export const Post = () => {
  return (
    <div className="flex bg-white shadow-md p-2 rounded-lg flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="/noAvatar.png" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Akshat</span>
            </div>
            <Image src={'/more.png'} width={16} height={16} alt=""/>
        </div>
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image src={'/post.jpg'} fill className="object-cover rounded-md"  alt=''/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis hic expedita, iure pariatur assumenda asperiores, quas, iste autem neque commodi ea laudantium vel velit rerum sunt sit odio voluptatibus nisi quis dolorem quibusdam earum. Fuga minima cumque veniam voluptas nihil?</p>
        </div>
        <div className="flex items-center justify-start text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src={'/like.png'} alt="" className="cursor-pointer"width={16} height={16}/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">124</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src={'/comment.png'} alt="" className="cursor-pointer"width={16} height={16}/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">124</span>
                </div>
            </div>
        </div>
        <Comments/>
    </div>

  )
}

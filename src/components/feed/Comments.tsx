import Image from "next/image"

export const Comments = () => {
  return (
    <div className="">
        <div className="flex items-center gap-4">
            <Image src={"/noAvatar.png"} alt="" width={32} height={32} className="w-8 h-8 rounded-full"/>
            <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder="What's your say..." name="" id="" className="flex-1 bg-transparent outline-none"/>
            </div>
        </div>
        <div className="">
            <div className="flex justify-between gap-8 mt-4">
                <Image src={"/noAvatar.png"} alt="" width={36} height={36} className="w-9 h-9 rounded-full"/>

                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">Ronny</span>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos provident maiores hic. 
                    </p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-4">
                        <div className="flex items-center gap-4">
                            <Image src={'/like.png'} alt="" width={12} height={12} className="cursor-pointer w-3 h-3"/>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">46</span>
                        </div>
                        <div className="">Reply</div>
                    </div>

                </div>
                <Image src={'/more.png'} alt="" width={16} height={16} className="w-4 h-4 cursor-pointer"/>
            
            </div>
        </div>
    
    </div>

  )
}

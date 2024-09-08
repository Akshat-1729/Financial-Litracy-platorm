import Image from "next/image"

export const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image src="/addpost.jpg" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea placeholder="Whats on your tracker today?" className="flex-1 p-2 bg-slate-100 rounded-lg" name="" id="">
          </textarea>
          <Image src="/addimage.png" alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end" />

        </div>
      </div>
    </div>
  )
}

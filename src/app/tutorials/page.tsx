import { LeftMenu } from "@/components/leftMenu";
import Videos from "@/components/Videos";
import { prisma } from "@/lib/client";
 // Import the client-side component

const Page = async () => {
  
  const videos = await prisma.video.findMany();


  return(
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[80%]">
        <Videos videos={videos}/>
        
      </div>
      


    </div>
  )
};

export default Page;
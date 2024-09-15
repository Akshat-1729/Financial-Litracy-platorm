import Videos from "@/components/Videos";
import { prisma } from "@/lib/client";
 // Import the client-side component

const Page = async () => {
  // Fetch videos using Prisma
  const videos = await prisma.video.findMany();

  // Pass videos to the client component
  return <Videos videos={videos}/>
};

export default Page;
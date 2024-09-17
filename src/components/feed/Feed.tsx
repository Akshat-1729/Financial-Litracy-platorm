import { Post } from "./Post";

export const Feed = () => {
  return (
    <div className="flex flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

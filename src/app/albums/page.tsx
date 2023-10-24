// import clouinary from "cloudinary";
import cloudinary from "@/components/cloudinary";

import { AlbumCard } from "../../components/album-card";

export type Folder = {
  name: string;
  path: string;
};

export default async function AlbumPage() {
  const { folders } = (await cloudinary.api.root_folders()) as {
    folders: Folder[];
  };
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { SearchResult } from "@/app/gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
// import cloudinary from "cloudinary";
import cloudinary from "@/components/cloudinary";

import AlbumGrid from "../../../components/album-grid";

const GalleryPage = async ({
  params: { albumName },
}: {
  params: {
    albumName: string;
  };
}) => {
  const results = (await cloudinary.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />

      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Album {albumName}</h1>
        </div>

        <AlbumGrid images={results.resources} />
      </div>
    </section>
  );
};
export default GalleryPage;

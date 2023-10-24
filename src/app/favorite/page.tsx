import { CloudinaryImage } from "@/components/ui/cloudinary_image";
// import cloudinary from "cloudinary";
import cloudinary from "@/components/cloudinary";

import React from "react";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import FavoriteList from "../../components/favorite_list";

export default async function FavoritePage() {
  const results = (await cloudinary.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: SearchResult[] };
  // .then((result: any) => console.log(result));
  console.log(JSON.stringify(results));

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        <FavoriteList initialResources={results.resources} />
      </div>
    </section>
  );
}

// export default FavoritePage;

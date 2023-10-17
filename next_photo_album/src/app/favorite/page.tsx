import { CloudinaryImage } from "@/components/ui/cloudinary_image";
import cloudinary from "cloudinary";
import React from "react";
import { SearchResults } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";

export default async function FavoritePage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: SearchResults[] };
  // .then((result: any) => console.log(result));
  console.log(JSON.stringify(results));

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <div>
              <CloudinaryImage
                key={result.public_id}
                imagedata={result}
                width="500"
                height="300"
                path="/favorite"
                alt="Description of my image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default FavoritePage;

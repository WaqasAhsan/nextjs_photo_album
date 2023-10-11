import { CloudinaryImage } from "@/components/ui/cloudinary_image";
import UploadButton from "@/components/ui/upload_button";
import cloudinary from "cloudinary";
import React from "react";
type SearchResults = {
  public_id: string;
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResults[] };
  // .then((result: any) => console.log(result));
  console.log(results);

  return (
    <section>
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold bg-slate-500">Gallerrry</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <div>
              <CloudinaryImage
                key={result.public_id}
                src={result.public_id}
                width="500"
                height="300"
                alt="Description of my image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default GalleryPage;

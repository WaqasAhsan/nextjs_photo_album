import UploadButton from "@/components/ui/upload_button";
import cloudinary from "cloudinary";
import React from "react";

export async function GalleryPage() {
  const results = await cloudinary.v2.search
    .expression(
      "resource_type:image AND tags=kitten AND uploaded_at>1d AND bytes>1m"
    )
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()
    .then((result: any) => console.log(result));

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>
    </section>
  );
}

// export default GalleryPage;

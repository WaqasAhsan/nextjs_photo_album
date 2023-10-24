"use client";

import { CloudinaryImage } from "@/components/ui/cloudinary_image";
import { SearchResult } from "../app/gallery/page";
import { ImageGrid } from "@/components/image_grid";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}

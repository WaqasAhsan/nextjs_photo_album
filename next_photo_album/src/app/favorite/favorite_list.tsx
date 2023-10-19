"use client";
import { CloudinaryImage } from "@/components/ui/cloudinary_image";
import cloudinary from "cloudinary";
import React, { useEffect, useState } from "react";
import { SearchResults } from "../gallery/page";

export default function FavoriteList({
  initialResources,
}: {
  initialResources: SearchResults[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {resources.map((result) => (
        <div>
          <CloudinaryImage
            key={result.public_id}
            imagedata={result}
            width="500"
            height="300"
            // path="/favorite"
            alt="Description of my image"
            onUnheart={(unheartedResources) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resources) =>
                    resources.public_id !== unheartedResources.public_id
                )
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}

// export default FavoriteList;

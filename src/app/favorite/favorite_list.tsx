"use client";
import { CloudinaryImage } from "@/components/ui/cloudinary_image";
import React, { useEffect, useState } from "react";
import { SearchResult } from "../gallery/page";

export default function FavoriteList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {resources.map((result) => (
        <div key={result.public_id}>
          <CloudinaryImage
            // key={result.public_id}
            imageData={result}
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

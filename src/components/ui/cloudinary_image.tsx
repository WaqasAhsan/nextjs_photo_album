"use client";
import { CldImage, CldImageProps } from "next-cloudinary";
import Heart from "../icons/heart";
import { setAsFavortieAction } from "@/components/actions/actions_gallery";
import { ComponentProps, useState, useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";
import FullHeart from "../icons/full_heart";
import { ImageMenu } from "../image_menu";

export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    // path: string;
    onUnheart?: (unheartedResources: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const { imageData, onUnheart } = props;
  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              setAsFavortieAction(imageData.public_id, false);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavortieAction(imageData.public_id, true);
            });
          }}
        />
      )}
      <ImageMenu image={imageData} />
    </div>
  );
}

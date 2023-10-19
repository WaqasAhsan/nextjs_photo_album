"use client";
import { CldImage, CldImageProps } from "next-cloudinary";
import Heart from "../icons/heart";
import { setAsFavortieAction } from "@/app/gallery/actions";
import { ComponentProps, useState, useTransition } from "react";
import { SearchResults } from "@/app/gallery/page";
import FullHeart from "../icons/full_heart";

export function CloudinaryImage(
  props: {
    imagedata: SearchResults;
    // path: string;
    onUnheart?: (unheartedResources: SearchResults) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const { imagedata, onUnheart } = props;
  const [isFavorited, setIsFavorited] = useState(
    imagedata.tags.includes("favorite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id} />
      {isFavorited ? (
        <FullHeart
          className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            onUnheart?.(imagedata);
            setIsFavorited(false);
            startTransition(() => {
              console.log(`Waqas : ${imagedata.public_id}`);
              setAsFavortieAction(imagedata.public_id, false);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              console.log(`Waqas : ${imagedata.public_id}`);
              setAsFavortieAction(imagedata.public_id, true);
            });
          }}
        />
      )}
    </div>
  );
}

"use client";
import { CldImage } from "next-cloudinary";
import Heart from "../icons/heart";
import { setAsFavortieAction } from "@/app/gallery/actions";
import { useTransition } from "react";
import { SearchResults } from "@/app/gallery/page";
import FullHeart from "../icons/full_heart";

export function CloudinaryImage(
  props: any & { imagedata: SearchResults; path: string }
) {
  const [transition, startTransition] = useTransition();
  const { imagedata } = props;
  const isFavorite = imagedata.tags.includes("favorite");
  return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id} />
      {isFavorite ? (
        <FullHeart
          className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              console.log(`Waqas : ${imagedata.public_id}`);
              setAsFavortieAction(imagedata.public_id, false, props.path);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              console.log(`Waqas : ${imagedata.public_id}`);
              setAsFavortieAction(imagedata.public_id, true, props.path);
            });
          }}
        />
      )}
    </div>
  );
}

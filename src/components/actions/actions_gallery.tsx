"use server";
// import cloudinary from "cloudinary";
import cloudinary from "@/components/cloudinary";

export async function setAsFavortieAction(
  publicId: string,
  isFavorite: boolean
) {
  if (isFavorite) {
    await cloudinary.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.uploader.remove_tag("favorite", [publicId]);
  }
}

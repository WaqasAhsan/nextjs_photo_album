"use server";
import cloudinary from "cloudinary";
// import { revalidatePath } from "next/cache";

export async function setAsFavortieAction(
  publicId: string,
  isFavorite: boolean
  // path: string
) {
  console.log(`Waqas 2 : ${publicId}`);
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1500);
  // });
  // revalidatePath(path);
}

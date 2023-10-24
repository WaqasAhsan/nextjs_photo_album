"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const ForceRefresh = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return <></>;
};

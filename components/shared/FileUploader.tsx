"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({}: FileUploaderProps) => {
  return (
    <div className="flex-center bg-dark-3 flex h-72 cursor-pointer overflow-hidden rounded-xl bg-gray-50">
      <div className="flex-center flex-col py-5 text-grey-500">
        <Image
          src="/assets/icons/upload.svg"
          width={77}
          height={77}
          alt="file upload"
        />
        <h3 className="mb-2 mt-2">Drag photo here</h3>
        <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
        <Button type="button" className="rounded-full">
          Select from computer
        </Button>
      </div>
    </div>
  );
};

export default FileUploader;

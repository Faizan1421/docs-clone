import { LoaderIcon } from "lucide-react";
import Image from "next/image";

interface FullscreenLoaderProps {
  label?: string;
}

export const FullsceenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
      {label && <p className="text-sm text-muted-foreground pt-1">{label}</p>}
    </div>
  )
}
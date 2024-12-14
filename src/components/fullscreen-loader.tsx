import Image from "next/image";

interface FullscreenLoaderProps {
  label?: string;
}

export const FullsceenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Image src='/loading-spinner.png' width={90} height={90} alt="Spinner" className="animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  )
}
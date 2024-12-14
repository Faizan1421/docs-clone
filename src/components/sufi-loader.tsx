import Image from "next/image";

export const SufiLoading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image src='/loading-spinner.png' alt="loading" width={70} height={70} className="animate-spin" />
      <p className="text-sm text-muted-foreground pt-2">
        Loading…
      </p>
    </div>
  )
}
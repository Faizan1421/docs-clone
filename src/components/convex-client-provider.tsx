"use client";

import { ReactNode } from "react";
import { ClerkProvider, useAuth, SignIn } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import Image from "next/image";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk
        useAuth={useAuth}
        client={convex}
      >
        <Authenticated>
          {children}
        </Authenticated>
        <Unauthenticated>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <SignIn />
          </div>
        </Unauthenticated>
        <AuthLoading >
          <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src='/loading-spinner.png' width={100} height={100} alt="loading" className="animate-spin" />
          </div>
        </AuthLoading>
      </ConvexProviderWithClerk>;
    </ClerkProvider>
  )
}
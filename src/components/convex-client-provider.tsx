"use client";

import { ReactNode } from "react";
import { ClerkProvider, useAuth, SignIn } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { SiGoogledocs } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { FullsceenLoader } from "./fullscreen-loader";

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
          <div className="min-h-screen flex items-center flex-col justify-center">
            <div className="flex-col gap-2 pt-4 ">
              <span className="font-medium flex gap-1 text:2xl  md:text-3xl">
                <SiGoogledocs className="size-5 md:size-7 fill-blue-500" /> Google Docs by</span>
              <span className="text-blue-500 font-semibold text-4xl md:text-5xl">Muhammad Sufyan</span>
              <hr className="bg-neutral-300 w-full h-0.5" />
            </div>
            <div className="pt-8">
              <SignIn routing="hash" />
            </div>
          </div>
        </Unauthenticated>
        <AuthLoading >
          <FullsceenLoader label="Auth loading…" />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
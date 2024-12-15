import { preloadQuery } from "convex/nextjs";
import { auth } from "@clerk/nextjs/server"

import { Document } from "./document";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

interface DocumentIdProps {
  params: Promise<{ documentId: Id<"documents"> }>
}

const DocumentIdPage = async ({ params }: DocumentIdProps) => {
  const { documentId } = await params;

  const { getToken } = await auth()
  const token = await getToken({ template: "convex" }) ?? undefined;

  if (!token) {
    throw new Error("Unauthorzied")
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token }
  )

  return <Document preloadedDocument={preloadedDocument} />
}

export default DocumentIdPage;
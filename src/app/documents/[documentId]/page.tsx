import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdProps {
  params: Promise<{ documentId: string }>
}

const DocumentIdPage = async ({params}: DocumentIdProps) => {
  const {documentId} = await params;
  
  return ( 
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
   );
}
 
export default DocumentIdPage;
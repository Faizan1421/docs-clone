'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { Navbar } from './navbar';
import { TemplatesGallery } from './templates-gallery';
import Image from 'next/image';

const Home = () => {
  const documents = useQuery(api.documents.get)

  if (documents === undefined) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Image src='/loading-spinner.png' width={100} height={100} alt="loading" className="animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className='fixe top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
        <Navbar />
      </div>
      <div className='mt-16'>
        <TemplatesGallery />
        {documents?.map((document) => (
          <span key={document._id}>{document.title}</span>
        ))}
      </div>
    </div>
  );
}


export default Home;
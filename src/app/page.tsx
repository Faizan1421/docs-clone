import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Click <Link href='/documents/123'><span className='text-blue-500 underline'>&nbsp;here&nbsp;</span></Link> to go to document id page
    </div>
  );
}


export default Home;
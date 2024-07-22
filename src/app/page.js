'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("the token is", token)
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/signin');
    }
  }, []);

  const fetchGetData = async () => {
    try {
        console.log(backendUrl)
        const response = await fetch("https://backend-affiliate-lml2.onrender.com", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        console.log(response.text());
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // const data = await response.json();
        
        return response;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

useEffect(()=>{
    fetchGetData()
},[])

  return (
    <main className="h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    </main>
  );
}
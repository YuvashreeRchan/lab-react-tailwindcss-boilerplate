// import React from 'react';

const Page = () => {
    return(
        <div>
            <header className="bg-red-400 h-20 flex justify-between items-center text-white">
                <div className='flex items-center ml-5'>
                    <div className='text-white text-2xl font-bold mr-8'>Kalvium</div>
                    <div className='flex gap-6'>
                        <div className="text-green-300 text-lg">About Us</div>
                        <div className="text-green-300 text-lg">Contact</div>
                        <div className="text-green-300 text-lg">Courses</div>
                    </div>
                </div>
                <div className='flex items-center mr-6'>
                    <button className="p-2 w-20 text-white border-2 border-white rounded">Login</button>
                </div>
            </header>
            <main className='mx-28 my-8'>
                <section className='mb-5'>
                    <button className='bg-blue-500 p-3 w-30 text-white font-bold rounded-md'>Button One</button>
                </section>
                <section className='bg-red-200 text-red-700 p-5 border-2 border-red-600 rounded-md'>
                    <span className='font-extrabold'>Alert! </span>This is awesome!
                </section>
                <section className='flex justify-center mt-10'>
                    <div className='flex items-center shadow-lg p-10 rounded-md'>
                    
                        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='h-8' alt="Kalvium Logo" />
                        <div className='pl-4'>
                            <p className='font-semibold text-lg'>Kalvium Store</p>
                            <p>You have a new course!</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='bg-gray-300 text-center text-black py-4'>
                <p>© 2021 Copyright: Kalvium</p>
            </footer>
        </div>
    )

}

export default Page;
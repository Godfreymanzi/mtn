import { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import NavBar from './nav';
import Footer from './footer';
import { image } from './Assets/image2.jpeg'
import { waicon } from './Assets/wa.svg';

class Main extends Component {
    render() {
        return (
            <>
                <div className='bg-black text-slate-200 h-12 sticky top-0 ...'>
                    <div className='flex justify-end mr-10'>
                        <div className='mx-5 font-bold'><p>report connection issue</p></div>
                        <div><button className='border border-black font-bold rounded-full px-4 bg-yellow-400 text-black'>
                            <div className='flex'>
                                <img className='mr-2' src='https://www.svgrepo.com/show/71720/exclamation-warning-sign-in-a-circle.svg' height='20' width='20' />
                                <p>report Momo Fraud</p>
                            </div>
                        </button></div>
                    </div>
                </div>
                <NavBar />
                <header class="bg-yellow-400 dark:bg-gray-900">
                    <div class="container bg-yellow-400 flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div class="flex flex-col bg-yellow-400 items-center w-full lg:flex-row lg:w-1/2">
                            <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                                <button class="w-3 h-3 mx-2 bg-[#8B8000] rounded-full lg:mx-0 focus:outline-none"></button>
                                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                            </div>

                            <div class="max-w-lg lg:mx-12 lg:order-2">
                                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">The best Internet network</h1>
                                <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                                <div class="mt-6">
                                    <Link to="" class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white  capitalize bg-[#002242] rounded-lg hover:bg-[#8B8000] lg:mx-0 lg:w-auto focus:outline-none">Download from App Store</Link>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img class="object-cover w-full h-full max-w-2xl rounded-md hover:shadow-md hover:shadow-gray-500" src="https://scontent.fkgl3-1.fna.fbcdn.net/v/t1.6435-9/159436545_3733309766706393_539378609965818538_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=mPZLNX_icJgAX-h2GkP&_nc_ht=scontent.fkgl3-1.fna&oh=00_AfDrt-yMxAMZ6KV4rVGepMvwzau-9lvs2_Q05N8zzD1Efw&oe=6436E2DE" alt="apple watch"></img>
                        </div>
                    </div>
                    
                </header>
                
               <div>
               <img className='mr-2 hover:shadow-md hover:shadow-gray-500' src='https://scontent.fkgl3-1.fna.fbcdn.net/v/t39.30808-6/335308379_1587985524962016_7267804256410130403_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2c4854&_nc_ohc=nTQ_ra9oYBwAX9HyrKw&_nc_ht=scontent.fkgl3-1.fna&oh=00_AfDlfb5ENzXFMHCE9LresfSOQ-6mYp440LmCjYHBVDzpxg&oe=6414937A' height='90' width='1900' />
               </div>



                <section className='bg-[#002242] bg-yellow-400'>

                    <div className='grid gap-8 bg-yellow-400 mt-8 h-[550px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>


                        <div class="flex flex-col bg-yellow-400 items-center justify-start w-full max-w-sm mx-auto py-5">
                            <div class=" card1 w-full h-72 mt-16 bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-gray-500"></div>
                            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                {/* <h3 class="py-2 font-bold tracking-wide text-center bg-[#8B8000] text-gray-800 uppercase dark:text-white"> Tsinda Pe!</h3> */}

                                {/* <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span class="font-bold text-gray-800 dark:text-gray-200">300 frw</span>
                                    <button class="px-2 py-1 text-xs font-semibold text-[#8B8000] uppercase transition-colors duration-300 transform bg-[#002242] rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Ishyura na MOMO</button>
                                </div> */}
                            </div>
                        </div>

                        {/* second card */}

                        <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-5">
                            <div class=" card2 w-full h-72 mt-16 cursor-pointer  rounded-lg hover:shadow-md hover:shadow-gray-500"></div>
                            {/* <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 class="py-2 font-bold tracking-wide text-center bg-[#8B8000] text-gray-800 uppercase dark:text-white">YOLO</h3>

                                 
                            </div> */}
                        </div>

                        {/* third card */}
                        <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-5">
                            <div class=" card3 w-full h-72 mt-14  bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-gray-500"></div>
                            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                {/* <h3 class="py-2 font-bold tracking-wide text-center bg-[#8B8000] text-gray-800 uppercase dark:text-white"></h3> */}

                                {/* <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span class="font-bold text-gray-800 dark:text-gray-200"></span>
                                    <button class="px-2 py-1 text-xs font-semibold text-[#8B8000] uppercase transition-colors duration-300 transform bg-[#002242] rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Ishyura na MOMO</button>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </section>
                <section class="bg-white dark:bg-gray-900">
                    <div class="container px-6 py-10 mx-auto">
                        <div class="mt-6 md:flex md:items-center md:justify-between">
                            <div className='ml-[350px]'>
                                <h1 class="text-2xl font-semibold  text-[#8B8000] capitalize lg:text-3xl dark:text-white">
                                    What our clients are saying
                                </h1>

                                <div class="flex mx-auto mt-6">
                                    <span class="inline-block w-40 h-1 bg-[#002242] rounded-full"></span>
                                    <span class="inline-block w-3 h-1 mx-1 bg-[#002242] rounded-full"></span>
                                    <span class="inline-block w-1 h-1 bg-[#002242] rounded-full"></span>
                                </div>
                            </div>

                            <div class="flex justify-between mt-8 md:mt-0">
                                <button title="left arrow" class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <section class="grid grid-cols-1 gap-8 mt-8 bg-yellow-400 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                            <div class="p-8 border shadow-black shadow-md cursor-pointer rounded-lg dark:border-gray-700">
                                <div class="flex items-center -mx-2">
                                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div class="mx-2">
                                        <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                                    </div>
                                </div>
                                {/* <p class="leading-loose text-[#002242] dark:text-gray-400 mt-8">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p> */}
                            </div>

                            <div class="p-8 bg-[#002242] bg-yellow-400 cursor-pointer shadow-black shadow-md border border-transparent rounded-lg">


                                <div class="flex items-center -mx-2">
                                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                    <div class="mx-2">
                                        <h1 class="font-semibold text-[#8B8000]">Jeny Doe</h1>
                                        <span class="text-sm text-[#8B8000]">CEO, Jeny Consultency</span>
                                    </div>
                                </div>
                                {/* <p class="leading-loose mt-8 text-white">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p> */}
                            </div>

                            <div class="p-8 border rounded-lg shadow-black shadow-md cursor-pointer dark:border-gray-700">


                                <div class="flex items-center  -mx-2">
                                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                    <div class="mx-2">
                                        <h1 class="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                                    </div>
                                </div>
                                {/* <p class="leading-loose text-[#002242] dark:text-gray-400 mt-8">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p> */}
                            </div>
                        </section>
                    </div>
                </section>
                <Footer />
            
            </>
        );
    }
}

export default Main;

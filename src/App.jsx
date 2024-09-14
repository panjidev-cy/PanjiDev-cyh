import profile from'./assets/profile.jpeg'
import CardBrowser from './components/Fragment/CardBrowser';
import CardTimeline from './components/Element/CardTimeline';
import setup from './assets/setup.jpeg'
function App(){
  return (
    <div>
      <header className="flex items-center justify-between gap-5 p-3 fixed top-0 left-0 right-0 z-[999] bg-slate-200 ">
          <div className="flex items-center gap-2 ">
            <div className="logo bg-primary-800 w-8 h8 flex items-center justify-center p-1 rounded-xl">
              <i className="uil uil-bolt text-volt"></i>
              </div>
            <h1 className="font-Playwrite font-semibold text-base text-primary-600">thevalic</h1>
          </div>

        
        <div>
          <button className="bg-primary-600 text-primary-100 font-poppins text-sm px-3 py-1 rounded-lg">S</button>
        </div>


      </header>









      <main>

        <section className="flex justify-center items-center h-screen w-full">
            <h1 className="font-Manrope font-bold text-6xl w-[65%] text-center leading-snug">
            Turning Ideas into Interactive Web <span className="font-Playwrite text-4xl bg-slate-300 px-4 py-1 rounded-lg text-primary-600 ">Experiences.</span> 
            </h1>      
        </section>
                                                                                                                                                                                                                          
        <section className="w-full flex items-center justify-center gap-10 h-screen mx-10">
            <div className="rounded-md overflow-hidden">
                <img src={profile} alt="" className='w-[400px] '/>
            </div>
            <div className=" flex items-center justify-center">
                <CardBrowser></CardBrowser>
            </div>

            
        </section>





        <section className='w-full p-10 flex flex-col items-center mt-24'>
          <div className="flex items-center justify-between gap-7">
            <div className="rounded-md overflow-hidden  bg-white shadow-gray-300 shadow-lg">
              <div className="w-full h-10 bg-slate-200 flex items-center justify-start p-4 gap-3">
                <div className="w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className='font-poppins font-semibold '>Setup Room</h3>
              </div>
              <img src={setup} alt="" className='h-[450px] rounded-b-md '/>
            </div>
            <div>
              <h1 className='text-7xl font-extrabold font-Manrope uppercase w-[200px] border-l-4 pl-5 border-gray-500 '>
                <div>work</div>
                <div>&</div>
                <div>studio</div>
              </h1>
            </div>
          </div>


          <section className='w-full  mt-10 py-5'>
              <CardTimeline>
                <div className="flex flex-col gap-4 pb-10">
                  <h2 className='font-Manrope font-bold text-2xl text-gray-600'>Asus Laptop</h2>
                  <p className='w-[70%] font-poppins font-normal text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas reiciendis laborum maiores praesentium aliquid totam expedita quos ipsam soluta consequatur.</p>
                  <div className="flex items-start flex-col w-[70%] border-[1.5px] border-gray-400 rounded-md">
                    <div className='grid grid-cols-2  bg-slate-400 w-full gap-3 p-2 font-poppins font-semibold text-base'>
                      <div className="border-r-[1.5px] border-gray-500 pl-3">name</div>
                      <div className="">detail</div>
                    </div>
                    <div className='grid grid-cols-2 px-5 py-3 w-full gap-3'>
                      <div className="flex flex-col gap-4 font-poppins text-base font-medium border-r-[1.5px]  border-gray-500">
                        <span>OS</span>
                        <span>Model</span>
                        <span>Processor</span>
                        <span>RAM</span>
                        <span>GPU</span>
                        <span>Storage</span>
                      </div>
                      <div className='flex flex-col gap-4 font-poppins text-base font-medium'>
                        <span>Windows 11</span>
                        <span>Asus TUF Gaming FX505</span>
                        <span>AMD Ryzen 5 5600H</span>
                        <span>16 GB</span>
                        <span>AMD Radeon RX 6600M</span>
                        <span>512 GB</span>
                      </div>
                    </div>
                  </div>

                </div>
              </CardTimeline>
              <CardTimeline>
                <div className="flex flex-col gap-4 pb-10">
                  <h2 className='font-Manrope font-bold text-2xl text-gray-600'>Infinix Hot 12 Play</h2>
                  <p className='w-[70%] font-poppins font-normal text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas reiciendis laborum maiores praesentium aliquid totam expedita quos ipsam soluta consequatur.</p>
                  <div className="flex items-start flex-col w-[70%] border-[1.5px] border-gray-400 rounded-md">
                    <div className='grid grid-cols-2  bg-slate-400 w-full gap-3 p-2 font-poppins font-semibold text-base'>
                      <div className="border-r-[1.5px] border-gray-500 pl-3">name</div>
                      <div className="">detail</div>
                    </div>
                    <div className='grid grid-cols-2 px-5 py-3 w-full gap-3'>
                      <div className="flex flex-col gap-4 font-poppins text-base font-medium border-r-[1.5px]  border-gray-500">
                        <span>OS</span>
                        <span>Model</span>
                        <span>Processor</span>
                        <span>RAM</span>
                        <span>GPU</span>
                        <span>Storage</span>
                      </div>
                      <div className='flex flex-col gap-4 font-poppins text-base font-medium'>
                        <span>Windows 11</span>
                        <span>Asus TUF Gaming FX505</span>
                        <span>AMD Ryzen 5 5600H</span>
                        <span>16 GB</span>
                        <span>AMD Radeon RX 6600M</span>
                        <span>512 GB</span>
                      </div>
                    </div>
                  </div>

                </div>
              </CardTimeline>
              <CardTimeline>
                <div className="flex flex-col gap-4">
                  <h2 className='font-Manrope font-bold text-2xl text-gray-600'>Converencing device</h2>
                  <p className='w-[70%] font-poppins font-normal text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas reiciendis laborum maiores praesentium aliquid totam expedita quos ipsam soluta consequatur.</p>
                  <div className="flex items-start flex-col w-[70%] border-[1.5px] border-gray-400 rounded-md">
                    <div className='grid grid-cols-2  bg-slate-400 w-full gap-3 p-2 font-poppins font-semibold text-base'>
                      <div className="border-r-[1.5px] border-gray-500 pl-3">name</div>
                      <div className="">detail</div>
                    </div>
                    <div className='grid grid-cols-2 px-5 py-3 w-full gap-3'>
                      <div className="flex flex-col gap-4 font-poppins text-base font-medium border-r-[1.5px]  border-gray-500">
                        <span>OS</span>
                        <span>Model</span>
                        <span>Processor</span>
                        <span>RAM</span>
                        <span>GPU</span>
                        <span>Storage</span>
                      </div>
                      <div className='flex flex-col gap-4 font-poppins text-base font-medium'>
                        <span>Windows 11</span>
                        <span>Asus TUF Gaming FX505</span>
                        <span>AMD Ryzen 5 5600H</span>
                        <span>16 GB</span>
                        <span>AMD Radeon RX 6600M</span>
                        <span>512 GB</span>
                      </div>
                    </div>
                  </div>

                </div>
              </CardTimeline>




          </section>
        </section>

      </main>



      
      








      <footer className='w-full bg-gray-300'>

        <div className="grid grid-cols-3 px-10 py-10 gap-10">
          <div>
            <h1 className='font-poppins font-semibold text-sm text-gray-600 pb-2'>work</h1>
            <ul className='font-poppins font-semibold text-sm text-gray-600 ml-3 gap-3 flex flex-col list-disc'>
              <li><a href="#" id="">Home</a></li>
              <li><a href="#" id="">About me</a></li>
              <li><a href="#" id="">Contact</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-poppins font-semibold text-sm text-gray-600 pb-2'>work</h1>
            <ul className='font-poppins font-semibold text-sm text-gray-600 ml-3 gap-3 flex flex-col list-disc'>
              <li><a href="#" id="">Home</a></li>
              <li><a href="#" id="">About me</a></li>
              <li><a href="#" id="">Contact</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-poppins font-semibold text-sm text-gray-600 pb-2'>work</h1>
            <ul className='font-poppins font-semibold text-sm text-gray-600 ml-3 gap-3 flex flex-col list-disc'>
              <li><a href="#" id="">Home</a></li>
              <li><a href="#" id="">About me</a></li>
              <li><a href="#" id="">Contact</a></li>
            </ul>
          </div>

          
        </div>
          
      </footer>
      
    </div>
  )
}

export default App;
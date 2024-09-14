
import CardTimeline from "../Element/CardTimeline";
const CardBrowser = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
              <div className="bg-white shadow-lg rounded-2xl max-w-xl mx-auto border border-gray-300">
                {/* Header Bar */}
                <div className="bg-gray-100 p-4 flex items-center gap-2 rounded-t-2xl">
                  <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                </div>

                {/* Body Content */}
                <div className="p-6 bg-red-white rounded-b-xl">
                  {/* Heading */}
                  <div className="flex flex-col ">

                    


                    <CardTimeline>
                        <h4>name</h4>
                        <h1 className="font-Manrope text-5xl font-black capitalize text-black">Panji Bhekti Wibowo</h1>
                    </CardTimeline>
                    <CardTimeline>
                        <h4 className="font-poppins text-sm font-medium">age, work</h4>
                        <div className="flex gap-4 text-gray-700">
                          <h3 className="font-poppins text-base font-semibold">16 years old</h3>
                          <h3 className="font-poppins text-base font-semibold">Student</h3>
                        </div>
                    </CardTimeline>
                    <CardTimeline>
                        <p className="font-poppins text-base font-normal text-slate-500 text-justify max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi fuga, alias similique corrupti illum?
                        </p>
                    </CardTimeline>
                    <CardTimeline>
                        <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-4">
                            {/* Skills Column */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Web Development</li>
                                <li>UI/UX Design</li>
                                <li>Graphic Design</li>
                                {/* Add more skills as needed */}
                                </ul>
                            </div>

                            {/* Languages & Technologies Column */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-3">Languages & Technologies</h2>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Tailwind CSS</li>
                                    <li>Python</li>
                                    {/* Add more languages/technologies as needed */}
                                </ul>
                            </div>
                        </div>
                    </CardTimeline>
                  </div>
                </div>

              </div>
            </div>
    </div>
  )
}

export default CardBrowser;

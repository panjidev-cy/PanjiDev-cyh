const CardTimeline = ({ children }) => {
    return (
      <div>
        <div className='relative border-slate-500 border-l-4 px-4 py-2 '>
          <div className='absolute -left-3 -top-3 bg-primary-600 w-5 h-5 rounded-full border-white border-2 flex items-center justify-center'>
            <div className='w-2 h-2 bg-white rounded-full'></div>
          </div>
          <div className="flex items-start flex-col relative -top-5 ">
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  export default CardTimeline;
  
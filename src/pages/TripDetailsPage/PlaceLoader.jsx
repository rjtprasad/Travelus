const PlaceLoader = () => {
  return (
    <div>
      <div className="mt-5 h-7 w-full bg-slate-200 rounded-md animate-pulse"></div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div className="mt-3 h-5 w-1/3 bg-slate-200 rounded-md animate-pulse"></div>
          <div className="mt-3 h-28 w-full bg-slate-100 rounded-lg flex gap-5 items-center">
            <div className="w-[100px] h-[104px] bg-slate-200 rounded-lg m-1 animate-pulse"></div>
            <div className="flex flex-col gap-2 w-4/6 animate-pulse">
              <div className="flex justify-between">
                <div className="h-5 w-6/12 bg-slate-200 rounded-md "></div>
                <div className="h-5 w-2/12 bg-slate-200 rounded-md "></div>
              </div>

              <div className="h-10 w-full bg-slate-200 rounded-md"></div>
              <div className="h-4 w-1/3 bg-slate-200 rounded-md"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-3 h-5 w-1/3 bg-slate-200 rounded-md animate-pulse"></div>
          <div className="mt-3 h-28 w-full bg-slate-100 rounded-lg flex gap-5 items-center">
            <div className="w-[100px] h-[104px] bg-slate-200 rounded-lg m-1 animate-pulse"></div>
            <div className="flex flex-col gap-2 w-4/6 animate-pulse">
              <div className="flex justify-between">
                <div className="h-5 w-6/12 bg-slate-200 rounded-md "></div>
                <div className="h-5 w-2/12 bg-slate-200 rounded-md "></div>
              </div>

              <div className="h-10 w-full bg-slate-200 rounded-md"></div>
              <div className="h-4 w-1/3 bg-slate-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceLoader;

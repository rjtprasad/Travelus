const AllTripsLoader = () => {
  return (
    <div className="p-2 bg-slate-50 rounded-lg">
      <div className="h-[200px] w-full rounded-lg bg-slate-200 animate-pulse"></div>
      <div className="my-2 flex flex-col gap-3">
        <div className="bg-slate-200 w-full h-6 mt-1 rounded-sm animate-pulse"></div>
        <div className="bg-slate-200 w-full h-6 rounded-sm animate-pulse"></div>
      </div>
    </div>
  );
};

export default AllTripsLoader;

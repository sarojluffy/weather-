const TimeNlocation = ({ abcd, cityy, country, main }) => {
  return (
    <>
      <div>
        <p className="text-center font-extralight text-slate-200">{abcd}</p>

        <h1 className="text-center mt-5 text-xl">{`${cityy} , ${country}`}</h1>
        <p className="text-center font-extralight text-slate-200 mt-4">
          {" "}
          {`${main}`}
        </p>
      </div>
    </>
  );
};

export default TimeNlocation;

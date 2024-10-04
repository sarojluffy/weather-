const Topbuttons = () => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 1,
      name: "Sydney",
    },
    {
      id: 1,
      name: "Tokyo",
    },
    {
      id: 1,
      name: "Paris",
    },
    {
      id: 1,
      name: "Toronto",
    },
  ];

  return (
    <>
      <div className="flex  justify-around items-center ">
        {cities.map((abc) => {
          return (
            <>
              <button className=" font-custom rounded-md  transition ease-in hover:bg-blue-700 px-3 py-2 ">
                {abc.name}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Topbuttons;

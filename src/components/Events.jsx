/* eslint-disable react/prop-types */
const Events = ({ events }) => {
  return (
    <div className="flex flex-col m-5 border p-5 bg-slate-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-[550] mb-4 text-center text-slate-800">
        Events
      </h2>
      {events.map((event, index) => (
        <div key={index} className="flex items-center mb-2">
          <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
          <h3 className="font-medium">{event.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Events;

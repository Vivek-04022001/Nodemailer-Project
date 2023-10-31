import events from '../../assets/events.png'

const Events = () => {
  return (
    <section id="events">
      <div className="container max-w-6xl mx-auto mb-40 px-4 flex items-center justify-center gap-20">
        {/* text-content */}
        <div className="w-1/2 space-y-4 ">
          <h3 className="text-5xl text-left font-bold">
            Unlock Your Potential and Make a Lasting Impact with UNYN
          </h3>
          <p className="text-neutral text-md">
            Joining UNYN offers a unique opportunity for personal growth,
            professional development, and making a positive difference in the
            world. Our dynamic and impactful international student society is
            dedicated to nurturing the talents and potential of young
            individuals across colleges and universities worldwide. Through our
            diverse range of programs, events, and initiatives, we empower the
            youth today to create a brighter and more promising future for
            tomorrow.
          </p>
        </div>
        {/* image container */}
        <div className="image-container w-1/2 ">
          <img src={events} alt="empower-youth" />
        </div>
      </div>
    </section>
  );
};

export default Events;

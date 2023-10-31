import Button from "../utilities/Button";

const JoinSection = () => {
  return (
    <section id="join" className="bg-brand">
      <div className="container mx-auto max-w-6xl mb-40 px-4 py-20 flex flex-col gap-y-4 justify-center items-center text-white">
        <h3 className="text-5xl ">Empowering Your Potential with UNYN </h3>
        <h4 className="text-lg ">
          Join UNYN and unlock endless opportunities for growth{" "}
        </h4>
        {/* button container */}
        <div className="flex gap-x-8">
          <Button
            text={"Join"}
            bgColor="bg-white"
            textColor="text-brand"
            borderColor="border-white"
          />
          <Button
            text={"Get evolved"}
            bgColor="bg-brand"
            textColor="text-white"
            borderColor="border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;

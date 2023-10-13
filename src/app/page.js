import Hero from "./components/Hero";
import ServicesCard from "./components/ServicesCard";
import { service } from "../../data/services";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className=" sm:px-16 px-6 py-4 flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Our Services</h1>
          <p>Explore out Services you might like</p>
        </div>
      </div>
      <section>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 px-10 sm:px-14 ">
          {service.map((service) => (
            <ServicesCard service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}

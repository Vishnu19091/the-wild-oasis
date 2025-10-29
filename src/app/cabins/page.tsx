// <-------- This will always be rendered Server-Side -------->

import Counter from "@/app/_components/Counter";
import style from "./page.module.css";
import { title } from "process";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
// import Navigation from "../components/Navigation";

interface PostProp {
  postID: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const metadata = {
  title: "Cabins",
};

function Test() {
  /* 

  This fetch is actually done on the server side,
  so the client won't be fetching this thing
  fetches data before the client loads the website completely

  We can't really use hooks inside a server component

  */
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts/1/comments"
  // );
  // const data: PostProp[] = await res.json();

  /* So this is a server component, this will not
  log the data inside the browser instead it will log
  inside the terminal of where the server is running
 
  console.log(data);

  CgXtGU8XYM6lt5uM


  const api = await fetch("http://localhost:3000/api");
 
  const apiData = await api.json();
 
  console.log(apiData);
  */

  return (
    <div className={style.main}>
      <h1>Cabins Page</h1>
    </div>
  );
}

export default async function Page() {
  // CHANGE
  const cabins = await getCabins();
  console.log(cabins);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

import MyAvatar from "./assets/myAvatar.svg";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="text-center items-center flex justify-center flex-col">
            <div className="h-3/4 w-3/4 max-h-80 max-w-80 relative flex justify-center">
              <img
                src={MyAvatar}
                alt="My Avatar"
                className="h-full object-contain mask-gradient"
              />
            </div>

            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white xsm:text-5xl sm:text-7xl">
              Franco Gutierrez
            </h1>
            <p className="mt-4 flex items-center text-pretty text-lg font-medium text-white sm:text-xl/8">
              Full-stack web developer
              <span className="animate-bounce p-2 w-fit text-indigo-300 font-semibold">
                {" </>"}
              </span>
              <a href="/Franco_Gutierrez_Resume_en.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-2 bg-indigo-400 px-4 rounded-2xl ml-5 items-center hover:scale-105 transition-all">
                CV 
                <FaExternalLinkAlt />
              </a>
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { SiteLogo } from "../icons/SiteLogo";
import { classMerge } from "../utils/classMerge";
import { CloseIcon, SearchIcon } from "../icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleNavigation = () => {
    setToggle((prevState) => !prevState);
  };

  const ulRef = useRef<HTMLUListElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!ulRef.current || !formRef.current) return;

    const liElements = ulRef.current.querySelectorAll("li");

    if (!toggle) {
      const tl = gsap.timeline();
      tl.to(liElements, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
      tl.to(
        formRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2",
      );
    } else {
      const tl = gsap.timeline();
      tl.to(formRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power2.in",
      });
      tl.to(
        liElements,
        {
          opacity: 0,
          y: -40,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.1",
      );
    }
  }, [toggle]);

  return (
    <nav className="py-6">
      <div className="container">
        <div className="flex md:flex-row">
          <Link to="/" className="">
            <SiteLogo className="inline-block" />
          </Link>
          <Button
            className="block lg:hidden"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavigation}
          >
            {toggle ? "open" : "close"}
          </Button>
          <div
            className={classMerge(
              "bg-violet fixed inset-0 flex h-dvh w-full flex-col items-center justify-center gap-y-8 p-4 transition-all ease-out will-change-transform md:ml-[88px] md:hidden md:flex-row lg:relative lg:bg-transparent",
              toggle
                ? "-translate-y-full opacity-0 duration-500"
                : "translate-y-0 opacity-100 duration-300",
            )}
            id="navbarSupportedContent"
          >
            <ul
              className="flex flex-col items-center justify-center gap-y-2 text-white md:flex-row md:text-black"
              ref={ulRef}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form
              ref={formRef}
              className="flex w-full focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black focus-within:outline-dotted md:ml-32"
              role="search"
            >
              <input
                className="border-light-grey w-full border-2 border-r-0 px-2 text-white outline-0 lg:max-w-[317px]"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="bg-accent border-accent relative border-2 px-3 py-2"
                type="submit"
                aria-label="search action button"
              >
                <SearchIcon className="z-10 h-6 w-6" />
              </button>
            </form>
            <Button
              className="absolute top-4 right-5 block rounded-full border-2 border-white p-1 text-white md:hidden"
              onClick={toggleNavigation}
            >
              <CloseIcon className="h-6 w-6 stroke-2" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

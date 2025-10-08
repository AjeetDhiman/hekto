import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@headlessui/react";
import useMediaQuery from "@/utils/useMediaQuery";
import { SiteLogo } from "@/icons/SiteLogo";
import { CloseIcon, SearchIcon } from "@/icons";
import { HamburgerIcon } from "@/icons/HamburgerIcon";
import { cn } from "@/lib/utils";

const navLinks = [
  { link: "/", label: "Home" },
  { link: "/products", label: "Products" },
  { link: "/blog", label: "Blog" },
  { link: "/shop", label: "Shop" },
  { link: "/contact-us", label: "Contact" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavigation = () => {
    setIsNavOpen((prev) => !prev);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isInert = isMobile && !isNavOpen;

  const ulRef = useRef<HTMLUListElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isNavOpen && ulRef.current) {
      const firstLink = ulRef.current.querySelector("a");
      firstLink?.focus();
    } else if (!isNavOpen) {
      toggleButtonRef.current?.focus();
    }
  }, [isNavOpen]);

  useEffect(() => {
    if (isNavOpen && isMobile) {
      closeButtonRef.current?.focus();
    }
  }, [isNavOpen, isMobile]);

  useEffect(() => {
    if (!logoRef.current || !toggleButtonRef.current) return;

    const tl = gsap.timeline();
    gsap.set(logoRef.current, { y: -40, opacity: 0 });
    gsap.set(toggleButtonRef.current, { y: -40, opacity: 0 });

    tl.to(logoRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    tl.to(
      toggleButtonRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!ulRef.current || !formRef.current) return;

    const liElements = ulRef.current.querySelectorAll("li");
    const tl = gsap.timeline();

    if (!isMobile) {
      gsap.set(liElements, { y: -40, opacity: 0, pointerEvents: "none" });
      gsap.set(formRef.current, { y: -40, opacity: 0, pointerEvents: "none" });
      tl.to(liElements, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "auto",
      });
      tl.to(
        formRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "auto",
        },
        "-=0.3",
      );
    } else {
      if (isNavOpen) {
        tl.to(liElements, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "auto",
        });
        tl.to(
          formRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            pointerEvents: "auto",
          },
          "-=0.3",
        );
      } else {
        tl.to(
          formRef.current,
          {
            opacity: 0,
            y: -40,
            duration: 0.3,
            ease: "power2.in",
            pointerEvents: "none",
          },
          0,
        );
        tl.to(
          liElements,
          {
            opacity: 0,
            y: -40,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.in",
            pointerEvents: "none",
          },
          "-=0.2",
        );
      }
    }

    return () => {
      tl.kill();
    };
  }, [isNavOpen, isMobile]);
  useEffect(() => {
    if (!ulRef.current || !formRef.current) return;

    // Avoid animating hiding on initial load by checking a ref flag or isNavOpen
    if (!isNavOpen && isMobile) {
      // Reset styles to hidden but no animation
      gsap.set(ulRef.current.querySelectorAll("li"), {
        y: -40,
        opacity: 0,
        pointerEvents: "none",
      });
      gsap.set(formRef.current, { y: -40, opacity: 0, pointerEvents: "none" });
      return; // skip animation timeline
    }

    // Animate the elements now
    const liElements = ulRef.current.querySelectorAll("li");
    const tl = gsap.timeline();

    if (!isMobile) {
      gsap.set(liElements, { y: -40, opacity: 0, pointerEvents: "none" });
      gsap.set(formRef.current, { y: -40, opacity: 0, pointerEvents: "none" });
      tl.to(liElements, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "auto",
      });
      tl.to(
        formRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "auto",
        },
        "-=0.3",
      );
    } else {
      if (isNavOpen) {
        tl.to(liElements, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "auto",
        });
        tl.to(
          formRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            pointerEvents: "auto",
          },
          "-=0.3",
        );
      } else {
        tl.to(
          formRef.current,
          {
            opacity: 0,
            y: -40,
            duration: 0.3,
            ease: "power2.in",
            pointerEvents: "none",
          },
          0,
        );
        tl.to(
          liElements,
          {
            opacity: 0,
            y: -40,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.in",
            pointerEvents: "none",
          },
          "-=0.2",
        );
      }
    }

    return () => {
      tl.kill();
    };
  }, [isNavOpen, isMobile]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isNavOpen]);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return (
    <nav aria-label="Primary navigation" className="py-6">
      <div className="container">
        <div className="flex items-center justify-between gap-x-6 md:flex-row">
          <Link
            to="/"
            className="flex-none"
            aria-label="Homepage"
            ref={logoRef}
          >
            <SiteLogo className="inline-block" />
          </Link>
          <Button
            ref={toggleButtonRef}
            className="block md:hidden"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen}
            aria-label={
              isNavOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={toggleNavigation}
          >
            {isNavOpen ? (
              <CloseIcon className="h-6 w-6 stroke-2" />
            ) : (
              <HamburgerIcon className="h-6 w-6 stroke-2" />
            )}
          </Button>
          <div
            id="navbarSupportedContent"
            inert={isInert}
            className={cn(
              "bg-violet fixed inset-0 flex h-dvh w-full flex-1 flex-col items-center justify-center gap-x-3 gap-y-8 p-4 transition-all ease-out will-change-transform md:relative md:h-full md:flex-row md:justify-between md:bg-transparent md:p-0 lg:ml-[88px]",
              isNavOpen
                ? "z-50 translate-y-0 opacity-100 duration-300"
                : "-translate-y-full opacity-0 duration-500 md:translate-y-0 md:opacity-100",
            )}
            style={
              prefersReducedMotion ? { transitionDuration: "0ms" } : undefined
            }
          >
            <ul
              className="font-lato flex flex-col items-center justify-center gap-y-4 text-lg leading-5 text-white md:flex-row md:justify-start md:gap-x-9 md:text-base md:text-[#0D0E43]"
              ref={ulRef}
            >
              {navLinks.map(({ link, label }) => (
                <li className="nav-item" key={link}>
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      cn(
                        "hover:text-accent duration-200 ease-in",
                        isActive ? "text-accent" : "",
                      )
                    }
                    aria-current={
                      window.location.pathname === link ? "page" : undefined
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <form
              ref={formRef}
              className="w-full md:w-auto xl:w-[317px]"
              role="search"
              aria-label="Site search"
            >
              <div className="flex focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black focus-within:outline-dotted md:w-auto">
                <input
                  className="border-light-grey w-full border-2 border-r-0 px-2 text-white outline-0 md:w-auto lg:w-full"
                  type="search"
                  name="search"
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
              </div>
            </form>
            {isNavOpen && (
              <Button
                ref={closeButtonRef}
                className="absolute top-4 right-5 block rounded-full border-2 border-white p-1 text-white md:hidden"
                onClick={toggleNavigation}
                aria-label="Close navigation menu"
              >
                <CloseIcon className="h-6 w-6 stroke-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { classMerge } from "../utils/classMerge";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  HeartIcon,
  CartIcon,
} from "../icons";
import SelectBox from "./SelectBox";

const language = [
  { label: "English", value: "english" },
  { label: "Hindi", value: "hindi" },
];
const currencyList = [
  { label: "INR", value: "rupee" },
  { label: "USD", value: "usd" },
];

const loginOptions = [
  { href: "/settings", label: "Settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
];

const TopHeader = () => {
  const [lang, setLang] = useState(language[0]);
  const [currency, setCurrency] = useState(currencyList[0]);
  return (
    <div className="bg-violet pt-3 pb-4">
      <div className="container">
        <div className="font-base flex flex-col justify-between gap-y-2.5 font-semibold text-white sm:items-center md:flex-row">
          <ul className="flex flex-row items-center justify-center gap-1.5 gap-y-1.5 md:gap-6 lg:gap-x-12">
            <li>
              <a
                href="mailto:hekto@gmail.com"
                className="flex items-center gap-1 sm:gap-3"
              >
                <EnvelopeIcon className="h4 w-4" />
                hekto@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:1234567890" className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4" />
                (12345)67890
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 text-base sm:items-center md:flex-row md:flex-nowrap [&>div]:flex [&>div]:items-center [&>div]:gap-0.5">
            <SelectBox
              list={language}
              defaultValue={lang}
              setAction={setLang}
              icon={true}
            />
            <SelectBox
              list={currencyList}
              defaultValue={currency}
              setAction={setCurrency}
              icon={true}
            />
            <div className="!items-baseline">
              {/* Login */}
              <Menu>
                <MenuButton as={Fragment}>
                  <button>My Account</button>
                </MenuButton>
                <MenuItems
                  anchor="bottom"
                  transition
                  className="ring-opacity-5 origin-bottom-center absolute rounded-none bg-white shadow-lg ring-1 ring-black transition duration-200 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                >
                  {loginOptions.map((link) => (
                    <MenuItem key={link.href} as={Fragment}>
                      {({ focus }) => (
                        <a
                          className={classMerge(
                            "block bg-white px-3 py-2 duration-100 ease-in",
                            focus && "bg-violet text-white",
                          )}
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
              <UserIcon className="h-4 w-4" />
            </div>
            <div>
              Wishlist
              <HeartIcon className="h-4 w-4" />
            </div>
            <div>
              <button type="button">
                <CartIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

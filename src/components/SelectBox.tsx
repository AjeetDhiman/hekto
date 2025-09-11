import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { classMerge } from "../utils/classMerge";
import { ChevronDownIcon } from "../icons";

interface Option {
  label: string;
  value: any;
}
interface SelectBoxProps {
  list: Option[];
  className?: string;
  defaultValue: Option;
  setAction: React.Dispatch<React.SetStateAction<Option>>;
  icon: boolean;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  className,
  list,
  defaultValue,
  setAction,
  icon,
  ...rest
}) => {
  return (
    <div className={classMerge(className)} {...rest}>
      <Listbox value={defaultValue} onChange={setAction}>
        <ListboxButton
          className={classMerge(
            "relative block w-full rounded-lg bg-transparent pr-5 text-left text-white",
            "focus:not-data-focus:outline-none",
          )}
        >
          {defaultValue.label}
          {icon ? (
            <ChevronDownIcon
              className="group absolute top-0.5 right-0 size-4 h-4 w-4 text-white"
              aria-hidden="true"
            />
          ) : (
            ""
          )}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={classMerge(
            "bg-white p-1",
            "origin-bottom-center shadow transition duration-200 ease-out data-closed:scale-95 data-leave:data-closed:opacity-0",
          )}
        >
          {list.map((list) => (
            <ListboxOption
              key={list.label}
              value={list}
              className="group data-focus:text-violet data-selected:text-violet mb-0.5 flex cursor-default items-center gap-2 rounded-xs px-3 py-1.5 select-none"
            >
              <div className="data-selected:text-white">{list.label}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default SelectBox;

import { twMerge } from "tailwind-merge";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export function TextArea({ name, label, ...props }: TextAreaProps) {
  return (
    <fieldset className="border-gray-500 relative rounded-md border px-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-200">
      <label
        htmlFor={name}
        className="absolute -top-2 left-2 -mt-px inline-block bg-zinc-800 px-1 text-xs font-medium text-white"
      >
        {label}
      </label>
      <textarea
        {...props}
        name={name}
        className={twMerge(
          "block w-full border-0 outline-0 p-0 text-white bg-inherit placeholder-gray-500 focus:ring-0 sm:text-sm",
          props.className
        )}
      />
    </fieldset>
  );
}

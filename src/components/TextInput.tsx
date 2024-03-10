import { InputHTMLAttributes, ReactNode } from "react";


export interface TextInputRootProps{
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
  return(
    <div className=
      'py-4 px-3  flex items-center gap-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300 '>
        {props.children}
    </div>
  )
}

// function TextInputIcon{

// }

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps){
  return( 
    <input  
      className=
        'flex-1 bg-transparent text-gray-100 text-xs w-full placeholder:text-gray-400 outline-none'
        {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
}
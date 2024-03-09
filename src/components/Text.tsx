import clsx from "clsx";

export interface TextProps{
  size?: 'sm' | 'md' | 'lg';
  children: string;
}

export function Text({size = 'md', children}: TextProps){
  return(
    <span 
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size == 'sm',
          'text-md': size == 'md',
          'text-lg': size == 'lg',
        }
      )}
    >
      {children}
    </span>
  )
}
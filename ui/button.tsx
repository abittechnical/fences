import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

import { cx } from '@/lib/utils'

const buttonVariants = tv({
  base: "focus-visible:border-brd-ring focus-visible:ring-brd-interactive inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      default: 'bg-inverse text-cnt-on-inverse hover:bg-inverse/90 shadow-sm',
      destructive:
        'bg-danger-bold hover:bg-danger-bold/90 focus-visible:ring-brd-danger-ring/20 text-(--red-contrast) shadow-xs',
      outline: 'border-brd-line bg-page hover:bg-tertiary border shadow-xs',
      secondary:
        'bg-secondary text-cnt-primary hover:bg-secondary/80 shadow-xs [--tw-shadow-color:var(--color-gray-a5)]',
      ghost: 'text-cnt-secondary hover:bg-tertiary hover:text-cnt-primary',
      link: 'text-cnt-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'size-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cx(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

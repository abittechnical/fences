import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

import { cx } from '@/lib/utils'

const badgeVariants = tv({
  base: 'focus-visible:border-brd-ring focus-visible:ring-brd-interactive inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border px-1.5 text-xs leading-normal font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-inverse text-cnt-on-inverse [a&]:hover:bg-inverse/90 border-transparent',
      secondary: 'bg-secondary text-cnt-secondary [a&]:hover:bg-secondary/90 border-transparent',
      destructive:
        'bg-danger-bold [a&]:hover:bg-danger-bold/90 focus-visible:ring-brd-danger-ring dark:focus-visible:ring-destructive/40 border-transparent text-white',
      outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return <Comp data-slot="badge" className={cx(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

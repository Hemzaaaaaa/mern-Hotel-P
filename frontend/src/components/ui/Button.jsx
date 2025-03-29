import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Button = forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

          // Variants
          variant === "default" &&
            "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "outline" &&
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

          // Sizes
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-md px-3",
          size === "lg" && "h-11 rounded-md px-8",

          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

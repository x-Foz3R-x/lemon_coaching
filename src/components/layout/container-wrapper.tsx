import { cn } from "~/lib/utils";

export const ContainerWrapper = ({
  id,
  children,
  className,
  as: Comp = "div",
}: React.PropsWithChildren<{
  id?: string;
  className?: string;
  as?: "div" | "section" | "main";
}>) => {
  return (
    <Comp
      className={cn(
        "3xl:px-24 container mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16",
        className,
      )}
      id={id}
    >
      {children}
    </Comp>
  );
};

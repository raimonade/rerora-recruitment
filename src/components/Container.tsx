const Container = ({ children, className }: { children: any; className?: string }) => {
  return <div class={`${className ? className : null} px-4 md:container md:mx-auto `}>{children}</div>;
};

export default Container;

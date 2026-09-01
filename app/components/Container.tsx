export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)] ${className}`}>
      {children}
    </div>
  );
}

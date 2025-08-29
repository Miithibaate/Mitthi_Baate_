export function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded-xl border border-amber-100 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

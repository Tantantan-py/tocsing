export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <div>insights</div>
      {children}
    </main>
  );
}

import InsightRoll from "@/components/About/InsightRoll";

const insights = [
  "Years of Exp on tutoring CS/Non-CS background student to apply MSCS",
  "Free guidance for hundreds of successful applicants",
  "Provide long-term guidance services",
  "To CS is not good as you see, but if you are already on this way, it may still worth a try for you",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <div>
        <InsightRoll insights={insights} />
      </div>
      {children}
    </main>
  );
}

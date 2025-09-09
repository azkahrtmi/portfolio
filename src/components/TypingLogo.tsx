import { useEffect, useState } from "react";

type TypingLogoProps = {
  firstText: string; // teks pertama
  finalText: string; // teks akhir
  className?: string;
};

export default function TypingLogo({
  firstText,
  finalText,
  className = "text-white text-2xl md:text-4xl font-extrabold tracking-wide",
}: TypingLogoProps) {
  const [displayText, setDisplayText] = useState(""); // teks yg tampil
  const [phase, setPhase] = useState<
    "typing1" | "deleting" | "typing2" | "done"
  >("typing1");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // fase ketik teks pertama
    if (phase === "typing1") {
      if (index < firstText.length) {
        timeout = setTimeout(() => {
          setDisplayText(firstText.slice(0, index + 1));
          setIndex(index + 1);
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
          setIndex(firstText.length);
        }, 800);
      }
    }

    // fase hapus teks pertama
    if (phase === "deleting") {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayText(firstText.slice(0, index - 1));
          setIndex(index - 1);
        }, 100);
      } else {
        setPhase("typing2");
        setIndex(0);
      }
    }

    // fase ketik teks kedua
    if (phase === "typing2") {
      if (index < finalText.length) {
        timeout = setTimeout(() => {
          setDisplayText(finalText.slice(0, index + 1));
          setIndex(index + 1);
        }, 200);
      } else {
        setPhase("done");
      }
    }

    return () => clearTimeout(timeout);
  }, [index, phase, firstText, finalText]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-gray-500 font-medium">|</span>
    </span>
  );
}

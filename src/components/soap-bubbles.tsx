import type { CSSProperties } from "react";

type BubbleLayer = "back" | "front";

const backBubbles = [
  { size: 28, left: "7%", top: "16%", delay: 0, duration: 6.8 },
  { size: 54, left: "15%", top: "68%", delay: 0.8, duration: 7.6 },
  { size: 34, left: "34%", top: "24%", delay: 1.3, duration: 7.2 },
  { size: 68, left: "72%", top: "14%", delay: 0.4, duration: 8.4 },
  { size: 42, left: "86%", top: "52%", delay: 1.1, duration: 7.8 },
  { size: 24, left: "58%", top: "74%", delay: 1.8, duration: 6.2 },
  { size: 46, left: "45%", top: "8%", delay: 2.2, duration: 7.4 },
  { size: 32, left: "78%", top: "80%", delay: 2.6, duration: 6.9 },
  { size: 18, left: "25%", top: "46%", delay: 3, duration: 6.1 },
  { size: 40, left: "92%", top: "28%", delay: 3.4, duration: 8 },
  { size: 22, left: "5%", top: "82%", delay: 3.8, duration: 6.4 },
  { size: 58, left: "50%", top: "54%", delay: 4.1, duration: 8.6 },
  { size: 16, left: "66%", top: "36%", delay: 4.6, duration: 5.8 },
  { size: 36, left: "11%", top: "38%", delay: 5, duration: 7.1 },
];

const frontBubbles = [
  { size: 26, left: "10%", top: "56%", delay: 0.2, duration: 5.8 },
  { size: 18, left: "20%", top: "34%", delay: 1.1, duration: 5.2 },
  { size: 38, left: "72%", top: "61%", delay: 0.7, duration: 6.4 },
  { size: 24, left: "84%", top: "24%", delay: 1.8, duration: 5.6 },
  { size: 16, left: "58%", top: "42%", delay: 2.4, duration: 5 },
  { size: 32, left: "38%", top: "82%", delay: 3, duration: 6.1 },
];

export function SoapBubbles({ layer = "back" }: { layer?: BubbleLayer }) {
  const isFront = layer === "front";
  const bubbles = isFront ? frontBubbles : backBubbles;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        isFront ? "z-[24]" : "z-[8]"
      }`}
      aria-hidden="true"
    >
      {bubbles.map((bubble, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const x1 = direction * (isFront ? 34 : 26);
        const x2 = direction * (isFront ? -18 : -12);
        const y1 = isFront ? -38 : -30;
        const y2 = isFront ? -86 : -68;
        const rotate1 = direction * (isFront ? 12 : 9);
        const rotate2 = direction * (isFront ? -8 : -6);

        return (
          <span
            key={`${bubble.left}-${bubble.top}`}
            className={`soap-bubble absolute rounded-full border bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.88),rgba(255,255,255,0.3)_26%,rgba(180,235,242,0.2)_58%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[1px] ${
              isFront
                ? "border-white/80 shadow-[inset_8px_8px_18px_rgba(255,255,255,0.64),inset_-10px_-10px_22px_rgba(117,211,224,0.2),0_14px_42px_rgba(180,235,242,0.32)]"
                : "border-white/60 shadow-[inset_8px_8px_18px_rgba(255,255,255,0.52),inset_-10px_-10px_22px_rgba(117,211,224,0.14),0_10px_34px_rgba(180,235,242,0.24)]"
            }`}
            style={
              {
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: bubble.left,
                top: bubble.top,
                "--bubble-duration": `${bubble.duration}s`,
                "--bubble-delay": `${bubble.delay}s`,
                "--bubble-x1": `${x1}px`,
                "--bubble-y1": `${y1}px`,
                "--bubble-x2": `${x2}px`,
                "--bubble-y2": `${y2}px`,
                "--bubble-opacity-low": isFront ? "0.26" : "0.32",
                "--bubble-opacity-high": isFront ? "0.72" : "0.82",
                "--bubble-opacity-mid": isFront ? "0.48" : "0.58",
                "--bubble-scale": isFront ? "1.2" : "1.14",
                "--bubble-rotate1": `${rotate1}deg`,
                "--bubble-rotate2": `${rotate2}deg`,
              } as CSSProperties
            }
          >
            <span className="absolute left-[24%] top-[18%] block size-[24%] rounded-full bg-white/80 blur-[1px]" />
            <span className="absolute bottom-[18%] right-[20%] block size-[12%] rounded-full bg-cyan-100/50 blur-[1px]" />
          </span>
        );
      })}
    </div>
  );
}

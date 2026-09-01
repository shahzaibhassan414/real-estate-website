import { ImageResponse } from "next/og";

export const alt = "Chaudhary Estate | Property Dealers in Lahore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6efe6",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(33,24,21,0.08), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 12,
            background: "#9c3f2e",
            marginBottom: 32,
          }}
        >
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#f6efe6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11 12 4l9 7" />
            <path d="M5 10v10h14V10" />
            <path d="M10 20v-6h4v6" />
          </svg>
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, color: "#211815" }}>Chaudhary Estate</div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7c3324",
          }}
        >
          Trusted Property Dealers · Lahore
        </div>
      </div>
    ),
    { ...size }
  );
}

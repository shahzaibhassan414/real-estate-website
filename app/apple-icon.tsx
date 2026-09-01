import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#9c3f2e",
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24" fill="none" stroke="#f6efe6" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11 12 4l9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

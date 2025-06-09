import {ImageResponse} from "next/og";
import {NextRequest} from "next/server";

export const runtime = "edge";

async function loadGoogleFont(weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&display=swap`;

  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(request: NextRequest) {
  try {
    const regularFont = await loadGoogleFont(400);
    const boldFont = await loadGoogleFont(600);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            position: "relative",
            fontFamily: "Geist",
          }}
        >
          {/* Grid Pattern Background */}
          <img
            src="https://palettes.noahatkins.com/grid-pattern.svg"
            alt="Grid Pattern"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Content Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              zIndex: 10,
            }}
          >
            <img src="https://palettes.noahatkins.com/color-palette.svg" alt="Case" width="75" height="75" />
            <div
              style={{
                fontSize: 46,
                fontWeight: 600,
                color: "#000000",
                textAlign: "center",
                fontFamily: "Geist-SemiBold",
              }}
            >
              Palettes
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#000000",
                opacity: 0.9,
                textAlign: "center",
                maxWidth: "80%",
                fontWeight: 400,
                fontFamily: "Geist-Regular",
              }}
            >
              Perfect Colors for Perfect Projects
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Geist-SemiBold",
            data: boldFont,
            style: "normal",
            weight: 600,
          },
          {
            name: "Geist-Regular",
            data: regularFont,
            style: "normal",
            weight: 400,
          },
        ],
      }
    );
  } catch (error: any) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

import AppStoreBadge from "../assets/app_badges/app-store-badge.png";
import GoogleStoreBadge from "../assets/app_badges/google-icon.svg";

interface StoreBadgesProps {
  filter?: boolean;
}

export const StoreBadges = ({ filter }: StoreBadgesProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        paddingBottom: "2rem",
      }}>
      <a
        href="https://apps.apple.com/rs/app/musicians-app/id6752311344"
        style={{
          display: "block",
          transform: "scale(1)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        target="_blank"
        rel="noopener noreferrer">
        <img
          src={AppStoreBadge}
          style={{ width: "150px", display: "block" }}
          alt="App Store Badge"
        />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.marko4yu.musiciansapp2025exposupabase"
        style={{
          display: "block",
          transform: "scale(1)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        target="_blank"
        rel="noopener noreferrer">
        <img
          src={GoogleStoreBadge}
          style={{
            width: "150px",
            display: "block",
            filter: filter ? "invert(1)" : "none",
          }}
          alt="Google Store Badge"
        />
      </a>
    </div>
  );
};

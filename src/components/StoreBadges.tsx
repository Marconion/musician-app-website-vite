import AppStoreBadge from "../assets/app_badges/app-store-badge.png";
import GoogleStoreBadge from "../assets/app_badges/google-icon.svg";

export const StoreBadges = () => {
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
        href=""
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
          style={{ width: "150px", display: "block" }}
          alt="Google Store Badge"
        />
      </a>
    </div>
  );
};

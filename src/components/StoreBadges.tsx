import AppStoreBadge from "../assets/app_badges/app-store-badge.png";
import GoogleStoreBadge from "../assets/app_badges/google-icon.svg";

export const StoreBadges = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        paddingBottom: "2rem",
      }}>
      <img
        src={AppStoreBadge}
        style={{ width: "150px" }}
        alt="App Store Badge"
      />
      <img
        src={GoogleStoreBadge}
        style={{ width: "150px" }}
        alt="Google Store Badge"
      />
    </div>
  );
};

import packageJson from "../package.json";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "10px 0"
      }}
    >
      <span>{packageJson.version}</span>
    </footer>
  );
}
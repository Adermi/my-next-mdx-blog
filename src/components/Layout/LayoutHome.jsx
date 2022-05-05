export default function LayoutHome({ children, ...props }) {
  return (
    <div
      style={{
        width: "800px",
        padding: "0 60px",
        backgroundColor: "blueviolet",
        margin: '0 auto'
      }}
    >
      {children}
    </div>
  );
}

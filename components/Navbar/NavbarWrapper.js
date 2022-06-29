export default function NavbarWrapper({ children }) {
  return (
    <>
      <div className="navbar text-neutral-content flex justify-between">
        {children}
      </div>
    </>
  );
}

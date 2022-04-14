function HeaderBreadcrumb({ children }) {
  return (
    <span style={{ fontSize: "0.7em" }}>
      {" "}
      {">"} {children}{" "}
    </span>
  );
}

export default HeaderBreadcrumb;

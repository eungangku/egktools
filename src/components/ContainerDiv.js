function ContainerDiv({ children, margin = "15px" }) {
  return <div style={{ margin: margin, fontFamily: "'NotoSansKR-Regular', sans-serif" }}>{children}</div>;
}

export default ContainerDiv;

import { useMediaQuery } from "react-responsive";

function Mobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
}
function Tablet({ children }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
}
function Desktop({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
}

// export default Responsive;
export { Mobile, Tablet, Desktop };

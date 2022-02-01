import { useMediaQuery } from "react-responsive";

export const useScreenSizeClassname = () => {
  const isSmall = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const isMediumOrSmall = useMediaQuery({
    query: "(max-width: 900px)",
  });
  if (isSmall) return "sm";
  if (isMediumOrSmall) return "md";
  return "lg";
};

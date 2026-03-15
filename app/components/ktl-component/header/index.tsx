import React, { useState, useEffect } from "react";

interface HeaderProps {
  productWebUrl: string;
  hasSearch: boolean;
  dropdownTheme: "light" | "dark"; // valid theme values
  currentUrl: string;
  onSearchClick: () => void;
}

export default function HeaderWrapper(props: HeaderProps) {
  const [Header, setHeader] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("@jetbrains/kotlin-web-site-ui/dist/header.js")
      .then((mod) => {
        setHeader(() => mod.default);
      })
      .catch(console.error);
  }, []);

  if (!Header) return null; // or a placeholder

  return <Header {...props} />;
}

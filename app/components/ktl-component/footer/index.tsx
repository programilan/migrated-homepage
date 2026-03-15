import React, { useState, useEffect } from "react";

export default function FooterWrapper() {
  const [Footer, setFooter] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("@jetbrains/kotlin-web-site-ui/dist/footer.js")
      .then((mod) => {
        setFooter(() => mod.default);
      })
      .catch(console.error);
  }, []);

  if (!Footer) return null; // or a placeholder

  return <Footer />;
}

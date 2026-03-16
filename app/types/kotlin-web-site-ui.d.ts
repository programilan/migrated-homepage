declare module "@jetbrains/kotlin-web-site-ui/out/components/header/index.js" {
  import * as React from "react";

  export interface KotlinHeaderProps {
    productWebUrl?: string;
    hasSearch?: boolean;
    currentUrl?: string;
    currentTitle?: string;
    className?: string;
    hasBorder?: boolean;
    dropdownTheme?: "dark" | "light";
    linkHandler?: (url: string) => void;
    isPlayground?: boolean;
    isUrlActive?: (url: string) => boolean;
    searchConfig?: {
      searchAlgoliaId?: string;
      searchAlgoliaKey?: string;
      searchAlgoliaIndex?: string;
    };
    resultViewType?: "Narrow" | "Wide";
    darkHeader?: boolean;
  }

  const KotlinHeader: React.ComponentType<KotlinHeaderProps>;
  export default KotlinHeader;
}

declare module "@jetbrains/kotlin-web-site-ui/out/components/footer/index.js" {
  import * as React from "react";

  export interface KotlinFooterProps {
    forwardedRef?: React.Ref<any>;
    className?: string;
  }

  const KotlinFooter: React.ComponentType<KotlinFooterProps>;
  export default KotlinFooter;
}

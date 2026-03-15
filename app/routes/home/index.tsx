import type { Route } from "./+types";

import "@rescui/typography/lib/font-jb-sans-auto.css";

import { HeaderSection } from "./sections/header/index";
import { LatestFromKotlinSection } from "./sections/latest-from-kotlin";
import { WhyKotlinSection } from "./sections/why-kotlin";
import { StartSection } from "./sections/start";
import { UsageSection } from "./sections/usage";

import "./index.scss";
import "app/css/grid.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </div>
  );
}

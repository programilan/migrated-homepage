import React, { type ReactNode } from "react";
import "./index.scss";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={"kto-layout-section " + className}>{children}</section>
  );
}

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="kto-layout-container">{children}</div>;
}

"use client";

import { useEffect } from "react";

export interface ClientRedirectProps {
  href: string;
}

export function ClientRedirect(props: ClientRedirectProps) {
  useEffect(() => {
    window.location.replace(props.href);
  }, [props.href]);

  return (
    <p>
      Moving to <a href={props.href}>{props.href}</a>.
    </p>
  );
}

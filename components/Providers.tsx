"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

const Providers = (props: Props) => {
  return <NextUIProvider>{props.children}</NextUIProvider>;
};

export default Providers;

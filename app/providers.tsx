"use client";

import { SnackbarProvider } from "notistack";
import SnackBar from "./SnackBar";

// This component now only handles client-side providers like notistack.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider>
      {children}
      <SnackBar />
    </SnackbarProvider>
  );
}

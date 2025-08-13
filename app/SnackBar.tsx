"use client";
import { useSnackbar, VariantType } from "notistack";
import React from "react";
import { Button } from "@/components/ui/button";

export default function SnackBar() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleClickVariant("success")}>Show snackbar</Button> */}
    </React.Fragment>
  );
}

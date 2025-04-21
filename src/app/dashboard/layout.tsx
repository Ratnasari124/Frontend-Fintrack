import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Box>{children}</Box>
      </body>
    </html>
  );
}

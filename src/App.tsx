import { _queryClient } from "./lib/utils/query-client/query-client.ts";
import { GlobalAsyncBoundary } from "./lib/utils/error/global-async-boundary.tsx";
import { QueryClientProvider } from "react-query";
import { Router } from "@/routes/router.tsx";
import { Toast } from "@/ui/emotion/toast";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/ui/emotion/theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalAsyncBoundary>
        <QueryClientProvider client={_queryClient}>
          <Router />
          <Toast />
        </QueryClientProvider>
      </GlobalAsyncBoundary>
    </ThemeProvider>
  );
}

export default App;

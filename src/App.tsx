import './App.css';
import { _queryClient } from './lib/utils/query-client/query-client.ts';
import { GlobalAsyncBoundary } from './lib/utils/error/global-async-boundary.tsx';
import { QueryClientProvider } from 'react-query';
import {Router} from "@/routes/router.tsx";
import {Toast} from "@/ui/emotion/toast";

function App() {
    return (
        <div className="App">
            <GlobalAsyncBoundary>
                <QueryClientProvider client={_queryClient}>
                    <Router />
                    <Toast />
                </QueryClientProvider>
            </GlobalAsyncBoundary>
        </div>
    );
}

export default App;

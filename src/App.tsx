import { BrowserRouter } from '@yourServiceName/router';

import { ThemeProvider, theme } from '@yourServiceName/styled';
import { AuthProvider } from './components/auth/AuthProvider';
import { queryClient, QueryClientProvider } from '@yourServiceName/query';
import Pages from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Pages />
          </QueryClientProvider>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

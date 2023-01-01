import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { QueryConfig } from './config';

const queryClient = new QueryClient(QueryConfig);

export * from '@tanstack/react-query';
export { queryClient, QueryClientProvider };

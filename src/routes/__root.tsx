import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import { ErrorBoundary } from "@/components/error-boundary";

interface RouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="light">
			<ErrorBoundary>
				<Outlet />
			</ErrorBoundary>
		</div>
	);
}

import { type AuthProvider, getAuthHeaders } from "@s21toolkit/auth"
import type { RequestMiddleware } from "graphql-request"

export function createAuthMiddleware(auth: AuthProvider): RequestMiddleware {
	return async (request) => {
		const authHeaders = await getAuthHeaders(auth)

		return {
			...request,
			headers: {
				...request.headers,
				...authHeaders,
			},
		}
	}
}

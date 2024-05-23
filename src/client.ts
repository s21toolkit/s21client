import { type AuthProvider, S21_GQL_API_URL } from "@s21toolkit/auth"
import { GraphQLClient } from "graphql-request"
import { createAuthMiddleware } from "./auth"

export class Client<
	TSchema extends Record<string, (...args: never) => unknown>,
> {
	#schema
	#auth
	#client

	constructor(schema: (client: GraphQLClient) => TSchema, auth: AuthProvider) {
		this.#schema = schema
		this.#auth = auth
		this.#client = new GraphQLClient(S21_GQL_API_URL, {
			requestMiddleware: createAuthMiddleware(auth),
		})
	}

	useAuth(auth: AuthProvider) {
		this.#auth = auth
		this.#client.requestConfig.requestMiddleware = createAuthMiddleware(auth)
	}

	get auth() {
		return this.#auth
	}

	get api() {
		return this.#schema(this.#client)
	}
}

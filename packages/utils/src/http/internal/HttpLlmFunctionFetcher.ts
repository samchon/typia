import { IHttpMigrateRoute, IHttpResponse } from "@typia/interface";

import type { HttpLlm } from "../HttpLlm";
import type { HttpMigration } from "../HttpMigration";
import { HttpMigrateRouteFetcher } from "./HttpMigrateRouteFetcher";

/**
 * Adapts an LLM function call to the migrated route fetcher.
 *
 * The keyworded arguments chosen by the model are split into the path, header,
 * cookie, query and body groups that the route declares, and the request itself
 * is performed by {@link HttpMigrateRouteFetcher}.
 *
 * @evidence contracts/common.md#principled-implementation The function's migrated route already knows its parameter groups, so the fetcher only maps the keyworded input into those groups by key and defers the request to the route fetcher.
 * @evidence contracts/common.md#clear-and-simple-design Two exported functions share one private argument builder.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts There is no second request implementation.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment and function docs were added for the adapter role, thrown errors and results.
 */
export namespace HttpLlmFunctionFetcher {
  /**
   * Call the function's route and return the response body.
   *
   * @param props Function, connection and keyworded arguments
   *
   * @returns Response body of a 2xx response
   *
   * @throws HttpError on a non-2xx status, and Error when the arguments are not
   *   an object or do not match the route
   *
   * @evidence contracts/common.md#principled-implementation Builds route arguments from the input and delegates to the route fetcher's execute, so status handling is the route fetcher's.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the shared fetcher.
   * @evidence contracts/common.md#meaningful-documentation The doc states the body, the thrown errors and the parameter.
   */
  export const execute = (props: HttpLlm.IFetchProps): Promise<unknown> =>
    HttpMigrateRouteFetcher.execute(getFetchArguments("execute", props));

  /**
   * Call the function's route and return the whole response.
   *
   * @param props Function, connection and keyworded arguments
   *
   * @returns Status, headers and body, including non-2xx responses
   *
   * @throws Error when the arguments are not an object or do not match the
   *   route, or when the connection fails
   *
   * @evidence contracts/common.md#principled-implementation Builds route arguments and delegates to the route fetcher's propagate, so every status is returned as data.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the shared fetcher.
   * @evidence contracts/common.md#meaningful-documentation The doc states the full response and the thrown errors.
   */
  export const propagate = (
    props: HttpLlm.IFetchProps,
  ): Promise<IHttpResponse> =>
    HttpMigrateRouteFetcher.propagate(getFetchArguments("propagate", props));

  const getFetchArguments = (
    from: string,
    props: HttpLlm.IFetchProps,
  ): HttpMigration.IFetchProps => {
    const route: IHttpMigrateRoute = props.function.route();
    const input: Record<string, any> = props.input;
    const valid: boolean = typeof input === "object" && input !== null;
    if (valid === false)
      throw new Error(
        `Error on HttpLlmFunctionFetcher.${from}(): keyworded arguments must be an object`,
      );
    return {
      connection: props.connection,
      route,
      parameters: Object.fromEntries(
        route.parameters.map((p) => [p.key, input[p.key]] as const),
      ),
      headers: route.headers ? input[route.headers.key] : undefined,
      cookies: route.cookies ? input[route.cookies.key] : undefined,
      query: route.query ? input[route.query.key] : undefined,
      body: route.body ? input[route.body.key] : undefined,
    };
  };
}

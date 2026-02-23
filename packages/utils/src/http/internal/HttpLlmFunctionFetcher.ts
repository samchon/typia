import { IHttpMigrateRoute, IHttpResponse } from "@typia/interface";

import type { HttpLlm } from "../HttpLlm";
import type { HttpMigration } from "../HttpMigration";
import { HttpMigrateRouteFetcher } from "./HttpMigrateRouteFetcher";

export namespace HttpLlmFunctionFetcher {
  export const execute = (props: HttpLlm.IFetchProps): Promise<unknown> =>
    HttpMigrateRouteFetcher.execute(getFetchArguments("execute", props));

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
      query: input.query,
      body: input.body,
    };
  };
}

import { IHttpMigrateApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm, HttpMigration } from "@typia/utils";

/**
 * Verifies webhooks add routes without replacing the paths they share a key
 * with.
 *
 * Migration collected paths and webhooks with one object spread, so a webhook
 * named like a path replaced the whole path item: every operation of the path
 * vanished without a route or an error, and the webhook took over its route and
 * component names (#2455). Webhooks are migrated as additional routes, and the
 * oracle is the input document: every operation keeps its own route and
 * schema.
 *
 * 1. Migrate a path with `get` and `post` next to no webhook, a distinctly named
 *    one, one sharing the path's key and method, and one sharing only the key.
 * 2. Assert every path and webhook operation has its own route, accessor, and
 *    response schema, with no error.
 * 3. Assert `HttpLlm` keeps one uniquely named function per route.
 */
export const test_http_migrate_webhook_path_collision = (): void => {
  const response = (key: string): OpenApi.IOperation.IResponse => ({
    description: "ok",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: { [key]: { type: "string" } },
          required: [key],
        },
      },
    },
  });
  const compose = (
    webhooks: Record<string, OpenApi.IPath> | undefined,
  ): OpenApi.IDocument => ({
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    components: { schemas: {} },
    paths: {
      "/pets": {
        get: { responses: { 200: response("list") } },
        post: { responses: { 200: response("created") } },
      },
    },
    ...(webhooks !== undefined ? { webhooks } : {}),
  });
  const inventory = (app: IHttpMigrateApplication): IEntry[] =>
    app.routes.map((route) => {
      const schema = route.success?.schema;
      const found =
        schema !== undefined && "$ref" in schema
          ? app.document().components.schemas?.[
              schema.$ref.replace("#/components/schemas/", "")
            ]
          : schema;
      return {
        route: `${route.method} ${route.path}`,
        payload: Object.keys(
          (found as OpenApi.IJsonSchema.IObject | undefined)?.properties ?? {},
        ),
      };
    });

  const cases: ICase[] = [
    {
      title: "no webhooks",
      webhooks: undefined,
      expected: [
        { route: "get /pets", payload: ["list"] },
        { route: "post /pets", payload: ["created"] },
      ],
    },
    {
      title: "distinct name",
      webhooks: { newPet: { post: { responses: { 200: response("hook") } } } },
      expected: [
        { route: "get /pets", payload: ["list"] },
        { route: "post /pets", payload: ["created"] },
        { route: "post newPet", payload: ["hook"] },
      ],
    },
    {
      title: "same key and method",
      webhooks: { "/pets": { post: { responses: { 200: response("hook") } } } },
      expected: [
        { route: "get /pets", payload: ["list"] },
        { route: "post /pets", payload: ["created"] },
        { route: "post /pets", payload: ["hook"] },
      ],
    },
    {
      title: "same key only",
      webhooks: { "/pets": { put: { responses: { 200: response("hook") } } } },
      expected: [
        { route: "get /pets", payload: ["list"] },
        { route: "post /pets", payload: ["created"] },
        { route: "put /pets", payload: ["hook"] },
      ],
    },
  ];
  for (const { title, webhooks, expected } of cases) {
    const document: OpenApi.IDocument = compose(webhooks);
    const app: IHttpMigrateApplication = HttpMigration.application(document);
    TestEquality.equals(`${title}: errors`, app.errors, []);
    TestEquality.equals(`${title}: routes`, inventory(app), expected);
    TestEquality.equals(
      `${title}: distinct accessors`,
      new Set(app.routes.map((route) => route.accessor.join("."))).size,
      app.routes.length,
    );

    const llm = HttpLlm.application({ document });
    TestEquality.equals(
      `${title}: functions`,
      llm.functions.length,
      app.routes.length,
    );
    TestEquality.equals(
      `${title}: distinct names`,
      new Set(llm.functions.map((func) => func.name)).size,
      llm.functions.length,
    );
  }
};

interface ICase {
  title: string;
  webhooks: Record<string, OpenApi.IPath> | undefined;
  expected: IEntry[];
}
interface IEntry {
  route: string;
  payload: string[];
}

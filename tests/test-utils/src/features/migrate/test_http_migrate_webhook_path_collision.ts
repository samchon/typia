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
 * oracle is the input document: every operation keeps its own route and schema,
 * and a path operation keeps the names it has without the webhook.
 *
 * 1. Migrate a path with `get` and `post` next to no webhook, a distinctly named
 *    one, one sharing the path's key and method, and one sharing only the key.
 * 2. Assert every path and webhook operation has its own route and response
 *    schema, with no error, and that the path operations keep their plain
 *    accessors and component names while a colliding webhook's are escaped.
 * 3. Assert `HttpLlm` names one function per route after its accessor.
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
        accessor: route.accessor.join("."),
        component:
          schema !== undefined && "$ref" in schema
            ? schema.$ref.replace("#/components/schemas/", "")
            : null,
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
        {
          route: "get /pets",
          accessor: "pets.get",
          component: "IApiPets.GetResponse",
          payload: ["list"],
        },
        {
          route: "post /pets",
          accessor: "pets.post",
          component: "IApiPets.PostResponse",
          payload: ["created"],
        },
      ],
    },
    {
      title: "distinct name",
      webhooks: { newPet: { post: { responses: { 200: response("hook") } } } },
      expected: [
        {
          route: "get /pets",
          accessor: "pets.get",
          component: "IApiPets.GetResponse",
          payload: ["list"],
        },
        {
          route: "post /pets",
          accessor: "pets.post",
          component: "IApiPets.PostResponse",
          payload: ["created"],
        },
        {
          route: "post newPet",
          accessor: "newPet.post",
          component: "IApiNewPet.PostResponse",
          payload: ["hook"],
        },
      ],
    },
    {
      title: "same key and method",
      webhooks: { "/pets": { post: { responses: { 200: response("hook") } } } },
      expected: [
        {
          route: "get /pets",
          accessor: "pets.get",
          component: "IApiPets.GetResponse",
          payload: ["list"],
        },
        {
          route: "post /pets",
          accessor: "pets.post",
          component: "IApiPets.PostResponse",
          payload: ["created"],
        },
        {
          route: "post /pets",
          accessor: "pets._post",
          component: "IApiPets._PostResponse",
          payload: ["hook"],
        },
      ],
    },
    {
      title: "same key only",
      webhooks: { "/pets": { put: { responses: { 200: response("hook") } } } },
      expected: [
        {
          route: "get /pets",
          accessor: "pets.get",
          component: "IApiPets.GetResponse",
          payload: ["list"],
        },
        {
          route: "post /pets",
          accessor: "pets.post",
          component: "IApiPets.PostResponse",
          payload: ["created"],
        },
        {
          route: "put /pets",
          accessor: "pets.put",
          component: "IApiPets.PutResponse",
          payload: ["hook"],
        },
      ],
    },
  ];
  for (const { title, webhooks, expected } of cases) {
    const document: OpenApi.IDocument = compose(webhooks);
    const app: IHttpMigrateApplication = HttpMigration.application(document);
    TestEquality.equals(`${title}: errors`, app.errors, []);
    TestEquality.equals(`${title}: routes`, inventory(app), expected);

    const llm = HttpLlm.application({ document });
    TestEquality.equals(
      `${title}: functions`,
      llm.functions.map((func) => func.name),
      expected.map((entry) => entry.accessor.split(".").join("_")),
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
  accessor: string;
  component: string | null;
  payload: string[];
}

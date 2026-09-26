import {
  IHttpLlmApplication,
  IHttpMigrateApplication,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm, HttpMigration } from "@typia/utils";

import { _isLegalBinding } from "../../internal/_isLegalBinding";

/**
 * Verifies names derived from path segments are legal for any `pchar`.
 *
 * Accessor segments and emplaced component names kept every character a path
 * segment may hold except `.` and `-` (#2443). Google AIP custom methods
 * (`/items:batchGet`) produced accessors such as `_items:batchGet`, which SDK
 * generators emit as identifiers and file names, and component keys such as
 * `IApiItems:batchGet.PostBody`, which break the Components Object key grammar
 * `^[a-zA-Z0-9.\-_]+$`; `~` and `%` even broke `$ref` resolution, and
 * `HttpLlm.application()` rejected every such operation. The oracles are the
 * JavaScript engine's binding grammar and the OpenAPI key grammar.
 *
 * 1. Migrate one POST route per non-identifier path character, each with an inline
 *    body.
 * 2. Assert every accessor segment is a legal binding and every component key
 *    matches the Components Object grammar.
 * 3. Assert `HttpLlm.application()` accepts every operation and resolves them.
 * 4. Assert ordinary paths keep their exact accessors and component names, the
 *    letters of any script stay distinct, and function names joined from
 *    accessors stay unique.
 */
export const test_http_migrate_path_character_names = (): void => {
  const characters: string[] = [
    ":",
    "@",
    "~",
    "+",
    "*",
    "'",
    "(",
    ")",
    "!",
    ",",
    ";",
    "=",
    "$",
  ];
  const paths: string[] = [
    ...characters.map((c, i) => `/p${i}${c}x`),
    "/items:batchGet",
    "/items/{id}:cancel",
    "/item%20list",
    "/$metadata",
  ];
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    components: {},
    paths: Object.fromEntries(
      paths.map((path) => [
        path,
        {
          post: {
            parameters: [...path.matchAll(/\{([^{}]+)\}/g)].map((m) => ({
              name: m[1]!,
              in: "path" as const,
              required: true,
              schema: { type: "string" as const },
            })),
            requestBody: {
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: { value: { type: "string" } },
                  },
                },
              },
            },
          },
        },
      ]),
    ),
  };

  const app: IHttpMigrateApplication = HttpMigration.application(document);
  TestEquality.equals("every route migrated", app.routes.length, paths.length);
  for (const route of app.routes)
    for (const segment of route.accessor)
      TestEquality.equals(
        `${route.path} accessor ${segment}`,
        _isLegalBinding(segment),
        true,
      );
  const keys: string[] = Object.keys(app.document().components.schemas ?? {});
  TestEquality.equals("one component per route", keys.length, paths.length);
  for (const key of keys)
    TestEquality.equals(
      `component ${key}`,
      /^[a-zA-Z0-9.\-_]+$/.test(key),
      true,
    );

  const llm: IHttpLlmApplication = HttpLlm.application({ document });
  TestEquality.equals("llm errors", llm.errors, []);
  TestEquality.equals("llm functions", llm.functions.length, paths.length);

  // ordinary paths keep their names
  const body = document.paths!["/p0:x"]!;
  const control: IHttpMigrateApplication = HttpMigration.application({
    ...document,
    paths: {
      "/items": body,
      "/v1/users/{id}": {
        post: {
          ...body.post!,
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
        },
      },
      "/a.b": body,
      "/a-b": body,
    },
  });
  TestEquality.equals(
    "control accessors",
    control.routes.map((r) => r.accessor),
    [
      ["items", "post"],
      ["v1", "users", "postById"],
      ["a_b", "_post"],
      ["a_b", "post"],
    ],
  );
  TestEquality.equals(
    "control components",
    Object.keys(control.document().components.schemas ?? {}).sort(),
    ["IApiAB.PostBody", "IApiItems.PostBody", "IApiV1Users.PostBody"],
  );

  // letters of any script stay, as they did, and stay distinct
  const scripts: IHttpMigrateApplication = HttpMigration.application({
    ...document,
    paths: {
      "/café": body,
      "/cafè": body,
      "/사용자": body,
      "/관리자": body,
    },
  });
  TestEquality.equals(
    "script accessors",
    scripts.routes.map((r) => r.accessor),
    [
      ["_café", "post"],
      ["_cafè", "post"],
      ["_사용자", "post"],
      ["_관리자", "post"],
    ],
  );
  const scriptKeys: string[] = Object.keys(
    scripts.document().components.schemas ?? {},
  );
  TestEquality.equals("script components", scriptKeys.length, 4);
  for (const key of scriptKeys)
    TestEquality.equals(
      `script component ${key}`,
      /^[a-zA-Z0-9.\-_]+$/.test(key),
      true,
    );

  // function names joined from accessors stay unique
  const joined: IHttpLlmApplication = HttpLlm.application({
    document: {
      ...document,
      paths: {
        "/items:batchGet": body,
        "/items/batchGet": body,
        "/a.b": body,
        "/a/b": body,
      },
    },
  });
  const names: string[] = joined.functions.map((f) => f.name);
  TestEquality.equals("joined functions", names.length, 4);
  TestEquality.equals("unique function names", new Set(names).size, 4);
};

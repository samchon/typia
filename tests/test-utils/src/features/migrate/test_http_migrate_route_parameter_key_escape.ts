import { TestValidator } from "@nestia/e2e";
import { IHttpMigrateApplication } from "@typia/interface";
import { HttpMigration } from "@typia/utils";
import { OpenApi } from "typia";

import { _isLegalDeclaration } from "../../internal/_isLegalDeclaration";

/**
 * Verifies parameter-key escaping still composes once the identifier gate
 * rejects more words.
 *
 * `HttpMigrateRouteComposer` escapes a key with `while
 * (NamingConvention.variable(key) === false || used.has(key)) key = `
 * _${key}``, so the identifier gate and the duplicate gate share one loop.
 * Widening the gate for #2111 moves `let` from the second iteration to the
 * first, which is exactly where an off-by-one collision would appear: `{let}`
 * and a sibling `{_let}` must not both settle on `_let`. Numeric-leading
 * segments and the reserved `connection` receiver run through the same loop and
 * must be unaffected.
 *
 * 1. Declare routes pairing a newly restricted word with its escaped spelling.
 * 2. Assert each pair resolves to distinct, legal keys rather than colliding.
 * 3. Assert numeric-leading and `connection` escaping are unchanged.
 * 4. Compile each declaration, since duplicate parameters are a `SyntaxError`.
 */
export const test_http_migrate_route_parameter_key_escape = (): void => {
  const path = (route: string, names: string[]) => ({
    [route]: {
      get: {
        parameters: names.map((name) => ({
          name,
          in: "path" as const,
          required: true,
          schema: { type: "string" as const },
        })),
      },
    },
  });
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    paths: {
      // a reserved word beside its already-escaped spelling
      ...path("/a/{let}/b/{_let}", ["let", "_let"]),
      // a restricted binding name beside its already-escaped spelling
      ...path("/e/{eval}/f/{_eval}", ["eval", "_eval"]),
      // escaping that predates #2111 and must not shift
      ...path("/c/{9foo}", ["9foo"]),
      ...path("/d/{connection}", ["connection"]),
    },
    components: {},
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const keysOf = (route: string): string[] =>
    app.routes.find((r) => r.path === route)!.parameters.map((p) => p.key);

  // 2. THE NEWLY RESTRICTED WORD AND ITS ESCAPED SIBLING STAY DISTINCT
  TestValidator.equals(
    "reserved word beside its escape",
    keysOf("/a/{let}/b/{_let}"),
    ["_let", "__let"],
  );
  TestValidator.equals(
    "restricted binding beside its escape",
    keysOf("/e/{eval}/f/{_eval}"),
    ["_eval", "__eval"],
  );

  // 3. ESCAPING THAT PREDATES #2111 IS UNCHANGED
  TestValidator.equals("numeric-leading key", keysOf("/c/{9foo}"), ["_9foo"]);
  TestValidator.equals("connection receiver key", keysOf("/d/{connection}"), [
    "_connection",
  ]);

  // 4. EVERY DECLARATION COMPILES
  //
  // Strict mode rejects duplicate parameter names, so this fails if any pair
  // above collided.
  for (const route of app.routes)
    TestValidator.equals(
      `generated declaration for ${route.path} compiles`,
      _isLegalDeclaration({
        name: route.accessor.at(-1)!,
        parameters: ["connection", ...route.parameters.map((p) => p.key)],
      }),
      true,
    );
};

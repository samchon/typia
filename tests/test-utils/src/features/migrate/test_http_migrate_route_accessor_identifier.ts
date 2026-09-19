import { IHttpMigrateApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpMigration } from "@typia/utils";
import { OpenApi } from "typia";

import { _isLegalBinding } from "../../internal/_isLegalBinding";
import { _isLegalDeclaration } from "../../internal/_isLegalDeclaration";

/**
 * Verifies HttpMigration.application derives only legal binding identifiers for
 * accessors and parameter keys.
 *
 * `IHttpMigrateRoute.accessor` and each parameter `key` are documented as the
 * generated RPC accessor and parameter variable name, and downstream SDK
 * generators emit them directly into an ES module. Because both are derived
 * from `NamingConvention.variable`, that predicate's false positives (#2111)
 * turned legal OpenAPI paths such as `/let/{let}` into `getByLet(connection,
 * let)` — a real `SyntaxError`, not a hypothetical. A set-only unit test cannot
 * prove this contract, so each route's emitted declaration is compiled.
 *
 * 1. Build one route per restricted word, plus controls that must not change.
 * 2. Assert every accessor segment and parameter key is a legal binding.
 * 3. Compile the SDK-shaped declaration each route implies.
 * 4. Assert the already-escaped and ordinary routes keep their exact names.
 */
export const test_http_migrate_route_accessor_identifier = (): void => {
  const words: string[] = [
    // the eight #2111 false positives
    "await",
    "yield",
    "let",
    "static",
    "implements",
    "interface",
    "eval",
    "arguments",
    // words already escaped before #2111 -- must not regress
    "package",
    "private",
    "protected",
    "public",
    "case",
    "class",
    "enum",
    "module",
    // ordinary names -- must stay untouched
    "foo",
    "async",
    "of",
    "get",
  ];
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    paths: Object.fromEntries(
      words.map((word) => [
        `/${word}/{${word}}`,
        {
          get: {
            parameters: [
              {
                name: word,
                in: "path" as const,
                required: true,
                schema: { type: "string" as const },
              },
            ],
          },
        },
      ]),
    ),
    components: {},
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  TestEquality.equals("every route migrated", app.routes.length, words.length);

  for (const route of app.routes) {
    // 2. EVERY DERIVED NAME IS A LEGAL BINDING
    for (const accessor of route.accessor)
      TestEquality.equals(
        `accessor segment ${JSON.stringify(accessor)} of ${route.path} is a legal binding`,
        _isLegalBinding(accessor),
        true,
      );
    for (const parameter of route.parameters)
      TestEquality.equals(
        `parameter key ${JSON.stringify(parameter.key)} of ${route.path} is a legal binding`,
        _isLegalBinding(parameter.key),
        true,
      );

    // 3. THE DECLARATION THE ROUTE IMPLIES MUST COMPILE
    //
    // This is the contract that actually breaks: the accessor becomes the
    // function name and each parameter key becomes one of its parameters.
    // Compiling the whole declaration also proves the keys do not collide.
    TestEquality.equals(
      `generated declaration for ${route.path} compiles`,
      _isLegalDeclaration({
        name: route.accessor.at(-1)!,
        parameters: ["connection", ...route.parameters.map((p) => p.key)],
      }),
      true,
    );
  }

  // 4. CONTROLS KEEP THEIR EXACT NAMES
  const accessorOf = (path: string): string[] =>
    app.routes.find((r) => r.path === path)!.accessor;
  const keyOf = (path: string): string =>
    app.routes.find((r) => r.path === path)!.parameters[0]!.key;

  TestEquality.equals("ordinary route is untouched", accessorOf("/foo/{foo}"), [
    "foo",
    "getByFoo",
  ]);
  TestEquality.equals(
    "ordinary parameter key is untouched",
    keyOf("/foo/{foo}"),
    "foo",
  );
  TestEquality.equals(
    "contextual keyword is untouched",
    accessorOf("/async/{async}"),
    ["async", "getByAsync"],
  );
  // Words that were already escaped before #2111 must keep their exact names.
  // A legality sweep alone cannot prove this: it would still pass if the fix
  // silently re-escaped them to `__case`.
  TestEquality.equals(
    "already-escaped route is unchanged",
    accessorOf("/package/{package}"),
    ["_package", "getBy_package"],
  );
  TestEquality.equals(
    "already-escaped parameter key is unchanged",
    keyOf("/package/{package}"),
    "_package",
  );
  TestEquality.equals(
    "reserved word is unchanged",
    accessorOf("/case/{case}"),
    ["_case", "getBy_case"],
  );
  TestEquality.equals(
    "reserved parameter key is unchanged",
    keyOf("/case/{case}"),
    "_case",
  );
  TestEquality.equals(
    "module policy is unchanged",
    accessorOf("/module/{module}"),
    ["_module", "getBy_module"],
  );
  TestEquality.equals("newly escaped route", accessorOf("/let/{let}"), [
    "_let",
    "getBy_let",
  ]);
  TestEquality.equals(
    "newly escaped parameter key",
    keyOf("/let/{let}"),
    "_let",
  );
  TestEquality.equals("eval is escaped", keyOf("/eval/{eval}"), "_eval");
  TestEquality.equals(
    "arguments is escaped",
    keyOf("/arguments/{arguments}"),
    "_arguments",
  );
};

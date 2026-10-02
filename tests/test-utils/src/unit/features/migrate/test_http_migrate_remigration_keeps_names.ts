import { IHttpMigrateApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

/**
 * Verifies migrating a migrated document again keeps every schema name.
 *
 * A migrated document keeps each route's inline schema and also holds the
 * component emplaced from it. Emplacing no longer overwrites a taken name
 * (#2451), so migrating that document again must recognize its own component as
 * the same schema. A conversion such as a 3.1 downgrade reorders keys (the Uber
 * example swaps a property's `format` and `description`), so the schemas are
 * compared regardless of key order. Compared as text, one Uber query schema
 * moved from `IApiEstimatesTime.GetQuery` to `IApiEstimatesTime._GetQuery`.
 *
 * 1. Migrate every example document.
 * 2. Migrate its output again, directly and after 3.1 and 3.0 downgrades.
 * 3. Assert every route's body, query, header, and response references stay.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application runs on every JSON example document and again on its migrated output, directly and after 3.1 and 3.0 downgrades; each route's body, query, header and success reference is compared with the first migration.
 * @evidence contracts/testing.md#independent-expectations The oracle is the idempotence invariant that migrating a migrated document preserves every reference; the first migration's references are the baseline. This establishes stability, not that the baseline names themselves are correct, which other cases pin with literals.
 * @evidence contracts/testing.md#distinguishing-cases All example documents of four OpenAPI versions and three input forms are covered, including key-reordering downgrades; if an example directory had no JSON file the loop would pass vacuously.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The example documents are read from disk and migrated in process with no native build, installation or host.
 */
export const test_http_migrate_remigration_keeps_names =
  async (): Promise<void> => {
    const references = (app: IHttpMigrateApplication) =>
      Object.fromEntries(
        app.routes.map((route) => [
          `${route.method} ${route.path}`,
          [
            route.body?.schema,
            route.query?.schema,
            route.headers?.schema,
            route.success?.schema,
          ].map((schema) =>
            schema !== undefined && "$ref" in schema ? schema.$ref : null,
          ),
        ]),
      );
    for (const version of ["v2.0", "v3.0", "v3.1", "v3.2"]) {
      const directory: string = `${TestGlobal.ROOT}/examples/${version}`;
      for (const file of await fs.promises.readdir(directory)) {
        if (file.endsWith(".json") === false) continue;
        const document = JSON.parse(
          await fs.promises.readFile(`${directory}/${file}`, "utf8"),
        );
        const app: IHttpMigrateApplication =
          HttpMigration.application(document);
        const expected = references(app);
        const inputs: Array<
          [string, Parameters<typeof HttpMigration.application>[0]]
        > = [
          ["direct", app.document()],
          ["3.1", OpenApiConverter.downgradeDocument(app.document(), "3.1")],
          ["3.0", OpenApiConverter.downgradeDocument(app.document(), "3.0")],
        ];
        for (const [title, input] of inputs) {
          const again = references(HttpMigration.application(input));
          TestEquality.equals(`${version}/${file} ${title}`, again, expected);
        }
      }
    }
  };

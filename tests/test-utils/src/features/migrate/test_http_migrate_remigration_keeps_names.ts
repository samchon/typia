import { IHttpMigrateApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../TestGlobal";

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

import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies an x-autobe plugin extension is rendered into the route comment.
 *
 * Downstream tools attach multiline specifications through x- extensions. The
 * comment builder must render them as a tag after the standard prose and
 * parameters, preserving blank lines.
 *
 * 1. Declare a GET operation with a description and a multiline
 *    x-autobe-specification.
 * 2. Migrate the document.
 * 3. Assert the comment equals the description, the connection parameter tag and
 *    the specification tag with its blank line.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the authored operation and the whole comment() string is compared, so a missing, reordered or flattened extension changes it.
 * @evidence contracts/testing.md#independent-expectations The expected comment is an authored literal following the documented comment layout; it is not generated from the implementation.
 * @evidence contracts/testing.md#distinguishing-cases A multiline extension with a blank line is the owned case; operations without extensions and several extensions are not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Migration runs in process on an authored document with no native build, installation or host.
 */
export const test_http_migrate_route_plugin = async (): Promise<void> => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    paths: {
      "/items": {
        get: {
          description: "Retrieve a list of items.",
          ...{
            "x-autobe-specification": [
              "Hello everyone!",
              "",
              "Nice to to meet you all.",
            ].join("\n"),
          },
        },
      },
    },
    components: {},
  };
  const migrate: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute = migrate.routes[0]!;
  TestEquality.equals(
    "plugin",
    route.comment(),
    [
      "Retrieve a list of items.",
      "",
      "@param connection",
      "@x-autobe-specification Hello everyone!",
      "",
      "Nice to to meet you all.",
    ].join("\n"),
  );
};

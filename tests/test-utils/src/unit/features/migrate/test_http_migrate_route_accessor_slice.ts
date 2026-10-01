import { IHttpMigrateApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies a custom accessor that is a prefix of another is disambiguated.
 *
 * X-samchon-accessor lets a document name routes explicitly. When one route's
 * full accessor is a namespace prefix of another's, the shorter route would
 * occupy a name the longer route needs as a namespace, so the migrator must
 * escape the conflicting segment.
 *
 * 1. Declare two POST operations with accessors [auth, logout] and [auth, logout,
 *    all].
 * 2. Migrate the document.
 * 3. Assert the accessors are auth.logout and auth._logout.all.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the authored document and the sorted accessor list is compared; failing to escape the shared segment would produce two incompatible uses of auth.logout.
 * @evidence contracts/testing.md#independent-expectations The expected escaped spelling is an authored literal following the documented underscore-prefix rule for colliding accessor segments, not an output snapshot. Only one conflict shape is covered.
 * @evidence contracts/testing.md#distinguishing-cases Prefix and longer accessors are the conflict case; the same document without the longer route, and conflicts across more than two levels, are not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Migration runs in process on an authored document with no native build, installation or host.
 */
export const test_http_migrate_route_accessor_slice = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    components: {},
    paths: {
      "/auth/logout": {
        post: {
          "x-samchon-accessor": ["auth", "logout"],
        },
      },
      "/auto/logout/all": {
        post: {
          "x-samchon-accessor": ["auth", "logout", "all"],
        },
      },
    },
  };
  const migrate: IHttpMigrateApplication = HttpMigration.application(document);
  const actual: string[] = migrate.routes
    .map((r) => r.accessor.join("."))
    .sort();
  TestEquality.equals(
    "accessors",
    actual,
    ["auth.logout", "auth._logout.all"].sort(),
  );
};

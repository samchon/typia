import { TestValidator } from "@nestia/e2e";
import { IHttpMigrateApplication, OpenApi } from "@typia/interface";
import { HttpMigration } from "@typia/utils";

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
  TestValidator.equals(
    "accessors",
    actual,
    ["auth.logout", "auth._logout.all"].sort(),
  );
};

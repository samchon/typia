import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration } from "@typia/utils";

export const test_http_migrate_route_plugin = async (): Promise<void> => {
  const document: OpenApi.IDocument = {
    openapi: "3.1.0",
    "x-samchon-emended-v4": true,
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
  TestValidator.equals(
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

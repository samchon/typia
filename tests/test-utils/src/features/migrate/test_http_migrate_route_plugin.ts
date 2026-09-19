import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpMigration } from "@typia/utils";

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

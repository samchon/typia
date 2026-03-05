import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration } from "@typia/utils";

export const test_http_migrate_route_success_null = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.1.0",
    components: {},
    paths: {
      "/nothing": {
        get: {
          responses: {
            "200": {
              description: "something",
              content: {
                "application/json": {},
              },
            },
          },
        },
      },
    },
    "x-samchon-emended-v4": true,
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute = app.routes[0]!;
  TestValidator.equals("undefined", route.success, null);
};

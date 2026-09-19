import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpMigration } from "@typia/utils";

export const test_http_migrate_route_success_null = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
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
    "x-typia-emended-v12": true,
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute = app.routes[0]!;
  TestEquality.equals("undefined", route.success, null);
};

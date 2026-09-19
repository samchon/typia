import { IHttpMigrateApplication, IHttpMigrateRoute } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpMigration } from "@typia/utils";
import { OpenApi } from "typia";

export const test_http_migrate_route_accessor_reserved = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    paths: {
      "/case/switch/do/while": {
        get: {},
      },
    },
    components: {},
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute = app.routes[0]!;
  TestEquality.equals("accessor", route.accessor, [
    "_case",
    "_switch",
    "_do",
    "_while",
    "get",
  ]);
};

import {
  HttpMigration,
  IHttpConnection,
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@samchon/openapi";
import fs from "fs";

import { TestGlobal } from "../TestGlobal";

export const test_http_migrate_fetch_multipart = async (
  connection: IHttpConnection,
): Promise<void> => {
  const document: OpenApi.IDocument = OpenApi.convert(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute | undefined = app.routes.find(
    (r) =>
      r.path === "/{index}/{level}/{optimal}/multipart" && r.method === "post",
  );
  if (route === undefined) throw new Error("Route not found");

  await HttpMigration.execute({
    connection,
    route,
    parameters: {
      index: "https://some.url/index.html",
      level: 2,
      optimal: true,
    },
    query: {
      summary: "some summary",
      thumbnail: "https://some.url",
    },
    body: {
      title: "some title",
      body: "some body",
      draft: false,
      file: new File([new Uint8Array(999).fill(1)], "file.txt"),
    },
  });
};

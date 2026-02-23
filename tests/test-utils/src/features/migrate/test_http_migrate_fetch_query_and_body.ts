// import {
//   HttpMigration,
//   IHttpConnection,
//   IHttpMigrateApplication,
//   IHttpMigrateRoute,
//   OpenApi,
// } from "@samchon/openapi";
// import fs from "fs";

// import { TestGlobal } from "../../TestGlobal";

// export const test_http_migrate_fetch_query_and_body = async (
//   connection: IHttpConnection,
// ): Promise<void> => {
//   const document: OpenApi.IDocument = OpenApiConverter.upgrade(
//     JSON.parse(
//       await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
//     ),
//   );
//   const app: IHttpMigrateApplication = HttpMigration.application(document);
//   const route: IHttpMigrateRoute | undefined = app.routes.find(
//     (r) =>
//       r.path === "/{index}/{level}/{optimal}/query/body" && r.method === "post",
//   );
//   if (route === undefined) throw new Error("Route not found");

//   await HttpMigration.execute({
//     connection,
//     route,
//     parameters: {
//       index: "https://some.url/index.html",
//       level: 123,
//       optimal: true,
//     },
//     query: {
//       summary: "some summary",
//       thumbnail: "https://some.url",
//     },
//     body: {
//       title: "some title",
//       body: "some body",
//       draft: false,
//     },
//   });
// };

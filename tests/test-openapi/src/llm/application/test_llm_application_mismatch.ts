import { TestValidator } from "@nestia/e2e";
import { HttpLlm, IHttpLlmApplication, OpenApi } from "@samchon/openapi";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_application_mismatch = (): void => {
  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IPoint, ICircle, IRectangle]>();
  collection.schemas[0] = { $ref: "#/components/schemas/IPoint1" };
  collection.schemas[1] = { $ref: "#/components/schemas/ICircle1" };
  collection.schemas[2] = { $ref: "#/components/schemas/IRectangle1" };

  const document: OpenApi.IDocument = {
    openapi: "3.1.0",
    components: collection.components,
    paths: {
      "/point": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: collection.schemas[0],
              },
            },
          },
        },
      },
      "/circle": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: collection.schemas[1],
              },
            },
          },
        },
      },
      "/rectangle": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: collection.schemas[2],
              },
            },
          },
        },
      },
    },
    "x-samchon-emended-v4": true,
  };

  const app: IHttpLlmApplication = HttpLlm.application({
    document,
  });
  TestValidator.equals("#success")(app.functions.length)(0);
  TestValidator.equals("#errors")(app.errors.length)(3);
  TestValidator.equals("accessors")(
    app.errors
      .map((error) => error.messages.map((m) => m.split(":")[0]))
      .flat()
      .sort(),
  )(
    Object.keys(document.paths ?? {})
      .map(
        (path) =>
          `$input.paths[${JSON.stringify(path)}]["post"].requestBody.content["application/json"].schema`,
      )
      .sort(),
  );
};

interface IPoint {
  x: number;
  y: number;
}
interface ICircle {
  radius: number;
  center: IPoint;
}
interface IRectangle {
  p1: IPoint;
  p2: IPoint;
}

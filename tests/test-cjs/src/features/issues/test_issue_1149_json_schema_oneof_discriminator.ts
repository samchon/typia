import { OpenApi } from "@samchon/openapi";
import typia, { IJsonSchemaCollection } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1149_json_schema_oneof_discriminator = (): void => {
  const discriminated: IJsonSchemaCollection =
    typia.json.schemas<
      [Point | Line | Triangle | Rectangle | Polyline | null]
    >();
  TestValidator.equals("discriminated")({
    oneOf: [
      { type: "null" },
      { $ref: "#/components/schemas/Point" },
      { $ref: "#/components/schemas/Line" },
      { $ref: "#/components/schemas/Triangle" },
      { $ref: "#/components/schemas/Rectangle" },
      { $ref: "#/components/schemas/Polyline" },
    ],
    discriminator: {
      propertyName: "type",
      mapping: {
        point: "#/components/schemas/Point",
        line: "#/components/schemas/Line",
        triangle: "#/components/schemas/Triangle",
        rectangle: "#/components/schemas/Rectangle",
        polyline: "#/components/schemas/Polyline",
      },
    },
  } satisfies OpenApi.IJsonSchema.IOneOf as OpenApi.IJsonSchema.IOneOf)(
    discriminated.schemas[0] as OpenApi.IJsonSchema.IOneOf,
  );

  const plain: IJsonSchemaCollection =
    typia.json.schemas<
      [Point | Line | Triangle | Rectangle | Polyline | Circle]
    >();
  TestValidator.equals("plain")(plain.schemas[0])({
    oneOf: [
      { $ref: "#/components/schemas/Point" },
      { $ref: "#/components/schemas/Line" },
      { $ref: "#/components/schemas/Triangle" },
      { $ref: "#/components/schemas/Rectangle" },
      { $ref: "#/components/schemas/Polyline" },
      { $ref: "#/components/schemas/Circle" },
    ],
  } satisfies OpenApi.IJsonSchema.IOneOf);
};

interface Point {
  type: "point";
  x: number;
  y: number;
}
interface Line {
  type: "line";
  p1: Point;
  p2: Point;
}
interface Triangle {
  type: "triangle";
  p1: Point;
  p2: Point;
  p3: Point;
}
interface Rectangle {
  type: "rectangle";
  p1: Point;
  p2: Point;
  p3: Point;
  p4: Point;
}
interface Polyline {
  type: "polyline";
  points: Point[];
}
interface Circle {
  radius: number;
}

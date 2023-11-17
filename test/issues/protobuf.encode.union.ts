import fs from "fs";
import typia from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

interface ICircle {
  radius: number;
  position: IPoint;
}

interface IPolygon {
  /**
   * @minItems 3
   */
  points: IPoint[];
}

interface ITriangle extends IPoint {
  p1: IPoint;
  p2: IPoint;
  p3: IPoint;
}

interface IRectangle {
  p1: IPoint;
  p2: IPoint;
}

interface IPoint {
  type: "point";
  x: number;
  y: number;
}

interface IDocument {
  shape: ICircle | IPoint | ITriangle | IRectangle | IPolygon;
}

fs.writeFileSync(
  __dirname + "/protobuf.encode.union.js",
  [
    "//-----------------------------------------------",
    "// ENCODER",
    "//-----------------------------------------------",
    typia.protobuf.createEncode<IDocument>().toString(),
    "",
    "//-----------------------------------------------",
    "// DECODER",
    "//-----------------------------------------------",
    typia.protobuf.createDecode<IDocument>().toString(),
  ].join("\n"),
  "utf8",
);

const data: IDocument = typia.random<IDocument>();
const buffer = typia.protobuf.encode<IDocument>(data);
const decoded = typia.protobuf.decode<IDocument>(buffer);

console.log(buffer.length);

if (primitive_equal_to(data, decoded) === false) {
  fs.writeFileSync(
    __dirname + "/protobuf.encode.union.json",
    JSON.stringify(data, null, 4),
    "utf8",
  );
  fs.writeFileSync(
    __dirname + "/protobuf.encode.union.decoded.json",
    JSON.stringify(decoded, null, 4),
    "utf8",
  );
}

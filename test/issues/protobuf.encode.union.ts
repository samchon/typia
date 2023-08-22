import fs from "fs";
import typia from "typia";

interface ICircle {
    type: "circle";
    radius: number;
}

interface IPolygon {
    type: "triangle";
    points: IPoint[];
}

interface IRectangle {
    type: "rectangle";
    width: number;
    height: number;
}

interface IPoint {
    type: "point";
    x: number;
    y: number;
}

interface IDocument {
    shape:
        | number
        | string
        | Uint8Array
        | ICircle
        | IPolygon
        | IRectangle
        | IPoint;
}

fs.writeFileSync(
    __dirname + "/protobuf.encode.union.js",
    typia.protobuf.createEncode<IDocument>().toString(),
    "utf8",
);

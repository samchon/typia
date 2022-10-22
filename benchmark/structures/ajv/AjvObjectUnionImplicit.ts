import { Type } from "@sinclair/typebox";
import Ajv from "ajv";

const Point = Type.Object(
    {
        x: Type.Number(),
        y: Type.Number(),
        slope: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
    },
    { additionalProperties: false },
);
const Line = Type.Object(
    {
        p1: Point,
        p2: Point,
        distance: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
    },
    { additionalProperties: false },
);
const Triangle = Type.Object(
    {
        p1: Point,
        p2: Point,
        p3: Point,
        width: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
        height: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
        area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
    },
    { additionalProperties: false },
);
const Rectangle = Type.Object(
    {
        p1: Point,
        p2: Point,
        p3: Point,
        p4: Point,
        width: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
        height: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
        area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
    },
    { additionalProperties: false },
);
const Polyline = Type.Object(
    {
        points: Type.Array(Point),
        length: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
    },
    { additionalProperties: false },
);
const Polygon = Type.Object(
    {
        outer: Polyline,
        inner: Type.Optional(Type.Array(Polyline)),
        area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
    },
    { additionalProperties: false },
);
const Circle = Type.Object(
    {
        centroid: Type.Optional(Point),
        radius: Type.Number(),
        area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
    },
    { additionalProperties: false },
);

const Union = Type.Union([
    Point,
    Line,
    Triangle,
    Rectangle,
    Polyline,
    Polygon,
    Circle,
]);

export const __AjvObjectUnionImplicit = Type.Array(Union);
const ajv = new Ajv();
const validate = ajv.compile(__AjvObjectUnionImplicit);
export const AjvObjectUnionImplicit = {
    Check: (input: unknown) => validate(input) as boolean,
};

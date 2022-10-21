import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Point = Type.Object(
    {
        x: Type.Number(),
        y: Type.Number(),
        slope: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
    },
    { additionalProperties: false },
);
const Line = Type.Object(
    {
        p1: Point,
        p2: Point,
        distance: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
    },
    { additionalProperties: false },
);
const Triangle = Type.Object(
    {
        p1: Point,
        p2: Point,
        p3: Point,
        width: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
        height: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
        area: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
    },
    { additionalProperties: false },
);
const Rectangle = Type.Object(
    {
        p1: Point,
        p2: Point,
        p3: Point,
        p4: Point,
        width: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
        height: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
        area: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
    },
    { additionalProperties: false },
);
const Polyline = Type.Object(
    {
        points: Type.Array(Point),
        length: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
    },
    { additionalProperties: false },
);
const Polygon = Type.Object(
    {
        outer: Polyline,
        inner: Type.Optional(Type.Array(Polyline)),
        area: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
    },
    { additionalProperties: false },
);
const Circle = Type.Object(
    {
        centroid: Type.Optional(Point),
        radius: Type.Number(),
        area: Type.Union([Type.Null(), Type.Undefined(), Type.Number()]),
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

export const __TypeBoxObjectUnionImplicit = Type.Array(Union);
export const TypeBoxObjectUnionImplicit = TypeCompiler.Compile(
    __TypeBoxObjectUnionImplicit,
);

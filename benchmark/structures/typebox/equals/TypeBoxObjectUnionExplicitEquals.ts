import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Point = Type.Object(
    {
        x: Type.Number(),
        y: Type.Number(),
    },
    { additionalProperties: Type.Undefined() },
);
const Circle = Type.Object(
    {
        centroid: Point,
        radius: Type.Number(),
    },
    { additionalProperties: Type.Undefined() },
);
const Line = Type.Object(
    {
        p1: Point,
        p2: Point,
    },
    { additionalProperties: Type.Undefined() },
);
const Triangle = Type.Object(
    {
        p1: Point,
        p2: Point,
        p3: Point,
    },
    { additionalProperties: Type.Undefined() },
);
const Rectangle = Type.Object(
    {
        p1: Point,
        p2: Point,
        p3: Point,
        p4: Point,
    },
    { additionalProperties: Type.Undefined() },
);

const Polyline = Type.Object(
    {
        points: Type.Array(Point),
    },
    { additionalProperties: Type.Undefined() },
);

const Polygon = Type.Object(
    {
        outer: Polyline,
        inner: Type.Array(Polyline),
    },
    { additionalProperties: Type.Undefined() },
);

const Union = Type.Union([
    Type.Intersect(
        [
            Point,
            Type.Object({
                type: Type.Literal("point"),
            }),
        ],
        { additionalProperties: Type.Undefined() },
    ),
    Type.Intersect(
        [
            Line,
            Type.Object({
                type: Type.Literal("line"),
            }),
        ],
        { additionalProperties: Type.Undefined() },
    ),
    Type.Intersect([
        Triangle,
        Type.Object({
            type: Type.Literal("triangle"),
        }),
    ]),
    Type.Intersect(
        [
            Rectangle,
            Type.Object({
                type: Type.Literal("rectangle"),
            }),
        ],
        { additionalProperties: Type.Undefined() },
    ),
    Type.Intersect(
        [
            Polyline,
            Type.Object({
                type: Type.Literal("polyline"),
            }),
        ],
        { additionalProperties: Type.Undefined() },
    ),
    Type.Intersect(
        [
            Polygon,
            Type.Object({
                type: Type.Literal("polygon"),
            }),
        ],
        { additionalProperties: Type.Undefined() },
    ),
    Type.Intersect(
        [
            Circle,
            Type.Object({
                type: Type.Literal("circle"),
            }),
        ],
        { additionalProperties: Type.Undefined() },
    ),
]);

export const __TypeBoxObjectUnionExplicitEquals = Type.Array(Union);
export const TypeBoxObjectUnionExplicitEquals = TypeCompiler.Compile(
    __TypeBoxObjectUnionExplicitEquals,
);

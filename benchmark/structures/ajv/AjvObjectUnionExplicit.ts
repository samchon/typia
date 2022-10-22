import { Type } from "@sinclair/typebox";
import Ajv from "ajv";

const Point = Type.Object({
    x: Type.Number(),
    y: Type.Number(),
});
const Circle = Type.Object({
    centroid: Point,
    radius: Type.Number(),
});
const Line = Type.Object({
    p1: Point,
    p2: Point,
});
const Triangle = Type.Object({
    p1: Point,
    p2: Point,
    p3: Point,
});
const Rectangle = Type.Object({
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point,
});

const Polyline = Type.Object({
    points: Type.Array(Point),
});

const Polygon = Type.Object({
    outer: Polyline,
    inner: Type.Array(Polyline),
});

const Union = Type.Union([
    Type.Intersect([
        Point,
        Type.Object({
            type: Type.Literal("point"),
        }),
    ]),
    Type.Intersect([
        Line,
        Type.Object({
            type: Type.Literal("line"),
        }),
    ]),
    Type.Intersect([
        Triangle,
        Type.Object({
            type: Type.Literal("triangle"),
        }),
    ]),
    Type.Intersect([
        Rectangle,
        Type.Object({
            type: Type.Literal("rectangle"),
        }),
    ]),
    Type.Intersect([
        Polyline,
        Type.Object({
            type: Type.Literal("polyline"),
        }),
    ]),
    Type.Intersect([
        Polygon,
        Type.Object({
            type: Type.Literal("polygon"),
        }),
    ]),
    Type.Intersect([
        Circle,
        Type.Object({
            type: Type.Literal("circle"),
        }),
    ]),
]);

export const __AjvObjectUnionExplicit = Type.Array(Union);
const ajv = new Ajv();
const validate = ajv.compile(__AjvObjectUnionExplicit);
export const AjvObjectUnionExplicit = {
    Check: (input: unknown) => validate(input) as boolean,
};

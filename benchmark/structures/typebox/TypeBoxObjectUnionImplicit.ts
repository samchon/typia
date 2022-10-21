import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

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

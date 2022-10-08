import * as t from "io-ts";

const Point = t.type({
    x: t.number,
    y: t.number,
});
const Circle = t.type({
    centroid: Point,
    radius: t.number,
});
const Line = t.type({
    p1: Point,
    p2: Point,
});
const Triangle = t.type({
    p1: Point,
    p2: Point,
    p3: Point,
});
const Rectangle = t.type({
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point,
});
const Polyline = t.type({
    points: t.array(Point),
});
const Polygon = t.type({
    outer: Polyline,
    inner: t.array(Polyline),
});

const Union = t.union([
    Point,
    Line,
    Triangle,
    Rectangle,
    Polyline,
    Polygon,
    Circle,
]);

export const IoTsObjectUnionImplicit = t.array(Union);

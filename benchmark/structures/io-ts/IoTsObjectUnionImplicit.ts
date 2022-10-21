import * as t from "io-ts";

const Point = t.type({
    x: t.number,
    y: t.number,
    slope: t.union([t.null, t.undefined, t.number]),
});
const Circle = t.type({
    centroid: t.union([t.undefined, Point]),
    radius: t.number,
    area: t.union([t.null, t.undefined, t.number]),
});
const Line = t.type({
    p1: Point,
    p2: Point,
    distance: t.union([t.null, t.undefined, t.number]),
});
const Triangle = t.type({
    p1: Point,
    p2: Point,
    p3: Point,
    width: t.union([t.null, t.undefined, t.number]),
    height: t.union([t.null, t.undefined, t.number]),
    area: t.union([t.null, t.undefined, t.number]),
});
const Rectangle = t.type({
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point,
    width: t.union([t.null, t.undefined, t.number]),
    height: t.union([t.null, t.undefined, t.number]),
    area: t.union([t.null, t.undefined, t.number]),
});
const Polyline = t.type({
    points: t.array(Point),
    length: t.union([t.null, t.undefined, t.number]),
});
const Polygon = t.type({
    outer: Polyline,
    inner: t.union([t.array(Polyline), t.undefined]),
    area: t.union([t.null, t.undefined, t.number]),
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

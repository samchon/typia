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
    t.type({
        ...Point.props,
        type: t.literal("point"),
    }),
    t.type({
        ...Line.props,
        type: t.literal("line"),
    }),
    t.type({
        ...Triangle.props,
        type: t.literal("triangle"),
    }),
    t.type({
        ...Rectangle.props,
        type: t.literal("rectangle"),
    }),
    t.type({
        ...Polyline.props,
        type: t.literal("polyline"),
    }),
    t.type({
        ...Polygon.props,
        type: t.literal("polygon"),
    }),
    t.type({
        ...Circle.props,
        type: t.literal("circle"),
    }),
]);

export const IoTsObjectUnionExplicit = t.array(Union);

import * as t from "io-ts";

const Point3D = t.type({
    x: t.number,
    y: t.number,
    z: t.number,
});

const Box3D = t.type({
    scale: Point3D,
    position: Point3D,
    rotate: Point3D,
    pivot: Point3D,
});

export const IoTsObjectSimple = Box3D;

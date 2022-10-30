import { z } from "zod";

const Point3D = z.object({
    x: z.number(),
    y: z.number(),
});

const Box3D = z.object({
    scale: Point3D,
    position: Point3D,
    rotate: Point3D,
    pivot: Point3D,
});

export const ZodObjectSimple = Box3D;

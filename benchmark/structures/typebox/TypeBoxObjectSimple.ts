import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Point3D = Type.Object({
    x: Type.Number(),
    y: Type.Number(),
    z: Type.Number(),
});

const Box3D = Type.Object({
    scale: Point3D,
    position: Point3D,
    rotate: Point3D,
    pivot: Point3D,
});

export const __TypeBoxObjectSimple = Box3D;
export const TypeBoxObjectSimple = TypeCompiler.Compile(__TypeBoxObjectSimple);

import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { TypeSystemPolicy } from "@sinclair/typebox/system";

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

TypeSystemPolicy.AllowArrayObject = true;
TypeSystemPolicy.AllowNaN = true;

export const __TypeboxObjectSimple = Box3D;
export const TypeboxObjectSimple = TypeCompiler.Compile(__TypeboxObjectSimple);

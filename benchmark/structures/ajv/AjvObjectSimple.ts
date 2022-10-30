import { Type } from "@sinclair/typebox";
import Ajv from "ajv";

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

export const __AjvObjectSimple = Box3D;

const ajv = new Ajv();
const validate = ajv.compile(__AjvObjectSimple);
export const AjvObjectSimple = {
    Check: (input: unknown) => validate(input) as boolean,
};

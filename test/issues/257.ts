import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

import typia from "../../src";

export function by_typescript_json() {
    interface Point2D {
        x: number;
        y: number;
    }
    interface Point3D {
        x: number;
        y: number;
        z: number;
    }
    return (input: Point2D | Point3D) => typia.is(input);
}

export function by_typebox() {
    const Point2D = Type.Object(
        {
            x: Type.Number(),
            y: Type.Number(),
        },
        { additionalProperties: false },
    );
    const Point3D = Type.Object(
        {
            x: Type.Number(),
            y: Type.Number(),
            z: Type.Number(),
        },
        { additionalProperties: false },
    );
    return TypeCompiler.Compile(Type.Union([Point2D, Point3D]));
}
console.log(by_typebox().Code());

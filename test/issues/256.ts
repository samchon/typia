import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Point3D = Type.Object(
  {
    x: Type.Number(),
    y: Type.Number(),
    z: Type.Number(),
  },
  { additionalProperties: false },
);

const Validator = TypeCompiler.Compile(Point3D);
console.log(
  Validator.Check({
    x: 1,
    y: 1,
    z: 1,
    something: undefined,
  }),
);
console.log(Validator.Code());

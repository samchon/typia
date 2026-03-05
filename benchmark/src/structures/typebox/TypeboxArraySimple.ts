import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { TypeSystemPolicy } from "@sinclair/typebox/system";

const Hobby = Type.Object({
  name: Type.String(),
  rank: Type.Number(),
});

const Content = Type.Object({
  body: Type.String(),
});

const Person = Type.Object({
  name: Type.String(),
  email: Type.String(),
  hobbies: Type.Union([
    Type.Array(Hobby),
    Type.Array(Content),
    Type.Array(Type.String()),
  ]),
});

TypeSystemPolicy.AllowArrayObject = true;
TypeSystemPolicy.AllowNaN = true;

export const __TypeboxArraySimple = Type.Array(Person);
export const TypeboxArraySimple = TypeCompiler.Compile(__TypeboxArraySimple);

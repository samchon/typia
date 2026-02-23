import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { TypeSystemPolicy } from "@sinclair/typebox/system";

const Timestamp = Type.Object({
  time: Type.Number(),
  zone: Type.Number(),
});

const Employee = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  age: Type.Number(),
  grade: Type.Number(),
  employed_at: Timestamp,
});

const Department = Type.Object({
  id: Type.Number(),
  code: Type.String(),
  sales: Type.Number(),
  created_at: Timestamp,
  employees: Type.Array(Employee),
});

const Company = Type.Object({
  id: Type.Number(),
  serial: Type.Number(),
  name: Type.String(),
  established_at: Timestamp,
  departments: Type.Array(Department),
});

TypeSystemPolicy.AllowArrayObject = true;
TypeSystemPolicy.AllowNaN = true;

export const __TypeboxArrayHierarchical = Type.Array(Company);
export const TypeboxArrayHierarchical = TypeCompiler.Compile(
  __TypeboxArrayHierarchical,
);

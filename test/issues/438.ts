import typia from "typia";

type X = object;
type Y = X;
type Z = Y;
type Type = {};
interface Interface {}
class Class {}

const meta = typia.metadata<[X, Y, Z, Type, Interface, Class]>();
console.log(JSON.stringify(meta, null, 4));

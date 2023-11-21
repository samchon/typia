import typia from "typia";

type MyNumber = number;
interface Base {
  a: string;
  b: MyNumber;
  c: boolean;
}
type OmitB = Omit<Base, "b">;
type OnlyA = Pick<Base, "a">;
type AA = Pick<OnlyA, "a">;
type NotB = OmitB;
type Alias = NotB & AA;
type Alias2 = Alias;
type Alias3 = Alias2;

const app = typia.json.application<[Alias3], "ajv">();
console.log(JSON.stringify(app.components.schemas ?? {}, null, 4));

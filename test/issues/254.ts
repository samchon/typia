import { TypeboxArrayRecursive } from "../../benchmark/structures/typebox/TypeboxArrayRecursive";
import { TypeboxArrayRecursiveUnionExplicit } from "../../benchmark/structures/typebox/TypeboxArrayRecursiveUnionExplicit";
import { TypeboxArrayRecursiveUnionImplicit } from "../../benchmark/structures/typebox/TypeboxArrayRecursiveUnionImplicit";
import { TypeboxObjectHierarchical } from "../../benchmark/structures/typebox/TypeboxObjectHierarchical";
import { TypeboxObjectRecursive } from "../../benchmark/structures/typebox/TypeboxObjectRecursive";
import { TypeboxObjectUnionExplicit } from "../../benchmark/structures/typebox/TypeboxObjectUnionExplicit";
import { TypeboxObjectUnionImplicit } from "../../benchmark/structures/typebox/TypeboxObjectUnionImplicit";

function trace(name: string, code: string): void {
  console.log("//---------------------------------------------------");
  console.log("// " + name);
  console.log("//---------------------------------------------------");
  console.log(`function ${name}() {`);
  console.log(code);
  console.log(`}\n\n`);
}

trace("TypeboxArrayRecursive", TypeboxArrayRecursive.Code());
trace(
  "TypeboxArrayRecursiveUnionExplicit",
  TypeboxArrayRecursiveUnionExplicit.Code(),
);
trace(
  "TypeboxArrayRecursiveUnionImplicit",
  TypeboxArrayRecursiveUnionImplicit.Code(),
);
trace("TypeboxObjectHierarchical", TypeboxObjectHierarchical.Code());
trace("TypeboxObjectRecursive", TypeboxObjectRecursive.Code());
trace("TypeboxObjectUnionExplicit", TypeboxObjectUnionExplicit.Code());
trace("TypeboxObjectUnionImplicit", TypeboxObjectUnionImplicit.Code());

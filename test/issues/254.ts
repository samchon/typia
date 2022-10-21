import { TypeBoxArrayRecursive } from "../../benchmark/structures/typebox/TypeBoxArrayRecursive";
import { TypeBoxArrayRecursiveUnionExplicit } from "../../benchmark/structures/typebox/TypeBoxArrayRecursiveUnionExplicit";
import { TypeBoxArrayRecursiveUnionImplicit } from "../../benchmark/structures/typebox/TypeBoxArrayRecursiveUnionImplicit";
import { TypeBoxObjectHierarchical } from "../../benchmark/structures/typebox/TypeBoxObjectHierarchical";
import { TypeBoxObjectRecursive } from "../../benchmark/structures/typebox/TypeBoxObjectRecursive";
import { TypeBoxObjectUnionExplicit } from "../../benchmark/structures/typebox/TypeBoxObjectUnionExplicit";
import { TypeBoxObjectUnionImplicit } from "../../benchmark/structures/typebox/TypeBoxObjectUnionImplicit";

function trace(name: string, code: string): void {
    console.log("//---------------------------------------------------");
    console.log("// " + name);
    console.log("//---------------------------------------------------");
    console.log(`function ${name}() {`);
    console.log(code);
    console.log(`}\n\n`);
}

trace("TypeBoxArrayRecursive", TypeBoxArrayRecursive.Code());
trace(
    "TypeBoxArrayRecursiveUnionExplicit",
    TypeBoxArrayRecursiveUnionExplicit.Code(),
);
trace(
    "TypeBoxArrayRecursiveUnionImplicit",
    TypeBoxArrayRecursiveUnionImplicit.Code(),
);
trace("TypeBoxObjectHierarchical", TypeBoxObjectHierarchical.Code());
trace("TypeBoxObjectRecursive", TypeBoxObjectRecursive.Code());
trace("TypeBoxObjectUnionExplicit", TypeBoxObjectUnionExplicit.Code());
trace("TypeBoxObjectUnionImplicit", TypeBoxObjectUnionImplicit.Code());

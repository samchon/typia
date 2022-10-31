import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import TSON from "../../src";
// PURE TYPESCRIPT TYPES
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
// BENCHMARK PROGRAM
import { AssertIterateBenchmarker } from "../internal/AssertIterateBenchmarker";
// TYPEBOX TYPES
import { TypeBoxArrayRecursiveEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveEquals";
import { TypeBoxArrayRecursiveUnionExplicitEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveUnionExplicitEquals";
import { TypeBoxArrayRecursiveUnionImplicitEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveUnionImplicitEquals";
import { TypeBoxObjectHierarchicalEquals } from "../structures/typebox/equals/TypeBoxObjectHierarchicalEquals";
import { TypeBoxObjectRecursiveEquals } from "../structures/typebox/equals/TypeBoxObjectRecursiveEquals";
import { TypeBoxObjectSimpleEquals } from "../structures/typebox/equals/TypeBoxObjectSimpleEquals";
import { TypeBoxObjectUnionExplicitEquals } from "../structures/typebox/equals/TypeBoxObjectUnionExplicitEquals";
import { TypeBoxObjectUnionImplicitEquals } from "../structures/typebox/equals/TypeBoxObjectUnionImplicitEquals";
import { TypeBoxUltimateUnionEquals } from "../structures/typebox/equals/TypeBoxUltimateUnionEquals";

/* -----------------------------------------------------------
    PREPARE ASSETS
----------------------------------------------------------- */
class CustomError extends Error {
    public constructor(public readonly instance: object) {
        super();

        const proto = new.target.prototype;
        if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
        else (this as any).proto = proto;
    }
}

const assertTypeBox =
    <S extends TSchema>(program: TypeCheck<S>) =>
    <T>(input: T) => {
        if (program.Check(input)) return input;
        throw new CustomError([...program.Errors(input)]); // iterate implies all errors
    };

const prepare = AssertIterateBenchmarker.prepare([
    "typescript-json",
    "typebox",
]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const assertEquals_po_iterate_pc = () => [
    prepare("object (simple)", () => ObjectSimple.generate(), {
        "typescript-json": TSON.createAssertEquals<ObjectSimple>(),
        typebox: assertTypeBox(TypeBoxObjectSimpleEquals),
    }),
    prepare("object (hierarchical)", () => ObjectHierarchical.generate(), {
        "typescript-json": TSON.createAssertEquals<ObjectHierarchical>(),
        typebox: assertTypeBox(TypeBoxObjectHierarchicalEquals),
    }),
    prepare("object (recursive)", () => ObjectRecursive.generate(), {
        "typescript-json": TSON.createAssertEquals<ObjectRecursive>(),
        typebox: assertTypeBox(TypeBoxObjectRecursiveEquals),
    }),
    prepare("object (union, explicit)", () => ObjectUnionExplicit.generate(), {
        "typescript-json": TSON.createAssertEquals<ObjectUnionExplicit>(),
        typebox: assertTypeBox(TypeBoxObjectUnionExplicitEquals),
    }),
    prepare("object (union, implicit)", () => ObjectUnionImplicit.generate(), {
        "typescript-json": TSON.createAssertEquals<ObjectUnionImplicit>(),
        typebox: assertTypeBox(TypeBoxObjectUnionImplicitEquals),
    }),
    prepare("array (recursive)", () => ArrayRecursive.generate(), {
        "typescript-json": TSON.createAssertEquals<ArrayRecursive>(),
        typebox: assertTypeBox(TypeBoxArrayRecursiveEquals),
    }),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json":
                TSON.createAssertEquals<ArrayRecursiveUnionExplicit>(),
            typebox: assertTypeBox(TypeBoxArrayRecursiveUnionExplicitEquals),
        },
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json":
                TSON.createAssertEquals<ArrayRecursiveUnionImplicit>(),
            typebox: assertTypeBox(TypeBoxArrayRecursiveUnionImplicitEquals),
        },
    ),
    prepare("ultimate union", () => UltimateUnion.generate(), {
        "typescript-json": TSON.createAssertEquals<UltimateUnion>(),
        typebox: assertTypeBox(TypeBoxUltimateUnionEquals),
    }),
];
export { assertEquals_po_iterate_pc as benchmark_assert_equals_iterate };

import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import typia from "../../src";
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
        const value = program.Errors(input).next().value;
        if (value) throw new CustomError(value);
        return input;
    };

const prepare = AssertIterateBenchmarker.prepare(["typia", "typebox"]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const assertEquals_po_iterate_pc = () => [
    prepare("object (simple)", () => ObjectSimple.generate(), {
        typia: typia.createAssertEquals<ObjectSimple>(),
        typebox: assertTypeBox(TypeBoxObjectSimpleEquals),
    }),
    prepare("object (hierarchical)", () => ObjectHierarchical.generate(), {
        typia: typia.createAssertEquals<ObjectHierarchical>(),
        typebox: assertTypeBox(TypeBoxObjectHierarchicalEquals),
    }),
    prepare("object (recursive)", () => ObjectRecursive.generate(), {
        typia: typia.createAssertEquals<ObjectRecursive>(),
        typebox: assertTypeBox(TypeBoxObjectRecursiveEquals),
    }),
    prepare("object (union, explicit)", () => ObjectUnionExplicit.generate(), {
        typia: typia.createAssertEquals<ObjectUnionExplicit>(),
        typebox: assertTypeBox(TypeBoxObjectUnionExplicitEquals),
    }),
    prepare("object (union, implicit)", () => ObjectUnionImplicit.generate(), {
        typia: typia.createAssertEquals<ObjectUnionImplicit>(),
        typebox: assertTypeBox(TypeBoxObjectUnionImplicitEquals),
    }),
    prepare("array (recursive)", () => ArrayRecursive.generate(), {
        typia: typia.createAssertEquals<ArrayRecursive>(),
        typebox: assertTypeBox(TypeBoxArrayRecursiveEquals),
    }),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            typia: typia.createAssertEquals<ArrayRecursiveUnionExplicit>(),
            typebox: assertTypeBox(TypeBoxArrayRecursiveUnionExplicitEquals),
        },
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            typia: typia.createAssertEquals<ArrayRecursiveUnionImplicit>(),
            typebox: assertTypeBox(TypeBoxArrayRecursiveUnionImplicitEquals),
        },
    ),
    prepare("ultimate union", () => UltimateUnion.generate(), {
        typia: typia.createAssertEquals<UltimateUnion>(),
        typebox: assertTypeBox(TypeBoxUltimateUnionEquals),
    }),
];
export { assertEquals_po_iterate_pc as benchmark_assert_equals_iterate };

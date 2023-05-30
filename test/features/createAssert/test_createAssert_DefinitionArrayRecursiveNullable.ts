import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createAssert_DefinitionArrayRecursiveNullable = _test_assert(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    typia.createAssert<DefinitionArrayRecursiveNullable>(),
    DefinitionArrayRecursiveNullable.SPOILERS,
);

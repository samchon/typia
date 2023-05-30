import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_assert_DefinitionArrayRecursiveNullable = _test_assert(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    (input) => typia.assert(input),
    DefinitionArrayRecursiveNullable.SPOILERS,
);

import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_assertClone_DefinitionArrayRecursiveNullable =
    _test_assertClone(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        (input) => typia.assertClone(input),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

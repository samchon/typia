import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_isClone_DefinitionArrayRecursiveNullable = _test_isClone(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    (input) => typia.isClone(input),
    DefinitionArrayRecursiveNullable.SPOILERS,
);

import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createIs_DefinitionArrayRecursiveNullable = _test_is(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    typia.createIs<DefinitionArrayRecursiveNullable>(),
    DefinitionArrayRecursiveNullable.SPOILERS,
);

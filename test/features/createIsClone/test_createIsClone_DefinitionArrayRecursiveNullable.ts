import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createIsClone_DefinitionArrayRecursiveNullable =
    _test_isClone(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createIsClone<DefinitionArrayRecursiveNullable>(),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createIsParse_DefinitionArrayRecursiveNullable =
    _test_isParse(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createIsParse<DefinitionArrayRecursiveNullable>(),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createIsStringify_DefinitionArrayRecursiveNullable =
    _test_isStringify(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createIsStringify<DefinitionArrayRecursiveNullable>(),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

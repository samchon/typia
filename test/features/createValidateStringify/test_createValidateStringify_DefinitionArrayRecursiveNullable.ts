import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createValidateStringify_DefinitionArrayRecursiveNullable =
    _test_validateStringify(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createValidateStringify<DefinitionArrayRecursiveNullable>(),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

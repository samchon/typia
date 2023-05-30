import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createValidateParse_DefinitionArrayRecursiveNullable =
    _test_validateParse(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createValidateParse<DefinitionArrayRecursiveNullable>(),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

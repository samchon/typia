import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_validateParse_DefinitionArrayRecursiveNullable =
    _test_validateParse(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        (input) => typia.validateParse<DefinitionArrayRecursiveNullable>(input),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_validateStringify_DefinitionArrayRecursiveNullable =
    _test_validateStringify(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        (input) => typia.validateStringify(input),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

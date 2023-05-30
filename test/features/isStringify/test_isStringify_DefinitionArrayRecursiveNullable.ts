import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_isStringify_DefinitionArrayRecursiveNullable =
    _test_isStringify(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        (input) => typia.isStringify(input),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

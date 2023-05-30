import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_validateClone_DefinitionArrayRecursiveNullable =
    _test_validateClone(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        (input) => typia.validateClone(input),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );

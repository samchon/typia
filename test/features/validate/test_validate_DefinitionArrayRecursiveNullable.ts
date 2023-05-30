import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_validate_DefinitionArrayRecursiveNullable = _test_validate(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    (input) => typia.validate(input),
    DefinitionArrayRecursiveNullable.SPOILERS,
);

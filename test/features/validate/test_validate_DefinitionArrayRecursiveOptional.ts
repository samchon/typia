import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DefinitionArrayRecursiveOptional } from "../../structures/DefinitionArrayRecursiveOptional";

export const test_validate_DefinitionArrayRecursiveOptional = _test_validate(
    "DefinitionArrayRecursiveOptional",
    DefinitionArrayRecursiveOptional.generate,
    (input) => typia.validate(input),
    DefinitionArrayRecursiveOptional.SPOILERS,
);

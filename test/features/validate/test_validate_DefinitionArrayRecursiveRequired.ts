import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DefinitionArrayRecursiveRequired } from "../../structures/DefinitionArrayRecursiveRequired";

export const test_validate_DefinitionArrayRecursiveRequired = _test_validate(
    "DefinitionArrayRecursiveRequired",
    DefinitionArrayRecursiveRequired.generate,
    (input) => typia.validate(input),
    DefinitionArrayRecursiveRequired.SPOILERS,
);

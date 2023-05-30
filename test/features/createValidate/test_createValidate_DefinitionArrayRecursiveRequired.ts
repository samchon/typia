import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DefinitionArrayRecursiveRequired } from "../../structures/DefinitionArrayRecursiveRequired";

export const test_createValidate_DefinitionArrayRecursiveRequired =
    _test_validate(
        "DefinitionArrayRecursiveRequired",
        DefinitionArrayRecursiveRequired.generate,
        typia.createValidate<DefinitionArrayRecursiveRequired>(),
        DefinitionArrayRecursiveRequired.SPOILERS,
    );

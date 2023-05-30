import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DefinitionArrayRecursiveOptional } from "../../structures/DefinitionArrayRecursiveOptional";

export const test_createValidate_DefinitionArrayRecursiveOptional =
    _test_validate(
        "DefinitionArrayRecursiveOptional",
        DefinitionArrayRecursiveOptional.generate,
        typia.createValidate<DefinitionArrayRecursiveOptional>(),
        DefinitionArrayRecursiveOptional.SPOILERS,
    );

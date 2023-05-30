import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DefinitionArrayRecursiveRequired } from "../../structures/DefinitionArrayRecursiveRequired";

export const test_createAssert_DefinitionArrayRecursiveRequired = _test_assert(
    "DefinitionArrayRecursiveRequired",
    DefinitionArrayRecursiveRequired.generate,
    typia.createAssert<DefinitionArrayRecursiveRequired>(),
    DefinitionArrayRecursiveRequired.SPOILERS,
);

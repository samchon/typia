import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DefinitionArrayRecursiveOptional } from "../../structures/DefinitionArrayRecursiveOptional";

export const test_createAssert_DefinitionArrayRecursiveOptional = _test_assert(
    "DefinitionArrayRecursiveOptional",
    DefinitionArrayRecursiveOptional.generate,
    typia.createAssert<DefinitionArrayRecursiveOptional>(),
    DefinitionArrayRecursiveOptional.SPOILERS,
);

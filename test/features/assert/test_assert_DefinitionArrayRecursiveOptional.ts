import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DefinitionArrayRecursiveOptional } from "../../structures/DefinitionArrayRecursiveOptional";

export const test_assert_DefinitionArrayRecursiveOptional = _test_assert(
    "DefinitionArrayRecursiveOptional",
    DefinitionArrayRecursiveOptional.generate,
    (input) => typia.assert(input),
    DefinitionArrayRecursiveOptional.SPOILERS,
);

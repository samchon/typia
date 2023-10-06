import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_random_ArrayRecursiveUnionExplicit = _test_random("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)({
    random: () => typia.random<ArrayRecursiveUnionExplicit>(),
    assert: typia.createAssert<ArrayRecursiveUnionExplicit>(),
});

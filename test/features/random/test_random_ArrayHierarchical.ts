import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_random_ArrayHierarchical = _test_random("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical
)({
    random: () => typia.random<ArrayHierarchical>(),
    assert: typia.createAssert<ArrayHierarchical>(),
});

import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_assert_ArrayHierarchicalPointer = _test_assert(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((input) => typia.assert<ArrayHierarchicalPointer>(input));

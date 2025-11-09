import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ArrayHierarchical = (): void => _test_assertEquals(CustomGuardError)(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)((input) => typia.assertEquals<ArrayHierarchical>(input, (p) => new CustomGuardError(p)));

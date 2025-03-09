import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_compare_equals_NativeUnion = _test_compare_equals(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)((a, b) => typia.compare.equals<NativeUnion>(a, b));

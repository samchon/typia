import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_compare_equals_NativeSimple = _test_compare_equals(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)((a, b) => typia.compare.equals<NativeSimple>(a, b));

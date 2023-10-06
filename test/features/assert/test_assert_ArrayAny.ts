import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assert_ArrayAny = _test_assert(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.assert<ArrayAny>(input));

import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assert_DynamicSimple = _test_assert(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)((input) => typia.assert<DynamicSimple>(input));

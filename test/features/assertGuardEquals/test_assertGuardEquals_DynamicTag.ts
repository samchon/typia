import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assertGuardEquals_DynamicTag = _test_assertGuardEquals(
    "DynamicTag",
)<DynamicTag>(DynamicTag)((input) =>
    typia.assertGuardEquals<DynamicTag>(input),
);

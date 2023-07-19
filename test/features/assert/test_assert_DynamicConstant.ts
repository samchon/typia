import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assert_DynamicConstant = _test_assert<DynamicConstant>(
    DynamicConstant,
)((input) => typia.assert(input));

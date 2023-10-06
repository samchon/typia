import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assert_DynamicTree = _test_assert("DynamicTree")<DynamicTree>(
    DynamicTree,
)((input) => typia.assert<DynamicTree>(input));

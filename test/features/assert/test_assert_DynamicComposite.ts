import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assert_DynamicComposite = _test_assert<DynamicComposite>(
    DynamicComposite,
)((input) => typia.assert(input));

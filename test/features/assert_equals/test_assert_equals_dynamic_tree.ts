import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_dynamic_tree = _test_assert_equals(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.assertEquals(input),
    false,
);

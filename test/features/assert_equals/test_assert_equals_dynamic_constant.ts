import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_dynamic_constant = _test_assert_equals(
    "dynamic constant",
    DynamicConstant.generate,
    (input) => TSON.assertEquals(input),
);

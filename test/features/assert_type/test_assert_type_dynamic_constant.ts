import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_dynamic_constant = _test_assert_type(
    "dynamic constant",
    DynamicConstant.generate,
    (input) => TSON.assertType(input),
    DynamicConstant.SPOILERS,
);

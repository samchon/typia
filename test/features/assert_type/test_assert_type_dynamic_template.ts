import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_dynamic_template = _test_assert_type(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.assertType(input),
    DynamicTemplate.SPOILERS,
);

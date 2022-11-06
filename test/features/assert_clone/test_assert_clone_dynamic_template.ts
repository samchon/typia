import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_dynamic_template = _test_assert_clone(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.assertClone(input),
    DynamicTemplate.SPOILERS,
);

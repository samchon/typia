import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_dynamic_template = _test_assert_stringify(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.assertStringify(input),
    DynamicTemplate.SPOILERS,
);

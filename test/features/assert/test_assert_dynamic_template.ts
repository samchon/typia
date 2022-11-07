import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_template = _test_assert(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.assert(input),
    DynamicTemplate.SPOILERS,
);

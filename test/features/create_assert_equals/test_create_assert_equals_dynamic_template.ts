import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_dynamic_template = _test_assert_equals(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createAssertEquals<DynamicTemplate>(),
);

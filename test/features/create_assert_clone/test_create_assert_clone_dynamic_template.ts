import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_dynamic_template = _test_assert_clone(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createAssertClone<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_dynamic_template = _test_assert_type(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createAssertType<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

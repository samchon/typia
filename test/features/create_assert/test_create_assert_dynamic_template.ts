import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_template = _test_assert(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createAssert<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

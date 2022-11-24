import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_dynamic_template =
    _test_assert_stringify(
        "dynamic template",
        DynamicTemplate.generate,
        TSON.createAssertStringify<DynamicTemplate>(),
        DynamicTemplate.SPOILERS,
    );

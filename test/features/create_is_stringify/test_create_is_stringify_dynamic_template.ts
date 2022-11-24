import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_dynamic_template = _test_is_stringify(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createIsStringify<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

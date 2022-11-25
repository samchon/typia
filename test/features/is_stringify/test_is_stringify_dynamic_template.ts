import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_dynamic_template = _test_is_stringify(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.isStringify(input),
    DynamicTemplate.SPOILERS,
);

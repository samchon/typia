import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_dynamic_template = _test_stringify(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.stringify(input),
);

import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_equals } from "./_test_equals";

export const test_equals_dynamic_template = _test_equals(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.equals(input),
);

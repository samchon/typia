import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is } from "./_test_is";

export const test_is_dynamic_template = _test_is(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.is(input),
    DynamicTemplate.SPOILERS,
);

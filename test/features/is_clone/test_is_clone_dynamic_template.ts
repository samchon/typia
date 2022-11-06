import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_dynamic_template = _test_is_clone(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.isClone(input),
    DynamicTemplate.SPOILERS,
);

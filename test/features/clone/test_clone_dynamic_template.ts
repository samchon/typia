import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_clone } from "./_test_clone";

export const test_clone_dynamic_template = _test_clone(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.clone(input),
);

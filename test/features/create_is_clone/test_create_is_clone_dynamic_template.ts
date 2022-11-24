import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_dynamic_template = _test_is_clone(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createIsClone<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

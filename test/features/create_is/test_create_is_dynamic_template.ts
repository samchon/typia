import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is } from "../internal/_test_is";

export const test_create_is_dynamic_template = _test_is(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createIs<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

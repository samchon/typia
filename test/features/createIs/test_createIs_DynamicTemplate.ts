import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicTemplate = _test_is(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createIs<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

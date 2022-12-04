import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicTemplate = _test_assertParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createAssertParse<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicTemplate = _test_isParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createIsParse<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

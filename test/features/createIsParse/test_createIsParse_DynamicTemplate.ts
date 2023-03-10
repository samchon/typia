import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createIsParse_DynamicTemplate = _test_isParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createIsParse<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

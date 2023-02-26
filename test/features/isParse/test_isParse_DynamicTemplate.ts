import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicTemplate = _test_isParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.isParse<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);

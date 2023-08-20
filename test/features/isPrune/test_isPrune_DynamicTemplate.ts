import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_isPrune_DynamicTemplate = _test_isPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.isPrune<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);

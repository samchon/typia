import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertPrune_DynamicTemplate = _test_assertPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assertPrune<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);

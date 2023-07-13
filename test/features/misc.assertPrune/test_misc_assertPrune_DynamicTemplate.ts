import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_assertPrune_DynamicTemplate = _test_misc_assertPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.misc.assertPrune(input),
    DynamicTemplate.SPOILERS,
);

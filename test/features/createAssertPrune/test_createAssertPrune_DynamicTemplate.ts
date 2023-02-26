import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertPrune_DynamicTemplate = _test_assertPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createAssertPrune<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

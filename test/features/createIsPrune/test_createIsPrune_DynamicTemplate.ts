import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createIsPrune_DynamicTemplate = _test_isPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createIsPrune<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);

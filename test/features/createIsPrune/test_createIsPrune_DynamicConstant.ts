import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createIsPrune_DynamicConstant = _test_isPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createIsPrune<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);

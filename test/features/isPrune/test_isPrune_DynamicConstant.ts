import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_DynamicConstant = _test_isPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.isPrune(input),
    DynamicConstant.SPOILERS,
);

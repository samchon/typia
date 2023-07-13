import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_isPrune_DynamicConstant = _test_misc_isPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.misc.isPrune(input),
    DynamicConstant.SPOILERS,
);

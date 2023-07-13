import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_assertClone_DynamicConstant = _test_misc_assertClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.misc.assertClone(input),
    DynamicConstant.SPOILERS,
);

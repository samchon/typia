import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertClone_DynamicConstant = _test_assertClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertClone<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);

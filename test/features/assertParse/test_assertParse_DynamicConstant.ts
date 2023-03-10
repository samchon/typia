import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertParse_DynamicConstant = _test_assertParse(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertParse<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);

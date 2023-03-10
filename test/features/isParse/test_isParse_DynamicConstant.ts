import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_isParse_DynamicConstant = _test_isParse(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.isParse<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);

import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicConstant = _test_isClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.isClone(input),
    DynamicConstant.SPOILERS,
);
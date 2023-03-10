import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_isClone_DynamicConstant = _test_isClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.isClone(input),
    DynamicConstant.SPOILERS,
);

import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createIsClone_DynamicConstant = _test_isClone(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createIsClone<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);

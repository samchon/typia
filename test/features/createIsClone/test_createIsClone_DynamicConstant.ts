import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_DynamicConstant = _test_isClone(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createIsClone<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);

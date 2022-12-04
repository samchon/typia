import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicConstant = _test_isParse(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createIsParse<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);

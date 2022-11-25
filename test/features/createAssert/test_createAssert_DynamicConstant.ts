import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicConstant = _test_assert(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createAssert<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
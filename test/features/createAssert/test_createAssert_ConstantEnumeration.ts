import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ConstantEnumeration = _test_assert(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createAssert<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
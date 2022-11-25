import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ConstantEnumeration = _test_assert(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => TSON.assert(input),
    ConstantEnumeration.SPOILERS,
);
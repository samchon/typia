import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ConstantAtomicWrapper = _test_assert(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.assert(input),
    ConstantAtomicWrapper.SPOILERS,
);

import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ConstantAtomicWrapper = _test_assertEquals(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.assertEquals(input),
);

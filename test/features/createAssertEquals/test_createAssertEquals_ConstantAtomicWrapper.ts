import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ConstantAtomicWrapper = _test_assertEquals(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    TSON.createAssertEquals<ConstantAtomicWrapper>(),
);

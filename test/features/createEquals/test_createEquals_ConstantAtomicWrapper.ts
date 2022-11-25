import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ConstantAtomicWrapper = _test_equals(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    TSON.createEquals<ConstantAtomicWrapper>(),
);

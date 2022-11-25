import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ConstantAtomicWrapper = _test_isStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.isStringify(input),
    ConstantAtomicWrapper.SPOILERS,
);

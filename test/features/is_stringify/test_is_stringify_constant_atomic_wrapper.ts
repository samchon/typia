import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_constant_atomic_wrapper = _test_is_stringify(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.isStringify(input),
    ConstantAtomicWrapper.SPOILERS,
);

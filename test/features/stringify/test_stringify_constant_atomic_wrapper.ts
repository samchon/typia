import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_constant_atomic_wrapper = _test_stringify(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate(),
    (input) => TSON.stringify(input),
);

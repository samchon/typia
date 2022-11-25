import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ConstantAtomicWrapper = _test_validateEquals(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.validateEquals(input),
);
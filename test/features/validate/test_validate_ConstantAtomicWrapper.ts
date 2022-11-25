import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ConstantAtomicWrapper = _test_validate(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.validate(input),
    ConstantAtomicWrapper.SPOILERS,
);

import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_isParse_ConstantAtomicWrapper = _test_isParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.isParse<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);

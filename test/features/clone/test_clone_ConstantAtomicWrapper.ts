import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_clone_ConstantAtomicWrapper = _test_clone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.clone<ConstantAtomicWrapper>(input),
);

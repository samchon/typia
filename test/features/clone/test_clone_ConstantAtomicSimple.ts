import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_clone_ConstantAtomicSimple = _test_clone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.clone<ConstantAtomicSimple>(input),
);

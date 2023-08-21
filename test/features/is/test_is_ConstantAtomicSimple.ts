import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_is_ConstantAtomicSimple = _test_is(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.is<ConstantAtomicSimple>(input),
);

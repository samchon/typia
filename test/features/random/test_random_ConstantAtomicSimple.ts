import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_random_ConstantAtomicSimple = _test_random(
    "ConstantAtomicSimple",
    () => typia.random<ConstantAtomicSimple>(),
    typia.createAssert<ConstantAtomicSimple>(),
);

import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_ConstantAtomicUnion = _test_random(
    "ConstantAtomicUnion",
    () => typia.random<ConstantAtomicUnion>(),
    typia.createAssert<typia.Primitive<ConstantAtomicUnion>>(),
);
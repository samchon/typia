import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createRandom_ConstantAtomicUnion = _test_random(
    "ConstantAtomicUnion",
    typia.createRandom<ConstantAtomicUnion>(),
    typia.createAssert<typia.Primitive<ConstantAtomicUnion>>(),
);

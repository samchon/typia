import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ConstantAtomicUnion = _test_random(
    "ConstantAtomicUnion",
    typia.createRandom<ConstantAtomicUnion>(),
    typia.createAssert<ConstantAtomicUnion>(),
);

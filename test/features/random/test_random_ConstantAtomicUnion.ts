import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_random_ConstantAtomicUnion = _test_random(
    "ConstantAtomicUnion",
    () => typia.random<ConstantAtomicUnion>(),
    typia.createAssert<ConstantAtomicUnion>(),
);

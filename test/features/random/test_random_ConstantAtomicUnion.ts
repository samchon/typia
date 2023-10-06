import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_random_ConstantAtomicUnion = _test_random("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion
)({
    random: () => typia.random<ConstantAtomicUnion>(),
    assert: typia.createAssert<ConstantAtomicUnion>(),
});

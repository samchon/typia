import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_random_ConstantAtomicSimple = _test_random("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple
)({
    random: () => typia.random<ConstantAtomicSimple>(),
    assert: typia.createAssert<ConstantAtomicSimple>(),
});

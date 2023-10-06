import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createRandom_DynamicSimple = _test_random("DynamicSimple")<DynamicSimple>(
    DynamicSimple
)({
    random: typia.createRandom<DynamicSimple>(),
    assert: typia.createAssert<DynamicSimple>(),
});

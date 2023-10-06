import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createRandom_DynamicConstant = _test_random("DynamicConstant")<DynamicConstant>(
    DynamicConstant
)({
    random: typia.createRandom<DynamicConstant>(),
    assert: typia.createAssert<DynamicConstant>(),
});

import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createRandom_DynamicUnion = _test_random("DynamicUnion")<DynamicUnion>(
    DynamicUnion
)({
    random: typia.createRandom<DynamicUnion>(),
    assert: typia.createAssert<DynamicUnion>(),
});

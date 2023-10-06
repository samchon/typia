import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { SetUnion } from "../../structures/SetUnion";

export const test_createRandom_SetUnion = _test_random("SetUnion")<SetUnion>(
    SetUnion
)({
    random: typia.createRandom<SetUnion>(),
    assert: typia.createAssert<SetUnion>(),
});

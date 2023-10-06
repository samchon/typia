import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { SetSimple } from "../../structures/SetSimple";

export const test_createRandom_SetSimple = _test_random("SetSimple")<SetSimple>(
    SetSimple
)({
    random: typia.createRandom<SetSimple>(),
    assert: typia.createAssert<SetSimple>(),
});

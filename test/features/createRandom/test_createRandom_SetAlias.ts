import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { SetAlias } from "../../structures/SetAlias";

export const test_createRandom_SetAlias = _test_random("SetAlias")<SetAlias>(
    SetAlias,
)({
    random: typia.createRandom<SetAlias>(),
    assert: typia.createAssert<SetAlias>(),
});

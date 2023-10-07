import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { SetUnion } from "../../structures/SetUnion";

export const test_random_SetUnion = _test_random("SetUnion")<SetUnion>(
    SetUnion,
)({
    random: () => typia.random<SetUnion>((SetUnion as any).RANDOM),
    assert: typia.createAssert<SetUnion>(),
});

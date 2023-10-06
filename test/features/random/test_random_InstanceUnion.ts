import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_random_InstanceUnion = _test_random(
    "InstanceUnion",
)<InstanceUnion>(InstanceUnion)({
    random: () => typia.random<InstanceUnion>(),
    assert: typia.createAssert<InstanceUnion>(),
});

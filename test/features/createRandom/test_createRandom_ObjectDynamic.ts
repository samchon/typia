import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createRandom_ObjectDynamic = _test_random(
    "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)({
    random: typia.createRandom<ObjectDynamic>(),
    assert: typia.createAssert<ObjectDynamic>(),
});

import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_random_ObjectInternal = _test_random(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    random: typia.createRandom<ObjectInternal>(),
    assert: typia.createAssert<ObjectInternal>(),
});

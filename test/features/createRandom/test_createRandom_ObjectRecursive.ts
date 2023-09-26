import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createRandom_ObjectRecursive = _test_random(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)({
    random: typia.createRandom<ObjectRecursive>(),
    assert: typia.createAssert<ObjectRecursive>(),
});

import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createRandom_ObjectHttpArray = _test_random(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
    random: typia.createRandom<ObjectHttpArray>(
        (ObjectHttpArray as any).RANDOM,
    ),
    assert: typia.createAssert<ObjectHttpArray>(),
});

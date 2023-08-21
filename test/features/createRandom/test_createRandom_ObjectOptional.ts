import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_random_ObjectOptional = _test_random(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    random: typia.createRandom<ObjectOptional>(),
    assert: typia.createAssert<ObjectOptional>(),
});

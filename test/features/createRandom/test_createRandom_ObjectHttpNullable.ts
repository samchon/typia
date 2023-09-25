import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createRandom_ObjectHttpNullable = _test_random(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
    random: typia.createRandom<ObjectHttpNullable>(),
    assert: typia.createAssert<ObjectHttpNullable>(),
});

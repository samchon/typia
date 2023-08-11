import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_random_ObjectJsonTag = _test_random<ObjectJsonTag>(
    ObjectJsonTag,
)({
    random: typia.createRandom<ObjectJsonTag>(),
    assert: typia.createAssert<ObjectJsonTag>(),
});

import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createRandom_ObjectHttpTypeTag = _test_random(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    random: typia.createRandom<ObjectHttpTypeTag>(),
    assert: typia.createAssert<ObjectHttpTypeTag>(),
});

import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createRandom_ObjectUnionDouble = _test_random("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble
)({
    random: typia.createRandom<ObjectUnionDouble>(),
    assert: typia.createAssert<ObjectUnionDouble>(),
});

import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createRandom_ObjectSimple = _test_random("ObjectSimple")<ObjectSimple>(
    ObjectSimple
)({
    random: typia.createRandom<ObjectSimple>(),
    assert: typia.createAssert<ObjectSimple>(),
});

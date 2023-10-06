import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_random_ObjectUndefined = _test_random("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined
)({
    random: () => typia.random<ObjectUndefined>(),
    assert: typia.createAssert<ObjectUndefined>(),
});

import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_random_ObjectTuple = _test_random("ObjectTuple")<ObjectTuple>(
    ObjectTuple
)({
    random: () => typia.random<ObjectTuple>(),
    assert: typia.createAssert<ObjectTuple>(),
});

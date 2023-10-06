import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_random_ObjectRecursive = _test_random("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive
)({
    random: () => typia.random<ObjectRecursive>(),
    assert: typia.createAssert<ObjectRecursive>(),
});

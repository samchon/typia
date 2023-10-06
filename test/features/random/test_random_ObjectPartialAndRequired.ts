import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_random_ObjectPartialAndRequired = _test_random("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)({
    random: () => typia.random<ObjectPartialAndRequired>(),
    assert: typia.createAssert<ObjectPartialAndRequired>(),
});

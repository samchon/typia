import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createEquals_ObjectPartialAndRequired = (): void => _test_equals(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.createEquals<ObjectPartialAndRequired>());

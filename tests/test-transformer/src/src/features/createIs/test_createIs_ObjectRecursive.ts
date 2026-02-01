import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createIs_ObjectRecursive = (): void => _test_is(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.createIs<ObjectRecursive>());

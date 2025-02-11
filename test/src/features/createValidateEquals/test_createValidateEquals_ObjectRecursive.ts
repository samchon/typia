import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createValidateEquals_ObjectRecursive = _test_validateEquals(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.createValidateEquals<ObjectRecursive>());

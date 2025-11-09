import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createValidate_ObjectRecursive = (): void => _test_validate(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.createValidate<ObjectRecursive>());

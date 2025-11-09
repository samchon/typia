import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_standardSchema_createValidate_ObjectRecursive = (): void => _test_standardSchema_validate(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.createValidate<ObjectRecursive>());

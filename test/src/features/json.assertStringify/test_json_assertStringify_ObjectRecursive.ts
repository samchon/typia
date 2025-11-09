import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectRecursive = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)((input) => typia.json.assertStringify<ObjectRecursive>(input));

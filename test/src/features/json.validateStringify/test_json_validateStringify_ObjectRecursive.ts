import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_validateStringify_ObjectRecursive = (): void =>
  _test_json_validateStringify("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) => typia.json.validateStringify<ObjectRecursive>(input));

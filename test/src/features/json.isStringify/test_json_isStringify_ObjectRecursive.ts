import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_isStringify_ObjectRecursive = (): void =>
  _test_json_isStringify("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    (input) => typia.json.isStringify<ObjectRecursive>(input),
  );

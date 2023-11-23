import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createIsStringify_ObjectRecursive =
  _test_json_isStringify("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    typia.json.createIsStringify<ObjectRecursive>(),
  );

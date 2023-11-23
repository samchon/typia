import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createAssertParse_ObjectRecursive =
  _test_json_assertParse("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    typia.json.createAssertParse<ObjectRecursive>(),
  );

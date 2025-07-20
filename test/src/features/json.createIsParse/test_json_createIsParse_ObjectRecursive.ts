import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createIsParse_ObjectRecursive = (): void =>
  _test_json_isParse("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    typia.json.createIsParse<ObjectRecursive>(),
  );

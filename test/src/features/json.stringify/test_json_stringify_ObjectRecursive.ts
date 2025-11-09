import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_stringify_ObjectRecursive = (): void =>
  _test_json_stringify("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    (input) => typia.json.stringify<ObjectRecursive>(input),
  );

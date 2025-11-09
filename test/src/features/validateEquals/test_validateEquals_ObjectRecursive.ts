import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_validateEquals_ObjectRecursive = (): void =>
  _test_validateEquals("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    (input) => typia.validateEquals<ObjectRecursive>(input),
  );

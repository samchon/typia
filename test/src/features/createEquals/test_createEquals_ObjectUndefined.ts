import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createEquals_ObjectUndefined = (): void =>
  _test_equals("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
    typia.createEquals<ObjectUndefined>(),
  );

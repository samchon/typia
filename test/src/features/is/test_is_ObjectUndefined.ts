import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_is_ObjectUndefined = (): void =>
  _test_is("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)((input) =>
    typia.is<ObjectUndefined>(input),
  );

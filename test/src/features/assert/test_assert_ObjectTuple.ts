import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assert_ObjectTuple = _test_assert(TypeGuardError)(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) => typia.assert<ObjectTuple>(input));

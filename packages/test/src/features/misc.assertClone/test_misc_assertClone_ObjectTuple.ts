import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_assertClone_ObjectTuple = _test_misc_assertClone(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) =>
  typia.misc.assertClone<ObjectTuple>(input),
);

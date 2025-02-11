import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_equals_ArraySimple = _test_equals("ArraySimple")<ArraySimple>(
  ArraySimple,
)((input) => typia.equals<ArraySimple>(input));

import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertEquals_ArraySimple = _test_assertEquals(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) => typia.assertEquals<ArraySimple>(input));

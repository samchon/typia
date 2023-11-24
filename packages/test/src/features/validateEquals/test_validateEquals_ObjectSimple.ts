import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_validateEquals_ObjectSimple = _test_validateEquals(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  typia.validateEquals<ObjectSimple>(input),
);

import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_equals_ObjectHttpNullable = _test_equals(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.equals<ObjectHttpNullable>(input),
);

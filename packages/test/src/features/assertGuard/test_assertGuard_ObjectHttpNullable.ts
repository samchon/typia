import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertGuard_ObjectHttpNullable = _test_assertGuard(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.assertGuard<ObjectHttpNullable>(input),
);

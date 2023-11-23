import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertGuard_ObjectHttpConstant = _test_assertGuard(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.assertGuard<ObjectHttpConstant>(input),
);

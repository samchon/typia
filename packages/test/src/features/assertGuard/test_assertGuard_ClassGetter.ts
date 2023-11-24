import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_assertGuard_ClassGetter = _test_assertGuard(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input) => typia.assertGuard<ClassGetter>(input));

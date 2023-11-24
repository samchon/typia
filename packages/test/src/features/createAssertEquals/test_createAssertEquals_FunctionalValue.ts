import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createAssertEquals_FunctionalValue = _test_assertEquals(
  "FunctionalValue",
)<FunctionalValue>(FunctionalValue)(
  typia.createAssertEquals<FunctionalValue>(),
);

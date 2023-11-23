import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assertEquals_FunctionalValue = _test_assertEquals(
  "FunctionalValue",
)<FunctionalValue>(FunctionalValue)((input) =>
  typia.assertEquals<FunctionalValue>(input),
);

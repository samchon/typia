import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createValidateEquals_FunctionalTuple = _test_validateEquals(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)(
  typia.createValidateEquals<FunctionalTuple>(),
);

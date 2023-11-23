import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_is_FunctionalTuple = _test_is(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.is<FunctionalTuple>(input),
);

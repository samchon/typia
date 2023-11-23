import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_is_FunctionalValueUnion = _test_is(
  "FunctionalValueUnion",
)<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
  typia.is<FunctionalValueUnion>(input),
);

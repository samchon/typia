import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_validate_FunctionalTuple = _test_validate(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.validate<FunctionalTuple>(input),
);

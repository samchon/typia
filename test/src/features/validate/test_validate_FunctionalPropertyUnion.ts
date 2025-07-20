import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_validate_FunctionalPropertyUnion = (): void =>
  _test_validate("FunctionalPropertyUnion")<FunctionalPropertyUnion>(
    FunctionalPropertyUnion,
  )((input) => typia.validate<FunctionalPropertyUnion>(input));

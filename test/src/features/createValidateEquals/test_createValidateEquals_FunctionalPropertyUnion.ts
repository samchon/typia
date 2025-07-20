import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createValidateEquals_FunctionalPropertyUnion = (): void =>
  _test_validateEquals("FunctionalPropertyUnion")<FunctionalPropertyUnion>(
    FunctionalPropertyUnion,
  )(typia.createValidateEquals<FunctionalPropertyUnion>());

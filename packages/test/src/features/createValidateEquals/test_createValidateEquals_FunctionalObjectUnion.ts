import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createValidateEquals_FunctionalObjectUnion =
  _test_validateEquals("FunctionalObjectUnion")<FunctionalObjectUnion>(
    FunctionalObjectUnion,
  )(typia.createValidateEquals<FunctionalObjectUnion>());

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createAssert_FunctionalProperty = (): void =>
  _test_assert(TypeGuardError)("FunctionalProperty")<FunctionalProperty>(
    FunctionalProperty,
  )(typia.createAssert<FunctionalProperty>());

import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagFormat = _test_assert(TypeGuardError)(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) => typia.assert<TypeTagFormat>(input));
